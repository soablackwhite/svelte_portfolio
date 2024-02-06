<script>
    export let index = 0;
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
</script>

<div class="image-container ui">
    <div id="zoomer">
        {#if (index === 0 || index === 1)}
            <video autoplay playsinline muted loop preload="metadata" onmouseover="this.pause()" onmouseout="this.play()">
                <source src="/media/animated/legible.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        {:else}
            <img alt="profile" id="profile" src={icons[index]}/>
        {/if}
    </div>
</div>

<style>
    #zoomer{
        transition: transform 0.33s;
        border-radius: 100px;
        background-color: var(--black);
        z-index: 1;
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        transition: transform 0.13s, width 0.33s ease-in-out, height 0.33s ease-in-out;
    }
    #zoomer:hover{
        transform: scale(3.25);
    }
    #profile{
        width: 100px;
        height: auto;
        transition: transform 0.13s, width 0.33s ease-in-out, height 0.33s ease-in-out;
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
        transition: top 0.42s ease-in-out;
        z-index: 4 !important;
    }
    .image-container video {
        display: block;
        margin: auto;
        width:250px;
        height:250px;
        transition: transform 0.13s, width 0.33s ease-in-out, height 0.33s ease-in-out;
    }
    .image-container video:hover {
        transform: translate(var(--vidx), var(--vidy));
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