<script lang="ts">
    //functionality
    export let title: string[];
    export let texts: string[];
    export let offset: number;
    export let label: string;
    let current = 0;
    let test = texts[0];
    import { coordinates, constellated, constellation_index, profile_index} from "../stores";
    //animations
    import { slide, fade, scale } from "svelte/transition";
    import { cubicInOut } from 'svelte/easing';
    import { onMount } from "svelte";
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
    
    
    
    // let quadrants = []
    const quadrant = quadrants[offset];
    let x: number, y : number, x2: number, y2: number; //wobble variables
    $: x =  Math.round($coordinates[offset].x);
    $: y = Math.round($coordinates[offset].y);
    $: x2 = Math.random()*10 + Math.sign(x);
    $: y2 = -Math.random()*10 + Math.sign(y);

    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'center'  // Scroll to the center of the viewport
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
    let textContent: HTMLElement;
    function handleScroll(event) {
        if (textContent) {
            textContent.scrollTop += event.deltaY;
        }
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
            threshold: 1
        })
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => observer.observe(section));
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            if (observer) {
                observer.disconnect();
                observer = null;
            }
        };
    });

</script>
<!-- <div class="card {quadrant}" transition:fade|global={{delay: offset*100, duration:200, easing: cubicInOut}} style="top:{y}px !important; left: {x}px !important">
    <ul transition:slide|global={{delay: offset*100, duration:200, axis: "y", easing: cubicInOut}}>
        <div class="labelclass substitle" transition:fade|global={{delay: offset*50, duration:200}} style="margin-top:{y2}px !important; margin-left:{x2}px !important">
            <span> {label} </span>
        </div>
        {#each texts as txt, i}
            <li> 
                <button class="{(current===i)?"current":""}" on:click={() => toggleConstellate(i)}>
                    {title[i]}{(title[i] === "") ? "" : ":" } {txt} 
                    {#if (offset === 0)}
                        <span> <img class="icon" alt="personal-icon" src="{svgs[i]}"> </span>
                    {/if}
                </button>
            </li>
        {/each}
    </ul>
</div> -->

<div class="mapinfo" transition:fade>
    <div class="label" transition:slide|global={{delay: offset*100, duration:200, easing: cubicInOut}}> history </div>
    <div class="content" transition:slide|global={{delay: offset*100, duration:200, easing: cubicInOut}}>
        <div class="title"> {texts[current]} </div>
        <div class="subtitle"> {title[current]} </div>
    </div>
    <!-- <div class="steps">
        {#each texts as txt, i}
            <button class="step {(i===current)?"stepselected":""}" on:click={() => toggleConstellate(i)}></button>
        {/each}
    </div> -->
    
</div>


<div class="centerall" transition:fade|global>
    <div class="steps"  transition:scale|global>
        {#each texts as txt, i}
            <button class="step {(i === current) ? "stepselected" : ""}" on:click={() => toggleConstellate(i)}></button>
        {/each}
    </div>
    <div class="text-container"   transition:slide|global>
        <div class="text-content" bind:this={textContent} transition:slide|global={{delay: offset * 100, duration: 200, easing: cubicInOut}}>
                <!-- <span><img class="icon" alt="personal-icon" src="{svgs[current]}"> </span>
                {personal_txts[current]} -->
                {#each personal_txts as txt, i}
                    <div id={"section-" + i} class = "section">
                        <span><img class="icon" alt="personal-icon" src="{svgs[i]}"> </span>
                        {txt} 
                        <!-- <br> <br> <br> <br> -->
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
        position: absolute;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0%;
        top: 50%;
        transform: rotate(90deg);
    }
    .step {
        all:unset;
        cursor: pointer;
        position: relative;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: solid 1px var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        margin: 0 10px;
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
        width: 20px;
        height: 2px;
        border: solid 1px var(--white);
        transform: translateY(-50%);
    }
    .step:last-child::before {
        display: none;
    }
    .text-content {
        position: absolute;
        font-family: "Proxima Nova", sans-serif;
        color: var(--white);
        height: 35vh;
        transition: top .6s, left .6s;
        font-size: large;
        padding: 40px;
        -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 90%, transparent);
        mask-image: linear-gradient(to top, transparent, black 10%, black 90%, transparent);
        overflow-y: scroll; /* Ensure overflow is enabled */
    }
    .text-container{
        /* positioning */
        position: absolute;
        left: 10%;
        top: calc(50% + 0px);
        height: calc(35vh + 0px);
        width: 30vw;
        /* padding-top: 30px; */
        /* padding-bottom: 30px; */
        /* recenter */
        transform: translate(0, -50%);
        /* formatting */
        /* border: var(--white) solid 1px; */
        border-right: var(--white) solid 1px;
        border-left: var(--white) solid 1px;
        background-color: var(--black) !important;
    }
    .section {
        padding: 20px 0;
    }
    /* width */
    .text-content::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    .text-content::-webkit-scrollbar-track {
    background: var(--black);
    }

    /* Handle */
    .text-content::-webkit-scrollbar-thumb {
    background: var(--white);
    }

    /* Handle on hover */
    .text-content::-webkit-scrollbar-thumb:hover {
    background: gray;
    }

    .content{
        width: 350px;
        overflow: hidden;
    }
    .mapinfo{
        position: fixed;
        top: 4%;
        right: 15%;
        /* width: 20vw; */
        display: flex;
        align-items: center;
    }
    .title{
        /* margin-top: 25%; */
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
        width: 32px;
        height: auto;
        filter: none;
        transform: translate(0%, -10%);
        margin-right: 5px;
    }
    
    button{
        all:unset;
        cursor: pointer; /* Add this line */
    }
</style>