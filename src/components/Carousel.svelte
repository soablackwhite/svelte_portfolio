<script lang="ts">
    // carousels
    import CarouselCube from '../components/CarouselCube.svelte';
    import CarouselStack from './CarouselStack.svelte';
    import { gui_angle, gui_carousel, gui_motion } from '../stores';
</script>

{#if $gui_carousel === "stack"}
    <CarouselStack bind:motion={$gui_motion}/>
{:else}
    <CarouselCube bind:direction={$gui_angle} bind:motion={$gui_motion} bind:cardtype={$gui_carousel}/>
{/if}