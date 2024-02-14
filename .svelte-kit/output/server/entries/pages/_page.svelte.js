import { c as create_ssr_component, b as add_attribute, a as subscribe, d as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const css$8 = {
  code: ":root{--black:#121212;--white:#faf5f5;--yellow:rgb(249, 223, 77);--dist:-16rem;--ang:-18deg;--ang_start:0deg;--ang_img:-33deg;--dist_img:-13rem;--indent_ui:0rem;--isindent:0deg;--vidy:1rem;--vidx:0rem}",
  map: null
};
const Manager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loaded;
  loaded = false;
  $$result.css.add(css$8);
  return `${loaded ? ` <transition${add_attribute("in", true, 0)}${add_attribute("out", false, 0)}>${slots.main ? slots.main({}) : ` `}</transition>` : ` <transition${add_attribute("in", true, 0)}${add_attribute("out", false, 0)}>${slots.loader ? slots.loader({}) : ` `} ${slots.bs ? slots.bs({}) : ` `}</transition>`}`;
});
function get_css_var(v) {
  return getComputedStyle(document.documentElement).getPropertyValue(v);
}
function set_css_var(v, target, root) {
  if (root) {
    root.style.setProperty(v, target);
  }
}
function rescale(nbr, inMin, inMax, outMin, outMax) {
  return (nbr - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
function updateTag(index, cur, rt) {
  set_css_var("--isindent", "0", rt);
  let insert;
  if (index === 3) {
    insert = -1 * parseInt(get_css_var("--ang_img")) * cur;
    set_css_var("--ang_start", `${insert}deg`, rt);
  } else {
    if (index == 2 || index == 4) {
      set_css_var("--isindent", "1", rt);
      insert = -1 * parseInt(get_css_var("--ang")) * (cur + Math.floor(cur / 4));
    } else {
      insert = -1 * parseInt(get_css_var("--ang")) * cur;
    }
    set_css_var("--ang_start", `${insert}deg`, rt);
  }
}
let contents = [
  {
    "title": "Comic",
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
  }
];
let currentCircle = writable(0);
let transitioned = writable(false);
const css$7 = {
  code: "#logo.svelte-cbyka1.svelte-cbyka1{z-index:1;width:10rem;height:auto;position:fixed;top:-2rem;left:1rem;transition:transform 0.2s ease-in-out;opacity:1;fill:#00000031}#logo.svelte-cbyka1 path.svelte-cbyka1{cursor:pointer}@media(max-height: 576px){#logo.svelte-cbyka1.svelte-cbyka1{transform:translate(-4rem, 2rem) rotate(90deg) scale(0.8)}}@media(max-width: 341px){#logo.svelte-cbyka1.svelte-cbyka1{transform:translate(-4.5rem, 1rem) rotate(90deg) scale(0.8)}}@media(max-width: 400px){#logo.svelte-cbyka1.svelte-cbyka1{transform:translate(-4rem, 2rem) rotate(90deg)}}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentCircle;
  $$unsubscribe_currentCircle = subscribe(currentCircle, (value) => value);
  let { index } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$7);
  $$unsubscribe_currentCircle();
  return `<svg viewBox="0 0 32 32" version="1.1" id="logo" sodipodi:docname="file_type_stata_icon_130148 (1).svg" inkscape:version="1.2.2 (b0a84865, 2022-12-01)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="svelte-cbyka1"><defs id="defs144"><filter id="c" width="1" height="1" x="0" y="0" style="color-interpolation-filters:sRGB"><feComposite in="BackgroundImage" in2="SourceGraphic" operator="arithmetic" result="composite1" id="feComposite132"></feComposite></filter><filter id="a" width="1.434176" height="1.434176" x="-0.21708802" y="-0.21708801" style="color-interpolation-filters:sRGB"><feGaussianBlur stdDeviation=".54451453" id="feGaussianBlur135"></feGaussianBlur></filter><filter id="b" width="1.434176" height="1.434176" x="-0.21708802" y="-0.21708801" style="color-interpolation-filters:sRGB"><feGaussianBlur stdDeviation=".54451453" id="feGaussianBlur138"></feGaussianBlur></filter><filter id="d" width="1.2616747" height="1.3019534" x="-0.13083734" y="-0.15097669" style="color-interpolation-filters:sRGB"><feGaussianBlur stdDeviation=".48753056" id="feGaussianBlur141"></feGaussianBlur></filter><filter inkscape:collect="always" style="color-interpolation-filters:sRGB" id="filter4105" x="-0.072821822" y="-0.091466578" width="1.1456436" height="1.1472105"><feGaussianBlur inkscape:collect="always" stdDeviation="0.087589289" id="feGaussianBlur4107"></feGaussianBlur></filter></defs><path id="circle146" style="stroke-width:0.5;stroke-opacity:0.0207254" d="m 11,16 a 4.9999995,4.9999995 0 0 1 -5,5 4.9999995,4.9999995 0 0 1 -5,-5 4.9999995,4.9999995 0 0 1 5,-5 4.9999995,4.9999995 0 0 1 5,5 z" class="svelte-cbyka1"></path><path id="circle148" style="opacity:0.257778;fill:none;stroke:#000000;stroke-width:1.72809;filter:url(#a)" transform="matrix(0.84887562,0,0,0.85323718,0.881154,2.5143491)" d="m 10.989192,16.225269 a 4.9999995,4.9999995 0 0 1 -4.999999,5 4.9999995,4.9999995 0 0 1 -4.99999956,-5 4.9999995,4.9999995 0 0 1 4.99999956,-4.999999 4.9999995,4.9999995 0 0 1 4.999999,4.999999 z" class="svelte-cbyka1"></path><path id="circle150" style="opacity:0.257778;fill:none;stroke:#000000;stroke-width:1.72809;filter:url(#b)" transform="matrix(0.84887562,0,0,0.85323718,11.406045,2.5145365)" d="m 10.989192,16.225269 a 4.9999995,4.9999995 0 0 1 -4.999999,5 4.9999995,4.9999995 0 0 1 -4.99999956,-5 4.9999995,4.9999995 0 0 1 4.99999956,-4.999999 4.9999995,4.9999995 0 0 1 4.999999,4.999999 z" class="svelte-cbyka1"></path><path id="ellipse152" style="stroke-width:0.5" d="m 22.266479,16.066643 a 5,5.0000029 0 0 1 -5,5.000003 5,5.0000029 0 0 1 -5,-5.000003 5,5.0000029 0 0 1 5,-5.000003 5,5.0000029 0 0 1 5,5.000003 z" class="svelte-cbyka1"></path><path id="circle146-5" style="stroke:#ffffff;stroke-width:0.5" d="m 10.833374,15.907873 a 4.9999995,4.9999995 0 0 1 -5,5 4.9999995,4.9999995 0 0 1 -4.999999,-5 4.9999995,4.9999995 0 0 1 4.999999,-4.999999 4.9999995,4.9999995 0 0 1 5,4.999999 z" class="svelte-cbyka1"></path><path id="ellipse152-7" style="stroke:#ffffff;stroke-width:0.5" d="m 22.099854,15.974516 a 5,5.0000029 0 0 1 -5,5.000003 5,5.0000029 0 0 1 -5,-5.000003 5,5.0000029 0 0 1 5,-5.000003 5,5.0000029 0 0 1 5,5.000003 z" class="svelte-cbyka1"></path><path id="triangle-1" style="opacity:1;fill:#12121265;stroke:#fefefe;stroke-width:0.5;stroke-dasharray:none;stroke-opacity:1" inkscape:transform-center-y="-1.3762219" d="m 26.985938,12.222656 -2.13086,4.126953 -0.75,1.455079 h 5.761719 l -0.75,-1.455079 z m -3.507813,6.794922 -0.753906,1.460937 h 4.261719 4.259765 l -0.753906,-1.460937 z" class="svelte-cbyka1"></path><path id="path1204-5" style="opacity:0.0539499;fill:none;stroke:#000000;stroke-width:0.5;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter4105)" inkscape:transform-center-y="-1.5824766" d="m 58.185282,12.356616 -2.13086,4.126953 -0.75,1.455078 h 5.761719 l -0.75,-1.455078 z m -3.507813,6.794922 -0.753906,1.460937 h 4.261719 4.259765 l -0.753906,-1.460937 z" transform="matrix(1.1498707,0,0,1.1498707,-40.732396,-2.6458512)" inkscape:transform-center-x="-2.5286243e-06" class="svelte-cbyka1"></path></svg>`;
});
const css$6 = {
  code: ".indented.svelte-17slwxt.svelte-17slwxt{left:calc(25% + 50vw) !important;top:calc(50% - 4rem + var(--indent_ui)) !important;border:solid color(var(--white))}.menu.svelte-17slwxt.svelte-17slwxt{left:calc(50% + 6.5rem);top:calc(50% - 4rem + var(--indent_ui));position:fixed !important;width:8rem;text-align:center;opacity:1;transition:left 0.66s ease-in-out, top 0.66s ease-in-out;list-style-type:none;z-index:2}.menu-item.svelte-17slwxt.svelte-17slwxt{all:unset;cursor:pointer;display:block;width:8rem;position:relative;opacity:1;color:#f2f2f2;text-shadow:1px 1px #ffffff28;transition:transform  0.13s ease-in-out;margin-bottom:0.5rem;text-decoration:none;font-size:1.1rem}.menu-item.svelte-17slwxt.svelte-17slwxt:hover{transform:scale(1.15);background-color:var(--white);text-shadow:1px 1px #18181839;color:#121212}.selected.svelte-17slwxt.svelte-17slwxt{transform:scale(1.15);background-color:var(--white);text-shadow:1px 1px #18181839;color:#121212}@media(max-width: 576px){.menu.svelte-17slwxt.svelte-17slwxt{left:calc(50% + 3rem);top:calc(50% + var(--indent_ui) - 4rem);width:7rem}}@media(max-width: 400px){.menu.svelte-17slwxt.svelte-17slwxt{top:calc(84.2%);bottom:100% !important;;;left:0%}.menu-item.svelte-17slwxt.svelte-17slwxt{font-size:2vh;width:7rem}}@media(max-width: 341px){.menu.svelte-17slwxt.svelte-17slwxt{top:calc(80%);bottom:100% !important;;;left:0%}.menu-item.svelte-17slwxt.svelte-17slwxt{font-size:1rem;width:7rem}}a.svelte-17slwxt.svelte-17slwxt{all:unset;cursor:pointer;transition:font 0.17s !important}.links.svelte-17slwxt.svelte-17slwxt{z-index:3;position:fixed;top:1%;right:1%}.links.svelte-17slwxt img.svelte-17slwxt:hover{background-color:rgb(0,0,0);border-radius:50%}.links.svelte-17slwxt img.svelte-17slwxt:focus{background-color:rgb(0,0,0);border-radius:50%}.links.svelte-17slwxt img.svelte-17slwxt{filter:invert(1);margin:0.5rem;width:3rem;transition:width 0.17s ease-in}@media(max-width: 576px){.links.svelte-17slwxt img.svelte-17slwxt{width:3rem}.links.svelte-17slwxt.svelte-17slwxt{width:4rem}}@media(max-width: 400px){.links.svelte-17slwxt img.svelte-17slwxt{width:2.5rem;margin:0.2rem}.links.svelte-17slwxt.svelte-17slwxt{width:auto}}@media(max-width: 341px){.links.svelte-17slwxt img.svelte-17slwxt{width:2rem}}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let indented;
  let { index = 0 } = $$props;
  let items = ["home", "about", "skills", "projects"];
  let links = [
    {
      src: `/media/icons/github.svg`,
      alt: `github icon`,
      link: `https://github.com/soablackwhite`
    },
    {
      src: `/media/icons/linkedin.svg`,
      alt: `linkedin icon`,
      link: `https://www.linkedin.com/in/omarouldali/`
    },
    {
      src: `/media/icons/twitter.svg`,
      alt: `twitter icon`,
      link: `https://twitter.com/noiseOmie`
    },
    {
      src: `/media/icons/mail.svg`,
      alt: `mail icon`,
      link: `mailto:omar.ould.ali@nyu.edu`
    }
  ];
  document.querySelector(":root");
  transitioned.subscribe((value) => {
  });
  currentCircle.subscribe((value) => {
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$6);
  indented = index === 3 ? true : false;
  return ` <div class="${["menu ui svelte-17slwxt", indented ? "indented" : ""].join(" ").trim()}">${each(items, (item, i) => {
    return `<button class="${["menu-item svelte-17slwxt", index === i ? "selected" : ""].join(" ").trim()}">${escape(item)} </button>`;
  })}</div>  <div class="links svelte-17slwxt">${each(links, (link, i) => {
    return `<a${add_attribute("href", link.link, 0)}${add_attribute("tabindex", i, 0)} target="_blank" rel="noreferrer nofollow" class="svelte-17slwxt"><img${add_attribute("alt", link.alt, 0)}${add_attribute("src", link.src, 0)} class="svelte-17slwxt"></a>`;
  })} </div>`;
});
const css$5 = {
  code: ".slider.svelte-1rbw8cf.svelte-1rbw8cf{-webkit-appearance:none;appearance:none;width:4rem;height:0.2rem;z-index:10;background:var(--white);outline:none;opacity:0.7;-webkit-transition:.2s;transition:opacity .2s;transform:rotate(90deg);position:absolute;right:-1rem;bottom:4rem;width:5.5rem;color:#FFFFFF}.slider.svelte-1rbw8cf.svelte-1rbw8cf:hover{opacity:1;box-shadow:0 2px 10px 0 rgb(0, 0, 0, 0.3), 0 4px 10px 0 rgb(0, 0, 0, 0.4)}.slider.svelte-1rbw8cf.svelte-1rbw8cf::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1rem;height:1rem;background:var(--white);cursor:pointer;box-shadow:0 2px 20px 0 rgba(0, 0, 0, 0.572), 0 4px 20px 0 rgba(0, 0, 0, 0.556)}.slider.svelte-1rbw8cf.svelte-1rbw8cf::-moz-range-thumb{width:50%;height:25px;background:var(--white);cursor:pointer;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.509)}.slidecontainer.svelte-1rbw8cf label.svelte-1rbw8cf{z-index:10;outline:none;opacity:0.7;-webkit-transition:.2s;transition:opacity .2s;transform:rotate(-90deg);position:absolute;font-size:0.9rem;right:-1.25rem;bottom:9.8rem;width:6.2rem;color:#FFFFFF}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { scrollThreshold = 70 } = $$props;
  if ($$props.scrollThreshold === void 0 && $$bindings.scrollThreshold && scrollThreshold !== void 0)
    $$bindings.scrollThreshold(scrollThreshold);
  $$result.css.add(css$5);
  return `<div class="slidecontainer svelte-1rbw8cf"><input type="range" min="10" max="200" class="slider svelte-1rbw8cf" id="sensitivity"${add_attribute("value", scrollThreshold, 0)}> <label for="html" class="svelte-1rbw8cf" data-svelte-h="svelte-s9qfyl">scroll sensitivity</label><br> </div>`;
});
const css$4 = {
  code: ".bigger.svelte-1s2zdpl.svelte-1s2zdpl{border-radius:0% !important;z-index:0 !important;position:relative}.bigger2.svelte-1s2zdpl.svelte-1s2zdpl{border-radius:0px !important;width:50vw !important;height:100vh !important;z-index:0 !important;position:relative;opacity:0 !important}#zoomer.svelte-1s2zdpl.svelte-1s2zdpl{transition:transform 0.33s;z-index:3;border-radius:100px;background-color:var(--black);width:250px;height:250px;display:flex;justify-content:center;transition:transform 0.13s, width 0.33s ease-in-out, height 0.33s ease-in-out, border-radius 0.72s ease-in-out, opacity 0.4s ease-in-out;;}#zoomer.svelte-1s2zdpl.svelte-1s2zdpl:hover{transform:scale(3.25)}#profile.svelte-1s2zdpl.svelte-1s2zdpl{width:100px;height:auto;transition:transform 0.13s, width 0.33s ease-in-out, height 0.33s ease-in-out;fill:var(--white)}.image-container.svelte-1s2zdpl.svelte-1s2zdpl{top:calc(50% + var(--indent_ui));left:50%;transform:translate(-50%, -50%);border:solid 2px var(--white);border-radius:50%;overflow:hidden;box-shadow:0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(204, 255, 20, 0);transition:top 0.42s ease-in-out, border-radius 0.72s ease-in-out;z-index:3}.image-container.svelte-1s2zdpl video.svelte-1s2zdpl{position:absolute;margin:auto;width:250px;height:250px;transition:transform 0.13s, width 0.33s ease-in-out, height 0.33s ease-in-out}.image-container.svelte-1s2zdpl video.svelte-1s2zdpl:hover{transform:translate(var(--vidx), var(--vidy))}.ui.svelte-1s2zdpl.svelte-1s2zdpl{position:fixed !important}@media(max-width: 576px){.image-container.svelte-1s2zdpl video.svelte-1s2zdpl{width:150px;height:150px}#zoomer.svelte-1s2zdpl.svelte-1s2zdpl{width:150px;height:150px}#profile.svelte-1s2zdpl.svelte-1s2zdpl{width:65px;height:auto}.bigger2.svelte-1s2zdpl.svelte-1s2zdpl{width:100vw !important;height:100vh !important}}@media(max-width: 400px){.image-container.svelte-1s2zdpl video.svelte-1s2zdpl{width:175px;height:175px}.image-container.svelte-1s2zdpl.svelte-1s2zdpl{top:calc(50% + var(--indent_ui));left:70%}#zoomer.svelte-1s2zdpl.svelte-1s2zdpl{width:175px;height:175px}#profile.svelte-1s2zdpl.svelte-1s2zdpl{width:65px;height:auto}.bigger2.svelte-1s2zdpl.svelte-1s2zdpl{width:50vw !important;height:100vh !important}}@media(max-width: 341px){.image-container.svelte-1s2zdpl video.svelte-1s2zdpl{width:150px;height:150px}.image-container.svelte-1s2zdpl.svelte-1s2zdpl{top:calc(50% + var(--indent_ui));left:70%}#zoomer.svelte-1s2zdpl.svelte-1s2zdpl{width:150px;height:150px}#profile.svelte-1s2zdpl.svelte-1s2zdpl{width:65px;height:auto}}",
  map: null
};
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bigger;
  let bigger2;
  let { index } = $$props;
  const icons = [
    "/media/icons/html5.svg",
    "/media/icons/css3.svg",
    "/media/icons/bootstrap.svg",
    "/media/icons/js.svg",
    "/media/icons/c.svg",
    "/media/icons/cplus.svg",
    "/media/icons/nodejs.svg",
    "/media/icons/flask.svg",
    "/media/icons/python.svg",
    "/media/icons/sql.svg",
    "/media/icons/r.svg",
    "/media/icons/stata.svg"
  ];
  transitioned.subscribe((value) => {
  });
  let cur;
  currentCircle.subscribe((value) => {
    cur = value;
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$4);
  bigger = index === 3 ? true : false;
  bigger2 = index === 3 ? true : false;
  return `<div class="${["image-container ui svelte-1s2zdpl", bigger ? "bigger" : ""].join(" ").trim()}"><div id="zoomer" role="img" class="${["svelte-1s2zdpl", bigger2 ? "bigger2" : ""].join(" ").trim()}">${index === 0 || index === 1 ? `<video autoplay playsinline muted loop preload="metadata" onmouseover="this.pause()" onmouseout="this.play()" class="svelte-1s2zdpl" data-svelte-h="svelte-1np8fm0"><source src="/media/animated/legible.mp4" type="video/mp4">
                Your browser does not support the video tag.</video>` : `${index != 3 ? `<img alt="profile" id="profile"${add_attribute("src", icons[cur], 0)} class="svelte-1s2zdpl">` : ``}`}</div> </div>`;
});
const css$3 = {
  code: ".centered.svelte-yw1g9k{top:50% !important;left:50% !important;transform:rotate(0deg) translateX(0rem) !important;opacity:0 !important}.icon-circle.svelte-yw1g9k{top:calc(50% - 1.5rem + var(--indent_ui));left:calc(50% - 2rem);border:none;text-align:center;transition:width 0.17s ease-in, opacity 0.13s ease-in-out, transform 0.33s, border-top 0.5s, top 0.33s}.disappear.svelte-yw1g9k{padding-left:10rem;opacity:0 !important}.circle.svelte-yw1g9k{left:calc(50% - 4rem);top:calc(50% - 1rem + var(--indent_ui));height:2rem;width:8rem;text-align:right;font-size:1.2rem;color:var(--white);text-shadow:1px 1px 1px #000000;border-top:solid 1.5px var(--white);padding-bottom:1.5rem;transition:opacity 0.13s ease-in-out, transform 0.33s, border-top 0.5s, top 0.33s}.tags.svelte-yw1g9k{position:fixed;z-index:1;opacity:1}.label.svelte-yw1g9k{position:fixed;display:block;left:calc(50% - 6.5rem);top:calc(50% - 1.5rem + var(--indent_ui));height:2rem;width:12rem;text-align:center;font-size:x-large;color:var(--white);text-shadow:2px 2px 6px #000000;padding-bottom:1.5rem;transition:padding-left 0.3s ease-in-out, opacity 0.29s ease-in-out, transform 0.33s, border-top 0.5s, top 0.33s}@media(max-width: 576px){.circle.svelte-yw1g9k{left:calc(50% - 3.5rem);top:calc(50% + var(--indent_ui) - 1rem);width:7rem;height:2rem;text-align:right;border-top:none}.label.svelte-yw1g9k{left:calc(50% - 3.5rem);top:calc(50% - 1.5rem + var(--indent_ui));height:2rem;width:7rem}.menu.svelte-yw1g9k{left:calc(50% + 3rem);top:calc(50% + var(--indent_ui) - 4rem);width:7rem}.icon-circle.svelte-yw1g9k{left:calc(50% - 1.5rem)}}@media(max-width: 400px){.circle.svelte-yw1g9k{top:calc(50% + var(--indent_ui) - 1rem);left:calc(70% - 4rem);font-size:1.3rem;width:8rem;height:2rem;text-align:right;border-top:none}.icon-circle.svelte-yw1g9k{left:calc(70% - 2rem)}.label.svelte-yw1g9k{left:calc(70% - 4rem);top:calc(50% - 1.5rem + var(--indent_ui));height:2rem;width:8rem}}@media(max-width: 341px){.circle.svelte-yw1g9k{top:calc(50% + var(--indent_ui) - 1rem);left:calc(70% - 4rem);font-size:1.1rem;width:8rem;height:2rem;text-align:right;border-top:none}.icon-circle.svelte-yw1g9k{left:calc(70% - 2rem)}}",
  map: null
};
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let test;
  let { idx } = $$props;
  let { sz } = $$props;
  let { custom } = $$props;
  let alpha;
  let disappear = false;
  let cur;
  currentCircle.subscribe((value) => {
    cur = value;
  });
  function generateTransform() {
    if (custom === "label") {
      return `rotate(calc(var(--ang_start) + ${4 * idx - 1}*var(--ang) + ${idx}*var(--ang)*var(--isindent))) translateX(var(--dist))`;
    } else if (custom === "icon-circle") {
      return `rotate(calc(var(--ang_start) + ${idx}*var(--ang_img))) translateX(var(--dist_img))`;
    } else {
      return `rotate(calc(var(--ang_start) + ${idx}*var(--ang) + ${Math.floor(idx / 4)}*var(--ang)*var(--isindent))) translateX(var(--dist))`;
    }
  }
  function generateAlpha(cur2, idx2, sz2) {
    if (idx2 === cur2) {
      alpha = 1;
    } else {
      if (custom === "label") {
        let thresh = Math.abs(cur2 - idx2 * 4 - 1);
        disappear = thresh < 4 ? false : true;
      } else {
        alpha = Math.abs(idx2 - cur2);
        alpha = rescale(alpha, 1, sz2, 0.7, 0) - 0.4;
      }
    }
    return alpha;
  }
  if ($$props.idx === void 0 && $$bindings.idx && idx !== void 0)
    $$bindings.idx(idx);
  if ($$props.sz === void 0 && $$bindings.sz && sz !== void 0)
    $$bindings.sz(sz);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  $$result.css.add(css$3);
  test = generateAlpha(cur, idx, sz);
  return `<div class="${[
    "tags " + escape(custom, true) + " svelte-yw1g9k",
    disappear ? "disappear" : ""
  ].join(" ").trim()}" style="${"transform: " + escape(generateTransform(), true) + "; opacity: " + escape(test, true) + ";"}">${slots.default ? slots.default({}) : ` `} </div>`;
});
const css$2 = {
  code: ".container.svelte-jkqzjl{position:absolute;width:var(--txt_pad);left:calc(50% - var(--txt_pad)/2 - 250px - 3rem);top:calc(50%);font-size:x-large}.typewriter.svelte-jkqzjl{overflow:hidden;z-index:10;height:auto;transition:max-height 0.5s ease-out;background-color:#00000000;hyphens:auto;-webkit-hyphens:auto;-ms-hyphens:auto;-moz-hyphens:auto;transition:all 0.3s ease !important}.border.svelte-jkqzjl{position:absolute;left:0;top:0;bottom:0;transition:height 0.3s ease-in-out}.typewriter.svelte-jkqzjl::-webkit-scrollbar{width:0.5em;height:0.5em}.typewriter.svelte-jkqzjl::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}.typewriter.svelte-jkqzjl::-webkit-scrollbar-track{background-color:rgba(0, 0, 0, 0)}@media(max-width: 950px){.container.svelte-jkqzjl{left:calc(25% - var(--txt_pad)/2);top:calc(50%)}}@media(max-width: 820px){.container.svelte-jkqzjl{left:calc(25% - var(--txt_pad)/2);top:calc(50%)}}@media(max-width: 576px){.container.svelte-jkqzjl{left:calc(50% - var(--txt_pad)/2 + 1rem);top:calc(65%);font-size:large}}@media(max-width: 400px){.container.svelte-jkqzjl{left:calc(25% - var(--txt_pad)/2);top:calc(50%);font-size:large}}@media(max-width: 341px){.container.svelte-jkqzjl{left:calc(50% - var(--txt_pad)/2);top:calc(50%)}}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { texts } = $$props;
  let currentText = "";
  let contentDiv;
  let borderHeight = "0px";
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  $$result.css.add(css$2);
  return `<div class="container svelte-jkqzjl"><div${add_attribute("this", contentDiv, 0)}><div class="typewriter svelte-jkqzjl">${escape(currentText)}</div></div> <div class="border svelte-jkqzjl" style="${"height: " + escape(borderHeight, true) + ";"}"></div> </div>`;
});
let max = 3;
const Items = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index = 0 } = $$props;
  let { scrollThreshold } = $$props;
  let accumulatedDelta = 0;
  let resetThreshold;
  let rt = document.querySelector(":root");
  let labels = ["FRONTEND", "BACKEND", "DATA"];
  let cur;
  currentCircle.subscribe((value) => {
    cur = value;
  });
  let home_txt = [
    "welcome :)",
    "to navigate, use arrows ↑↓",
    "to navigate, scroll",
    "...feel free to adjust scrolling sensitivity to your liking in the bottom right corner!"
  ];
  let about_txt = [
    "hi i'm omar!",
    "i'm an NYU graduate.",
    "i'm a developer.",
    "i'm a designer.",
    "i like to play with data.",
    "i like to visualize code.",
    "my hobbies are reading, cooking, and running!"
  ];
  let tags = [
    { id: 0, content: [``] },
    { id: 1, content: [``] },
    {
      id: 2,
      content: [
        `html`,
        `css`,
        `bootstrap`,
        `javascript`,
        `c`,
        `c++`,
        `node.js`,
        `flask`,
        `python`,
        `sql`,
        `r`,
        `stata`
      ]
    },
    {
      id: 3,
      content: [
        {
          src: `/media/icons/github.svg`,
          alt: `github icon`,
          link: `https://github.com/soablackwhite`
        },
        {
          src: `/media/icons/linkedin.svg`,
          alt: `linkedin icon`,
          link: `https://www.linkedin.com/in/omarouldali/`
        },
        {
          src: `/media/icons/twitter.svg`,
          alt: `twitter icon`,
          link: `https://twitter.com/noiseOmie`
        },
        {
          src: `/media/icons/email.svg`,
          alt: `mail icon`,
          link: `mailto:omar.ould.ali@nyu.edu`
        }
      ]
    }
  ];
  function changeContent(increment) {
    accumulatedDelta += increment;
    if (Math.abs(accumulatedDelta) >= scrollThreshold) {
      if (accumulatedDelta > 0) {
        currentCircle.update((n) => n + 1);
        if (cur > tags[index].content.length - 1) {
          if (index < max) {
            index++;
            currentCircle.set(0);
          } else {
            currentCircle.set(tags[index].content.length - 1);
          }
        }
      } else if (accumulatedDelta < 0) {
        currentCircle.update((n) => n - 1);
        if (cur < 0) {
          if (index > 0) {
            index--;
            transitioned.set(false);
            currentCircle.set(tags[index].content.length - 1);
          } else {
            currentCircle.set(0);
          }
        }
      }
      updateTag(index, cur, rt);
      accumulatedDelta = 0;
    }
  }
  window.addEventListener("wheel", function(e) {
    changeContent(e.deltaY);
    clearTimeout(resetThreshold);
    resetThreshold = setTimeout(
      function() {
        accumulatedDelta = 0;
      },
      100
    );
  });
  window.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp" && document.activeElement === document.body) {
      console.log(scrollThreshold);
      changeContent(-scrollThreshold);
    }
    if (e.key === "ArrowDown" && document.activeElement === document.body) {
      console.log(scrollThreshold);
      changeContent(scrollThreshold);
    }
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.scrollThreshold === void 0 && $$bindings.scrollThreshold && scrollThreshold !== void 0)
    $$bindings.scrollThreshold(scrollThreshold);
  return `<div id="wheel"> ${index === 2 ? `<div>${each(labels, (label, i) => {
    return `${validate_component(Circle, "Circle").$$render(
      $$result,
      {
        idx: i,
        sz: labels[index].length - 1,
        custom: "label"
      },
      {},
      {
        default: () => {
          return `${escape(label)} `;
        }
      }
    )}`;
  })}</div>` : ``}  ${index === 0 ? `${validate_component(Typewriter, "Typewriter").$$render($$result, { texts: home_txt }, {}, {})}` : `${index === 1 ? `${validate_component(Typewriter, "Typewriter").$$render($$result, { texts: about_txt }, {}, {})}` : ``}`}  <div class="content">${each(tags[2].content, (tag, i) => {
    return `${validate_component(Circle, "Circle").$$render(
      $$result,
      {
        idx: i,
        sz: tags[index].content.length - 1,
        custom: "circle " + (index === 2 ? "" : "centered")
      },
      {},
      {
        default: () => {
          return `${escape(tag)} `;
        }
      }
    )}`;
  })}</div></div>`;
});
const css$1 = {
  code: '#loading.svelte-10mlhld{position:fixed;top:0;left:0;width:100%;height:100%;z-index:6;overflow:hidden;transition:opacity 1s ease-in-out}.loader.svelte-10mlhld{position:fixed;left:calc(50% - 7.5rem);top:calc(50% - 7.5rem);width:15rem;height:15rem;border-radius:50%;border:1px solid transparent;border-top-color:#ffffffd5;animation:svelte-10mlhld-spin 1.5s linear infinite}.loader.svelte-10mlhld:before{content:"";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:4px solid;border-top-color:rgb(18, 18, 18);animation:svelte-10mlhld-spin-reverse .55s linear infinite}.loader.svelte-10mlhld:after{content:"";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:2px solid transparent;border-top-color:#ffffffb6;animation:svelte-10mlhld-spin 2s linear infinite}@keyframes svelte-10mlhld-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-10mlhld-spin-reverse{0%{transform:rotate(0deg)}100%{transform:rotate(-360deg)}}@media(max-width: 576px){.loader.svelte-10mlhld{left:calc(50% - 4.5rem);top:calc(50% - 4.5rem);width:9rem;height:9rem}}@media(max-width: 400px){.loader.svelte-10mlhld{left:calc(70% - 5.25rem);top:calc(50% - 5.25rem);width:10.5rem;height:10.5rem}}@media(max-width: 341px){.loader.svelte-10mlhld{left:calc(70% - 4.5rem);top:calc(50% - 4.5rem);width:9rem;height:9rem}}',
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="loading" class="svelte-10mlhld" data-svelte-h="svelte-1mlx9lr"><div class="loader svelte-10mlhld"></div> </div>`;
});
const css = {
  code: "#back.svelte-1flos14.svelte-1flos14{position:relative;display:block;all:unset;cursor:pointer;font-size:x-large;transition:all 0.19s ease-in-out;margin:1rem;text-shadow:1px 1px 5px black}#back.svelte-1flos14.svelte-1flos14:hover{scale:1.13;text-shadow:2px 2px 10px black}.page.svelte-1flos14 h1.svelte-1flos14{display:block;position:relative;margin-top:0rem !important;text-align:center }.page.svelte-1flos14.svelte-1flos14{display:block;position:relative;margin:5rem;display:block}.frame.svelte-1flos14.svelte-1flos14{position:absolute;z-index:4;top:0%;left:25%;width:50vw !important;height:100vh !important;overflow:scroll;background-color:var(--black)}.frame.svelte-1flos14.svelte-1flos14::-webkit-scrollbar{width:0.5em;height:0.5em}.frame.svelte-1flos14.svelte-1flos14::-webkit-scrollbar-thumb{background-color:var(--white)}.frame.svelte-1flos14.svelte-1flos14::-webkit-scrollbar-track{background-color:rgba(0, 0, 0, 0)}.gallery-item.svelte-1flos14.svelte-1flos14{all:unset;cursor:pointer;display:inline-block;position:relative;width:200px;height:200px;margin:1.1rem;overflow:hidden}.gallery-item.svelte-1flos14.svelte-1flos14:focus{outline:solid rgba(255, 255, 255, 0.1) 20px}.gallery-item.svelte-1flos14 img.svelte-1flos14{width:100%;height:100%;object-fit:fill;transition:transform 0.3s}.gallery-item.svelte-1flos14:hover img.svelte-1flos14{transform:scale(1.15);box-sizing:content-box;transform-origin:50% 50%;filter:none}.gallery-item-overlay.svelte-1flos14.svelte-1flos14{position:absolute;top:0;left:0;width:100%;height:100%;opacity:1;background-color:rgba(0, 0, 0, 0.7);display:flex;flex-direction:column;justify-content:center;align-items:center;transition:opacity 0.3s ease-in-out}.gallery-item.svelte-1flos14:hover .gallery-item-overlay.svelte-1flos14{opacity:1;border:0.3rem solid var(--white);background-color:rgba(0, 0, 0, 0.2);transition:background-color 0.3s ease-in-out;transition:border 0.15s ease-in-out}.gallery-item-overlay.svelte-1flos14 h3.svelte-1flos14,.gallery-item-overlay.svelte-1flos14 p.svelte-1flos14{color:var(--white);text-align:center}.gallery-item-overlay.svelte-1flos14 h3.svelte-1flos14{font-size:x-large;margin-left:1rem;margin-right:1rem}.gallery-item-overlay.svelte-1flos14 p.svelte-1flos14{font-size:medium;margin-left:0.3rem;margin-right:0.3rem}.thumbnail.svelte-1flos14.svelte-1flos14{max-width:45rem;width:100%;height:auto;position:absolute;bottom:0rem}@media(max-width: 576px){.frame.svelte-1flos14.svelte-1flos14{width:100vw !important;height:100vh !important}}@media(max-width: 400){.frame.svelte-1flos14.svelte-1flos14{width:50vw !important;height:100vh !important}}",
  map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let t;
  transitioned.subscribe((value) => {
    t = value;
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css);
  return `${index === 3 && t ? `<div class="frame svelte-1flos14"> ${`${each(contents, (content, i) => {
    return `<button class="gallery-item svelte-1flos14">${content.video ? `<video transition autoplay="autoplay" muted loop preload="metadata" onmouseover="this.pause()" onmouseout="this.play()" class="thumbnail svelte-1flos14" style="float:right; right:0rem; width:100%; height:100%" data-svelte-h="svelte-bvajhi"><source${add_attribute("src", content.src, 0)} type="video/mp4">
                            Your browser does not support the video tag.
                        </video>` : `<img${add_attribute("src", content.src, 0)}${add_attribute("alt", content.alt, 0)} class="svelte-1flos14">`} <div class="gallery-item-overlay svelte-1flos14"><h3 class="svelte-1flos14">${escape(content.title)}</h3> <p class="svelte-1flos14">${escape(content.description)} </p></div> </button>`;
  })} `}</div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let index = 0;
  let scrollThreshold = 70;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<header data-svelte-h="svelte-12zoxwx"><title>Omar Ouldali</title> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="icon" type="image/x-icon" href="/media/icons/favicon.ico">  <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:wght@300;400;700;900&family=Montserrat:wght@500;600;700;800;900&display=swap" rel="stylesheet"> <link href="/fonts/proximanova.otf" rel="stylesheet">  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> <link rel="stylesheet" href="/style/style.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"><\/script> <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"><\/script> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollToPlugin.min.js"><\/script></header>  ${validate_component(Manager, "Manager").$$render($$result, {}, {}, {
      main: () => {
        return `<div slot="main" id="wrapper" style="z-index: 0;">${index != 3 ? `${validate_component(Logo, "Logo").$$render(
          $$result,
          { index },
          {
            index: ($$value) => {
              index = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}    ${validate_component(Thumbnail, "Thumbnail").$$render(
          $$result,
          { index },
          {
            index: ($$value) => {
              index = $$value;
              $$settled = false;
            }
          },
          {}
        )}  ${validate_component(Slider, "Slider").$$render(
          $$result,
          { scrollThreshold },
          {
            scrollThreshold: ($$value) => {
              scrollThreshold = $$value;
              $$settled = false;
            }
          },
          {}
        )}  ${validate_component(Menu, "Menu").$$render(
          $$result,
          { index },
          {
            index: ($$value) => {
              index = $$value;
              $$settled = false;
            }
          },
          {}
        )}  ${validate_component(Items, "Items").$$render(
          $$result,
          { index, scrollThreshold },
          {
            index: ($$value) => {
              index = $$value;
              $$settled = false;
            },
            scrollThreshold: ($$value) => {
              scrollThreshold = $$value;
              $$settled = false;
            }
          },
          {}
        )}  ${validate_component(Gallery, "Gallery").$$render(
          $$result,
          { index },
          {
            index: ($$value) => {
              index = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>`;
      },
      bs: () => {
        return `<div slot="bs" id="blackscreen" data-svelte-h="svelte-acx2c9"></div>`;
      },
      loader: () => {
        return `${validate_component(Loader, "Loader").$$render($$result, { slot: "loader" }, {}, {})}`;
      },
      default: () => {
        return `  `;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
