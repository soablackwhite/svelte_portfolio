<script>
  export let scrollThreshold = 70;
</script>

<div class="slidecontainer">
    <input type="range" min="10" max="200" bind:value={scrollThreshold} class="slider" id="sensitivity">
    <label for="#sensitivity"> scroll sensitivity</label><br>
</div>


<style>
    .slider {
        -webkit-appearance: none;
        appearance: none;
        width: 4rem;
        height: 0.2rem;
        z-index: 10;
        background: var(--white);
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s; 
        transition: opacity .2s;
        transform: rotate(90deg);
        position: absolute;
        right: -1rem;
        bottom: 4rem;
        width: 5.5rem;
        color: #FFFFFF;
    }
    .slider:hover {
        opacity: 1;
        box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 0.3), 0 4px 10px 0 rgb(0, 0, 0, 0.4);
    }
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 1rem;
        height: 1rem;
        background: var(--white);
        cursor: pointer;
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.572), 0 4px 20px 0 rgba(0, 0, 0, 0.556);
    }
    .slider::-moz-range-thumb {
        width: 50%;
        height: 25px;
        background: var(--white);
        cursor: pointer;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.509);
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
        color: #FFFFFF;
    }
</style>