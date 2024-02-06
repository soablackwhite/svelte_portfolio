<script lang='ts'>
    export let angle: number;
    export let inc: number;
    export let d: number;
    export let ind: number;
    export let idx: number;
    export let cur: number; //current circle
    export let sz: number; //size of content
    export let custom: string;
    import { rescale } from "../scripts/functions";

    function generateTransform() { // circle form 
        if (custom == "label"){
            angle += (4*idx - 1)*inc;
            if ( idx == 1 ){ angle += 0.5*inc; }
            else if ( idx == 2 ){ angle += 1.25*inc; }
        }
        else{ angle = angle + idx*inc + parseInt(idx/4)*inc*ind;}
        return `rotate(${angle}deg) translateX(${d}rem)`;
    }

    function generateAlpha(){
        if (idx == cur)
        {
            return(`1`);
        }
        let alpha = Math.abs(idx - cur);
        alpha = rescale(alpha, 1, sz, 0.7, 0) - 0.4;
        return(String(alpha));
    }
   
</script>

<div class="tags {custom}" style=
"transform: {generateTransform()};
opacity: {generateAlpha()};"> 
    <slot> </slot>
</div>

<style>
    .icon-circle {
        text-align: center;
        left: calc(50% - 4rem);
        top: calc(50% - 1.5rem + var(--indent_ui));
        width: 8rem;
        text-align: right;
        font-size: 1.2rem;
        padding-bottom: 1.5rem;
    }
    .circle {
        left: calc(50% - 4rem);
        top: calc(50% - 1rem + var(--indent_ui));
        width: 8rem;
        text-align: right;
        font-size: 1.2rem;
        color: var(--white);
        text-shadow: 1px 1px 1px #000000;
        border-top: solid 1px var(--white);
        padding-bottom: 1.5rem;
        transition: opacity 0.13s ease-in-out, transform 0.33s, border-top 0.5s, top 0.33s;
    }
    .tags{
        position: fixed;
        z-index: 2;
        left: 43%;  
        top: calc(50% + var(--indent_ui));
        opacity : 1;
    }
    .tags a{
        all: unset;
        cursor: pointer;
        transition: font 0.17s!important;
    }
    .label {
        position: fixed;
        display: block;
        z-index: 2;
        left: calc(50% - 6.5rem);
        top: calc(50% - 1.5rem + var(--indent_ui));
        height: 2rem;
        width: 12rem;
        text-align: center;
        font-size: 1.5rem;
        color: var(--black);
        text-shadow: 1px 1px 6px #ffffff;
        padding-bottom: 1.5rem;
        transition: padding-left 0.3s ease-in-out, opacity 0.29s ease-in-out, transform 0.33s, border-top 0.5s, top 0.33s;
    }
</style>