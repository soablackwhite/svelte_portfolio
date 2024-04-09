<script lang="ts">
    import { onMount } from "svelte";
    import { rescale, clamp, contents } from "../scripts/functions";
    import { currentItem } from "../stores";
    // parameters
    let max = 11; //nbr of tbnails
    export let motion : string;
    export let direction: string;
    export let cardtype: string;
    let items: HTMLElement[];
    // typescript interfaces
    interface TransformConfig {
        angle: number;
        xOff: number;
        yOff: number;
    }
    interface Transforms {
        [key: string]: TransformConfig;
    }
    // scrol stuff
    const transforms = {
        "cubic": {
            angle: 90,
            xOff: 220,
            yOff: -220,
        },
        "concave": {
            angle: 15,
            xOff: -300,
            yOff: 300,
        },
        "convex": {
            angle: 10,
            xOff: 300,
            yOff: -320,
        },
        "flat": {
            angle: 0,
            xOff: -200,
            yOff: -200,
        },
        "flip": {
            angle: 180,
            xOff: 0,
            yOff: 0,
        },
        "ribbon": {
            angle: 0,
            xOff: -200,
            yOff: -270,
        }
    }
    $: ribbon = (motion === "ribbon") ? true : false;
    let resetThreshold: number;
    let lock = false;
    let past = 0;
    let position = 5; // start w the first item
    function clickScroll(idx:number, event: MouseEvent){
        lock = true;
        past = lockCarousel(idx);
    }
    function lockCarousel(newPosition: number, incr = 0){
        position = newPosition;
        currentItem.set(position);
        const transform = transforms[motion];
        const dir = (direction === "horizontal") ? [0, 1] : [1, 0];
        const pastlock = (direction === "horizontal") ? -transform.xOff * (position) : -transform.yOff * (position);
        items.forEach(item => {
            const index = parseInt(item.getAttribute('data-offset'));
            const r = index - position;
            const abs = Math.abs(r);
            let alpha = (r === 0) ? 1 : rescale(1 - abs, -10, 0, 0, 0.1);
            let blur = (r === 0) ? 0 : rescale(abs, 0, 10, 2, 5);
            item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * transform.angle}deg) translate3d(${transform.xOff * r * dir[1] + incr*dir[1]}px, ${transform.yOff * r * dir[0] + incr*dir[0]}px, 0)`;
            item.style.filter = `blur(${blur}px)`;
            alpha = (alpha < 0.08) ? 0 : alpha;
            item.style.opacity = alpha;
            // item.style.zIndex = `${1 - abs}`;
        });
        return(pastlock);
    };
    onMount(() => {
        items = document.querySelectorAll('.item');
        //update my carousel based on current position, which is found thru current scroll
        function updateCarousel(delta: number){
            const transform = transforms[motion];
            let offset = (direction === "horizontal")? -transform.xOff : -  transform.yOff;
            let dir = (direction === "horizontal") ? [0, 1] : [1, 0];
            let lock = (delta > 0) ? Math.round(past/offset) : Math.round(past/offset);
            past += delta; //increment past dX/dY
            past = (offset < 0) ? clamp(past, max*offset, 0) : clamp(past, 0, max*offset); //limit dx/dy
            lock = clamp(lock, 0, max); //limit locking thumbnail to max
            items.forEach(item => {
                let index = parseInt(item.getAttribute('data-offset'));
                let r = index;
                let abs = Math.abs(r - lock);
                let alpha = (r === lock) ? 1 : rescale(1 - abs, -10, 0, 0, 0.1);
                let blur = (r === lock) ? 0 : rescale(abs, 0, 10, 2, 5);
                let ang = (r - (past/offset))*transform.angle; //get new index to find relative position of current position, and use it to get angle
                item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${ang}deg) translate3d(${transform.xOff*r*dir[1] + past*dir[1]}px, ${transform.yOff*r*dir[0] + past*dir[0]}px, 0)`;
                item.style.filter = `blur(${blur}px)`;
                alpha = (alpha < 0.08) ? 0 : alpha;
                item.style.opacity = alpha;
                // item.style.zIndex = `${1 - abs}`;
            });
            currentItem.set(lock);
            return(lock);
        };
        lockCarousel(0);
        //___________________________________SCROLL KEYBOARD______________________________________________
        function wheelScroll(e: WheelEvent){
            lock = false;
            let scroll = (Math.abs(e.deltaY) > Math.abs(e.deltaX)) ? e.deltaY : -e.deltaX;
            if(Math.abs(scroll) < 5){
                lock = true;
                past = lockCarousel(position);
            } else {
                position = updateCarousel(scroll);
            }
            clearTimeout(resetThreshold);
            resetThreshold = setTimeout(function () {
            }, 200);
        }
        
        //___________________________________SCROLL KEYBOARD______________________________________________
        function arrowScroll(e: KeyboardEvent){
            lock = true;
            let dir = 0;
            switch(e.key) {
                case 'ArrowLeft':
                    dir = 1;
                    break;
                case 'ArrowRight':
                    dir = -1;
                    break;
                case 'ArrowDown':
                    dir = (direction === "horizontal") ? 1 : -1;
                    break;
                case 'ArrowUp':
                    dir = (direction === "horizontal") ? -1 : 1;
                    break;
                default:
                    break;
            }
            past = ((dir === 1 && position < max)||(dir === -1 && position > 0)) ? lockCarousel(position + dir) : past;
        }
        window.addEventListener("keydown", arrowScroll);
        window.addEventListener('wheel', wheelScroll);
        return () => {
            window.removeEventListener('keydown', arrowScroll);
            window.removeEventListener('wheel', wheelScroll);
        };
    })
</script>
<!-- images -->
<main id="carousel" class:ribbon>
    {#each contents as {title, thumbnail:{src, type}, alt, category, tech}, i}
        <button class="item" class:lock data-offset="{i}" on:click={(e)=>clickScroll(i, e)}>
            {#if type === "video"}
                <video alt ={alt} transition autoplay="autoplay" muted loop
                    onmouseover="this.pause()" 
                    onmouseout="this.play()" 
                    class="thumbnail {(i===$currentItem)?"current":""}" style="float:right; right:0rem">
                    <source src={src} type="video/mp4"> your browser does not support the video tag.
                </video>
            {:else }
                <img class="{(i===$currentItem)?"current":""}" alt={alt} src={src}>
            {/if}
            {#if cardtype === "label"}<div id="category">{category}:</div>{/if}
            <div class="overlay">
                <h3> {title} </h3>
                <p>
                    {#if cardtype==="minimal"} <span>{category}:</span> {/if}
                    {tech}
                </p>
            </div>
        </button>
    {/each}
</main>

<style>
    .current{
        box-shadow: 0px 0px 5px 0 rgb(255, 255, 255, 0.6);
        z-index: 100 !important;
    }
    .ribbon{
        transform: rotate3d(1, 0, 0, 51deg) rotate3d(0, 0, 1, 43deg) !important;
        border-radius: 32px !important;
    }
    .item img {
        width: var(--size);
        height: var(--size);
        border: solid 2px var(--white);
        border-radius: 2%; 
    }
    .item video {
        width: var(--size) ;
        height: var(--size) ;
        object-fit: cover;
        border: solid 2px var(--white);
        border-radius: 2%;
    }
    #category{
        /* styling */
        background-color: var(--white);
        color: var(--black);
        border-radius: 2%;
        /* positioning */
        padding: 3px;
        position: absolute;
        top: 0%;
        left: 0%;
    }
    p{
        line-height: 150%;
    }
    p span{
        background-color: var(--white);
        color: var(--black);
        padding: 3px;
    }
    .overlay{
        position: absolute;
        top: calc(55% + var(--size)/2);
        width: 100%;
    }
    main#carousel {
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute ;
        top: 0%;
        left: 0%;
        align-items: center;
        justify-content: center;
        overflow: hidden ;
        transform-style: preserve-3d;
        perspective: 600px;
        z-index: 1;
    }
    button.item {   
        /* positioning */
        all: unset;
        display: flex;
        justify-content: center;
        text-align: center;
        position: absolute;
        /* z-index: 20 !important; */
        transition: opacity 0.22s;
        cursor: pointer;
    }
    button.item:hover {   
        /* positioning */
        opacity: 1 !important;
        filter: none !important;
    }
    .lock{
        transition: all 0.22s !important;
    }
</style>