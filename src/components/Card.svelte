<script lang="ts">
    //functionality
    export let title: string[];
    export let texts: string[];
    export let offset: number;
    export let label: string;
    let current = 0;
    import { coordinates, constellated, constellation_index, profile_index} from "../stores";
    //animations
    import { slide, fade } from "svelte/transition";
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
    const personal_txts = ["born and raised in the land of couscous and blessed weather!",
        "recently moved to the mecca of football, but i'm no messy so i'll settle for a job in tech",
        ""
    ]
    const education_txts = ["after leaving jeanne d'arc, i went to high school in al manbaa where i got my baccalauréat in sciences physiques",
        "while attending università bocconi, i took classes in political science and economics",
        "in 2018 I transferred to NYU in abu dhabi to study interactive media after I was offered a full scholarship."
    ]
    
    // let quadrants = []
    const quadrant = quadrants[offset];
    let x: number, y : number, x2: number, y2: number; //wobble variables
    $: x =  Math.round($coordinates[offset].x);
    $: y = Math.round($coordinates[offset].y);
    $: x2 = Math.random()*10 + Math.sign(x);
    $: y2 = -Math.random()*10 + Math.sign(y);
    
    function toggleConstellate(index: number) {
        if(offset ===1){
            profile_index.set(index);
        }
        else{
            constellated.set(true);
            constellation_index.set(index);
        }
        current = index;
    }

</script>
<div class="card {quadrant}" transition:fade|global={{delay: offset*100, duration:200, easing: cubicInOut}} style="top:{y}px !important; left: {x}px !important">
    <div class="dropdown">
        
        <ul class="dropdown-content" transition:slide|global={{delay: offset*100, duration:200, axis: "y", easing: cubicInOut}}>
            <div class="labelclass" transition:fade|global={{delay: offset*50, duration:200}} style="margin-top:{y2}px !important; margin-left:{x2}px !important">
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
    </div>
</div>


<style>
    .current{
        background-color: var(--white);
        color: var(--black);
    }
    .icon{
        width: 25px;
        height: auto;
        filter: none;
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