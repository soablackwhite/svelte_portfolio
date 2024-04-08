<script lang="ts">
    import { onMount } from "svelte";
    import { rescale, clamp, contents } from "../scripts/functions";
    import { currentCircle } from "../stores";
    // parameters
    export let motion : string;
    export let direction: string;
    export let cardtype: string;
    // typescript interfaces
    interface TransformConfig {
        angle: number;
        xOff: number;
        yOff: number;
    }
    interface Transforms {
        [key: string]: TransformConfig;
    }
    $: ribbon = (motion === "ribbon") ? true : false;
    // scrol stuff
    let resetThreshold: number;
    let lock = false;
    let lockposition = 0;
    let past = 0;
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
            angle: 5,
            xOff: -400,
            yOff: -200,
        },
        "flip": {
            angle: 180,
            xOff: 0,
            yOff: 0,
        }
    }
    onMount(() => {
        const items = document.querySelectorAll('.item');
        let position = 5; // start w the first item
        function lockCarousel(newPosition: number, incr = 0){
            currentCircle.set(newPosition);
            position = newPosition;
            const transform = transforms[motion];
            let dir = (direction === "horizontal") ? [0, 1] : [1, 0];
            let pastlock = (("horizontal") ? -transform.xOff : -transform.yOff) * (position) * dir[1] + incr*dir[1];
            items.forEach(item => {
                let index = parseInt(item.getAttribute('data-offset'));
                let r = index - position;
                let abs = Math.abs(r);
                let alpha = (r === 0) ? 1 : rescale(1 - abs, -10, 0, 0, 0.15);
                let blur = (r === 0) ? 0 : rescale(abs, 0, 10, 2, 5);
                // item.style.transform = `translate3d(${-200 * r * dir[1] + incr*dir[1]}px, ${-320 * r * dir[0] + incr*dir[0]}px, 0)`;
                //motion & angle, lot of magic nbrs from testing
                if(motion==="ribbon" && direction ==="vertical"){
                    item.style.transform = `translate3d(${-200 * r * dir[1] + incr*dir[1]}px, ${-320 * r * dir[0] + incr*dir[0]}px, 0)`;
                }
                else if (motion==="ribbon" && direction ==="horizontal"){
                    item.style.transform = `translate3d(${-240 * r * dir[1] - 30}px, 0, 0)`;
                }
                else if (motion === "cubic"){
                    item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * 90}deg) translate3d(${220 * r * dir[1] + incr*dir[1]}px, ${-220 * r * dir[0] + incr*dir[0]}px, 0)`;
                } else if (motion === "concave") {
                    item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * 15}deg) translate3d(${-300 * r * dir[1] + incr*dir[1]}px, ${300 * r * dir[0] + incr*dir[0]}px, 0)`;
                } else if (motion === "convex") {
                    item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * 10}deg) translate3d(${300 * r * dir[1] + incr*dir[1]}px, ${-320 * r * dir[0] + incr*dir[0]}px, 0)`;
                } else if (motion ==="flip") {
                    item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * 180}deg)`;
                    alpha -= .1;
                } else {
                    item.style.transform = `translate3d(${-200 * r *dir[1]}px, ${-200 * r * dir[0]}px, 0)`;
                }
                // item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * transform.angle}deg) translate3d(${transform.xOff * r * dir[1] + incr*dir[1]}px, ${transform.yOff * r * dir[0] + incr*dir[0]}px, 0)`;
                // item.style.filter = `blur(${blur}px)`;
                alpha = (alpha < 0.134) ? 0 : alpha;
                // item.style.opacity = alpha;
                item.style.zIndex = `${1 - abs}`;
            });
            return(pastlock);
        };
        //update my carousel based on current position, which is found thru current scroll
        function updateCarousel(delta: number){
            const transform = transforms[motion];
            let max = 11;
            let offset = (direction === "horizontal")? -transform.xOff : -transform.yOff;
            // let offset = 200;
            let dir = (direction === "horizontal") ? [0, 1] : [1, 0];
            let lock = (delta > 0) ? Math.round(past/offset) : Math.round(past/offset);
            past += delta; //increment past dX/dY
            past = clamp(past, 0, max*offset); //limit dx/dy
            lock = clamp(lock, 0, max); //limit locking thumbnail to max
            items.forEach(item => {
                let index = parseInt(item.getAttribute('data-offset'));
                let r = index;
                let abs = Math.abs(r - lock);
                let alpha = (r === lock) ? 1 : rescale(1 - abs, -10, 0, 0, 0.15);
                let blur = (r === lock) ? 0 : rescale(abs, 0, 10, 2, 5);
                //motion & angle, lot of magic nbrs from testing
                if(motion==="ribbon" && direction ==="vertical"){
                    item.style.transform = `translate3d(${-200 * r * dir[1] + past*dir[1]}px, ${-320 * r * dir[0] + past*dir[0]}px, 0)`;
                }
                else if (motion==="ribbon" && direction ==="horizontal"){
                    item.style.transform = `translate3d(${-240 * r * dir[1] - 30}px, 0, 0)`;
                }
                else if (motion === "cubic"){
                    item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * 90}deg) translate3d(${220 * r * dir[1] + past*dir[1]}px, ${-220 * r * dir[0] + past*dir[0]}px, 0)`;
                } else if (motion === "concave") {
                    item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * 15}deg) translate3d(${-300 * r * dir[1] + past*dir[1]}px, ${300 * r * dir[0] + past*dir[0]}px, 0)`;
                } else if (motion === "convex") {
                    item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * 10}deg) translate3d(${300 * r * dir[1] + past*dir[1]}px, ${-320 * r * dir[0] + past*dir[0]}px, 0)`;
                } else if (motion ==="flip") {
                    item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * 180}deg)`;
                    alpha -= .1;
                } else {
                    item.style.transform = `translate3d(${-200*r*dir[1] + past*dir[1]}px, ${-200*r*dir[0] + past*dir[0]}px, 0)`;
                }
                // item.style.transform = `translate3d(${transform.xOff*r*dir[1] + past*dir[1]}px, ${transform.yOff*r*dir[0] + past*dir[0]}px, 0)`;
                item.style.transform = `rotate3d(${dir[0]}, ${dir[1]}, 0, ${r * transform.angle}deg) translate3d(${transform.xOff*r*dir[1] + past*dir[1]}px, ${transform.yOff*r*dir[0] + past*dir[0]}px, 0)`;
                // item.style.filter = `blur(${blur}px)`;
                alpha = (alpha < 0.134) ? 0 : alpha;
                // item.style.opacity = alpha;
                item.style.zIndex = `${1 - abs}`;
            });
            return(lock);
        };
        updateCarousel(position);
        //___________________________________SCROLL KEYBOARD______________________________________________
        function wheelScroll(e: WheelEvent){
            lock = false;
            let scroll = (Math.abs(e.deltaY) > Math.abs(e.deltaX)) ? e.deltaY : -e.deltaX;
            console.log(past);
            lockposition = updateCarousel(scroll);
            if(Math.abs(scroll) < 3){
                // lock = true;
                // past = lockCarousel(lockposition);
            }
            clearTimeout(resetThreshold);
            resetThreshold = setTimeout(function () {
                 //on scroll end, maybe later
            }, 90);
        }
        //___________________________________SCROLL KEYBOARD______________________________________________
        function arrowScroll(e: KeyboardEvent){
            if ( (e.key === 'ArrowRight' || e.key === 'ArrowDown') && position < items.length - 1) {
                updateCarousel(position + 1);
            } else if ( (e.key === 'ArrowLeft'||e.key==='ArrowUp') && position > 0) {
                updateCarousel(position - 1);
            }
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
    {#each contents as {title, thumbnail:{src, type}, alt, category, tech, description, media}, i}
    <!-- const { title, tech, category, alt, thumbnail }  = contents; -->   
        <div class="item" class:lock data-offset="{i}" >
            {#if type === "video"}
                <video alt ={alt} transition autoplay="autoplay" muted loop
                    onmouseover="this.pause()" 
                    onmouseout="this.play()" 
                    class="thumbnail" style="float:right; right:0rem">
                    <source src={src} type="video/mp4"> your browser does not support the video tag.
                </video>
            {:else }
                <img alt={alt} src={src}>
            {/if}
            {#if cardtype === "label"}<div id="category">{category}:</div>{/if}
            <div class="overlay">
                <h3> {title} </h3>
                <p>
                    {#if cardtype==="minimal"} <span>{category}:</span> {/if}
                    {tech}
                </p>
            </div>
        </div>
    {/each}
</main>

<style>
    .ribbon{
        transform: rotate3d(1, 0, 0, 51deg) rotate3d(0, 0, 1, 43deg) !important;
        border-radius: 32px !important;
    }
    .item img {
        width: var(--size);
        height: var(--size);
        border: solid 2px white;
        border-radius: 2%;
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.11), 0 6px 20px 0 rgba(204, 255, 20, 0);
    }
    .item video {
        width: var(--size) ;
        height: var(--size) ;
        object-fit: cover;
        border: solid 2px white;
        border-radius: 2%;
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.11), 0 6px 20px 0 rgba(204, 255, 20, 0);
    }
    #category{
        /* styling */
        /* box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.11), 0 6px 20px 3px rgba(0, 0, 0, 0.575); */
        background-color: white;
        color: black;
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
        background-color: white;
        color: black;
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
        /* overflow: hidden ; */
        transform-style: preserve-3d;
        perspective: 600px;
        pointer-events: none;
        z-index: 1 ;
    }
    div.item {   
        /* positioning */
        display: flex;
        justify-content: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        transition: opacity 0.1s linear;
    }
    .lock{
        transition: all .17s !important;
    }
</style>