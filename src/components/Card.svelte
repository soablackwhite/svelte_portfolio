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
    
    function toggleConstellate(index: number) {
        profile_index.set(index);
        constellated.set(true);
        constellation_index.set(index);
        current = index;
    }

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
    <div class="steps">
        {#each texts as txt, i}
            <button class="step {(i===current)?"stepselected":""}" on:click={() => toggleConstellate(i)}></button>
        {/each}
    </div>
    <div class="text-content" transition:slide|global={{delay: offset*100, duration:200, easing: cubicInOut}}>
            
        {#each personal_txts as txt, i}
            <span> <img class="icon" alt="personal-icon" src="{svgs[i]}"> </span>
            {txt}
        {/each}
    </div>
</div>

<style>

@keyframes jelly {
    0% {
        height: 0%;
        background-color: white;
        opacity: 1;
    }
    30% {
        height: 30%;
        background-color: white;
        opacity: 0.7;
    }
    50% {
        height: 50%;
        background-color: white;
        opacity: 0.5;
    }
    65% {
        height: 65%;
        background-color: white;
        opacity: 0.3;
    }
    80% {
        height: 80%;
        background-color: white;
        opacity: 0.1;
    }
    100% {
        height: 100%;
        background-color: transparent;
        opacity: 0;
    }
}

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
        font-family: "Montserrat", sans-serif;
        top: 50%;
        left: 10%;
        width: 30vw;
        height: 20vw;
        color: var(--white);
        border: var(--white) solid 1px;
        border-radius: 0px;
        background-color: var(--black) !important;
        transition: top .6s, left .6s;
        font-size: large;
        padding: 20px;
        transform: translate(0%, -50%);
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
    .current{
        background-color: var(--white);
        color: var(--black);
    }
    .icon{
        width: 32px;
        height: auto;
        filter: none;
        transform: translate(0%, -10%);
        margin-right: 5px;
    }
    .q1{
        left: 10% !important;
        top: 25% !important;
    }
    .q2{
        left: 10% !important;
        top: 70% !important;
    }
    .q3{
        left: 70% !important;
        top: 75% !important;
    }
    .card{
        color: var(--white);
        position: absolute;
        border: var(--accent2) dashed 3px;
        border-bottom: var(--accent2) solid 2px;
        border-left: var(--accent2) solid 2px;
        border-radius: 0px;
        background-color: var(--black) !important;
        transform: translate(-50%, -50%);
        transition: top .6s, left .6s;
        font-size: large;
    }
    .labelclass{
        position: relative;
        font-family: "Montserrat", sans-serif;
        font-size: 25px;
        color: var(--white);
        padding-bottom: 10px;
        mix-blend-mode: difference; /* This makes the text change color */  
        transition: top 0.2s, left 0.2s, margin-left 1s, margin-top 1s!important;
    }
    ul{
        margin: 0px;
        padding: 20px;
    }
    button{
        all:unset;
        cursor: pointer; /* Add this line */
    }
    li{
        list-style-position: inside;
        list-style-type: none;
    }
    li:hover{
        background-color: var(--white);
        color: var(--black)
    }
    li:hover .icon{
        /* filter:invert(var(--dark)); */
    }
    li::marker {
        color: var(--white) !important;
    }
    li:hover::before {
        color: var(--black);
        /* padding-left: 10px !important; */
    }
</style>