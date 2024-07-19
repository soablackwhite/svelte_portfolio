<script lang="ts">
    export let index:number;
    import { currentItem, transitioned, profile_index, delta, spinDelta} from "../stores";
    import {rescale, set_css_var } from "../scripts/functions"
    import { slide, fade} from "svelte/transition";
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
    const profiles = [
        '/media/icons/manbaa.svg',
        '/media/icons/bocconi.svg',
        '/media/icons/nyuad.svg',
        '/media/icons/nyu.svg',
        '/media/icons/directions.svg'
    ]
    $: cur = $currentItem;
    let typer = 0;
    let t1 = false;
    let t2 = false;
    let classes = ["manbaa", "bocconi", "nyuad", "nyu", "next"]
    $: square = (index === 3) ? true : false;
    $: square2 = (index === 3) ? true : false;
    $: if (index != 3){
        t1 = false;
        t2 = false;
    }
    $: transitioned.set(t1 && t2);
    $: disappear = $transitioned;
    function handleMouseOver(event) {
        event.target.play();
    }
    // function to pause video on mouse out
    function handleMouseOut(event) {
        event.target.pause();
    }
    function magnifyingGlass(this:HTMLElement, e:MouseEvent){
        let mouseX = e.clientX;
        let mouseY = e.clientY;
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
        <div id="zoomer" class:square2 class:disappear role="img" on:transitionend={()=>{if(index===3){t1 = true;}}}>
            {#if ( (index == 0) && $transitioned==false)}
                <!-- <img alt="profile" id="profile" src="/media/animated/bio.svg"/> -->
                <video preload="auto" id="profile" playsinline muted loop
                    on:mouseover|preventDefault={handleMouseOver}
                    on:mouseout|preventDefault={handleMouseOut}
                    transition:fade|global={{duration:100, delay: 100}}
                    >
                    <source src="/media/animated/loop.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            {:else if ( (index == 1) && $transitioned==false)}
                <img alt="profile"
                    class="school {classes[$profile_index]}" 
                    src={profiles[$profile_index]}
                    transition:fade|global={{duration:100, delay: 100}}
                />
            {:else if (index == 2) && $transitioned === false}
                <img alt="profile" id="icon" src={icons[cur]}
                transition:fade|global={{duration:100, delay: 100}}
                />
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
        transition: transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out;
    }
    .bocconi{
        height: 240px !important;
    }
    .manbaa{
        height: 140px !important;
    }
    .nyu{
        height: 170px !important;
    }
    .nyuad{
        height: 170px !important;
    }
    .next{
        height: 150px !important;
    }
    .school{
        position:absolute;
        top: 50%;
        left: 50%;
        height: 170px;
        transform: translate(-50%, -50%);
        transition: all var(--dur);
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
    }
    #profile{
        position: fixed;
        width: 350px !important;
        bottom: 0%;
        z-index: 10;
        transition: all var(--dur);
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
    }
    #icon{
        width: 100px;
        height: auto;
        z-index: 10;
        transition: all var(--dur);
    }
    .image-container {
        top: calc(50%);
        left: 50%;
        transform: translate(-50%, -50%);
        border: solid 2px var(--white);
        border-radius: 50%;
        overflow: hidden;
        /* box-shadow: 0 4px 8px 0 var(--accent2), 0 6px 20px 0 var(--accent2); */
        transition: transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out;
        z-index: 3;
        background-color: var(--black);
    }
    .image-container video {
        position: absolute;
        margin: auto;
        top: -20%;
        width: 300px;
        height: 300px;
        object-fit: cover;
        transition: all 0.33s;
    }
    .ui {
        position: fixed !important;
    }

    @media (max-width: 576px) {
        .image-container video{
            width: 150px;
            height: 150px;
        }
        #zoomer{
            width: 150px;
            height: 150px;
        }
        #profile{
            width: 65px;
            height: auto;
        }
        .square2{
            width: 100vw !important;
            height: 100vh !important;
        }
        .bocconi{
        height: 150px !important;
        }
        .manbaa{
            height: 100px !important;
        }
        .nyu{
            height: 110px !important;
        }
        .nyuad{
            height: 110px !important;
        }
        .next{
            height: 100px !important;
        }
    }
    @media (max-width: 400px) {
        .image-container video{
            width: 175px;
            height: 175px;
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