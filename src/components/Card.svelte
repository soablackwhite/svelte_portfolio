<script lang="ts">
    //functionality
    export let title: string[];
    export let texts: string[];
    export let offset: number;
    export let label: string;
    import { coordinates } from "../stores";
    //animations
    import { slide } from "svelte/transition";
    import { quintOut, quintInOut } from 'svelte/easing';
    import { onMount } from "svelte";
    const svgs = [
        "/media/icons/leo.svg",
        "/media/icons/mor.svg",
        "/media/icons/uk.svg",
        "/media/icons/male.svg"
    ]
    let quadrants = ["q1", "q2", "q3"];
    // let quadrants = []
    let quadrant = quadrants[offset];
    console.log(offset, quadrant);

</script>
<div 
class="card {quadrant}" 
transition:slide|global={{duration:200, axis: "y", easing: quintInOut}}     
style="top:{Math.round($coordinates[offset].y)}px !important; left: {Math.round($coordinates[offset].x)}px !important">
    <div class="dropdown">
        <span class="labelclass">
            {label}
            <!-- ({Math.round($coordinates[offset].x)}, {Math.round($coordinates[offset].y)}) -->
        </span>
        <ul class="dropdown-content">
            {#each texts as txt, i}
                <li> {title[i]}{(title[i] === "") ? "" : ":" } {txt} 
                    {#if (offset === 0)}
                        <span> <img class="icon" alt="personal-icon" src="{svgs[i]}"> </span>
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
</div>


<style>
    .icon{
        width: 25px;
        height: auto;
        filter: none;
        margin-left: 7px;
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
        /* background-color: var(--black); */
        position: absolute;
        /* display: flex; */
        border: var(--white) solid 1px;
        padding: 5px;
        border-radius: 0px;
        z-index: -50 !important;
        background-color: rgba(255, 255, 255, 0) !important;
        transform: translate(-50%, -50%);
        transition: top .6s, left .6s;
        font-size: large;
    }
    .labelclass{
        background-color: var(--white);
        color: var(--black);
        display: inline-block;
    }
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-content {
        display: block;
        padding: 10px 20px;
        z-index: 1;
    }
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
    li{
        list-style-position: outside;
        /* line-height: 2rem !important; */
        list-style-type: none;
    }
    li:hover{
        background-color: var(--white);
        color: var(--black)
    }
    li:hover .icon{
        filter:invert();
    }
</style>