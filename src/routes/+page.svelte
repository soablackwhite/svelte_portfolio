<header>
    <title>Omar Ouldali</title>
    <!------------------------------------META----------------------------------------------------->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Omar Ouldali's developer, motion design, and game design portfolio">
    <link rel="icon" type="image/x-icon" href="/media/icons/favicon.ico">
    <!-----------------------------------FONTS----------------------------------------------------->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:wght@300;400;700;900&family=Montserrat:wght@500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="/fonts/proximanova.otf" rel="stylesheet">
    <!--------------------------------STYLESHEETS-------------------------------------------------->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="/style/style.css">
    <!---------------------------------LIBRARIES--------------------------------------------------->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> -->
</header>

<script lang="ts">
    import Manager from '../components/Manager.svelte';
    import Sketch from '../components/Sketch.svelte';
    import Logo from '../components/Logo.svelte';
    import Menu from '../components/Menu.svelte';
	import Slider from '../components/Slider.svelte';
    import Profile from '../components/Profile.svelte';
    import Items from '../components/Items.svelte';
    import Loader from '../components/Loader.svelte';
    import Gallery from '../components/Gallery.svelte';
    let index:number = 0;
    let scrollThreshold:number = 70;
</script>

<Manager>
        <!--------------------------------------LOADER----------------------------------------------------->
        <Loader slot="loader" />
        <!-----------------------------------BLACK SCREEN-------------------------------------------------->
        <div slot="bs" id="blackscreen"> </div>
        <!----------------------------------CONTENT WRAPPER------------------------------------------------>
        <div slot="main" id="wrapper" style="z-index: 0;">
            <Logo bind:index={index}/>
            <!----------------------------------CANVAS----------------------------------------------------->
            <Sketch />
            <!------------------------------------UI------------------------------------------------------->
            <Profile bind:index={index}/>
            <!--------------------------------SLIDER------------------------------------------------------->
            <Slider bind:scrollThreshold={scrollThreshold}/>
            <!-----------------------------------MENU------------------------------------------------------>
            <Menu bind:index={index} />
            <!------------------------------CONTENT WHEEL-------------------------------------------------->
            <Items bind:index={index} bind:scrollThreshold={scrollThreshold}/>
            <!------------------------------GALLERY GRID--------------------------------------------------->
            <Gallery bind:index={index} />
        </div>  
</Manager>