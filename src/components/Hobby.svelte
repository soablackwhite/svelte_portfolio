<script lang="ts">
    //functionality
    import { coordinates, constellated } from "../stores";
    //animations
    import { slide, fade } from "svelte/transition";
    let hobbies = {
        "label" : "hobbies",
        "contents": ["teaching", "running", "reading", "cooking"]
    };
    let hobby_img = [
        '/media/animated/teacher.svg',
        '/media/animated/runner.svg',
        '/media/animated/reading.svg',
        '/media/animated/cook.svg'
    ]
    let current = 0;
    const offset = 2;
    let quadrants = ["q1", "q2", "q3"];
    let quadrant = quadrants[offset];
    // let quadrants = []
    let x: number, y : number, x2: number, y2: number; //wobble variables
    $: x =  Math.round($coordinates[offset].x);
    $: y = Math.round($coordinates[offset].y);
    $: x2 = Math.random()*10 + Math.sign(x);
    $: y2 = -Math.random()*10 + Math.sign(y);
    

    function handleMouseOver() {
        hoverStore.set(true);
    }
    function handleMouseOut() {
        hoverStore.set(false);
    }
    function changePic(idx: number){
        current = idx;
        console.log("Current index:", current, "Image source:", hobby_img[current]);
    }
     // Custom transition for sliding right
     function slideRight(node, { delay = 0, duration = 170 }) {
        return {
            delay,
            duration,
            css: t => `
                transform: translateX(${(1 - t) * -100}%);
                opacity: ${t};
            `
        };
    }

    // Custom transition for sliding left
    function slideLeft(node, { delay = 0, duration = 170 }) {
        return {
            delay,
            duration,
            css: t => `
                transform: rotate3d(0, 1, 0, ${(1 - t)*90}deg);
                opacity: ${t};
            `
        };
    }

    // Custom transition for sliding up
    function slideUp(node, { delay = 0, duration = 170 }) {
        return {
            delay,
            duration,
            css: t => `
                transform: translateY(${(1 - t) * 100}%);
                opacity: ${t};
            `
        };
    }

    // Custom transition for sliding down
    function slideDown(node, { delay = 0, duration = 170 }) {
        return {
            delay,
            duration,
            css: t => `
                transform: translateY(${(1 - t) * -100}%);
                opacity: ${t};
            `
        };
    }
</script>
<div class="card {quadrant}" transition:fade|global={{delay: offset*100, duration:170}} style="top:{y}px !important; left: {x}px !important">
    <div class="dropdown">
        <ul class="dropdown-content" transition:slide|global={{delay: offset*100, duration:170, axis: "y"}}>
            <div class="labelclass" transition:fade|global={{delay: offset*50, duration:170}} style="margin-top:{y2}px !important; margin-left:{x2}px !important">
                <span> {hobbies.label} </span>
            </div>
            {#each hobbies.contents as txt, i}
                <button class="{(current===i)?"current":""}" on:click={() => changePic(i)}>{txt}</button>
            {/each}
        </ul>
    </div>
</div>
<!-- <div class="image-container" transition:fade>
    {#if current === 0}
        <img alt="teaching media" id = "teach" transition:slideLeft src={hobby_img[0]}>
    {:else if current === 1}
        <img alt="running media" id = "run" transition:slideLeft src={hobby_img[1]}> 
    {:else if current === 2}
        <img alt="reading media" id = "read" transition:slideLeft src={hobby_img[2]}>
    {:else if current === 3}
        <img alt="cooking media" id = "cook" transition:slideLeft src={hobby_img[3]}>
    {/if}
</div> -->



<style>
    /* .image-container {
        position: absolute;
        top: calc(50%);
        left: 50%;
        height: 250px;
        width: 250px;
        transform: translate(-50%, -50%);
        border: solid 2px var(--white);
        border-radius: 50%;
        overflow: hidden;
        transition: transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out;
        z-index: 3;
        background-color: var(--black);
    }
    .image-container img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        width: auto;
    } */
    /* #teach{
        height: 160%;
        width:auto;
    } */
    .image-container img{
        position: absolute;
        z-index: -1;
        right: 0%;
        bottom: 0%;
        height: 70%;
    }
    #cook{
        height: 75%;
        bottom: -10%;
        right: -5%;
    }
    #teach{
        bottom: -10%;
        height: 90%;
    }
    #run{
        right: -10%;
    }
    #read{
        bottom: -3%;
        right: -5%;
    }
    .current{
        background-color: var(--white);
        color: var(--black);
    }
    button:hover{
        background-color: var(--white);
        color: var(--black);
    }
    button{
        all:unset;
        cursor: pointer; /* Add this line */
    }
    button:focus{
        background-color: var(--white);
        color: var(--black);
    }
    button{
        padding: 3px;
        margin: 2px;
    }
    .icon{
        width: 25px;
        height: auto;
        filter: none;
        /* margin-left: 3px; */
        /* margin-right: 10px; */
        filter: invert(calc(1 - var(--dark)));
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
        /* border-radius: 95px 155px 148px 103px / 48px 95px 130px 203px; */
        background-color: rgba(16, 16, 16, 255) !important;
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
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-content {
        display: block;
        z-index: 1;
    }
    ul{
        margin: 0px;
        padding: 20px;
    }
</style>