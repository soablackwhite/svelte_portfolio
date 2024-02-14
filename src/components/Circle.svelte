<script lang='ts'>
    //VARIABLES
    import { rescale } from "../scripts/functions";
    import { currentCircle } from "../stores";
    import { onMount, tick} from 'svelte';
    export let idx: number;
    export let sz: number; //size of content
    export let custom: string;
    let alpha:number;
    let disappear:boolean = false;
    let cur: number;
	currentCircle.subscribe((value) => {
		cur = value;
	});
    $: test = generateAlpha(cur, idx, sz); //this is so that it updates with any change to cur, idx, and sz variables
    // circle form 
    function generateTransform() { 
        if (custom === "label"){
            return (`rotate(calc(var(--ang_start) + ${4*idx - 1}*var(--ang) + ${idx}*var(--ang)*var(--isindent))) translateX(var(--dist))`)
        }
        else if (custom === "icon-circle") {
            return (`rotate(calc(var(--ang_start) + ${idx}*var(--ang_img))) translateX(var(--dist_img))`)
        }
        else {
            return (`rotate(calc(var(--ang_start) + ${idx}*var(--ang) + ${Math.floor(idx/4)}*var(--ang)*var(--isindent))) translateX(var(--dist))`)
        }
    }
    // decremental opacity
    function generateAlpha(cur:number, idx:number, sz:number){
        if (idx === cur){ alpha = 1; }
        else {
            if (custom === "label"){
                let thresh = Math.abs(cur - idx*4 - 1);
                disappear = (thresh < 4) ? false : true;
            }
            else { 
                alpha = Math.abs(idx - cur);
                alpha = rescale(alpha, 1, sz, 0.7, 0) - 0.4;
            }
        }
        return(alpha);
    }
</script>

<div class="tags {custom}" class:disappear style="transform: {generateTransform()}; opacity: {test};"> 
    <slot> </slot>
</div>


<style>
    .centered{
        top: 50% !important;
        left: 50% !important;
        transform: rotate(0deg) translateX(0rem) !important;
        opacity: 0 !important;
    }
    .icon-circle {
        top: calc(50% - 1.5rem + var(--indent_ui));
        left: calc(50% - 2rem);
        border: none;
        text-align: center;
        transition: width 0.17s ease-in, opacity 0.13s ease-in-out, transform 0.33s, border-top 0.5s, top 0.33s;
    }
    .disappear{
        padding-left: 10rem;
        opacity: 0 !important;
    }
    .circle {
        left: calc(50% - 4rem);
        top: calc(50% - 1rem + var(--indent_ui));
        height: 2rem;
        width: 8rem;
        text-align: right;
        font-size: 1.2rem;
        color: var(--white);
        text-shadow: 1px 1px 1px #000000;
        border-top: solid 1.5px var(--white);
        padding-bottom: 1.5rem;
        transition: opacity 0.13s ease-in-out, transform 0.33s, border-top 0.5s, top 0.33s;
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
        top: calc(50% - 1.5rem + var(--indent_ui));
        height: 2rem;
        width: 12rem;
        text-align: center;
        font-size: x-large;
        color: var(--white);
        text-shadow: 2px 2px 6px #000000;
        padding-bottom: 1.5rem;
        transition: padding-left 0.3s ease-in-out, opacity 0.29s ease-in-out, transform 0.33s, border-top 0.5s, top 0.33s;
    }
    @media (max-width: 576px) {
        .circle{
            left: calc(50% - 3.5rem);
            top: calc(50% + var(--indent_ui) - 1rem);
            width: 7rem;
            height: 2rem;
            text-align: right;
            border-top: none;
        }
        .label {
            left: calc(50% - 3.5rem);
            top: calc(50% - 1.5rem + var(--indent_ui));
            height: 2rem;
            width: 7rem;
        }
        .menu{
            left: calc(50% + 3rem); 
            top: calc(50% + var(--indent_ui) - 4rem);
            width: 7rem;
        }
        .icon-circle {
            left: calc(50% - 1.5rem);
        }
    }
    @media (max-width: 400px) {
        .circle{
            top: calc(50% + var(--indent_ui) - 1rem);
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
            top: calc(50% - 1.5rem + var(--indent_ui));
            height: 2rem;
            width: 8rem;
        }
    }
    @media (max-width: 341px) {
        .circle{
            top: calc(50% + var(--indent_ui) - 1rem);
            left: calc(70% - 4rem);
            font-size: 1.1rem;
            width: 8rem;
            height: 2rem;
            text-align: right;
            border-top: none;
        }
        .icon-circle {
            left: calc(70% - 2rem);
        }
    }
</style>