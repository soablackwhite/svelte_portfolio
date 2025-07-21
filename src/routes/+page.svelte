<script lang="ts">
    import Manager from '../components/Manager.svelte';
    import Menu from '../components/Menu.svelte';
    import Profile from '../components/Profile.svelte';
    import Items from '../components/Items.svelte';
    import Loader from '../components/Loader.svelte';
    import CarouselFinal from '../components/CarouselFinal.svelte';
    import Logo from '../components/Logo.svelte';
    import Sketch from '../components/Sketch.svelte';
    import Documentation from '../components/Documentation.svelte';
    import { contents } from '../scripts/functions';

    import { onMount } from 'svelte';
    import { gui_angle, gui_carousel, gui_menu, gui_motion, gui_outline, transitioned } from "../stores";
    import ProjectsPage from '../components/ProjectsPage.svelte';
    import Test from '../components/Test.svelte';

    let t: boolean;
    let darkmode: false;
    $: showDocs = (index === 3 ? true : false);
    let index = 0;
    let scrollThreshold = 70;
    let innerWidth: number;
    $: isMobile = ( innerWidth < 765 );

    const unsubscribe = transitioned.subscribe(($transitioned) => {
        t = $transitioned;
    });
</script>

<svelte:window bind:innerWidth />

<Sketch bind:index={index} />

<Manager>
    <Loader slot="loader" />
    <div slot="bs" id="blackscreen"> </div>

    <!-- Flip Card Container -->
    <div slot="main" class="flip-container" class:flipped={showDocs}>
        <div class="flip-card">
            <!-- FRONT SIDE -->
            <div class="flip-face flip-front">

                <div id="wrapper">
                    <Logo bind:index={index}/>
                    <Menu bind:index={index} bind:type={$gui_menu} bind:outline={$gui_outline}/>
                    {#if !(index === 1 && isMobile)}
                        <Profile bind:index={index}/>
                    {/if}
                    {#if index != 3}
                        <Items bind:index={index} bind:scrollThreshold={scrollThreshold}/>
                    {:else if t && $gui_carousel === "stack"}
                        <CarouselFinal />
                    {:else if t}
                        <CarouselFinal />
                    {/if}
                </div>
            </div>

            <!-- BACK SIDE -->
            <div class="flip-face flip-back">
                <button class="flip-btn" on:click={() => index = 2}>Back</button>
                {#each contents as content }
                    <div class="doc">
                        <Documentation data={content} />
                    </div>
                {/each}
                <!-- <ProjectsPage /> -->
            </div>
        </div>
    </div>
</Manager>

<style>

    .flip-container {
        perspective: 1500px;
        width: 100%;
        height: 100vh;
        position: relative;
    }

    .flip-card {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.6s ease;
        transform-style: preserve-3d;
    }

    .flipped .flip-card {
        transform: rotateY(180deg);
    }

    .flip-face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        top: 0;
        left: 0;
    }

    .flip-front {
        z-index: 2;
        overflow: hidden;
    }

    .flip-back {
        transform: rotateY(180deg);
        overflow-y: auto;
        z-index: 2;
        /* overflow-x: hidden; */
        /* padding: 2rem; */
        box-sizing: border-box;
    }

    #wrapper {
        width: 100%;
        height: 100%;
    }

    .flip-btn {
        position: fixed;
        top: 1rem;
        right: 1rem;
        /* height: 10px; */
        padding: 0.75rem 1.75rem;
        font-size: 1rem;
        font-weight: 600;
        z-index: 10;
        border: none;
        cursor: pointer;
        background: var(--white);
        color: var(--black);
        transition: all 0.3s ease;
    }

.flip-btn:hover {
    transform: scale(1.09);
    background: var(--white);
}

@media (prefers-color-scheme: dark) {
    .flip-btn {
        background: var(--white);
        color: var(--black);
    }

    .flip-btn:hover {
        background: var(--black);
        color: var(--white);
    }
}
</style>