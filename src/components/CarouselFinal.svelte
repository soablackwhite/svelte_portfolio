<script lang="ts">
    import { onMount } from "svelte";
    import { contents, get_css_var } from "../scripts/functions";
    import { currentItem } from "../stores";
    import { fade } from "svelte/transition";
    import { quintOut } from "svelte/easing";   
    import LogoProjects from "./LogoProjects.svelte";
    import Documentation from "./Documentation.svelte"; 
    //mobile detection
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    $: isMobile = innerWidth < 765;
    let logo: HTMLElement;
    let scale: number; //logo scale
    let indent: number; //the margins of logo
    let baseHeight: number; //base height of logo
    let logoHeight:number; //computed logo height
    let threshold:number; //threshold required by scroll to push out logo
    const boxSize = 300;
    //data and contents
    const max = contents.length - 1; //nbr of tbnails minus 1
    let data = contents[$currentItem] || {};
    $: data = contents[$currentItem] || {};
    $: ({ alt, title, category, tech, description, media } = data || {});

    //random array for length
    const length = Array.from({length: max}, (_, i) => i); //temporary
    //scroll stuff
    let scrollPos = 0;
    let lastScrollDelta = 0;
    //documentation stuff
    let docmode = false;
    let carousel: HTMLElement;
    let documentation: HTMLElement;

    //scroll stuff
    let isScrolling = false;
    function updateCurrentItem(scrollPos: number) {
        let closestIndex = max - Math.round(scrollPos/boxSize);
        //update to closest
        currentItem.set(closestIndex);
        console.log(closestIndex);
    }
    function handleScroll(event) {
        if(docmode){
            return
        }
        const maxScrollPos = max * boxSize; // max scroll position
        const newScrollPos = scrollPos + event.deltaY;
        //clamp scrollPos
        if (newScrollPos < 0) {
            scrollPos = 0;
        } else if (newScrollPos > maxScrollPos) {
            scrollPos = maxScrollPos;
        } else {
            scrollPos = newScrollPos;
        }
        //requestAnimationFrame for smoother scroll stop
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(() => {
                document.querySelector('.squares').style.transform = `translateY( calc(50vh - 150px - ${scrollPos}px) )`;
                document.querySelector('.texts').style.transform = `translateY( calc(-100% + 50vh + 150px + ${scrollPos}px) )`;
                isScrolling = false;
                updateCurrentItem(scrollPos);
                // when the scroll distance is more than the amount of empty space
                let diff = threshold - scrollPos;
                if(diff > 0 && scrollPos < threshold){
                    diff = 0;
                    logo.style.transform = `translateY(${diff}px)`;
                }
                else if(scrollPos > threshold){
                    logo.style.transform = `translateY(${diff}px)`;
                }
            });
        }
        lastScrollDelta = event.deltaY;
    }
    onMount( () => {
        //for pushing out
        scale = parseFloat(get_css_var("--scale"));
        indent = (isMobile) ? parseFloat(get_css_var("--translate-y"))*16 : parseFloat(get_css_var("--translate-x"))*16; //16 to convert from rem to px
        baseHeight = (isMobile) ? 128 : 64;
        logoHeight = scale * baseHeight + indent;
        threshold = innerHeight/2 - 150 - logoHeight;
        //scroll
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        }
    })
    //BUTTONS
    function expandOut(node: HTMLElement, { duration, sign = 1 }: TransitionConfig) {
        return {
            duration,
            css: (t:number) => `
                transform: translate(-50%, ${ sign * (50 - (1 - t) * 100)}%);
                opacity: ${2*t/3};
                height: 60%;
            `,
            easing: quintOut,
        };
    }
    function showDoc() {
        docmode = true;
        documentation.style.bottom = '2px'; //2px to hide border
    }
    function hideDoc() {
        docmode = false;
        documentation.style.bottom = '100%';
    }
</script>

<div id="logo" bind:this={logo}> <LogoProjects> </LogoProjects> </div>
<div class="container" bind:this={carousel}>
    <!-- THUMBNAILS -->
    <div on:click={showDoc} class="squares"> 
        {#each contents as {title, thumbnail:{src, type}, alt, category, tech}, i}
            <button class="square"> 
                {#if type === "video"}
                    <video muted loop
                        class="thumbnail {(i===$currentItem)?"current":""}" style="float:right; right:0rem">
                        <source src={src} type="video/mp4"> your browser does not support the video tag.
                    </video>
                {:else }
                    <img class="{(i===$currentItem)?"current":""}" alt={alt} src={src}>
                {/if}
            </button>
        {/each}
    </div>
    <!-- TITLES -->
    <div class="texts">
        {#each contents as {title, thumbnail:{src, type}, alt, category, tech}, i}
            <div class="{($currentItem === i) ? "current":""} title"> <h1> {title} </h1> </div>
        {/each}
    </div>
</div>
<!-- documentation -->
<div class="documentation" bind:this={documentation}>
    <Documentation data={data}/>
</div>
<button id="docButton" on:click={showDoc}> click me </button>

<style>
    #logo{
        /* display: none; */
        position: absolute;
        z-index: 3;
        left: 0;
        top: 0;
    }
    #docButton{
        all:unset;
        cursor: pointer;
        position: fixed;
        bottom: 0%;
        right: 0%;
        margin: 12px;
        padding: 8px;
        background-color: white;
        color: black;
    }
    .current{
        background-color: var(--white);
        color: var(--black);
        transition: all .12s;
    }
    .documentation {
        position: absolute;
        z-index: 4;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        border-top: var(--white) 2px solid;
        background-color: var(--black);
        color: white;
        transition: bottom 0.37s ease;
    }
    .container {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-flow: row nowrap;
        width: 50vw;
    }

    .squares, .texts {
        flex: 1;
    }

    .squares{
        transform: translate(0%, calc(50vh - 150px));
        display: flex;
        flex-direction: column-reverse;
    }
    .texts{ 
        transform: translate(0%, calc(-100% + 50vh + 150px));
    }
    button{
        all: unset;
        cursor: pointer;
    }
    .square {
        width: 300px;
        height: 300px;
        overflow: hidden;
        outline: 1px solid white;
    }
    
    .square video, img{
        width: 300px;
        height: 300px;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 300px;
        width: calc(50vw - 210px);
        word-break: break-word;
        text-wrap: wrap;
        border: 1px solid var(--white);
        font-size: 12px;
    }
    /* DOCUMENTATION BUTTONS */
    .isMobile{
        display: none;
    }
    .hidden{
        position: absolute;
        width: 100%;
        height: 100%;
        left:0;
        top: 0;
        overflow: hidden !important;
    }
</style>