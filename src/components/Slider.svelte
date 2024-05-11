<script>
  export let scrollThreshold = 70;
</script>

<div class="slidecontainer">
    <input type="range" min="10" max="200" bind:value={scrollThreshold} class="slider" id="sensitivity">
    <label for="sensitivity"> scroll sensitivity</label><br>
</div>


<style>
    .slider {
        -webkit-appearance: none;
        appearance: none;
        width: 4rem;
        height: 0.2rem;
        z-index: 10;
        background: var(--black);
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s; 
        transition: opacity .2s, box-shadow .3s;
        transform: rotate(90deg);
        position: absolute;
        right: -1rem;
        bottom: 4rem;
        width: 5.5rem;
        color: var(--black);

    }
    .slider:hover {
        opacity: 1;
        box-shadow: 1px 2px 3px 0 rgb(0, 0, 0, 0.3), 4px -4px 5px 0 rgb(0, 0, 0, 0.2);
    }
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 1rem;
        height: 1rem;
        background: var(--black);
        cursor: pointer;
        box-shadow: 2px -2px 3px 0 rgba(0, 0, 0, 0.239), 2px -3px 4px 0 rgba(0, 0, 0, 0.225);
    }
    .slider::-moz-range-thumb {
        width: 50%;
        height: 25px;
        background: var(--black);
        cursor: pointer;
        box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, 0.175);
    }
    .slidecontainer label{
        z-index: 10;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s; 
        transition: opacity .2s;
        transform: rotate(-90deg);
        position: absolute;
        font-size: 0.9rem;
        right: -1.25rem;
        bottom: 9.8rem;
        width: 6.2rem;
        color: var(--black);
    }
</style>