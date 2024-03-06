<script lang="ts">
    import { onMount, createEventDispatcher, afterUpdate } from "svelte";
    import { fade, slide, scale, fly} from "svelte/transition";
    import Skeleton from "./Skeleton.svelte";
    export let data_export;
    // export let contentLoaded: boolean;
    const dispatch = createEventDispatcher();
    const { alt, title, category, tech, description, media } = data_export;
    let loadedArray: Array<boolean> = media.map( () => false );
    $: contentLoaded = loadedArray.every(value => value === true);

    //to update loaded array individually on each media element as it loads
    function loadHandler(media_index: number){
        loadedArray[media_index] = true;
    }
    function isLoaded() {
        dispatch('loadAll', {
            loaded : contentLoaded
		});
    }
    afterUpdate(() => {
        if (contentLoaded){
            isLoaded();
        }
    })
</script>

<!-- hider -->
<div class="scroller">
    <!-- text stuff -->
    <h1> {title} </h1>
    <h3><mark>{category}:</mark> {tech} </h3>
    <p> {description}</p>
    <!-- media display stuff based on type of media -->
    {#if {contentLoaded}} <!-- could also use a hidden class div instead -->
        {#each media as m, i}
            {#if m.type === "image"}
                <img on:load={()=> loadHandler(i)} class="media_container" src={m.src} alt={alt} >
            {:else if m.type === "video"}
            <!-- there was a transition property in this video tag maybe i should put it back -->
                <video on:canplaythrough={()=> loadHandler(i)} class="media_container" autoplay="autoplay" muted loop onmouseout="this.play()"  style="float:right; right:0rem; width:100%; height:100%">
                    <source src={m.src} type="video/mp4">
                        Your browser does not support the video tag.
                </video>
            {:else if m.type === "youtube"}
                <iframe
                    on:load={()=> loadHandler(i)} src= {m.src} class="media_container" title="YT video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            {:else}
                <div class="skel" transition:fade>
                    <Skeleton type="skeleton-media" />
                </div>
            {/if}
        {/each}
    {:else} 
        <div class="skel" transition:fade>
            <Skeleton type="skeleton-media" />
        </div>
    {/if}
</div>

<style>
    .media_container{
        height: var(--media_height) !important;
        width: var(--media_width) !important;
    }
    p{
        font-size: large;
    }
    h3{
        font-size: xx-large;
    }
    h1{
        display: block;
        position:relative;
        margin-top: 0rem !important;
        text-align: center ;
    }
</style>