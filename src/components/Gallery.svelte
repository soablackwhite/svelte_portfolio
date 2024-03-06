<script lang="ts">
    export let index: number;
    import { fade, slide, scale, fly, blur} from "svelte/transition";
    import { quintOut, elasticOut, quintIn } from 'svelte/easing';
    import { contents } from "../scripts/functions";
    import Thumbnail from "./Thumbnail.svelte";
    import Documentation from "./Documentation.svelte";
    let page = 0;
    $: centerToggle = true; //this is necessary to toggle centering in and out of the flex to avoid interference w/ svelte animations
    let magic = 200; //this magic number should depend on profile's end of animations, most of which end after 300ms.
    let documentation: boolean = false;
    let contentLoaded: boolean = false;
    function checkLoad(event: CustomEvent){
        contentLoaded = event.detail.loaded;
    }
    function docuMode(event: CustomEvent) {
        documentation = true;
        page = event.detail.page;
    }
    function fadeSlide(node, options) {
		const slideTrans = slide(node, options)
        if(options.dir === 0){
            return {
                duration: options.duration,
                css: t => `
                    ${slideTrans.css(t)}
                    opacity: ${t};
                `
            };
        } else {
            return {
                duration: options.duration,
                css: t => `
                    transform: translateX(${(1 - t) * 100}%);
                    opacity: ${t};
                `
            };
        }
    }
</script>

{#if (index===3)}
    <!-- main frame -->
    <!-- <div class="frame {(documentation) ? "centered" : ""}" transition:scale> -->
    <div class="frame {(!documentation)?"centered":""}" transition:scale>
        <!-- for each element in gallery, create thumbnail. only show if not in docu mode-->
        {#if (!documentation)}
            <div class="thumbnails" >
                {#each contents as content, i}
                    <Thumbnail data_export={content} id={i} on:clicked={docuMode}/>
                {/each}
            </div>
        <!-- show current selection of gallery in docu mode -->
        {:else}
            <!-- container page -->
            <button id="back" in:fadeSlide|global = {{duration: magic, delay: magic, easing:quintIn, dir:0}} out:fadeSlide|global = {{duration:magic, easing:quintOut, axis:'y', dir:1}} on:click={()=>{documentation=false; contentLoaded=false}}> ← back</button>
            <div class="page" in:fadeSlide|global = {{duration: magic, delay: magic, easing:quintIn, axis:'x', dir:1}} out:fadeSlide|global = {{duration:magic, easing:quintOut, axis:'x', dir:0}}>
                <Documentation data_export={contents[page]} on:loadAll={checkLoad}/>
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
        z-index: 100;
    }
    #back:hover{
        scale: 1.13;
        text-shadow: 2px 2px 10px black;
    }
    .page {
        display: block;
        position:relative;
        margin: 5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: none !important;
        align-content: none !important;
    }
    .thumbnails{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }
    .frame{
        /* display: flex;
        flex-wrap: wrap;
        justify-content: center;     */
        position: fixed;
        z-index: 4;
        top: 0%;
        left: 15%;
        width: 70vw !important;
        height: 100vh !important;
        border-radius: 0%;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: rgba(0,0,0, 0.75);
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
            left: 0%;
            width: 100vw !important;
            height: 100vh !important;
        }
    }
    @media (max-width: 400) {
        .frame{
            left: 0%;
            width: 50vw !important;
            height: 100vh !important;
        }
    }
</style>