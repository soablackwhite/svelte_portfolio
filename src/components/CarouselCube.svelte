<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { rescale, clamp, contents } from "../scripts/functions";
    import { fade} from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { currentItem } from "../stores";
    import Documentation from "./Documentation.svelte";

    // parameters
    const max = contents.length - 1; //nbr of tbnails minus 1
    let items: NodeListOf<HTMLElement>;
    type MotionType = 'cubic' | 'concave' | 'convex' | 'flat' | 'flip' | 'ribbon';
    export let motion: MotionType;
    export let direction: string;
    export let cardtype: string;
    interface TransformConfig {
        angle: number;
        xOff: number;
        yOff: number;
    }
    interface TransitionConfig {
        duration: number;
        [key: string]: any; //optionals
    }
    interface Transforms {
        [key: string]: TransformConfig; //full flexibility
    }
    // scroll stuff
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
    let opacityThreshold = 0.09;
    let lock = false;
    let past = 0;
    let position = 5; // start w the first item

    //documentation stuff
    let data = contents[$currentItem] || {};
    $: data = contents[$currentItem] || {};
    $:console.log($currentItem);
    $: ({ alt, title, category, tech, description, media } = data || {});
    let docmode = false;
    let carousel: HTMLElement;
    let documentation: HTMLElement;
    function showDoc() {
        docmode = true;
        carousel.style.top = '-100%';
        carousel.style.opacity = "0";
        documentation.style.bottom = '0';
    }
    function hideDoc() {
        docmode = false;
        carousel.style.top = '0%';
        carousel.style.opacity = "1";
        documentation.style.bottom = '-100%';
    }
    // svelte animation customized for pop in pop out
    function expandOut(node: HTMLElement, { duration, sign = 1 }: TransitionConfig) {
        return {
            duration,
            css: (t:number) => `
                transform: translate(-50%, ${ sign * (50 - (1 - t) * 100)}%);
                opacity: ${2*t/3};
                height: 60%;
            `,
            easing: quintOut,
        };
    }
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
            const dtoffset = item.getAttribute('data-offset');
            const index = (dtoffset) ? parseInt(dtoffset) : 0; //if it exists, to shut typescript up
            const r = index - position;
            const abs = Math.abs(r);
            let alpha = (r === 0) ? 1 : rescale(1 - abs, -10, 0, 0, 0.1);
            item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * transform.angle}deg) translate3d(${transform.xOff * r * dir[1] + incr*dir[1]}px, ${transform.yOff * r * dir[0] + incr*dir[0]}px, 0)`;
            if (abs < 3 && abs != 0) {item.style.filter = "blur(3px)";} else{item.style.filter = "none";} //blurring neighbors
            alpha = (alpha < opacityThreshold) ? 0 : alpha;
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
                const dtoffset = item.getAttribute('data-offset');
                const index = (dtoffset) ? parseInt(dtoffset) : 0;
                const r = index;
                const abs = Math.abs(r - lock);
                let alpha = (r === lock) ? 1 : rescale(1 - abs, -10, 0, 0, 0.1);
                const ang = (r - (past/offset))*transform.angle; //get new index to find relative position of current position, and use it to get angle
                item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${ang}deg) translate3d(${transform.xOff*r*dir[1] + past*dir[1]}px, ${transform.yOff*r*dir[0] + past*dir[0]}px, 0)`;
                if (abs < 3 && abs != 0) {item.style.filter = "blur(3px)";} else{item.style.filter = "none";} //blurring neighbors
                alpha = (alpha < opacityThreshold) ? 0 : alpha;
                item.style.opacity = `${alpha}`;
            });
            currentItem.set(lock);
            return(lock);
        };
        lockCarousel(0);
        //___________________________________SCROLL KEYBOARD______________________________________________
        function wheelScroll(e: WheelEvent){
            if(!docmode){
                lock = false;
                if (Math.abs(e.deltaX) > 0) {
                    // e.preventDefault();
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
<div class="hidden">
    <main id="carousel" bind:this={carousel} class:ribbon >
        <!-- left arrow -->
        <button on:click={() => clickArrow(-1)}> <img class="arrow" style="left: 10%;"alt="left arrow" src="/media/icons/bluetipdesign_left.svg"> </button>
        {#each contents as {title, thumbnail:{src, type}, alt, category, tech}, i}
            <button class="item {(i===$currentItem)?"currentButton":""}" class:lock data-offset="{i}" on:click={(e)=>clickScroll(i, e)}>
                {#if type === "video"}
                    <video  muted loop
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
    </main>

    <!-- current item count -->
    <div class="counter">
            <span class="left {($currentItem == 0)?"invisible":""}">&lt;</span> 
            <span id="currentItem">{$currentItem} / {max}</span>
            <span class="right {($currentItem == max)?"invisible":""}">&gt;</span>  
    </div>
    <!-- show documentation, used to be inside doc container, we'll see-->
    {#if !docmode}
        <button out:expandOut={{duration: 370, sign: 1}} 
        in:fade={{duration:370}} 
        class="readmore navbutton" 
        on:click={showDoc}>
            <div class="textrotate"> <strong> READ MORE </strong> </div>
        </button>
    {/if}
    <!-- documentation -->
    <div class="documentation" bind:this={documentation}>
        {#if docmode}
            <button out:expandOut={{duration: 300, sign: -1}} 
            in:fade={{duration:300}} 
            class="back navbutton" 
            on:click={hideDoc}>
                <div class="textrotate2"> <strong> BACK </strong> </div>
            </button>
        {/if}
        <Documentation data={data}/>
    </div>
</div>

<style>
    .hidden{
        position: absolute;
        width: 100%;
        height: 100%;
        left:0;
        top: 0;
        overflow: hidden !important;
    }
    .textrotate{
        text-align: center;
        margin-left: 20px;
        transform: rotate(0deg) translate(0%, calc(-70px + 100%));
    }
    .textrotate2{
        text-align: center;   
        transform: rotate(0deg) translate(0%, calc(70px - 50%));
    }
    .navbutton{
        font-family: "Lato", sans-serif;
        font-weight: 300;
        position: fixed;
        width: 140px;
        height: 140px;
        color: var(--white);
        background-color: var(--black);
        transition: all 0.22s;
        border-radius: 2px;
        border: 2px solid var(--white);
    }
    .navbutton:hover{
        color: var(--black);
        background-color: var(--white);
        padding: 10px;
    }
    .back{
        top: 0px;
        left: 50%;
        transform: translate(-50%, -52%) rotate(-45deg) ;
        z-index: 7;     
    }
    .readmore {
        bottom: 0%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, 51%) rotate(-45deg);
        z-index: 5; 
    }
    .readmore:hover{
        transform: translate(-50%, 50%) rotate(0deg);
    }
    .back:hover{
        transform: translate(-50%, -50%) rotate(0deg) ;
    }
    /* to stop the hovering effect from being canceled ont transitions */
    .navbutton:hover::before{
        content: '';
        position: absolute;
        top: -10%;
        left: -10%;
        width: 120%;
        height: 120%;
        z-index: -1;
    }
    .documentation {
        position: absolute;
        z-index: 2;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--black);
        color: white;
        transition: bottom 0.37s ease;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        /* align-items: center; */
        /* overflow-y: scroll; */
        /* overflow-x: hidden; */
    }
    h3 {
        font-size: xx-large;
        /* font-weight: 400; */
    }
    button {
        all: unset;
        cursor: pointer;
    }
    /* UI ELEMENTS */
    .arrow{
        position: absolute;
        z-index: 20 !important;
        width: 100px;
        transform: translate(-50%, -50%); 
        user-select: none;
        filter: invert();
        cursor: pointer;
        opacity: .5;
        transition: opacity 0.22s;;
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
        position: fixed;
        bottom: 10px;
        right: 5px;
        color: var(--white);
        padding: 10px;
        font-family: "Roboto Mono", sans-serif;
        font-size: 1.8em;
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
        z-index: 20;
    }
    /* THUMBNAILS */
    #currentItem {
        flex: 1;
        text-align: center; 
    }
    .ribbon{
        top: 0%;
        transform: rotate3d(1, 0, 0, 51deg) rotate3d(0, 0, 1, 43deg) !important;
        border-radius: 32px !important;
    }
    .item img {
        width: var(--size);
        height: var(--size);
        /* border-radius: 2%;  */
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
        /* border-radius: 2%; */
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
        /* border-radius: 2%; */
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
        transform-style: preserve-3d;
        perspective: 600px;
        transition: all 0.37s ease;
    }
    .current{
        /* box-shadow: 0px 0px 3px rgb(255, 255, 255); */
        z-index: 10 !important;
        opacity: 1 !important;
    }
    .currentButton{
        border: solid 2px var(--white) !important;
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
        /* border-radius: 3%; */
        border: solid 2px var(--white);
    }
    button.item:hover img{
        opacity: 0.4;
        /* border: solid 2px var(--white); */
    }
    button.item:hover video{
        /* border: solid 2px var(--white); */
        opacity: 0.4;
    }
    .lock{
        transition: all 0.32s !important;
    }
</style>