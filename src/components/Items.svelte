<script lang='ts'>
    import { onMount } from 'svelte';
    import { updateTag } from "../scripts/functions";
    import { currentCircle } from "../stores";
    import Circle from "./Circle.svelte";
    import Typewriter from './Typewriter.svelte';
    import { transitioned } from "../stores";
    export let index:number = 0;
    export let scrollThreshold: number;
    let max:number = 3;
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
    let home_txt = [
        "welcome :)",
        "to navigate, use arrows ↑↓",
        "to navigate, scroll",
        "...feel free to adjust scrolling sensitivity to your liking in the bottom right corner!"
    ]
    let about_txt = [
        "hi i'm omar!",
        "i'm an NYU graduate.",
        "i'm a developer.",
        "i'm a designer.",
        "i like to play with data.",
        "i like to visualize code.",
        "my hobbies are reading, cooking, and running!",
    ]
    let tags: Tag[] = [
		{ id: 0, content: [``]},
		{ id: 1, content: [``]},
		{ id: 2, content: [`html`, `css`, `bootstrap`, `javascript`, `c`, `c++`, `node.js`, `flask`, `python`, `sql`, `r`, `stata`]},
		{ id: 3, content: [
            {src: `/media/icons/github.svg`, alt: `github icon`, link: `https://github.com/soablackwhite`},
            {src: `/media/icons/linkedin.svg`, alt: `linkedin icon`, link: `https://www.linkedin.com/in/omarouldali/`}, 
            {src: `/media/icons/twitter.svg`, alt: `twitter icon`, link: `https://twitter.com/noiseOmie`},
            {src: `/media/icons/email.svg`, alt: `mail icon`, link: `mailto:omar.ould.ali@nyu.edu`}
        ]},
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
                        transitioned.set(false);
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
            console.log(scrollThreshold);
            changeContent(-scrollThreshold);
        }
        if (e.key === 'ArrowDown' && document.activeElement === document.body) {
            console.log(scrollThreshold);
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
    {#if index === 0}
        <Typewriter texts={home_txt}/>
    {:else if index === 1}
        <Typewriter texts={about_txt}/>
    {/if}
    <!-- TEXT TAGS (not in the if block to ensure entry/exit animation)-->
    <div class="content">
        {#each tags[2].content as tag, i}
            <Circle idx={i} sz={tags[index].content.length - 1} custom="circle {(index === 2) ? "":"centered"}">
                {tag}
            </Circle>
        {/each}
    </div>
</div>
