<script lang=ts>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition';
    let loaded:boolean;

    loaded = false;
    //_______________________________________LOADER_____________________________________________
    function showPage() {
        // select all img and set max size
        let svgs = document.querySelectorAll("svg");
        // onload, run the function
        for (let i = 0; i < svgs.length; i++){
            svgs[i].style["max-height"]="0rem";
        }
        setTimeout(() => {
            loaded = true;
        }, 750);
    }
    onMount( () => { 
        showPage();
        // window.addEventListener('resize', updateMedia);
    })
</script>

{#if loaded}
    <!------ MAIN CONTENT ------>
    <transition in={true} out={false} transition:fade>
        <slot name="main"> </slot>
    </transition>
{:else}
    <!------ LOADING SCREEN ------>
    <transition in={true} out={false} transition:fade>
        <slot name="loader"> </slot>
        <slot name="bs"> </slot>
    </transition>
{/if}

<style>
    :root {
        --black: #121212;
        --white: #faf5f5;
        --yellow: rgb(249, 223, 77);
        --dist: -16rem;
        --ang: -18deg;
        --ang_start: 0deg;
        --ang_img: -33deg;
        --dist_img: -13rem;
        --indent_ui: 0rem;
        --isindent: 0deg;
        --vidy : 1rem;
        --vidx : 0rem;
    }
</style>