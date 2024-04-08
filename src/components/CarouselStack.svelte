<script lang="ts">
    import { onMount } from "svelte";
    import { rescale, contents } from "../scripts/functions";
    export let motion: string;
    const stack = true;
    onMount(() => {
        const items = document.querySelectorAll('.item');
        let position = 5; // start w the first item
        const updateCarousel = (newPosition: number) => {
            position = newPosition;
            items.forEach(item => {position
                const offset = parseInt(item.getAttribute('data-offset'));
                const dir = [1, 0];
                const r = offset;
                const abs = Math.abs(r);
                const alpha = (r === position) ? 1 : rescale(offset, 0, 12, 1, 0);
                let overlay = item.querySelector(".overlay");
                let media = item.querySelector(".stack");
                media.style.boxShadow = (r === position) ?"1px 1px 0 1px #f9f9fb, -1px 0 0px 0 rgba(255, 255, 255, 0.01), 18px 18px 20px 0 rgba(255, 255, 255, 0.2)":"";
                overlay.style.display = (r === position) ? "block" : "none";

                let zoffset: number;
                if (motion === "mount"){
                    zoffset = -33;
                    overlay.style.transform = (r === position) ? "translate3D(-255px, -120px, 0px)": "";
                    item.style.transform = (r===position)?`translate3d(${300 * r *dir[1] - 50}px, ${zoffset}px, 0)`:`translate3d(${300 * r *dir[1] - 50}px, ${5 * r * dir[0] -50 - zoffset}px, 0)`;
                    item.style.zIndex = (r === position) ? "1" : `${1 - abs}`;
                }
                else {
                    zoffset = (r === position) ? 280 : 0;
                    overlay.style.transform = (r === position) ? "translate3D(-100px, -280px, 0px)": "";
                    item.style.transform = `translate3d(${300 * r *dir[1] - 50 - zoffset}px, ${5 * r * dir[0]}px, 0)`;
                    item.style.zIndex = `${1 - abs}`;
                }
                item.style.opacity = alpha;
            });
        };
        updateCarousel(position);
        document.addEventListener('keydown', (e) => {
            if ( (e.key === 'ArrowRight' || e.key === 'ArrowDown') && position < items.length) {
                updateCarousel(position + 1);
            } else if ( (e.key === 'ArrowLeft'||e.key==='ArrowUp') && position > 0) {
                updateCarousel(position - 1);
            }
        });
    })
</script>

<!-- images -->
<main id="carousel">
    {#each contents as {title, thumbnail:{src, type}, alt, category, tech, description, media}, i}
        <div class="item" data-offset="{i}" >
            {#if type === "video"}
                <video alt ={alt} transition autoplay="autoplay" muted loop
                    onmouseover="this.pause()" 
                    onmouseout="this.play()" 
                    class:stack
                    class="thumbnail" style="float:right; right:0rem">
                    <source src={src} type="video/mp4"> your browser does not support the video tag.
                </video>
            {:else }
                <img class:stack alt={alt} src={src}>
            {/if}
            <div class="overlay">
                <h3> {title} </h3>
                <p>
                    <span>{category}:</span>
                    {tech}
                </p>
            </div>
        </div>
    {/each}
</main>

<style>
    .stack{
        border-radius: 32px !important;
        transform: rotate3d(1, 0, 0, 51deg) rotate3d(0, 0, 1, 43deg);
        border: solid 2px white !important;
        transition: transform .1s;
    }
    .item img {
        width: var(--size);
        height: var(--size);
        border: solid 2px white;
        border-radius: 2%;
    }
    .item video {
        width: var(--size) ;
        height: var(--size) ;
        object-fit: cover;
        border: solid 2px white;
        border-radius: 2%;
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.11), 0 6px 20px 0 rgba(204, 255, 20, 0);
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
        text-align: left;
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
        transition: transform 0.22s linear, opacity 0.2s linear;
    }
</style>