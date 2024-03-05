<script lang="ts">
    export let index:number;
    import { fade } from "svelte/transition";
    import { currentCircle } from "../stores";
    import { rescale, set_css_var } from "../scripts/functions"
    const icons = [
        '/media/icons/html5.svg',
        '/media/icons/css3.svg',
        '/media/icons/bootstrap.svg',
        '/media/icons/js.svg',
        '/media/icons/c.svg',
        '/media/icons/cplus.svg',
        '/media/icons/nodejs.svg',
        '/media/icons/flask.svg',
        '/media/icons/python.svg',
        '/media/icons/sql.svg',
        '/media/icons/r.svg',
        '/media/icons/stata.svg',
    ];
    let cur: number;
    currentCircle.subscribe((value) => {
        cur = value;
    });
    $: bigger = (index === 3) ? true : false;
    $: bigger2 = (index === 3) ? true : false;
    function magnifyingGlass(this:HTMLElement, event:MouseEvent){
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        //convert to rem scale
        let incx = rescale(mouseX, window.innerWidth/2 - this.offsetWidth/2, window.innerWidth/2 + this.offsetWidth/2, -4, 4);
        let incy = rescale(mouseY, window.innerHeight/2 - this.offsetHeight/2, window.innerHeight/2 + this.offsetHeight/2, -4, 4);
        let rt = document.querySelector(':root') as HTMLElement;
        set_css_var("--vidy", `${(incy + 1)}rem`, rt);
        set_css_var("--vidx", `${incx}rem`, rt);
    }

</script>

<div class="image-container ui" class:bigger>
    <div id="zoomer" class:bigger2 role="img" on:mousemove={magnifyingGlass}>
        {#if (index === 0 || index === 1)}
            <video transition:fade={{duration:200}} preload="auto" autoplay playsinline muted loop onmouseover="this.pause()" onmouseout="this.play()">
                <source src="/media/animated/legible.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        {:else if (index != 3)}
            <img transition:fade={{duration:200}} alt="profile" id="profile" src={icons[cur]}/>
        {/if}
    </div>
</div>


<style>
    .bigger{
        border-radius: 0% !important;
        z-index: 0 !important;
        position: relative;
    }
    .bigger2{
        border-radius: 0px !important;
        width: 70vw !important;
        height: 100vh !important;
        z-index: 0 !important;
        position:relative;
        opacity: 0 !important;
    }
    #zoomer{
        z-index: 3;
        border-radius: 100px;
        background-color: var(--black);
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        /* transition: transform 0.33s, width 0.33s ease-in-out, height 0.33s ease-in-out, border-radius 0.72s ease-in-out, opacity 0.4s ease-in-out; */
        transition: transform 0.23s, width 0.33s ease-in-out, height 0.33s ease-in-out, border-radius 0.42s ease-in-out, opacity 0.4s ease-in-out;
        transition: all 0.33s;
    }
    #zoomer:hover{
        transform: scale(5.25);
    }
    #profile{
        width: 100px;
        height: auto;
        /* transition: transform 0.13s, width 0.33s ease-in-out, height 0.33s ease-in-out; */
        transition: transform 0.23s, width 0.33s ease-in-out, height 0.33s ease-in-out;
        transition: all 0.33s;
        fill: var(--white);
    }
    .image-container {
        top: calc(50% + var(--indent_ui));
        left: 50%;
        transform: translate(-50%, -50%);
        border: solid 2px var(--white);
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(204, 255, 20, 0);
        /* transition: top 0.42s ease-in-out, border-radius 0.72s ease-in-out; */
        transition: top 0.23s ease-in-out, border-radius 0.42s ease-in-out;
        /* transition: all 0.33s; */
        z-index: 3;
    }
    .image-container video {
        position: absolute;
        margin: auto;
        width: 250px;
        height: 250px;
        /* transition: transform 0.13s, width 0.33s ease-in-out, height 0.33s ease-in-out; */
        transition: transform 0.23s, width 0.23s ease-in-out, height 0.23s ease-in-out;
        /* transition: all 0.33s; */
    }
    .image-container video:hover {
        transform: translate(var(--vidx), var(--vidy));
    }
    .ui {
        position: fixed !important;
    }

    @media (max-width: 576px) {
        .image-container video{
            width:150px;
            height:150px;
        }
        #zoomer{
            width:150px;
            height:150px;
        }
        #profile{
            width: 65px;
            height: auto;
        }
        .bigger2{
            width: 100vw !important;
            height: 100vh !important;
        }
    }
    @media (max-width: 400px) {
        .image-container video{
            width:175px;
            height:175px;
        }
        .image-container{
            top: calc(50% + var(--indent_ui));
            left: 70%;
        }
        #zoomer{
            width:175px;
            height:175px;
        }
        #profile{
            width: 65px;
            height: auto;
        }
        .bigger2{
            width: 200vw !important;
            height: 100vh !important;
        }
    }
    @media (max-width: 341px) {
        .image-container video{
            width:150px;
            height:150px;
        }
        .image-container{
            top: calc(50% + var(--indent_ui));
            left: 70%;
        }
        #zoomer{
            width:150px;
            height:150px;
        }
        #profile{
            width: 65px;
            height: auto;
        }
    }
</style>