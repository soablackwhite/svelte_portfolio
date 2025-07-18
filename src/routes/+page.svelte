<script lang="ts">
    import Manager from '../components/Manager.svelte';
    import Menu from '../components/Menu.svelte';
	import Slider from '../components/Slider.svelte';
    import Profile from '../components/Profile.svelte';
    import Items from '../components/Items.svelte';
    import Loader from '../components/Loader.svelte';
    import CarouselCube from '../components/CarouselCube.svelte';
    import CarouselStack from '../components/CarouselStack.svelte';
    import GUI from '../components/GUI.svelte';
    import Sketch from '../components/Sketch.svelte';
    import CarouselFinal from '../components/CarouselFinal.svelte';
    import Logo from '../components/Logo.svelte';
    import { onMount } from 'svelte';
    import { gui_angle, gui_carousel, gui_menu, gui_motion, gui_outline, transitioned } from "../stores";
    import FlipCard from '../components/FlipCard.svelte';
    import ProjectsPage from '../components/ProjectsPage.svelte';
    let flipped = false;
    // toggle page
    function flipPage() {
        flipped = !flipped;
    }
    let t: boolean;
    let darkmode: false;
    const unsubscribe = transitioned.subscribe(($transitioned) => {
        t = $transitioned;
    });
    let index = 0;
    let scrollThreshold = 70;
    let innerWidth: number;
    $: isMobile = ( innerWidth < 765 );
</script>

<svelte:window bind:innerWidth />

<FlipCard {flipped}>
  <svelte:fragment slot="front">
    <!-- your original page -->
    <Sketch bind:index={index} />
    <Manager>
      <Loader slot="loader" />
      <div slot="bs" id="blackscreen"> </div>
      <div slot="main" id="wrapper" style="z-index: 0;">
        <Logo bind:index={index} />
        <Menu bind:index={index} bind:type={$gui_menu} bind:outline={$gui_outline} />
        {#if !(index === 1 && isMobile)}
          <Profile bind:index={index} />
        {/if}
        {#if index != 3}
          <Items bind:index={index} bind:scrollThreshold={scrollThreshold} />
        {:else if t && $gui_carousel === "stack"}
          <CarouselFinal />
        {:else if t}
          <CarouselFinal />
        {/if}
      </div>
    </Manager>
    <button on:click={flipPage} class="flip-button">Projects</button>
  </svelte:fragment>

  <svelte:fragment slot="back">
    <ProjectsPage />
    <button on:click={flipPage} class="flip-button">← Back</button>
  </svelte:fragment>
</FlipCard>


<style>
    .flip-button {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem 2rem;
        background: var(--accent1, #fff);
        color: #000;
        border: none;
        font-size: 1rem;
        z-index: 999;
        cursor: pointer;
        }

    #wrapper{
        /* display: flex; */
        position: absolute !important;
        top: 0%;
        left: calc(0% + var(--indent_ui));
        width: calc(100vw - var(--indent_ui)) !important;
        height: 100%;
        transition: all 0.33s ease-in-out;
        z-index: 5;
    }
</style>