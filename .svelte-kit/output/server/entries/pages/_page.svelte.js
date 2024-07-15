import { c as create_ssr_component, b as add_attribute, d as each, e as escape, a as subscribe, v as validate_component, n as null_to_empty, f as createEventDispatcher, h as set_store_value } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { throttle } from "lodash-es";
const css$b = {
  code: ":root{--black:#121212;--white:#faf5f5;--yellow:rgb(249, 223, 77);--dist:-16rem;--ang:-18deg;--ang_start:0deg;--ang_img:-33deg;--dist_img:-13rem;--indent_ui:0rem;--isindent:0deg;--vidy:1rem;--vidx:0rem}",
  map: null
};
const Manager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loaded;
  loaded = false;
  $$result.css.add(css$b);
  return `${loaded ? ` <transition${add_attribute("in", true, 0)}${add_attribute("out", false, 0)}>${slots.main ? slots.main({}) : ` `}</transition>` : ` <transition${add_attribute("in", true, 0)}${add_attribute("out", false, 0)}>${slots.loader ? slots.loader({}) : ` `} ${slots.bs ? slots.bs({}) : ` `}</transition>`}`;
});
const currentItem = writable(0);
const transitioned = writable(false);
const delta = writable(0);
const spinDelta = writable(0);
const gui_carousel = writable("minimal");
const gui_menu = writable("menu");
const gui_outline = writable("nooutline");
const gui_angle = writable("horizontal");
const gui_motion = writable("flat");
const coordinates = writable([
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 }
]);
const constellated = writable(false);
const constellation_index = writable(0);
const profile_index = writable(-1);
function rescale(nbr, inMin, inMax, outMin, outMax) {
  return (nbr - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
const contents = [
  {
    "title": "Comic",
    "thumbnail": {
      "src": "/media/thumbnails/comic.png",
      "type": "image"
    },
    "alt": "Comic thumbnail",
    "category": "Web Project",
    "tech": "HTML, CSS, JS",
    "description": "'The End' was a web project where I implemented a platform to navigate a comic based on a short fiction piece by my friend Noora, in collaboration with artist Simran who drew the art. The language would change dynamically based on the user's choice. It was an academic project to familiarize myself with jQuery and custom CSS animations.",
    "media": [
      {
        "src": "/media/thumbnails/comic_doc.png",
        "type": "image"
      }
    ]
  },
  {
    "title": "ML Rock Paper Scissors",
    "thumbnail": {
      "src": "/media/thumbnails/rps.webp",
      "type": "image"
    },
    "alt": "ML Rock Paper Scissors video",
    "category": "Web Project",
    "tech": "ml5.js, p5.js, Teachable Machine",
    "description": "This is a small project I started to have a little fun with Google's Teachable Machine. ML Rock Paper Scissors is a game that uses image recognition input from the camera in a turn-by-turn rps-like battle against the computer.I'm using the ml5 module of p5.js here, which allows lightweight machine learning for creative purposes. I started with creating a large dataset by uploading thousands of photos I took of hand signs under different angles and positions with different light exposition. Then I trained the machine learning model based on Google's 'Teachable Machine' by tweaking some of the preset parameters until I was satisfied with its detection rate. The model ended up being a very useful prototype, and I'm likely going to use it in the future to piece up something bigger.",
    "media": [
      {
        "src": "",
        "type": "unknown"
      }
    ]
  },
  {
    "title": "OFx Tunnel Maker",
    "thumbnail": {
      "src": "/media/thumbnails/tunnel.webp",
      "type": "image"
    },
    "alt": "OFx Tunnel Maker image",
    "category": "Generative Art",
    "tech": "C++, openFrameworks",
    "description": "A desktop application I built on openFrameworks for creating tunnel visuals. Two circle equations combined to make a parametrised 3D Torus bound to a GUI that allows the user to capture the specific view and stylization of the tunnel. Inspired by that one Code Lyoko intro.",
    "media": [
      {
        "src": "",
        "type": "unknown"
      }
    ]
  },
  {
    "title": "Algo Gallery",
    "thumbnail": {
      "src": "/media/animated/art_docu.mp4",
      "type": "video"
    },
    "alt": "Algorithm Gallery video",
    "category": "Generative Art",
    "tech": "Processing, Unity, openFrameworks",
    "description": "Visualizations of algorithms using openFrameworks (C++), Unity (C#), and Processing (Java). Experimented with 3D matrix transformations for computer graphics, visualized Conway's Game Of Life, and implemented motion blur effect and ripple effect through pixel displacement and filtering.",
    "media": [
      {
        "src": "/media/animated/art_docu.mp4",
        "type": "video"
      },
      {
        "src": "/media/animated/art_docu2.mp4",
        "type": "video"
      },
      {
        "src": "/media/animated/art_docu3.mp4",
        "type": "video"
      }
    ]
  },
  {
    "title": "OS GIFs",
    "thumbnail": {
      "src": "/media/animated/osgif.webp",
      "type": "image"
    },
    "alt": "OS GIFs image",
    "category": "Generative Art",
    "tech": "p5.js, OpenFrameworks, Processing",
    "description": "OS GIFs (open-source GIFs) was my Interactive Media Capstone Project. The gallery is a collection of artistic experiments exploring the processes behind algorithmic art in an attempt to redefine what “open-source” means. This redefinition is essential in a time where the term is thrown around loosely when often we can see code but not understand or access it optimally. After all, is code truly open source if I can read it without understanding? Some of the art breaks down its own algorithm into smaller chunks and processes that it visualizes, while others take the “open-source” literally by showing the code as it is typed.",
    "media": [
      {
        "src": "",
        "type": "unknown"
      }
    ]
  },
  {
    "title": "NYU Algorave",
    "thumbnail": {
      "src": "/media/animated/cube.mp4",
      "type": "video"
    },
    "alt": "NYU Algorave type",
    "category": "Live Coding",
    "tech": "Hydra, Javascript, GLSL, TidalCycles",
    "description": "Music and visuals generated via live-compiled code and synchronized dynamically. The first piece was a solo project where I used Hydra, a live-coding environment for video and shader synthesis, and TidalCycles, a live-coding environment for algorithmic patterns, which, when combined with sound samples, can generate music algorithmically. In the second project, I collaborated with two other coders to incorporate more complex shader control (via GLSL) and dynamic visuals (via p5.js) into the project. The final piece was performed live in front of an audience at NYU, which you can see in the video down below.",
    "media": [
      {
        "src": "https://www.youtube.com/embed/l7t5j4vmwBE?si=PoQnUvbIRjhm9iuA",
        "type": "youtube"
      }
    ]
  },
  {
    "title": "postcARds",
    "thumbnail": {
      "src": "/media/animated/postcARds.mp4",
      "type": "video"
    },
    "alt": "postcARds video",
    "category": "AR App",
    "tech": "Unity, C#",
    "description": "An augmented reality app to interact with the commercial postcards at Museum für Kommunikation in Berlin that I built and deployed with my team at NYU as part of a commission by the museum. The app utilized Unity's ARCore and ARKit environments for raycasting to edit the postcards using the phone's camera, and save the customized versions of the postcards into the visitor's portable devices.",
    "media": [
      {
        "src": "",
        "type": "unknown"
      }
    ]
  },
  {
    "title": "Reccie",
    "thumbnail": {
      "src": "/media/thumbnails/reccie.webp",
      "type": "image"
    },
    "alt": "Reccie video",
    "category": "Web Project",
    "tech": "p5.js",
    "description": "Reccie is a sketch  I made for friends, prototyping a recommender system by taking the approach of collaborative filtering to recommend TV shows based on our movie tastes. It builds a taste profile based on the user's answers and recommends TV shows based on people with similar tastes. The algorithm is pretty straightforward: you calculate similarities between users, assign a weight to each user based on similarity, then every series gets a weighted sum of the user's ratings, and the user gets recommended the series with the highest weighted sum.",
    "media": [
      {
        "src": "",
        "type": "unknown"
      }
    ]
  },
  {
    "title": "Mistborn",
    "thumbnail": {
      "src": "/media/animated/mistborn.gif",
      "type": "image"
    },
    "alt": "Mistborn image",
    "category": "Game",
    "tech": "Processing, Java",
    "description": "A small experimental game named after the book that inspired it. In the game, you can pull or push against referential objects to apply a force that redirects your movements. I built the physics logic using vector math, with basic collision detection for the characters and friction effects for the ashfall graphic. Thought the game would be more fun with a controller but I didn't have one, so I built one using an Arduino board and created a multiplayer mode.",
    "media": [
      {
        "src": "",
        "type": "unknown"
      }
    ]
  },
  {
    "title": "Gemstone",
    "thumbnail": {
      "src": "/media/thumbnails/gemstone.webp",
      "type": "image"
    },
    "alt": "Gemstone video",
    "category": "Game",
    "tech": "GMS2, GLSL",
    "description": "A 2D platformer game where you can manipulate the direction of gravity and shoot enemies above you! Used Game Maker Studio 2 coupled with some GLSL for animations. I'm no Da Vinci but I tried making some pixel art myself. The openGL code for the ripple effect is based on another Java algorithm that I worked on in some of my algo art. ",
    "media": [
      {
        "src": "",
        "type": "unknown"
      }
    ]
  },
  {
    "title": "Mad Socks",
    "thumbnail": {
      "src": "/media/thumbnails/madsocks.webp",
      "type": "image"
    },
    "alt": "Mad Socks image",
    "category": "Game",
    "tech": "Unity, C#",
    "description": "In January 2021, I and six other friends decided to team up and participate in the annual Global Game Jam. For this game-making hackathon, I was put in charge of Game Design, Story, and Programming. Mad Socks came to be as the result of 3 sleepless nights of dogged labour. And while it was far from a finished product, our omnium-gatherum of botched ideas, pervasive glitches and unresolved memory leaks was nominated for the Best Game Design and Best Art Direction award. The game loop is the coupling of an incremental, linear narrative about socks getting sucked into the washing machine world, and a local multiplayer 2D top-down game where the goal is finding your sister-sock in a procedurally generated maze before the time is up, after which the washing machine runs and both of the socks' (players) controls are randomized.",
    "media": [
      {
        "src": "",
        "type": "unknown"
      }
    ]
  },
  {
    "title": "Switch",
    "thumbnail": {
      "src": "/media/thumbnails/switch.png",
      "type": "image"
    },
    "alt": "Switch image",
    "category": "Game",
    "tech": "GMS2",
    "description": "A small game made using GMS2. The challenge of this project was that I was only allowed to use two colours, no shading and no lighting. So I opted for black and white and made colour colour-switching part of the gameplay to improve cohesion. The game is a 2D platformer multiplayer game where two players wrestle to get the ball into their opponent's net. Every time a player touches the ball the background switches to their colour, making it impossible for the player controlling the ball to distinguish their character as it blends into the environment, save for a small pair of eyes that contrasts with the background.",
    "media": [
      {
        "src": "",
        "type": "unknown"
      }
    ]
  }
];
const css$a = {
  code: '.outline.svelte-omcb8d.svelte-omcb8d{border:solid 1px var(--accent2) !important}.nooutline.svelte-omcb8d.svelte-omcb8d{border:none !important}@keyframes svelte-omcb8d-exit{0%{transform:translateY(0);filter:blur(0px)}25%{filter:blur(3px)}75%{filter:blur(5px)}100%{transform:translateY(-20rem);filter:blur(0px)}}@keyframes svelte-omcb8d-enter{0%{transform:translateY(-20rem);opacity:0}25%{filter:blur(2.5px);opacity:0.3}75%{filter:blur(1.5px);opacity:0.5}100%{transform:translateY(0);filter:blur(0px);opacity:1}}.up.svelte-omcb8d.svelte-omcb8d{animation:svelte-omcb8d-exit 0.4s forwards !important}a.svelte-omcb8d.svelte-omcb8d{all:unset;cursor:pointer;transition:font 0.17s !important}.links.svelte-omcb8d.svelte-omcb8d{z-index:3;position:fixed;top:1%;right:0%;transition:all 0.3s;animation:svelte-omcb8d-enter 0.4s forwards;width:15rem !important}.links.svelte-omcb8d button.svelte-omcb8d{all:unset;position:relative;display:inline-block;width:fit-content;margin:0.3rem;cursor:pointer}.links.svelte-omcb8d img.svelte-omcb8d{display:inline;width:3rem;transition:width 0.17s ease-in, background-color 0.11s;filter:invert(var(--dark))}.links.svelte-omcb8d button.svelte-omcb8d::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0);border-radius:100%;transition:width 0.17s ease-in, background-color 0.11s}.links.svelte-omcb8d button.svelte-omcb8d:hover::after{background-color:var(--white)}.links.svelte-omcb8d button.svelte-omcb8d:focus::after{background-color:var(--white)}.indented.svelte-omcb8d.svelte-omcb8d{left:85% !important}.menu2.svelte-omcb8d.svelte-omcb8d{bottom:calc(10%);top:auto;position:fixed !important;width:100%;text-align:center;opacity:1;transition:all 0.36s ease-in-out;list-style-type:none;z-index:2 !important}.menu2-item.svelte-omcb8d.svelte-omcb8d{height:auto;all:unset;cursor:pointer;display:inline;width:8rem;position:relative ;opacity:1;color:var(--accent2);;;text-shadow:1px 1px #ffffff28;transition:transform  0.13s ease-in-out, background-color 0.11s;margin-bottom:0.5rem;text-decoration:none;font-size:1.1rem;border:solid 1px var(--accent2);;;margin-right:1.5rem}.menu2-item.svelte-omcb8d.svelte-omcb8d:hover{text-shadow:none;transform:scale(1.09);border:solid 1px var(--accent2);;;background-color:var(--accent2);;;color:var(--accent2)}.menu.svelte-omcb8d.svelte-omcb8d{left:calc(50% + 6.2rem);top:calc(50% - 4rem);position:fixed !important;width:8rem;width:auto;text-align:center;opacity:1;transition:all 0.36s ease-in-out;list-style-type:none;z-index:2;overflow:hidden;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.menu-item.svelte-omcb8d.svelte-omcb8d{height:auto;all:unset;cursor:pointer;display:block;width:8rem;position:relative ;opacity:1;color:var(--white);text-shadow:2px 2px 2px #00000028;transition:transform  0.13s ease-in-out;margin-bottom:0.25rem;text-decoration:none;font-size:1.1rem}.menu-item.svelte-omcb8d.svelte-omcb8d:hover{transform:scale(1.15);background-color:var(--accent2);text-shadow:1px 1px #ffffff39;color:var(--black)}.selected.svelte-omcb8d.svelte-omcb8d{transform:scale(1.15);background-color:var(--white);text-shadow:1px 1px #ffffff39;color:var(--black)}@media(max-width: 576px){.menu.svelte-omcb8d.svelte-omcb8d{left:calc(50% + 3rem);top:calc(50% - 4rem);width:auto;overflow:visible}.links.svelte-omcb8d img.svelte-omcb8d{width:3rem;margin:0.3rem}.links.svelte-omcb8d.svelte-omcb8d{width:15rem;right:-2%}.indented.svelte-omcb8d.svelte-omcb8d{left:105% !important}}@media(max-width: 400px){.menu.svelte-omcb8d.svelte-omcb8d{bottom:0%;top:auto;left:0%}.indented.svelte-omcb8d.svelte-omcb8d{left:0 !important;bottom:-25% !important}.menu-item.svelte-omcb8d.svelte-omcb8d{font-size:2vh;width:7rem}.links.svelte-omcb8d img.svelte-omcb8d{width:2.5rem;margin:0.2rem}.links.svelte-omcb8d.svelte-omcb8d{width:auto;right:1%}}@media(max-width: 341px){.menu.svelte-omcb8d.svelte-omcb8d{bottom:0% !important;right:0% !important;left:auto !important}.menu-item.svelte-omcb8d.svelte-omcb8d{font-size:0.8rem;width:7rem}.links.svelte-omcb8d img.svelte-omcb8d{width:2rem}.links.svelte-omcb8d.svelte-omcb8d{width:3rem;top:0%;right:-3%}}',
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index = 0 } = $$props;
  let { type = "menu2" } = $$props;
  let { outline = "nooutline" } = $$props;
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
  currentItem.subscribe((value) => {
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  $$result.css.add(css$a);
  return `  <div class="gui">${type === "menu" ? `<div class="menu svelte-omcb8d">${each(items, (item, i) => {
    return `<button class="${[
      "menu-item " + escape(outline, true) + " svelte-omcb8d",
      index === i ? "selected" : ""
    ].join(" ").trim()}">${escape(item)} </button>`;
  })}</div>` : `<div class="menu2 svelte-omcb8d">${each(items, (item, i) => {
    return `<button class="${[
      "menu2-item " + escape(outline, true) + " svelte-omcb8d",
      index === i ? "selected" : ""
    ].join(" ").trim()}">${escape(item)} </button>`;
  })}</div>`}  <div class="${"links " + escape(index === 3 ? "" : "", true) + " svelte-omcb8d"}">${each(links, (link, i) => {
    return `<button class="svelte-omcb8d"><a${add_attribute("href", link.link, 0)}${add_attribute("tabindex", i, 0)} target="_blank" rel="noreferrer nofollow" class="svelte-omcb8d"><img${add_attribute("alt", link.alt, 0)}${add_attribute("src", link.src, 0)} class="svelte-omcb8d"></a> </button>`;
  })}</div> </div>`;
});
const css$9 = {
  code: ":root{--dur:0.1s}h1.svelte-ib0124.svelte-ib0124{display:flex;justify-content:center;align-items:center;align-content:center;width:100%;height:100%}.disappear.svelte-ib0124.svelte-ib0124{opacity:0 !important;transition:opacity 0.15s}.square.svelte-ib0124.svelte-ib0124{border-radius:2% !important;border:solid var(--white) 2px !important;transition:all var(--dur)}.square2.svelte-ib0124.svelte-ib0124{width:var(--size) !important;height:var(--size) !important;transition:all var(--dur)}#zoomer.svelte-ib0124.svelte-ib0124{z-index:3;border-radius:100%;width:250px;height:250px;display:flex;justify-content:center;transition:transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out}.bocconi.svelte-ib0124.svelte-ib0124{height:240px !important}.manbaa.svelte-ib0124.svelte-ib0124{height:140px !important}.nyu.svelte-ib0124.svelte-ib0124{height:170px !important}.nyuad.svelte-ib0124.svelte-ib0124{height:170px !important}.next.svelte-ib0124.svelte-ib0124{height:150px !important}.school.svelte-ib0124.svelte-ib0124{position:absolute;top:50%;left:50%;height:170px;transform:translate(-50%, -50%);transition:all var(--dur);user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}#profile.svelte-ib0124.svelte-ib0124{position:absolute;width:350px !important;bottom:0%;z-index:10;transition:all var(--dur);user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}#icon.svelte-ib0124.svelte-ib0124{width:100px;height:auto;z-index:10;transition:all var(--dur)}.image-container.svelte-ib0124.svelte-ib0124{top:calc(50%);left:50%;transform:translate(-50%, -50%);border:solid 2px var(--white);border-radius:50%;overflow:hidden;transition:transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out;z-index:3;background-color:var(--black)}.image-container.svelte-ib0124 video.svelte-ib0124{position:absolute;margin:auto;top:-20%;width:300px;height:300px;object-fit:cover;transition:all 0.33s}.ui.svelte-ib0124.svelte-ib0124{position:fixed !important}@media(max-width: 576px){.image-container.svelte-ib0124 video.svelte-ib0124{width:150px;height:150px}#zoomer.svelte-ib0124.svelte-ib0124{width:150px;height:150px}#profile.svelte-ib0124.svelte-ib0124{width:65px;height:auto}.square2.svelte-ib0124.svelte-ib0124{width:100vw !important;height:100vh !important}}@media(max-width: 400px){.image-container.svelte-ib0124 video.svelte-ib0124{width:175px;height:175px}.image-container.svelte-ib0124.svelte-ib0124{top:calc(50% + var(--indent_ui));left:70%}#zoomer.svelte-ib0124.svelte-ib0124{width:175px;height:175px}#profile.svelte-ib0124.svelte-ib0124{width:65px;height:auto}.square2.svelte-ib0124.svelte-ib0124{width:200vw !important;height:100vh !important}}@media(max-width: 341px){.image-container.svelte-ib0124 video.svelte-ib0124{width:150px;height:150px}.image-container.svelte-ib0124.svelte-ib0124{top:calc(52% + var(--indent_ui));left:70%}#zoomer.svelte-ib0124.svelte-ib0124{width:150px;height:150px}#profile.svelte-ib0124.svelte-ib0124{width:65px;height:auto}}",
  map: null
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cur;
  let square;
  let square2;
  let disappear;
  let $transitioned, $$unsubscribe_transitioned;
  let $currentItem, $$unsubscribe_currentItem;
  let $profile_index, $$unsubscribe_profile_index;
  $$unsubscribe_transitioned = subscribe(transitioned, (value) => $transitioned = value);
  $$unsubscribe_currentItem = subscribe(currentItem, (value) => $currentItem = value);
  $$unsubscribe_profile_index = subscribe(profile_index, (value) => $profile_index = value);
  let { index } = $$props;
  const icons = [
    "/media/icons/react.svg",
    "/media/icons/svelte.svg",
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
  const profiles = [
    "/media/icons/manbaa.svg",
    "/media/icons/bocconi.svg",
    "/media/icons/nyuad.svg",
    "/media/icons/nyu.svg",
    "/media/icons/directions.svg"
  ];
  let t1 = false;
  let t2 = false;
  let classes = ["manbaa", "bocconi", "nyuad", "nyu", "next"];
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$9);
  cur = $currentItem;
  square = index === 3 ? true : false;
  square2 = index === 3 ? true : false;
  {
    if (index != 3) {
      t1 = false;
      t2 = false;
    }
  }
  {
    transitioned.set(t1 && t2);
  }
  disappear = $transitioned;
  $$unsubscribe_transitioned();
  $$unsubscribe_currentItem();
  $$unsubscribe_profile_index();
  return ` <div class="${[
    "image-container ui svelte-ib0124",
    (square ? "square" : "") + " " + (disappear ? "disappear" : "")
  ].join(" ").trim()}"><div id="zoomer" role="img" class="${[
    "svelte-ib0124",
    (square2 ? "square2" : "") + " " + (disappear ? "disappear" : "")
  ].join(" ").trim()}">${index == 0 && $transitioned == false ? ` <video preload="auto" id="profile" playsinline muted loop class="svelte-ib0124" data-svelte-h="svelte-8adl78"><source src="/media/animated/loop.mp4" type="video/mp4">
                    Your browser does not support the video tag.</video>` : `${index == 1 && $transitioned == false && $profile_index === -1 ? `<div data-svelte-h="svelte-l8tl3j"><h1 class="svelte-ib0124">Hi!</h1></div>` : `${index == 1 && $transitioned == false ? `<img alt="profile" class="${"school " + escape(classes[$profile_index], true) + " svelte-ib0124"}"${add_attribute("src", profiles[$profile_index], 0)}>` : `${index == 2 && $transitioned === false ? `<img alt="profile" id="icon"${add_attribute("src", icons[cur], 0)} class="svelte-ib0124">` : ``}`}`}`}</div> </div>`;
});
const css$8 = {
  code: '.about.svelte-1fbihlc.svelte-1fbihlc{position:absolute;transform:translate(-50%, -50%) !important;top:52% !important;left:30% !important;font-size:xx-large !important;border-bottom:solid 4px var(--accent2) !important;border-left:solid 0px var(--accent2) !important;transition:border 0.3s, min-height 0.2s !important}.about.svelte-1fbihlc.svelte-1fbihlc:hover{border-bottom:solid 11px var(--accent2) !important;transition:border 0.2s, min-height 0.3s !important;min-height:59px !important}.container.svelte-1fbihlc.svelte-1fbihlc{position:absolute;width:var(--txt_pad);min-height:52px;left:calc(50% - var(--txt_pad)/2 - 250px - 3rem);top:calc(47%);font-size:x-large;transition:left 0.23s ease-in-out}.typewriter.svelte-1fbihlc.svelte-1fbihlc{font-family:"Proxima Nova", sans-serif;z-index:10;height:auto;transition:max-height 0.5s ease-out;color:var(--white);hyphens:auto;-webkit-hyphens:auto;-ms-hyphens:auto;-moz-hyphens:auto;transition:all 0.3s ease !important}.border.svelte-1fbihlc.svelte-1fbihlc{position:absolute;border-color:var(--gray--) !important;border-width:2px !important;left:0;top:0;bottom:0;transition:height 0.3s ease-in-out}.about.svelte-1fbihlc .border.svelte-1fbihlc{border-width:1px !important}@media(max-width: 950px){.container.svelte-1fbihlc.svelte-1fbihlc{left:calc(50% - var(--txt_pad)/2 - 250px - 3rem);top:calc(47%)}}@media(max-width: 820px){.container.svelte-1fbihlc.svelte-1fbihlc{left:calc(50% - var(--txt_pad)/2 - 250px + 2rem);top:calc(47%)}}@media(max-width: 576px){.container.svelte-1fbihlc.svelte-1fbihlc{left:calc(50% - var(--txt_pad)/2 + 1rem);top:calc(65%);font-size:large}}@media(max-width: 400px){.container.svelte-1fbihlc.svelte-1fbihlc{left:calc(25% - var(--txt_pad)/2);top:calc(45%);font-size:large}}@media(max-width: 341px){.container.svelte-1fbihlc.svelte-1fbihlc{left:calc(2%);top:calc(50%);font-size:small}}',
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { texts } = $$props;
  let { custom = "" } = $$props;
  let currentText = "";
  let contentDiv;
  let borderHeight = "0px";
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  $$result.css.add(css$8);
  return `<div class="${"container " + escape(custom, true) + " svelte-1fbihlc"}"><div${add_attribute("this", contentDiv, 0)}><div class="typewriter svelte-1fbihlc">${escape(currentText)}</div></div> <div class="border svelte-1fbihlc" style="${"height: " + escape(borderHeight, true) + ";"}"></div> </div>`;
});
const css$7 = {
  code: ".selected.svelte-1a1fb29.svelte-1a1fb29{font-size:x-large !important;border-color:var(--white) !important}.selected.svelte-1a1fb29 span.svelte-1a1fb29{color:var(--black);padding-left:2px !important;padding-right:2px !important;background-color:var(--white)}.locking-label.svelte-1a1fb29.svelte-1a1fb29{transition:transform 0.3s, padding-left 0.23s, opacity 0.13s, border-top 0.5s, top 0.33s !important}.locking.svelte-1a1fb29.svelte-1a1fb29{transition:transform 0.3s !important}.disappear.svelte-1a1fb29.svelte-1a1fb29{padding-left:15rem !important;opacity:0 !important;transition:padding-left 0.33s, opacity 3s, border-top 0.5s, top 0.33s}.circle.svelte-1a1fb29.svelte-1a1fb29{left:calc(50% - 4rem);top:calc(50% - 1rem);height:2rem;width:8rem;text-align:right;font-size:1.2rem;color:var(--white);border-top:solid 3px var(--white);padding-bottom:1.5rem;transition:font-size 0.2s}.tags.svelte-1a1fb29.svelte-1a1fb29{position:absolute;z-index:1;opacity:1}.label.svelte-1a1fb29.svelte-1a1fb29{position:absolute;display:block;left:calc(50% - 6.5rem);top:calc(50% - 1.5rem);height:2rem;width:12rem;text-align:center;font-size:x-large;color:var(--black);background-color:var(--white);padding-bottom:1.5rem;transition:padding-left 0.33s, opacity 0.23s, border-top 0.5s, top 0.33s}@media(max-width: 576px){.circle.svelte-1a1fb29.svelte-1a1fb29{left:calc(50% - 3.5rem);top:calc(50% - 1rem);width:7rem;height:2rem;text-align:right;border-top:none}.label.svelte-1a1fb29.svelte-1a1fb29{left:calc(50% - 3.5rem);top:calc(50% - 1.5rem);height:2rem;width:7rem}.menu.svelte-1a1fb29.svelte-1a1fb29{left:calc(50% + 3rem);top:calc(50% - 4rem);width:7rem}.icon-circle.svelte-1a1fb29.svelte-1a1fb29{left:calc(50% - 1.5rem)}}@media(max-width: 400px){.circle.svelte-1a1fb29.svelte-1a1fb29{top:calc(50% - 1rem);left:calc(70% - 4rem);font-size:1.3rem;width:8rem;height:2rem;text-align:right;border-top:none}.icon-circle.svelte-1a1fb29.svelte-1a1fb29{left:calc(70% - 2rem)}.label.svelte-1a1fb29.svelte-1a1fb29{left:calc(70% - 4rem);top:calc(50% - 1.5rem);height:2rem;width:8rem}}@media(max-width: 341px){.circle.svelte-1a1fb29.svelte-1a1fb29{top:calc(52% - 1rem);left:calc(70% - 4rem);font-size:1rem;width:8rem;height:2rem;text-align:right;border-top:none}.icon-circle.svelte-1a1fb29.svelte-1a1fb29{left:calc(70% - 2rem)}.label.svelte-1a1fb29.svelte-1a1fb29{font-size:large;position:absolute;display:block;left:calc(70% - 4rem);top:calc(52% - 1.5rem);height:2rem;width:8rem;text-align:right !important;padding-bottom:1.5rem}}",
  map: null
};
const Circle$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let test;
  let $currentItem, $$unsubscribe_currentItem;
  $$unsubscribe_currentItem = subscribe(currentItem, (value) => $currentItem = value);
  let { idx } = $$props;
  let { sz } = $$props;
  let { custom } = $$props;
  let { locking } = $$props;
  let alpha;
  let disappear = false;
  function generateTransform() {
    if (custom === "label") {
      return `rotate(calc(var(--ang_start) + ${4 * idx - 1}*var(--ang) + ${idx}*var(--ang)*var(--isindent))) translateX(var(--dist))`;
    } else {
      return `rotate(calc(var(--ang_start) + ${idx}*var(--ang) + ${Math.floor(idx / 4)}*var(--ang)*var(--isindent))) translateX(var(--dist))`;
    }
  }
  function generateAlpha(cur, idx2, sz2) {
    if (idx2 === cur) {
      alpha = 1;
    } else {
      if (custom === "label") {
        let thresh = Math.abs(cur - idx2 * 4 - 1);
        disappear = thresh < 3 ? false : true;
      } else {
        alpha = Math.abs(idx2 - cur);
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
  if ($$props.locking === void 0 && $$bindings.locking && locking !== void 0)
    $$bindings.locking(locking);
  $$result.css.add(css$7);
  test = generateAlpha($currentItem, idx, sz);
  $$unsubscribe_currentItem();
  return `${custom === "label" ? `<div class="${[
    "tags " + escape(custom, true) + " svelte-1a1fb29",
    (locking ? "locking-label" : "") + " " + (disappear ? "disappear" : "")
  ].join(" ").trim()}" style="${"transform: " + escape(generateTransform(), true) + "; opacity: " + escape(test, true) + ";"}">${slots.default ? slots.default({}) : ` `}</div>` : `<div class="${[
    "tags " + escape(custom, true) + " " + escape(idx === $currentItem ? "selected" : "", true) + " svelte-1a1fb29",
    (disappear ? "disappear" : "") + " " + (locking ? "locking" : "")
  ].join(" ").trim()}" style="${"transform: " + escape(generateTransform(), true) + "; opacity: " + escape(test, true) + ";"}"><span class="svelte-1a1fb29">${slots.letter ? slots.letter({}) : ``}</span>${slots.tag ? slots.tag({}) : ``}</div>`} `;
});
const css$6 = {
  code: `.centerall.svelte-krnfm0{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;display:flex}.stepselected.svelte-krnfm0{background-color:var(--white)}.steps.svelte-krnfm0{position:fixed;z-index:10;display:flex;align-items:center;justify-content:center;left:0%;top:50%;transform:translate(calc(-50% + 20px), -0%) rotate(90deg) }.step.svelte-krnfm0{all:unset;cursor:pointer;position:relative;width:30px;height:30px;border-radius:50%;border:solid 1px var(--white);display:flex;align-items:center;justify-content:center;color:var(--white);margin:0 17px;transition:all 0.13s}.step.svelte-krnfm0:hover{background-color:var(--white)}.step.svelte-krnfm0::before{content:'';position:absolute;top:50%;left:100%;width:36px;height:6px;border:solid 1px var(--white);transform:translateY(-50%)}.step.svelte-krnfm0:last-child::before{display:none}.text-content.svelte-krnfm0{font-family:"Montserrat", sans-serif;font-size:large;color:lightgray;transition:top .6s, left .6s}.text-container.svelte-krnfm0{position:absolute;left:0%;top:0%;width:46%;display:flex;flex-flow:column wrap;background-color:rgba(255, 255, 255, 0.35);align-items:center}.section.svelte-krnfm0{height:100vh;padding:0 10vw 0 10vw;display:flex;flex-flow:column wrap;align-items:center;justify-content:center;text-align:center;border-left:var(--white) solid 1px;border-right:var(--white) solid 1px;border-top:var(--white) solid 1px;transition:opacity 0.6s;background-color:rgba(255, 255, 255, 0.15)}.content.svelte-krnfm0{width:350px}.mapinfo.svelte-krnfm0{position:fixed;top:4%;right:15%;display:flex;align-items:center}.title.svelte-krnfm0{line-height:90%}.subtitle.svelte-krnfm0{margin:5px}.label.svelte-krnfm0{text-align:center;writing-mode:vertical-lr;text-orientation:mixed;padding:0px 7px 0px 7px;font-family:"Montserrat", sans-serif;font-weight:500;margin:20px;height:127px;transform:rotate(180deg);color:var(--black);background-color:var(--white)}.icon.svelte-krnfm0{width:75px;margin:20px;height:auto;filter:none}`,
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { texts } = $$props;
  let { offset: offset2 } = $$props;
  let { label } = $$props;
  let current = 0;
  const svgs = [
    "/media/icons/mor.svg",
    "/media/icons/italyflag.svg",
    "/media/icons/uaeflag.svg",
    "/media/icons/usaflag.svg",
    "/media/icons/ukflag.svg"
  ];
  const personal_txts = [
    "Born and raised in Morocco, I went to school in Jeanne d'Arc and got my Baccalauréat in Sciences Physiques from Al Manbaa.",
    "After graduating from high school in Rabat, I moved to Italy to study political science and economics at Università Bocconi. During my classes there, I understood that I was more quantitatively inclined; I enjoyed the math and computer science seminars more than their social science counterparts.",
    "In August 2018, I decided to transfer to New York University Abu Dhabi, a satellite campus of NYU in the UAE. There, I took classes from various departments until I settled on majoring in Interactive Media, a project-centric field at the intersection of computer science, design, and communication.",
    "I did two semesters—Spring 2020 and Fall 2021—in the New York campus to take advanced classes in web development, and also to have fun pursuing my hobby in game design.",
    "Recently moved to London, and looking forward to the next chapter in my journey."
  ];
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  if ($$props.offset === void 0 && $$bindings.offset && offset2 !== void 0)
    $$bindings.offset(offset2);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$6);
  return `<div class="mapinfo svelte-krnfm0"><div class="label svelte-krnfm0" data-svelte-h="svelte-ogtrbw">history</div> <div class="content svelte-krnfm0"><div class="title svelte-krnfm0"><h2>${escape(texts[current])}</h2></div> <div class="subtitle svelte-krnfm0"><h3>${escape(title[current])}</h3></div></div></div> <div class="centerall svelte-krnfm0"><div class="steps svelte-krnfm0">${each(texts, (txt, i) => {
    return `<button class="${"step " + escape(i === current ? "stepselected" : "", true) + " svelte-krnfm0"}"></button>`;
  })}</div> <div class="text-container svelte-krnfm0"><div class="text-content svelte-krnfm0">${each(personal_txts, (txt, i) => {
    return `<div${add_attribute("id", "section-" + i, 0)} class="section svelte-krnfm0"><span><img class="icon svelte-krnfm0" alt="personal-icon"${add_attribute("src", svgs[i], 0)}></span> ${escape(txt)} </div>`;
  })}</div></div> </div>`;
});
const Items = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index = 0 } = $$props;
  let { scrollThreshold } = $$props;
  let locking = true;
  document.querySelector(":root");
  let labels = ["FRONTEND", "BACKEND", "DATA"];
  currentItem.subscribe((value) => {
  });
  delta.subscribe((value) => {
  });
  let cards_text = [
    {
      //personal
      "label": "history",
      "title": ["1999-2017", "2017-2018", "2018-2023", "2020-2021", "2024"],
      "contents": ["Rabat", "Milan", "Abu Dhabi", "New York", "London"]
    },
    {
      //education
      "label": "education",
      "title": ["2014-2017", "2017-2018", "2019-2023"],
      "contents": ["al manbaa", "bocconi university", "new york university"]
    }
  ];
  let about_txt = [
    "Hi I'm Omar!",
    "I'm an NYU graduate.",
    "I'm a developer.",
    "I'm a UX designer.",
    "I like to visualize code.",
    "I like logic puzzles."
  ];
  let tags = [
    { id: 0, content: [``] },
    { id: 1, content: [``] },
    {
      id: 2,
      content: [
        `react`,
        `svelte`,
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
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.scrollThreshold === void 0 && $$bindings.scrollThreshold && scrollThreshold !== void 0)
    $$bindings.scrollThreshold(scrollThreshold);
  return `<div> ${index === 0 ? `${validate_component(Typewriter, "Typewriter").$$render($$result, { texts: about_txt, custom: "about" }, {}, {})}` : `${index === 1 ? ` ${validate_component(Card, "Card").$$render(
    $$result,
    {
      label: cards_text[0].label,
      title: cards_text[0].title,
      texts: cards_text[0].contents,
      offset: 0
    },
    {},
    {}
  )} ` : `${index === 2 ? ` <div>${each(labels, (label, i) => {
    return `${validate_component(Circle$1, "Circle").$$render(
      $$result,
      {
        idx: i,
        sz: labels[index].length - 1,
        custom: "label",
        locking
      },
      {},
      {
        default: () => {
          return `${escape(label)} `;
        }
      }
    )}`;
  })}</div>  <div class="content">${each(tags[2].content, (tag, i) => {
    return `<div>${validate_component(Circle$1, "Circle").$$render(
      $$result,
      {
        locking,
        idx: i,
        sz: tags[index].content.length - 1,
        custom: "circle centered"
      },
      {},
      {
        tag: () => {
          return `<span slot="tag">${escape(tag.slice(1))}</span>`;
        },
        letter: () => {
          return `<span slot="letter">${escape(tag[0])}</span>`;
        }
      }
    )} </div>`;
  })}</div>` : ``}`}`}</div>`;
});
const css$5 = {
  code: '#loading.svelte-7ob09p{position:fixed;top:0;left:0;width:100%;height:100%;z-index:6;overflow:hidden;transition:opacity 1s ease-in-out}.loader.svelte-7ob09p{position:fixed;left:calc(50% - 5rem);top:calc(50% - 5rem);width:10rem;height:10rem;border-radius:50%;border:1px solid transparent;border-top-color:#ffffffd5;animation:svelte-7ob09p-spin 1.5s linear infinite}.loader.svelte-7ob09p:before{content:"";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:4px solid;border-top-color:rgb(18, 18, 18);animation:svelte-7ob09p-spin-reverse .55s linear infinite}.loader.svelte-7ob09p:after{content:"";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:2px solid transparent;border-top-color:#ffffffb6;animation:svelte-7ob09p-spin 2s linear infinite}@keyframes svelte-7ob09p-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-7ob09p-spin-reverse{0%{transform:rotate(0deg)}100%{transform:rotate(-360deg)}}@media(max-width: 576px){.loader.svelte-7ob09p{left:calc(50% - 4.5rem);top:calc(50% - 4.5rem);width:9rem;height:9rem}}@media(max-width: 400px){.loader.svelte-7ob09p{left:calc(70% - 5.25rem);top:calc(50% - 5.25rem);width:10.5rem;height:10.5rem}}@media(max-width: 341px){.loader.svelte-7ob09p{left:calc(70% - 4.5rem);top:calc(50% - 4.5rem);width:9rem;height:9rem}}',
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div id="loading" class="svelte-7ob09p" data-svelte-h="svelte-1mlx9lr"><div class="loader svelte-7ob09p"></div> </div>`;
});
const css$4 = {
  code: `.hidden.svelte-iiwcnr.svelte-iiwcnr{position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden !important}.textrotate.svelte-iiwcnr.svelte-iiwcnr{text-align:center;margin-left:20px;transform:rotate(0deg) translate(0%, calc(-70px + 100%))}.textrotate2.svelte-iiwcnr.svelte-iiwcnr{text-align:center;transform:rotate(0deg) translate(0%, calc(70px - 50%))}.navbutton.svelte-iiwcnr.svelte-iiwcnr{position:fixed;width:140px;height:140px;color:var(--white);background-color:var(--black);transition:all 0.22s;border-radius:4px;border:2px solid var(--white)}.navbutton.svelte-iiwcnr.svelte-iiwcnr:hover{color:var(--black);background-color:var(--white);padding:10px}.back.svelte-iiwcnr.svelte-iiwcnr{top:0px;left:50%;transform:translate(-50%, -52%) rotate(-45deg) ;z-index:7}.readmore.svelte-iiwcnr.svelte-iiwcnr{bottom:0%;left:50%;text-align:center;transform:translate(-50%, 51%) rotate(-45deg);z-index:5}.readmore.svelte-iiwcnr.svelte-iiwcnr:hover{transform:translate(-50%, 50%) rotate(0deg)}.back.svelte-iiwcnr.svelte-iiwcnr:hover{transform:translate(-50%, -50%) rotate(0deg) }.navbutton.svelte-iiwcnr.svelte-iiwcnr:hover::before{content:'';position:absolute;top:-10%;left:-10%;width:120%;height:120%;z-index:-1}.columns.svelte-iiwcnr.svelte-iiwcnr{position:relative;width:100%;height:100%;display:flex;flex-flow:column wrap}.rows.svelte-iiwcnr.svelte-iiwcnr{position:relative;width:calc(100% - 120px);display:flex;flex-flow:row wrap}.banner.svelte-iiwcnr.svelte-iiwcnr{position:sticky;top:0;width:100%;height:140px;background-color:var(--black);color:var(--white);z-index:3}.titleBanner.svelte-iiwcnr.svelte-iiwcnr{position:sticky;margin-top:40px;top:120px;width:100%;height:200px;color:var(--white);-webkit-mask-image:linear-gradient(to top, transparent, black 10%, black 90%, transparent);mask-image:linear-gradient(to top, transparent, black 10%, black 90%, transparent);background-color:var(--black);z-index:1}.labelBanner.svelte-iiwcnr.svelte-iiwcnr{position:sticky;top:140px;height:75%;overflow-wrap:break-word;writing-mode:vertical-rl;text-align:center;color:var(--white);background-color:var(--black);z-index:2;border-right:var(--white) 2px solid}.titleBanner.svelte-iiwcnr h1.svelte-iiwcnr{text-align:center;margin-right:120px}.documentation.svelte-iiwcnr.svelte-iiwcnr{position:absolute;z-index:2;bottom:-100%;left:0;width:100%;height:100%;background-color:var(--black);color:white;transition:bottom 0.37s ease;display:flex;flex-flow:row wrap;justify-content:center}.page.svelte-iiwcnr.svelte-iiwcnr{background-color:var(--black);width:calc(100% - 200px)}.page.svelte-iiwcnr p.svelte-iiwcnr{padding:0 10vw 0 10vw;font-size:x-large;color:lightgrey !important}.media_container.svelte-iiwcnr.svelte-iiwcnr{padding:3vw 10vw 3vw 10vw;width:calc(100% - 0px);height:auto}h3.svelte-iiwcnr.svelte-iiwcnr{font-size:xx-large}button.svelte-iiwcnr.svelte-iiwcnr{all:unset;cursor:pointer}.arrow.svelte-iiwcnr.svelte-iiwcnr{position:absolute;z-index:20 !important;width:100px;transform:translate(-50%, -50%);user-select:none;filter:invert();cursor:pointer;opacity:.5;transition:opacity 0.22s;;}.arrow.svelte-iiwcnr.svelte-iiwcnr:hover{opacity:1}.invisible.svelte-iiwcnr.svelte-iiwcnr{opacity:0 !important}.right.svelte-iiwcnr.svelte-iiwcnr{flex:0}.left.svelte-iiwcnr.svelte-iiwcnr{flex:0}.counter.svelte-iiwcnr.svelte-iiwcnr{position:fixed;bottom:50px;right:50px;color:var(--white);border-top:solid 1px var(--white);border-bottom:solid 1px var(--white);padding:10px;font-family:"Proxima Nova", sans-serif;width:160px;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;z-index:100}.counter.svelte-iiwcnr h3.svelte-iiwcnr{display:flex;justify-content:space-between;align-items:center;width:100%}#currentItem.svelte-iiwcnr.svelte-iiwcnr{flex:1;text-align:center}.ribbon.svelte-iiwcnr.svelte-iiwcnr{top:0%;transform:rotate3d(1, 0, 0, 51deg) rotate3d(0, 0, 1, 43deg) !important;border-radius:32px !important}.item.svelte-iiwcnr img.svelte-iiwcnr{width:var(--size);height:var(--size);border-radius:2%;transition:opacity 0.1s ease-in-out;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.item.svelte-iiwcnr video.svelte-iiwcnr{width:var(--size) ;height:var(--size) ;object-fit:cover;border-radius:2%;transition:opacity 0.1s ease-in-out;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}#category.svelte-iiwcnr.svelte-iiwcnr{background-color:var(--accent1);color:var(--white);border-radius:2%;padding:3px;position:absolute;top:0%;left:0%}p.svelte-iiwcnr span.svelte-iiwcnr{background-color:var(--white);color:var(--black);padding:3px}.overlay.svelte-iiwcnr.svelte-iiwcnr{position:absolute;top:calc(55% + var(--size)/2);width:100%;color:var(--white)}main#carousel.svelte-iiwcnr.svelte-iiwcnr{width:100%;height:100%;display:flex;position:absolute ;top:0%;left:0%;align-items:center;justify-content:center;transform-style:preserve-3d;perspective:600px;transition:top 0.37s ease}.current.svelte-iiwcnr.svelte-iiwcnr{box-shadow:0px 0px 3px rgb(255, 255, 255);z-index:10 !important;border:solid 2px var(--white);opacity:1 !important}button.item.svelte-iiwcnr.svelte-iiwcnr{all:unset;display:flex;justify-content:center;text-align:center;position:absolute;cursor:pointer;transition:opacity 0.09s ease-in-out}button.item.svelte-iiwcnr.svelte-iiwcnr:hover{opacity:1 !important;filter:none !important;border-radius:3%;border:solid 2px var(--white)}button.item.svelte-iiwcnr:hover img.svelte-iiwcnr{opacity:0.4}button.item.svelte-iiwcnr:hover video.svelte-iiwcnr{border:solid 2px var(--white);opacity:0.4}.lock.svelte-iiwcnr.svelte-iiwcnr{transition:all 0.32s !important}`,
  map: null
};
const CarouselCube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ribbon;
  let alt;
  let title;
  let category;
  let tech;
  let description;
  let media;
  let $currentItem, $$unsubscribe_currentItem;
  $$unsubscribe_currentItem = subscribe(currentItem, (value) => $currentItem = value);
  const max = contents.length - 1;
  let { motion } = $$props;
  let { direction } = $$props;
  let { cardtype } = $$props;
  let data = contents[$currentItem] || {};
  let carousel;
  let documentation;
  if ($$props.motion === void 0 && $$bindings.motion && motion !== void 0)
    $$bindings.motion(motion);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.cardtype === void 0 && $$bindings.cardtype && cardtype !== void 0)
    $$bindings.cardtype(cardtype);
  $$result.css.add(css$4);
  ribbon = motion === "ribbon" ? true : false;
  data = contents[$currentItem] || {};
  {
    console.log($currentItem);
  }
  ({ alt, title, category, tech, description, media } = data || {});
  $$unsubscribe_currentItem();
  return ` <div class="hidden svelte-iiwcnr"><main id="carousel" class="${["svelte-iiwcnr", ribbon ? "ribbon" : ""].join(" ").trim()}"${add_attribute("this", carousel, 0)}> <button class="svelte-iiwcnr" data-svelte-h="svelte-nm6w4q"><img class="arrow svelte-iiwcnr" style="left: 10%;" alt="left arrow" src="/media/icons/bluetipdesign_left.svg"></button> ${each(contents, ({ title: title2, thumbnail: { src, type }, alt: alt2, category: category2, tech: tech2 }, i) => {
    return `<button class="${["item svelte-iiwcnr", ""].join(" ").trim()}"${add_attribute("data-offset", i, 0)}>${type === "video" ? `<video muted loop class="${"thumbnail " + escape(i === $currentItem ? "current" : "", true) + " svelte-iiwcnr"}" style="float:right; right:0rem"><source${add_attribute("src", src, 0)} type="video/mp4"> your browser does not support the video tag.
                    </video>` : `<img class="${escape(null_to_empty(i === $currentItem ? "current" : ""), true) + " svelte-iiwcnr"}"${add_attribute("alt", alt2, 0)}${add_attribute("src", src, 0)}>`} ${cardtype === "label" ? `<div id="category" class="svelte-iiwcnr">${escape(category2)}:</div>` : ``} <div class="overlay svelte-iiwcnr"><h3 class="svelte-iiwcnr">${escape(title2)}</h3> <p class="svelte-iiwcnr">${cardtype === "minimal" ? `<span class="svelte-iiwcnr">${escape(category2)}:</span>` : ``} ${escape(tech2)} </p></div> </button>`;
  })}  <button class="svelte-iiwcnr" data-svelte-h="svelte-14zkvdn"><img style="left:90%;" class="arrow svelte-iiwcnr" alt="right arrow" src="/media/icons/bluetipdesign_right.svg"></button></main>  <div class="counter svelte-iiwcnr"><h3 class="svelte-iiwcnr"><span class="${"left " + escape($currentItem == 0 ? "invisible" : "", true) + " svelte-iiwcnr"}">&lt;</span> <span id="currentItem" class="svelte-iiwcnr">${escape($currentItem)} / ${escape(max)}</span> <span class="${"right " + escape($currentItem == max ? "invisible" : "", true) + " svelte-iiwcnr"}">&gt;</span></h3></div>  ${`<button class="readmore navbutton svelte-iiwcnr" data-svelte-h="svelte-1sgt4m7"><div class="textrotate svelte-iiwcnr"><strong>READ MORE</strong></div></button>`}  <div class="documentation svelte-iiwcnr"${add_attribute("this", documentation, 0)}>${``} <div class="banner svelte-iiwcnr" data-svelte-h="svelte-n8wf2t"></div> <div class="columns svelte-iiwcnr"> <div class="labelBanner svelte-iiwcnr"><h2>${escape(category)}</h2> </div> <div class="rows svelte-iiwcnr"><div class="titleBanner svelte-iiwcnr"><div><h1 class="svelte-iiwcnr">${escape(title)}</h1> <br></div></div> <div class="page svelte-iiwcnr"><p class="svelte-iiwcnr">${escape(description)}</p>  ${each(media, (m, i) => {
    return `${m.type === "image" ? `<img class="media_container svelte-iiwcnr"${add_attribute("src", m.src, 0)}${add_attribute("alt", alt, 0)}>` : `${m.type === "video" ? ` <video class="media_container svelte-iiwcnr" autoplay muted loop style="float:right; right:0rem; width:100%; height:100%"><source${add_attribute("src", m.src, 0)} type="video/mp4">
                                    Your browser does not support the video tag.
                            </video>` : `${m.type === "youtube" ? `<iframe${add_attribute("src", m.src, 0)} class="media_container svelte-iiwcnr" title="YT video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `<div class="skel" data-svelte-h="svelte-siagyz"></div>`}`}`}`;
  })}</div></div></div></div> </div>`;
});
const css$3 = {
  code: ".stack.svelte-1xcypaa.svelte-1xcypaa{border-radius:32px !important;transform:rotate3d(1, 0, 0, 51deg) rotate3d(0, 0, 1, 43deg);border:solid 2px white !important;transition:transform .1s}.item.svelte-1xcypaa img.svelte-1xcypaa{width:var(--size);height:var(--size);border:solid 2px white;border-radius:2%}.item.svelte-1xcypaa video.svelte-1xcypaa{width:var(--size) ;height:var(--size) ;object-fit:cover;border:solid 2px white;border-radius:2%;box-shadow:0 4px 8px 0 rgba(255, 255, 255, 0.11), 0 6px 20px 0 rgba(204, 255, 20, 0)}p.svelte-1xcypaa.svelte-1xcypaa{line-height:150%}p.svelte-1xcypaa span.svelte-1xcypaa{background-color:white;color:black;padding:3px}.overlay.svelte-1xcypaa.svelte-1xcypaa{position:absolute;top:calc(55% + var(--size)/2);text-align:left;width:100%}main#carousel.svelte-1xcypaa.svelte-1xcypaa{width:100%;height:100%;display:flex;position:absolute ;top:0%;left:0%;align-items:center;justify-content:center;overflow:hidden ;transform-style:preserve-3d;perspective:600px;pointer-events:none;z-index:1 }div.item.svelte-1xcypaa.svelte-1xcypaa{display:flex;justify-content:center;text-align:center;position:absolute;z-index:2;transition:transform 0.22s linear, opacity 0.2s linear}",
  map: null
};
const CarouselStack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { motion } = $$props;
  if ($$props.motion === void 0 && $$bindings.motion && motion !== void 0)
    $$bindings.motion(motion);
  $$result.css.add(css$3);
  return ` <main id="carousel" class="svelte-1xcypaa">${each(contents, ({ title, thumbnail: { src, type }, alt, category, tech, description, media }, i) => {
    return `<div class="item svelte-1xcypaa"${add_attribute("data-offset", i, 0)}>${type === "video" ? `<video${add_attribute("alt", alt, 0)} transition autoplay="autoplay" muted loop onmouseover="this.pause()" onmouseout="this.play()" class="${["thumbnail svelte-1xcypaa", "stack"].join(" ").trim()}" style="float:right; right:0rem" data-svelte-h="svelte-etxyfq"><source${add_attribute("src", src, 0)} type="video/mp4"> your browser does not support the video tag.
                </video>` : `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)} class="${["svelte-1xcypaa", "stack"].join(" ").trim()}">`} <div class="overlay svelte-1xcypaa"><h3>${escape(title)}</h3> <p class="svelte-1xcypaa"><span class="svelte-1xcypaa">${escape(category)}:</span> ${escape(tech)} </p></div> </div>`;
  })} </main>`;
});
const P5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { target = void 0 } = $$props;
  let { sketch = void 0 } = $$props;
  let { parentDivStyle = "display: block;" } = $$props;
  let { debug = false } = $$props;
  createEventDispatcher();
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.sketch === void 0 && $$bindings.sketch && sketch !== void 0)
    $$bindings.sketch(sketch);
  if ($$props.parentDivStyle === void 0 && $$bindings.parentDivStyle && parentDivStyle !== void 0)
    $$bindings.parentDivStyle(parentDivStyle);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  return `<div${add_attribute("style", parentDivStyle, 0)} class="m-0"></div>`;
});
const moroccoData = [{ "x": 459.498046875, "y": 23.931640625 }, { "x": 454.81292724609375, "y": 25.644407749176025 }, { "x": 450.10882568359375, "y": 27.362916469573975 }, { "x": 444.95318603515625, "y": 27.65788221359253 }, { "x": 442.7646179199219, "y": 32.20729064941406 }, { "x": 441.587158203125, "y": 37.28170394897461 }, { "x": 440.0575866699219, "y": 42.260040283203125 }, { "x": 438.13677978515625, "y": 47.10149955749512 }, { "x": 436.5248107910156, "y": 52.05430221557617 }, { "x": 434.5683288574219, "y": 56.86246109008789 }, { "x": 432.8426513671875, "y": 61.77745056152344 }, { "x": 431.13604736328125, "y": 66.69905853271484 }, { "x": 429.2331237792969, "y": 71.54848098754883 }, { "x": 427.197998046875, "y": 76.34402084350586 }, { "x": 425.0483703613281, "y": 81.08934020996094 }, { "x": 422.77313232421875, "y": 85.77564239501953 }, { "x": 420.31317138671875, "y": 90.3671646118164 }, { "x": 417.65234375, "y": 94.845703125 }, { "x": 415.17718505859375, "y": 99.4291000366211 }, { "x": 412.55291748046875, "y": 103.9214859008789 }, { "x": 409.45440673828125, "y": 108.10826873779297 }, { "x": 406.0815124511719, "y": 112.07697296142578 }, { "x": 402.1184997558594, "y": 115.4216079711914 }, { "x": 397.5610656738281, "y": 117.94302368164062 }, { "x": 393.0764465332031, "y": 120.5910873413086 }, { "x": 388.6536865234375, "y": 123.18997955322266 }, { "x": 384.37811279296875, "y": 126.15609741210938 }, { "x": 379.46575927734375, "y": 127.68878173828125 }, { "x": 374.9803161621094, "y": 130.29017639160156 }, { "x": 370.1950378417969, "y": 132.30557250976562 }, { "x": 365.4718933105469, "y": 134.5030975341797 }, { "x": 360.64459228515625, "y": 136.45787811279297 }, { "x": 355.8856506347656, "y": 138.20217895507812 }, { "x": 351.9248046875, "y": 141.52574157714844 }, { "x": 347.3769226074219, "y": 143.63231658935547 }, { "x": 343.39703369140625, "y": 145.94837188720703 }, { "x": 340.9978332519531, "y": 150.52581787109375 }, { "x": 337.98974609375, "y": 154.76419067382812 }, { "x": 334.4837646484375, "y": 158.6166229248047 }, { "x": 330.8410339355469, "y": 162.34080505371094 }, { "x": 327.1400451660156, "y": 166.00723266601562 }, { "x": 323.4205322265625, "y": 169.65493774414062 }, { "x": 319.750732421875, "y": 173.35226440429688 }, { "x": 318.0242004394531, "y": 177.68711853027344 }, { "x": 317.3608703613281, "y": 182.4414825439453 }, { "x": 318.02337646484375, "y": 187.3683624267578 }, { "x": 317.4278564453125, "y": 192.4932861328125 }, { "x": 314.8580627441406, "y": 197.00559997558594 }, { "x": 312.1199035644531, "y": 201.4189453125 }, { "x": 308.6827392578125, "y": 205.3327178955078 }, { "x": 305.5086669921875, "y": 209.46212768554688 }, { "x": 302.78814697265625, "y": 213.89845275878906 }, { "x": 300.8579406738281, "y": 218.7108917236328 }, { "x": 298.2333984375, "y": 223.12167358398438 }, { "x": 296.5347595214844, "y": 227.47328186035156 }, { "x": 297.2476806640625, "y": 232.2026824951172 }, { "x": 296.4305114746094, "y": 237.3435516357422 }, { "x": 296.48077392578125, "y": 242.55068969726562 }, { "x": 296.6995849609375, "y": 247.7557373046875 }, { "x": 296.5589294433594, "y": 252.95556640625 }, { "x": 294.75177001953125, "y": 257.8229675292969 }, { "x": 297.1585998535156, "y": 261.2396697998047 }, { "x": 301.0133056640625, "y": 264.7119598388672 }, { "x": 303.3760681152344, "y": 269.2534942626953 }, { "x": 304.4506530761719, "y": 273.8644256591797 }, { "x": 303.4291076660156, "y": 278.97210693359375 }, { "x": 301.93048095703125, "y": 283.95916748046875 }, { "x": 299.9606018066406, "y": 288.7799377441406 }, { "x": 297.5273132324219, "y": 293.38360595703125 }, { "x": 294.52850341796875, "y": 297.636962890625 }, { "x": 291.1021728515625, "y": 301.5604553222656 }, { "x": 288.1336364746094, "y": 305.83123779296875 }, { "x": 285.9785461425781, "y": 310.5652770996094 }, { "x": 283.1839599609375, "y": 314.95916748046875 }, { "x": 279.8166809082031, "y": 318.91650390625 }, { "x": 276.21295166015625, "y": 322.6510009765625 }, { "x": 273.0111541748047, "y": 326.7605285644531 }, { "x": 269.3216552734375, "y": 330.403076171875 }, { "x": 265.0130157470703, "y": 333.3287353515625 }, { "x": 260.53143310546875, "y": 335.984130859375 }, { "x": 255.95301818847656, "y": 338.46929931640625 }, { "x": 251.5605926513672, "y": 341.2637939453125 }, { "x": 247.4808349609375, "y": 344.5009460449219 }, { "x": 243.66038513183594, "y": 348.0411682128906 }, { "x": 240.0833740234375, "y": 351.8274230957031 }, { "x": 236.76210021972656, "y": 355.8397521972656 }, { "x": 233.38807678222656, "y": 359.79345703125 }, { "x": 228.7838897705078, "y": 362.1871032714844 }, { "x": 223.92849731445312, "y": 364.0751647949219 }, { "x": 219.12094116210938, "y": 366.0814514160156 }, { "x": 214.42019653320312, "y": 368.32330322265625 }, { "x": 209.50543212890625, "y": 370.0350341796875 }, { "x": 204.46282958984375, "y": 371.3417053222656 }, { "x": 199.37661743164062, "y": 372.4682312011719 }, { "x": 194.26193237304688, "y": 373.4574279785156 }, { "x": 189.12310791015625, "y": 374.3125915527344 }, { "x": 183.96694946289062, "y": 375.0558776855469 }, { "x": 178.94747924804688, "y": 376.3554382324219 }, { "x": 176.47439575195312, "y": 380.8066711425781 }, { "x": 173.63290405273438, "y": 384.7527160644531 }, { "x": 169.8763427734375, "y": 388.2026672363281 }, { "x": 168.0898895263672, "y": 393.0929870605469 }, { "x": 166.4241943359375, "y": 398.0287170410156 }, { "x": 164.48899841308594, "y": 402.86456298828125 }, { "x": 162.07513427734375, "y": 407.47662353515625 }, { "x": 160.40086364746094, "y": 412.3926696777344 }, { "x": 158.8724822998047, "y": 417.372314453125 }, { "x": 157.120849609375, "y": 422.2782287597656 }, { "x": 154.8723907470703, "y": 426.96258544921875 }, { "x": 151.18357849121094, "y": 430.6113586425781 }, { "x": 146.87208557128906, "y": 433.5323181152344 }, { "x": 142.4155502319336, "y": 436.230224609375 }, { "x": 137.86214447021484, "y": 438.7591857910156 }, { "x": 132.9039535522461, "y": 440.18267822265625 }, { "x": 129.3096160888672, "y": 443.807861328125 }, { "x": 125.08901977539062, "y": 446.7191162109375 }, { "x": 121.42909240722656, "y": 450.1114196777344 }, { "x": 120.07372283935547, "y": 455.099609375 }, { "x": 119.01892852783203, "y": 460.18682861328125 }, { "x": 116.89246368408203, "y": 464.9304504394531 }, { "x": 114.31255340576172, "y": 469.4159240722656 }, { "x": 112.78178405761719, "y": 474.39337158203125 }, { "x": 110.9232177734375, "y": 479.255859375 }, { "x": 108.63961791992188, "y": 483.9270935058594 }, { "x": 107.28077697753906, "y": 488.95074462890625 }, { "x": 106.89322662353516, "y": 494.1297607421875 }, { "x": 107.21456146240234, "y": 499.324462890625 }, { "x": 106.77674865722656, "y": 504.5101623535156 }, { "x": 105.3395004272461, "y": 509.5079650878906 }, { "x": 103.19668579101562, "y": 513.9159851074219 }, { "x": 100.15703582763672, "y": 517.987060546875 }, { "x": 95.67475128173828, "y": 520.5820007324219 }, { "x": 91.82366180419922, "y": 524.0577392578125 }, { "x": 88.35494995117188, "y": 527.94384765625 }, { "x": 84.75194549560547, "y": 531.7063293457031 }, { "x": 81.1667709350586, "y": 535.4855346679688 }, { "x": 77.78023529052734, "y": 539.435791015625 }, { "x": 73.53358459472656, "y": 542.4331665039062 }, { "x": 69.40406036376953, "y": 545.5875854492188 }, { "x": 66.29239654541016, "y": 549.7463989257812 }, { "x": 63.6935920715332, "y": 554.25927734375 }, { "x": 65.22427749633789, "y": 555.1138916015625 }, { "x": 67.44632339477539, "y": 550.4385375976562 }, { "x": 70.75005722045898, "y": 546.4334106445312 }, { "x": 73.7453384399414, "y": 544.30859375 }, { "x": 72.28839111328125, "y": 549.2805786132812 }, { "x": 69.74645233154297, "y": 553.8171997070312 }, { "x": 67.02690887451172, "y": 558.229248046875 }, { "x": 64.21296310424805, "y": 562.4840087890625 }, { "x": 62.12680435180664, "y": 567.1253662109375 }, { "x": 59.523319244384766, "y": 571.6346435546875 }, { "x": 56.829044342041016, "y": 576.0882568359375 }, { "x": 56.766517639160156, "y": 579.6781005859375 }, { "x": 55.9847526550293, "y": 584.152099609375 }, { "x": 51.87117958068848, "y": 586.9730834960938 }, { "x": 50.600088119506836, "y": 591.9765625 }, { "x": 49.541927337646484, "y": 597.0716552734375 }, { "x": 47.175119400024414, "y": 601.5790405273438 }, { "x": 45.520870208740234, "y": 606.4743041992188 }, { "x": 42.69009017944336, "y": 610.7094116210938 }, { "x": 37.925350189208984, "y": 610.9998779296875 }, { "x": 34.11590099334717, "y": 614.3949584960938 }, { "x": 31.667901039123535, "y": 618.86279296875 }, { "x": 29.8443660736084, "y": 623.7421875 }, { "x": 27.761024951934814, "y": 628.5133056640625 }, { "x": 26.320477962493896, "y": 633.4755249023438 }, { "x": 25.832947731018066, "y": 638.6616821289062 }, { "x": 25.10063409805298, "y": 643.8175048828125 }, { "x": 24.178285121917725, "y": 648.9437866210938 }, { "x": 23.49289321899414, "y": 654.1078491210938 }, { "x": 22.958109378814697, "y": 659.289794921875 }, { "x": 22.58155608177185, "y": 664.4855346679688 }, { "x": 22.463126182556152, "y": 669.69287109375 }, { "x": 23.761165380477905, "y": 665.8993530273438 }, { "x": 24.931742191314697, "y": 660.8248901367188 }, { "x": 26.466552734375, "y": 655.8471069335938 }, { "x": 28.06741714477539, "y": 650.8943481445312 }, { "x": 33.275330543518066, "y": 650.7596435546875 }, { "x": 38.48318290710449, "y": 650.6248779296875 }, { "x": 43.691097259521484, "y": 650.4901733398438 }, { "x": 48.89921188354492, "y": 650.36376953125 }, { "x": 54.10821533203125, "y": 650.28759765625 }, { "x": 59.3176383972168, "y": 650.2356567382812 }, { "x": 64.52710723876953, "y": 650.1981811523438 }, { "x": 69.73664474487305, "y": 650.169921875 }, { "x": 74.94628524780273, "y": 650.149169921875 }, { "x": 80.1558837890625, "y": 650.134521484375 }, { "x": 85.36555480957031, "y": 650.1253051757812 }, { "x": 90.57515716552734, "y": 650.12255859375 }, { "x": 95.7848129272461, "y": 650.1220703125 }, { "x": 100.99443054199219, "y": 650.1266479492188 }, { "x": 106.20401763916016, "y": 650.1356201171875 }, { "x": 111.4136734008789, "y": 650.14697265625 }, { "x": 116.6232681274414, "y": 650.164306640625 }, { "x": 121.83287048339844, "y": 650.1859130859375 }, { "x": 127.04246520996094, "y": 650.2099609375 }, { "x": 132.25206756591797, "y": 650.2340087890625 }, { "x": 137.46160888671875, "y": 650.258056640625 }, { "x": 142.6712646484375, "y": 650.2821655273438 }, { "x": 147.88080596923828, "y": 650.3062133789062 }, { "x": 153.09034729003906, "y": 650.3302612304688 }, { "x": 158.3000030517578, "y": 650.3543090820312 }, { "x": 163.50955200195312, "y": 650.3783569335938 }, { "x": 168.71908569335938, "y": 650.4024047851562 }, { "x": 173.92874145507812, "y": 650.426513671875 }, { "x": 176.89361572265625, "y": 648.4791259765625 }, { "x": 176.30067443847656, "y": 643.3037109375 }, { "x": 175.7793426513672, "y": 638.1201171875 }, { "x": 175.2745361328125, "y": 632.9349975585938 }, { "x": 174.78065490722656, "y": 627.7488403320312 }, { "x": 174.29415893554688, "y": 622.5619506835938 }, { "x": 173.81442260742188, "y": 617.37451171875 }, { "x": 173.3415069580078, "y": 612.1864013671875 }, { "x": 172.87644958496094, "y": 606.9974975585938 }, { "x": 172.42303466796875, "y": 601.8076782226562 }, { "x": 171.99185180664062, "y": 596.6160278320312 }, { "x": 171.91531372070312, "y": 591.4175415039062 }, { "x": 172.9409942626953, "y": 586.31640625 }, { "x": 174.68470764160156, "y": 581.4107666015625 }, { "x": 176.99343872070312, "y": 576.743896484375 }, { "x": 179.86720275878906, "y": 572.4037475585938 }, { "x": 183.46115112304688, "y": 568.648681640625 }, { "x": 188.27145385742188, "y": 566.880859375 }, { "x": 193.43450927734375, "y": 566.1903076171875 }, { "x": 198.6181182861328, "y": 565.6715698242188 }, { "x": 203.80426025390625, "y": 565.1761474609375 }, { "x": 208.98851013183594, "y": 564.662841796875 }, { "x": 214.1648712158203, "y": 564.0768432617188 }, { "x": 214.90184020996094, "y": 559.5450439453125 }, { "x": 214.86915588378906, "y": 554.3355712890625 }, { "x": 214.8364715576172, "y": 549.1260986328125 }, { "x": 214.80380249023438, "y": 543.91650390625 }, { "x": 214.7711181640625, "y": 538.7069702148438 }, { "x": 214.73843383789062, "y": 533.4974975585938 }, { "x": 214.70574951171875, "y": 528.2878723144531 }, { "x": 214.67308044433594, "y": 523.078369140625 }, { "x": 214.64039611816406, "y": 517.868896484375 }, { "x": 214.6077117919922, "y": 512.6592712402344 }, { "x": 214.5750274658203, "y": 507.4497375488281 }, { "x": 214.5423583984375, "y": 502.240234375 }, { "x": 214.50967407226562, "y": 497.0306091308594 }, { "x": 214.47698974609375, "y": 491.8211364746094 }, { "x": 214.44430541992188, "y": 486.61151123046875 }, { "x": 214.41163635253906, "y": 481.4020080566406 }, { "x": 214.3789520263672, "y": 476.1925354003906 }, { "x": 214.3462677001953, "y": 470.98291015625 }, { "x": 214.31358337402344, "y": 465.7734069824219 }, { "x": 214.28091430664062, "y": 460.5639343261719 }, { "x": 217.665283203125, "y": 458.75 }, { "x": 222.8748779296875, "y": 458.75 }, { "x": 228.08447265625, "y": 458.75 }, { "x": 233.294189453125, "y": 458.75 }, { "x": 238.5037841796875, "y": 458.75 }, { "x": 243.71337890625, "y": 458.75 }, { "x": 248.923095703125, "y": 458.75 }, { "x": 254.1326904296875, "y": 458.75 }, { "x": 259.34228515625, "y": 458.75 }, { "x": 264.552001953125, "y": 458.75 }, { "x": 269.7615966796875, "y": 458.75 }, { "x": 274.97119140625, "y": 458.75 }, { "x": 280.180908203125, "y": 458.75 }, { "x": 285.3905029296875, "y": 458.75 }, { "x": 290.60009765625, "y": 458.75 }, { "x": 295.809814453125, "y": 458.75 }, { "x": 301.0194091796875, "y": 458.75 }, { "x": 306.22900390625, "y": 458.75 }, { "x": 311.438720703125, "y": 458.75 }, { "x": 316.6483154296875, "y": 458.75 }, { "x": 321.85791015625, "y": 458.75 }, { "x": 327.067626953125, "y": 458.75 }, { "x": 332.2772216796875, "y": 458.75 }, { "x": 337.48681640625, "y": 458.75 }, { "x": 340.2699279785156, "y": 456.29388427734375 }, { "x": 340.33294677734375, "y": 451.0846862792969 }, { "x": 340.39593505859375, "y": 445.8754577636719 }, { "x": 340.45892333984375, "y": 440.6661376953125 }, { "x": 340.52191162109375, "y": 435.4569091796875 }, { "x": 340.5849304199219, "y": 430.2477111816406 }, { "x": 340.6479187011719, "y": 425.0383605957031 }, { "x": 340.7093200683594, "y": 419.82916259765625 }, { "x": 340.7689208984375, "y": 414.6199035644531 }, { "x": 340.8226013183594, "y": 409.4104309082031 }, { "x": 340.873779296875, "y": 404.201171875 }, { "x": 340.921875, "y": 398.9917907714844 }, { "x": 340.9654235839844, "y": 393.7821350097656 }, { "x": 341.00640869140625, "y": 388.5727233886719 }, { "x": 341.0436706542969, "y": 383.3631286621094 }, { "x": 341.0752868652344, "y": 378.15374755859375 }, { "x": 341.1015625, "y": 372.9441223144531 }, { "x": 341.1206359863281, "y": 367.7344970703125 }, { "x": 341.125, "y": 362.52490234375 }, { "x": 341.125, "y": 357.3153076171875 }, { "x": 341.125, "y": 352.1055908203125 }, { "x": 341.125, "y": 346.89599609375 }, { "x": 342.7864685058594, "y": 342.753173828125 }, { "x": 347.4071044921875, "y": 340.3620300292969 }, { "x": 351.59869384765625, "y": 337.2740478515625 }, { "x": 355.50372314453125, "y": 333.8266296386719 }, { "x": 359.7106018066406, "y": 330.76788330078125 }, { "x": 364.1054992675781, "y": 327.9706726074219 }, { "x": 368.26165771484375, "y": 324.86279296875 }, { "x": 372.4209289550781, "y": 321.7343444824219 }, { "x": 376.9449462890625, "y": 319.1673889160156 }, { "x": 380.8348693847656, "y": 315.9124755859375 }, { "x": 385.9582214355469, "y": 315.3086242675781 }, { "x": 390.91522216796875, "y": 313.8181457519531 }, { "x": 395.0859069824219, "y": 310.7161865234375 }, { "x": 399.8435974121094, "y": 308.9389343261719 }, { "x": 404.8990478515625, "y": 309.9987487792969 }, { "x": 410.00146484375, "y": 311.0302734375 }, { "x": 414.74700927734375, "y": 309.8358154296875 }, { "x": 419.81951904296875, "y": 308.7572937011719 }, { "x": 424.76904296875, "y": 307.2690124511719 }, { "x": 429.95379638671875, "y": 306.7884216308594 }, { "x": 435.1580810546875, "y": 306.5535888671875 }, { "x": 440.3614501953125, "y": 306.305419921875 }, { "x": 445.538818359375, "y": 305.7417907714844 }, { "x": 450.5892333984375, "y": 305.43463134765625 }, { "x": 452.89794921875, "y": 308.494873046875 }, { "x": 457.6282043457031, "y": 310.21209716796875 }, { "x": 461.14227294921875, "y": 306.4830017089844 }, { "x": 464.1077880859375, "y": 302.20037841796875 }, { "x": 466.74786376953125, "y": 297.71197509765625 }, { "x": 468.71417236328125, "y": 292.9434814453125 }, { "x": 472.6095275878906, "y": 289.5052185058594 }, { "x": 476.76983642578125, "y": 286.3700866699219 }, { "x": 480.8453063964844, "y": 283.1298828125 }, { "x": 485.299072265625, "y": 280.4305725097656 }, { "x": 489.91595458984375, "y": 278.017578125 }, { "x": 494.31988525390625, "y": 275.2434539794922 }, { "x": 498.29144287109375, "y": 271.8762664794922 }, { "x": 502.0709228515625, "y": 268.29115295410156 }, { "x": 506.1911315917969, "y": 265.11659240722656 }, { "x": 510.9978942871094, "y": 263.1582489013672 }, { "x": 516.1172485351562, "y": 262.2069396972656 }, { "x": 521.2005920410156, "y": 261.0884094238281 }, { "x": 526.1540222167969, "y": 259.47882080078125 }, { "x": 530.876220703125, "y": 257.3071594238281 }, { "x": 530.4845581054688, "y": 252.96463012695312 }, { "x": 533.0279541015625, "y": 248.76559448242188 }, { "x": 535.019287109375, "y": 244.04006958007812 }, { "x": 532.3154296875, "y": 239.9053192138672 }, { "x": 529.84814453125, "y": 238.52114868164062 }, { "x": 526.9483947753906, "y": 237.90203857421875 }, { "x": 526.2443542480469, "y": 233.343505859375 }, { "x": 527.5758361816406, "y": 229.2158203125 }, { "x": 530.626953125, "y": 225.78268432617188 }, { "x": 530.5303649902344, "y": 220.5755615234375 }, { "x": 531.3931579589844, "y": 216.19537353515625 }, { "x": 536.4874267578125, "y": 215.10531616210938 }, { "x": 541.576171875, "y": 213.98976135253906 }, { "x": 546.6544799804688, "y": 212.82705688476562 }, { "x": 551.7244873046875, "y": 211.62945556640625 }, { "x": 556.785400390625, "y": 210.39382934570312 }, { "x": 561.3428344726562, "y": 208.20887756347656 }, { "x": 559.8916625976562, "y": 203.3054656982422 }, { "x": 558.03125, "y": 198.4475860595703 }, { "x": 560.5387573242188, "y": 195.44061279296875 }, { "x": 565.7479858398438, "y": 195.39584350585938 }, { "x": 570.9022827148438, "y": 194.77728271484375 }, { "x": 575.9089965820312, "y": 193.52268981933594 }, { "x": 581.1115112304688, "y": 193.30906677246094 }, { "x": 586.28955078125, "y": 193.7832794189453 }, { "x": 591.3462524414062, "y": 192.61619567871094 }, { "x": 596.3208618164062, "y": 193.5008087158203 }, { "x": 601.4077758789062, "y": 194.61337280273438 }, { "x": 606.5275268554688, "y": 195.56675720214844 }, { "x": 611.7167358398438, "y": 196.01327514648438 }, { "x": 616.9144287109375, "y": 196.36473083496094 }, { "x": 622.1192016601562, "y": 196.48721313476562 }, { "x": 624.2586669921875, "y": 193.1157684326172 }, { "x": 621.6962280273438, "y": 189.54222106933594 }, { "x": 622.4849853515625, "y": 184.3960418701172 }, { "x": 626.2338256835938, "y": 181.45913696289062 }, { "x": 630.0597534179688, "y": 177.9683380126953 }, { "x": 627.5286865234375, "y": 174.10105895996094 }, { "x": 623.4093017578125, "y": 170.91331481933594 }, { "x": 619.0673828125, "y": 168.03944396972656 }, { "x": 615.2369995117188, "y": 164.5775604248047 }, { "x": 612.36865234375, "y": 160.2331085205078 }, { "x": 612.6629638671875, "y": 155.95791625976562 }, { "x": 612.1177368164062, "y": 151.29649353027344 }, { "x": 608.74609375, "y": 147.33829498291016 }, { "x": 606.239501953125, "y": 142.79508209228516 }, { "x": 606.2042846679688, "y": 137.66278076171875 }, { "x": 607.9428100585938, "y": 132.75638580322266 }, { "x": 608.0796508789062, "y": 127.6314926147461 }, { "x": 604.8250732421875, "y": 124.08219909667969 }, { "x": 605.1531372070312, "y": 120.8538589477539 }, { "x": 604.8807373046875, "y": 115.78254699707031 }, { "x": 605.5240478515625, "y": 110.61917114257812 }, { "x": 606.2026977539062, "y": 105.46393585205078 }, { "x": 604.7553100585938, "y": 100.48127746582031 }, { "x": 603.8900146484375, "y": 95.38667297363281 }, { "x": 602.556396484375, "y": 91.04936981201172 }, { "x": 603.8526000976562, "y": 87.09866333007812 }, { "x": 600.6148071289062, "y": 83.10897827148438 }, { "x": 601.28564453125, "y": 78.85005187988281 }, { "x": 601.4293823242188, "y": 75.1560287475586 }, { "x": 597.1942749023438, "y": 72.13629531860352 }, { "x": 594.3085327148438, "y": 67.95073318481445 }, { "x": 589.62841796875, "y": 65.96564865112305 }, { "x": 585.8902587890625, "y": 62.5011100769043 }, { "x": 582.1138305664062, "y": 59.23453903198242 }, { "x": 577.0909423828125, "y": 57.908512115478516 }, { "x": 572.3806762695312, "y": 59.93601608276367 }, { "x": 567.2396850585938, "y": 59.45417022705078 }, { "x": 562.8724365234375, "y": 56.679927825927734 }, { "x": 559.1315307617188, "y": 53.05897521972656 }, { "x": 556.9849853515625, "y": 48.488338470458984 }, { "x": 555.6376342773438, "y": 44.51687431335449 }, { "x": 553.03466796875, "y": 49.011680603027344 }, { "x": 549.1052856445312, "y": 52.1921272277832 }, { "x": 544.6485595703125, "y": 54.70835494995117 }, { "x": 539.469482421875, "y": 55.077423095703125 }, { "x": 534.3631591796875, "y": 54.12126159667969 }, { "x": 529.92138671875, "y": 51.49547004699707 }, { "x": 525.8369140625, "y": 53.240047454833984 }, { "x": 521.3052368164062, "y": 54.366310119628906 }, { "x": 517.3446044921875, "y": 53.05244827270508 }, { "x": 512.341796875, "y": 54.505916595458984 }, { "x": 507.3254699707031, "y": 55.91104507446289 }, { "x": 502.250244140625, "y": 56.87432098388672 }, { "x": 497.12738037109375, "y": 55.93791961669922 }, { "x": 492.2637939453125, "y": 54.453102111816406 }, { "x": 487.5025329589844, "y": 52.66554260253906 }, { "x": 483.00958251953125, "y": 50.06460380554199 }, { "x": 479.444091796875, "y": 46.297950744628906 }, { "x": 475.7507019042969, "y": 42.88015556335449 }, { "x": 471.98529052734375, "y": 39.42745780944824 }, { "x": 469.18841552734375, "y": 35.34216594696045 }, { "x": 467.080810546875, "y": 30.984667778015137 }, { "x": 466.46807861328125, "y": 25.82465696334839 }, { "x": 462.862548828125, "y": 23.93162727355957 }, { "x": 560.9686279296875, "y": 56.04293441772461 }, { "x": 562.3613891601562, "y": 59.27886962890625 }, { "x": 558.6304321289062, "y": 56.078330993652344 }, { "x": 432.71484375, "y": 63.84375 }, { "x": 431.03045654296875, "y": 68.79522323608398 }, { "x": 431.6592712402344, "y": 71.10565948486328 }, { "x": 429.7783508300781, "y": 71.50265121459961 }, { "x": 427.7601623535156, "y": 76.32770919799805 }, { "x": 425.5097961425781, "y": 81.0474853515625 }, { "x": 423.2100524902344, "y": 85.74488067626953 }, { "x": 420.64862060546875, "y": 90.29861450195312 }, { "x": 417.9202880859375, "y": 94.76072692871094 }, { "x": 415.6212463378906, "y": 99.43366241455078 }, { "x": 413.03936767578125, "y": 103.96260070800781 }, { "x": 409.75494384765625, "y": 108.0160140991211 }, { "x": 406.2218322753906, "y": 111.85203552246094 }, { "x": 402.48236083984375, "y": 114.96834564208984 }, { "x": 400.2690124511719, "y": 117.8718490600586 }, { "x": 402.8190612792969, "y": 121.59083557128906 }, { "x": 404.2362976074219, "y": 125.69953155517578 }, { "x": 408.0280456542969, "y": 128.09291076660156 }, { "x": 412.2762451171875, "y": 128.40457916259766 }, { "x": 409.7787780761719, "y": 132.93153381347656 }, { "x": 411.356201171875, "y": 137.6279067993164 }, { "x": 410.4848937988281, "y": 142.4818344116211 }, { "x": 413.22674560546875, "y": 144.6684341430664 }, { "x": 418.1711730957031, "y": 144.85485076904297 }, { "x": 422.09161376953125, "y": 147.7260284423828 }, { "x": 425.6445007324219, "y": 144.9049301147461 }, { "x": 427.5298156738281, "y": 141.8803482055664 }, { "x": 428.810302734375, "y": 137.20665740966797 }, { "x": 433.738037109375, "y": 137.20095825195312 }, { "x": 437.1573486328125, "y": 138.71449279785156 }, { "x": 439.587890625, "y": 142.38287353515625 }, { "x": 443.6223449707031, "y": 140.80844116210938 }, { "x": 448.635986328125, "y": 141.68678283691406 }, { "x": 450.701171875, "y": 138.20465850830078 }, { "x": 450.32110595703125, "y": 133.03929138183594 }, { "x": 450.95733642578125, "y": 127.86158752441406 }, { "x": 451.72088623046875, "y": 122.70155334472656 }, { "x": 450.90118408203125, "y": 117.88127899169922 }, { "x": 448.8469543457031, "y": 114.57776641845703 }, { "x": 450.60186767578125, "y": 110.26893615722656 }, { "x": 447.5216369628906, "y": 106.35272216796875 }, { "x": 445.6896057128906, "y": 102.20441436767578 }, { "x": 447.84674072265625, "y": 99.04886627197266 }, { "x": 451.8340759277344, "y": 98.43158721923828 }, { "x": 453.5727844238281, "y": 101.57418823242188 }, { "x": 457.3199157714844, "y": 103.40707397460938 }, { "x": 460.561279296875, "y": 102.52498626708984 }, { "x": 462.8500671386719, "y": 99.30039978027344 }, { "x": 464.0096130371094, "y": 95.72193145751953 }, { "x": 462.2707214355469, "y": 92.64197540283203 }, { "x": 464.9447326660156, "y": 89.82830047607422 }, { "x": 468.3233642578125, "y": 86.52552032470703 }, { "x": 471.81024169921875, "y": 83.37430572509766 }, { "x": 473.8031311035156, "y": 80.49531173706055 }, { "x": 474.3340148925781, "y": 75.60431289672852 }, { "x": 469.4122619628906, "y": 76.12995147705078 }, { "x": 464.3707580566406, "y": 75.35896301269531 }, { "x": 460.7833251953125, "y": 71.77584075927734 }, { "x": 456.37677001953125, "y": 71.2146110534668 }, { "x": 452.4440612792969, "y": 68.42763137817383 }, { "x": 448.1231994628906, "y": 66.03202438354492 }, { "x": 443.0856018066406, "y": 64.80405044555664 }, { "x": 437.9254455566406, "y": 64.09904098510742 }];
const italyData = [{ "x": 409.33331298828125, "y": 493.19813537597656 }, { "x": 405.0678253173828, "y": 494.1984405517578 }, { "x": 408.6051940917969, "y": 497.2391815185547 }, { "x": 410.2241668701172, "y": 493.6436767578125 }, { "x": 413.418212890625, "y": 493.01063537597656 }, { "x": 422.7957763671875, "y": 506.32432556152344 }, { "x": 426.2604522705078, "y": 507.22987365722656 }, { "x": 70.35408401489258, "y": 253.68515014648438 }, { "x": 73.94576072692871, "y": 251.8495864868164 }, { "x": 79.17620849609375, "y": 250.04771423339844 }, { "x": 80.1541748046875, "y": 253.39666748046875 }, { "x": 82.78570938110352, "y": 258.2102584838867 }, { "x": 80.40683174133301, "y": 262.89441680908203 }, { "x": 76.04478454589844, "y": 266.4734878540039 }, { "x": 72.52082252502441, "y": 270.4956741333008 }, { "x": 72.09038734436035, "y": 275.33961486816406 }, { "x": 75.49297904968262, "y": 278.19654083251953 }, { "x": 80.68193626403809, "y": 278.9074935913086 }, { "x": 85.37531852722168, "y": 276.5967483520508 }, { "x": 90.46258354187012, "y": 276.0520782470703 }, { "x": 95.55288124084473, "y": 273.6586380004883 }, { "x": 100.39519119262695, "y": 271.086669921875 }, { "x": 104.38650131225586, "y": 268.49996185302734 }, { "x": 106.34793281555176, "y": 264.3193893432617 }, { "x": 110.12207984924316, "y": 260.20931243896484 }, { "x": 110.87841415405273, "y": 254.63491821289062 }, { "x": 115.1752815246582, "y": 251.37337493896484 }, { "x": 120.40459060668945, "y": 248.81873321533203 }, { "x": 122.27604293823242, "y": 243.83645629882812 }, { "x": 123.9983901977539, "y": 240.08407592773438 }, { "x": 127.4408187866211, "y": 238.18934631347656 }, { "x": 131.82561111450195, "y": 234.69651794433594 }, { "x": 136.78188705444336, "y": 231.8441925048828 }, { "x": 142.23148345947266, "y": 231.73158264160156 }, { "x": 146.86734771728516, "y": 233.22771453857422 }, { "x": 151.75733947753906, "y": 234.63941192626953 }, { "x": 157.22246551513672, "y": 236.44961547851562 }, { "x": 160.31049346923828, "y": 240.53671264648438 }, { "x": 162.42631149291992, "y": 237.80477905273438 }, { "x": 167.78638076782227, "y": 239.7225112915039 }, { "x": 171.6201286315918, "y": 243.72750854492188 }, { "x": 175.07188415527344, "y": 245.4918441772461 }, { "x": 179.86013793945312, "y": 248.39161682128906 }, { "x": 183.46102142333984, "y": 252.6559829711914 }, { "x": 187.16949081420898, "y": 253.66260528564453 }, { "x": 191.52275466918945, "y": 257.2585678100586 }, { "x": 195.32070541381836, "y": 257.7013168334961 }, { "x": 196.15897369384766, "y": 256.1951599121094 }, { "x": 200.22220993041992, "y": 259.46075439453125 }, { "x": 205.81843948364258, "y": 260.52901458740234 }, { "x": 210.00691986083984, "y": 264.453857421875 }, { "x": 213.78044891357422, "y": 268.6789016723633 }, { "x": 215.97361755371094, "y": 273.8329544067383 }, { "x": 217.02324676513672, "y": 279.4182434082031 }, { "x": 218.21981811523438, "y": 284.7621307373047 }, { "x": 218.08486938476562, "y": 289.556884765625 }, { "x": 218.8949966430664, "y": 294.3663101196289 }, { "x": 219.8490447998047, "y": 299.77540588378906 }, { "x": 223.84857177734375, "y": 303.9145736694336 }, { "x": 226.4642791748047, "y": 309.02440643310547 }, { "x": 229.30509185791016, "y": 313.55308532714844 }, { "x": 230.7990264892578, "y": 319.1166076660156 }, { "x": 231.30384826660156, "y": 324.8713150024414 }, { "x": 230.85123443603516, "y": 330.6600112915039 }, { "x": 228.3388214111328, "y": 335.8041534423828 }, { "x": 230.18690490722656, "y": 340.72996520996094 }, { "x": 233.83438873291016, "y": 337.95179748535156 }, { "x": 239.50919342041016, "y": 339.07210540771484 }, { "x": 243.91004180908203, "y": 342.67122650146484 }, { "x": 242.66584014892578, "y": 348.2402877807617 }, { "x": 245.46151733398438, "y": 351.3081283569336 }, { "x": 250.80895233154297, "y": 352.80931854248047 }, { "x": 255.3062515258789, "y": 356.2522964477539 }, { "x": 258.2232131958008, "y": 360.44483947753906 }, { "x": 260.84613037109375, "y": 364.9281997680664 }, { "x": 263.8187789916992, "y": 366.9782485961914 }, { "x": 265.3170623779297, "y": 372.27734375 }, { "x": 261.6863555908203, "y": 374.88565826416016 }, { "x": 259.7025680541992, "y": 378.04395294189453 }, { "x": 264.1421661376953, "y": 380.57154083251953 }, { "x": 267.2386169433594, "y": 376.8209228515625 }, { "x": 273.01023864746094, "y": 377.4083938598633 }, { "x": 278.4867172241211, "y": 379.32159423828125 }, { "x": 283.70861053466797, "y": 381.89939880371094 }, { "x": 288.2062759399414, "y": 385.56739044189453 }, { "x": 291.7706298828125, "y": 390.09703063964844 }, { "x": 294.0622863769531, "y": 395.16358184814453 }, { "x": 296.8482131958008, "y": 399.7808609008789 }, { "x": 299.7811279296875, "y": 404.33489990234375 }, { "x": 305.14501953125, "y": 404.7493133544922 }, { "x": 309.54190826416016, "y": 408.3775939941406 }, { "x": 314.1802215576172, "y": 411.65916442871094 }, { "x": 317.2775421142578, "y": 416.4196319580078 }, { "x": 319.3291702270508, "y": 421.8326416015625 }, { "x": 322.06153869628906, "y": 425.3529357910156 }, { "x": 327.16175842285156, "y": 428.1391143798828 }, { "x": 331.0829620361328, "y": 432.45838928222656 }, { "x": 334.96862030029297, "y": 436.8000946044922 }, { "x": 338.4113006591797, "y": 441.508056640625 }, { "x": 341.43553924560547, "y": 445.11500549316406 }, { "x": 346.14659118652344, "y": 446.4364318847656 }, { "x": 350.36170196533203, "y": 446.971923828125 }, { "x": 355.61492919921875, "y": 449.1240539550781 }, { "x": 359.6851119995117, "y": 453.2724914550781 }, { "x": 362.0388870239258, "y": 458.53041076660156 }, { "x": 366.11829376220703, "y": 460.0415344238281 }, { "x": 370.5085220336914, "y": 456.3783264160156 }, { "x": 376.2240905761719, "y": 455.8390808105469 }, { "x": 381.7952346801758, "y": 457.39044189453125 }, { "x": 386.09391021728516, "y": 461.0266876220703 }, { "x": 389.8828430175781, "y": 461.80584716796875 }, { "x": 391.30005645751953, "y": 458.57215881347656 }, { "x": 396.94252014160156, "y": 458.72454833984375 }, { "x": 401.75423431396484, "y": 461.8520812988281 }, { "x": 405.3567657470703, "y": 466.38600158691406 }, { "x": 408.44007873535156, "y": 471.2370147705078 }, { "x": 410.4653625488281, "y": 476.44586181640625 }, { "x": 413.437255859375, "y": 481.4216613769531 }, { "x": 415.7041931152344, "y": 486.5388641357422 }, { "x": 416.5790252685547, "y": 490.4936218261719 }, { "x": 417.2201690673828, "y": 487.8266906738281 }, { "x": 420.98028564453125, "y": 489.96495056152344 }, { "x": 424.81739807128906, "y": 487.9691925048828 }, { "x": 430.21044921875, "y": 488.4787292480469 }, { "x": 433.72410583496094, "y": 492.9494323730469 }, { "x": 437.9543914794922, "y": 495.92279052734375 }, { "x": 434.6229705810547, "y": 500.1222686767578 }, { "x": 430.3949279785156, "y": 501.45513916015625 }, { "x": 431.5467529296875, "y": 505.6076965332031 }, { "x": 436.6272888183594, "y": 503.0306701660156 }, { "x": 441.0243835449219, "y": 503.07191467285156 }, { "x": 441.08888244628906, "y": 501.5245361328125 }, { "x": 445.6617126464844, "y": 501.05592346191406 }, { "x": 449.9426727294922, "y": 500.1980285644531 }, { "x": 454.61277770996094, "y": 499.5481872558594 }, { "x": 458.2080078125, "y": 504.0404510498047 }, { "x": 461.1014862060547, "y": 508.8659210205078 }, { "x": 463.5542755126953, "y": 514.1381683349609 }, { "x": 465.07171630859375, "y": 519.5030212402344 }, { "x": 461.8983154296875, "y": 523.7830200195312 }, { "x": 459.8849334716797, "y": 528.1165313720703 }, { "x": 463.8889923095703, "y": 529.9283599853516 }, { "x": 468.1404724121094, "y": 533.1145324707031 }, { "x": 473.15618896484375, "y": 533.7716979980469 }, { "x": 477.3733367919922, "y": 537.2280883789062 }, { "x": 480.532958984375, "y": 541.9452514648438 }, { "x": 481.07115173339844, "y": 542.7510528564453 }, { "x": 485.46266174316406, "y": 545.2916870117188 }, { "x": 489.92462158203125, "y": 542.7129211425781 }, { "x": 494.4994201660156, "y": 539.5721130371094 }, { "x": 498.8951873779297, "y": 541.9131622314453 }, { "x": 502.6429901123047, "y": 545.1624145507812 }, { "x": 505.2939910888672, "y": 549.9062652587891 }, { "x": 506.4877014160156, "y": 555.0839385986328 }, { "x": 507.60107421875, "y": 560.2245330810547 }, { "x": 508.09559631347656, "y": 565.9997711181641 }, { "x": 510.3351593017578, "y": 571.0473480224609 }, { "x": 512.5076141357422, "y": 576.0896606445312 }, { "x": 516.2831573486328, "y": 580.5030059814453 }, { "x": 518.7158966064453, "y": 585.6701507568359 }, { "x": 520.0685424804688, "y": 591.3267822265625 }, { "x": 520.6972808837891, "y": 597.1127777099609 }, { "x": 520.9599456787109, "y": 602.9367218017578 }, { "x": 522.5022888183594, "y": 608.4599151611328 }, { "x": 525.2772521972656, "y": 613.3058013916016 }, { "x": 528.8093566894531, "y": 617.5421295166016 }, { "x": 529.4183197021484, "y": 623.0331878662109 }, { "x": 527.6447143554688, "y": 628.5037384033203 }, { "x": 523.2277984619141, "y": 631.7913970947266 }, { "x": 517.8269653320312, "y": 630.9464111328125 }, { "x": 512.8631591796875, "y": 633.7390441894531 }, { "x": 508.84413146972656, "y": 637.3920440673828 }, { "x": 512.8983612060547, "y": 641.4474639892578 }, { "x": 513.1479797363281, "y": 646.7209930419922 }, { "x": 510.6578369140625, "y": 651.9983215332031 }, { "x": 508.9494171142578, "y": 657.2813720703125 }, { "x": 505.4910125732422, "y": 661.3938293457031 }, { "x": 500.1421813964844, "y": 663.3542022705078 }, { "x": 499.00440979003906, "y": 667.9036407470703 }, { "x": 498.5600128173828, "y": 672.8307342529297 }, { "x": 499.103515625, "y": 677.9420776367188 }, { "x": 501.6230010986328, "y": 682.9230499267578 }, { "x": 506.61949157714844, "y": 685.3421936035156 }, { "x": 511.8948516845703, "y": 684.5840911865234 }, { "x": 517.5575714111328, "y": 685.2009735107422 }, { "x": 522.7667846679688, "y": 683.438720703125 }, { "x": 525.3194122314453, "y": 678.2506561279297 }, { "x": 526.5904846191406, "y": 672.5845031738281 }, { "x": 529.2929382324219, "y": 667.6166687011719 }, { "x": 532.9099578857422, "y": 663.1555786132812 }, { "x": 537.0780792236328, "y": 659.4394989013672 }, { "x": 542.1595764160156, "y": 656.7548522949219 }, { "x": 546.4535827636719, "y": 652.8712768554688 }, { "x": 548.813720703125, "y": 647.8033294677734 }, { "x": 548.0841827392578, "y": 642.0382537841797 }, { "x": 547.4560852050781, "y": 636.3238525390625 }, { "x": 546.8144836425781, "y": 630.7285614013672 }, { "x": 549.7531433105469, "y": 626.0284271240234 }, { "x": 554.0609283447266, "y": 622.7803649902344 }, { "x": 558.8054656982422, "y": 619.5516662597656 }, { "x": 564.2309265136719, "y": 617.4142761230469 }, { "x": 569.7042236328125, "y": 616.9770660400391 }, { "x": 573.5914611816406, "y": 618.0887451171875 }, { "x": 577.2650604248047, "y": 616.9615936279297 }, { "x": 579.1978759765625, "y": 612.9718627929688 }, { "x": 579.7258605957031, "y": 609.8542633056641 }, { "x": 577.0921630859375, "y": 605.6224212646484 }, { "x": 577.7490997314453, "y": 600.723388671875 }, { "x": 576.7438049316406, "y": 595.7572021484375 }, { "x": 576.5890350341797, "y": 590.2056274414062 }, { "x": 578.2901306152344, "y": 584.8593139648438 }, { "x": 573.5736999511719, "y": 582.0685119628906 }, { "x": 569.3673553466797, "y": 578.5798950195312 }, { "x": 564.3816680908203, "y": 575.8445739746094 }, { "x": 560.4657287597656, "y": 571.7144470214844 }, { "x": 555.4554595947266, "y": 570.6408081054688 }, { "x": 549.9172973632812, "y": 570.2452545166016 }, { "x": 545.3608551025391, "y": 566.8642120361328 }, { "x": 544.158447265625, "y": 562.2844696044922 }, { "x": 544.2678070068359, "y": 556.9682769775391 }, { "x": 547.2605743408203, "y": 551.9765014648438 }, { "x": 551.0048522949219, "y": 547.5480041503906 }, { "x": 549.6803131103516, "y": 542.1371917724609 }, { "x": 551.6143188476562, "y": 536.7713775634766 }, { "x": 554.7261505126953, "y": 532.5057983398438 }, { "x": 556.6840515136719, "y": 527.9351654052734 }, { "x": 560.0046691894531, "y": 523.3614654541016 }, { "x": 563.2183074951172, "y": 518.700927734375 }, { "x": 566.6917724609375, "y": 514.1038360595703 }, { "x": 570.9013671875, "y": 510.4244689941406 }, { "x": 576.4508819580078, "y": 509.0585021972656 }, { "x": 580.6448669433594, "y": 512.1970672607422 }, { "x": 582.6433715820312, "y": 515.3965148925781 }, { "x": 584.6112060546875, "y": 518.2318115234375 }, { "x": 589.334228515625, "y": 520.8245391845703 }, { "x": 594.2320709228516, "y": 523.3533172607422 }, { "x": 599.5832366943359, "y": 525.1279754638672 }, { "x": 605.1701507568359, "y": 524.3245086669922 }, { "x": 610.8705902099609, "y": 524.8465881347656 }, { "x": 615.8362731933594, "y": 525.8177337646484 }, { "x": 618.2878265380859, "y": 530.0617980957031 }, { "x": 620.8170166015625, "y": 534.8299102783203 }, { "x": 622.7230987548828, "y": 539.7364501953125 }, { "x": 623.4573974609375, "y": 544.3220062255859 }, { "x": 624.628173828125, "y": 548.7413482666016 }, { "x": 628.9601745605469, "y": 552.53955078125 }, { "x": 633.8474884033203, "y": 555.4685516357422 }, { "x": 639.0058898925781, "y": 557.4938354492188 }, { "x": 643.1031951904297, "y": 556.5219116210938 }, { "x": 643.6015625, "y": 550.7080841064453 }, { "x": 645.0346832275391, "y": 545.1780700683594 }, { "x": 648.1075134277344, "y": 540.9005889892578 }, { "x": 649.6470184326172, "y": 536.2086486816406 }, { "x": 647.8589019775391, "y": 531.7198638916016 }, { "x": 645.8965606689453, "y": 526.3826599121094 }, { "x": 642.7404632568359, "y": 521.6929626464844 }, { "x": 638.3439636230469, "y": 517.9023132324219 }, { "x": 634.8320922851562, "y": 513.2959289550781 }, { "x": 629.9361724853516, "y": 510.59617614746094 }, { "x": 625.8934326171875, "y": 506.5142517089844 }, { "x": 623.9425811767578, "y": 502.5326232910156 }, { "x": 620.7801666259766, "y": 499.29261779785156 }, { "x": 616.7859497070312, "y": 497.97869873046875 }, { "x": 612.0645751953125, "y": 495.2550048828125 }, { "x": 607.2537078857422, "y": 492.18212890625 }, { "x": 601.7683258056641, "y": 490.25059509277344 }, { "x": 596.3378295898438, "y": 488.23858642578125 }, { "x": 592.1634826660156, "y": 484.209716796875 }, { "x": 587.7252807617188, "y": 480.7861022949219 }, { "x": 583.6275177001953, "y": 477.22666931152344 }, { "x": 579.0950622558594, "y": 473.76171875 }, { "x": 574.1563873291016, "y": 470.82525634765625 }, { "x": 568.8590087890625, "y": 468.5557556152344 }, { "x": 563.7224426269531, "y": 466.27027893066406 }, { "x": 558.320556640625, "y": 464.7700958251953 }, { "x": 552.9064483642578, "y": 462.78587341308594 }, { "x": 547.7389373779297, "y": 460.4140625 }, { "x": 542.756591796875, "y": 457.9519805908203 }, { "x": 537.7510833740234, "y": 455.8540954589844 }, { "x": 533.0070037841797, "y": 453.69720458984375 }, { "x": 527.9630432128906, "y": 450.87738037109375 }, { "x": 522.7405090332031, "y": 448.3689270019531 }, { "x": 517.6966857910156, "y": 445.4605255126953 }, { "x": 513.7191314697266, "y": 441.3777313232422 }, { "x": 512.1836090087891, "y": 435.7856903076172 }, { "x": 514.8591003417969, "y": 431.21038818359375 }, { "x": 519.6426849365234, "y": 428.002197265625 }, { "x": 523.9123382568359, "y": 424.3828887939453 }, { "x": 528.0057525634766, "y": 420.89971923828125 }, { "x": 527.0324096679688, "y": 415.8942108154297 }, { "x": 525.5640869140625, "y": 412.27728271484375 }, { "x": 520.9116058349609, "y": 409.3800506591797 }, { "x": 515.1818237304688, "y": 409.6484832763672 }, { "x": 509.63519287109375, "y": 411.1455993652344 }, { "x": 503.9108581542969, "y": 411.761474609375 }, { "x": 498.55726623535156, "y": 410.85816955566406 }, { "x": 492.9452209472656, "y": 412.1946563720703 }, { "x": 487.16783142089844, "y": 412.59913635253906 }, { "x": 481.7568359375, "y": 411.5808868408203 }, { "x": 475.9420928955078, "y": 411.2268524169922 }, { "x": 470.21620178222656, "y": 410.52935791015625 }, { "x": 466.20106506347656, "y": 406.62413024902344 }, { "x": 460.95440673828125, "y": 404.28143310546875 }, { "x": 455.876708984375, "y": 401.7041320800781 }, { "x": 451.1325378417969, "y": 398.69117736816406 }, { "x": 449.68055725097656, "y": 393.60416412353516 }, { "x": 444.2891082763672, "y": 391.4064636230469 }, { "x": 439.7550506591797, "y": 387.8941345214844 }, { "x": 436.1669158935547, "y": 383.602783203125 }, { "x": 432.6245574951172, "y": 379.24329376220703 }, { "x": 427.8466033935547, "y": 376.1911087036133 }, { "x": 424.05824279785156, "y": 371.85709381103516 }, { "x": 419.9851531982422, "y": 367.8520965576172 }, { "x": 416.2243957519531, "y": 363.5029525756836 }, { "x": 413.927978515625, "y": 358.3788146972656 }, { "x": 411.64222717285156, "y": 353.0443801879883 }, { "x": 409.48350524902344, "y": 347.6514434814453 }, { "x": 408.16871643066406, "y": 341.9972839355469 }, { "x": 406.38641357421875, "y": 336.5021743774414 }, { "x": 404.8218688964844, "y": 330.9024200439453 }, { "x": 403.5377731323242, "y": 325.41497802734375 }, { "x": 401.23753356933594, "y": 320.13488006591797 }, { "x": 399.4425735473633, "y": 314.79955291748047 }, { "x": 397.34354400634766, "y": 309.41996002197266 }, { "x": 395.14234161376953, "y": 304.0401611328125 }, { "x": 393.2572250366211, "y": 298.77906036376953 }, { "x": 391.57167053222656, "y": 293.81651306152344 }, { "x": 387.4927673339844, "y": 290.0400085449219 }, { "x": 383.4478530883789, "y": 290.5808334350586 }, { "x": 378.38523864746094, "y": 287.7803268432617 }, { "x": 373.7951965332031, "y": 284.31478118896484 }, { "x": 369.41295623779297, "y": 280.47833251953125 }, { "x": 365.1680450439453, "y": 276.5615921020508 }, { "x": 360.58587646484375, "y": 272.98558807373047 }, { "x": 356.28795623779297, "y": 269.30615234375 }, { "x": 351.43355560302734, "y": 266.45320892333984 }, { "x": 345.89717864990234, "y": 264.77232360839844 }, { "x": 341.3076629638672, "y": 261.2261428833008 }, { "x": 337.6274719238281, "y": 257.04383087158203 }, { "x": 333.83927154541016, "y": 252.83245086669922 }, { "x": 330.1755142211914, "y": 248.66840362548828 }, { "x": 327.22481536865234, "y": 243.71869659423828 }, { "x": 326.14854431152344, "y": 238.01537322998047 }, { "x": 325.15892791748047, "y": 233.7386932373047 }, { "x": 323.47106170654297, "y": 228.29794311523438 }, { "x": 322.34285736083984, "y": 222.68848419189453 }, { "x": 322.3767547607422, "y": 217.27181243896484 }, { "x": 320.91431427001953, "y": 212.17514038085938 }, { "x": 321.6383361816406, "y": 206.58210372924805 }, { "x": 322.8095245361328, "y": 202.4580535888672 }, { "x": 325.8904113769531, "y": 203.17011642456055 }, { "x": 325.40394592285156, "y": 200.4233512878418 }, { "x": 327.704345703125, "y": 205.29217147827148 }, { "x": 329.24114990234375, "y": 203.91683197021484 }, { "x": 329.8431091308594, "y": 200.5536880493164 }, { "x": 330.99932861328125, "y": 197.4966049194336 }, { "x": 331.15050506591797, "y": 202.45307540893555 }, { "x": 334.2039031982422, "y": 198.0997543334961 }, { "x": 335.2046890258789, "y": 194.12614822387695 }, { "x": 333.4589614868164, "y": 190.21622848510742 }, { "x": 330.8079833984375, "y": 187.76248931884766 }, { "x": 326.8638458251953, "y": 189.15825653076172 }, { "x": 327.6696014404297, "y": 186.12693405151367 }, { "x": 325.2044982910156, "y": 181.57731246948242 }, { "x": 325.21434020996094, "y": 176.6078872680664 }, { "x": 323.1131134033203, "y": 171.94903182983398 }, { "x": 324.28382110595703, "y": 166.41239166259766 }, { "x": 326.5383758544922, "y": 161.03389739990234 }, { "x": 327.98486328125, "y": 157.20810317993164 }, { "x": 324.9610595703125, "y": 162.15180206298828 }, { "x": 323.27699279785156, "y": 167.71620559692383 }, { "x": 323.15216064453125, "y": 173.33081436157227 }, { "x": 322.3810119628906, "y": 175.24093627929688 }, { "x": 319.96278381347656, "y": 172.90650177001953 }, { "x": 318.9779510498047, "y": 169.68669509887695 }, { "x": 316.7604751586914, "y": 166.83432388305664 }, { "x": 316.0276184082031, "y": 161.40271759033203 }, { "x": 319.6179962158203, "y": 158.3757209777832 }, { "x": 322.71875, "y": 155.3167839050293 }, { "x": 326.90287017822266, "y": 158.34851837158203 }, { "x": 324.15452575683594, "y": 155.49833297729492 }, { "x": 326.55059814453125, "y": 152.73924255371094 }, { "x": 329.09803009033203, "y": 151.72847747802734 }, { "x": 333.00609588623047, "y": 148.69001388549805 }, { "x": 335.1570129394531, "y": 147.2505989074707 }, { "x": 337.8871383666992, "y": 149.91640853881836 }, { "x": 332.8277282714844, "y": 152.52210235595703 }, { "x": 328.2619934082031, "y": 154.7165870666504 }, { "x": 329.70223236083984, "y": 157.56189727783203 }, { "x": 334.61598205566406, "y": 155.65633010864258 }, { "x": 339.58951568603516, "y": 152.76690292358398 }, { "x": 344.86297607421875, "y": 150.93297576904297 }, { "x": 349.6335144042969, "y": 148.1536521911621 }, { "x": 354.54335021972656, "y": 145.11180114746094 }, { "x": 358.6168746948242, "y": 142.05071258544922 }, { "x": 363.61988830566406, "y": 142.63729095458984 }, { "x": 367.39733123779297, "y": 139.42336654663086 }, { "x": 367.3093719482422, "y": 138.0700912475586 }, { "x": 364.98631286621094, "y": 135.35029983520508 }, { "x": 368.8059616088867, "y": 131.61714553833008 }, { "x": 372.7121047973633, "y": 133.57542419433594 }, { "x": 378.3388900756836, "y": 134.50244140625 }, { "x": 380.2387924194336, "y": 138.44556045532227 }, { "x": 385.0408706665039, "y": 138.07456588745117 }, { "x": 389.8830032348633, "y": 135.9391326904297 }, { "x": 388.5452575683594, "y": 131.80110931396484 }, { "x": 393.6154251098633, "y": 132.93295288085938 }, { "x": 397.48707580566406, "y": 137.24664306640625 }, { "x": 399.68981170654297, "y": 141.49438095092773 }, { "x": 401.7316207885742, "y": 144.50298690795898 }, { "x": 397.97635650634766, "y": 144.87849044799805 }, { "x": 403.5206527709961, "y": 146.50913619995117 }, { "x": 407.70042419433594, "y": 143.15575408935547 }, { "x": 404.81976318359375, "y": 138.98875427246094 }, { "x": 402.0451431274414, "y": 134.05688858032227 }, { "x": 397.2990493774414, "y": 131.3380584716797 }, { "x": 392.09395599365234, "y": 129.30230331420898 }, { "x": 391.64026641845703, "y": 123.81609725952148 }, { "x": 394.1405487060547, "y": 119.21377563476562 }, { "x": 391.8175811767578, "y": 115.98083114624023 }, { "x": 386.84320068359375, "y": 115.6836109161377 }, { "x": 386.90877532958984, "y": 111.43408203125 }, { "x": 389.78131103515625, "y": 108.16979789733887 }, { "x": 394.16883850097656, "y": 104.4702262878418 }, { "x": 393.79642486572266, "y": 100.42179870605469 }, { "x": 388.7435836791992, "y": 98.44447708129883 }, { "x": 384.0191192626953, "y": 97.44326782226562 }, { "x": 382.0537796020508, "y": 96.21944236755371 }, { "x": 381.67967224121094, "y": 91.33949851989746 }, { "x": 384.58734130859375, "y": 87.26652336120605 }, { "x": 389.1421356201172, "y": 84.33810615539551 }, { "x": 393.0388946533203, "y": 81.36647033691406 }, { "x": 397.36082458496094, "y": 80.19624900817871 }, { "x": 397.9901123046875, "y": 74.97199249267578 }, { "x": 392.5600280761719, "y": 73.24250984191895 }, { "x": 387.71446228027344, "y": 72.58780479431152 }, { "x": 382.5624694824219, "y": 71.97429847717285 }, { "x": 377.5782928466797, "y": 71.82560539245605 }, { "x": 372.6670150756836, "y": 72.44423294067383 }, { "x": 367.6791534423828, "y": 69.65485000610352 }, { "x": 362.0390930175781, "y": 69.72828674316406 }, { "x": 356.4907684326172, "y": 68.3786392211914 }, { "x": 351.36962890625, "y": 67.95330238342285 }, { "x": 346.8711624145508, "y": 65.8693904876709 }, { "x": 342.2033004760742, "y": 64.98111152648926 }, { "x": 336.8412170410156, "y": 64.8855504989624 }, { "x": 332.1399383544922, "y": 62.97788619995117 }, { "x": 327.7384948730469, "y": 59.52774143218994 }, { "x": 324.8007278442383, "y": 55.02225971221924 }, { "x": 323.4248046875, "y": 50.848167419433594 }, { "x": 320.8345260620117, "y": 46.9150333404541 }, { "x": 317.4632568359375, "y": 45.94070053100586 }, { "x": 315.8354721069336, "y": 42.04177141189575 }, { "x": 315.51123809814453, "y": 37.086669921875 }, { "x": 319.8997497558594, "y": 34.22226810455322 }, { "x": 318.4966354370117, "y": 31.402682065963745 }, { "x": 313.0127868652344, "y": 33.1091513633728 }, { "x": 307.53839111328125, "y": 34.48745632171631 }, { "x": 302.5237274169922, "y": 37.19028043746948 }, { "x": 297.4007568359375, "y": 39.592308044433594 }, { "x": 292.5743713378906, "y": 39.71851205825806 }, { "x": 288.43387603759766, "y": 37.93913745880127 }, { "x": 283.775146484375, "y": 40.220391273498535 }, { "x": 279.58773040771484, "y": 38.054598331451416 }, { "x": 275.4507141113281, "y": 40.61810922622681 }, { "x": 270.07080078125, "y": 40.190861225128174 }, { "x": 264.5720748901367, "y": 41.379666328430176 }, { "x": 260.96263122558594, "y": 44.050411224365234 }, { "x": 259.1865539550781, "y": 49.31567192077637 }, { "x": 256.89469146728516, "y": 54.20310592651367 }, { "x": 253.42481994628906, "y": 56.03443241119385 }, { "x": 247.77249145507812, "y": 55.78766345977783 }, { "x": 242.41615295410156, "y": 54.64963436126709 }, { "x": 242.10313415527344, "y": 50.811469078063965 }, { "x": 237.02674102783203, "y": 48.800533294677734 }, { "x": 232.54898834228516, "y": 51.16760063171387 }, { "x": 227.7049560546875, "y": 49.44156551361084 }, { "x": 225.37496185302734, "y": 54.12683391571045 }, { "x": 224.24490356445312, "y": 58.764729499816895 }, { "x": 223.7805938720703, "y": 62.892404556274414 }, { "x": 225.15631103515625, "y": 66.37610340118408 }, { "x": 228.37422943115234, "y": 69.87029647827148 }, { "x": 225.7406005859375, "y": 72.97077560424805 }, { "x": 221.67247772216797, "y": 73.05962181091309 }, { "x": 217.10296630859375, "y": 71.24851417541504 }, { "x": 215.7023468017578, "y": 66.58401393890381 }, { "x": 211.3500099182129, "y": 68.5727481842041 }, { "x": 207.73281860351562, "y": 71.59158515930176 }, { "x": 205.82142639160156, "y": 76.28033256530762 }, { "x": 205.79446411132812, "y": 81.54749298095703 }, { "x": 210.77857208251953, "y": 82.64138221740723 }, { "x": 209.47086715698242, "y": 87.32596969604492 }, { "x": 210.32000732421875, "y": 92.38839530944824 }, { "x": 211.12305068969727, "y": 96.94577026367188 }, { "x": 205.79266738891602, "y": 98.07081604003906 }, { "x": 204.46437454223633, "y": 93.73294448852539 }, { "x": 202.96387100219727, "y": 89.45525169372559 }, { "x": 198.557861328125, "y": 86.36171913146973 }, { "x": 193.38776397705078, "y": 88.33151054382324 }, { "x": 188.57877349853516, "y": 89.27880668640137 }, { "x": 185.8225326538086, "y": 92.18233871459961 }, { "x": 181.17353057861328, "y": 92.36800765991211 }, { "x": 177.4758071899414, "y": 88.56031227111816 }, { "x": 174.56562042236328, "y": 84.00143814086914 }, { "x": 175.28202056884766, "y": 78.4271011352539 }, { "x": 172.00365447998047, "y": 78.9661636352539 }, { "x": 167.94648361206055, "y": 76.71404647827148 }, { "x": 164.74623489379883, "y": 79.95989990234375 }, { "x": 164.8397560119629, "y": 83.83767890930176 }, { "x": 165.71615600585938, "y": 89.42104530334473 }, { "x": 164.02874755859375, "y": 94.80636024475098 }, { "x": 161.33098602294922, "y": 99.63898849487305 }, { "x": 157.51494216918945, "y": 103.94145202636719 }, { "x": 155.30493927001953, "y": 107.87097549438477 }, { "x": 151.44830322265625, "y": 111.60887336730957 }, { "x": 150.52544021606445, "y": 116.14517974853516 }, { "x": 153.03428268432617, "y": 120.30535888671875 }, { "x": 153.3462257385254, "y": 124.0632553100586 }, { "x": 150.69364547729492, "y": 127.67948532104492 }, { "x": 146.94327926635742, "y": 126.0455436706543 }, { "x": 146.75750732421875, "y": 122.8998031616211 }, { "x": 144.55756378173828, "y": 117.72584915161133 }, { "x": 140.02839279174805, "y": 114.52970886230469 }, { "x": 142.30706024169922, "y": 110.62085342407227 }, { "x": 139.97853088378906, "y": 107.56758117675781 }, { "x": 135.15402221679688, "y": 107.19504165649414 }, { "x": 129.86164474487305, "y": 105.30583953857422 }, { "x": 126.80033874511719, "y": 100.70023918151855 }, { "x": 123.44645309448242, "y": 97.01809692382812 }, { "x": 120.39567565917969, "y": 92.35696411132812 }, { "x": 122.28472900390625, "y": 87.33216094970703 }, { "x": 122.3830795288086, "y": 81.84295082092285 }, { "x": 117.86416244506836, "y": 80.2402286529541 }, { "x": 113.2402172088623, "y": 83.4683837890625 }, { "x": 112.55291366577148, "y": 87.6036319732666 }, { "x": 108.68975448608398, "y": 91.8234920501709 }, { "x": 103.74075698852539, "y": 94.00587463378906 }, { "x": 104.91945838928223, "y": 97.58187294006348 }, { "x": 105.94835090637207, "y": 102.94997596740723 }, { "x": 102.06460952758789, "y": 106.7809829711914 }, { "x": 99.04864501953125, "y": 110.99081230163574 }, { "x": 95.79340744018555, "y": 115.15533447265625 }, { "x": 91.43718528747559, "y": 117.09779739379883 }, { "x": 88.70393562316895, "y": 119.58385467529297 }, { "x": 83.72243690490723, "y": 119.73587799072266 }, { "x": 79.99794006347656, "y": 116.16210556030273 }, { "x": 74.65188980102539, "y": 115.62529182434082 }, { "x": 70.36263275146484, "y": 118.56780242919922 }, { "x": 65.7391996383667, "y": 121.68809127807617 }, { "x": 61.43594932556152, "y": 120.63124084472656 }, { "x": 56.517144203186035, "y": 123.09062194824219 }, { "x": 52.76649475097656, "y": 123.68013000488281 }, { "x": 50.28528690338135, "y": 122.88316345214844 }, { "x": 46.68329906463623, "y": 120.65252685546875 }, { "x": 43.971452713012695, "y": 125.00890350341797 }, { "x": 39.01666021347046, "y": 127.73146438598633 }, { "x": 35.73998498916626, "y": 130.45267486572266 }, { "x": 36.0073447227478, "y": 136.01681518554688 }, { "x": 40.317201137542725, "y": 139.5898094177246 }, { "x": 44.58435821533203, "y": 140.70987701416016 }, { "x": 45.20456790924072, "y": 144.30749893188477 }, { "x": 45.378844261169434, "y": 149.51757049560547 }, { "x": 48.51186466217041, "y": 152.5094108581543 }, { "x": 51.64787197113037, "y": 156.69727325439453 }, { "x": 54.664671897888184, "y": 160.50568389892578 }, { "x": 51.15025997161865, "y": 164.60670852661133 }, { "x": 52.41841983795166, "y": 169.94309997558594 }, { "x": 48.549049377441406, "y": 172.7085304260254 }, { "x": 44.04375076293945, "y": 174.74587631225586 }, { "x": 39.83308744430542, "y": 177.69245529174805 }, { "x": 35.66197347640991, "y": 178.16664123535156 }, { "x": 30.69288444519043, "y": 178.84934997558594 }, { "x": 26.180269479751587, "y": 181.47164916992188 }, { "x": 28.024482011795044, "y": 186.51568984985352 }, { "x": 32.05424928665161, "y": 188.7986831665039 }, { "x": 32.71278524398804, "y": 194.3258934020996 }, { "x": 35.86770677566528, "y": 198.7618179321289 }, { "x": 40.97335386276245, "y": 201.02460098266602 }, { "x": 45.916842460632324, "y": 201.0747833251953 }, { "x": 46.417887687683105, "y": 205.83987426757812 }, { "x": 48.66209697723389, "y": 210.56906509399414 }, { "x": 46.23739719390869, "y": 212.27674102783203 }, { "x": 43.17471218109131, "y": 216.3249053955078 }, { "x": 42.4101037979126, "y": 220.27320861816406 }, { "x": 38.53969621658325, "y": 224.04378509521484 }, { "x": 40.6614294052124, "y": 228.98113250732422 }, { "x": 41.10359334945679, "y": 231.73268127441406 }, { "x": 40.91624641418457, "y": 236.69298553466797 }, { "x": 43.807042598724365, "y": 241.1968536376953 }, { "x": 45.61129093170166, "y": 246.02621459960938 }, { "x": 50.63648319244385, "y": 247.13230895996094 }, { "x": 55.19474220275879, "y": 247.98844146728516 }, { "x": 58.635416984558105, "y": 251.85743713378906 }, { "x": 62.94456672668457, "y": 252.74506378173828 }, { "x": 65.79692935943604, "y": 253.7081527709961 }, { "x": 224.52741241455078, "y": 344.61988067626953 }, { "x": 222.0693130493164, "y": 349.30005645751953 }, { "x": 218.39610290527344, "y": 347.66121673583984 }, { "x": 215.92154693603516, "y": 349.502685546875 }, { "x": 211.2408790588379, "y": 348.37750244140625 }, { "x": 208.85915756225586, "y": 352.504150390625 }, { "x": 213.42080688476562, "y": 353.9253463745117 }, { "x": 218.00210571289062, "y": 353.0882568359375 }, { "x": 220.8388671875, "y": 351.7204132080078 }, { "x": 224.41473388671875, "y": 355.63436126708984 }, { "x": 224.30269622802734, "y": 352.52012634277344 }, { "x": 225.53751373291016, "y": 349.22388458251953 }, { "x": 207.26337051391602, "y": 361.97342681884766 }, { "x": 206.22127151489258, "y": 365.58499908447266 }, { "x": 249.21591186523438, "y": 378.7007522583008 }, { "x": 250.23917388916016, "y": 383.7898483276367 }, { "x": 219.51817321777344, "y": 380.7581253051758 }, { "x": 218.70030975341797, "y": 383.83397674560547 }, { "x": 359.24071502685547, "y": 480.1382751464844 }, { "x": 358.5132369995117, "y": 484.43218994140625 }, { "x": 372.7478332519531, "y": 135.93058395385742 }, { "x": 376.77313232421875, "y": 136.55673599243164 }, { "x": 326.1961975097656, "y": 680.1290435791016 }, { "x": 325.9227752685547, "y": 678.8262023925781 }, { "x": 322.25684356689453, "y": 682.6850128173828 }, { "x": 324.6916198730469, "y": 684.1846466064453 }, { "x": 326.78893280029297, "y": 684.2914886474609 }, { "x": 310.05274963378906, "y": 681.6469879150391 }, { "x": 311.8756790161133, "y": 680.9820861816406 }, { "x": 305.64432525634766, "y": 755.6319885253906 }, { "x": 304.86827850341797, "y": 759.8578338623047 }, { "x": 309.1762466430664, "y": 762.8142547607422 }, { "x": 311.5383529663086, "y": 758.7773284912109 }, { "x": 337.38904571533203, "y": 841.1331787109375 }, { "x": 337.85404205322266, "y": 841.7802734375 }, { "x": 340.5818328857422, "y": 841.5660400390625 }, { "x": 353.40047454833984, "y": 820.493896484375 }, { "x": 474.9069061279297, "y": 626.7384643554688 }, { "x": 477.8035888671875, "y": 625.2596130371094 }, { "x": 458.26788330078125, "y": 640.1614227294922 }, { "x": 454.6026153564453, "y": 641.6092376708984 }, { "x": 458.35215759277344, "y": 643.4185943603516 }, { "x": 460.41355895996094, "y": 645.1719207763672 }, { "x": 462.00360107421875, "y": 649.5180206298828 }, { "x": 463.38499450683594, "y": 647.1203002929688 }, { "x": 462.4589385986328, "y": 644.5620880126953 }, { "x": 462.09954833984375, "y": 651.5162963867188 }, { "x": 465.49913024902344, "y": 655.21630859375 }, { "x": 368.9664306640625, "y": 630.9734191894531 }, { "x": 370.9614791870117, "y": 632.3271179199219 }, { "x": 475.00775146484375, "y": 726.6826934814453 }, { "x": 470.6825714111328, "y": 724.2421722412109 }, { "x": 470.2831726074219, "y": 718.4376373291016 }, { "x": 470.67771911621094, "y": 712.6239929199219 }, { "x": 474.2663116455078, "y": 708.2063903808594 }, { "x": 475.71156311035156, "y": 702.6819610595703 }, { "x": 476.61463928222656, "y": 697.5853118896484 }, { "x": 478.9102783203125, "y": 693.0124816894531 }, { "x": 481.7949676513672, "y": 688.5377044677734 }, { "x": 484.61863708496094, "y": 683.7711486816406 }, { "x": 487.5580291748047, "y": 678.881591796875 }, { "x": 491.0427551269531, "y": 674.3489074707031 }, { "x": 494.03460693359375, "y": 669.3944396972656 }, { "x": 495.93011474609375, "y": 664.0276641845703 }, { "x": 498.92420959472656, "y": 660.9573974609375 }, { "x": 494.1025390625, "y": 658.5645751953125 }, { "x": 489.3905944824219, "y": 661.6531066894531 }, { "x": 484.2847900390625, "y": 664.3992767333984 }, { "x": 478.5773468017578, "y": 664.9528961181641 }, { "x": 476.7459716796875, "y": 661.3347778320312 }, { "x": 476.72747802734375, "y": 665.9974212646484 }, { "x": 472.7922668457031, "y": 670.1955261230469 }, { "x": 467.9714660644531, "y": 669.3884887695312 }, { "x": 462.6758270263672, "y": 667.8818511962891 }, { "x": 457.7337188720703, "y": 667.5113830566406 }, { "x": 452.3881378173828, "y": 668.0639953613281 }, { "x": 448.4738464355469, "y": 671.8074035644531 }, { "x": 443.9269714355469, "y": 674.2471008300781 }, { "x": 439.1735076904297, "y": 676.8729248046875 }, { "x": 433.8803405761719, "y": 677.3151702880859 }, { "x": 428.3328399658203, "y": 678.7174835205078 }, { "x": 422.6614685058594, "y": 678.2750549316406 }, { "x": 418.7033233642578, "y": 678.0791320800781 }, { "x": 414.09423828125, "y": 675.9369354248047 }, { "x": 408.6617736816406, "y": 677.6961212158203 }, { "x": 403.79503631591797, "y": 680.6355133056641 }, { "x": 398.09029388427734, "y": 680.4934234619141 }, { "x": 392.7982482910156, "y": 678.5142364501953 }, { "x": 389.0110092163086, "y": 674.5912017822266 }, { "x": 386.9916076660156, "y": 671.8604583740234 }, { "x": 381.61400604248047, "y": 672.3097076416016 }, { "x": 379.7974624633789, "y": 667.2247772216797 }, { "x": 375.6346969604492, "y": 664.2457885742188 }, { "x": 372.0736846923828, "y": 667.0377807617188 }, { "x": 366.5688705444336, "y": 666.452392578125 }, { "x": 363.5626678466797, "y": 670.2684478759766 }, { "x": 362.63599395751953, "y": 674.6304779052734 }, { "x": 357.62290954589844, "y": 677.204345703125 }, { "x": 352.6517333984375, "y": 675.3815307617188 }, { "x": 349.5613708496094, "y": 670.9585266113281 }, { "x": 347.4028549194336, "y": 667.6907806396484 }, { "x": 346.3404541015625, "y": 668.7736663818359 }, { "x": 343.63907623291016, "y": 671.6873321533203 }, { "x": 339.90674591064453, "y": 675.0098266601562 }, { "x": 335.29315185546875, "y": 677.4662780761719 }, { "x": 333.9223098754883, "y": 681.0305633544922 }, { "x": 330.85936737060547, "y": 685.5954284667969 }, { "x": 332.54002380371094, "y": 690.0981750488281 }, { "x": 330.7057418823242, "y": 694.1468200683594 }, { "x": 332.7606658935547, "y": 698.6645355224609 }, { "x": 337.0508041381836, "y": 701.9729766845703 }, { "x": 340.8011474609375, "y": 705.5149688720703 }, { "x": 344.81797790527344, "y": 708.5585479736328 }, { "x": 350.1595764160156, "y": 707.0731964111328 }, { "x": 355.66184997558594, "y": 707.2616119384766 }, { "x": 360.0251159667969, "y": 710.1480407714844 }, { "x": 364.33557891845703, "y": 711.6315155029297 }, { "x": 369.6145782470703, "y": 713.1050567626953 }, { "x": 372.97259521484375, "y": 716.8340911865234 }, { "x": 376.4240417480469, "y": 720.4415435791016 }, { "x": 381.01751708984375, "y": 723.5915985107422 }, { "x": 385.55482482910156, "y": 726.3024291992188 }, { "x": 390.57164001464844, "y": 727.6861114501953 }, { "x": 394.4514846801758, "y": 731.6047515869141 }, { "x": 398.7894821166992, "y": 734.8940582275391 }, { "x": 404.0709533691406, "y": 735.8944549560547 }, { "x": 408.2149963378906, "y": 739.3109741210938 }, { "x": 413.8499298095703, "y": 738.4457092285156 }, { "x": 419.6459503173828, "y": 738.9649963378906 }, { "x": 424.97381591796875, "y": 740.968994140625 }, { "x": 429.5976867675781, "y": 744.3511352539062 }, { "x": 433.5784912109375, "y": 748.5484619140625 }, { "x": 436.3251190185547, "y": 753.3396453857422 }, { "x": 438.2301025390625, "y": 758.582275390625 }, { "x": 443.4031524658203, "y": 760.2063751220703 }, { "x": 448.3881530761719, "y": 762.857421875 }, { "x": 452.3277587890625, "y": 764.1547698974609 }, { "x": 457.66070556640625, "y": 763.7365112304688 }, { "x": 462.59910583496094, "y": 764.7671661376953 }, { "x": 467.3919372558594, "y": 764.8968505859375 }, { "x": 471.0279541015625, "y": 767.3553161621094 }, { "x": 472.00628662109375, "y": 763.33056640625 }, { "x": 470.4195861816406, "y": 758.188232421875 }, { "x": 472.9959259033203, "y": 753.5198669433594 }, { "x": 475.6539764404297, "y": 748.4474792480469 }, { "x": 479.6330871582031, "y": 745.3943786621094 }, { "x": 483.00140380859375, "y": 743.8947448730469 }, { "x": 480.43792724609375, "y": 741.3508605957031 }, { "x": 480.84474182128906, "y": 738.0614166259766 }, { "x": 476.3066101074219, "y": 735.0186157226562 }, { "x": 475.7270812988281, "y": 729.5339202880859 }, { "x": 478.0009765625, "y": 730.4425811767578 }, { "x": 442.24574279785156, "y": 640.1588134765625 }, { "x": 444.29762268066406, "y": 641.9723358154297 }, { "x": 172.55665588378906, "y": 456.47926330566406 }, { "x": 170.23285293579102, "y": 460.90496826171875 }, { "x": 173.1043243408203, "y": 458.788818359375 }, { "x": 160.5982551574707, "y": 459.26768493652344 }, { "x": 159.40527725219727, "y": 460.0173645019531 }, { "x": 158.38004684448242, "y": 464.9613494873047 }, { "x": 153.9877700805664, "y": 467.0677032470703 }, { "x": 149.57083129882812, "y": 469.0983428955078 }, { "x": 145.81558990478516, "y": 473.43414306640625 }, { "x": 142.70130920410156, "y": 477.7893524169922 }, { "x": 140.0981101989746, "y": 479.4340515136719 }, { "x": 136.3847198486328, "y": 481.63905334472656 }, { "x": 131.41150665283203, "y": 484.1468200683594 }, { "x": 127.09513854980469, "y": 487.84271240234375 }, { "x": 121.53474044799805, "y": 487.65379333496094 }, { "x": 116.17582702636719, "y": 486.9142303466797 }, { "x": 111.66819953918457, "y": 483.7210998535156 }, { "x": 109.91710472106934, "y": 478.7089080810547 }, { "x": 106.68001174926758, "y": 480.19471740722656 }, { "x": 109.22821617126465, "y": 484.9180145263672 }, { "x": 106.62842750549316, "y": 489.83123779296875 }, { "x": 104.8825798034668, "y": 494.9608917236328 }, { "x": 108.33882141113281, "y": 498.4100036621094 }, { "x": 105.06465530395508, "y": 502.5252990722656 }, { "x": 106.8019027709961, "y": 504.17091369628906 }, { "x": 109.26834487915039, "y": 503.8553771972656 }, { "x": 111.19269180297852, "y": 504.62098693847656 }, { "x": 114.81597137451172, "y": 506.8544616699219 }, { "x": 117.37324523925781, "y": 510.9434356689453 }, { "x": 119.2852897644043, "y": 516.3406524658203 }, { "x": 118.3598403930664, "y": 521.7911071777344 }, { "x": 122.6917610168457, "y": 524.3580169677734 }, { "x": 122.25291442871094, "y": 528.3007354736328 }, { "x": 121.55606079101562, "y": 534.07666015625 }, { "x": 123.37432098388672, "y": 538.6107635498047 }, { "x": 119.63408279418945, "y": 541.5078582763672 }, { "x": 119.04530715942383, "y": 543.4045104980469 }, { "x": 118.60948181152344, "y": 548.3933563232422 }, { "x": 120.07612228393555, "y": 553.657958984375 }, { "x": 123.27155303955078, "y": 550.7020874023438 }, { "x": 126.84047317504883, "y": 554.109130859375 }, { "x": 126.29983139038086, "y": 559.718017578125 }, { "x": 123.46137619018555, "y": 562.3329010009766 }, { "x": 121.36924743652344, "y": 562.8367156982422 }, { "x": 121.45062637329102, "y": 568.1662292480469 }, { "x": 122.06893920898438, "y": 573.8111419677734 }, { "x": 119.43013763427734, "y": 578.6481475830078 }, { "x": 119.51103591918945, "y": 583.4510955810547 }, { "x": 118.08313369750977, "y": 587.8616943359375 }, { "x": 120.34505844116211, "y": 592.9364166259766 }, { "x": 116.81606674194336, "y": 597.2617340087891 }, { "x": 120.52546310424805, "y": 601.3545532226562 }, { "x": 122.91137313842773, "y": 605.7287139892578 }, { "x": 126.31719207763672, "y": 608.5874938964844 }, { "x": 127.65307235717773, "y": 613.0827789306641 }, { "x": 130.4744987487793, "y": 617.0753021240234 }, { "x": 131.62388610839844, "y": 621.3889465332031 }, { "x": 134.71906661987305, "y": 617.8508453369141 }, { "x": 138.80571746826172, "y": 619.0792999267578 }, { "x": 142.51652145385742, "y": 620.6800537109375 }, { "x": 146.58469009399414, "y": 616.8482055664062 }, { "x": 150.59713745117188, "y": 613.4388732910156 }, { "x": 152.5866470336914, "y": 609.3732452392578 }, { "x": 150.66018295288086, "y": 604.4569091796875 }, { "x": 153.4347915649414, "y": 599.3885040283203 }, { "x": 157.75272750854492, "y": 599.6705780029297 }, { "x": 161.28795623779297, "y": 596.8955230712891 }, { "x": 166.64973068237305, "y": 598.4209747314453 }, { "x": 170.50009536743164, "y": 601.9882354736328 }, { "x": 175.63874435424805, "y": 602.8553771972656 }, { "x": 178.07670211791992, "y": 604.3922729492188 }, { "x": 180.6901092529297, "y": 599.7828674316406 }, { "x": 180.97583389282227, "y": 594.5440368652344 }, { "x": 182.23827743530273, "y": 590.7801666259766 }, { "x": 183.04977798461914, "y": 585.3808898925781 }, { "x": 184.5052947998047, "y": 579.8139801025391 }, { "x": 184.83566284179688, "y": 575.0935668945312 }, { "x": 184.43149185180664, "y": 569.3733520507812 }, { "x": 185.56898880004883, "y": 563.9280242919922 }, { "x": 185.44979858398438, "y": 558.4876861572266 }, { "x": 186.46866607666016, "y": 553.6856079101562 }, { "x": 187.52054977416992, "y": 548.62255859375 }, { "x": 187.1807861328125, "y": 543.2960205078125 }, { "x": 188.09456253051758, "y": 538.2417602539062 }, { "x": 184.31966018676758, "y": 534.0894317626953 }, { "x": 183.1158218383789, "y": 528.6689147949219 }, { "x": 185.26276779174805, "y": 523.3902130126953 }, { "x": 188.88490295410156, "y": 518.9509582519531 }, { "x": 191.90720748901367, "y": 514.561279296875 }, { "x": 194.14824676513672, "y": 509.41871643066406 }, { "x": 191.55348205566406, "y": 504.6742248535156 }, { "x": 190.1284637451172, "y": 500.95567321777344 }, { "x": 190.10230255126953, "y": 497.4661865234375 }, { "x": 188.20147323608398, "y": 493.1448516845703 }, { "x": 185.93482208251953, "y": 489.0148162841797 }, { "x": 186.7581558227539, "y": 485.97132873535156 }, { "x": 184.1295394897461, "y": 484.4093933105469 }, { "x": 182.5939712524414, "y": 481.3431091308594 }, { "x": 177.78131866455078, "y": 481.79693603515625 }, { "x": 180.2755470275879, "y": 480.3428497314453 }, { "x": 183.05741119384766, "y": 475.8195495605469 }, { "x": 180.33316802978516, "y": 475.5025939941406 }, { "x": 177.69358825683594, "y": 475.1070861816406 }, { "x": 178.540771484375, "y": 470.99440002441406 }, { "x": 179.29363250732422, "y": 467.28880310058594 }, { "x": 175.3500099182129, "y": 465.93634033203125 }, { "x": 173.74422073364258, "y": 466.3254852294922 }, { "x": 171.3289794921875, "y": 463.01841735839844 }, { "x": 167.08794784545898, "y": 462.62217712402344 }, { "x": 164.7694435119629, "y": 459.40089416503906 }, { "x": 174.0121726989746, "y": 460.5232849121094 }, { "x": 175.42934036254883, "y": 462.6886901855469 }, { "x": 114.31143569946289, "y": 467.5131072998047 }, { "x": 111.79536628723145, "y": 471.0876007080078 }, { "x": 109.37606239318848, "y": 474.3417510986328 }, { "x": 111.92180061340332, "y": 476.72344970703125 }, { "x": 112.50877380371094, "y": 471.62428283691406 }, { "x": 115.81254577636719, "y": 470.7071990966797 }, { "x": 183.61525344848633, "y": 475.97743225097656 }, { "x": 188.08985900878906, "y": 481.5348663330078 }, { "x": 188.79448318481445, "y": 482.8235626220703 }, { "x": 111.18699836730957, "y": 600.5698547363281 }, { "x": 111.07252883911133, "y": 603.7097930908203 }, { "x": 114.11104965209961, "y": 604.4811706542969 }, { "x": 113.7214298248291, "y": 599.6990051269531 }, { "x": 116.95023727416992, "y": 608.9873504638672 }, { "x": 119.25884246826172, "y": 614.26806640625 }, { "x": 121.63907623291016, "y": 611.0264587402344 }, { "x": 121.96405410766602, "y": 606.4606323242188 }, { "x": 131.83049774169922, "y": 148.17208862304688 }, { "x": 137.17206192016602, "y": 146.92841339111328 }, { "x": 142.06042861938477, "y": 145.28382873535156 }, { "x": 145.0837516784668, "y": 146.60628509521484 }, { "x": 149.84931182861328, "y": 149.19623184204102 }, { "x": 155.39268112182617, "y": 151.3938980102539 }, { "x": 160.06298065185547, "y": 148.00968551635742 }, { "x": 164.84054565429688, "y": 144.38982772827148 }, { "x": 168.62066650390625, "y": 141.2480583190918 }, { "x": 171.33099365234375, "y": 146.16168212890625 }, { "x": 172.13999938964844, "y": 151.26851654052734 }, { "x": 168.08884811401367, "y": 154.84442901611328 }, { "x": 165.0355987548828, "y": 159.03144454956055 }, { "x": 161.59420013427734, "y": 163.75263595581055 }, { "x": 155.64212799072266, "y": 163.61613082885742 }, { "x": 152.4112091064453, "y": 165.25872421264648 }, { "x": 147.38705825805664, "y": 165.68903350830078 }, { "x": 145.83724212646484, "y": 165.20824432373047 }, { "x": 143.2344093322754, "y": 164.13689422607422 }, { "x": 138.35154724121094, "y": 160.68013763427734 }, { "x": 136.80428314208984, "y": 157.00151443481445 }, { "x": 134.61690521240234, "y": 151.81666564941406 }];
const usaData = [{ "x": 682.89140625, "y": 171.53790283203125 }, { "x": 677.519775390625, "y": 166.87640380859375 }, { "x": 672.44677734375, "y": 162.48968505859375 }, { "x": 664.8778808593751, "y": 163.711181640625 }, { "x": 657.141748046875, "y": 165.45989990234375 }, { "x": 649.3716796875001, "y": 167.0504150390625 }, { "x": 641.59892578125, "y": 168.62834472656252 }, { "x": 633.8261230468751, "y": 170.2062744140625 }, { "x": 626.053369140625, "y": 171.7842041015625 }, { "x": 618.252978515625, "y": 173.21136474609375 }, { "x": 616.0185058593751, "y": 168.01578369140626 }, { "x": 621.596044921875, "y": 162.57890625000002 }, { "x": 623.465380859375, "y": 155.85867919921876 }, { "x": 621.0947265625, "y": 149.93494873046876 }, { "x": 628.4545410156251, "y": 147.0811767578125 }, { "x": 636.309619140625, "y": 146.28782958984374 }, { "x": 643.452197265625, "y": 145.55821533203124 }, { "x": 650.099169921875, "y": 142.44600830078127 }, { "x": 655.4313476562501, "y": 137.74843750000002 }, { "x": 654.28076171875, "y": 131.1385986328125 }, { "x": 653.1463378906251, "y": 125.82889404296876 }, { "x": 657.9960449218751, "y": 119.67831420898438 }, { "x": 662.5385253906251, "y": 113.18483276367188 }, { "x": 669.0465820312501, "y": 108.97722778320313 }, { "x": 676.7986328125, "y": 107.76070556640626 }, { "x": 684.4208496093751, "y": 105.57353515625 }, { "x": 686.55654296875, "y": 112.56519165039063 }, { "x": 687.57509765625, "y": 120.26168212890626 }, { "x": 689.80703125, "y": 127.46263427734375 }, { "x": 692.8349121093751, "y": 133.3849365234375 }, { "x": 694.393798828125, "y": 141.07180175781252 }, { "x": 693.88525390625, "y": 148.98358154296875 }, { "x": 694.4319824218751, "y": 156.85909423828124 }, { "x": 696.0564941406251, "y": 164.6216552734375 }, { "x": 695.8587890625, "y": 172.45958251953127 }, { "x": 696.0656250000001, "y": 178.828369140625 }, { "x": 702.272705078125, "y": 175.61109619140626 }, { "x": 709.577294921875, "y": 173.086083984375 }, { "x": 715.8656738281251, "y": 170.07567138671877 }, { "x": 712.40458984375, "y": 174.97856445312502 }, { "x": 706.0595703125, "y": 179.73736572265625 }, { "x": 698.6290039062501, "y": 182.44290771484376 }, { "x": 694.742919921875, "y": 178.9754638671875 }, { "x": 690.3396484375, "y": 174.15926513671877 }, { "x": 183.86417236328126, "y": 487.75566406250005 }, { "x": 179.7979736328125, "y": 481.579736328125 }, { "x": 174.74510498046877, "y": 477.426953125 }, { "x": 169.9929443359375, "y": 471.330029296875 }, { "x": 166.62467041015626, "y": 464.29570312500005 }, { "x": 160.59508056640627, "y": 459.113720703125 }, { "x": 154.56898193359376, "y": 454.52119140625 }, { "x": 148.56917724609374, "y": 452.72958984375003 }, { "x": 140.83568115234374, "y": 451.206298828125 }, { "x": 133.49417724609376, "y": 448.38510742187503 }, { "x": 126.90223388671876, "y": 451.953125 }, { "x": 120.25827026367188, "y": 450.34775390625003 }, { "x": 113.6022216796875, "y": 454.57402343750005 }, { "x": 111.19940795898438, "y": 451.453564453125 }, { "x": 112.96340332031251, "y": 445.01035156250003 }, { "x": 109.69951171875, "y": 447.50673828125 }, { "x": 103.38686523437501, "y": 452.1681640625 }, { "x": 103.43507080078126, "y": 458.08203125 }, { "x": 96.81857299804688, "y": 462.56108398437505 }, { "x": 89.69235229492188, "y": 466.19365234375005 }, { "x": 82.93763427734376, "y": 469.5140625 }, { "x": 76.50718994140625, "y": 471.94003906250003 }, { "x": 73.30172729492188, "y": 474.03291015625 }, { "x": 70.0580078125, "y": 475.85791015625 }, { "x": 65.24674377441406, "y": 473.489013671875 }, { "x": 57.64193115234375, "y": 474.97514648437505 }, { "x": 51.11063842773437, "y": 473.28764648437505 }, { "x": 57.992330932617186, "y": 471.051220703125 }, { "x": 65.26772766113282, "y": 468.13334960937505 }, { "x": 72.74400024414064, "y": 467.184228515625 }, { "x": 80.11237182617188, "y": 464.506103515625 }, { "x": 85.93536987304688, "y": 459.32524414062505 }, { "x": 88.07819213867188, "y": 453.462060546875 }, { "x": 83.49683227539063, "y": 454.63671875 }, { "x": 78.77131347656251, "y": 449.32216796875 }, { "x": 71.91886596679689, "y": 449.09462890625 }, { "x": 74.70532836914063, "y": 441.962353515625 }, { "x": 69.07955322265624, "y": 439.481396484375 }, { "x": 65.4953582763672, "y": 432.68413085937505 }, { "x": 65.56680908203126, "y": 426.04741210937505 }, { "x": 69.04757690429688, "y": 419.49301757812503 }, { "x": 74.77149658203126, "y": 414.02360839843755 }, { "x": 81.30946655273438, "y": 415.18837890625 }, { "x": 87.66781005859376, "y": 412.8315673828125 }, { "x": 86.73572998046875, "y": 407.769482421875 }, { "x": 79.053564453125, "y": 406.49980468750005 }, { "x": 72.99469604492188, "y": 402.357568359375 }, { "x": 71.36549682617188, "y": 395.099853515625 }, { "x": 76.2758544921875, "y": 391.89860839843755 }, { "x": 84.12161254882812, "y": 391.04716796875005 }, { "x": 86.71416625976563, "y": 395.79189453125 }, { "x": 89.79873046875001, "y": 394.1450439453125 }, { "x": 86.7600830078125, "y": 386.94912109375 }, { "x": 83.63812255859375, "y": 379.68193359375005 }, { "x": 85.82424926757812, "y": 374.731103515625 }, { "x": 93.19000854492188, "y": 373.68356933593753 }, { "x": 98.7079833984375, "y": 368.229931640625 }, { "x": 106.37258300781251, "y": 366.6245361328125 }, { "x": 113.30809326171875, "y": 364.1866455078125 }, { "x": 119.87116699218751, "y": 368.5570068359375 }, { "x": 125.08245849609375, "y": 372.683837890625 }, { "x": 132.7046630859375, "y": 374.8467529296875 }, { "x": 140.1182861328125, "y": 377.57602539062503 }, { "x": 147.76043701171875, "y": 378.5146728515625 }, { "x": 151.66297607421876, "y": 384.2390380859375 }, { "x": 151.58824462890627, "y": 392.24387207031253 }, { "x": 151.51351318359374, "y": 400.2486572265625 }, { "x": 151.43878173828125, "y": 408.2534423828125 }, { "x": 151.36405029296876, "y": 416.258203125 }, { "x": 151.28931884765626, "y": 424.26298828125005 }, { "x": 151.21458740234377, "y": 432.2677734375 }, { "x": 151.13985595703124, "y": 440.27255859375003 }, { "x": 151.06512451171875, "y": 448.277294921875 }, { "x": 158.0961669921875, "y": 449.081201171875 }, { "x": 162.87799072265625, "y": 455.378076171875 }, { "x": 167.4576416015625, "y": 453.261474609375 }, { "x": 173.82998046875002, "y": 454.0529296875 }, { "x": 179.155029296875, "y": 459.731201171875 }, { "x": 183.64724121093752, "y": 466.334619140625 }, { "x": 188.28835449218752, "y": 472.75668945312503 }, { "x": 195.62468261718752, "y": 475.77314453125 }, { "x": 196.287060546875, "y": 483.69687500000003 }, { "x": 191.41431884765626, "y": 484.775634765625 }, { "x": 189.11956787109375, "y": 487.31083984375005 }, { "x": 131.10268554687502, "y": 444.61118164062503 }, { "x": 128.14384765625, "y": 446.251708984375 }, { "x": 282.9110107421875, "y": 482.845361328125 }, { "x": 281.2508056640625, "y": 475.27084960937503 }, { "x": 279.1673583984375, "y": 468.059033203125 }, { "x": 281.15205078125, "y": 461.42246093750003 }, { "x": 287.3208740234375, "y": 461.0791015625 }, { "x": 294.3626953125, "y": 464.876123046875 }, { "x": 299.025439453125, "y": 471.26743164062503 }, { "x": 297.3742919921875, "y": 476.89443359375 }, { "x": 290.2520263671875, "y": 479.69218750000005 }, { "x": 633.556396484375, "y": 480.205712890625 }, { "x": 638.789794921875, "y": 475.734375 }, { "x": 641.252734375, "y": 478.46435546875 }, { "x": 30.20858154296875, "y": 478.05424804687505 }, { "x": 35.21815490722656, "y": 474.424560546875 }, { "x": 40.82473449707031, "y": 473.33652343750003 }, { "x": 45.20074462890625, "y": 476.99765625000003 }, { "x": 37.50488891601563, "y": 477.72529296875 }, { "x": 644.2020996093751, "y": 476.01572265625003 }, { "x": 649.9783691406251, "y": 471.33798828125003 }, { "x": 652.034228515625, "y": 467.001123046875 }, { "x": 644.6503417968751, "y": 469.44912109375 }, { "x": 641.3121093750001, "y": 462.66806640625003 }, { "x": 635.667138671875, "y": 457.342236328125 }, { "x": 630.239501953125, "y": 454.354736328125 }, { "x": 626.31083984375, "y": 448.899560546875 }, { "x": 621.29150390625, "y": 444.63125 }, { "x": 617.0123046875, "y": 437.875927734375 }, { "x": 612.2947265625, "y": 431.744384765625 }, { "x": 616.12685546875, "y": 425.0877197265625 }, { "x": 612.755615234375, "y": 429.99150390625005 }, { "x": 609.7064941406251, "y": 422.77216796875 }, { "x": 610.561865234375, "y": 414.92197265625003 }, { "x": 608.9992187500001, "y": 407.3576171875 }, { "x": 602.727587890625, "y": 402.94548339843755 }, { "x": 596.9265625, "y": 397.63671875 }, { "x": 590.994482421875, "y": 392.47922363281253 }, { "x": 583.3520019531251, "y": 391.169384765625 }, { "x": 579.010888671875, "y": 395.644677734375 }, { "x": 571.90048828125, "y": 398.801171875 }, { "x": 566.4541015625, "y": 396.39445800781255 }, { "x": 559.543505859375, "y": 392.399169921875 }, { "x": 551.9557617187501, "y": 389.97441406250005 }, { "x": 543.994287109375, "y": 390.48906250000005 }, { "x": 536.2525390625, "y": 392.498291015625 }, { "x": 528.567578125, "y": 394.36118164062503 }, { "x": 528.3399414062501, "y": 389.16325683593755 }, { "x": 523.9717773437501, "y": 392.0794677734375 }, { "x": 516.222314453125, "y": 393.15012207031253 }, { "x": 508.3763671875, "y": 393.8499755859375 }, { "x": 502.47905273437505, "y": 398.6364990234375 }, { "x": 504.751171875, "y": 398.05095214843755 }, { "x": 507.87583007812503, "y": 402.88908691406255 }, { "x": 503.873193359375, "y": 408.1507568359375 }, { "x": 511.27294921875, "y": 410.94340820312505 }, { "x": 511.52226562500005, "y": 416.58432617187503 }, { "x": 504.42099609375003, "y": 413.6375732421875 }, { "x": 497.89018554687505, "y": 411.22697753906255 }, { "x": 495.80278320312505, "y": 417.05356445312503 }, { "x": 492.9171875, "y": 414.35556640625003 }, { "x": 486.265625, "y": 418.03496093750005 }, { "x": 478.89189453125005, "y": 415.111279296875 }, { "x": 476.3412109375, "y": 410.5999755859375 }, { "x": 470.76064453125, "y": 406.55607910156255 }, { "x": 470.921533203125, "y": 411.33146972656255 }, { "x": 463.18291015625005, "y": 410.58879394531255 }, { "x": 455.34892578125005, "y": 409.1375244140625 }, { "x": 447.586083984375, "y": 407.3369140625 }, { "x": 439.69326171875, "y": 408.466748046875 }, { "x": 432.14531250000005, "y": 411.1177978515625 }, { "x": 425.50168457031253, "y": 415.39912109375 }, { "x": 419.26225585937505, "y": 420.40512695312503 }, { "x": 412.9344482421875, "y": 425.2801513671875 }, { "x": 405.8250732421875, "y": 428.951806640625 }, { "x": 398.898876953125, "y": 432.951806640625 }, { "x": 393.15400390625, "y": 438.371337890625 }, { "x": 388.80380859375003, "y": 445.08793945312505 }, { "x": 386.2534423828125, "y": 452.580029296875 }, { "x": 386.89438476562503, "y": 460.5236328125 }, { "x": 388.8995361328125, "y": 468.251416015625 }, { "x": 385.3708740234375, "y": 474.69389648437505 }, { "x": 378.30986328125005, "y": 472.10087890625005 }, { "x": 370.52019042968755, "y": 470.65092773437505 }, { "x": 363.2413330078125, "y": 467.5033203125 }, { "x": 356.6719970703125, "y": 463.247216796875 }, { "x": 353.64299316406255, "y": 456.04985351562505 }, { "x": 351.4417236328125, "y": 449.38632812500003 }, { "x": 348.9619873046875, "y": 442.960888671875 }, { "x": 344.15769042968753, "y": 436.61069335937503 }, { "x": 339.275634765625, "y": 430.53544921875005 }, { "x": 336.41447753906255, "y": 423.0677734375 }, { "x": 333.3531494140625, "y": 415.741845703125 }, { "x": 328.087353515625, "y": 409.72563476562505 }, { "x": 321.8953857421875, "y": 405.1982666015625 }, { "x": 313.97165527343753, "y": 404.0940673828125 }, { "x": 306.48703613281253, "y": 404.59465332031255 }, { "x": 302.11374511718753, "y": 411.0290771484375 }, { "x": 297.109619140625, "y": 417.13271484375 }, { "x": 289.7853515625, "y": 414.026611328125 }, { "x": 283.350341796875, "y": 409.41728515625005 }, { "x": 277.6009765625, "y": 403.88056640625 }, { "x": 274.788232421875, "y": 396.5720458984375 }, { "x": 272.8808349609375, "y": 388.91569824218755 }, { "x": 268.1558349609375, "y": 382.77099609375 }, { "x": 262.15007324218755, "y": 377.5582275390625 }, { "x": 257.148779296875, "y": 371.3774658203125 }, { "x": 252.3972900390625, "y": 365.22580566406253 }, { "x": 244.69155273437502, "y": 363.3286865234375 }, { "x": 236.76435546875, "y": 362.214306640625 }, { "x": 228.85439453125002, "y": 360.98525390625 }, { "x": 226.2753662109375, "y": 366.918408203125 }, { "x": 219.53457031250002, "y": 367.805419921875 }, { "x": 211.6373291015625, "y": 366.51042480468755 }, { "x": 203.70596923828126, "y": 365.4324462890625 }, { "x": 195.75302734375, "y": 364.52036132812503 }, { "x": 187.83421630859377, "y": 363.3530517578125 }, { "x": 180.22075195312502, "y": 361.00253906250003 }, { "x": 173.25567626953125, "y": 357.0586181640625 }, { "x": 166.36517333984375, "y": 352.98417968750005 }, { "x": 159.49418945312502, "y": 348.87663574218755 }, { "x": 152.65850830078125, "y": 344.710595703125 }, { "x": 145.77615966796876, "y": 340.62248535156255 }, { "x": 138.82875976562502, "y": 336.6458251953125 }, { "x": 132.2481689453125, "y": 332.1868896484375 }, { "x": 128.42249755859376, "y": 328.4944091796875 }, { "x": 120.45784912109376, "y": 327.7005615234375 }, { "x": 112.52102050781251, "y": 326.658349609375 }, { "x": 104.60944824218751, "y": 325.4388671875 }, { "x": 98.51082153320313, "y": 322.12783203125 }, { "x": 98.19392700195313, "y": 314.13525390625 }, { "x": 94.5245361328125, "y": 307.0748779296875 }, { "x": 89.41361694335937, "y": 301.02768554687503 }, { "x": 85.73917846679687, "y": 296.6944580078125 }, { "x": 79.02717285156251, "y": 293.15400390625 }, { "x": 74.49081420898438, "y": 286.630322265625 }, { "x": 67.54574584960938, "y": 283.073388671875 }, { "x": 60.03501586914063, "y": 280.3833740234375 }, { "x": 59.45259094238281, "y": 273.1513427734375 }, { "x": 59.053662109375004, "y": 265.65874023437505 }, { "x": 55.46354370117188, "y": 258.51262207031255 }, { "x": 52.599847412109376, "y": 251.04289550781252 }, { "x": 49.09442749023438, "y": 243.87443847656252 }, { "x": 51.67848815917969, "y": 237.1643798828125 }, { "x": 49.020443725585935, "y": 231.08647460937502 }, { "x": 46.584222412109376, "y": 223.721875 }, { "x": 47.65981140136719, "y": 215.82622070312502 }, { "x": 43.50689849853516, "y": 209.300732421875 }, { "x": 42.36685485839844, "y": 201.52362060546875 }, { "x": 38.616250610351564, "y": 194.4541015625 }, { "x": 38.54707489013672, "y": 186.65260009765626 }, { "x": 40.341128540039065, "y": 178.892822265625 }, { "x": 38.3352783203125, "y": 171.203759765625 }, { "x": 37.013038635253906, "y": 163.97984619140627 }, { "x": 41.59255523681641, "y": 157.5322265625 }, { "x": 45.20862731933594, "y": 150.42244873046874 }, { "x": 46.44020690917969, "y": 142.54433593750002 }, { "x": 45.860137939453125, "y": 135.079296875 }, { "x": 47.1402587890625, "y": 127.18240966796876 }, { "x": 49.90232849121094, "y": 119.80071411132813 }, { "x": 54.11539306640625, "y": 112.99520263671876 }, { "x": 57.85993347167969, "y": 105.92192993164063 }, { "x": 61.10162353515625, "y": 98.60403442382812 }, { "x": 63.909609985351565, "y": 91.10824584960938 }, { "x": 67.00042419433595, "y": 83.72694091796876 }, { "x": 69.67494506835938, "y": 76.182421875 }, { "x": 73.01757202148437, "y": 69.69614868164064 }, { "x": 73.73367309570312, "y": 63.7079345703125 }, { "x": 73.26741943359374, "y": 57.018743896484374 }, { "x": 73.73839111328125, "y": 50.89441528320313 }, { "x": 73.52204589843751, "y": 42.89323120117187 }, { "x": 72.95906982421874, "y": 35.05032653808594 }, { "x": 77.17659912109374, "y": 31.23073883056641 }, { "x": 83.40377197265624, "y": 36.22416687011719 }, { "x": 90.7992431640625, "y": 39.15150756835938 }, { "x": 96.71926269531251, "y": 37.36320343017579 }, { "x": 99.62802124023438, "y": 31.63524398803711 }, { "x": 101.26194458007814, "y": 26.920184326171874 }, { "x": 109.01758422851563, "y": 28.89343185424805 }, { "x": 116.7381591796875, "y": 31.008892822265626 }, { "x": 124.46583251953126, "y": 33.09853515625 }, { "x": 132.20341796875, "y": 35.15042724609375 }, { "x": 139.95510253906252, "y": 37.14808197021485 }, { "x": 147.7249755859375, "y": 39.07476043701172 }, { "x": 155.5150146484375, "y": 40.917893981933595 }, { "x": 163.32462158203126, "y": 42.67645874023438 }, { "x": 171.15001220703127, "y": 44.36253204345704 }, { "x": 178.98695068359376, "y": 45.996337890625 }, { "x": 186.82595214843752, "y": 47.61848449707031 }, { "x": 194.66419677734376, "y": 49.2439697265625 }, { "x": 202.50341796875, "y": 50.86476440429688 }, { "x": 210.3666748046875, "y": 52.36592407226563 }, { "x": 218.24868164062502, "y": 53.763327026367186 }, { "x": 226.1438720703125, "y": 55.084912109375004 }, { "x": 234.0490234375, "y": 56.3458251953125 }, { "x": 241.96269531250002, "y": 57.55364685058594 }, { "x": 249.8833984375, "y": 58.712927246093756 }, { "x": 257.8107421875, "y": 59.82490844726563 }, { "x": 265.7451904296875, "y": 60.88819274902344 }, { "x": 273.6861083984375, "y": 61.89952087402344 }, { "x": 281.6343017578125, "y": 62.85153503417969 }, { "x": 289.590771484375, "y": 63.73129577636719 }, { "x": 297.55759277343753, "y": 64.51503295898438 }, { "x": 305.52724609375, "y": 65.2675537109375 }, { "x": 313.47490234375, "y": 66.21535949707032 }, { "x": 321.443505859375, "y": 66.97343139648439 }, { "x": 329.429638671875, "y": 67.52364501953124 }, { "x": 337.42216796875005, "y": 67.97245788574219 }, { "x": 345.418115234375, "y": 68.35432434082031 }, { "x": 353.41640625, "y": 68.68317871093751 }, { "x": 361.41669921875, "y": 68.96685791015625 }, { "x": 369.41801757812505, "y": 69.20953369140625 }, { "x": 377.42050781250003, "y": 69.41089782714843 }, { "x": 385.4241943359375, "y": 69.57265014648438 }, { "x": 393.42827148437505, "y": 69.70375061035156 }, { "x": 401.43229980468755, "y": 69.83252868652343 }, { "x": 409.4363525390625, "y": 69.96146850585939 }, { "x": 415.6739013671875, "y": 67.89990234375 }, { "x": 419.3616455078125, "y": 63.78245849609375 }, { "x": 422.00095214843753, "y": 70.96918334960938 }, { "x": 427.6121337890625, "y": 75.034326171875 }, { "x": 434.205322265625, "y": 77.78148193359375 }, { "x": 441.527783203125, "y": 76.02670288085938 }, { "x": 448.7052734375, "y": 79.46011352539062 }, { "x": 454.66196289062503, "y": 81.94153442382813 }, { "x": 461.286083984375, "y": 84.38346557617187 }, { "x": 468.18808593750003, "y": 81.84037475585939 }, { "x": 475.2041015625, "y": 82.802587890625 }, { "x": 482.68706054687505, "y": 84.13153076171875 }, { "x": 479.664453125, "y": 88.54443359375 }, { "x": 472.3515625, "y": 91.79966430664062 }, { "x": 465.774560546875, "y": 96.24237060546875 }, { "x": 460.818017578125, "y": 102.50125732421876 }, { "x": 454.71000976562505, "y": 107.549560546875 }, { "x": 461.4916015625, "y": 106.785009765625 }, { "x": 468.787744140625, "y": 103.52910766601563 }, { "x": 468.749658203125, "y": 109.22404174804689 }, { "x": 475.659375, "y": 108.93685302734376 }, { "x": 482.3771484375, "y": 104.9666015625 }, { "x": 489.578369140625, "y": 101.72079467773438 }, { "x": 495.047314453125, "y": 95.98770141601562 }, { "x": 501.84042968750003, "y": 92.00443115234376 }, { "x": 503.64853515625003, "y": 95.05907592773438 }, { "x": 498.67465820312503, "y": 101.02912597656251 }, { "x": 502.66943359375, "y": 101.68032226562501 }, { "x": 508.883544921875, "y": 105.88386840820313 }, { "x": 515.75869140625, "y": 107.692919921875 }, { "x": 522.59033203125, "y": 105.38065185546876 }, { "x": 530.25859375, "y": 103.36436157226564 }, { "x": 537.893115234375, "y": 101.01171264648438 }, { "x": 541.6474609375, "y": 106.03175659179688 }, { "x": 549.249658203125, "y": 103.90436401367188 }, { "x": 551.4967773437501, "y": 111.09951171875001 }, { "x": 557.76943359375, "y": 110.61248779296875 }, { "x": 555.450341796875, "y": 114.89263916015625 }, { "x": 547.464599609375, "y": 114.70768432617189 }, { "x": 539.666748046875, "y": 115.18983154296876 }, { "x": 532.193701171875, "y": 116.50418090820312 }, { "x": 524.85341796875, "y": 118.97318115234376 }, { "x": 518.390185546875, "y": 121.58995361328125 }, { "x": 514.05498046875, "y": 126.39776611328125 }, { "x": 510.67949218750005, "y": 133.6459716796875 }, { "x": 506.73896484375, "y": 140.59197998046875 }, { "x": 510.10302734375, "y": 137.63623046875 }, { "x": 514.7161621093751, "y": 131.09742431640626 }, { "x": 517.291015625, "y": 133.11136474609376 }, { "x": 514.16689453125, "y": 140.48024902343752 }, { "x": 512.84765625, "y": 148.28018798828126 }, { "x": 511.53076171875, "y": 155.87042236328125 }, { "x": 510.031689453125, "y": 163.53221435546877 }, { "x": 510.813916015625, "y": 171.41988525390624 }, { "x": 512.0564941406251, "y": 179.27542724609376 }, { "x": 514.501611328125, "y": 186.67886962890626 }, { "x": 519.26064453125, "y": 192.40528564453126 }, { "x": 526.06826171875, "y": 188.9780029296875 }, { "x": 529.45, "y": 181.8666748046875 }, { "x": 530.952294921875, "y": 174.02811279296876 }, { "x": 528.827783203125, "y": 166.41217041015625 }, { "x": 525.49140625, "y": 159.1496337890625 }, { "x": 525.5099609375, "y": 151.2448486328125 }, { "x": 527.073193359375, "y": 143.4534423828125 }, { "x": 528.8787597656251, "y": 136.4464599609375 }, { "x": 532.926416015625, "y": 130.1488525390625 }, { "x": 539.0353515625001, "y": 125.7056884765625 }, { "x": 540.6458984375, "y": 119.73721923828126 }, { "x": 547.32841796875, "y": 119.0732177734375 }, { "x": 554.732666015625, "y": 121.65982055664062 }, { "x": 561.523193359375, "y": 124.78334960937501 }, { "x": 562.69970703125, "y": 130.58865966796876 }, { "x": 564.784765625, "y": 137.94171142578125 }, { "x": 562.3265625, "y": 145.30821533203124 }, { "x": 559.0192382812501, "y": 151.78065185546876 }, { "x": 564.17705078125, "y": 149.2417236328125 }, { "x": 569.823291015625, "y": 143.9955810546875 }, { "x": 574.86728515625, "y": 149.52294921875 }, { "x": 577.225439453125, "y": 157.17197265625 }, { "x": 579.268310546875, "y": 164.879150390625 }, { "x": 576.719482421875, "y": 171.0322509765625 }, { "x": 572.76376953125, "y": 176.958447265625 }, { "x": 570.0552734375, "y": 184.06348876953126 }, { "x": 575.181494140625, "y": 187.75303955078127 }, { "x": 582.2771484375, "y": 189.56363525390626 }, { "x": 589.8534667968751, "y": 187.03447265625002 }, { "x": 595.99267578125, "y": 181.993603515625 }, { "x": 602.41142578125, "y": 177.21560058593752 }, { "x": 609.2435546875, "y": 173.1400390625 }, { "x": 615.263818359375, "y": 167.86700439453125 }, { "x": 620.9303710937501, "y": 162.24439697265626 }, { "x": 621.0829589843751, "y": 155.84921875 }, { "x": 621.68447265625, "y": 149.25987548828127 }, { "x": 629.3498046875001, "y": 147.01422119140625 }, { "x": 637.2898925781251, "y": 146.69899902343752 }, { "x": 644.889208984375, "y": 145.315234375 }, { "x": 650.764892578125, "y": 140.3863037109375 }, { "x": 653.0134765625, "y": 135.03375244140625 }, { "x": 650.2503417968751, "y": 129.49233398437502 }, { "x": 654.8015625, "y": 123.0673095703125 }, { "x": 659.38125, "y": 116.50804443359375 }, { "x": 664.802001953125, "y": 110.68496093750001 }, { "x": 672.488037109375, "y": 108.68162841796875 }, { "x": 680.267578125, "y": 106.82797241210938 }, { "x": 687.9802734375, "y": 104.68400268554689 }, { "x": 695.7196777343751, "y": 102.6396484375 }, { "x": 703.46611328125, "y": 100.62131958007814 }, { "x": 707.0179199218751, "y": 94.45912475585938 }, { "x": 712.440478515625, "y": 91.01312255859375 }, { "x": 715.1600097656251, "y": 83.55802001953126 }, { "x": 714.3957031250001, "y": 75.96649780273438 }, { "x": 715.7497070312501, "y": 68.17526245117188 }, { "x": 717.6500976562501, "y": 60.424102783203125 }, { "x": 720.669677734375, "y": 53.02679443359375 }, { "x": 726.4958007812501, "y": 54.965466308593754 }, { "x": 732.5949218750001, "y": 50.24977111816406 }, { "x": 739.9816406250001, "y": 53.193911743164065 }, { "x": 742.29873046875, "y": 60.85631103515625 }, { "x": 744.61162109375, "y": 68.52011413574219 }, { "x": 746.9065917968751, "y": 76.18941040039063 }, { "x": 752.5224121093751, "y": 79.52131958007813 }, { "x": 757.698388671875, "y": 82.6933349609375 }, { "x": 760.560205078125, "y": 89.86204833984375 }, { "x": 755.71533203125, "y": 95.83140258789062 }, { "x": 749.9329589843751, "y": 101.29746704101564 }, { "x": 745.1814453125, "y": 105.57714233398438 }, { "x": 740.813525390625, "y": 108.93362426757812 }, { "x": 736.4607421875, "y": 112.5609619140625 }, { "x": 730.4079101562501, "y": 117.09994506835938 }, { "x": 727.08154296875, "y": 122.72658691406251 }, { "x": 725.736083984375, "y": 130.60858154296875 }, { "x": 726.3802246093751, "y": 137.83726806640624 }, { "x": 726.3591796875, "y": 144.59670410156252 }, { "x": 731.99755859375, "y": 149.6522216796875 }, { "x": 737.581591796875, "y": 149.019677734375 }, { "x": 736.0857910156251, "y": 145.45106201171876 }, { "x": 740.892626953125, "y": 151.0441650390625 }, { "x": 735.510791015625, "y": 155.52298583984376 }, { "x": 735.51591796875, "y": 160.12089843750002 }, { "x": 728.8787597656251, "y": 159.76572265625 }, { "x": 722.33291015625, "y": 162.78558349609375 }, { "x": 715.1722167968751, "y": 166.26451416015627 }, { "x": 707.670947265625, "y": 169.01593017578125 }, { "x": 701.140625, "y": 173.28934326171876 }, { "x": 699.298486328125, "y": 175.16754150390625 }, { "x": 706.856201171875, "y": 173.54376220703125 }, { "x": 713.4696777343751, "y": 169.31380615234374 }, { "x": 714.11318359375, "y": 173.72130126953127 }, { "x": 707.8514160156251, "y": 178.704931640625 }, { "x": 700.784423828125, "y": 182.37353515625 }, { "x": 693.3011230468751, "y": 184.991162109375 }, { "x": 696.0244140625, "y": 189.51046142578127 }, { "x": 696.3236816406251, "y": 197.50806884765626 }, { "x": 694.12939453125, "y": 205.00002441406252 }, { "x": 690.8571289062501, "y": 212.24486083984377 }, { "x": 686.940087890625, "y": 213.38740234375 }, { "x": 681.611572265625, "y": 210.5200927734375 }, { "x": 685.702783203125, "y": 216.9134033203125 }, { "x": 689.102099609375, "y": 223.66890869140627 }, { "x": 687.9478515625001, "y": 231.4812744140625 }, { "x": 684.8783691406251, "y": 238.7862060546875 }, { "x": 683.8732421875001, "y": 246.6746826171875 }, { "x": 679.7064453125, "y": 246.0572021484375 }, { "x": 680.7294433593751, "y": 238.19853515625002 }, { "x": 678.51796875, "y": 231.4921875 }, { "x": 677.662890625, "y": 236.72509765625 }, { "x": 673.4926269531251, "y": 230.442724609375 }, { "x": 671.0157226562501, "y": 233.67751464843752 }, { "x": 675.0586914062501, "y": 238.9520263671875 }, { "x": 674.8365234375001, "y": 245.53164062500002 }, { "x": 677.938623046875, "y": 251.44411621093752 }, { "x": 682.2278808593751, "y": 253.1682861328125 }, { "x": 686.1458496093751, "y": 260.13432617187505 }, { "x": 690.0210937500001, "y": 267.1132568359375 }, { "x": 694.556201171875, "y": 273.5826171875 }, { "x": 694.3938964843751, "y": 281.20932617187503 }, { "x": 687.517333984375, "y": 285.09689941406253 }, { "x": 692.398193359375, "y": 279.712109375 }, { "x": 691.7367675781251, "y": 272.16472167968755 }, { "x": 688.0626953125001, "y": 277.39499511718753 }, { "x": 682.0878417968751, "y": 281.5687744140625 }, { "x": 683.201220703125, "y": 287.02329101562503 }, { "x": 685.8975585937501, "y": 289.098876953125 }, { "x": 680.5801757812501, "y": 293.76103515625 }, { "x": 673.39189453125, "y": 297.10056152343753 }, { "x": 667.8727539062501, "y": 302.8211669921875 }, { "x": 665.1342285156251, "y": 310.3179443359375 }, { "x": 657.6250976562501, "y": 312.502734375 }, { "x": 652.2474121093751, "y": 318.3159912109375 }, { "x": 650.170703125, "y": 326.00144042968753 }, { "x": 645.227783203125, "y": 331.8728759765625 }, { "x": 640.03564453125, "y": 337.9370849609375 }, { "x": 634.652490234375, "y": 342.917431640625 }, { "x": 630.04404296875, "y": 349.19658203125005 }, { "x": 626.84970703125, "y": 356.4600830078125 }, { "x": 625.23154296875, "y": 364.2921142578125 }, { "x": 624.4457519531251, "y": 372.1846435546875 }, { "x": 626.366015625, "y": 379.945947265625 }, { "x": 629.3285644531251, "y": 387.378369140625 }, { "x": 633.04443359375, "y": 394.46477050781255 }, { "x": 637.5071777343751, "y": 401.1044921875 }, { "x": 642.7732421875, "y": 407.12912597656253 }, { "x": 644.2197265625, "y": 414.3326416015625 }, { "x": 648.2797363281251, "y": 421.18083496093755 }, { "x": 652.181640625, "y": 428.17001953125003 }, { "x": 655.9811523437501, "y": 435.2080078125 }, { "x": 657.385791015625, "y": 443.05937500000005 }, { "x": 658.005419921875, "y": 451.04033203125005 }, { "x": 656.241943359375, "y": 458.50834960937505 }, { "x": 658.0253417968751, "y": 462.114501953125 }, { "x": 654.8971679687501, "y": 469.4609375 }, { "x": 648.994287109375, "y": 474.8427734375 }, { "x": 385.3674560546875, "y": 462.587646484375 }, { "x": 386.78818359375003, "y": 469.64111328125 }, { "x": 384.200830078125, "y": 458.057373046875 }, { "x": 386.54697265625003, "y": 441.87675781250005 }, { "x": 466.442041015625, "y": 407.58151855468753 }, { "x": 669.9298828125001, "y": 221.05947265625002 }, { "x": 669.427978515625, "y": 214.2747802734375 }, { "x": 668.8201171875, "y": 217.1714599609375 }, { "x": 668.93876953125, "y": 224.99125976562502 }, { "x": 730.922119140625, "y": 156.9502197265625 }, { "x": 536.935400390625, "y": 131.03753662109375 }, { "x": 536.9529296875, "y": 133.94482421875 }, { "x": 99.47030639648438, "y": 40.56386871337891 }, { "x": 90.42404174804688, "y": 473.61708984375 }, { "x": 97.71860961914064, "y": 469.80673828125003 }, { "x": 98.57631835937501, "y": 462.92568359375 }, { "x": 105.18115234375, "y": 458.41264648437505 }, { "x": 109.16038818359375, "y": 458.739990234375 }, { "x": 108.09234008789063, "y": 465.194580078125 }, { "x": 102.31083374023439, "y": 469.62919921875005 }, { "x": 270.50341796875, "y": 452.41850585937505 }, { "x": 269.75166015625, "y": 445.77866210937503 }, { "x": 276.8872314453125, "y": 448.32138671875003 }, { "x": 280.811181640625, "y": 453.39726562500005 }, { "x": 273.1883544921875, "y": 455.084716796875 }, { "x": 266.115087890625, "y": 448.37333984375005 }, { "x": 263.9537109375, "y": 453.051904296875 }, { "x": 260.52519531250005, "y": 443.41679687500005 }, { "x": 268.49140625, "y": 444.09257812500005 }, { "x": 263.7128662109375, "y": 447.227734375 }, { "x": 244.7399658203125, "y": 442.45478515625 }, { "x": 243.8703369140625, "y": 435.830224609375 }, { "x": 249.76630859375, "y": 436.62773437500005 }, { "x": 253.3765625, "y": 442.78291015625 }, { "x": 57.04063720703125, "y": 431.93002929687503 }, { "x": 63.383218383789064, "y": 431.47026367187505 }, { "x": 60.8826904296875, "y": 436.31303710937505 }, { "x": 214.4146240234375, "y": 430.297607421875 }, { "x": 209.60039062500002, "y": 433.06650390625003 }, { "x": 218.8953369140625, "y": 426.93320312500003 }, { "x": 226.3365234375, "y": 426.357421875 }, { "x": 223.64478759765626, "y": 432.79716796875005 }, { "x": 40.13863525390625, "y": 418.86787109375 }, { "x": 42.011041259765626, "y": 424.067822265625 }, { "x": 53.38778381347657, "y": 403.83261718750003 }, { "x": 57.235009765625, "y": 402.12382812500005 }, { "x": 61.84989929199219, "y": 408.21635742187505 }, { "x": 80.48408203125001, "y": 314.260791015625 }, { "x": 83.52383422851562, "y": 314.1876708984375 }, { "x": 81.64896850585939, "y": 304.26474609375003 }, { "x": 86.52258911132813, "y": 306.70419921875003 }, { "x": 61.0306884765625, "y": 289.0470458984375 }, { "x": 67.6993408203125, "y": 288.35634765625 }, { "x": 70.83792724609376, "y": 291.765771484375 }, { "x": 63.38783874511719, "y": 291.702783203125 }, { "x": 742.6208984375, "y": 159.0694091796875 }, { "x": 485.88461914062503, "y": 86.90963134765626 }, { "x": 491.974072265625, "y": 82.05401000976562 }, { "x": 494.7328125, "y": 83.55985717773439 }, { "x": 488.234619140625, "y": 88.07301025390625 }, { "x": 92.2264892578125, "y": 31.026450347900393 }, { "x": 98.42210083007814, "y": 32.930233764648435 }];
const uaeData = [{ "x": 695.439990234375, "y": 279.6800048828125 }, { "x": 698.1244140625, "y": 287.149365234375 }, { "x": 693.75478515625, "y": 293.2703369140625 }, { "x": 690.59912109375, "y": 300.3108154296875 }, { "x": 690.2436035156251, "y": 307.87985839843753 }, { "x": 691.3793457031251, "y": 315.71066894531253 }, { "x": 691.5235351562501, "y": 323.672265625 }, { "x": 696.9235351562501, "y": 329.27587890625 }, { "x": 696.624267578125, "y": 337.241845703125 }, { "x": 693.409716796875, "y": 344.49052734375005 }, { "x": 689.569482421875, "y": 351.50998535156253 }, { "x": 691.39892578125, "y": 357.5432861328125 }, { "x": 699.2193359375001, "y": 359.25192871093753 }, { "x": 706.8584960937501, "y": 357.8562744140625 }, { "x": 714.2587890625, "y": 357.515283203125 }, { "x": 718.039208984375, "y": 364.15678710937505 }, { "x": 720.19921875, "y": 371.83681640625 }, { "x": 724.063232421875, "y": 378.847314453125 }, { "x": 721.4920410156251, "y": 384.3115966796875 }, { "x": 713.749560546875, "y": 386.3279052734375 }, { "x": 706.3406738281251, "y": 389.35881347656255 }, { "x": 698.931787109375, "y": 392.3897216796875 }, { "x": 691.69091796875, "y": 391.42612304687503 }, { "x": 684.4253906250001, "y": 391.36467285156255 }, { "x": 676.500634765625, "y": 390.54638671875 }, { "x": 668.560205078125, "y": 391.1762939453125 }, { "x": 661.255517578125, "y": 394.387451171875 }, { "x": 654.111474609375, "y": 397.946923828125 }, { "x": 646.444482421875, "y": 400.15817871093753 }, { "x": 644.0883300781251, "y": 405.54416503906253 }, { "x": 650.276611328125, "y": 410.44797363281253 }, { "x": 654.964892578125, "y": 416.51630859375 }, { "x": 655.609521484375, "y": 424.48637695312505 }, { "x": 655.917138671875, "y": 432.4853515625 }, { "x": 652.1570800781251, "y": 439.448974609375 }, { "x": 647.8117187500001, "y": 446.161865234375 }, { "x": 645.4926269531251, "y": 453.78618164062505 }, { "x": 643.60146484375, "y": 461.564453125 }, { "x": 641.4232910156251, "y": 469.21586914062505 }, { "x": 636.3991210937501, "y": 475.425 }, { "x": 631.5458984375, "y": 481.76860351562505 }, { "x": 629.27080078125, "y": 489.41069335937505 }, { "x": 627.774755859375, "y": 497.27451171875003 }, { "x": 626.1393554687501, "y": 505.10205078125 }, { "x": 623.607958984375, "y": 512.6961425781251 }, { "x": 619.921728515625, "y": 519.7748046875 }, { "x": 615.9596679687501, "y": 526.73037109375 }, { "x": 611.997607421875, "y": 533.6859863281251 }, { "x": 608.329443359375, "y": 540.7665527343751 }, { "x": 606.06865234375, "y": 548.445556640625 }, { "x": 603.9701660156251, "y": 556.157470703125 }, { "x": 603.68271484375, "y": 564.133349609375 }, { "x": 604.0037109375, "y": 572.1317871093751 }, { "x": 604.32470703125, "y": 580.130224609375 }, { "x": 604.204248046875, "y": 588.1227539062501 }, { "x": 603.67001953125, "y": 596.109765625 }, { "x": 603.1357421875, "y": 604.096826171875 }, { "x": 600.3375976562501, "y": 611.229248046875 }, { "x": 595.4606445312501, "y": 617.577001953125 }, { "x": 589.209375, "y": 621.262744140625 }, { "x": 581.27255859375, "y": 620.22080078125 }, { "x": 573.335791015625, "y": 619.1789062500001 }, { "x": 565.40029296875, "y": 618.1269042968751 }, { "x": 557.46591796875, "y": 617.0669921875 }, { "x": 549.531494140625, "y": 616.0070312500001 }, { "x": 541.5966308593751, "y": 614.950732421875 }, { "x": 533.66171875, "y": 613.894775390625 }, { "x": 525.72685546875, "y": 612.83876953125 }, { "x": 517.79189453125, "y": 611.7828125 }, { "x": 509.85698242187505, "y": 610.72685546875 }, { "x": 501.92236328125, "y": 609.6684082031251 }, { "x": 493.98798828125, "y": 608.60849609375 }, { "x": 486.05356445312503, "y": 607.5485351562501 }, { "x": 478.11865234375, "y": 606.49248046875 }, { "x": 470.183740234375, "y": 605.4364746093751 }, { "x": 462.2490234375, "y": 604.379248046875 }, { "x": 454.314599609375, "y": 603.3192871093751 }, { "x": 446.38022460937503, "y": 602.259375 }, { "x": 438.445458984375, "y": 601.2020996093751 }, { "x": 430.51054687500005, "y": 600.146142578125 }, { "x": 422.57561035156255, "y": 599.0900390625001 }, { "x": 414.64121093750003, "y": 598.030078125 }, { "x": 406.7068115234375, "y": 596.9701660156251 }, { "x": 398.77226562500005, "y": 595.911767578125 }, { "x": 390.83732910156255, "y": 594.85576171875 }, { "x": 382.9024169921875, "y": 593.7998046875 }, { "x": 374.96787109375003, "y": 592.7409179687501 }, { "x": 367.0334716796875, "y": 591.68095703125 }, { "x": 359.0990234375, "y": 590.62138671875 }, { "x": 351.1640869140625, "y": 589.5654296875 }, { "x": 343.22917480468755, "y": 588.509423828125 }, { "x": 335.29428710937503, "y": 587.453466796875 }, { "x": 327.359375, "y": 586.397509765625 }, { "x": 319.4244384765625, "y": 585.3415039062501 }, { "x": 311.4899169921875, "y": 584.2824218750001 }, { "x": 303.55551757812503, "y": 583.2224609375 }, { "x": 295.621044921875, "y": 582.163134765625 }, { "x": 287.6861083984375, "y": 581.1071289062501 }, { "x": 279.75119628906253, "y": 580.051171875 }, { "x": 271.816552734375, "y": 578.993212890625 }, { "x": 263.8821533203125, "y": 577.9333007812501 }, { "x": 255.94775390625, "y": 576.87333984375 }, { "x": 248.01286621093752, "y": 575.816796875 }, { "x": 240.077978515625, "y": 574.760791015625 }, { "x": 232.14357910156252, "y": 573.70126953125 }, { "x": 224.21097412109376, "y": 572.6279296875 }, { "x": 216.2783935546875, "y": 571.554541015625 }, { "x": 208.39122314453127, "y": 570.27978515625 }, { "x": 202.04509277343752, "y": 565.7578125 }, { "x": 197.10378417968752, "y": 559.46005859375 }, { "x": 192.18804931640625, "y": 553.1423828125 }, { "x": 187.29774169921876, "y": 546.80498046875 }, { "x": 182.40107421875, "y": 540.4724609375 }, { "x": 177.50567626953125, "y": 534.138916015625 }, { "x": 172.615380859375, "y": 527.80146484375 }, { "x": 167.70399169921876, "y": 521.48037109375 }, { "x": 162.78634033203124, "y": 515.164111328125 }, { "x": 157.92008056640626, "y": 508.80820312500003 }, { "x": 153.053857421875, "y": 502.452294921875 }, { "x": 148.18760986328127, "y": 496.09638671875 }, { "x": 143.27467041015626, "y": 489.776513671875 }, { "x": 138.36632080078124, "y": 483.453076171875 }, { "x": 133.50006103515625, "y": 477.09716796875 }, { "x": 128.59927978515626, "y": 470.76787109375005 }, { "x": 123.67877197265625, "y": 464.45380859375 }, { "x": 118.81251220703126, "y": 458.097900390625 }, { "x": 113.93363037109376, "y": 451.751708984375 }, { "x": 109.03624267578125, "y": 445.41972656250005 }, { "x": 104.16337280273439, "y": 439.06884765625 }, { "x": 99.29158935546876, "y": 432.7171875 }, { "x": 94.39420776367187, "y": 426.385205078125 }, { "x": 89.5142333984375, "y": 420.03977050781253 }, { "x": 84.64797363281251, "y": 413.6838623046875 }, { "x": 79.7521728515625, "y": 407.35068359375003 }, { "x": 74.86514892578126, "y": 401.01079101562505 }, { "x": 69.99889526367187, "y": 394.65488281250003 }, { "x": 65.11595764160157, "y": 388.3117919921875 }, { "x": 60.22654724121094, "y": 381.97368164062505 }, { "x": 57.192083740234374, "y": 374.6929931640625 }, { "x": 57.16392822265625, "y": 366.71250000000003 }, { "x": 57.28006286621094, "y": 358.70939941406255 }, { "x": 57.227578735351564, "y": 351.01950683593753 }, { "x": 59.68215637207032, "y": 343.743896484375 }, { "x": 57.91461181640625, "y": 336.143505859375 }, { "x": 60.653393554687504, "y": 332.134228515625 }, { "x": 64.67548522949218, "y": 338.99162597656255 }, { "x": 65.20006103515625, "y": 346.94580078125 }, { "x": 65.8084503173828, "y": 354.901025390625 }, { "x": 70.50281677246093, "y": 355.967431640625 }, { "x": 72.18762817382813, "y": 348.96640625000003 }, { "x": 74.91207885742188, "y": 356.4578857421875 }, { "x": 79.55951538085938, "y": 355.0691650390625 }, { "x": 83.00704956054688, "y": 347.9866455078125 }, { "x": 88.0140380859375, "y": 351.10014648437505 }, { "x": 87.9275634765625, "y": 359.006103515625 }, { "x": 87.05354614257813, "y": 366.9357421875 }, { "x": 88.44421997070313, "y": 374.79758300781253 }, { "x": 89.09927978515626, "y": 382.72744140625 }, { "x": 90.8911865234375, "y": 390.39841308593753 }, { "x": 96.04616088867188, "y": 395.38835449218755 }, { "x": 104.02169189453126, "y": 395.73422851562503 }, { "x": 110.45722045898438, "y": 400.28178710937505 }, { "x": 113.35794067382812, "y": 396.2208984375 }, { "x": 121.33787841796875, "y": 396.53496093750005 }, { "x": 128.37701416015625, "y": 399.110546875 }, { "x": 135.98636474609376, "y": 400.00961914062503 }, { "x": 143.54796142578124, "y": 399.2720458984375 }, { "x": 151.02841796875, "y": 398.95000000000005 }, { "x": 158.72098388671876, "y": 397.44951171875005 }, { "x": 165.824365234375, "y": 394.05253906250005 }, { "x": 173.5410400390625, "y": 392.86210937500005 }, { "x": 179.72696533203126, "y": 387.93115234375 }, { "x": 187.16624755859377, "y": 385.18430175781253 }, { "x": 192.43184814453127, "y": 379.7046142578125 }, { "x": 198.87087402343752, "y": 375.129296875 }, { "x": 205.60885009765627, "y": 370.9328125 }, { "x": 208.720068359375, "y": 364.535791015625 }, { "x": 213.6182861328125, "y": 360.4475341796875 }, { "x": 219.20096435546876, "y": 365.936669921875 }, { "x": 224.64272460937502, "y": 371.07846679687503 }, { "x": 231.8831787109375, "y": 370.0281982421875 }, { "x": 239.6714599609375, "y": 371.7590576171875 }, { "x": 247.2398681640625, "y": 369.44011230468755 }, { "x": 255.020751953125, "y": 370.9375732421875 }, { "x": 262.99553222656255, "y": 371.631005859375 }, { "x": 270.6325927734375, "y": 369.69138183593753 }, { "x": 275.9648193359375, "y": 369.87900390625003 }, { "x": 282.5256591796875, "y": 374.34782714843755 }, { "x": 289.87587890625, "y": 372.23544921875003 }, { "x": 297.1544189453125, "y": 373.893798828125 }, { "x": 294.0094482421875, "y": 367.24077148437505 }, { "x": 301.46201171875003, "y": 368.2581787109375 }, { "x": 307.3124267578125, "y": 373.6923828125 }, { "x": 312.98388671875, "y": 378.38571777343753 }, { "x": 320.9380126953125, "y": 378.4395751953125 }, { "x": 328.77597656250003, "y": 376.81345214843753 }, { "x": 336.61396484375, "y": 375.18730468750005 }, { "x": 343.24594726562503, "y": 378.0322509765625 }, { "x": 350.6753662109375, "y": 378.7025146484375 }, { "x": 357.34055175781253, "y": 382.65205078125 }, { "x": 363.35556640625003, "y": 386.7857666015625 }, { "x": 370.81572265625005, "y": 386.3240478515625 }, { "x": 377.98203125000003, "y": 383.3111083984375 }, { "x": 385.6983154296875, "y": 384.25139160156255 }, { "x": 393.703125, "y": 384.28635253906253 }, { "x": 401.705712890625, "y": 384.2869384765625 }, { "x": 408.903564453125, "y": 381.38115234375005 }, { "x": 415.93796386718753, "y": 377.56076660156253 }, { "x": 423.80498046875005, "y": 376.1552734375 }, { "x": 431.372265625, "y": 373.789697265625 }, { "x": 438.892333984375, "y": 371.33916015625005 }, { "x": 445.95366210937505, "y": 367.933056640625 }, { "x": 450.7978515625, "y": 361.75778808593753 }, { "x": 458.2189453125, "y": 359.0281982421875 }, { "x": 465.23076171875005, "y": 355.4318359375 }, { "x": 471.62900390625003, "y": 350.99191894531253 }, { "x": 478.69130859375, "y": 351.37109375 }, { "x": 484.769921875, "y": 348.79375000000005 }, { "x": 490.314599609375, "y": 343.136669921875 }, { "x": 494.029296875, "y": 336.06022949218755 }, { "x": 496.57871093750003, "y": 328.75310058593755 }, { "x": 498.44990234375, "y": 322.600048828125 }, { "x": 501.63955078125, "y": 321.87734375 }, { "x": 502.9076171875, "y": 319.4266845703125 }, { "x": 504.82392578125, "y": 317.528125 }, { "x": 510.165966796875, "y": 319.1481201171875 }, { "x": 505.15512695312503, "y": 314.7247802734375 }, { "x": 497.54365234375, "y": 312.79443359375 }, { "x": 490.92978515625003, "y": 308.2849853515625 }, { "x": 488.76435546875, "y": 305.18674316406253 }, { "x": 493.55278320312505, "y": 305.6688232421875 }, { "x": 496.89584960937503, "y": 300.22041015625 }, { "x": 499.92778320312505, "y": 307.51682128906253 }, { "x": 506.07133789062505, "y": 311.819970703125 }, { "x": 506.97724609375, "y": 309.2309814453125 }, { "x": 513.25810546875, "y": 307.4773681640625 }, { "x": 517.1556152343751, "y": 300.6043212890625 }, { "x": 517.5577148437501, "y": 294.56171875 }, { "x": 520.5071777343751, "y": 290.225732421875 }, { "x": 524.7173828125001, "y": 284.2344482421875 }, { "x": 522.098681640625, "y": 277.25644531250003 }, { "x": 520.687939453125, "y": 270.617529296875 }, { "x": 526.855517578125, "y": 265.66398925781255 }, { "x": 532.432763671875, "y": 262.22648925781255 }, { "x": 539.65048828125, "y": 261.699072265625 }, { "x": 540.384765625, "y": 255.6286376953125 }, { "x": 547.27841796875, "y": 251.55971679687502 }, { "x": 554.172021484375, "y": 247.4907958984375 }, { "x": 560.6813476562501, "y": 242.83696289062502 }, { "x": 566.718896484375, "y": 237.59423828125 }, { "x": 573.859619140625, "y": 234.1528076171875 }, { "x": 578.156005859375, "y": 239.19140625 }, { "x": 580.778369140625, "y": 246.75456542968752 }, { "x": 583.400732421875, "y": 254.317724609375 }, { "x": 586.023046875, "y": 261.8808837890625 }, { "x": 588.64541015625, "y": 269.44404296875 }, { "x": 591.2677734375001, "y": 277.0072265625 }, { "x": 593.8900878906251, "y": 284.5703857421875 }, { "x": 596.8446777343751, "y": 291.997607421875 }, { "x": 603.373876953125, "y": 295.80710449218753 }, { "x": 611.3612792968751, "y": 295.74094238281253 }, { "x": 619.359765625, "y": 295.42099609375003 }, { "x": 627.358251953125, "y": 295.10104980468753 }, { "x": 635.35673828125, "y": 294.7811279296875 }, { "x": 643.1216796875001, "y": 293.022705078125 }, { "x": 650.240625, "y": 289.42275390625 }, { "x": 657.2510742187501, "y": 285.5835205078125 }, { "x": 664.6609375, "y": 282.5554443359375 }, { "x": 672.070947265625, "y": 279.527294921875 }, { "x": 679.240771484375, "y": 277.8779541015625 }, { "x": 686.9909179687501, "y": 279.8813720703125 }, { "x": 694.9474609375001, "y": 279.783740234375 }, { "x": 368.5340087890625, "y": 364.9455078125 }, { "x": 375.4307373046875, "y": 361.1246337890625 }, { "x": 381.8889404296875, "y": 356.481640625 }, { "x": 389.5362060546875, "y": 356.7075927734375 }, { "x": 396.22116699218753, "y": 352.457177734375 }, { "x": 401.43283691406253, "y": 351.13425292968753 }, { "x": 404.9342041015625, "y": 357.08671875000005 }, { "x": 412.412548828125, "y": 359.58652343750003 }, { "x": 417.745361328125, "y": 364.544189453125 }, { "x": 414.18010253906255, "y": 370.5227294921875 }, { "x": 406.33115234375003, "y": 371.285107421875 }, { "x": 401.30197753906253, "y": 366.6636962890625 }, { "x": 398.50053710937505, "y": 369.47844238281255 }, { "x": 391.32260742187503, "y": 372.69108886718755 }, { "x": 383.464599609375, "y": 372.06296386718753 }, { "x": 376.18503417968753, "y": 368.76713867187505 }, { "x": 450.613427734375, "y": 353.956494140625 }, { "x": 443.16474609375, "y": 351.12473144531253 }, { "x": 439.058984375, "y": 344.984033203125 }, { "x": 444.819775390625, "y": 341.00180664062503 }, { "x": 450.31528320312503, "y": 346.81491699218753 }, { "x": 453.28989257812503, "y": 353.8157470703125 }, { "x": 211.32203369140626, "y": 334.20859375000003 }, { "x": 218.0550537109375, "y": 335.1988525390625 }, { "x": 219.50162353515626, "y": 342.866943359375 }, { "x": 214.5999755859375, "y": 349.06169433593755 }, { "x": 208.91083984375, "y": 350.59208984375005 }, { "x": 205.472265625, "y": 343.4290771484375 }, { "x": 320.45595703125, "y": 350.1128662109375 }, { "x": 313.8872314453125, "y": 347.26970214843755 }, { "x": 307.1047607421875, "y": 348.422119140625 }, { "x": 300.358642578125, "y": 347.61552734375005 }, { "x": 306.1807861328125, "y": 345.3970458984375 }, { "x": 313.5288330078125, "y": 343.0159912109375 }, { "x": 320.739697265625, "y": 339.6458251953125 }, { "x": 326.80466308593753, "y": 342.284814453125 }, { "x": 327.8099365234375, "y": 335.459619140625 }, { "x": 332.29387207031255, "y": 328.8284423828125 }, { "x": 336.6531494140625, "y": 329.85446777343753 }, { "x": 339.37802734375003, "y": 335.826123046875 }, { "x": 334.4963623046875, "y": 341.3843505859375 }, { "x": 327.3567626953125, "y": 344.84843750000005 }, { "x": 322.1709228515625, "y": 349.39377441406253 }, { "x": 475.57133789062505, "y": 319.9591064453125 }, { "x": 477.000146484375, "y": 314.2266357421875 }, { "x": 482.23798828125, "y": 308.2399169921875 }, { "x": 483.39604492187505, "y": 314.35507812500003 }, { "x": 490.07187500000003, "y": 318.65185546875 }, { "x": 494.37578125000005, "y": 324.3213134765625 }, { "x": 486.62387695312503, "y": 323.51462402343753 }, { "x": 461.79296875, "y": 347.2971923828125 }, { "x": 455.1564453125, "y": 345.1882568359375 }, { "x": 451.20615234375003, "y": 339.54826660156255 }, { "x": 457.383984375, "y": 335.3599853515625 }, { "x": 462.037548828125, "y": 341.163720703125 }, { "x": 474.08969726562503, "y": 334.161328125 }, { "x": 472.351513671875, "y": 341.6182861328125 }, { "x": 467.408837890625, "y": 337.73994140625 }, { "x": 469.4994140625, "y": 335.15959472656255 }, { "x": 468.339111328125, "y": 330.877587890625 }, { "x": 170.65887451171875, "y": 306.8313232421875 }, { "x": 171.34376220703126, "y": 313.84238281250003 }, { "x": 165.17266845703125, "y": 313.09494628906253 }, { "x": 166.55247802734377, "y": 306.25253906250003 }, { "x": 125.05816650390625, "y": 355.57451171875005 }, { "x": 120.83144531250001, "y": 357.81103515625 }, { "x": 81.63942260742188, "y": 295.72873535156253 }, { "x": 79.81559448242189, "y": 298.85849609375003 }, { "x": 77.86852416992187, "y": 295.08530273437503 }, { "x": 284.981689453125, "y": 249.300146484375 }, { "x": 281.96628417968753, "y": 249.5789306640625 }, { "x": 458.77431640625, "y": 189.3244384765625 }, { "x": 456.49082031250003, "y": 192.87999267578127 }, { "x": 398.94677734375, "y": 596.1991699218751 }, { "x": 391.026123046875, "y": 595.138818359375 }, { "x": 383.10544433593753, "y": 594.078466796875 }, { "x": 375.184765625, "y": 593.018115234375 }, { "x": 367.264111328125, "y": 591.9577148437501 }, { "x": 359.34343261718755, "y": 590.89736328125 }, { "x": 351.42277832031255, "y": 589.83701171875 }, { "x": 343.502099609375, "y": 588.77666015625 }, { "x": 335.5814453125, "y": 587.71630859375 }, { "x": 327.6607666015625, "y": 586.655908203125 }, { "x": 319.74072265625, "y": 585.5910156250001 }, { "x": 311.82089843750003, "y": 584.524267578125 }, { "x": 303.90109863281253, "y": 583.45751953125 }, { "x": 295.98129882812503, "y": 582.390771484375 }, { "x": 288.061474609375, "y": 581.324072265625 }, { "x": 280.1416748046875, "y": 580.25732421875 }, { "x": 272.22185058593755, "y": 579.190576171875 }, { "x": 264.3021240234375, "y": 578.123291015625 }, { "x": 256.3832763671875, "y": 577.0494140625 }, { "x": 248.4644287109375, "y": 575.9755859375 }, { "x": 240.5457275390625, "y": 574.900732421875 }, { "x": 232.62797851562502, "y": 573.81865234375 }, { "x": 224.71025390625002, "y": 572.736572265625 }, { "x": 216.79396972656252, "y": 571.6439941406251 }, { "x": 208.88203125, "y": 570.520556640625 }, { "x": 202.27774658203126, "y": 566.3488281250001 }, { "x": 197.2526611328125, "y": 560.137548828125 }, { "x": 192.35074462890626, "y": 553.82626953125 }, { "x": 187.4551513671875, "y": 547.51005859375 }, { "x": 182.56337890625002, "y": 541.19091796875 }, { "x": 177.67562255859377, "y": 534.8686035156251 }, { "x": 172.78865966796874, "y": 528.545703125 }, { "x": 167.9017333984375, "y": 522.222802734375 }, { "x": 163.019482421875, "y": 515.8962890625 }, { "x": 158.1396240234375, "y": 509.56791992187505 }, { "x": 153.261181640625, "y": 503.2384765625 }, { "x": 148.38232421875, "y": 496.909326171875 }, { "x": 143.5025146484375, "y": 490.58090820312503 }, { "x": 138.61781005859376, "y": 484.25625 }, { "x": 133.7285888671875, "y": 477.93510742187505 }, { "x": 128.84061279296876, "y": 471.613037109375 }, { "x": 123.95632324218751, "y": 465.288037109375 }, { "x": 119.0759765625, "y": 458.96005859375003 }, { "x": 114.19887084960938, "y": 452.629541015625 }, { "x": 109.32431030273438, "y": 446.2970703125 }, { "x": 104.45220336914063, "y": 439.96274414062503 }, { "x": 99.5830078125, "y": 433.626171875 }, { "x": 94.71840820312501, "y": 427.286083984375 }, { "x": 89.85454711914063, "y": 420.9453857421875 }, { "x": 84.9927978515625, "y": 414.60307617187505 }, { "x": 80.13581542968751, "y": 408.2571044921875 }, { "x": 75.28335571289062, "y": 401.90771484375 }, { "x": 70.43717346191406, "y": 395.55351562500005 }, { "x": 65.59988098144532, "y": 389.19255371093755 }, { "x": 60.786074829101565, "y": 382.8138427734375 }, { "x": 57.06759338378907, "y": 375.9541748046875 }, { "x": 56.865115356445315, "y": 367.96542968750003 }, { "x": 56.662637329101564, "y": 359.9766357421875 }, { "x": 56.46015930175781, "y": 351.98789062500003 }, { "x": 59.44541625976563, "y": 344.73051757812505 }, { "x": 57.961474609375, "y": 336.96184082031255 }, { "x": 60.03280029296875, "y": 330.610107421875 }, { "x": 64.16247863769532, "y": 337.333984375 }, { "x": 65.45625915527344, "y": 345.12841796875 }, { "x": 65.89610900878907, "y": 353.10722656250005 }, { "x": 69.69352722167969, "y": 356.234326171875 }, { "x": 72.0984130859375, "y": 348.70517578125003 }, { "x": 75.09802856445313, "y": 356.02573242187503 }, { "x": 79.74369506835939, "y": 353.79306640625003 }, { "x": 83.8200439453125, "y": 347.0255859375 }, { "x": 88.3390869140625, "y": 352.06584472656255 }, { "x": 87.99993286132813, "y": 360.0071044921875 }, { "x": 87.55426025390625, "y": 367.96379394531255 }, { "x": 88.88741455078126, "y": 375.8369873046875 }, { "x": 89.49332275390626, "y": 383.79150390625 }, { "x": 91.52892456054688, "y": 391.46281738281255 }, { "x": 97.76081542968751, "y": 395.2007080078125 }, { "x": 105.64119262695313, "y": 396.1739013671875 }, { "x": 111.34087524414063, "y": 398.8521240234375 }, { "x": 116.6864013671875, "y": 396.23955078125005 }, { "x": 124.65400390625001, "y": 396.56962890625005 }, { "x": 131.73172607421876, "y": 400.1248779296875 }, { "x": 139.6724609375, "y": 399.42062988281253 }, { "x": 147.65186767578126, "y": 398.98723144531255 }, { "x": 155.59501953125002, "y": 398.174072265625 }, { "x": 162.74464111328126, "y": 394.709375 }, { "x": 170.6008544921875, "y": 393.6357666015625 }, { "x": 177.08450927734376, "y": 389.17453613281253 }, { "x": 184.45218505859376, "y": 386.18027343750003 }, { "x": 190.1638916015625, "y": 380.89226074218755 }, { "x": 196.86968994140625, "y": 376.60979003906255 }, { "x": 203.242041015625, "y": 371.80539550781253 }, { "x": 208.19873046875, "y": 366.88547363281253 }, { "x": 211.1812744140625, "y": 360.1413818359375 }, { "x": 217.72152099609377, "y": 363.7301025390625 }, { "x": 222.7255859375, "y": 369.9552001953125 }, { "x": 230.160595703125, "y": 369.55852050781255 }, { "x": 237.943212890625, "y": 371.32236328125003 }, { "x": 245.6276611328125, "y": 369.58469238281253 }, { "x": 253.5025390625, "y": 370.4677734375 }, { "x": 261.4525390625, "y": 371.269921875 }, { "x": 269.213623046875, "y": 369.9192626953125 }, { "x": 275.28264160156255, "y": 368.74851074218753 }, { "x": 281.6014404296875, "y": 373.58488769531255 }, { "x": 289.0529052734375, "y": 371.639794921875 }, { "x": 295.50087890625, "y": 373.3611572265625 }, { "x": 295.05478515625003, "y": 366.702587890625 }, { "x": 302.44919433593753, "y": 368.86679687500003 }, { "x": 308.10458984375003, "y": 374.47587890625005 }, { "x": 314.203271484375, "y": 378.239208984375 }, { "x": 322.1564208984375, "y": 377.87248535156255 }, { "x": 329.990234375, "y": 376.2959228515625 }, { "x": 337.829248046875, "y": 374.7444580078125 }, { "x": 344.308056640625, "y": 378.588330078125 }, { "x": 351.97343750000005, "y": 379.19650878906253 }, { "x": 358.3257080078125, "y": 383.7822998046875 }, { "x": 365.063427734375, "y": 386.017333984375 }, { "x": 372.715771484375, "y": 385.81389160156255 }, { "x": 379.84995117187503, "y": 382.95556640625 }, { "x": 387.71359863281253, "y": 384.17070312500005 }, { "x": 395.7031982421875, "y": 384.23642578125003 }, { "x": 403.669384765625, "y": 383.67314453125005 }, { "x": 410.70769042968755, "y": 380.02067871093755 }, { "x": 418.055419921875, "y": 376.94438476562505 }, { "x": 425.850830078125, "y": 375.22531738281253 }, { "x": 433.396875, "y": 372.627099609375 }, { "x": 441.05766601562505, "y": 370.4447021484375 }, { "x": 447.566064453125, "y": 365.934716796875 }, { "x": 452.934033203125, "y": 360.33598632812505 }, { "x": 460.532470703125, "y": 357.88310546875005 }, { "x": 467.21337890625, "y": 353.52556152343755 }, { "x": 473.865625, "y": 349.5522705078125 }, { "x": 481.2337890625, "y": 351.57023925781255 }, { "x": 487.09262695312503, "y": 346.13774414062505 }, { "x": 491.707666015625, "y": 339.6513671875 }, { "x": 495.265869140625, "y": 332.49697265625 }, { "x": 496.153515625, "y": 324.71823730468753 }, { "x": 499.636474609375, "y": 320.8209716796875 }, { "x": 502.32866210937505, "y": 319.453173828125 }, { "x": 504.8341796875, "y": 317.324755859375 }, { "x": 509.60410156250003, "y": 317.9000244140625 }, { "x": 502.86679687500003, "y": 314.7290283203125 }, { "x": 495.493115234375, "y": 311.87236328125 }, { "x": 488.60029296875, "y": 307.84482421875003 }, { "x": 490.20126953125003, "y": 303.4680419921875 }, { "x": 494.6078125, "y": 301.210986328125 }, { "x": 498.622705078125, "y": 304.99501953125 }, { "x": 503.774169921875, "y": 310.962109375 }, { "x": 504.876123046875, "y": 309.03740234375 }, { "x": 512.231884765625, "y": 308.518701171875 }, { "x": 516.2203125000001, "y": 301.60068359375003 }, { "x": 517.7869628906251, "y": 295.10532226562503 }, { "x": 519.339013671875, "y": 290.57382812500003 }, { "x": 523.594677734375, "y": 284.23496093750003 }, { "x": 521.57197265625, "y": 277.0892822265625 }, { "x": 520.989697265625, "y": 269.7227294921875 }, { "x": 527.1330078125, "y": 264.6216552734375 }, { "x": 532.9821289062501, "y": 262.281591796875 }, { "x": 539.632421875, "y": 260.39912109375 }, { "x": 541.418798828125, "y": 254.65141601562502 }, { "x": 548.2851074218751, "y": 250.56318359375 }, { "x": 555.0644042968751, "y": 246.333447265625 }, { "x": 561.51357421875, "y": 241.6192138671875 }, { "x": 567.745751953125, "y": 236.621044921875 }, { "x": 574.945849609375, "y": 233.2150634765625 }, { "x": 581.425537109375, "y": 228.90263671875002 }, { "x": 586.241259765625, "y": 225.1750244140625 }, { "x": 591.7283203125, "y": 219.64134521484377 }, { "x": 596.840478515625, "y": 213.49942626953126 }, { "x": 601.84111328125, "y": 207.26616210937502 }, { "x": 606.755029296875, "y": 200.96436767578126 }, { "x": 611.54482421875, "y": 194.5678466796875 }, { "x": 614.58798828125, "y": 187.39725341796876 }, { "x": 620.890625, "y": 187.16370849609376 }, { "x": 621.3685546875, "y": 194.56022949218752 }, { "x": 624.387744140625, "y": 192.0843505859375 }, { "x": 621.4813964843751, "y": 184.69019775390626 }, { "x": 622.7818359375, "y": 177.77779541015627 }, { "x": 628.5365234375, "y": 172.82384033203127 }, { "x": 632.798974609375, "y": 168.2575927734375 }, { "x": 638.2750000000001, "y": 162.68162841796877 }, { "x": 643.547998046875, "y": 161.00394287109376 }, { "x": 647.3602050781251, "y": 154.34782714843752 }, { "x": 649.32666015625, "y": 147.4163818359375 }, { "x": 652.8015625, "y": 140.2407958984375 }, { "x": 656.3400390625001, "y": 133.146826171875 }, { "x": 658.8566406250001, "y": 134.12470703125 }, { "x": 659.0185058593751, "y": 140.61607666015624 }, { "x": 666.8438476562501, "y": 139.1939453125 }, { "x": 671.3510253906251, "y": 133.23406982421875 }, { "x": 675.54248046875, "y": 126.539599609375 }, { "x": 681.750048828125, "y": 121.58187255859376 }, { "x": 687.6609375, "y": 116.60339965820313 }, { "x": 694.2571777343751, "y": 112.49872436523438 }, { "x": 701.31279296875, "y": 108.85001220703126 }, { "x": 707.4219726562501, "y": 103.76357421875001 }, { "x": 712.4993652343751, "y": 97.59451293945312 }, { "x": 717.927392578125, "y": 91.73875732421875 }, { "x": 717.301416015625, "y": 96.63453369140625 }, { "x": 718.809375, "y": 95.63187255859376 }, { "x": 720.9447753906251, "y": 88.01497802734376 }, { "x": 726.451904296875, "y": 82.23104858398438 }, { "x": 730.679833984375, "y": 75.53462524414063 }, { "x": 727.6361816406251, "y": 76.829638671875 }, { "x": 729.5836914062501, "y": 71.44843750000001 }, { "x": 732.940576171875, "y": 64.20371704101564 }, { "x": 735.205126953125, "y": 56.54856872558594 }, { "x": 739.2064941406251, "y": 50.69002380371094 }, { "x": 747.00625, "y": 48.962371826171875 }, { "x": 751.9705566406251, "y": 53.570962524414064 }, { "x": 753.0447265625, "y": 61.40843811035157 }, { "x": 752.0202148437501, "y": 69.33140869140625 }, { "x": 751.7144531250001, "y": 77.3146728515625 }, { "x": 749.9835937500001, "y": 85.05550537109376 }, { "x": 747.197314453125, "y": 92.31922607421875 }, { "x": 751.1070312500001, "y": 99.24688110351563 }, { "x": 747.809814453125, "y": 105.90623168945314 }, { "x": 747.3856933593751, "y": 113.72705688476563 }, { "x": 751.54443359375, "y": 119.26318359375 }, { "x": 756.7453125000001, "y": 124.89760742187501 }, { "x": 764.45634765625, "y": 124.44691162109376 }, { "x": 771.837939453125, "y": 125.75270996093751 }, { "x": 778.22939453125, "y": 129.85457763671877 }, { "x": 780.6540039062501, "y": 137.46739501953124 }, { "x": 781.3147949218751, "y": 145.31329345703125 }, { "x": 780.9508789062501, "y": 153.29578857421876 }, { "x": 781.2049316406251, "y": 161.27620849609374 }, { "x": 781.04619140625, "y": 168.89993896484376 }, { "x": 783.4512695312501, "y": 176.4303955078125 }, { "x": 782.6178710937501, "y": 184.36809082031252 }, { "x": 781.407861328125, "y": 192.26444091796876 }, { "x": 780.8937500000001, "y": 200.23839111328127 }, { "x": 780.6214355468751, "y": 208.22514648437502 }, { "x": 780.41484375, "y": 216.21387939453126 }, { "x": 781.6142089843751, "y": 224.05362548828126 }, { "x": 783.2693847656251, "y": 231.86845703125002 }, { "x": 775.885986328125, "y": 233.58864746093752 }, { "x": 773.442529296875, "y": 240.7164306640625 }, { "x": 770.35302734375, "y": 247.68520507812502 }, { "x": 764.2734375, "y": 252.86306152343752 }, { "x": 757.4461425781251, "y": 256.78630371093755 }, { "x": 750.7814453125001, "y": 260.0354248046875 }, { "x": 746.9325683593751, "y": 267.00048828125 }, { "x": 742.2448242187501, "y": 273.11904296875 }, { "x": 736.8184570312501, "y": 271.1524658203125 }, { "x": 738.999072265625, "y": 263.5130859375 }, { "x": 739.1514648437501, "y": 256.84873046875 }, { "x": 733.171923828125, "y": 251.54931640625 }, { "x": 728.5299804687501, "y": 245.45166015625 }, { "x": 726.57451171875, "y": 237.7276123046875 }, { "x": 720.2367675781251, "y": 233.35805664062502 }, { "x": 712.318017578125, "y": 233.557958984375 }, { "x": 705.33583984375, "y": 237.30888671875002 }, { "x": 699.498828125, "y": 242.7520751953125 }, { "x": 694.96669921875, "y": 249.2959716796875 }, { "x": 694.2859863281251, "y": 257.167626953125 }, { "x": 694.839892578125, "y": 265.1380859375 }, { "x": 694.672021484375, "y": 273.1236083984375 }, { "x": 696.0076171875, "y": 280.761767578125 }, { "x": 697.7554687500001, "y": 288.3327880859375 }, { "x": 693.520166015625, "y": 294.8396728515625 }, { "x": 689.912255859375, "y": 301.90859375 }, { "x": 690.7646484375, "y": 309.6946044921875 }, { "x": 691.3869140625001, "y": 317.6380126953125 }, { "x": 692.848876953125, "y": 324.9127685546875 }, { "x": 697.09169921875, "y": 330.92062988281253 }, { "x": 696.083251953125, "y": 338.829541015625 }, { "x": 692.7227539062501, "y": 346.06760253906253 }, { "x": 689.1593750000001, "y": 353.212060546875 }, { "x": 693.507373046875, "y": 357.8072021484375 }, { "x": 701.3761718750001, "y": 359.168408203125 }, { "x": 708.9268554687501, "y": 356.64453125 }, { "x": 715.98486328125, "y": 358.9751708984375 }, { "x": 718.628662109375, "y": 366.5030029296875 }, { "x": 721.51494140625, "y": 373.9377685546875 }, { "x": 725.1143554687501, "y": 381.0694580078125 }, { "x": 719.03984375, "y": 385.175439453125 }, { "x": 711.4423339843751, "y": 387.6419921875 }, { "x": 703.99560546875, "y": 390.54025878906253 }, { "x": 696.461181640625, "y": 393.1937255859375 }, { "x": 689.2809570312501, "y": 390.56535644531255 }, { "x": 681.405517578125, "y": 391.541748046875 }, { "x": 673.44814453125, "y": 390.9868408203125 }, { "x": 665.633203125, "y": 392.43837890625 }, { "x": 658.5326171875, "y": 396.08781738281255 }, { "x": 651.166064453125, "y": 399.15336914062505 }, { "x": 643.672119140625, "y": 401.52556152343755 }, { "x": 647.1013671875, "y": 408.16008300781255 }, { "x": 653.3783691406251, "y": 413.02529296875 }, { "x": 655.4668945312501, "y": 420.637646484375 }, { "x": 655.76455078125, "y": 428.622265625 }, { "x": 654.45791015625, "y": 436.18852539062505 }, { "x": 650.0402343750001, "y": 442.84750976562503 }, { "x": 646.647998046875, "y": 450.01962890625003 }, { "x": 644.59794921875, "y": 457.743115234375 }, { "x": 642.61572265625, "y": 465.48447265625003 }, { "x": 639.102783203125, "y": 472.506494140625 }, { "x": 633.937646484375, "y": 478.601025390625 }, { "x": 630.3701171875, "y": 485.70283203125 }, { "x": 628.545556640625, "y": 493.47954101562505 }, { "x": 626.979052734375, "y": 501.315380859375 }, { "x": 624.858203125, "y": 509.01523437500003 }, { "x": 621.724267578125, "y": 516.360400390625 }, { "x": 617.965625, "y": 523.4117187500001 }, { "x": 614.021337890625, "y": 530.362109375 }, { "x": 610.187109375, "y": 537.37255859375 }, { "x": 607.2289550781251, "y": 544.78369140625 }, { "x": 605.02451171875, "y": 552.46435546875 }, { "x": 603.802001953125, "y": 560.3443359375 }, { "x": 603.90908203125, "y": 568.3330078125 }, { "x": 604.23134765625, "y": 576.317626953125 }, { "x": 604.30087890625, "y": 584.3078125000001 }, { "x": 603.9596679687501, "y": 592.291162109375 }, { "x": 603.429248046875, "y": 600.2650390625 }, { "x": 602.744287109375, "y": 608.18447265625 }, { "x": 597.904638671875, "y": 614.54345703125 }, { "x": 592.8354003906251, "y": 620.7084472656251 }, { "x": 585.079150390625, "y": 620.86318359375 }, { "x": 577.153857421875, "y": 619.837158203125 }, { "x": 569.230078125, "y": 618.80029296875 }, { "x": 561.3068359375001, "y": 617.7604492187501 }, { "x": 553.38369140625, "y": 616.71826171875 }, { "x": 545.461181640625, "y": 615.672412109375 }, { "x": 537.5385253906251, "y": 614.626611328125 }, { "x": 529.615966796875, "y": 613.578515625 }, { "x": 521.6941894531251, "y": 612.5275390625001 }, { "x": 513.77216796875, "y": 611.4765625 }, { "x": 505.85039062500005, "y": 610.4255859375 }, { "x": 497.928369140625, "y": 609.374609375 }, { "x": 490.00639648437505, "y": 608.323583984375 }, { "x": 482.08457031250003, "y": 607.2726562500001 }, { "x": 474.16259765625, "y": 606.2216308593751 }, { "x": 466.24140625, "y": 605.167041015625 }, { "x": 458.32001953125, "y": 604.11142578125 }, { "x": 450.3986328125, "y": 603.055810546875 }, { "x": 442.47744140625, "y": 602.000244140625 }, { "x": 434.5560546875, "y": 600.94462890625 }, { "x": 426.63486328125003, "y": 599.8890625 }, { "x": 418.71347656250003, "y": 598.8334472656251 }, { "x": 410.7921142578125, "y": 597.77783203125 }, { "x": 402.8709228515625, "y": 596.722265625 }, { "x": 767.943115234375, "y": 188.78448486328125 }, { "x": 775.0429199218751, "y": 185.17525634765627 }, { "x": 776.408837890625, "y": 179.52701416015626 }, { "x": 770.0228027343751, "y": 175.58706054687502 }, { "x": 762.9711425781251, "y": 175.176953125 }, { "x": 762.188037109375, "y": 182.281005859375 }, { "x": 756.9412597656251, "y": 187.6549072265625 }, { "x": 760.91748046875, "y": 192.84877929687502 }, { "x": 764.9878906250001, "y": 182.38245849609376 }, { "x": 767.9478515625001, "y": 186.32379150390625 }, { "x": 382.68649902343753, "y": 372.01083984375003 }, { "x": 375.2226806640625, "y": 369.17929687500003 }, { "x": 367.486572265625, "y": 367.59013671875005 }, { "x": 372.174072265625, "y": 362.09665527343753 }, { "x": 379.02216796875, "y": 358.06633300781255 }, { "x": 386.37729492187503, "y": 356.061669921875 }, { "x": 393.45146484375005, "y": 353.55693359375005 }, { "x": 400.1316650390625, "y": 349.2656982421875 }, { "x": 403.24267578125, "y": 355.634033203125 }, { "x": 410.41403808593753, "y": 358.98701171875 }, { "x": 417.18547363281255, "y": 362.62387695312503 }, { "x": 415.94121093750005, "y": 369.765625 }, { "x": 408.291259765625, "y": 371.41379394531253 }, { "x": 401.49020996093753, "y": 368.4971435546875 }, { "x": 398.02041015625, "y": 369.617919921875 }, { "x": 390.998779296875, "y": 372.9610595703125 }, { "x": 120.78052368164063, "y": 356.0544677734375 }, { "x": 125.267578125, "y": 353.9013671875 }, { "x": 121.43917236328126, "y": 359.30905761718753 }, { "x": 444.7853515625, "y": 352.08249511718753 }, { "x": 439.063623046875, "y": 347.01030273437505 }, { "x": 442.650146484375, "y": 340.85556640625003 }, { "x": 448.64731445312503, "y": 344.7353759765625 }, { "x": 453.14755859375003, "y": 351.288525390625 }, { "x": 451.4609375, "y": 355.975244140625 }, { "x": 205.74542236328125, "y": 345.024609375 }, { "x": 207.60682373046876, "y": 337.79697265625003 }, { "x": 213.6600341796875, "y": 332.8927734375 }, { "x": 219.21302490234376, "y": 337.57639160156253 }, { "x": 218.3349365234375, "y": 345.18815917968755 }, { "x": 212.96883544921877, "y": 351.0920654296875 }, { "x": 317.4313232421875, "y": 348.5284423828125 }, { "x": 310.18881835937503, "y": 349.1746337890625 }, { "x": 302.25974121093753, "y": 348.86472167968753 }, { "x": 302.5294921875, "y": 344.498291015625 }, { "x": 310.3569580078125, "y": 344.421533203125 }, { "x": 317.4415771484375, "y": 340.73808593750005 }, { "x": 324.464013671875, "y": 340.117138671875 }, { "x": 327.40739746093755, "y": 337.784912109375 }, { "x": 330.561669921875, "y": 330.8654296875 }, { "x": 335.6689453125, "y": 327.018310546875 }, { "x": 339.947705078125, "y": 333.18845214843753 }, { "x": 336.9742431640625, "y": 340.2393310546875 }, { "x": 329.8717041015625, "y": 343.894677734375 }, { "x": 322.9365478515625, "y": 347.3760986328125 }, { "x": 453.840576171875, "y": 344.6616455078125 }, { "x": 451.28867187500003, "y": 338.60178222656253 }, { "x": 458.051416015625, "y": 335.16831054687503 }, { "x": 462.608056640625, "y": 341.503564453125 }, { "x": 461.76123046875, "y": 347.53486328125 }, { "x": 467.3986328125, "y": 338.63620605468753 }, { "x": 468.712158203125, "y": 334.5012939453125 }, { "x": 469.162744140625, "y": 330.60275878906253 }, { "x": 474.292724609375, "y": 336.0037841796875 }, { "x": 470.737451171875, "y": 342.6570068359375 }, { "x": 482.488525390625, "y": 322.51611328125 }, { "x": 474.87797851562505, "y": 320.08173828125 }, { "x": 476.79086914062503, "y": 313.83994140625003 }, { "x": 482.2900390625, "y": 308.09375 }, { "x": 484.46728515625, "y": 315.01552734375 }, { "x": 491.259521484375, "y": 319.1906005859375 }, { "x": 492.76401367187503, "y": 324.73447265625003 }, { "x": 165.9516357421875, "y": 314.2017333984375 }, { "x": 165.47335205078124, "y": 307.45673828125 }, { "x": 171.71019287109377, "y": 307.7239501953125 }, { "x": 170.67717285156252, "y": 314.97021484375 }, { "x": 79.55585327148438, "y": 297.86845703125 }, { "x": 81.20184326171875, "y": 294.9055419921875 }, { "x": 80.22291870117188, "y": 301.0120361328125 }, { "x": 283.02626953125, "y": 246.18840332031252 }, { "x": 284.72238769531253, "y": 253.1041015625 }, { "x": 454.00468750000005, "y": 191.2032470703125 }, { "x": 457.97138671875, "y": 187.78282470703127 }];
const englandData = [{ "x": 569.2756958007812, "y": 804.4183349609375 }, { "x": 565.3694458007812, "y": 804.9808349609375 }, { "x": 561.2999267578125, "y": 808.1881103515625 }, { "x": 556.4232788085938, "y": 810.9083251953125 }, { "x": 550.8436279296875, "y": 813.007568359375 }, { "x": 545.0314331054688, "y": 813.3536376953125 }, { "x": 542.7473754882812, "y": 815.3359985351562 }, { "x": 543.4703979492188, "y": 821.2191162109375 }, { "x": 543.2938232421875, "y": 827.176025390625 }, { "x": 545.858642578125, "y": 830.9765014648438 }, { "x": 549.8499145507812, "y": 833.966064453125 }, { "x": 554.1172485351562, "y": 836.8452758789062 }, { "x": 555.2465209960938, "y": 841.5386352539062 }, { "x": 557.0231323242188, "y": 842.6021118164062 }, { "x": 560.6194458007812, "y": 839.4702758789062 }, { "x": 562.5347290039062, "y": 844.1258544921875 }, { "x": 566.87353515625, "y": 845.639404296875 }, { "x": 570.5899658203125, "y": 847.6482543945312 }, { "x": 574.3352661132812, "y": 843.426513671875 }, { "x": 578.1860961914062, "y": 845.9193115234375 }, { "x": 581.0550537109375, "y": 847.7454223632812 }, { "x": 584.5645141601562, "y": 844.35498046875 }, { "x": 587.5987548828125, "y": 839.8636474609375 }, { "x": 587.4942626953125, "y": 834.7035522460938 }, { "x": 590.497314453125, "y": 830.1448364257812 }, { "x": 592.5277099609375, "y": 824.9070434570312 }, { "x": 594.3894653320312, "y": 822.7568359375 }, { "x": 599.1739501953125, "y": 820.1370849609375 }, { "x": 596.14892578125, "y": 816.4655151367188 }, { "x": 593.7322387695312, "y": 811.7841186523438 }, { "x": 587.9666137695312, "y": 811.31689453125 }, { "x": 582.5275268554688, "y": 813.5888061523438 }, { "x": 578.1686401367188, "y": 810.1083984375 }, { "x": 575.6122436523438, "y": 805.4642333984375 }, { "x": 207.64834594726562, "y": 993.438232421875 }, { "x": 205.41859436035156, "y": 987.6032104492188 }, { "x": 202.6766815185547, "y": 981.7933959960938 }, { "x": 197.20164489746094, "y": 978.6776123046875 }, { "x": 191.62783813476562, "y": 976.3114013671875 }, { "x": 187.91159057617188, "y": 979.1639404296875 }, { "x": 183.53814697265625, "y": 983.4608154296875 }, { "x": 177.14044189453125, "y": 984.6708374023438 }, { "x": 173.55429077148438, "y": 980.4625244140625 }, { "x": 174.28709411621094, "y": 974.3993530273438 }, { "x": 178.20921325683594, "y": 969.5185546875 }, { "x": 183.8811492919922, "y": 966.6548461914062 }, { "x": 189.82460021972656, "y": 964.2922973632812 }, { "x": 195.15272521972656, "y": 966.373046875 }, { "x": 199.28245544433594, "y": 961.96728515625 }, { "x": 205.13644409179688, "y": 959.9984130859375 }, { "x": 208.98565673828125, "y": 954.9691772460938 }, { "x": 213.98411560058594, "y": 951.2844848632812 }, { "x": 215.81182861328125, "y": 945.1024169921875 }, { "x": 220.6697998046875, "y": 943.3280639648438 }, { "x": 223.56639099121094, "y": 938.0841674804688 }, { "x": 224.3052520751953, "y": 931.9917602539062 }, { "x": 228.1856231689453, "y": 929.8981323242188 }, { "x": 232.65989685058594, "y": 925.270263671875 }, { "x": 238.10211181640625, "y": 924.6755981445312 }, { "x": 242.93150329589844, "y": 921.9840087890625 }, { "x": 245.46844482421875, "y": 916.3934936523438 }, { "x": 250.73577880859375, "y": 912.6229248046875 }, { "x": 254.90415954589844, "y": 907.6934814453125 }, { "x": 258.51499938964844, "y": 902.867919921875 }, { "x": 258.45631408691406, "y": 896.3504638671875 }, { "x": 259.2333679199219, "y": 889.9205322265625 }, { "x": 260.9249267578125, "y": 883.646240234375 }, { "x": 263.90528869628906, "y": 879.7227783203125 }, { "x": 270.2816162109375, "y": 880.6162719726562 }, { "x": 276.0968017578125, "y": 882.5778198242188 }, { "x": 280.9526672363281, "y": 878.2694702148438 }, { "x": 283.3711242675781, "y": 872.6489868164062 }, { "x": 280.2178955078125, "y": 867.0940551757812 }, { "x": 283.882568359375, "y": 863.622314453125 }, { "x": 286.6636962890625, "y": 860.4948120117188 }, { "x": 293.03448486328125, "y": 859.2769165039062 }, { "x": 299.5336608886719, "y": 858.7681274414062 }, { "x": 305.91815185546875, "y": 857.5838623046875 }, { "x": 312.4185485839844, "y": 857.2501831054688 }, { "x": 318.6359558105469, "y": 857.4188232421875 }, { "x": 325.019287109375, "y": 858.7249755859375 }, { "x": 331.3880615234375, "y": 858.2504272460938 }, { "x": 337.482666015625, "y": 860.335205078125 }, { "x": 342.8964538574219, "y": 863.7885131835938 }, { "x": 349.3968200683594, "y": 863.7149047851562 }, { "x": 355.6386413574219, "y": 861.8975219726562 }, { "x": 362.07989501953125, "y": 861.2853393554688 }, { "x": 368.0906982421875, "y": 859.954833984375 }, { "x": 367.6436462402344, "y": 853.5158081054688 }, { "x": 367.4210510253906, "y": 848.1611938476562 }, { "x": 370.6942443847656, "y": 844.3756103515625 }, { "x": 372.2107849121094, "y": 841.0440673828125 }, { "x": 377.2172546386719, "y": 837.653564453125 }, { "x": 381.47540283203125, "y": 832.748046875 }, { "x": 387.088623046875, "y": 830.0437622070312 }, { "x": 391.18426513671875, "y": 825.1048583984375 }, { "x": 394.1697082519531, "y": 819.4249877929688 }, { "x": 391.7928771972656, "y": 813.9137573242188 }, { "x": 391.3785705566406, "y": 807.4080810546875 }, { "x": 391.90142822265625, "y": 801.665771484375 }, { "x": 392.5196533203125, "y": 795.2488403320312 }, { "x": 387.56689453125, "y": 793.3773193359375 }, { "x": 384.0682067871094, "y": 788.177001953125 }, { "x": 379.4097900390625, "y": 783.8868408203125 }, { "x": 373.5159606933594, "y": 785.9197998046875 }, { "x": 368.9398193359375, "y": 782.6696166992188 }, { "x": 365.3523864746094, "y": 777.2767333984375 }, { "x": 363.52337646484375, "y": 771.2142944335938 }, { "x": 361.2549133300781, "y": 765.2579956054688 }, { "x": 360.4342956542969, "y": 760.0936889648438 }, { "x": 362.12677001953125, "y": 756.697265625 }, { "x": 364.8673095703125, "y": 751.0653686523438 }, { "x": 368.49627685546875, "y": 746.286865234375 }, { "x": 369.9902648925781, "y": 741.0257568359375 }, { "x": 371.23284912109375, "y": 737.417724609375 }, { "x": 365.1565856933594, "y": 736.2806396484375 }, { "x": 359.8305358886719, "y": 732.6203002929688 }, { "x": 355.12066650390625, "y": 728.1509399414062 }, { "x": 357.1415710449219, "y": 722.5345458984375 }, { "x": 363.1955871582031, "y": 720.2478637695312 }, { "x": 368.45465087890625, "y": 718.0248413085938 }, { "x": 370.3464660644531, "y": 712.9411010742188 }, { "x": 365.8227233886719, "y": 717.0143432617188 }, { "x": 362.2535400390625, "y": 715.666259765625 }, { "x": 362.34771728515625, "y": 710.18603515625 }, { "x": 365.3587341308594, "y": 705.0292358398438 }, { "x": 368.0039367675781, "y": 699.61572265625 }, { "x": 371.0486145019531, "y": 694.3780517578125 }, { "x": 365.6877136230469, "y": 691.0186767578125 }, { "x": 360.55316162109375, "y": 687.671875 }, { "x": 360.94830322265625, "y": 681.3103637695312 }, { "x": 362.6343078613281, "y": 676.7194213867188 }, { "x": 366.88739013671875, "y": 672.9039916992188 }, { "x": 372.22344970703125, "y": 669.3610229492188 }, { "x": 377.4557800292969, "y": 671.2630615234375 }, { "x": 383.4164733886719, "y": 672.4309692382812 }, { "x": 387.3039855957031, "y": 673.892333984375 }, { "x": 389.15863037109375, "y": 668.6697387695312 }, { "x": 383.2196960449219, "y": 666.8577270507812 }, { "x": 380.2596130371094, "y": 661.1209106445312 }, { "x": 378.3846740722656, "y": 654.984375 }, { "x": 373.5815734863281, "y": 650.98876953125 }, { "x": 375.4915466308594, "y": 646.8187255859375 }, { "x": 373.80474853515625, "y": 642.1446533203125 }, { "x": 368.463134765625, "y": 638.4668579101562 }, { "x": 364.9049072265625, "y": 633.79248046875 }, { "x": 361.6490783691406, "y": 628.1937866210938 }, { "x": 359.3084716796875, "y": 622.578369140625 }, { "x": 364.72308349609375, "y": 619.0289306640625 }, { "x": 369.823486328125, "y": 615.4511108398438 }, { "x": 367.44219970703125, "y": 609.4006958007812 }, { "x": 365.595703125, "y": 603.4263916015625 }, { "x": 368.4554443359375, "y": 597.5814819335938 }, { "x": 372.0337829589844, "y": 592.1344604492188 }, { "x": 375.9256896972656, "y": 586.9049682617188 }, { "x": 370.72369384765625, "y": 584.1340942382812 }, { "x": 369.0362854003906, "y": 578.1092529296875 }, { "x": 369.0280456542969, "y": 571.5897827148438 }, { "x": 369.95526123046875, "y": 565.2110595703125 }, { "x": 375.62359619140625, "y": 562.2028198242188 }, { "x": 380.929443359375, "y": 559.0161743164062 }, { "x": 378.12738037109375, "y": 553.476806640625 }, { "x": 380.84228515625, "y": 547.740478515625 }, { "x": 385.6078186035156, "y": 543.9020385742188 }, { "x": 382.3914489746094, "y": 539.0347900390625 }, { "x": 379.7574462890625, "y": 536.9283447265625 }, { "x": 376.3529357910156, "y": 540.5211791992188 }, { "x": 372.0802917480469, "y": 541.5208740234375 }, { "x": 371.0312194824219, "y": 536.1724243164062 }, { "x": 368.3580322265625, "y": 541.9960327148438 }, { "x": 364.3150329589844, "y": 547.060791015625 }, { "x": 361.2350769042969, "y": 546.6226196289062 }, { "x": 362.4372863769531, "y": 549.3502807617188 }, { "x": 358.793701171875, "y": 549.9869995117188 }, { "x": 355.82843017578125, "y": 544.2003784179688 }, { "x": 356.6649169921875, "y": 537.9744873046875 }, { "x": 355.4272155761719, "y": 535.505615234375 }, { "x": 350.787353515625, "y": 532.5524291992188 }, { "x": 347.46014404296875, "y": 526.9482116699219 }, { "x": 346.0236511230469, "y": 520.6577453613281 }, { "x": 343.230224609375, "y": 514.7920532226562 }, { "x": 339.79473876953125, "y": 509.25152587890625 }, { "x": 335.98101806640625, "y": 503.9683837890625 }, { "x": 332.7227783203125, "y": 498.6205749511719 }, { "x": 335.71221923828125, "y": 492.92218017578125 }, { "x": 336.916748046875, "y": 486.5386047363281 }, { "x": 339.3111267089844, "y": 481.013916015625 }, { "x": 342.619384765625, "y": 475.4618835449219 }, { "x": 346.0548095703125, "y": 470.0570068359375 }, { "x": 347.4949645996094, "y": 463.71099853515625 }, { "x": 350.7323303222656, "y": 458.1083068847656 }, { "x": 355.6247863769531, "y": 456.9746398925781 }, { "x": 357.2213439941406, "y": 452.1885986328125 }, { "x": 363.3363037109375, "y": 451.3553161621094 }, { "x": 367.6299743652344, "y": 449.1062316894531 }, { "x": 371.47637939453125, "y": 445.1006164550781 }, { "x": 372.9232482910156, "y": 440.2886962890625 }, { "x": 378.39886474609375, "y": 438.9930419921875 }, { "x": 383.2730712890625, "y": 434.7041931152344 }, { "x": 387.96978759765625, "y": 430.6831359863281 }, { "x": 393.1455078125, "y": 426.78057861328125 }, { "x": 397.1202697753906, "y": 421.93878173828125 }, { "x": 398.8214416503906, "y": 416.782470703125 }, { "x": 403.0794372558594, "y": 411.9277648925781 }, { "x": 408.2082824707031, "y": 407.9441223144531 }, { "x": 414.38433837890625, "y": 407.834228515625 }, { "x": 416.8399353027344, "y": 402.7192687988281 }, { "x": 422.1019287109375, "y": 399.2070617675781 }, { "x": 425.9047546386719, "y": 395.3555908203125 }, { "x": 423.56378173828125, "y": 389.2928771972656 }, { "x": 420.27294921875, "y": 383.85400390625 }, { "x": 417.5073547363281, "y": 378.0714416503906 }, { "x": 422.4639587402344, "y": 375.0096130371094 }, { "x": 426.6883239746094, "y": 370.27325439453125 }, { "x": 429.9096984863281, "y": 365.2604064941406 }, { "x": 433.22869873046875, "y": 359.909912109375 }, { "x": 438.2138366699219, "y": 359.2149353027344 }, { "x": 441.2582702636719, "y": 364.9190979003906 }, { "x": 445.8205261230469, "y": 369.5600891113281 }, { "x": 451.9390563964844, "y": 371.1366271972656 }, { "x": 450.9761962890625, "y": 374.1885986328125 }, { "x": 449.28948974609375, "y": 375.70819091796875 }, { "x": 454.1567077636719, "y": 377.9183654785156 }, { "x": 459.5205993652344, "y": 381.0985107421875 }, { "x": 463.0899963378906, "y": 386.34722900390625 }, { "x": 464.6340026855469, "y": 392.3410949707031 }, { "x": 465.70068359375, "y": 398.62103271484375 }, { "x": 464.80987548828125, "y": 404.6508483886719 }, { "x": 467.22735595703125, "y": 410.48748779296875 }, { "x": 466.8792419433594, "y": 416.8077697753906 }, { "x": 469.8689880371094, "y": 422.5695495605469 }, { "x": 469.9646301269531, "y": 428.7725830078125 }, { "x": 472.0889892578125, "y": 434.8520202636719 }, { "x": 474.8646240234375, "y": 440.7442321777344 }, { "x": 477.5711669921875, "y": 446.4892272949219 }, { "x": 480.5425720214844, "y": 452.1436767578125 }, { "x": 480.8888854980469, "y": 458.6524963378906 }, { "x": 482.87005615234375, "y": 464.8057556152344 }, { "x": 484.57080078125, "y": 471.0852966308594 }, { "x": 488.2356262207031, "y": 476.4226989746094 }, { "x": 492.6561279296875, "y": 480.81182861328125 }, { "x": 494.1812438964844, "y": 485.2212219238281 }, { "x": 499.91558837890625, "y": 488.2476501464844 }, { "x": 505.7113952636719, "y": 491.1944885253906 }, { "x": 511.8681945800781, "y": 492.9672546386719 }, { "x": 518.13330078125, "y": 494.6348876953125 }, { "x": 523.4506530761719, "y": 497.7847900390625 }, { "x": 528.8553466796875, "y": 501.235595703125 }, { "x": 533.97265625, "y": 505.139892578125 }, { "x": 536.9550170898438, "y": 510.6650695800781 }, { "x": 540.4628295898438, "y": 516.1415710449219 }, { "x": 542.8058471679688, "y": 522.1839294433594 }, { "x": 545.7691040039062, "y": 527.4718933105469 }, { "x": 551.4401245117188, "y": 530.6225891113281 }, { "x": 552.8981323242188, "y": 535.4677734375 }, { "x": 558.6875610351562, "y": 538.4157104492188 }, { "x": 564.2821655273438, "y": 541.70703125 }, { "x": 559.516357421875, "y": 544.9673461914062 }, { "x": 556.4845581054688, "y": 550.3153686523438 }, { "x": 557.1422119140625, "y": 556.7764282226562 }, { "x": 559.5606079101562, "y": 562.8165893554688 }, { "x": 562.854736328125, "y": 568.4400634765625 }, { "x": 566.4912719726562, "y": 573.8505859375 }, { "x": 570.2726440429688, "y": 579.1614990234375 }, { "x": 574.0341796875, "y": 584.4864501953125 }, { "x": 577.6578369140625, "y": 589.90576171875 }, { "x": 580.7711791992188, "y": 595.6223754882812 }, { "x": 577.7975463867188, "y": 596.0804443359375 }, { "x": 571.847412109375, "y": 594.2462768554688 }, { "x": 565.6353149414062, "y": 595.806396484375 }, { "x": 560.1575317382812, "y": 592.390869140625 }, { "x": 555.5150756835938, "y": 587.8223266601562 }, { "x": 550.7180786132812, "y": 584.197265625 }, { "x": 544.48974609375, "y": 586.0903930664062 }, { "x": 538.1319580078125, "y": 587.4903564453125 }, { "x": 531.8460388183594, "y": 586.6254272460938 }, { "x": 526.5719909667969, "y": 587.4539184570312 }, { "x": 532.505126953125, "y": 588.3087158203125 }, { "x": 538.2080688476562, "y": 588.6976928710938 }, { "x": 544.56591796875, "y": 587.4559936523438 }, { "x": 550.9212036132812, "y": 586.0165405273438 }, { "x": 555.230712890625, "y": 590.84716796875 }, { "x": 559.6224975585938, "y": 595.6587524414062 }, { "x": 564.7177734375, "y": 599.7005004882812 }, { "x": 570.1002807617188, "y": 603.139892578125 }, { "x": 575.4910888671875, "y": 606.6482543945312 }, { "x": 581.1227416992188, "y": 609.8875732421875 }, { "x": 584.72802734375, "y": 615.2705688476562 }, { "x": 587.7520751953125, "y": 620.9734497070312 }, { "x": 590.304443359375, "y": 626.9703369140625 }, { "x": 593.0848388671875, "y": 632.8673095703125 }, { "x": 595.7412109375, "y": 638.7872924804688 }, { "x": 595.7654418945312, "y": 645.306884765625 }, { "x": 595.6107177734375, "y": 651.8212280273438 }, { "x": 591.2763061523438, "y": 656.3699951171875 }, { "x": 586.349365234375, "y": 660.63818359375 }, { "x": 581.9005737304688, "y": 665.3936767578125 }, { "x": 578.85888671875, "y": 671.124755859375 }, { "x": 578.91162109375, "y": 675.0390014648438 }, { "x": 584.9386596679688, "y": 677.3609008789062 }, { "x": 588.4266967773438, "y": 682.8486938476562 }, { "x": 594.3085327148438, "y": 683.3160400390625 }, { "x": 599.249755859375, "y": 681.5421752929688 }, { "x": 602.32421875, "y": 676.0682983398438 }, { "x": 604.7022094726562, "y": 670.0075073242188 }, { "x": 608.9080200195312, "y": 665.3013305664062 }, { "x": 615.407470703125, "y": 664.9140014648438 }, { "x": 621.7252807617188, "y": 664.1107177734375 }, { "x": 628.2371826171875, "y": 664.4063110351562 }, { "x": 634.648193359375, "y": 665.4776000976562 }, { "x": 640.4733276367188, "y": 664.2775268554688 }, { "x": 646.817138671875, "y": 665.7772216796875 }, { "x": 653.2523193359375, "y": 666.809326171875 }, { "x": 659.6070556640625, "y": 668.1718139648438 }, { "x": 665.5225830078125, "y": 670.8939208984375 }, { "x": 671.0191650390625, "y": 674.39404296875 }, { "x": 676.1876831054688, "y": 678.3656005859375 }, { "x": 681.1044311523438, "y": 682.6458740234375 }, { "x": 685.8180541992188, "y": 687.1491088867188 }, { "x": 689.3638305664062, "y": 692.54541015625 }, { "x": 691.1815795898438, "y": 698.800537109375 }, { "x": 691.7825927734375, "y": 705.2799682617188 }, { "x": 692.6322631835938, "y": 711.7310791015625 }, { "x": 693.3118896484375, "y": 718.1204223632812 }, { "x": 692.2617797851562, "y": 724.5545043945312 }, { "x": 690.5408325195312, "y": 730.836181640625 }, { "x": 687.9494018554688, "y": 736.8123168945312 }, { "x": 686.5670776367188, "y": 743.1139526367188 }, { "x": 685.9608764648438, "y": 749.60205078125 }, { "x": 684.935791015625, "y": 756.0396728515625 }, { "x": 681.8775024414062, "y": 761.4531860351562 }, { "x": 676.828125, "y": 765.5579833984375 }, { "x": 672.9541015625, "y": 770.7860107421875 }, { "x": 668.633056640625, "y": 775.6646728515625 }, { "x": 663.6121826171875, "y": 778.9714965820312 }, { "x": 664.6062622070312, "y": 783.8631591796875 }, { "x": 662.6329345703125, "y": 789.5294799804688 }, { "x": 657.619140625, "y": 793.6700439453125 }, { "x": 651.7293090820312, "y": 796.4054565429688 }, { "x": 646.3899536132812, "y": 795.051513671875 }, { "x": 641.1009521484375, "y": 796.6820068359375 }, { "x": 640.3596801757812, "y": 799.0200805664062 }, { "x": 642.3076782226562, "y": 804.5769653320312 }, { "x": 642.0361328125, "y": 811.088134765625 }, { "x": 641.7740478515625, "y": 816.0762939453125 }, { "x": 636.9973754882812, "y": 820.4801635742188 }, { "x": 632.1019287109375, "y": 824.7823486328125 }, { "x": 625.7115478515625, "y": 823.9076538085938 }, { "x": 621.2662963867188, "y": 824.1550903320312 }, { "x": 616.206787109375, "y": 826.641845703125 }, { "x": 609.7515258789062, "y": 827.5239868164062 }, { "x": 613.239501953125, "y": 828.435546875 }, { "x": 619.71484375, "y": 828.9945678710938 }, { "x": 626.1471557617188, "y": 829.7925415039062 }, { "x": 631.818359375, "y": 832.9302368164062 }, { "x": 638.0855102539062, "y": 834.7088012695312 }, { "x": 643.1934204101562, "y": 838.591552734375 }, { "x": 640.81689453125, "y": 842.7979125976562 }, { "x": 647.1539916992188, "y": 841.40673828125 }, { "x": 653.3869018554688, "y": 839.6504516601562 }, { "x": 659.8322143554688, "y": 838.66845703125 }, { "x": 666.2808227539062, "y": 837.709228515625 }, { "x": 672.7301635742188, "y": 836.7554321289062 }, { "x": 678.5183715820312, "y": 837.9856567382812 }, { "x": 677.118896484375, "y": 844.2725830078125 }, { "x": 673.801513671875, "y": 846.6629638671875 }, { "x": 675.7398071289062, "y": 852.8778686523438 }, { "x": 676.1526489257812, "y": 859.373046875 }, { "x": 673.8826904296875, "y": 865.0879516601562 }, { "x": 669.3900146484375, "y": 868.7586059570312 }, { "x": 663.2925415039062, "y": 870.842041015625 }, { "x": 657.5087280273438, "y": 873.5455322265625 }, { "x": 651.6065673828125, "y": 876.176513671875 }, { "x": 647.8914184570312, "y": 881.4144287109375 }, { "x": 647.8113403320312, "y": 887.8463745117188 }, { "x": 644.420654296875, "y": 890.7820434570312 }, { "x": 637.9291381835938, "y": 890.1820068359375 }, { "x": 631.5767211914062, "y": 890.9478149414062 }, { "x": 626.8500366210938, "y": 895.4020385742188 }, { "x": 620.8762817382812, "y": 897.9734497070312 }, { "x": 614.6650390625, "y": 899.9539794921875 }, { "x": 608.4893798828125, "y": 902.0369873046875 }, { "x": 603.1552124023438, "y": 905.6722412109375 }, { "x": 599.0322875976562, "y": 910.7142944335938 }, { "x": 592.7548828125, "y": 911.1476440429688 }, { "x": 586.5021362304688, "y": 909.3251342773438 }, { "x": 580.3173828125, "y": 907.2638549804688 }, { "x": 574.1106567382812, "y": 905.27294921875 }, { "x": 567.83544921875, "y": 903.749267578125 }, { "x": 561.3557739257812, "y": 903.322998046875 }, { "x": 555.0040893554688, "y": 904.7232055664062 }, { "x": 548.5791625976562, "y": 905.815673828125 }, { "x": 542.1282958984375, "y": 906.755126953125 }, { "x": 535.7388305664062, "y": 908.0462646484375 }, { "x": 529.50439453125, "y": 909.9269409179688 }, { "x": 525.2372741699219, "y": 914.645751953125 }, { "x": 520.0694580078125, "y": 912.304931640625 }, { "x": 514.1156005859375, "y": 909.7174682617188 }, { "x": 507.6676330566406, "y": 908.9061889648438 }, { "x": 501.17864990234375, "y": 909.4818725585938 }, { "x": 495.2344055175781, "y": 908.0277709960938 }, { "x": 489.8525695800781, "y": 904.4107666015625 }, { "x": 484.8296813964844, "y": 900.30712890625 }, { "x": 483.57220458984375, "y": 900.5139770507812 }, { "x": 488.09423828125, "y": 905.0391235351562 }, { "x": 483.4471435546875, "y": 909.1167602539062 }, { "x": 477.4069519042969, "y": 911.5507202148438 }, { "x": 472.0574035644531, "y": 914.6882934570312 }, { "x": 475.30181884765625, "y": 916.0615234375 }, { "x": 481.3740539550781, "y": 913.79052734375 }, { "x": 486.7047119140625, "y": 910.1505737304688 }, { "x": 492.581298828125, "y": 911.7564086914062 }, { "x": 498.74053955078125, "y": 913.715576171875 }, { "x": 503.6290588378906, "y": 917.4542236328125 }, { "x": 501.899169921875, "y": 921.9157104492188 }, { "x": 497.88812255859375, "y": 926.5126342773438 }, { "x": 493.424560546875, "y": 930.5302124023438 }, { "x": 487.3443908691406, "y": 931.1026000976562 }, { "x": 482.17926025390625, "y": 927.12841796875 }, { "x": 476.64556884765625, "y": 923.7111206054688 }, { "x": 470.64874267578125, "y": 922.2650756835938 }, { "x": 467.94476318359375, "y": 921.2002563476562 }, { "x": 468.2959899902344, "y": 917.0078125 }, { "x": 462.2020568847656, "y": 914.7151489257812 }, { "x": 456.7257080078125, "y": 917.120361328125 }, { "x": 450.2632751464844, "y": 916.5908813476562 }, { "x": 444.5307922363281, "y": 919.27978515625 }, { "x": 444.78277587890625, "y": 924.9879760742188 }, { "x": 442.3804016113281, "y": 930.0496826171875 }, { "x": 436.1966857910156, "y": 931.6862182617188 }, { "x": 431.0218505859375, "y": 929.346435546875 }, { "x": 424.7664489746094, "y": 927.63037109375 }, { "x": 418.27545166015625, "y": 927.0379638671875 }, { "x": 411.90618896484375, "y": 925.8237915039062 }, { "x": 408.22857666015625, "y": 929.4877319335938 }, { "x": 410.1552734375, "y": 933.0097045898438 }, { "x": 407.2498779296875, "y": 938.6749877929688 }, { "x": 405.8642578125, "y": 933.8433227539062 }, { "x": 401.8417053222656, "y": 928.8666381835938 }, { "x": 396.73931884765625, "y": 924.80810546875 }, { "x": 391.4098815917969, "y": 921.0560913085938 }, { "x": 385.7366943359375, "y": 917.8524169921875 }, { "x": 379.61932373046875, "y": 915.6358032226562 }, { "x": 373.46331787109375, "y": 915.690673828125 }, { "x": 367.3571472167969, "y": 917.888916015625 }, { "x": 361.0833740234375, "y": 919.1975708007812 }, { "x": 354.599609375, "y": 919.76025390625 }, { "x": 349.18560791015625, "y": 923.0665893554688 }, { "x": 344.057373046875, "y": 926.9248046875 }, { "x": 338.0506286621094, "y": 928.4130859375 }, { "x": 334.6994323730469, "y": 933.9909057617188 }, { "x": 333.026123046875, "y": 940.1392211914062 }, { "x": 332.0593566894531, "y": 944.2665405273438 }, { "x": 330.7298889160156, "y": 948.2494506835938 }, { "x": 334.236083984375, "y": 950.9743041992188 }, { "x": 330.8861083984375, "y": 956.533447265625 }, { "x": 325.12579345703125, "y": 959.491455078125 }, { "x": 322.4698181152344, "y": 965.2977294921875 }, { "x": 320.97125244140625, "y": 970.0369873046875 }, { "x": 314.8570556640625, "y": 970.4697875976562 }, { "x": 308.7745056152344, "y": 969.501708984375 }, { "x": 305.38372802734375, "y": 964.4515380859375 }, { "x": 300.2821350097656, "y": 960.8466796875 }, { "x": 294.6040344238281, "y": 961.05859375 }, { "x": 288.9393310546875, "y": 957.9566650390625 }, { "x": 286.2483825683594, "y": 953.204833984375 }, { "x": 282.9319152832031, "y": 958.1422729492188 }, { "x": 278.5703430175781, "y": 954.9512329101562 }, { "x": 272.3909606933594, "y": 953.0204467773438 }, { "x": 266.1421203613281, "y": 953.7822265625 }, { "x": 260.2799377441406, "y": 956.0588989257812 }, { "x": 253.76736450195312, "y": 956.3574829101562 }, { "x": 248.11744689941406, "y": 955.7877197265625 }, { "x": 244.3812255859375, "y": 957.6835327148438 }, { "x": 242.9151611328125, "y": 963.0730590820312 }, { "x": 238.75454711914062, "y": 966.86328125 }, { "x": 233.46315002441406, "y": 968.0654907226562 }, { "x": 228.311279296875, "y": 971.1024169921875 }, { "x": 224.36239624023438, "y": 975.77685546875 }, { "x": 219.87005615234375, "y": 977.38623046875 }, { "x": 221.11358642578125, "y": 982.42236328125 }, { "x": 219.48892211914062, "y": 988.3031005859375 }, { "x": 213.7626190185547, "y": 990.1944580078125 }, { "x": 209.90899658203125, "y": 994.525146484375 }, { "x": 513.5160217285156, "y": 906.9561157226562 }, { "x": 508.12628173828125, "y": 904.1383056640625 }, { "x": 500.28204345703125, "y": 903.2022094726562 }, { "x": 622.560546875, "y": 836.7445068359375 }, { "x": 621.4202880859375, "y": 835.482421875 }, { "x": 619.3776245117188, "y": 838.8135986328125 }, { "x": 627.1277465820312, "y": 834.8246459960938 }, { "x": 633.7122802734375, "y": 800.7633666992188 }, { "x": 634.8538208007812, "y": 801.7282104492188 }, { "x": 655.2240600585938, "y": 775.3070068359375 }, { "x": 385.1531677246094, "y": 631.9513549804688 }, { "x": 384.55389404296875, "y": 630.509033203125 }, { "x": 378.481201171875, "y": 628.4047241210938 }, { "x": 373.90802001953125, "y": 625.2664794921875 }, { "x": 377.6784973144531, "y": 630.5562744140625 }, { "x": 360.17449951171875, "y": 531.1886596679688 }];
const css$2 = {
  code: "#p5.svelte-19ztf50{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:0}",
  map: null
};
const capacity = 4;
const spread = 0.3;
let point = 1;
let weight = 1;
const offset = 15e-5;
const maxSpinSpeed = 0.1;
const spinDecay = 0.9;
const range = 100;
const numWalkers = 1e3;
function drawQuadtree(p5, quadtree2) {
  if (!quadtree2)
    return;
  p5.rect(quadtree2.boundary.x, quadtree2.boundary.y, quadtree2.boundary.w * 2, quadtree2.boundary.h * 2);
  if (quadtree2.divided) {
    drawQuadtree(p5, quadtree2.northeast);
    drawQuadtree(p5, quadtree2.northwest);
    drawQuadtree(p5, quadtree2.southeast);
    drawQuadtree(p5, quadtree2.southwest);
  }
}
const Sketch2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $constellation_index, $$unsubscribe_constellation_index;
  let $constellated, $$unsubscribe_constellated;
  let $delta, $$unsubscribe_delta;
  let $coordinates, $$unsubscribe_coordinates;
  $$unsubscribe_constellation_index = subscribe(constellation_index, (value) => $constellation_index = value);
  $$unsubscribe_constellated = subscribe(constellated, (value) => $constellated = value);
  $$unsubscribe_delta = subscribe(delta, (value) => $delta = value);
  $$unsubscribe_coordinates = subscribe(coordinates, (value) => $coordinates = value);
  let { index } = $$props;
  let innerWidth;
  let innerHeight;
  let quadtree;
  const pointData = [moroccoData, italyData, uaeData, usaData, englandData];
  let map;
  let parameters = 0;
  let forceradius = 140;
  let proximity = 12;
  let repulsionStrength = 11;
  let prox = [12, 11];
  let snapStrength = 100;
  let cx, cy, s;
  let max;
  let angle = 0;
  let spinSpeed = 0;
  spinDelta.subscribe((value) => {
    handleScroll(value);
  });
  const walkers = [];
  const wobblers = [];
  const positions = [{ x: 1 / 7, y: 1 / 3 }, { x: 1 / 5, y: 6 / 7 }, { x: 1 / 5, y: 3 / 5 }];
  const thrupdate2 = throttle(
    (p5) => {
      wobblers.forEach((wobbler, i) => {
        set_store_value(
          coordinates,
          $coordinates[i] = {
            ...$coordinates[i],
            x: wobbler.x,
            y: wobbler.y
          },
          $coordinates
        );
      });
    },
    100
  );
  let accent1_s, accent2_s, accent3_s, white_s, black_s;
  let white;
  let black;
  function handleScroll(deltaY) {
    spinSpeed = Math.sign(deltaY) * maxSpinSpeed * Math.min(Math.abs(deltaY) / 100, 1);
  }
  class Wobbler {
    //this is the endpoint that controls the floating boxes
    ox;
    oy;
    //originf
    xoff;
    yoff;
    //offset
    xnoise;
    ynoise;
    //noise value
    x;
    y;
    //position
    constructor(p5, ox, oy) {
      this.xoff = p5.random(1e3);
      this.yoff = p5.random(1e3);
      this.ox = ox;
      this.oy = oy;
      this.x = ox;
      this.y = oy;
      this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -range * 1.5, range * 1.5);
      this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -range, range);
    }
    move(p5) {
      this.xoff += 2e-3;
      this.yoff += 2e-3;
      this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -range, range);
      this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -range, range);
    }
    display(p5) {
      white.setAlpha(255);
      p5.fill(white);
      this.x = this.ox + this.xnoise;
      this.y = this.oy + this.ynoise;
      p5.ellipse(this.x - 50, this.y - 100, 15);
    }
  }
  class Walker {
    x;
    y;
    //position
    ox;
    oy;
    //original position
    xoff;
    yoff;
    //offset
    xnoise;
    ynoise;
    traveling;
    mapmode;
    constructor(p5) {
      this.xoff = p5.random(5e3);
      this.yoff = p5.random(5e3);
      this.mapmode = false;
      this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -p5.width * spread, p5.width * (1 + spread));
      this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -p5.height * spread, p5.height * (1 + spread));
      this.x = this.xnoise;
      this.y = this.ynoise;
      this.ox = 0 + this.x;
      this.oy = 0 + this.y;
      this.traveling = false;
    }
    move(p5) {
      this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -p5.width * spread, p5.width * (1 + spread));
      this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -p5.height * spread, p5.height * (1 + spread));
      this.xoff += offset;
      this.yoff += offset;
      this.x = this.xnoise;
      this.y = this.ynoise;
    }
    repel(p5, mouseX, mouseY) {
      let d = p5.dist(mouseX, mouseY, this.x, this.y);
      if (d < forceradius) {
        if (!this.traveling && !this.mapmode) {
          this.ox = this.x;
          this.oy = this.y;
        }
        this.traveling = true;
        let dx = this.x - mouseX;
        let dy = this.y - mouseY;
        let forceDirection = p5.createVector(dx, dy);
        let forceMagnitude = repulsionStrength * (1 - d / forceradius);
        forceDirection.setMag(forceMagnitude);
        this.x += forceDirection.x;
        this.y += forceDirection.y;
      }
    }
    goBack(p5) {
      let xtarget = this.ox;
      let ytarget = this.oy;
      let d = p5.dist(xtarget, ytarget, this.x, this.y);
      let dx = xtarget - this.x;
      let dy = ytarget - this.y;
      let forceDirection = p5.createVector(dx, dy);
      let stopThreshold = 1;
      if (d > stopThreshold) {
        let forceMagnitude = p5.map(d, 0, p5.width / 2, 0, snapStrength);
        forceDirection.setMag(forceMagnitude);
        this.x += forceDirection.x;
        this.y += forceDirection.y;
      } else {
        this.x = xtarget;
        this.y = ytarget;
      }
      if (d < 1) {
        this.traveling = false;
      }
    }
  }
  const sketch = (p5) => {
    p5.mouseClicked = () => {
      console.log(parameters);
      parameters += 1;
      parameters %= 4;
      switch (parameters) {
        case 0:
          forceradius = 140;
          proximity = 12;
          prox = [12, 11];
          repulsionStrength = 11;
          snapStrength = 100;
          break;
      }
    };
    p5.setup = () => {
      p5.createCanvas(innerWidth, innerHeight);
      cy = innerHeight / 2;
      cx = innerWidth / 2;
      s = 300;
      englandData.forEach((point2) => {
        point2.x += 700;
        point2.y -= 300;
      });
      moroccoData.forEach((point2) => {
        point2.x += 770;
        point2.y += 70;
      });
      uaeData.forEach((point2) => {
        point2.x += 600;
        point2.y += 70;
      });
      usaData.forEach((point2) => {
        point2.x += 650;
        point2.y += 150;
      });
      italyData.forEach((point2) => {
        point2.x += 700;
        point2.y += 50;
      });
      map = new Float32Array(moroccoData.flatMap((coord) => [coord.x, coord.y]));
      p5.pixelDensity(p5.displayDensity());
      quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);
      white = p5.color(white_s);
      black = p5.color(black_s);
      p5.color(accent1_s);
      p5.color(accent2_s);
      p5.color(accent3_s);
      for (let i = 0; i < numWalkers; i++) {
        walkers.push(new Walker(p5));
      }
      for (let i = 0; i < 3; i++) {
        wobblers.push(new Wobbler(p5, p5.width * positions[i].x, p5.height * positions[i].y));
      }
    };
    p5.draw = () => {
      p5.clear();
      quadtree.clear();
      p5.background(black);
      if (index === 2) {
        let progress = p5.map($delta, 0, max, 3 * p5.PI / 2, p5.PI / 2);
        s = 280;
        p5.noFill();
        p5.stroke(white);
        p5.strokeWeight(1);
        p5.arc(cx, cy, s, s, 0, 2 * p5.PI);
        s = 260;
        p5.stroke(white);
        p5.strokeWeight(6);
        p5.fill(white);
        p5.arc(cx, cy, s, s, progress, p5.PI / 2, p5.PIE);
        p5.fill(black);
        p5.noStroke();
        p5.rect(p5.width / 2 - 10, 0, s, p5.height);
      }
      p5.push();
      p5.translate(p5.width / 2, p5.height / 2);
      p5.rotate(angle);
      p5.translate(-p5.width / 2, -p5.height / 2);
      walkers.forEach((walker, i) => {
        if (index === 2) {
          let mouseX = p5.mouseX - p5.width / 2;
          let mouseY = p5.mouseY - p5.height / 2;
          let rotatedMouse = p5.createVector(mouseX, mouseY).rotate(-angle);
          walker.repel(p5, rotatedMouse.x + p5.width / 2, rotatedMouse.y + p5.height / 2);
          if (walker.traveling && p5.dist(rotatedMouse.x + p5.width / 2, rotatedMouse.y + p5.height / 2, walker.x, walker.y) > proximity) {
            walker.goBack(p5);
          } else if (!walker.mapmode && !walker.traveling) {
            walker.move(p5);
          }
        } else {
          walker.repel(p5, p5.mouseX, p5.mouseY);
          if (walker.traveling && p5.dist(p5.mouseX, p5.mouseY, walker.x, walker.y) > proximity) {
            walker.goBack(p5);
          } else if (!walker.mapmode && !walker.traveling) {
            walker.move(p5);
          }
        }
        quadtree.insert(new Point(walker.x, walker.y, walker));
        p5.stroke(white);
        p5.strokeWeight(point);
        p5.point(walker.x, walker.y);
      });
      walkers.forEach((walker, i) => {
        let searchArea = new Circle(walker.x, walker.y, proximity);
        let pointsInRange = quadtree.query(searchArea);
        if (walker.mapmode && !walker.traveling && i < walkers.length - 1) {
          let d = p5.dist(walkers[i + 1].x, walker.x, walkers[i + 1].y, walker.y);
          let alpha = 255 - p5.map(d, 0, proximity, 0, 255);
          let isFar = d > proximity;
          isFar ? white.setAlpha(0.1) : white.setAlpha(alpha);
          isFar ? p5.stroke(white) : p5.stroke(white);
          p5.strokeWeight(d === 0 ? weight : weight - p5.map(d, 0, proximity, weight, 0));
          isFar ? p5.strokeWeight(0.2) : true;
          if (d < 3 * proximity) {
            p5.line(walker.x, walker.y, walkers[i + 1].x, walkers[i + 1].y);
          }
        }
        pointsInRange.forEach((other) => {
          if (other.userData !== walker) {
            let d = other.sqDistanceFrom(walker);
            let alpha = p5.map(d, 0, proximity * proximity, 255, 0);
            white.setAlpha(alpha);
            p5.stroke(white);
            p5.strokeWeight(d === 0 ? weight : p5.map(d, 0, proximity * proximity, weight, 0));
            p5.line(walker.x, walker.y, other.x, other.y);
          }
        });
      });
      wobblers.forEach((wobbler, i) => {
        wobbler.move(p5);
        wobbler.display(p5);
      });
      thrupdate2(p5);
      p5.strokeWeight(0.4);
      white.setAlpha(10);
      p5.stroke(white);
      p5.noFill();
      p5.rectMode(p5.CENTER);
      drawQuadtree(p5, quadtree);
      p5.pop();
      angle += spinSpeed;
      if (Math.abs(spinSpeed) > 0) {
        spinSpeed *= spinDecay;
      }
      white.setAlpha(255);
    };
    p5.windowResized = () => {
      p5.resizeCanvas(innerWidth, innerHeight);
      quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);
      wobblers.forEach((wobbler, i) => {
        wobbler.ox = p5.width * positions[i].x;
        wobbler.oy = p5.height * positions[i].y;
      });
    };
  };
  function changeMode() {
    map = new Float32Array(pointData[$constellation_index].flatMap((coord) => [coord.x, coord.y]));
    walkers.forEach((walker, i) => {
      if (!$constellated) {
        walker.mapmode = false;
        proximity = prox[0];
        walker.ox = walker.xnoise;
        walker.oy = walker.ynoise;
      } else if (i < pointData[$constellation_index].length) {
        walker.mapmode = true;
        proximity = prox[0];
        walker.ox = map[2 * i];
        walker.oy = map[2 * i + 1];
      } else {
        walker.mapmode = false;
        proximity = prox[1];
        walker.ox = walker.xnoise;
        walker.oy = walker.ynoise;
      }
      walker.traveling = true;
    });
  }
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$2);
  {
    if (index === 1) {
      constellated.set(true);
      changeMode();
      angle = 0;
    } else {
      if (index != 2) {
        angle = 0;
      }
      constellated.set(false);
      changeMode();
      constellation_index.set(0);
    }
  }
  {
    if ($constellated) {
      changeMode();
      constellated.set(false);
    }
  }
  $$unsubscribe_constellation_index();
  $$unsubscribe_constellated();
  $$unsubscribe_delta();
  $$unsubscribe_coordinates();
  return ` <div id="p5" class="svelte-19ztf50">${validate_component(P5, "P5").$$render($$result, { sketch }, {}, {})} </div>`;
});
const css$1 = {
  code: ":root{--translate-x:0rem;--translate-y:1.5rem;--scale:1.25;--rotate:0deg}#logo.svelte-1d4vnhy{z-index:4;width:12rem !important;height:auto !important;position:fixed;top:-2rem;left:.5rem;transition:all 0.3s ease;opacity:1;animation:svelte-1d4vnhy-enter 0.2s forwards;cursor:pointer}.inner.svelte-1d4vnhy{stroke:rgba(255, 255, 255, 0) !important}.outer.svelte-1d4vnhy{stroke:rgb(calc(50 + 200 * var(--dark)), calc( 50 + 200 * var(--dark)), calc( 50 + 200 * var(--dark))) !important;stroke-width:2px !important}@keyframes svelte-1d4vnhy-enter{0%{transform:translate(-12rem, var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));filter:blur(5px)}25%{filter:blur(3px)}75%{filter:blur(2px)}100%{transform:translate(var(--translate-x), var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));filter:blur(0px)}}@keyframes svelte-1d4vnhy-exit{0%{transform:translate(var(--translate-x), var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));filter:blur(0px)}25%{filter:blur(1px)}75%{filter:blur(3px)}100%{transform:translate(-12rem, var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));filter:blur(0px)}}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  return `<svg viewBox="0 0 128 64" version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="svelte-1d4vnhy"><defs id="defs2"></defs><g id="g3731" style="display:inline"><path id="path7580" class="outer svelte-1d4vnhy" style="display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none" d="M 47.28361,31.850835 A 15.432775,15.432775 0 0 1 31.850835,47.28361 15.432775,15.432775 0 0 1 16.41806,31.850835 15.432775,15.432775 0 0 1 31.850835,16.41806 15.432775,15.432775 0 0 1 47.28361,31.850835 Z"></path><path id="path3725" class="inner svelte-1d4vnhy" style="display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1" d="M 47.432775,32 A 15.432775,15.432775 0 0 1 32,47.432775 15.432775,15.432775 0 0 1 16.567225,32 15.432775,15.432775 0 0 1 32,16.567225 15.432775,15.432775 0 0 1 47.432775,32 Z"></path><path id="path1183-1" class="outer svelte-1d4vnhy" style="display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none" d="M 82.283612,31.850835 A 15.432775,15.432775 0 0 1 66.850837,47.28361 15.432775,15.432775 0 0 1 51.418062,31.850835 15.432775,15.432775 0 0 1 66.850837,16.41806 15.432775,15.432775 0 0 1 82.283612,31.850835 Z"></path><path id="path3727" class="inner svelte-1d4vnhy" style="display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1" d="M 82.432775,32 A 15.432775,15.432775 0 0 1 67,47.432775 15.432775,15.432775 0 0 1 51.567225,32 15.432775,15.432775 0 0 1 67,16.567225 15.432775,15.432775 0 0 1 82.432775,32 Z"></path><path id="path2113" class="outer svelte-1d4vnhy" style="display:inline;fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:2.64583;stroke-dasharray:none;stroke-opacity:1" d="m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z" transform="matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)"></path><path id="path3729" class="inner svelte-1d4vnhy" style="display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.05833;stroke-dasharray:none;stroke-opacity:1" d="m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z" transform="matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)"></path></g></svg>`;
});
const css = {
  code: "#wrapper.svelte-1hygrvz{position:absolute !important;top:0%;left:calc(0% + var(--indent_ui));width:calc(100vw - var(--indent_ui)) !important;height:100%;transition:all 0.33s ease-in-out;z-index:5}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gui_menu, $$unsubscribe_gui_menu;
  let $gui_outline, $$unsubscribe_gui_outline;
  let $gui_carousel, $$unsubscribe_gui_carousel;
  let $gui_motion, $$unsubscribe_gui_motion;
  let $gui_angle, $$unsubscribe_gui_angle;
  $$unsubscribe_gui_menu = subscribe(gui_menu, (value) => $gui_menu = value);
  $$unsubscribe_gui_outline = subscribe(gui_outline, (value) => $gui_outline = value);
  $$unsubscribe_gui_carousel = subscribe(gui_carousel, (value) => $gui_carousel = value);
  $$unsubscribe_gui_motion = subscribe(gui_motion, (value) => $gui_motion = value);
  $$unsubscribe_gui_angle = subscribe(gui_angle, (value) => $gui_angle = value);
  let t;
  transitioned.subscribe(($transitioned) => {
    t = $transitioned;
  });
  let index = 0;
  let scrollThreshold = 70;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<header data-svelte-h="svelte-1wc0ii"><title>Omar Ouldali</title>     <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="description" content="Omar Ouldali's developer, motion design, and game design portfolio"> <link rel="icon" type="image/x-icon" href="/favicon.ico">  <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:wght@300;400;700;900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"> <link href="/fonts/proximanova.otf" rel="stylesheet">  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"> <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script> <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"> <link rel="stylesheet" href="/style/style.css">  <script src="https://cdn.jsdelivr.net/gh/CodingTrain/QuadTree/quadtree.js"><\/script> </header>    ${validate_component(Sketch2, "Sketch2").$$render(
      $$result,
      { index },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Manager, "Manager").$$render($$result, {}, {}, {
      main: () => {
        return `<div slot="main" id="wrapper" style="z-index: 0;" class="svelte-1hygrvz">${validate_component(Logo, "Logo").$$render(
          $$result,
          { index },
          {
            index: ($$value) => {
              index = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Menu, "Menu").$$render(
          $$result,
          {
            index,
            type: $gui_menu,
            outline: $gui_outline
          },
          {
            index: ($$value) => {
              index = $$value;
              $$settled = false;
            },
            type: ($$value) => {
              $gui_menu = $$value;
              $$settled = false;
            },
            outline: ($$value) => {
              $gui_outline = $$value;
              $$settled = false;
            }
          },
          {}
        )}  ${validate_component(Profile, "Profile").$$render(
          $$result,
          { index },
          {
            index: ($$value) => {
              index = $$value;
              $$settled = false;
            }
          },
          {}
        )}     ${index != 3 ? `${validate_component(Items, "Items").$$render(
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
        )} ` : `${t && $gui_carousel === "stack" ? `${validate_component(CarouselStack, "CarouselStack").$$render(
          $$result,
          { motion: $gui_motion },
          {
            motion: ($$value) => {
              $gui_motion = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${t ? `${validate_component(CarouselCube, "CarouselCube").$$render(
          $$result,
          {
            direction: $gui_angle,
            motion: $gui_motion,
            cardtype: $gui_carousel
          },
          {
            direction: ($$value) => {
              $gui_angle = $$value;
              $$settled = false;
            },
            motion: ($$value) => {
              $gui_motion = $$value;
              $$settled = false;
            },
            cardtype: ($$value) => {
              $gui_carousel = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}`}`}</div>`;
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
  $$unsubscribe_gui_menu();
  $$unsubscribe_gui_outline();
  $$unsubscribe_gui_carousel();
  $$unsubscribe_gui_motion();
  $$unsubscribe_gui_angle();
  return $$rendered;
});
export {
  Page as default
};
