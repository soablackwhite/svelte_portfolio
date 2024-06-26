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
            xOff: 200,
            yOff: 200,
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
            alpha = (alpha < 0.09) ? 0 : alpha;
            item.style.opacity = `${alpha}`;
        });
        return(pastlock);
    };
    function clickArrow(dir: number){
        lock = true;
        past = ((dir === 1 && position < max)||(dir === -1 && position > 0)) ? lockCarousel(position + dir) : past;
    }
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
                item.style.opacity = `${alpha}`;
            });
            currentItem.set(lock);
            return(lock);
        };
        lockCarousel(0);
        //___________________________________SCROLL KEYBOARD______________________________________________
        function wheelScroll(e: WheelEvent){
            lock = false;
            if (Math.abs(e.deltaX) > 0) {
                e.preventDefault();
            }
            let scroll = (Math.abs(e.deltaY) > Math.abs(e.deltaX)) ? -e.deltaY : -e.deltaX;
            if(Math.abs(scroll) < 4){
                lock = true;
                past = lockCarousel(position);
            } else {
                position = updateCarousel(scroll);
            }
            clearTimeout(resetThreshold);
            resetThreshold = setTimeout(function () {
                if(Math.abs(scroll) > 0 && Math.abs(scroll)){
                    lock = true;
                    past = lockCarousel(position);
                }
            }, 75);
        }
        
        //___________________________________SCROLL KEYBOARD______________________________________________
        function arrowScroll(e: KeyboardEvent){
            lock = true;
            let dir = 0;
            switch(e.key) {
                case 'ArrowLeft':
                    dir = -1;
                    break;
                case 'ArrowRight':
                    dir = 1;
                    break;
                case 'ArrowDown':
                    dir = (direction === "horizontal") ? -1 : 1;
                    break;
                case 'ArrowUp':
                    dir = (direction === "horizontal") ? 1 : -1;
                    break;
                default:
                    break;
            }
            past = ((dir === 1 && position < max)||(dir === -1 && position > 0)) ? lockCarousel(position + dir) : past;
        }
        window.addEventListener("keydown", arrowScroll);
        window.addEventListener('wheel', wheelScroll, { passive: false });
        return () => {
            window.removeEventListener('keydown', arrowScroll);
            window.removeEventListener('wheel', wheelScroll);
        };
    })
</script>
<!-- images -->
<main id="carousel" class:ribbon>
    <!-- left arrow -->
    <button on:click={() => clickArrow(-1)}> <img class="arrow" style="left: 10%;"alt="left arrow" src="/media/icons/bluetipdesign_left.svg"> </button>
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
    <!-- right arrow -->
    <button on:click={() => clickArrow(1)}> <img style="left:90%;" class="arrow" alt="right arrow" src="/media/icons/bluetipdesign_right.svg"> </button>
    <!-- current item -->
    <div class="counter">
        <h3>
            <span class="left {($currentItem == 0)?"invisible":""}">&lt;</span> 
            <!-- <span id="currentItem">{$currentItem}</span>/<span id="max">{max}</span> -->
            <span id="currentItem">{$currentItem} / {max}</span>

            <span class="right {($currentItem == max)?"invisible":""}">&gt;</span>  
        </h3>
    </div>
    <!-- read more button -->
</main>

<button class="scrollmore" on:click>
    Hi there buddy
</button>

<style>
    .scrollmore {
        all:unset;
        position: absolute !important;
        top: 80% !important;
        background-color: white;
        color: black;
        font-size: xx-large;
        align-items: center !important;
        align-content: center !important;
        justify-content: center !important;
        cursor: pointer;
        width: 100%;
        height:100%;
    }
    button {
        all: unset;
    }
    .arrow{
        position: absolute;
        z-index: 10;
        width: 100px;
        transform: translate(-50%, -50%);   
        user-select: none;
        filter: invert();
        cursor: pointer;
        opacity: .7;
    }
    .arrow:hover{
        opacity: 1;
    }
    .invisible{
        opacity: 0 !important;
    }
    .right{
        flex: 0;
    }
    .left{
        flex: 0;
    }
    .counter{
        position: relative;
        top: 40%;
        left: 40%;
        color: var(--white);
        background-color: var(--black);
        border-top: solid 2px var(--white);
        border-bottom: solid 2px var(--white);
        padding: 10px;
        font-family: "Montserrat", sans-serif;
        width: 160px;
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
    }
    .counter h3 {
        display: flex;
        justify-content: space-between;
        align-items: center; /* Centers the items vertically */
        width: 100%; /* Ensures the h3 element takes full width of its container */
    }
    #currentItem, #max {
        flex: 1; /* Allows the text in the middle to take up any remaining space */
        text-align: center; /* Centers the text */
    }
    .current{
        box-shadow: 0px 0px 3px rgb(255, 255, 255);
        z-index: 100 !important;
        border: solid 2px var(--white);
        opacity: 1 !important;
    }
    .ribbon{
        transform: rotate3d(1, 0, 0, 51deg) rotate3d(0, 0, 1, 43deg) !important;
        border-radius: 32px !important;
    }
    .item img {
        width: var(--size);
        height: var(--size);
        border-radius: 2%; 
        transition: opacity 0.1s ease-in-out;
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;

    }
    .item video {
        width: var(--size) ;
        height: var(--size) ;
        object-fit: cover;
        border-radius: 2%;
        transition: opacity 0.1s ease-in-out;
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
    }
    #category{
        /* styling */
        background-color: var(--accent1);
        color: var(--white);
        border-radius: 2%;
        /* positioning */
        padding: 3px;
        position: absolute;
        top: 0%;
        left: 0%;
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
        color: var(--white);
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
        cursor: pointer;
        transition: opacity 0.09s ease-in-out;
    }
    button.item:hover {   
        /* positioning */
        opacity: 1 !important;
        filter: none !important;
        border-radius: 3%;
        border: solid 2px var(--white);
    }
    button.item:hover img{
        opacity: 0.4;
    }
    button.item:hover video{
        border: solid 2px var(--white);
        opacity: 0.4;
    }
    .lock{
        transition: all 0.32s !important;
    }
</style>