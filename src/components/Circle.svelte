<script lang='ts'>
    //VARIABLES
    import { rescale } from "../scripts/functions";
    import { currentItem } from "../stores";
    import { fade, slide } from "svelte/transition";
    export let idx: number;
    export let sz: number; //size of content
    export let custom: string;
    export let locking: boolean;
    let isLabel: string;
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
</script>

{#if custom === "label"}
    <div transition:slide|global class="tags {custom}" class:locking-label={locking} class:disappear style="transform: {generateTransform()}; opacity: {test};"> 
        <slot> </slot>
    </div>
{:else}
    <div transition:slide|global={{axis:"x"}} class="tags {custom} {(idx === $currentItem)?"selected":""}" class:disappear class:locking style="transform: {generateTransform()}; opacity: {test};"> 
        <span><slot name="letter"/></span><slot name="tag"></slot>
    </div>
{/if}
<!-- <div class="tags {custom} {isLabel}" class:disappear style="transform: {generateTransform()}; opacity: {test};"> 
    <slot> </slot>
</div> -->

<style>
    .selected{
        font-size: x-large !important;
        border-color: var(--white) !important;
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
        left: calc(50% - 4rem);
        top: calc(50% - 1rem);
        height: 2rem;
        width: 8rem;
        text-align: right;
        font-size: 1.2rem;
        color: var(--white);
        border-top: solid 3px var(--white);
        padding-bottom: 1.5rem;
        transition: font-size 0.2s;
    }
    .tags{
        position: absolute;
        z-index: 1;
        opacity : 1;
    }
    .label {
        position: absolute;
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
            width: 7rem;
            height: 2rem;
            text-align: right;
            border-top: none;
        }
        .label {
            left: calc(50% - 3.5rem);
            top: calc(50% - 1.5rem);
            height: 2rem;
            width: 7rem;
        }
        .menu{
            left: calc(50% + 3rem); 
            top: calc(50% - 4rem);
            width: 7rem;
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
            width: 8rem;
            height: 2rem;
            text-align: right;
            border-top: none;
        }
        .icon-circle {
            left: calc(70% - 2rem);
        }
        .label {
            left: calc(70% - 4rem);
            top: calc(50% - 1.5rem);
            height: 2rem;
            width: 8rem;
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
            position: absolute;
            display: block;
            left: calc(70% - 4rem);
            top: calc(52% - 1.5rem);
            height: 2rem;
            width: 8rem;
            text-align: right !important;
            padding-bottom: 1.5rem;
        }
    }
</style>