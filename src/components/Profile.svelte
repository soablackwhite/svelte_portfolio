<script lang="ts">
    export let index:number;
    import { fade } from "svelte/transition";
    import { currentCircle, transitioned} from "../stores";
    import { get_css_var, rescale, set_css_var } from "../scripts/functions"
    import { onDestroy, onMount } from "svelte";
    const icons = [
        '/media/icons/react.svg',
        '/media/icons/svelte.svg',
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
    $: cur = $currentCircle;
    let t1 = false;
    let t2 = false;
    $: square = (index === 3) ? true : false;
    $: square2 = (index === 3) ? true : false;
    $: if (index != 3){
        t1 = false;
        t2 = false;
    }
    $: transitioned.set(t1 && t2);
    $: disappear = $transitioned;
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

<!-- this condition doesnt do anything for some reason lol, works with $transitioned tho -->
    <div class="image-container ui" class:square class:disappear on:transitionend={()=>{if(index===3){t2 = true;}}}>
        <div id="zoomer" class:square2 class:disappear role="img" on:mousemove={magnifyingGlass} on:transitionend={()=>{if(index===3){t1 = true;}}}>
            {#if ( (index < 2) && $transitioned==false)}
                <video preload="auto" autoplay playsinline muted loop onmouseover="this.pause()" onmouseout="this.play()">
                    <source src="/media/animated/legible.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            {:else if $transitioned === false}
                <img alt="profile" id="profile" src={icons[cur]}/>
            {/if}
        </div>
    </div>


<style>
    :root{
        --dur: 0.1s;
    }
    .disappear{
        opacity: 0 !important;
        transition: opacity 0.15s;
    }
    .square{
        border-radius: 2% !important;
        border: solid var(--white) 2px !important;
        transition: all var(--dur);
    }
    .square2{
        width: var(--size) !important;
        height: var(--size) !important;
        transition: all var(--dur);
    }
    #zoomer{
        z-index: 3;
        border-radius: 100%;
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        /* transition: transform 0.33s, width 0.33s ease-in-out, height 0.33s ease-in-out, border-radius 0.72s ease-in-out, opacity 0.4s ease-in-out; */
        transition: transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out;
        /* transition: all var(--dur) ; */
    }
    #zoomer:hover{
        transform: scale(5.25);
    }
    #profile{
        width: 100px;
        height: auto;
        z-index: 10;
        /* transition: transform 0.13s, width 0.33s ease-in-out, height 0.33s ease-in-out; */
        /* transition: transform 0.23s, width 0.33s ease-in-out, height 0.33s ease-in-out; */
        transition: all var(--dur);
        fill: var(--white);
    }
    .image-container {
        top: calc(50%);
        left: 50%;
        transform: translate(-50%, -50%);
        border: solid 2px var(--white);
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(204, 255, 20, 0);
        /* transition: top 0.23s ease-in-out, border-radius 0.42s ease-in-out; */
        transition: transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out;
        /* transition: all 0.33s; */
        z-index: 3;
        background-color: var(--black);
    }
    .image-container video {
        position: absolute;
        margin: auto;
        width: 250px;
        height: 250px;
        /* transition: transform 0.23s, width 0.23s ease-in-out, height 0.23s ease-in-out; */
        transition: all 0.33s;
    }
    .image-container video:hover {
        transform: translate(var(--vidx), var(--vidy));
    }
    .ui {
        position: absolute !important;
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
        .square2{
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
        .square2{
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
            top: calc(52% + var(--indent_ui));
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