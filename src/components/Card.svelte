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
    import { cubicInOut, quintInOut} from 'svelte/easing';
    import { onMount, onDestroy} from "svelte";
    const svgs = [
        "/media/icons/mor.svg",
        "/media/icons/italyflag.svg",
        "/media/icons/uaeflag.svg",
        "/media/icons/usaflag.svg",
        "/media/icons/ukflag.svg"
    ]
    const personal_txts = [
    "28th of July, 1999, Omar was born. It's been a while so I can't recall much. But I do remember I had good times in primaire and collège Jeanne d'Arc, where I made close, lifelong friends. I got my high school Baccalauréat degree from Al Manbaa in Sciences Physiques. Life in Rabat was fun, but I was curious about what else was out there. In April 2017, I got a scholarship to study International Relations at Bocconi University, and decided to continue my studies in Italy.",
    "When I arrived in Milan, I was excited to study something I thought I’d be good at: social sciences. Academically I did pretty well, and Bocconi taught me a lot about markets, jobs, and money. But I wanted personal growth beyond practical knowledge, and also found myself missing mathematics and sciences. Political science has its share of problems to solve and topics to learn about, but I learned that I preferred numbers and logical puzzles.",
    "Sometime around Fall 2017, I received updates from a high school friend who was studying in the United Arab Emirates; New York University had a new campus in Abu Dhabi, and my friend was loving it there. Since I had already been thinking about transferring to a Liberal Arts school, I applied, visited campus, and got in. At NYUAD, I took classes from various departments, took part in student government and varsity teams, and got to know people and cultures from all over the world. In my second year I settled on majoring in Interactive Media, a project-centric field at the intersection of computer science, design, and digital communication.",
    "In Spring 2020 and Fall 2021, I went to the New York campus to take more technical classes in web development and game programming. During this time, I realized that I loved creating projects and tools that people can use and play around with. My classes involved many group projects, so I learned a lot about group dynamics and leadership. Things learned 2020-2021: making stuff feels great, making good stuff feels fantastic, and it’s okay to make concessions.",
    "After spending a year teaching in Morocco, I recently moved to London and I’m looking forward to the next chapter in my journey!"
];


    interface TransitionConfig {
        duration: number;
        [key: string]: any; //optionals
    }
    // transition
    function expandOut(node: HTMLElement, { duration, sign = 1 }: TransitionConfig) {
        return {
            duration,
            css: (t:number) => `
                transform: translate(${(1 - t) * 100 * sign}%, 0);
            `,
            easing: quintInOut,
        };
    }
    //scroll stuff
    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: "start"
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
                    profile_index.set(index);
                    constellated.set(true);
                    constellation_index.set(index);
                    current = index;
                }
            });
        }
        observer = new IntersectionObserver(handleIntersection, {
            threshold: .4
        })
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => observer.observe(section));
        return () => {
            if (observer) {
                observer.disconnect();
                observer = null;
            }
        };
    });

</script>


<div class="mapinfo" transition:fade>
    <div class="label" transition:slide|global={{delay: offset*100, duration:200, easing: cubicInOut}}> history </div>
    <div class="content" transition:slide|global={{delay: offset*100, duration:200, easing: cubicInOut}}>
        <div class="title"> <h2>{texts[current]} </h2></div>
        <div class="subtitle"> <h3> {title[current]} </h3> </div>
    </div>
</div>
<div class="steps" transition:scale|global={{duration: 150}}>
    {#each texts as txt, i}
        <button class="step {(i === current) ? "stepselected" : ""}" on:click={() => toggleConstellate(i)}></button>
    {/each}
</div>

<div class="centerall" transition:fade|global>
    <div class="text-container" transition:fade|global>
        <div class="text-content">
                {#each personal_txts as txt, i}
                    <div id={"section-" + i} class="section" in:expandOut|global={{duration: 200, sign: -1}} out:expandOut|global={{duration: 200, sign: -1}}>
                        <span><img class="icon" alt="personal-icon" src="{svgs[i]}"> </span>
                        {txt} 
                    </div>
                {/each}
        </div>
    </div>
</div>

<style>
    .centerall{
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
    }
    .stepselected{
        background-color: var(--white) !important;
    }
    .steps {
        position: fixed;
        left: 50%;
        top: 0%;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-100%, 70px) rotate(90deg);
    }
    .step {
        all:unset;
        cursor: pointer;
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: solid 1px var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--black);
        color: var(--white);
        margin: 0 5px;
        transition: all 0.23s;
    }
    .step:hover{
        background-color: var(--white);
    }
    .step:last-child::before {
        display: none;
    }
    /* SCROLLING TEXT */
    .text-content {
        font-size: large;
        color: lightgray;
        transition: top .6s, left .6s;
    }
    .text-container{
        position: absolute;
        left: 0%;
        top: 0%;
        width: 46%;
        display: flex;
        flex-flow: column wrap;
        background-color: rgba(0, 0, 0, 0.35);
        align-items: center;

    }
    .section {
        min-height: 100vh;
        line-height: 2em;
        padding: 3em 5vw 3em 5vw;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        /* text-align: center; */
        border-left: var(--white) solid 1px;
        border-right: var(--white) solid 1px;
        border-bottom: var(--white) solid 1px;
    }
    /* MAP STUFF */
    .content{
        width: 350px;
    }
    .mapinfo{
        position: fixed;
        top: 80px;
        left: 46%;
        width: 54vw;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        line-height: 90%;
    }
    .subtitle{
        margin: 5px;
    }
    .label{
        text-align: center;
        writing-mode: vertical-lr;
        text-orientation: mixed;
        padding: 0px 7px 0px 7px;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        margin-right: 20px;
        height: 128px;
        transform: rotate(180deg);
        color: var(--black);
        background-color: var(--white);
    }
    .icon{
        width: 75px;
        margin-bottom: 1em;
        height: auto;
        filter: none;
    }
    @media (max-width: 576px) {
        .mapinfo{
            position: fixed;
            width: 100%;
            top: -3px !important;
            left: 0rem;
            right: auto;
            padding: 0;
            margin: 0;
            z-index: 10;
            display: flex;
            align-items: center;
        }
        .label{
            margin: 0;
        }
        .content{
            background-color: var(--black);
            width: 100%;
            padding-left: 10px;
        }
        .text-container{
            top: calc(12rem + 127px);
            width: 100vw;
        }
        .steps{
            display: none;
        }
    }
    @media (max-width: 576px) {
    }
    @media (max-width: 400px) {
        .mapinfo{
            top: calc(0.8*12rem);
        }
        .content h2{
            font-size: 3.5em;
        }
    }
    @media (max-width: 341px) {
       
    }
</style>