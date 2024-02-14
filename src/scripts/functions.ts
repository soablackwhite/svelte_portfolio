let isMedium;
//___________________________________CLAMP FUNCTION_______________________________________________
export const clamp = (num: number, min:number, max:number) => Math.min(Math.max(num, min), max);
//________________________________CHANGE CSS VARIABLES____________________________________________
export function get_css_var(v:string) {
  return(getComputedStyle(document.documentElement).getPropertyValue(v));
}
export function set_css_var(v:string, target:string, root:(null|HTMLElement)) {
  if (root){
    root.style.setProperty(v, target);
  }
}
//_________________________________MAP/SCALING FUNCTION___________________________________________
export function rescale (nbr:number, inMin:number, inMax:number, outMin:number, outMax:number) {
  return (nbr - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
//__________________________________UPDATE TAG FUNCTION___________________________________________
export function updateTag(index:number, cur:number, rt:HTMLElement) {
  set_css_var("--isindent", "0", rt);
  let insert: number;
  if (index === 3){
      insert = -1 * parseInt(get_css_var('--ang_img')) * (cur); //indent circle each time we move up
      set_css_var("--ang_start", `${insert}deg`, rt);
  }
  else {
      if(index == 2 || index == 4)
      {
          set_css_var("--isindent", "1", rt);
          insert = -1 * parseInt(get_css_var('--ang')) * (cur + Math.floor(cur/4));
      }
      else
      {
          insert = -1 * parseInt(get_css_var('--ang')) * (cur); //indent circle each time we move up
      }
      set_css_var("--ang_start", `${insert}deg`, rt);
  }
}
//_____________________________MEDIA QUERY FUNCTION MEDIUM_____________________________________
export function updateMedia(){isMedium = window.matchMedia("(min-width: 400px) and (max-width: 576px)").matches;}

//__________________________________GALLERY CONTENTS____________________________________________
export let contents = [{
    "title":"Comic",
    "video": false,
    "src": "/media/thumbnails/comic.png",
    "alt": "Comic thumbnail",
    "description": "Web Project: HTML, CSS, JS"
  },
  {
    "title": "ML Rock Paper Scissors",
    "video": false,
    "src": "/media/thumbnails/rps.png",
    "alt": "ML Rock Paper Scissors video",
    "description": "Web Project: ml5.js, p5.js, Teachable Machine"
  },
  {
    "title": "OFx Tunnel Maker",
    "video": false,
    "src": "/media/thumbnails/tunnel.png",
    "alt": "OFx Tunnel Maker image",
    "description": "Generative Art: C++, openFrameworks"
  },
  {
    "title": "Unity Gallery",
    "video": true,
    "src": "/media/animated/art.mp4",
    "alt": "Unity Gallery video",
    "description": "Generative Art: Unity, C#, GLSL"
  },
  {
    "title": "OS GIFs",
    "video": false,
    "src": "/media/animated/osgif.webp",
    "alt": "OS GIFs image",
    "description": "Generative Art: p5.js, OpenFrameworks, Processing"
  },
  {
    "title": "NYU Algorave",
    "video": true,
    "src": "/media/animated/cube.mp4",
    "alt": "NYU Algorave video",
    "description": "Live Coding: Hydra, Javascript, GLSL, TidalCycles"
  },
  {
    "title": "postcARds",
    "video": true,
    "src": "/media/animated/postcARds.mp4",
    "alt": "postcARds video",
    "description": "AR App: Unity, C#"
  },
  {
    "title": "Reccie",
    "video": true,
    "src": "/media/animated/genuary.mp4",
    "alt": "Reccie video",
    "description": "Recommendation system: p5.js  "
  },
  {
    "title": "Mistborn",
    "video": false,
    "src": "/media/animated/mistborn.gif",
    "alt": "Mistborn image",
    "description": "Game: Processing, Java"
  },
  {
    "title": "Gemstone",
    "video": false,
    "src": "/media/thumbnails/gemstone.png",
    "alt": "Gemstone video",
    "description": "Game: GMS2, GLSL"
  },
  {
    "title": "Mad Socks",
    "video": false,
    "src": "/media/thumbnails/madsocks.png",
    "alt": "Mad Socks image",
    "description": "Game: Unity, C#"
  },
  {
    "title": "Switch",
    "video": false,
    "src": "/media/thumbnails/switch.png",
    "alt": "Switch image",
    "description": "Game: GMS2"
  },
]