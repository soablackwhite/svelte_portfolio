<script lang="ts">
    export let index:number;
    $: left = (index === 3) ? true : false;
    function update(){
        index = 0;
    }
</script>
<svg
   viewBox="0 0 128 64"
   version="1.1"
   id="logo"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <g
     id="g3731"
     style="display:inline">
    <path
       id="path7580"
       class="outer"
       style="display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none"
       d="M 47.28361,31.850835 A 15.432775,15.432775 0 0 1 31.850835,47.28361 15.432775,15.432775 0 0 1 16.41806,31.850835 15.432775,15.432775 0 0 1 31.850835,16.41806 15.432775,15.432775 0 0 1 47.28361,31.850835 Z" />
    <path
       id="path3725"
       class="inner"
       style="display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1"
       d="M 47.432775,32 A 15.432775,15.432775 0 0 1 32,47.432775 15.432775,15.432775 0 0 1 16.567225,32 15.432775,15.432775 0 0 1 32,16.567225 15.432775,15.432775 0 0 1 47.432775,32 Z" />
    <path
       id="path1183-1"
       class="outer"
       style="display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none"
       d="M 82.283612,31.850835 A 15.432775,15.432775 0 0 1 66.850837,47.28361 15.432775,15.432775 0 0 1 51.418062,31.850835 15.432775,15.432775 0 0 1 66.850837,16.41806 15.432775,15.432775 0 0 1 82.283612,31.850835 Z" />
    <path
       id="path3727"
       class="inner"
       style="display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1"
       d="M 82.432775,32 A 15.432775,15.432775 0 0 1 67,47.432775 15.432775,15.432775 0 0 1 51.567225,32 15.432775,15.432775 0 0 1 67,16.567225 15.432775,15.432775 0 0 1 82.432775,32 Z" />
    <path
       id="path2113"
       class="outer"
       style="display:inline;fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:2.64583;stroke-dasharray:none;stroke-opacity:1"
       d="m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z"
       transform="matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)" />
    <path
       id="path3729"
       class="inner"
       style="display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.05833;stroke-dasharray:none;stroke-opacity:1"
       d="m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z"
       transform="matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)" />
  </g>
</svg>





<style>
    :root {
        /* was -1.5 */
        --translate-x: 0rem; 
        --translate-y: 1.5rem;
        /* was 1 */
        --scale: 1.25;
        --rotate: 0deg;
    }
    #logo{
        z-index: 2;
        width : 12rem !important;
        height : auto !important;
        position: absolute;
        top: -2rem;
        left: .5rem;
        transition: all 0.3s ease;
        opacity:1;
        animation: enter 0.2s forwards;
        cursor: pointer;
    }
    .left {
        animation: exit 0.2s forwards !important;
    }
    .inner {
        /* stroke: var(--black) !important; */
        stroke: rgba(255, 255, 255, 0) !important;
        /* stroke-width: 3px !important; */
    }
    .outer {
        /* stroke: rgba(calc( 255 - var(--dark))) !important; */
        /* stroke: rgb(calc( 1 - var(--dark))) !important; */
        stroke: rgb(calc(50 + 200 * var(--dark)), calc( 50 + 200 * var(--dark)), calc( 50 + 200 * var(--dark))) !important;

        /* filter: invert(calc(1 - var(--dark))); */
        stroke-width: 2px !important;
    }
    @keyframes enter {
        0% {
            transform: translate(-12rem, var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));
            filter: blur(5px);
        }
        25% {
            filter: blur(3px);
        }
        75% {
            filter: blur(2px);
        }
        100% {
            transform: translate(var(--translate-x), var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));
            filter: blur(0px);
        }
    }
    @keyframes exit {
        0% {
            transform: translate(var(--translate-x), var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));
            filter: blur(0px);
        }
        25% {
            filter: blur(1px);
        }
        75% {
            filter: blur(3px);
        }
        100% {
            transform: translate(-12rem, var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));
            filter: blur(0px);
        }
    }
    
</style>