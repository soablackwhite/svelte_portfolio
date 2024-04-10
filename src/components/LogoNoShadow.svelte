<script lang="ts">
    export let index:number;
    $: left = (index === 3) ? true : false;
    function update(){
        index = 0;
    }
</script>

<svg
viewBox="0 0 32 32"
   version="1.1"
   id="logo"
   sodipodi:docname="file_type_stata_icon_130148 (1).svg"
    inkscape:version="1.2.2 (b0a84865, 2022-12-01)" 
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs144">
    <filter
       id="a"
       width="1.3201177"
       height="1.3201177"
       x="-0.16005886"
       y="-0.16005886"
       style="color-interpolation-filters:sRGB">
      <feGaussianBlur
         stdDeviation=".54451453"
         id="feGaussianBlur135" />
    </filter>
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter4105"
       x="-0.072821818"
       y="-0.091466576"
       width="1.1456436"
       height="1.1472105">
      <feGaussianBlur
         stdDeviation="0.087589289"
         id="feGaussianBlur4107" />
    </filter>
  </defs>
  <g
     id="layer2">
    <path
       id="circle148"
       style="display:inline;opacity:0.857778;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.587507;stroke-dasharray:none;stroke-opacity:0;filter:url(#a)"
       transform="matrix(0.84887562,0,0,0.85323718,0.881154,2.5143491)"
       d="m 10.989192,16.225269 a 4.9999995,4.9999995 0 0 1 -4.999999,5 4.9999995,4.9999995 0 0 1 -4.99999956,-5 4.9999995,4.9999995 0 0 1 4.99999956,-4.999999 4.9999995,4.9999995 0 0 1 4.999999,4.999999 z" />
    <path
       id="circle146-5"
       style="display:inline;fill:none;stroke:#ffffff;stroke-width:0.5"
       d="m 10.833374,15.907873 a 4.9999995,4.9999995 0 0 1 -5,5 4.9999995,4.9999995 0 0 1 -4.999999,-5 4.9999995,4.9999995 0 0 1 4.999999,-4.999999 4.9999995,4.9999995 0 0 1 5,4.999999 z" />
    <path
       id="ellipse152-7"
       style="display:inline;fill:none;stroke:#ffffff;stroke-width:0.5"
       d="m 21.899854,15.974516 a 5,5.0000029 0 0 1 -5,5.000003 5,5.0000029 0 0 1 -5,-5.000003 5,5.0000029 0 0 1 5,-5.000003 5,5.0000029 0 0 1 5,5.000003 z" />
    <path
       id="path1204"
       style="display:inline;opacity:1;fill:none;stroke:#fefefe;stroke-width:0.5;stroke-dasharray:none;stroke-opacity:1"
       d="m 26.085938,12.222656 -2.13086,4.126953 -0.75,1.455079 h 5.761719 l -0.75,-1.455079 z m -3.507813,6.794922 -0.753906,1.460937 h 4.261719 4.259765 l -0.753906,-1.460937 z" />
    <path
       id="path1204-5"
       style="display:inline;opacity:0.0539499;fill:none;stroke:#000000;stroke-width:0.5;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter4105)"
       d="m 58.185282,12.356616 -2.13086,4.126953 -0.75,1.455078 h 5.761719 l -0.75,-1.455078 z m -3.507813,6.794922 -0.753906,1.460937 h 4.261719 4.259765 l -0.753906,-1.460937 z"
       transform="matrix(1.1498707,0,0,1.1498707,-40.732396,-2.6458512)" />
  </g>
</svg>



<style>
    :root {
        /* was -1.5 */
        --translate-x: 1rem; 
        --translate-y: 0rem;
        /* was 1 */
        --scale: 1.25;
        --rotate: 0deg;
    }
    #logo{
        z-index: 2;
        width : 10rem !important;
        height : auto !important;
        /* height: auto; */
        position: absolute;
        top: -2rem;
        left: .5rem;
        transition: all 0.3s ease;
        opacity:1;
        fill: #00000031;
        animation: enter 0.2s forwards;
    }
    .left {
        animation: exit 0.2s forwards !important;
    }
    #logo path{
        cursor: pointer;
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