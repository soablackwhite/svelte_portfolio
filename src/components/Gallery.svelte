<script lang="ts">
    export let index: number;
    import { fade, slide, scale, fly} from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    import { contents } from "../scripts/functions";
    import Skeleton from './Skeleton.svelte';
    import Thumbnail from "./Thumbnail.svelte";
    import Documentation from "./Documentation.svelte";
    let page = 0;
    let magic = 345; //this magic number should depend on profile's end of animations, most of which end after 300ms.
    let documentation: boolean = false;
    let contentLoaded: boolean = false;
    function checkLoad(event: CustomEvent){
        contentLoaded = event.detail.loaded;
    }
    function docuMode(event: CustomEvent) {
        documentation = true;
        page = event.detail.page;
    }
</script>

{#if (index===3)}
    <div class="frame" transition:scale>
        <!-- for each element in gallery, create thumbnail. only show if not in docu mode-->
        {#if (!documentation)}
            {#each contents as content, i}
                <Thumbnail data_export={content} id={i} on:clicked={docuMode}/>
            {/each}
        <!-- show current selection of gallery in docu mode -->
        {:else}
            <!-- back button -->
            <button id="back" in:fly|global = {{duration: magic, delay: magic, easing:quintOut}} out:slide|global = {{duration:magic, easing:quintOut, axis:'y'}} on:click={()=>{documentation=false; contentLoaded=false}}> ← back</button>
            <!-- container page -->
            <div class="page" in:fly|global = {{duration: magic, delay: magic, easing:quintOut}} out:slide|global = {{duration:magic, easing:quintOut, axis:'x'}}>
                <Documentation data_export={contents[page]} on:loadAll={checkLoad}/>
                <!-- show skeleton -->
                {#if !contentLoaded}
                    <div transition:fade>
                        <Skeleton type="skeleton-title" />
                        <Skeleton type="skeleton-subtitle" />
                        <Skeleton type="skeleton-text" />
                        <Skeleton type="skeleton-media" />
                    </div>
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
    .page {
        display: block;
        position:relative;
        margin: 5rem;
    }
    .frame{
        position: fixed;
        align-content: center;
        z-index: 4;
        top: 0%;
        left: 15%;
        width: 70vw !important;
        height: 100vh !important;
        border-radius: 0%;
        overflow:scroll;
        background-color: rgba(var(--black), 0.5);
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