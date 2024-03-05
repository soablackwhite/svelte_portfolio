<script lang="ts">
    import { fade, slide, scale, fly, blur} from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    export let data_export;
    export let id: number;
    let delay = 60;
    let magic = 345;
    let loaded = false;
    const { title, tech, category, alt, thumbnail }  = data_export;
    import {  createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    function docuToggle(){
        dispatch('clicked', {
			page : id,
            load : true
		});
    }
</script>

<button class="gallery-item" 
in:scale|global = {{ duration: 125, delay: magic + id * delay, easing:quintOut}}  
out:slide|global = {{ duration: 300, easing: quintOut}}
on:click={docuToggle}>
    {#if thumbnail.type =="video"}
        <video alt ={alt} transition autoplay="autoplay" muted loop
        onmouseover="this.pause()" 
        onmouseout="this.play()" 
        class="thumbnail" style="float:right; right:0rem; width:100%; height:100%">
            <source src={thumbnail.src} type="video/mp4">
            Your browser does not support the video tag.
        </video>
    {:else}
        <img src={thumbnail.src} alt={alt}>
    {/if}
                
    <div class="gallery-item-overlay">
        <h3> {title} </h3>
        <p> {category}: {tech} </p>
    </div>
</button>

<style>
    .gallery-item {
        all: unset;
        cursor: pointer;
        display: inline-block;
        position: relative;
        width: 200px;
        height: 200px;
        margin: 1.1rem; 
        overflow: hidden;
        outline: 2px solid rgba(255, 255, 255, 0.6);
        border-radius: 0px;
        transition: outline 0.15s;
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
        background-color: rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease-in-out;
        transition: border 0.15s ease-in-out;
    }
    .gallery-item:hover{
        outline: 4px solid rgba(255, 255, 255, 0.9);
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
</style>