<script lang="ts">
    export let index: number;
    import { fade, slide, scale, fly, blur} from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    import { onMount, tick } from "svelte";
    import { contents } from "../scripts/functions";
    import { transitioned } from "../stores";
    import Skeleton from './Skeleton.svelte';
    let t: boolean; //transitioned variable
    $: page = 0;
    $: mediaElements = document.querySelectorAll('.media_container');
    let delay = 60;
    let magic = 345;
    transitioned.subscribe((value) => {
        t = value;
    });
    let documentation: boolean = false;
    let contentLoaded = false; // Assuming you fetch or determine content readiness somehow
    // Simulating content loading
    onMount(() => {
        checkLoaded()
    });
    async function checkLoaded(){
        await tick();
        mediaElements = document.querySelectorAll('.media_container');
        // Correcting for TypeScript: Specifying 'void' as the type argument for Promise
        const mediaPromises: Promise<void>[] = Array.from(mediaElements).map((media: Element) => {
            return new Promise<void>((resolve) => {
                if (media.tagName === 'VIDEO') {
                    media.addEventListener('loadeddata', () => resolve(), { once: true });
                } 
                else if ((media as HTMLImageElement).complete) {
                    resolve();
                } else {
                    media.addEventListener('load', () => resolve(), { once: true });
                }
            });
        })
        Promise.all(mediaPromises).then(() => {
            contentLoaded = true;
            console.log('All media elements are loaded');
        });
        console.log(mediaElements);
    }
</script>

{#if (index===3 && t)}
    <div class="frame" transition:scale>
        <!-- for each element in gallery, create thumbnail. only show if not in docu mode-->
        {#if (!documentation)}
            {#each contents as content, i}
                <button class="gallery-item" 
                in:scale|global = {{ duration: 125, delay: magic + i * delay, easing:quintOut}}  
                out:slide|global = {{ duration: 300, easing:quintOut}}
                on:click={()=>{documentation = true; page = i; checkLoaded()}}>
                    {#if content.video}
                        <video transition autoplay="autoplay" muted loop preload="metadata" onmouseover="this.pause()" onmouseout="this.play()" class="thumbnail" style="float:right; right:0rem; width:100%; height:100%">
                            <source src={content.src} type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    {:else}
                        <img src={content.src} alt={content.alt}>
                    {/if}
                    <div class="gallery-item-overlay">
                        <h3> {content.title} </h3>
                        <p> {content.category}: {content.tech} </p>
                    </div>
                </button>
            {/each}
        <!-- show current selection of gallery in docu mode -->
        {:else}
            <button id="back" in:fly|global = {{duration: magic, delay: magic, easing:quintOut}} out:slide|global = {{duration:magic, easing:quintOut, axis:'y'}} on:click={()=>{documentation=false; contentLoaded=false}}> ← back</button>
            <div class="page" in:fly|global = {{duration: magic, delay: magic, easing:quintOut}} out:slide|global = {{duration:magic, easing:quintOut, axis:'x'}}>
                {#if contentLoaded}
                    <h1> {contents[page].title} </h1>
                    <h3><mark>{contents[page].category}:</mark> {contents[page].tech} </h3>
                    <p> {contents[page].content}</p>
                    {#if contents[page].media.type === "pic"}
                        <img class="media_container" src={contents[page].media.src} alt={contents[page].alt}>
                    {:else if contents[page].media.type === "pics"}
                        {#each contents[page].media.src as pic, i}
                            <img class="media_container" src={pic} alt="image {i}">
                        {/each}
                    {:else if contents[page].media.type === "vids"}
                        {#each contents[page].media.src as vid, i}
                            <video transition autoplay="autoplay" muted loop preload="metadata" onmouseout="this.play()" class="media_container" style="float:right; right:0rem; width:100%; height:100%">
                                <source src={vid} type="video/mp4">
                                    Your browser does not support the video tag.
                            </video>
                        {/each}
                    {:else if contents[page].media.type === "yt"}
                        <iframe
                            class="media_container"
                            src={contents[page].media.src}
                            title="YT video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    {:else if contents[page].media.type === "video"}
                        <video transition autoplay="autoplay" muted loop preload="metadata" onmouseout="this.play()" class="media_container" style="float:right; right:0rem; width:100%; height:100%">
                            <source src={contents[page].media.src} type="video/mp4">
                                Your browser does not support the video tag.
                        </video>
                    {/if}
                {:else}
                    <Skeleton type="skeleton-title" />
                    <Skeleton type="skeleton-subtitle" />
                    <Skeleton type="skeleton-text" />
                    <Skeleton type="skeleton-media" />
                {/if}
            </div>
        {/if}
    </div>
{/if}

<style>
    #back{
        position:fixed !important;
        display: block;
        all: unset;
        cursor: pointer;
        font-size: x-large;
        transition: all 0.19s ease-in-out;
        margin: 1rem;
        text-shadow: 1px 1px 5px black;
    }
    #back:hover{
        scale: 1.13;
        text-shadow: 2px 2px 10px black;
    }
    .media_container{
        height: 400px !important;
        width: 560px !important;
    }
    .page {
        display: block;
        position:relative;
        margin: 5rem;
    }
    .page p{
        font-size: large;
    }
    .page h3{
        font-size: xx-large;
    }
    .page h1{
        display: block;
        position:relative;
        margin-top: 0rem !important;
        text-align: center ;
    }
    .frame{
        position: absolute;
        z-index: 4;
        top: 0%;
        left: 25%;
        width: 50vw !important;
        height: 100vh !important;
        overflow:scroll;
        background-color: var(--black);
    }
    .frame::-webkit-scrollbar {
        width: 0.5em;
        height: 0.5em;
    }
    .frame::-webkit-scrollbar-thumb {
        background-color: var(--white);
    }
    .frame::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0);
    }
    .gallery-item {
        all: unset;
        cursor: pointer;
        display: inline-block;
        position: relative;
        width: 200px;
        height: 200px;
        margin: 1.1rem; 
        overflow: hidden;
    }
    .gallery-item:focus {
        outline: solid rgba(255, 255, 255, 0.1) 20px;
    }
    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        transition: transform 0.3s;
    }
    .gallery-item:hover img {
        transform: scale(1.15);
        box-sizing: content-box;
        transform-origin: 50% 50%;
        filter: none;
    }
    .gallery-item-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s ease-in-out;
    }
    .gallery-item:hover .gallery-item-overlay {
        opacity: 1;
        border: 0.3rem solid var(--white);
        background-color: rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease-in-out;
        transition: border 0.15s ease-in-out;
    }
    .gallery-item-overlay h3,
    .gallery-item-overlay p {
        color: var(--white);
        text-align: center;
    }
    .gallery-item-overlay h3 {
        font-size: x-large;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .gallery-item-overlay p {
        font-size: large;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
    }
    .thumbnail{
        max-width: 45rem;
        width: 100%;
        height: auto;
        position: absolute;
        bottom: 0rem;
    }
    @media (max-width: 576px) {
        .frame{
            width: 100vw !important;
            height: 100vh !important;
        }
    }
    @media (max-width: 400) {
        .frame{
            width: 50vw !important;
            height: 100vh !important;
        }
    }
</style>