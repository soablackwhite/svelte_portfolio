<script lang="ts">
    export let data;
    $: ({ alt, title, category, tech, description, media } = data || {});
    let blacked = true;
  </script>
  
  <div class="page" class:blacked>
    <div class="banner"></div>
    <div class="row" class:blacked>
      <div class="category" class:blacked><h2>{category}</h2></div>
      <div class="column" class:blacked>
        <div class="title" class:blacked><h1>{title}</h1></div>
        <div class="description" class:blacked><p>{@html description}</p></div>
        <!----------------------------------------------------- MEDIA PART --------------------------------------------------->
        {#each media as m}
            {#if m.type === "image"}
                <img class="media_container" src={m.src} alt={alt} >
            {:else if m.type === "video"}
            <!-- there was a transition property in this video tag maybe i should put it back -->
                <video class="media_container" autoplay muted loop onmouseout="this.play()"  style="float:right; right:0rem; width:100%; height:100%">
                    <source src={m.src} type="video/mp4">
                        Your browser does not support the video tag.
                </video>
            {:else if m.type === "youtube"}
                <!-- <iframe
                     src= {m.src} class="yt-video" title="YT video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe> -->
            {/if}
        {/each}
      </div>
    </div>
    
  </div>
  
  <style>
    .yt-video{
        height: 100% !important;
        min-height: 50vw !important;
    }
    .media_container{
        width: 100%;
        height: auto;
        min-height: 500px;
        padding: 3em 10vw;
    }
    .blacked {
        background-color: var(--black) !important;
    }
    .page {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: antiquewhite;
        overflow: auto;
    }
    .banner {
        position: sticky;
        top: 0;
        width: 100%;
        min-height: 140px;
        text-align: center;
    }
    .row {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .category {
        flex: 0 1 200px; /* flex-grow: 0, flex-shrink: 1, flex-basis: 200px */
        position: sticky;
        top: 140px;
        height: 75vh;
        /* FORMATTING & STYLE*/
        overflow-wrap: break-word;
        writing-mode: vertical-rl;
        text-align: center;
        color: var(--white);
        background-color: var(--black);
        border-right: var(--white) solid 1px;
        z-index: 2;
    }
    .category h2{
        font: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 4em;
    }
    .column{
        flex: 2;
        display: flex;
        flex-flow: column;
    }
    .title {
        /* position: sticky; */
        /* top: 140px; */
        margin-right: 10em;
        min-height: 150px;
        text-align: center;
        background-color: lightskyblue;
        z-index: 1;
        /* mask-image: linear-gradient(to top, transparent 1%, black 10%, black 90%, black 99%); */
    }
    .description {
        background-color: brown;
    }
    .description p {
        padding: 1em 20vw 1em 10vw;
        font-size: x-large;
        color: lightgrey !important;
    }
    @media(max-width: 576px){
        .title{
            min-height: 100px;
            padding: 2em 0.5em;
            margin-right: 0em;
        }
        .banner{
            background-color: var(--black);
            min-height: 210px;
            z-index: 3;
        }
        .category {
            flex: 2 1 200px; /* flex-grow: 0, flex-shrink: 1, flex-basis: 200px */
            position: sticky;
            top: 200px;
            height: auto;
            border-right: none;
            border-bottom: var(--white) 1px solid;
            writing-mode: horizontal-tb;
        }
        .category h2{
            font: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 3em;
        }
        .description p {
            padding: 0em 7vw 1em 7vw;
            font-size: x-large;
            color: lightgrey !important;
        }
        .title h1{
            font-size: 4em;
        }
    }
  </style>
  