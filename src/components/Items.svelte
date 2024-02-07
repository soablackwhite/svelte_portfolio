<script lang='ts'>
    import { onMount, onDestroy } from 'svelte';
    import { updateTag } from "../scripts/functions";
    import { currentCircle } from "../stores";
    import Circle from "./Circle.svelte";
    export let index:number = 0;
    export let scrollThreshold: number;
    let max:number = 4;
    let accumulatedDelta:number = 0;
    let resetThreshold;
    let rt = document.querySelector(':root') as HTMLElement;
    let labels = ['FRONTEND', 'BACKEND', 'DATA'];
    
    type ContentItem = string | { src: string; alt: string; link: string; };
    interface Tag {
        id: number;
        content: ContentItem[];
    }

    let cur: number;
    currentCircle.subscribe((value) => {
        cur = value;
    });

    let tags: Tag[] = [
		{ id: 0, content: [`Hi I'm Omar!`, `Scroll to know more!`, `scroll for more`]},
		{ id: 1, content: [`b. 1999`, `rabat/dubai`, `nyu '22`, `developer`]},
		{ id: 2, content: [`html`, `css`, `bootstrap`, `javascript`, `c`, `c++`, `node.js`, `flask`, `python`, `sql`, `r`, `stata`]},
		{ id: 3, content: [
            {src: `/media/icons/github.svg`, alt: `github icon`, link: `https://github.com/soablackwhite`},
            {src: `/media/icons/linkedin.svg`, alt: `linkedin icon`, link: `https://www.linkedin.com/in/omarouldali/`}, 
            {src: `/media/icons/twitter.svg`, alt: `twitter icon`, link: `https://twitter.com/noiseOmie`},
            {src: `/media/icons/email.svg`, alt: `mail icon`, link: `mailto:omar.ould.ali@nyu.edu`}
        ]},
        { id: 4, content: [`html`, `css`, `bootstrap`, `javascript`, `c`, `c++`, `node.js`, `flask`, `python`, `sql`, `r`, `stata`]}
	];
    
    function changeContent(increment: number) {
        accumulatedDelta += increment;
        //____________________________________INCREMENT/DECREMENT INDEX______________________________________________
        if (Math.abs(accumulatedDelta) >= scrollThreshold) {
            if (accumulatedDelta > 0) {
                currentCircle.update((n) => n + 1);
                if(cur > tags[index].content.length - 1){
                    //go next, reset start on 0
                    if(index < max) {
                        index ++;
                        currentCircle.set(0);
                    }
                    //if last, stick to last
                    else {
                        currentCircle.set(tags[index].content.length - 1);
                    }
                }
            }
            else if (accumulatedDelta < 0) {
                currentCircle.update((n) => n - 1);
                if(cur < 0){
                    //go prv, reset start on last
                    if(index > 0) {
                        index --;
                        currentCircle.set(tags[index].content.length - 1);
                    }
                    //if first, stick to first
                    else {
                        currentCircle.set(0);
                    }
                }
            }
            updateTag(index, cur, rt);
            //add second about part
            accumulatedDelta = 0;
        }
    }
    //___________________________________SCROLL KEYBOARD______________________________________________
    window.addEventListener("wheel", function (e) {
        changeContent(e.deltaY);
        clearTimeout(resetThreshold);
        resetThreshold = setTimeout(function () {
            accumulatedDelta = 0;
        }, 100); // Adjust the time before the threshold resets
    });
    //___________________________________UP/DOWN KEYBOARD______________________________________________
    window.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp' && document.activeElement === document.body) {
            changeContent(-scrollThreshold);
        }
        if (e.key === 'ArrowDown' && document.activeElement === document.body) {
            changeContent(scrollThreshold);
        }
    });
    onMount (() => {
        updateTag(index, cur, rt);
    })
</script>

<div id="wheel">
    <!-- LABELS -->
    {#if index === 2}
        <div>
            {#each labels as label, i}
                <Circle idx={i} sz={labels[index].length - 1} custom="label"> 
                    {label} 
                </Circle>
            {/each}
        </div>
    {/if}
    <!-- LINK TAGS -->
    {#if index === 3}
        <div id="content-3" class="content">
            {#each tags[index].content as tag, i}
                <Circle idx={i} sz={tags[index].content.length - 1} custom="icon-circle">
                    <a href={tag.link} target="_blank" rel="noreferrer nofollow"><img alt={tag.alt} src={tag.src}></a>
                </Circle>
            {/each}
        </div>
    {:else}
    <!-- TEXT TAGS -->
        <div class="content">
            {#each tags[index].content as tag, i}
                <Circle idx={i} sz={tags[index].content.length - 1} custom="circle">
                    {tag}
                </Circle>
            {/each}
        </div>
    {/if}
</div>

<style>
    a {
        all: unset;
        cursor: pointer;
        transition: font 0.17s !important;
    }
    #content-3 img:hover{
        background-color: rgb(0,0,0);
        border-radius: 50%;
    }
    #content-3 img{
        filter: invert(1);
        width: 4rem;
        transition: width 0.17s ease-in;
    }

    @media (max-width: 576px) {
        #content-3 img{
            width: 2.5rem;
        }
    }
    @media (max-width: 400) {
        #content-3 img{
            width: 4rem;
        }
    }
    @media (max-width: 341) {
        #content-3 img{
            width: 3.5rem;
        }
    }
</style>