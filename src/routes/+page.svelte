<header>
    <title>Omar Ouldali</title>
    <!----------------------------------CREDITS---------------------------------------------------->
    <!-- Direction panel icon: Artdabana / Nounproject -->
    <!-- SVG to point coordinates: coördinator by Aliza Aufrichtig (she's fantastic!) -->

    <!------------------------------------META----------------------------------------------------->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Omar Ouldali's developer, motion design, and game design portfolio">
    <link rel="icon" type="image/x-icon" href="media/icons/favicon.ico">
    <!-----------------------------------FONTS----------------------------------------------------->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:wght@300;400;700;900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    <link href="/fonts/proximanova.otf" rel="stylesheet">
    <!--------------------------------STYLESHEETS-------------------------------------------------->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="/style/style.css">
    <!----------------------------------QUADTREE--------------------------------------------------->
    <script src="https://cdn.jsdelivr.net/gh/CodingTrain/QuadTree/quadtree.js"></script>
    <!-------------------------------------AOS----------------------------------------------------->
</header>

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
    import Logo from '../components/Logo.svelte';
    import { onMount } from 'svelte';
    import { gui_angle, gui_carousel, gui_menu, gui_motion, gui_outline, transitioned } from "../stores";
    import Gui from '../components/GUI.svelte';
    let t: boolean;
    let darkmode: false;
    const unsubscribe = transitioned.subscribe(($transitioned) => {
        t = $transitioned;
    });
    let index:number = 0;
    let scrollThreshold:number = 70;
</script>
 <!----------------------------------CANVAS----------------------------------------------------->
 <Sketch bind:index={index}></Sketch>
 <!-- <Gui>  </Gui> -->
<Manager>
    <!--------------------------------------LOADER----------------------------------------------------->
    <Loader slot="loader" />
    <!-----------------------------------BLACK SCREEN-------------------------------------------------->
    <div slot="bs" id="blackscreen"> </div>
    <!----------------------------------CONTENT WRAPPER------------------------------------------------>
    <div slot="main" id="wrapper" style="z-index: 0;">
        <Logo bind:index={index}/>
        <Menu bind:index={index} bind:type={$gui_menu} bind:outline={$gui_outline}/>
        <!------------------------------------UI------------------------------------------------------->
        <Profile bind:index={index}/>
        <!--------------------------------SLIDER------------------------------------------------------->
        <!-- <Slider bind:scrollThreshold={scrollThreshold}/> -->
        <!-----------------------------------MENU------------------------------------------------------>
        <!------------------------------CONTENT WHEEL-------------------------------------------------->
        {#if index != 3}
            <Items bind:index={index} bind:scrollThreshold={scrollThreshold}/>
        <!------------------------------GALLERY GRID--------------------------------------------------->
        {:else if t && $gui_carousel === "stack"}
            <CarouselStack bind:motion={$gui_motion}/>
        {:else if t}
            <CarouselCube bind:direction={$gui_angle} bind:motion={$gui_motion} bind:cardtype={$gui_carousel}/>
        {/if}


    </div> 
</Manager>

<style>

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