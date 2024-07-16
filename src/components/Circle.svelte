<script lang='ts'>
    //VARIABLES
    import { rescale } from "../scripts/functions";
    import { currentItem } from "../stores";
    import { fade, slide } from "svelte/transition";
    import { onMount, afterUpdate } from "svelte";
    import { parse } from "svelte/compiler";
    export let idx: number;
    export let sz: number; //size of content
    export let custom: string;
    export let locking: boolean;
    export let proficiency: number;
    let halfBorder: HTMLElement;
    let alpha:number;
    let disappear:boolean = false;
    $: test = generateAlpha($currentItem, idx, sz); //this is so that it updates with any change to cur, idx, and sz variables
    
    // circle form 
    function generateTransform() { 
        if (custom === "label"){
            return (`rotate(calc(var(--ang_start) + ${4*idx - 1}*var(--ang) + ${idx}*var(--ang)*var(--isindent))) translateX(var(--dist))`)
        }
        else {
            return (`rotate(calc(var(--ang_start) + ${idx}*var(--ang) + ${Math.floor(idx/4)}*var(--ang)*var(--isindent))) translateX(var(--dist))`)
        }
    }
    // decremental opacity
    function generateAlpha(cur:number, idx:number, sz:number){
        if (idx === cur){ alpha = 1;}
        else {
            if (custom === "label"){
                let thresh = Math.abs(cur - idx*4 - 1);
                disappear = (thresh < 3) ? false : true;
            }
            else { 
                alpha = Math.abs(idx - cur);
                alpha = rescale(alpha, 1, sz, 0.7, 0) - 0.4;
            }
        }
        return(alpha);
    }
    onMount(() => {
        proficiency /= 10;
        if (halfBorder) {
            let redElement = halfBorder.querySelector('.red') as HTMLElement;
            let blueElement = halfBorder.querySelector('.blue') as HTMLElement;
            redElement.style.width = `${(proficiency) * 100}%`;
            blueElement.style.width = `${(1 - proficiency) * 100}%`;
            blueElement.style.left = `${(proficiency) * 100}%`;
        }
    });
</script>

{#if custom === "label"}
    <div transition:slide|global class="tags {custom}" class:locking-label={locking} class:disappear style="transform: {generateTransform()}; opacity: {test};"> 
        <slot></slot>
    </div>
{:else}
    <div transition:slide class="tags half-border {custom} {(idx === $currentItem)?"selected":""}" bind:this={halfBorder} class:disappear class:locking style="transform: {generateTransform()}; opacity: {test};"> 
        <p><span><slot name="letter"></slot></span><slot name="tag"></slot></p>
        <div class="red"></div>
        <div class="blue"></div>
    </div>
{/if}

<style>
    .half-border .red, .half-border .blue {
        content: "";
        position: fixed;
        top: -5px;
        height: 4px;
    }
    .half-border .red {
        background-color: var(--white);
    }
    .half-border .blue {
        background-color: gray;
    }
    .selected{
        font-size: x-large !important;
    }
    .selected span{
        color: var(--black);
        padding-left: 2px !important;
        padding-right: 2px !important;
        background-color: var(--white);
    }
    .locking-label{
        transition: transform 0.3s, padding-left 0.23s, opacity 0.13s, border-top 0.5s, top 0.33s !important;
    }
    .locking{
        transition: transform 0.3s !important;
    }
    .disappear{
        padding-left: 15rem !important;
        opacity: 0 !important;
        transition: padding-left 0.33s, opacity 3s, border-top 0.5s, top 0.33s;
    }
    .circle {
        position: relative;
        left: calc(50% - 4rem);
        top: calc(50% - 1rem);
        height: 2rem;
        width: 8rem;
        text-align: right;
        font-size: large;
        color: var(--white);
        /* border-top: solid 3px var(--white); */
        padding-bottom: 1.5rem;
        transition: font-size 0.2s;
    }
    p{
        font: "Roboto Mono", sans-serif;
        font-weight: 300;
    }
    .tags{
        position: fixed;
        z-index: 1;
        opacity : 1;
    }
    .label {
        position: fixed;
        display: block;
        left: calc(50% - 6.5rem);
        top: calc(50% - 1.5rem);
        height: 2rem;
        width: 12rem;
        text-align: center;
        font-size: x-large;
        color: var(--black);
        background-color: var(--white);
        padding-bottom: 1.5rem;
        transition: padding-left 0.33s, opacity 0.23s, border-top 0.5s, top 0.33s;
    }
    @media (max-width: 576px) {
        .circle{
            left: calc(50% - 3.5rem);
            top: calc(50% - 1rem);
            width: 7.5rem;
            height: 2rem;
            text-align: right;
            border-top: none;
        }
        .half-border .red {
            display: none;
        }
        .half-border .blue {
            display: none;
        }
        .label {
            left: calc(50% - 3.5rem);
            top: calc(50% - 1.5rem);
            height: 2rem;
            width: 9rem;
        }
        .icon-circle {
            left: calc(50% - 1.5rem);
        }
    }
    @media (max-width: 400px) {
        .circle{
            top: calc(50% - 1rem);
            left: calc(70% - 4rem);
            font-size: 1.3rem;
            width: 9rem;
            height: 2rem;
            text-align: right;
            border-top: none;
        }
        .half-border .red {
            display: none;
        }
        .half-border .blue {
            display: none;
        }
        .icon-circle {
            left: calc(70% - 2rem);
        }
        .label {
            left: calc(70% - 4rem);
            top: calc(50% - 1.5rem);
            height: 2rem;
            width: 10rem;
        }
    }
    @media (max-width: 341px) {
        .circle{
            top: calc(52% - 1rem);
            left: calc(70% - 4rem);
            font-size: 1rem;
            width: 8rem;
            height: 2rem;
            text-align: right;
            border-top: none;
        }
        .icon-circle {
            left: calc(70% - 2rem);
        }
        .label{
            font-size: large;
            position: fixed;
            /* display: block; */
            left: calc(70% - 4rem);
            top: calc(52% - 1.5rem);
            height: 2rem;
            width: 8rem;
            text-align: right !important;
            padding-bottom: 1.5rem;
        }
    }
</style>
