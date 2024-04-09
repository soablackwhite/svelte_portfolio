<script lang='ts'>
    import { onMount } from 'svelte';
    import { updateTag, lockTag, get_css_var, clamp} from "../scripts/functions";
    import { currentItem } from "../stores";
    import { delta } from "../stores";
    import Typewriter from './Typewriter.svelte';
    import Circle from './Circle.svelte';
    export let index:number = 0;
    export let scrollThreshold: number;
    let locking = true; 
    let max = 3;
    let maxcur = 11;
    let past = 0;
    let accumulatedDelta:number = 0;
    let resetThreshold: number;
    let rt = document.querySelector(':root') as HTMLElement;
    let labels = ['FRONTEND', 'BACKEND', 'DATA'];
    type ContentItem = string | { src: string; alt: string; link: string; };
    interface Tag {
        id: number;
        content: ContentItem[];
    }
    let cur: number;
    // $:console.log(cur);
    let d: number;
    currentItem.subscribe((value) => {
        cur = value;
    });
    delta.subscribe((value) => {
        d = value
    });
    let home_txt = [
        "welcome :)",
        "to navigate, use arrows ↑↓",
        "to navigate, scroll!",
        "...feel free to adjust scrolling sensitivity to your liking in the bottom right corner!"
    ]
    let about_txt = [
        "hi i'm omar!",
        "i'm an NYU graduate.",
        "i'm a developer.",
        "i'm a UX designer.",
        "i like solving problems with code.",
        "i like visualizing code.",
        "my hobbies are reading, cooking, and running!",
    ]
    let tags: Tag[] = [
		{ id: 0, content: [``]},
		{ id: 1, content: [``]},
		{ id: 2, content: [`react`, `svelte`, `bootstrap`, `javascript`, `c`, `c++`, `node.js`, `flask`, `python`, `sql`, `r`, `stata`]},
		{ id: 3, content: [
            {src: `/media/icons/github.svg`, alt: `github icon`, link: `https://github.com/soablackwhite`},
            {src: `/media/icons/linkedin.svg`, alt: `linkedin icon`, link: `https://www.linkedin.com/in/omarouldali/`}, 
            {src: `/media/icons/twitter.svg`, alt: `twitter icon`, link: `https://twitter.com/noiseOmie`},
            {src: `/media/icons/email.svg`, alt: `mail icon`, link: `mailto:omar.ould.ali@nyu.edu`}
        ]},
	];
    
    function changeContent(increment: number, keyboard: boolean) {
        const isBodyScrollable = document.body.scrollHeight > window.innerHeight;
        const isAtPageTop = window.scrollY === 0;
        const isAtPageBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight;
        //only if the page is !scrollable || if scrollable but user is at either extreme
        if (!isBodyScrollable || isAtPageTop || isAtPageBottom){
            accumulatedDelta += increment;
            //____________________________________INCREMENT/DECREMENT INDEX KEYBOARD______________________________________________
            if( keyboard ){
                if (index != 2){
                    index = clamp(index + Math.sign(increment), 0, max);
                    increment = 0;
                }
                else{
                    index = (increment < 0 && cur === 0 || increment > 0 && cur === maxcur) ? clamp(index + Math.sign(increment), 0, max) : index;
                }
            }
            //______________________________________INCREMENT/DECREMENT INDEX WHEEL_______________________________________________
            else if (Math.abs(accumulatedDelta) >= scrollThreshold) {
                if (increment > 0 && (index != 2 || cur === maxcur)) {
                    //go next, reset start on 0
                    if(index < max) {
                        // index ++;
                        currentItem.set(0);
                    }
                    //if last, stick to last
                    else {
                        currentItem.set(tags[index].content.length - 1);
                    }
                }
                else if (increment < 0 && (index != 2 || cur === 0)) {
                    //go prv, reset start on last
                    if(index > 0) {
                        // index --;
                        currentItem.set(tags[index].content.length - 1);
                    }
                    //if first, stick to first
                    else {
                        currentItem.set(0);
                    }
                }
                //add second about part
                accumulatedDelta = 0;
            }
            //____________________________________INCREMENT/DECREMENT CURRENT TAG______________________________________________
            if(index === 2){
                let dir = (accumulatedDelta > 0) ? 1 : -1;
                let arr = updateTag(index, increment, dir, rt, past);
                past = arr[0]
                currentItem.set(arr[1]);
                delta.set(past);
            }
        }
    }
    //___________________________________SCROLL KEYBOARD______________________________________________
    function wheelScroll(e: WheelEvent){
        locking = false;
        changeContent(e.deltaY/5, false);
        clearTimeout(resetThreshold);
        resetThreshold = setTimeout(function () {
            accumulatedDelta = 0;
            locking = true;
            let arr = lockTag(past, -1, rt); // 0 is for current value and 1 is for current scroll value
            past = arr[0];
            currentItem.set(arr[1]);
        }, 100); // adjusting the time before the threshold resets
    }
    //___________________________________UP/DOWN KEYBOARD______________________________________________
    function arrowScroll(e: KeyboardEvent){
        locking = true;
        if (document.activeElement === document.body && (e.key === 'ArrowDown' || e.key === 'ArrowUp')){
            let thresh = parseInt(get_css_var('--ang'));
            let sign = (e.key === "ArrowDown") ? -1 : 1;
            changeContent(sign*thresh, true);
            let arr = lockTag(past, sign, rt); // 0 is for current value and 1 is for current scroll value
            past = arr[0];
            currentItem.set(arr[1]);
            delta.set(past);
        }
    }
    onMount (() => {
        updateTag(index, cur, -1, rt, past);
        window.addEventListener("wheel", wheelScroll);
        window.addEventListener("keydown", arrowScroll);
        return () => {
            window.removeEventListener('keydown', arrowScroll);
            window.removeEventListener('wheel', wheelScroll);
        };
    })
</script>

<div id="wheel">
    <!-- TYPEWRITER -->
    {#if index === 0}
        <Typewriter texts={home_txt}/>
    {:else if index === 1}
        <Typewriter texts={about_txt}/>
    {:else if index === 2}
        <!-- LABELS -->
        <div>
            {#each labels as label, i}
                <Circle idx={i} sz={labels[index].length - 1} custom="label" locking={locking}>
                    {label} 
                </Circle>
            {/each}
        </div>
        <!-- TAGS -->
        <div class="content">
            {#each tags[2].content as tag, i}
                <div>
                    <Circle locking={locking} idx={i} sz={tags[index].content.length - 1} custom="circle centered">
                        {tag}
                    </Circle>
                </div>
            {/each}
        </div>
    {/if}
</div>
