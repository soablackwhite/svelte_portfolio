<script lang="ts">
    //functionality
    export let title: string[];
    export let texts: string[];
    export let offset: number;
    export let label: string;
    let current = 0;
    import { coordinates, constellated, constellation_index, profile_index} from "../stores";
    //animations
    import { slide, fade, scale } from "svelte/transition";
    import { cubicInOut } from 'svelte/easing';
    import { onMount, onDestroy} from "svelte";
    const svgs = [
        "/media/icons/mor.svg",
        "/media/icons/italyflag.svg",
        "/media/icons/uaeflag.svg",
        "/media/icons/usaflag.svg",
        "/media/icons/ukflag.svg"
    ]
    const quadrants = ["q1", "q2", "q3"];
    const personal_txts = [
        "Born and raised in Morocco, I went to school in Jeanne d'Arc and got my Baccalauréat in Sciences Physiques from Al Manbaa.",
        "After graduating from high school in Rabat, I moved to Italy to study political science and economics at Università Bocconi. During my classes there, I understood that I was more quantitatively inclined; I enjoyed the math and computer science seminars more than their social science counterparts.",
        "In August 2018, I decided to transfer to New York University Abu Dhabi, a satellite campus of NYU in the UAE. There, I took classes from various departments until I settled on majoring in Interactive Media, a project-centric field at the intersection of computer science, design, and communication.",
        "I did two semesters—Spring 2020 and Fall 2021—in the New York campus to take advanced classes in web development, and also to have fun pursuing my hobby in game design.",
        "Recently moved to London, and looking forward to the next chapter in my journey."
    ]
    
    let x: number, y : number; //wobble variables
    $: x =  Math.round($coordinates[offset].x);
    $: y = Math.round($coordinates[offset].y);

    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    function toggleConstellate(index: number) {
        scrollToSection("section-" + index);
        profile_index.set(index);
        constellated.set(true);
        constellation_index.set(index);
        current = index;
    }
    let observer: IntersectionObserver | null = null;

    onMount(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.id.replace("section-", ""));
                    toggleConstellate(index);
                }
            });
        }
        observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.9
        })
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => observer.observe(section));
        document.body.style.overflow = 'auto'; // or 'scroll', 'visible', etc.
        return () => {
            if (observer) {
                observer.disconnect();
                observer = null;
            }
        };
    });
    onDestroy(() => {
        document.body.style.overflow = 'hidden'; // Reset to default when the component is destroyed
    });

</script>

<div class="mapinfo" transition:fade>
    <div class="label" transition:slide|global={{delay: offset*100, duration:200, easing: cubicInOut}}> history </div>
    <div class="content" transition:slide|global={{delay: offset*100, duration:200, easing: cubicInOut}}>
        <div class="title"> {texts[current]} </div>
        <div class="subtitle"> {title[current]} </div>
    </div>
</div>


<div class="centerall" transition:fade|global>
    <div class="steps"  transition:scale|global>
        {#each texts as txt, i}
            <button class="step {(i === current) ? "stepselected" : ""}" on:click={() => toggleConstellate(i)}></button>
        {/each}
    </div>
    <div class="text-container" >
        <div class="text-content" >
                {#each personal_txts as txt, i}
                    <div id={"section-" + i} class="section" data-aos="fade-right">
                        <span><img class="icon" alt="personal-icon" src="{svgs[i]}"> </span>
                        {txt} 
                    </div>
                {/each}
        </div>
    </div>
</div>


<style>
    .centerall{
        display: flex;
        height: 100%;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
    .stepselected{
        background-color: var(--white) !important;
    }
    .steps {
        position: fixed;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0%;
        top: 50%;
        transform:  translate(calc(-50% + 20px), -0%) rotate(90deg) ;
    }
    .step {
        all:unset;
        cursor: pointer;
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: solid 1px var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        background-color: var(--black);
        font-weight: bold;
        margin: 0 17px;
        transition: all 0.13s;
    }
    .step:hover{
        background-color: var(--white);
    }
    .step::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        width: 35px;
        height: 2px;
        border: solid 1px var(--white);
        transform: translateY(-50%);
    }
    .step:last-child::before {
        display: none;
    }
    /* SCROLLING TEXT */
    .text-content {
        font-family: "Montserrat", sans-serif;
        font-size: x-large;
        color: lightgray;
        transition: top .6s, left .6s;
        /* height: 100vh; */
        /* padding: 40px; */
        /* /* -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 90%, transparent); */
        /* mask-image: linear-gradient(to top, transparent, black 10%, black 90%, transparent); */
    }
    .text-container{
        position: absolute;
        left: 0%;
        top: 0%;
        width: 50%;
        display: flex;
        flex-flow: column nowrap;
        background-color: rgba(255, 255, 255, 0.46);
        mask-image: linear-gradient(to top,  black 10%, transparent, transparent, black 90%);
        align-items: center;
        border-right: var(--white) solid 1px;
    }
    .section {
        height: 80vh;
        width: 30vw;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 1px;
    }
    /* width */
    .text-content::-webkit-scrollbar {
        width: 8px;
    }
    /* track */
    .text-content::-webkit-scrollbar-track {
        background: var(--black);
    }
    /* handle */
    .text-content::-webkit-scrollbar-thumb {
        background: var(--white);
    }
    /* handle on hover */
    .text-content::-webkit-scrollbar-thumb:hover {
        background: gray;
    }
    /* MAP STUFF */
    .content{
        width: 350px;
    }
    .mapinfo{
        position: fixed;
        top: 4%;
        right: 15%;
        display: flex;
        align-items: center;
    }
    .title{
        font-family: "Montserrat", sans-serif;
        font-weight: 400 !important;
        font-size: 64px;
        line-height: 90%;
    }
    .subtitle{
        font-family: "Montserrat", sans-serif;
        font-size: 28px;
        font-weight: 200 !important;
        margin: 5px;
    }
    .label{
        text-align: center;
        writing-mode: vertical-lr;
        text-orientation: mixed;
        padding: 0px 7px 0px 7px;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        margin: 20px;
        height: 127px;
        transform: rotate(180deg);
        color: var(--black);
        background-color: var(--white);
    }
    .icon{
        width: 75px;
        margin: 20px;
        height: auto;
        filter: none;
    }
</style>