import { c as create_ssr_component, b as add_attribute, d as each, e as escape, a as subscribe, v as validate_component, n as null_to_empty, f as createEventDispatcher, h as set_store_value } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "acorn";
import { x } from "code-red";
import { fork } from "css-tree";
import { Delim, Ident, RightParenthesis, Colon, Function as Function$1, Dimension, Number as Number$1, EOF, WhiteSpace, LeftCurlyBracket, LeftParenthesis, Comment } from "css-tree/tokenizer";
import "estree-walker";
import "locate-character";
import "is-reference";
import "periscopic";
import { roles, elementRoles } from "aria-query";
import { AXObjects, elementAXObjects } from "axobject-query";
import "@ampproject/remapping";
import "@jridgewell/trace-mapping";
import "@jridgewell/sourcemap-codec";
import { throttle } from "lodash-es";
import "markdown-it";
const css$c = {
  code: ":root{--black:#121212;--white:#faf5f5;--yellow:rgb(249, 223, 77);--dist:-16rem;--ang:-18deg;--ang_start:0deg;--ang_img:-33deg;--dist_img:-13rem;--indent_ui:0rem;--isindent:0deg;--vidy:1rem;--vidx:0rem}",
  map: '{"version":3,"file":"Manager.svelte","sources":["Manager.svelte"],"sourcesContent":["<script lang=ts>import { onMount } from \\"svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nlet loaded;\\nloaded = false;\\nfunction showPage() {\\n  loaded = true;\\n}\\nonMount(() => {\\n  if (document.readyState === \\"complete\\") {\\n    showPage();\\n  } else {\\n    window.addEventListener(\\"load\\", showPage);\\n    return () => window.removeEventListener(\\"load\\", showPage);\\n  }\\n});\\n<\/script>\\n\\n{#if loaded}\\n    <!------ MAIN CONTENT ------>\\n    <transition in={true} out={false} transition:fade={{delay:0}}>\\n        <slot name=\\"main\\"> </slot>\\n    </transition>\\n{:else}\\n    <!------ LOADING SCREEN ------>\\n    <transition in={true} out={false} transition:fade={{delay:0}}>\\n        <slot name=\\"loader\\"> </slot>\\n        <slot name=\\"bs\\"> </slot>\\n    </transition>\\n{/if}\\n\\n<style>\\n    :root {\\n        --black: #121212;\\n        --white: #faf5f5;\\n        --yellow: rgb(249, 223, 77);\\n        --dist: -16rem;\\n        --ang: -18deg;\\n        --ang_start: 0deg;\\n        --ang_img: -33deg;\\n        --dist_img: -13rem;\\n        --indent_ui: 0rem;\\n        --isindent: 0deg;\\n        --vidy : 1rem;\\n        --vidx : 0rem;\\n    }\\n</style>"],"names":[],"mappings":"AA+BI,KAAM,CACF,OAAO,CAAE,OAAO,CAChB,OAAO,CAAE,OAAO,CAChB,QAAQ,CAAE,iBAAiB,CAC3B,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,MAAM,CACb,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAG,IAAI,CACb,MAAM,CAAG,IACb"}'
};
const Manager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loaded;
  loaded = false;
  $$result.css.add(css$c);
  return `${loaded ? ` <transition${add_attribute("in", true, 0)}${add_attribute("out", false, 0)}>${slots.main ? slots.main({}) : ` `}</transition>` : ` <transition${add_attribute("in", true, 0)}${add_attribute("out", false, 0)}>${slots.loader ? slots.loader({}) : ` `} ${slots.bs ? slots.bs({}) : ` `}</transition>`}`;
});
const currentItem = writable(0);
const transitioned = writable(false);
const delta = writable(0);
const spinDelta = writable(0);
const gui_carousel = writable("minimal");
const gui_menu = writable("menu");
const gui_outline = writable("nooutline");
const coordinates = writable([
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 }
]);
const constellated = writable(false);
const constellation_index = writable(0);
const profile_index = writable(0);
function rescale(nbr, inMin, inMax, outMin, outMax) {
  return (nbr - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
const contents = [
  {
    "title": "My Website",
    "thumbnail": {
      "src": "/media/icons/icon.svg",
      "type": "image"
    },
    "alt": "portfolio thumbnail",
    "category": "Web Project",
    "tech": "HTML, CSS, JavaScript, React, Next.js",
    "description": "<p>This website has become a playground for new ideas. Come back in another two weeks to find components and new ones taking their place. I rewrote this website at least 3 times. The first time I wasn’t designing with mobile in mind and I made things pretty for the sake of it. The second time instead of giving up old components and throwing them in the bin I forcefully integrated them into a design that wasn’t accommodating the type of information I was showcasing on the website. The third time I rewrote everything from scratch using a new framework to ensure I wasn’t going to get lazy and recycle code. I identified parts that didn’t fit in and put them in the bin–no mercy. I tried to keep the website minimal while integrating cool interactions that showcased my interest in data visualization and design. While I think the final result is satisfactory on large screens, the mobile version really suffers from a lack of foresight in certain sections. I think that for now I will leave it as it is until I do my fourth and final rewrite.</p><br><h4>Design:</h4><p>Colors: I wanted to fully explore how to direct a user’s attention and visually achieve a hierarchy of information with only two colors. It was fun to see how far you could push a monochrome design using subtle variations in fonts and the stark contrast between black and white.</p><br><p>Customizability: I know I change my mind <i>a lot</i> so I implemented a GUI to customize the layout and colors of my website for when I have more time. It’s very minimal (read: ugly) so I did not make it available to the user (you can still find the component on the GitHub and implement it fairly easily though).</p><br><p>Skill section scroll: Guilty. It is gratuitous. I acknowledge it. but I wanted to treat this website as a playground for new ideas.</p><br><p>Layout: I wanted to experiment with designs that put the navigation in the center and the information on the left while leaving the right as breathing space for the user. The inspiration for the layout came from my experience designing video game UIs and I wanted to see how effective the flow would be in a different medium like a web app.</p><br><h4>Typewriter:</h4><p>This would have been a little challenging to implement if I hadn’t programmed this effect before for another project. The code can be found on my GitHub.</p><br><h4>Mobile:</h4><p>After a lot of creative deliberation to try to fit my constellation model into a mobile layout I finally admitted to myself that the interaction wasn't going to make mobile devices. I hadn't designed it with mobile interactions in mind and I should think about that initially for my next project. So I removed the constellation model entirely and created a separate mobile version of the website. I thought this approach would provide a more seamless user experience without the need for forced gimmicks in the name of aesthetics.</p>",
    "media": [
      {
        "src": "/media/thumbnails/personal_website_media.webp",
        "type": "image"
      }
    ]
  },
  {
    "title": "4ELE",
    "thumbnail": {
      "src": "/media/thumbnails/rps.webp",
      "type": "image"
    },
    "alt": "ML Rock Paper Scissors video",
    "category": "Web Project",
    "tech": "ml5.js, p5.js, Teachable Machine",
    "description": "<p><strong>4ELE</strong> is a small project I started as a way to tinker around with Google's Teachable Machine. The game uses image recognition input from the camera in a turn-by-turn rock-paper-scissors-like battle against the computer.</p><br><h4>Model:</h4><p>I started with creating a large dataset by uploading thousands of photos I took of hand signs under different angles and positions with different light exposition. Then I trained the machine learning model based on Google's 'Teachable Machine' by tweaking the parameters until I was satisfied with its success rate. I’m pretty satisfied with this first prototype and I'll probably work on it a bit more in the future to piece up something bigger.</p><br><h4>Art:</h4><p>The art was a combination of hand-drawn pixel art and AI-generated art. First I drew an enemy sprite and skill icons myself in approximations. Then I fed these to DALL-E and asked it to generate icons in the same style until I was satisfied with the result. I drew the animations myself frame-by-frame on Aseprite since dall-E wasn’t as good at generating spritesheet animations.</p><br><h4>Web port:</h4><p>First I made a proof-of-concept draft using p5.js and ml5 then proceeded to port the code to a more generalized javascript format. It was easy to choose a framework for this project: SvelteKit is really good at deploying SPAs and there are plenty of easy-to-pick-up Frontend libraries compatible with it. I used SkeletonUI and TailwindCSS and built most of the UI using components from these libraries which allowed me to allocate more of my time to the more functional aspects of the code.</p>",
    "media": [
      {
        "src": "/media/thumbnails/rps_media.webp",
        "type": "image"
      }
    ]
  },
  {
    "title": "Reccie",
    "thumbnail": {
      "src": "/media/thumbnails/bw/4e.webp",
      "type": "image"
    },
    "alt": "Reccie video",
    "category": "Web Project",
    "tech": "p5.js",
    "description": "<h4>Data gathering:</h4><p>Data gathering was straightforward. I made a Google form with direct questions on how people felt about a list of movies and TV shows then sent it to people in my friend groups to fill it out. Respondents would have to pick between “liked” “haven’t watched” and “did not like” which were processed into 1, 0, -1 for the purpose of calculating similarity scores between users.</p><br><h4>Algorithm:</h4><p>I really like the idea of collaborative filtering. The approach is very close to how people in real life care about recommendations. Individuals often give more weight to recommenders who have similar tastes in movies or music or even books. This type of weight attribution transcends a single medium which is what makes it so versatile; We can recommend TV shows based on music taste or movies based on favorite books it doesn’t matter that these media forms don’t have common characteristics the patterns will still be identified just by matching users who think like other users. The math is done for us by other people’s brains no need for a complex data-set! Although the algorithm doesn’t scale very well and it suffers from a cold start problem, neither is a problem since my dataset is a static dataset that has already been filled on GForms.</p><br><h4>Design:</h4><p>I recently bought a yellow phone case for my iPhone and thought the black phone in a yellow case was a pretty cool look. So I experimented a bit to see how it would look on this web app.</p>",
    "media": [
      {
        "src": "/media/thumbnails/reccie_media.webp",
        "type": "image"
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
    "description": "<p><strong>OFx Tunnel Maker</strong> is a desktop application I built on openFrameworks for creating tunnel visuals. Two circle equations combine to make a parametrized 3D Torus bound to a GUI that allows the user to capture the specific view and stylization of the tunnel. Inspired by that one Code Lyoko intro.</p>",
    "media": [
      {
        "src": "/media/thumbnails/tunnel_media.webp",
        "type": "image"
      }
    ]
  },
  {
    "title": "Algo Art",
    "thumbnail": {
      "src": "/media/animated/art_docu.mp4",
      "type": "video"
    },
    "alt": "Algorithm Art video",
    "category": "Generative Art",
    "tech": "Processing, Unity, openFrameworks",
    "description": "<p><strong>Algo Art</strong> is a collection of projects that include:</p><br><ul><li><strong>OS GIFs:</strong> OS GIFs (open-source GIFs) was my Interactive Media Capstone Project. The gallery is a collection of artistic experiments exploring the processes behind algorithmic art in an attempt to redefine what 'open-source' means. This redefinition is essential in a time where the term is thrown around loosely when often we can see code but not understand or access it optimally. After all, is code truly open source if I can read it without understanding? Some of the art breaks down its own algorithm into smaller chunks and processes that it visualizes, while others take the 'open-source' literally by showing the code as it is typed.</li><br><li><strong>Algo Gallery:</strong> Visualizations of algorithms using openFrameworks (C++), Unity (C#), and Processing (Java). I experimented with 3D matrix transformations for computer graphics, visualized Conway's Game Of Life, spiral array traversal, and implemented motion blur effect and ripple effect through pixel displacement and filtering.</li><br><li><strong>NYU Algorave:</strong> Music and visuals generated via live-compiled code and synchronized dynamically. The first piece was a solo project where I used Hydra, a live-coding environment for video and shader synthesis, and TidalCycles, a live-coding environment for algorithmic patterns, which, when combined with sound samples, can generate music algorithmically. In the second project, I collaborated with two other coders to incorporate more complex shader control (via GLSL) and dynamic visuals (via p5.js) into the project. The final piece was performed live in front of an audience at NYU.</li></ul>",
    "media": [
      {
        "src": "/media/thumbnails/algo_art_media.webp",
        "type": "image"
      }
    ]
  },
  {
    "title": "postcARds",
    "thumbnail": {
      "src": "/media/thumbnails/bw/postcards.webp",
      "type": "image"
    },
    "alt": "postcARds image",
    "category": "AR App",
    "tech": "Unity, C#",
    "description": "<p><strong>postcARds</strong> is an augmented reality app built to interact with the commercial postcards at Museum für Kommunikation in Berlin. The app was developed and deployed with my team at NYU as part of a commission by the museum. It utilized Unity's ARCore and ARKit environments for raycasting to edit the postcards using the phone's camera, and save the customized versions of the postcards into the visitor's portable devices.</p><br><h4>Organization and workflow:</h4><p>We were a team of three: Shahad took the project-manager role, managing task lists, deadlines, presentations, and communication with the client. Matthew handled the raytracing setup for touch interaction, while I focused on coding the interface and user interactions using Matthew’s ray tracing.</p>",
    "media": [
      {
        "src": "/media/thumbnails/postcards_media.webp",
        "type": "image"
      }
    ]
  },
  {
    "title": "Mad Socks",
    "thumbnail": {
      "src": "/media/thumbnails/bw/madsocks.webp",
      "type": "image"
    },
    "alt": "Mad Socks image",
    "category": "Game",
    "tech": "Unity, C#",
    "description": "<p><strong>Mad Socks</strong> is a game developed during the 2021 Global Game Jam. I teamed up with six friends and was in charge of Game Design, Story, and Programming. The game was created within 3 sleepless nights and was nominated for the Best Game Design and Best Art Direction award. The game features an incremental linear narrative about socks getting sucked into the washing machine world and a local multiplayer 2D top-down game where players race to find their sister-sock in a procedurally generated maze before time runs out, at which point the washing machine runs and both players' controls are randomized.</p>",
    "media": [
      {
        "src": "/media/thumbnails/madsocks_media.webp",
        "type": "image"
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
    "description": "<p><strong>Switch</strong> is a small game developed using GMS2. The challenge of this project was to use only two colors, no shading, and no lighting. I opted for black and white, making color-switching part of the gameplay to enhance cohesion. The game is a 2D platformer multiplayer game where two players wrestle to get the ball into their opponent's net. Every time a player touches the ball, the background switches to their color, making it impossible for the player controlling the ball to distinguish their character as it blends into the environment, save for a small pair of eyes that contrast with the background.</p>",
    "media": [
      {
        "src": "/media/thumbnails/switch_media.webp",
        "type": "image"
      }
    ]
  }
];
const css$b = {
  code: '.outline.svelte-7h6tkm.svelte-7h6tkm{border:solid 1px var(--accent2) !important}.nooutline.svelte-7h6tkm.svelte-7h6tkm{border:none !important}@keyframes svelte-7h6tkm-exit{0%{transform:translateY(0);filter:blur(0px)}25%{filter:blur(3px)}75%{filter:blur(5px)}100%{transform:translateY(-20rem);filter:blur(0px)}}@keyframes svelte-7h6tkm-enter{0%{transform:translateY(-20rem);opacity:0}25%{filter:blur(2.5px);opacity:0.3}75%{filter:blur(1.5px);opacity:0.5}100%{transform:translateY(0);filter:blur(0px);opacity:1}}.up.svelte-7h6tkm.svelte-7h6tkm{animation:svelte-7h6tkm-exit 0.4s forwards !important}a.svelte-7h6tkm.svelte-7h6tkm{all:unset;cursor:pointer;transition:font 0.17s !important}.links.svelte-7h6tkm.svelte-7h6tkm{z-index:3;position:fixed;display:flex;top:0%;right:1%;transition:all 0.3s;animation:svelte-7h6tkm-enter 0.4s forwards}.links.svelte-7h6tkm a.svelte-7h6tkm{all:unset;position:relative;width:fit-content;margin:0.3rem;cursor:pointer}.links.svelte-7h6tkm img.svelte-7h6tkm{display:inline;width:3rem;transition:width 0.17s ease-in, background-color 0.11s;filter:invert(var(--dark))}.links.svelte-7h6tkm a.svelte-7h6tkm::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0);border-radius:100%;transition:width 0.17s ease-in, background-color 0.11s}.links.svelte-7h6tkm a.svelte-7h6tkm:hover::after{background-color:var(--white)}.links.svelte-7h6tkm a.svelte-7h6tkm:focus::after{background-color:var(--white)}.indented.svelte-7h6tkm.svelte-7h6tkm{left:85% !important}.menu2.svelte-7h6tkm.svelte-7h6tkm{bottom:calc(10%);top:auto;position:fixed !important;width:100%;text-align:center;opacity:1;transition:all 0.36s ease-in-out;list-style-type:none;z-index:2 !important}.menu2-item.svelte-7h6tkm.svelte-7h6tkm{height:auto;all:unset;cursor:pointer;display:inline;width:8rem;position:relative ;opacity:1;color:var(--accent2);;;text-shadow:1px 1px #ffffff28;transition:transform  0.13s ease-in-out, background-color 0.11s;margin-bottom:0.5rem;text-decoration:none;font-size:1.1rem;border:solid 1px var(--accent2);;;margin-right:1.5rem}.menu2-item.svelte-7h6tkm.svelte-7h6tkm:hover{text-shadow:none;transform:scale(1.09);border:solid 1px var(--white);;;background-color:var(--white);;;color:var(--black)}.menu.svelte-7h6tkm.svelte-7h6tkm{left:calc(50% + 6.3rem);top:calc(50% - 4rem);position:fixed !important;width:8rem;width:auto;text-align:center;opacity:1;transition:all 0.36s ease-in-out;list-style-type:none;z-index:2;overflow:hidden;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.menu-item.svelte-7h6tkm.svelte-7h6tkm{height:auto;all:unset;cursor:pointer;display:block;width:8rem;position:relative ;opacity:1;color:var(--white);text-shadow:2px 2px 2px #00000028;transition:transform  0.13s ease-in-out;margin-bottom:0.25rem;text-decoration:none;font-size:1.1rem}.menu-item.svelte-7h6tkm.svelte-7h6tkm:hover{transform:scale(1.15);background-color:var(--accent2);text-shadow:1px 1px #ffffff39;color:var(--black)}.selected.svelte-7h6tkm.svelte-7h6tkm{transform:scale(1.15);background-color:var(--white);text-shadow:1px 1px #ffffff39;color:var(--black)}@media(max-width: 576px){.menu.svelte-7h6tkm.svelte-7h6tkm{left:calc(50% + 3rem);top:calc(50% - 4rem);width:auto;overflow:visible}.indented.svelte-7h6tkm.svelte-7h6tkm{left:105% !important}}@media(max-width: 400px){.menu.svelte-7h6tkm.svelte-7h6tkm{bottom:0%;top:auto;left:0%}.indented.svelte-7h6tkm.svelte-7h6tkm{left:0 !important;bottom:-25% !important}.menu-item.svelte-7h6tkm.svelte-7h6tkm{font-size:2vh;width:7rem}.links.svelte-7h6tkm img.svelte-7h6tkm{width:2.5rem;margin:0rem}}@media(max-width: 341px){.menu.svelte-7h6tkm.svelte-7h6tkm{bottom:0% !important;right:0% !important;left:auto !important}.menu-item.svelte-7h6tkm.svelte-7h6tkm{font-size:0.8rem;width:7rem}.links.svelte-7h6tkm img.svelte-7h6tkm{width:2rem}.links.svelte-7h6tkm.svelte-7h6tkm{width:3rem;top:0%;right:-3%}}',
  map: '{"version":3,"file":"Menu.svelte","sources":["Menu.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let index = 0;\\nexport let type = \\"menu2\\";\\nexport let outline = \\"nooutline\\";\\nlet type2 = `${type}-item`;\\nimport { currentItem, transitioned } from \\"../stores\\";\\nimport { updateTag } from \\"../scripts/functions\\";\\nimport { slide, fade, scale } from \\"svelte/transition\\";\\nlet items = [\\"home\\", \\"about\\", \\"skills\\", \\"projects\\"];\\nlet links = [\\n  { src: `/media/icons/github.svg`, alt: `github icon`, link: `https://github.com/soablackwhite` },\\n  { src: `/media/icons/linkedin.svg`, alt: `linkedin icon`, link: `https://www.linkedin.com/in/omarouldali/` },\\n  { src: `/media/icons/twitter.svg`, alt: `twitter icon`, link: `https://twitter.com/noiseOmie` },\\n  { src: `/media/icons/mail.svg`, alt: `mail icon`, link: `mailto:ooa278@nyu.edu` }\\n];\\nlet rt = document.querySelector(\\":root\\");\\nlet t;\\ntransitioned.subscribe((value) => {\\n  t = value;\\n});\\nlet cur;\\ncurrentItem.subscribe((value) => {\\n  cur = value;\\n});\\nfunction changeIndex(n) {\\n  if (index === 3 && n != index) {\\n    transitioned.set(false);\\n  }\\n  index = n;\\n  currentItem.set(0);\\n  updateTag(index, cur, 0, rt, 0);\\n  const active = document.activeElement;\\n  if (active) {\\n    active.blur();\\n  }\\n}\\n<\/script>\\n<!-- MENU TRANSITION -->\\n<!-- used to have ui as class of menu -->\\n<div class=\\"gui\\">\\n    {#if type === \\"menu\\"}\\n        <div class=\\"menu\\" transition:slide>\\n            {#each items as item, i}\\n                <button class=\\"menu-item {outline}\\" class:selected={index === i} on:click={ ()=> changeIndex(i)}> {item} </button>\\n            {/each}\\n        </div>\\n    {:else}\\n        <div class=\\"menu2\\" transition:slide>\\n            {#each items as item, i}\\n                <button class=\\"menu2-item {outline}\\" class:selected={index === i} on:click={ ()=> changeIndex(i)}> {item} </button>\\n            {/each}\\n        </div>\\n    {/if}\\n    <!-- LINKS & SOCIALS -->\\n    <div class=\\"links {(index===3) ? \\"\\" : \\"\\" }\\">\\n        {#each links as link, i}\\n                <!-- <button> -->\\n                    <a href={link.link} tabindex={i} target=\\"_blank\\" rel=\\"noreferrer nofollow\\"><img alt={link.alt} src={link.src}></a>\\n                <!-- </button> -->\\n        {/each}\\n    </div>\\n</div>\\n\\n\\n<style>\\n    /* gui modifiable */\\n    .outline{\\n        border: solid 1px var(--accent2) !important;\\n    }\\n    .nooutline{\\n        border: none !important;\\n    }\\n    /*___________________________________________LINKS/ICONS__________________________________________*/\\n    @keyframes exit {\\n        0% {\\n            transform: translateY(0);\\n            filter: blur(0px);\\n        }\\n        25% {\\n            filter: blur(3px);\\n        }\\n        75% {\\n            filter: blur(5px);\\n        }\\n        100% {\\n            transform: translateY(-20rem); \\n            filter: blur(0px);\\n        }\\n    }\\n    @keyframes enter {\\n        0% {\\n            transform: translateY(-20rem);\\n            opacity: 0;\\n        }\\n        25% {\\n            filter: blur(2.5px);\\n            opacity: 0.3;\\n        }\\n        75% {\\n            filter: blur(1.5px);\\n            opacity: 0.5;\\n        }\\n        100% {\\n            transform: translateY(0);\\n            filter: blur(0px);\\n            opacity: 1;\\n        }\\n    }\\n    .up{\\n        animation: exit 0.4s forwards !important;\\n    }\\n    a {\\n        all: unset;\\n        cursor: pointer;\\n        transition: font 0.17s !important;\\n    }\\n    .links{\\n        z-index: 3;\\n        position: fixed;\\n        display: flex;\\n        top: 0%;\\n        right: 1%;\\n        transition: all 0.3s;\\n        animation: enter 0.4s forwards;\\n        /* width: 15rem; */\\n    }\\n    .links a {\\n        all: unset;\\n        position: relative;\\n        width: fit-content;\\n        margin: 0.3rem;\\n        cursor: pointer;\\n    }\\n    .links img {\\n        display: inline;\\n        width: 3rem;\\n        transition: width 0.17s ease-in, background-color 0.11s;\\n        filter: invert(var(--dark));\\n    }\\n    .links a::after { /* overlay */\\n        content: \\"\\";\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        width: 100%;\\n        height: 100%;\\n        background-color: rgba(0, 0, 0, 0);\\n        border-radius: 100%;\\n        transition: width 0.17s ease-in, background-color 0.11s;\\n    }\\n    .links a:hover::after {\\n        background-color: var(--white); /* overlay color */\\n    }\\n    .links a:focus::after {\\n        background-color: var(--white);\\n    }\\n    /*___________________________________________MENU__________________________________________*/\\n    .indented{\\n        left: 85% !important;\\n    }\\n    .menu2 {\\n        bottom: calc(10%); \\n        top: auto;\\n        position: fixed !important;\\n        width: 100%;\\n        text-align: center;\\n        opacity : 1;\\n        transition: all 0.36s ease-in-out;\\n        list-style-type: none;\\n        z-index: 2 !important;\\n        \\n    }\\n    .menu2-item{\\n        height: auto;\\n        all: unset;\\n        cursor: pointer;\\n        display: inline;\\n        width: 8rem;\\n        position: relative ;\\n        /* position: static; */\\n        opacity: 1;\\n        color: var(--accent2);;\\n        text-shadow: 1px 1px #ffffff28;\\n        transition: transform  0.13s ease-in-out, background-color 0.11s;\\n        margin-bottom: 0.5rem;\\n        text-decoration: none;\\n        font-size: 1.1rem;\\n        border: solid 1px var(--accent2);;\\n        margin-right: 1.5rem;\\n    }\\n    .menu2-item:hover{\\n        text-shadow: none;\\n        transform: scale(1.09);\\n        border: solid 1px var(--white);;\\n        background-color: var(--white);;\\n        color: var(--black);\\n    }\\n    .menu {\\n        left: calc(50% + 6.3rem);\\n        top: calc(50% - 4rem);\\n        position: fixed !important;\\n        width: 8rem;\\n        width: auto;\\n        text-align: center;\\n        opacity : 1;\\n        transition: all 0.36s ease-in-out;\\n        list-style-type: none;\\n        z-index: 2;\\n        overflow: hidden;\\n        user-select: none;\\n        -moz-user-select: none;\\n        -khtml-user-select: none;\\n        -webkit-user-select: none;\\n        -o-user-select: none;\\n    }\\n    .menu-item{\\n        height: auto;\\n        all: unset;\\n        cursor: pointer;\\n        display: block;\\n        width: 8rem;\\n        /* use this for \\"playground\\" */\\n        /* padding-right: 1rem;  */\\n        position: relative ;\\n        opacity: 1;\\n        color: var(--white);\\n        text-shadow: 2px 2px 2px #00000028;\\n        transition: transform  0.13s ease-in-out;\\n        margin-bottom: 0.25rem; /* was 0.5 rem */\\n        text-decoration: none;\\n        font-size: 1.1rem;\\n    }\\n    .menu-item:hover{\\n        transform: scale(1.15);\\n        background-color: var(--accent2);\\n        text-shadow: 1px 1px #ffffff39;\\n        color: var(--black);\\n    }\\n    .selected{\\n        transform: scale(1.15);\\n        background-color: var(--white);\\n        text-shadow: 1px 1px #ffffff39;\\n        color: var(--black);\\n    }\\n    @media(max-width: 576px){\\n        .menu{\\n            left: calc(50% + 3rem); \\n            top: calc(50% - 4rem);\\n            width: auto;\\n            overflow: visible;\\n        }\\n        .indented{\\n            left: 105% !important;\\n        }\\n    }\\n    @media (max-width: 400px){\\n        .menu{\\n            bottom: 0%;\\n            top: auto;\\n            left: 0%;\\n        }\\n        .indented{\\n            left:0 !important;\\n            bottom: -25% !important;\\n        }\\n        .menu-item{\\n            font-size: 2vh;\\n            width: 7rem;\\n        }\\n        .links img{\\n            width: 2.5rem;\\n            margin: 0rem;\\n        }   \\n    }\\n    @media (max-width: 341px) {\\n        .menu{\\n            bottom: 0% !important;\\n            right: 0% !important;\\n            left: auto !important;\\n        }\\n        .menu-item{\\n            font-size: 0.8rem;\\n            width: 7rem;\\n        }\\n        .links img{\\n            width: 2rem;\\n        }\\n        .links{\\n            width: 3rem;\\n            top: 0%;\\n            right: -3%;\\n        }\\n    }   \\n</style>"],"names":[],"mappings":"AAiEI,oCAAQ,CACJ,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,SAAS,CAAC,CAAC,UACrC,CACA,sCAAU,CACN,MAAM,CAAE,IAAI,CAAC,UACjB,CAEA,WAAW,kBAAK,CACZ,EAAG,CACC,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,MAAM,CAAE,KAAK,GAAG,CACpB,CACA,GAAI,CACA,MAAM,CAAE,KAAK,GAAG,CACpB,CACA,GAAI,CACA,MAAM,CAAE,KAAK,GAAG,CACpB,CACA,IAAK,CACD,SAAS,CAAE,WAAW,MAAM,CAAC,CAC7B,MAAM,CAAE,KAAK,GAAG,CACpB,CACJ,CACA,WAAW,mBAAM,CACb,EAAG,CACC,SAAS,CAAE,WAAW,MAAM,CAAC,CAC7B,OAAO,CAAE,CACb,CACA,GAAI,CACA,MAAM,CAAE,KAAK,KAAK,CAAC,CACnB,OAAO,CAAE,GACb,CACA,GAAI,CACA,MAAM,CAAE,KAAK,KAAK,CAAC,CACnB,OAAO,CAAE,GACb,CACA,IAAK,CACD,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,MAAM,CAAE,KAAK,GAAG,CAAC,CACjB,OAAO,CAAE,CACb,CACJ,CACA,+BAAG,CACC,SAAS,CAAE,kBAAI,CAAC,IAAI,CAAC,QAAQ,CAAC,UAClC,CACA,6BAAE,CACE,GAAG,CAAE,KAAK,CACV,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,CAAC,KAAK,CAAC,UAC3B,CACA,kCAAM,CACF,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,EAAE,CACP,KAAK,CAAE,EAAE,CACT,UAAU,CAAE,GAAG,CAAC,IAAI,CACpB,SAAS,CAAE,mBAAK,CAAC,IAAI,CAAC,QAE1B,CACA,oBAAM,CAAC,eAAE,CACL,GAAG,CAAE,KAAK,CACV,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,WAAW,CAClB,MAAM,CAAE,MAAM,CACd,MAAM,CAAE,OACZ,CACA,oBAAM,CAAC,iBAAI,CACP,OAAO,CAAE,MAAM,CACf,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,OAAO,CAAC,CAAC,gBAAgB,CAAC,KAAK,CACvD,MAAM,CAAE,OAAO,IAAI,MAAM,CAAC,CAC9B,CACA,oBAAM,CAAC,eAAC,OAAQ,CACZ,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAClC,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,OAAO,CAAC,CAAC,gBAAgB,CAAC,KACtD,CACA,oBAAM,CAAC,eAAC,MAAM,OAAQ,CAClB,gBAAgB,CAAE,IAAI,OAAO,CACjC,CACA,oBAAM,CAAC,eAAC,MAAM,OAAQ,CAClB,gBAAgB,CAAE,IAAI,OAAO,CACjC,CAEA,qCAAS,CACL,IAAI,CAAE,GAAG,CAAC,UACd,CACA,kCAAO,CACH,MAAM,CAAE,KAAK,GAAG,CAAC,CACjB,GAAG,CAAE,IAAI,CACT,QAAQ,CAAE,KAAK,CAAC,UAAU,CAC1B,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,OAAO,CAAG,CAAC,CACX,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACjC,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CAAC,CAAC,UAEf,CACA,uCAAW,CACP,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,KAAK,CACV,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,MAAM,CACf,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAAC,CAEnB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,SAAS,CAAC,CAAC,CAAC,CACvB,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,SAAS,CAC9B,UAAU,CAAE,SAAS,EAAE,KAAK,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,KAAK,CAChE,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,SAAS,CAAC,CAAC,CAAC,CAClC,YAAY,CAAE,MAClB,CACA,uCAAW,MAAM,CACb,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,OAAO,CAAC,CAAC,CAAC,CAChC,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAAC,CAAC,CAChC,KAAK,CAAE,IAAI,OAAO,CACtB,CACA,iCAAM,CACF,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACxB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACrB,QAAQ,CAAE,KAAK,CAAC,UAAU,CAC1B,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,OAAO,CAAG,CAAC,CACX,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACjC,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,IAAI,CACjB,gBAAgB,CAAE,IAAI,CACtB,kBAAkB,CAAE,IAAI,CACxB,mBAAmB,CAAE,IAAI,CACzB,cAAc,CAAE,IACpB,CACA,sCAAU,CACN,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,KAAK,CACV,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CAGX,QAAQ,CAAE,QAAQ,CAAC,CACnB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,SAAS,CAClC,UAAU,CAAE,SAAS,EAAE,KAAK,CAAC,WAAW,CACxC,aAAa,CAAE,OAAO,CACtB,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,MACf,CACA,sCAAU,MAAM,CACZ,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,SAAS,CAC9B,KAAK,CAAE,IAAI,OAAO,CACtB,CACA,qCAAS,CACL,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,SAAS,CAC9B,KAAK,CAAE,IAAI,OAAO,CACtB,CACA,MAAM,YAAY,KAAK,CAAC,CACpB,iCAAK,CACD,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACtB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACrB,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,OACd,CACA,qCAAS,CACL,IAAI,CAAE,IAAI,CAAC,UACf,CACJ,CACA,MAAO,YAAY,KAAK,CAAC,CACrB,iCAAK,CACD,MAAM,CAAE,EAAE,CACV,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,EACV,CACA,qCAAS,CACL,KAAK,CAAC,CAAC,UAAU,CACjB,MAAM,CAAE,IAAI,CAAC,UACjB,CACA,sCAAU,CACN,SAAS,CAAE,GAAG,CACd,KAAK,CAAE,IACX,CACA,oBAAM,CAAC,iBAAG,CACN,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,IACZ,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,iCAAK,CACD,MAAM,CAAE,EAAE,CAAC,UAAU,CACrB,KAAK,CAAE,EAAE,CAAC,UAAU,CACpB,IAAI,CAAE,IAAI,CAAC,UACf,CACA,sCAAU,CACN,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IACX,CACA,oBAAM,CAAC,iBAAG,CACN,KAAK,CAAE,IACX,CACA,kCAAM,CACF,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,EAAE,CACP,KAAK,CAAE,GACX,CACJ"}'
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
      link: `mailto:ooa278@nyu.edu`
    }
  ];
  document.querySelector(":root");
  transitioned.subscribe((value) => {
  });
  currentItem.subscribe((value) => {
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0) $$bindings.outline(outline);
  $$result.css.add(css$b);
  return `  <div class="gui">${type === "menu" ? `<div class="menu svelte-7h6tkm">${each(items, (item, i) => {
    return `<button class="${[
      "menu-item " + escape(outline, true) + " svelte-7h6tkm",
      index === i ? "selected" : ""
    ].join(" ").trim()}">${escape(item)} </button>`;
  })}</div>` : `<div class="menu2 svelte-7h6tkm">${each(items, (item, i) => {
    return `<button class="${[
      "menu2-item " + escape(outline, true) + " svelte-7h6tkm",
      index === i ? "selected" : ""
    ].join(" ").trim()}">${escape(item)} </button>`;
  })}</div>`}  <div class="${"links " + escape(index === 3 ? "" : "", true) + " svelte-7h6tkm"}">${each(links, (link, i) => {
    return ` <a${add_attribute("href", link.link, 0)}${add_attribute("tabindex", i, 0)} target="_blank" rel="noreferrer nofollow" class="svelte-7h6tkm"><img${add_attribute("alt", link.alt, 0)}${add_attribute("src", link.src, 0)} class="svelte-7h6tkm"></a> `;
  })}</div> </div>`;
});
const css$a = {
  code: ":root{--dur:0.1s}.disappear.svelte-jo1e5s.svelte-jo1e5s{opacity:0 !important;transition:opacity 0.15s}.square.svelte-jo1e5s.svelte-jo1e5s{border-radius:2% !important;border:solid var(--white) 2px !important;transition:all var(--dur);z-index:-1 !important}.square2.svelte-jo1e5s.svelte-jo1e5s{width:var(--size) !important;height:var(--size) !important;transition:all var(--dur);z-index:-1 !important}#zoomer.svelte-jo1e5s.svelte-jo1e5s{z-index:3;border-radius:100%;width:250px;height:250px;display:flex;justify-content:center;transition:transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out}.bocconi.svelte-jo1e5s.svelte-jo1e5s{height:240px !important}.manbaa.svelte-jo1e5s.svelte-jo1e5s{height:140px !important}.nyu.svelte-jo1e5s.svelte-jo1e5s{height:170px !important}.nyuad.svelte-jo1e5s.svelte-jo1e5s{height:170px !important}.next.svelte-jo1e5s.svelte-jo1e5s{height:150px !important}.school.svelte-jo1e5s.svelte-jo1e5s{position:absolute;top:50%;left:50%;height:170px;transform:translate(-50%, -50%);transition:all var(--dur);user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}#profile.svelte-jo1e5s.svelte-jo1e5s{position:fixed;width:350px !important;bottom:0%;z-index:10;transition:all var(--dur);user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}#icon.svelte-jo1e5s.svelte-jo1e5s{width:100px;height:auto;z-index:10;transition:all var(--dur)}.image-container.svelte-jo1e5s.svelte-jo1e5s{top:calc(50%);left:50%;transform:translate(-50%, -50%);border:solid 2px var(--white);border-radius:50%;overflow:hidden;transition:transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out;z-index:3;background-color:var(--black)}.image-container.svelte-jo1e5s video.svelte-jo1e5s{position:absolute;margin:auto;top:-20%;width:300px;height:300px;object-fit:cover;transition:all 0.33s}.ui.svelte-jo1e5s.svelte-jo1e5s{position:fixed !important}@media(max-width: 576px){.image-container.svelte-jo1e5s video.svelte-jo1e5s{width:150px;height:150px}#zoomer.svelte-jo1e5s.svelte-jo1e5s{width:150px;height:150px}#profile.svelte-jo1e5s.svelte-jo1e5s{width:65px;height:auto}.bocconi.svelte-jo1e5s.svelte-jo1e5s{height:150px !important}.manbaa.svelte-jo1e5s.svelte-jo1e5s{height:100px !important}.nyu.svelte-jo1e5s.svelte-jo1e5s{height:110px !important}.nyuad.svelte-jo1e5s.svelte-jo1e5s{height:110px !important}.next.svelte-jo1e5s.svelte-jo1e5s{height:100px !important}}@media(max-width: 400px){.image-container.svelte-jo1e5s video.svelte-jo1e5s{width:175px;height:175px}.image-container.svelte-jo1e5s.svelte-jo1e5s{top:calc(50% + var(--indent_ui));left:70%}#zoomer.svelte-jo1e5s.svelte-jo1e5s{width:175px;height:175px}#profile.svelte-jo1e5s.svelte-jo1e5s{width:65px;height:auto}}@media(max-width: 341px){.image-container.svelte-jo1e5s video.svelte-jo1e5s{width:150px;height:150px}.image-container.svelte-jo1e5s.svelte-jo1e5s{top:calc(52% + var(--indent_ui));left:70%}#zoomer.svelte-jo1e5s.svelte-jo1e5s{width:150px;height:150px}#profile.svelte-jo1e5s.svelte-jo1e5s{width:65px;height:auto}}",
  map: '{"version":3,"file":"Profile.svelte","sources":["Profile.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let index;\\nimport { currentItem, transitioned, profile_index, delta, spinDelta } from \\"../stores\\";\\nimport { rescale, set_css_var } from \\"../scripts/functions\\";\\nimport { slide, fade } from \\"svelte/transition\\";\\nconst icons = [\\n  \\"/media/icons/react.svg\\",\\n  \\"/media/icons/svelte.svg\\",\\n  \\"/media/icons/bootstrap.svg\\",\\n  \\"/media/icons/js.svg\\",\\n  \\"/media/icons/c.svg\\",\\n  \\"/media/icons/cplus.svg\\",\\n  \\"/media/icons/nodejs.svg\\",\\n  \\"/media/icons/flask.svg\\",\\n  \\"/media/icons/python.svg\\",\\n  \\"/media/icons/sql.svg\\",\\n  \\"/media/icons/r.svg\\",\\n  \\"/media/icons/stata.svg\\"\\n];\\nconst profiles = [\\n  \\"/media/icons/manbaa.svg\\",\\n  \\"/media/icons/bocconi.svg\\",\\n  \\"/media/icons/nyuad.svg\\",\\n  \\"/media/icons/nyu.svg\\",\\n  \\"/media/icons/directions.svg\\"\\n];\\n$: cur = $currentItem;\\nlet typer = 0;\\nlet t1 = false;\\nlet t2 = false;\\nlet classes = [\\"manbaa\\", \\"bocconi\\", \\"nyuad\\", \\"nyu\\", \\"next\\"];\\n$: square = index === 3 ? true : false;\\n$: square2 = index === 3 ? true : false;\\n$: if (index != 3) {\\n  t1 = false;\\n  t2 = false;\\n}\\n$: transitioned.set(t1 && t2);\\n$: disappear = $transitioned;\\nfunction handleMouseOver(event) {\\n  event.target.play();\\n}\\nfunction handleMouseOut(event) {\\n  event.target.pause();\\n}\\n<\/script>\\n\\n<!-- this condition doesnt do anything for some reason lol, works with $transitioned tho -->\\n    <div class=\\"image-container ui\\" class:square class:disappear on:transitionend={()=>{if(index===3){t2 = true;}}}>\\n        <div id=\\"zoomer\\" class:square2 class:disappear role=\\"img\\" on:transitionend={()=>{if(index===3){t1 = true;}}}>\\n            {#if ( (index == 0) && $transitioned==false)}\\n                <video preload=\\"auto\\" id=\\"profile\\" playsinline muted loop\\n                    on:mouseover|preventDefault={handleMouseOver}\\n                    on:mouseout|preventDefault={handleMouseOut}\\n                    transition:fade|global={{duration:100, delay: 100}}\\n                    >\\n                    <source src=\\"/media/animated/loop.mp4\\" type=\\"video/mp4\\">\\n                    Your browser does not support the video tag.\\n                </video>\\n            {:else if ( (index == 1) && $transitioned==false)}\\n                <img alt=\\"profile\\"\\n                    class=\\"school {classes[$profile_index]}\\" \\n                    src={profiles[$profile_index]}\\n                    transition:fade|global={{duration:100, delay: 100}}\\n                />\\n            {:else if (index == 2) && $transitioned === false}\\n                <img alt=\\"profile\\" id=\\"icon\\" src={icons[cur]}\\n                    transition:fade|global={{duration:100, delay: 100}}\\n                />\\n            {/if}\\n        </div>\\n    </div>\\n\\n<style>\\n    :root{\\n        --dur: 0.1s;\\n    }\\n    .disappear{\\n        opacity: 0 !important;\\n        transition: opacity 0.15s;\\n    }\\n    .square{\\n        border-radius: 2% !important;\\n        border: solid var(--white) 2px !important;\\n        transition: all var(--dur);\\n        z-index: -1 !important;\\n    }\\n    .square2{\\n        width: var(--size) !important;\\n        height: var(--size) !important;\\n        transition: all var(--dur);\\n        z-index: -1 !important;\\n    }\\n    #zoomer{\\n        z-index: 3;\\n        border-radius: 100%;\\n        width: 250px;\\n        height: 250px;\\n        display: flex;\\n        justify-content: center;\\n        transition: transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out;\\n    }\\n    .bocconi{\\n        height: 240px !important;\\n    }\\n    .manbaa{\\n        height: 140px !important;\\n    }\\n    .nyu{\\n        height: 170px !important;\\n    }\\n    .nyuad{\\n        height: 170px !important;\\n    }\\n    .next{\\n        height: 150px !important;\\n    }\\n    .school{\\n        position:absolute;\\n        top: 50%;\\n        left: 50%;\\n        height: 170px;\\n        transform: translate(-50%, -50%);\\n        transition: all var(--dur);\\n        user-select: none;\\n        -moz-user-select: none;\\n        -khtml-user-select: none;\\n        -webkit-user-select: none;\\n        -o-user-select: none;\\n    }\\n    #profile{\\n        position: fixed;\\n        width: 350px !important;\\n        bottom: 0%;\\n        z-index: 10;\\n        transition: all var(--dur);\\n        user-select: none;\\n        -moz-user-select: none;\\n        -khtml-user-select: none;\\n        -webkit-user-select: none;\\n        -o-user-select: none;\\n    }\\n    #icon{\\n        width: 100px;\\n        height: auto;\\n        z-index: 10;\\n        transition: all var(--dur);\\n    }\\n    .image-container {\\n        top: calc(50%);\\n        left: 50%;\\n        transform: translate(-50%, -50%);\\n        border: solid 2px var(--white);\\n        border-radius: 50%;\\n        overflow: hidden;\\n        /* box-shadow: 0 4px 8px 0 var(--accent2), 0 6px 20px 0 var(--accent2); */\\n        transition: transform var(--dur), width var(--dur) ease-in-out, height var(--dur) ease-in-out, border-radius var(--dur) ease-in-out, opacity var(--dur) ease-in-out;\\n        z-index: 3;\\n        background-color: var(--black);\\n    }\\n    .image-container video {\\n        position: absolute;\\n        margin: auto;\\n        top: -20%;\\n        width: 300px;\\n        height: 300px;\\n        object-fit: cover;\\n        transition: all 0.33s;\\n    }\\n    .ui {\\n        position: fixed !important;\\n    }\\n\\n    @media (max-width: 576px) {\\n        .image-container video{\\n            width: 150px;\\n            height: 150px;\\n        }\\n        #zoomer{\\n            width: 150px;\\n            height: 150px;\\n        }\\n        #profile{\\n            width: 65px;\\n            height: auto;\\n        }\\n        .bocconi{\\n            height: 150px !important;\\n        }\\n        .manbaa{\\n            height: 100px !important;\\n        }\\n        .nyu{\\n            height: 110px !important;\\n        }\\n        .nyuad{\\n            height: 110px !important;\\n        }\\n        .next{\\n            height: 100px !important;\\n        }\\n    }\\n    @media (max-width: 400px) {\\n        .image-container video{\\n            width: 175px;\\n            height: 175px;\\n        }\\n        .image-container{\\n            top: calc(50% + var(--indent_ui));\\n            left: 70%;\\n        }\\n        #zoomer{\\n            width:175px;\\n            height:175px;\\n        }\\n        #profile{\\n            width: 65px;\\n            height: auto;\\n        }\\n    }\\n    @media (max-width: 341px) {\\n        .image-container video{\\n            width:150px;\\n            height:150px;\\n        }\\n        .image-container{\\n            top: calc(52% + var(--indent_ui));\\n            left: 70%;\\n        }\\n        #zoomer{\\n            width:150px;\\n            height:150px;\\n        }\\n        #profile{\\n            width: 65px;\\n            height: auto;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAyEI,KAAK,CACD,KAAK,CAAE,IACX,CACA,sCAAU,CACN,OAAO,CAAE,CAAC,CAAC,UAAU,CACrB,UAAU,CAAE,OAAO,CAAC,KACxB,CACA,mCAAO,CACH,aAAa,CAAE,EAAE,CAAC,UAAU,CAC5B,MAAM,CAAE,KAAK,CAAC,IAAI,OAAO,CAAC,CAAC,GAAG,CAAC,UAAU,CACzC,UAAU,CAAE,GAAG,CAAC,IAAI,KAAK,CAAC,CAC1B,OAAO,CAAE,EAAE,CAAC,UAChB,CACA,oCAAQ,CACJ,KAAK,CAAE,IAAI,MAAM,CAAC,CAAC,UAAU,CAC7B,MAAM,CAAE,IAAI,MAAM,CAAC,CAAC,UAAU,CAC9B,UAAU,CAAE,GAAG,CAAC,IAAI,KAAK,CAAC,CAC1B,OAAO,CAAE,EAAE,CAAC,UAChB,CACA,mCAAO,CACH,OAAO,CAAE,CAAC,CACV,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,SAAS,CAAC,IAAI,KAAK,CAAC,CAAC,CAAC,KAAK,CAAC,IAAI,KAAK,CAAC,CAAC,WAAW,CAAC,CAAC,MAAM,CAAC,IAAI,KAAK,CAAC,CAAC,WAAW,CAAC,CAAC,aAAa,CAAC,IAAI,KAAK,CAAC,CAAC,WAAW,CAAC,CAAC,OAAO,CAAC,IAAI,KAAK,CAAC,CAAC,WAC5J,CACA,oCAAQ,CACJ,MAAM,CAAE,KAAK,CAAC,UAClB,CACA,mCAAO,CACH,MAAM,CAAE,KAAK,CAAC,UAClB,CACA,gCAAI,CACA,MAAM,CAAE,KAAK,CAAC,UAClB,CACA,kCAAM,CACF,MAAM,CAAE,KAAK,CAAC,UAClB,CACA,iCAAK,CACD,MAAM,CAAE,KAAK,CAAC,UAClB,CACA,mCAAO,CACH,SAAS,QAAQ,CACjB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,UAAU,CAAE,GAAG,CAAC,IAAI,KAAK,CAAC,CAC1B,WAAW,CAAE,IAAI,CACjB,gBAAgB,CAAE,IAAI,CACtB,kBAAkB,CAAE,IAAI,CACxB,mBAAmB,CAAE,IAAI,CACzB,cAAc,CAAE,IACpB,CACA,oCAAQ,CACJ,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,KAAK,CAAC,UAAU,CACvB,MAAM,CAAE,EAAE,CACV,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,GAAG,CAAC,IAAI,KAAK,CAAC,CAC1B,WAAW,CAAE,IAAI,CACjB,gBAAgB,CAAE,IAAI,CACtB,kBAAkB,CAAE,IAAI,CACxB,mBAAmB,CAAE,IAAI,CACzB,cAAc,CAAE,IACpB,CACA,iCAAK,CACD,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,GAAG,CAAC,IAAI,KAAK,CAC7B,CACA,4CAAiB,CACb,GAAG,CAAE,KAAK,GAAG,CAAC,CACd,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,OAAO,CAAC,CAC9B,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MAAM,CAEhB,UAAU,CAAE,SAAS,CAAC,IAAI,KAAK,CAAC,CAAC,CAAC,KAAK,CAAC,IAAI,KAAK,CAAC,CAAC,WAAW,CAAC,CAAC,MAAM,CAAC,IAAI,KAAK,CAAC,CAAC,WAAW,CAAC,CAAC,aAAa,CAAC,IAAI,KAAK,CAAC,CAAC,WAAW,CAAC,CAAC,OAAO,CAAC,IAAI,KAAK,CAAC,CAAC,WAAW,CACnK,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,IAAI,OAAO,CACjC,CACA,8BAAgB,CAAC,mBAAM,CACnB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,GAAG,CAAC,KACpB,CACA,+BAAI,CACA,QAAQ,CAAE,KAAK,CAAC,UACpB,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,8BAAgB,CAAC,mBAAK,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACZ,CACA,mCAAO,CACH,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACZ,CACA,oCAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,oCAAQ,CACJ,MAAM,CAAE,KAAK,CAAC,UAClB,CACA,mCAAO,CACH,MAAM,CAAE,KAAK,CAAC,UAClB,CACA,gCAAI,CACA,MAAM,CAAE,KAAK,CAAC,UAClB,CACA,kCAAM,CACF,MAAM,CAAE,KAAK,CAAC,UAClB,CACA,iCAAK,CACD,MAAM,CAAE,KAAK,CAAC,UAClB,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,8BAAgB,CAAC,mBAAK,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACZ,CACA,4CAAgB,CACZ,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,WAAW,CAAC,CAAC,CACjC,IAAI,CAAE,GACV,CACA,mCAAO,CACH,MAAM,KAAK,CACX,OAAO,KACX,CACA,oCAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,8BAAgB,CAAC,mBAAK,CAClB,MAAM,KAAK,CACX,OAAO,KACX,CACA,4CAAgB,CACZ,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,WAAW,CAAC,CAAC,CACjC,IAAI,CAAE,GACV,CACA,mCAAO,CACH,MAAM,KAAK,CACX,OAAO,KACX,CACA,oCAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACJ"}'
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
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  $$result.css.add(css$a);
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
    "image-container ui svelte-jo1e5s",
    (square ? "square" : "") + " " + (disappear ? "disappear" : "")
  ].join(" ").trim()}"><div id="zoomer" role="img" class="${[
    "svelte-jo1e5s",
    (square2 ? "square2" : "") + " " + (disappear ? "disappear" : "")
  ].join(" ").trim()}">${index == 0 && $transitioned == false ? `<video preload="auto" id="profile" playsinline muted loop class="svelte-jo1e5s" data-svelte-h="svelte-7vjebi"><source src="/media/animated/loop.mp4" type="video/mp4">
                    Your browser does not support the video tag.</video>` : `${index == 1 && $transitioned == false ? `<img alt="profile" class="${"school " + escape(classes[$profile_index], true) + " svelte-jo1e5s"}"${add_attribute("src", profiles[$profile_index], 0)}>` : `${index == 2 && $transitioned === false ? `<img alt="profile" id="icon"${add_attribute("src", icons[cur], 0)} class="svelte-jo1e5s">` : ``}`}`}</div> </div>`;
});
const css$9 = {
  code: '.about.svelte-p2u1dl{border-bottom:solid 4px var(--white);border-left:solid 3px var(--white);background-color:var(--black);transition:border 0.3s, min-height 0.2s !important}.about.svelte-p2u1dl:hover{border-bottom:solid 11px var(--white) !important;transition:border 0.2s, min-height 0.3s !important}.container.svelte-p2u1dl{font-family:"Montserrat", sans-serif !important;font-weight:400;font-size:xx-large;position:absolute;top:50%;left:calc(50% - var(--media_size)/2 + 10px);transform:translate(-100%, -50%);width:30vw;line-height:1.5em;min-height:1.5em;transition:left 0.23s ease-in-out}.typewriter.svelte-p2u1dl{z-index:10;height:auto;transition:max-height 0.5s ease-out;color:var(--white);hyphens:auto;-webkit-hyphens:auto;-ms-hyphens:auto;-moz-hyphens:auto;transition:all 0.3s ease !important}.border.svelte-p2u1dl{position:absolute;border-color:var(--gray) !important;border-width:2px !important;left:0;top:0;bottom:0;transition:height 0.3s ease-in-out}@media(max-width: 950px){.container.svelte-p2u1dl{top:80%;left:calc(50%);width:80vw;transform:translate(-50%, -50%);background-color:transparent}.about.svelte-p2u1dl{border:none;text-align:center}}@media(max-width: 820px){}@media(max-width: 576px){.container.svelte-p2u1dl{font-size:x-large;font-weight:500}}@media(max-width: 400px){.container.svelte-p2u1dl{top:50%;left:calc(50% - var(--media_size)/2 + 5px);width:40vw;background-color:black;text-align:left;font-size:large;font-weight:500}.about.svelte-p2u1dl{border-left:solid var(--white) 3px;border-bottom:solid var(--white) 3px;text-align:left}}@media(max-width: 341px){.container.svelte-p2u1dl{font-size:large;font-weight:100}}',
  map: '{"version":3,"file":"Typewriter.svelte","sources":["Typewriter.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount, afterUpdate } from \\"svelte\\";\\nimport { currentItem } from \\"../stores\\";\\nimport { slide, fade, scale } from \\"svelte/transition\\";\\nexport let texts;\\nexport let custom = \\"\\";\\nlet justOpened = true;\\nlet currentText = \\"\\";\\nlet index = 0;\\nlet speed = 20;\\nlet delay = 1700;\\nlet contentDiv;\\nlet borderHeight = \\"0px\\";\\nfunction updateBorderHeight() {\\n  borderHeight = `${contentDiv.offsetHeight}px`;\\n}\\nafterUpdate(updateBorderHeight);\\nfunction getCommonStart(str1, str2) {\\n  let i = 0;\\n  while (i < str1.length && i < str2.length && str1[i] === str2[i]) {\\n    i++;\\n  }\\n  return str1.substring(0, i);\\n}\\nasync function typeWriter(newText, oldText = \\"\\") {\\n  let commonStart = getCommonStart(newText, oldText);\\n  currentText = oldText;\\n  while (currentText.length > commonStart.length) {\\n    currentText = currentText.substring(0, currentText.length - 1);\\n    await new Promise((r) => setTimeout(r, speed));\\n  }\\n  for (let i = commonStart.length; i < newText.length; i++) {\\n    currentText += newText[i];\\n    await new Promise((r) => setTimeout(r, speed));\\n  }\\n}\\nonMount(() => {\\n  async function typeNext() {\\n    if (!justOpened) {\\n      await typeWriter(texts[index], index === 0 ? texts[texts.length - 1] : texts[index - 1]);\\n    } else {\\n      await typeWriter(texts[index], texts[index - 1] || \\"\\");\\n    }\\n    await new Promise((r) => setTimeout(r, delay));\\n    index = (index + 1) % texts.length;\\n    justOpened = false;\\n    typeNext();\\n  }\\n  typeNext();\\n});\\n<\/script>\\n\\n\\n<div class=\\"container {custom}\\" transition:fade|global={{duration:120}}>\\n    <div bind:this={contentDiv}>\\n        <div class=\\"typewriter\\">{currentText}</div>\\n    </div>\\n</div>\\n\\n<style>\\n    .about{\\n        border-bottom: solid 4px var(--white);\\n        border-left: solid 3px var(--white);\\n        background-color: var(--black);\\n        transition: border 0.3s, min-height 0.2s !important;\\n    }\\n    .about:hover{\\n        border-bottom: solid 11px var(--white) !important;\\n        transition: border 0.2s, min-height 0.3s !important;\\n    }\\n    .container{\\n        font-family: \\"Montserrat\\", sans-serif !important;\\n        font-weight: 400;\\n        font-size: xx-large;\\n        position: absolute;\\n        top: 50%;\\n        left: calc(50% - var(--media_size)/2 + 10px);\\n        transform: translate(-100%, -50%);\\n        width: 30vw;\\n        line-height: 1.5em;\\n        min-height: 1.5em;\\n        transition: left 0.23s ease-in-out;\\n    }\\n    .typewriter{\\n        z-index: 10;\\n        height: auto;\\n        transition: max-height 0.5s ease-out;   \\n        color: var(--white);\\n        hyphens: auto;\\n        -webkit-hyphens: auto;\\n        -ms-hyphens: auto;\\n        -moz-hyphens: auto;\\n        transition: all 0.3s ease !important;\\n    }\\n    .border {\\n        position: absolute;\\n        border-color: var(--gray) !important;\\n        border-width: 2px !important;\\n        left: 0;\\n        top: 0;\\n        bottom: 0;\\n        transition: height 0.3s ease-in-out;\\n    }\\n    @media (max-width: 950px) {\\n        .container {\\n            top: 80%;\\n            left: calc(50%);\\n            width: 80vw;\\n            transform: translate(-50%, -50%);\\n            background-color: transparent;\\n        }\\n        .about {\\n            border: none;\\n            text-align: center;\\n        }\\n    }\\n    @media (max-width: 820px) {\\n    }\\n    /*____________________________________________MEDIUM MOBILE SCREEN__________________________________________*/\\n    @media (max-width: 576px) {\\n        .container {\\n            /* left: calc(50% - var(--txt_pad)/2 + 1rem); */\\n            /* top: calc(65%); */\\n            font-size: x-large;\\n            font-weight: 500;\\n        }\\n    }\\n    /*______________________________________________SMALL PHONE__________________________________________*/\\n    @media (max-width: 400px) {\\n        .container {\\n            top: 50%;\\n            left: calc(50% - var(--media_size)/2 + 5px);\\n            width: 40vw;\\n            background-color: black;\\n            text-align: left;\\n            font-size: large;\\n            font-weight: 500;\\n        }\\n        .about {\\n            border-left: solid var(--white) 3px;\\n            border-bottom: solid var(--white) 3px;\\n            text-align: left;\\n        }\\n        \\n    }   \\n    /*__________________________________________VERY SMALL PHONE__________________________________________*/\\n    @media (max-width: 341px) {\\n        .container {\\n            font-size: large;\\n            font-weight: 100;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AA2DI,oBAAM,CACF,aAAa,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,OAAO,CAAC,CACrC,WAAW,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,OAAO,CAAC,CACnC,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,UAAU,CAAE,MAAM,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,UAC7C,CACA,oBAAM,MAAM,CACR,aAAa,CAAE,KAAK,CAAC,IAAI,CAAC,IAAI,OAAO,CAAC,CAAC,UAAU,CACjD,UAAU,CAAE,MAAM,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,UAC7C,CACA,wBAAU,CACN,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CAAC,UAAU,CAChD,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,QAAQ,CACnB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5C,SAAS,CAAE,UAAU,KAAK,CAAC,CAAC,IAAI,CAAC,CACjC,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,KAAK,CAClB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,IAAI,CAAC,KAAK,CAAC,WAC3B,CACA,yBAAW,CACP,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,UAAU,CAAC,IAAI,CAAC,QAAQ,CACpC,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,CAClB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,UAC9B,CACA,qBAAQ,CACJ,QAAQ,CAAE,QAAQ,CAClB,YAAY,CAAE,IAAI,MAAM,CAAC,CAAC,UAAU,CACpC,YAAY,CAAE,GAAG,CAAC,UAAU,CAC5B,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,MAAM,CAAC,IAAI,CAAC,WAC5B,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,wBAAW,CACP,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,KAAK,GAAG,CAAC,CACf,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,gBAAgB,CAAE,WACtB,CACA,oBAAO,CACH,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MAChB,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CAC1B,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,wBAAW,CAGP,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GACjB,CACJ,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,wBAAW,CACP,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3C,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GACjB,CACA,oBAAO,CACH,WAAW,CAAE,KAAK,CAAC,IAAI,OAAO,CAAC,CAAC,GAAG,CACnC,aAAa,CAAE,KAAK,CAAC,IAAI,OAAO,CAAC,CAAC,GAAG,CACrC,UAAU,CAAE,IAChB,CAEJ,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,wBAAW,CACP,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GACjB,CACJ"}'
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { texts } = $$props;
  let { custom = "" } = $$props;
  let currentText = "";
  let contentDiv;
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0) $$bindings.texts(texts);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  $$result.css.add(css$9);
  return `<div class="${"container " + escape(custom, true) + " svelte-p2u1dl"}"><div${add_attribute("this", contentDiv, 0)}><div class="typewriter svelte-p2u1dl">${escape(currentText)}</div></div> </div>`;
});
const name$6 = "Comparison";
const structure$6 = {
  value: String
};
function parse$6() {
  const start = this.tokenStart;
  const char1 = this.consume(Delim);
  if (char1 !== "<" && char1 !== ">" && char1 !== "=") {
    this.error("Malformed comparison operator");
  }
  let char2;
  if (this.tokenType === Delim) {
    char2 = this.consume(Delim);
    if (char2 !== "=") {
      this.error("Malformed comparison operator");
    }
  }
  if (this.tokenType === Delim) {
    this.error("Malformed comparison operator");
  }
  const value = char2 ? `${char1}${char2}` : char1;
  return {
    type: "Comparison",
    loc: this.getLocation(start, this.tokenStart),
    value
  };
}
function generate$6(node2) {
  for (let index = 0; index < node2.value.length; index++) {
    this.token(Delim, node2.value.charAt(index));
  }
}
const comparison = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: generate$6,
  name: name$6,
  parse: parse$6,
  structure: structure$6
}, Symbol.toStringTag, { value: "Module" }));
const name$5 = "ContainerFeatureStyle";
const structure$5 = {
  name: String,
  value: ["Function", "Identifier", "Number", "Dimension", "QueryCSSFunction", "Ratio", null]
};
function parse$5() {
  const start = this.tokenStart;
  let value = null;
  const function_name = this.consumeFunctionName();
  if (function_name !== "style") {
    this.error('Unknown container style query identifier; "style" is expected');
  }
  this.skipSC();
  const name2 = this.consume(Ident);
  this.skipSC();
  if (this.tokenType !== RightParenthesis) {
    this.eat(Colon);
    this.skipSC();
    switch (this.tokenType) {
      case Number$1:
        if (this.lookupNonWSType(1) === Delim) {
          value = this.Ratio();
        } else {
          value = this.Number();
        }
        break;
      case Dimension:
        value = this.Dimension();
        break;
      case Function$1:
        value = this.QueryCSSFunction();
        break;
      case Ident:
        value = this.Identifier();
        break;
      default:
        this.error("Number, dimension, ratio, function or identifier is expected");
        break;
    }
    this.skipSC();
  }
  this.eat(RightParenthesis);
  return {
    type: "ContainerFeatureStyle",
    loc: this.getLocation(start, this.tokenStart),
    name: name2,
    value
  };
}
function generate$5(node2) {
  this.token(Function$1, "style(");
  this.token(Ident, node2.name);
  if (node2.value !== null) {
    this.token(Colon, ":");
    this.node(node2.value);
  }
  this.token(RightParenthesis, ")");
}
const container_feature_style = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: generate$5,
  name: name$5,
  parse: parse$5,
  structure: structure$5
}, Symbol.toStringTag, { value: "Module" }));
function lookahead_is_range() {
  let type;
  let offset2 = 0;
  let count = 0;
  let delim_found = false;
  let no_colon = true;
  do {
    type = this.lookupNonWSType(offset2++);
    if (type !== WhiteSpace) {
      count++;
    }
    if (type === Delim) {
      delim_found = true;
    }
    if (type === Colon) {
      no_colon = false;
    }
    if (type === LeftCurlyBracket || type === RightParenthesis) {
      break;
    }
  } while (type !== EOF && count <= 6);
  return delim_found && no_colon;
}
const CONTAINER_QUERY_KEYWORDS = /* @__PURE__ */ new Set(["none", "and", "not", "or"]);
const name$4 = "ContainerQuery";
const structure$4 = {
  name: "Identifier",
  children: [
    ["Identifier", "QueryFeature", "QueryFeatureRange", "ContainerFeatureStyle", "WhiteSpace"]
  ]
};
function parse$4() {
  const start = this.tokenStart;
  const children = this.createList();
  let child = null;
  let name2 = null;
  if (this.tokenType === Ident) {
    const container_name = this.substring(this.tokenStart, this.tokenEnd);
    if (!CONTAINER_QUERY_KEYWORDS.has(container_name.toLowerCase())) {
      name2 = container_name;
      this.eat(Ident);
    }
  }
  this.skipSC();
  scan: while (!this.eof) {
    switch (this.tokenType) {
      case Comment:
      case WhiteSpace:
        this.next();
        continue;
      case Ident:
        child = this.Identifier();
        break;
      case Function$1:
        child = this.ContainerFeatureStyle();
        break;
      case LeftParenthesis:
        child = lookahead_is_range.call(this) ? this.QueryFeatureRange() : this.QueryFeature();
        break;
      default:
        break scan;
    }
    children.push(child);
  }
  if (child === null) {
    this.error("Identifier or parenthesis is expected");
  }
  return {
    type: "ContainerQuery",
    loc: this.getLocation(start, this.tokenStart - 1),
    name: name2,
    children
  };
}
function generate$4(node2) {
  if (typeof node2.name === "string") {
    this.token(Ident, node2.name);
  }
  this.children(node2);
}
const container_query = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: generate$4,
  name: name$4,
  parse: parse$4,
  structure: structure$4
}, Symbol.toStringTag, { value: "Module" }));
const name$3 = "MediaQuery";
const structure$3 = {
  children: [["Identifier", "QueryFeature", "QueryFeatureRange", "WhiteSpace"]]
};
function parse$3() {
  const children = this.createList();
  let child = null;
  this.skipSC();
  scan: while (!this.eof) {
    switch (this.tokenType) {
      case Comment:
      case WhiteSpace:
        this.next();
        continue;
      case Ident:
        child = this.Identifier();
        break;
      case LeftParenthesis:
        child = lookahead_is_range.call(this) ? this.QueryFeatureRange() : this.QueryFeature();
        break;
      default:
        break scan;
    }
    children.push(child);
  }
  if (child === null) {
    this.error("Identifier or parenthesis is expected");
  }
  return {
    type: "MediaQuery",
    loc: this.getLocationFromList(children),
    children
  };
}
function generate$3(node2) {
  this.children(node2);
}
const media_query = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: generate$3,
  name: name$3,
  parse: parse$3,
  structure: structure$3
}, Symbol.toStringTag, { value: "Module" }));
const name$2 = "QueryFeature";
const structure$2 = {
  name: String,
  value: ["Identifier", "Number", "Dimension", "QueryCSSFunction", "Ratio", null]
};
function parse$2() {
  const start = this.tokenStart;
  let value = null;
  this.eat(LeftParenthesis);
  this.skipSC();
  const name2 = this.consume(Ident);
  this.skipSC();
  if (this.tokenType !== RightParenthesis) {
    this.eat(Colon);
    this.skipSC();
    switch (this.tokenType) {
      case Number$1:
        if (this.lookupNonWSType(1) === Delim) {
          value = this.Ratio();
        } else {
          value = this.Number();
        }
        break;
      case Dimension:
        value = this.Dimension();
        break;
      case Function$1:
        value = this.QueryCSSFunction();
        break;
      case Ident:
        value = this.Identifier();
        break;
      default:
        this.error("Number, dimension, ratio, function, or identifier is expected");
        break;
    }
    this.skipSC();
  }
  this.eat(RightParenthesis);
  return {
    type: "QueryFeature",
    loc: this.getLocation(start, this.tokenStart),
    name: name2,
    value
  };
}
function generate$2(node2) {
  this.token(LeftParenthesis, "(");
  this.token(Ident, node2.name);
  if (node2.value !== null) {
    this.token(Colon, ":");
    this.node(node2.value);
  }
  this.token(RightParenthesis, ")");
}
const query_feature = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: generate$2,
  name: name$2,
  parse: parse$2,
  structure: structure$2
}, Symbol.toStringTag, { value: "Module" }));
const name$1 = "QueryFeatureRange";
const structure$1 = {
  name: String,
  value: ["Identifier", "Number", "Comparison", "Dimension", "QueryCSSFunction", "Ratio", null]
};
function lookup_non_ws_type_and_value(offset2, type, reference_str) {
  let current_type;
  do {
    current_type = this.lookupType(offset2++);
    if (current_type !== WhiteSpace) {
      break;
    }
  } while (current_type !== 0);
  return current_type === type ? this.lookupValue(offset2 - 1, reference_str) : false;
}
function parse$1() {
  const start = this.tokenStart;
  const children = this.createList();
  let child = null;
  this.eat(LeftParenthesis);
  this.skipSC();
  while (!this.eof && this.tokenType !== RightParenthesis) {
    switch (this.tokenType) {
      case Number$1:
        if (lookup_non_ws_type_and_value.call(this, 1, Delim, "/")) {
          child = this.Ratio();
        } else {
          child = this.Number();
        }
        break;
      case Delim:
        child = this.Comparison();
        break;
      case Dimension:
        child = this.Dimension();
        break;
      case Function$1:
        child = this.QueryCSSFunction();
        break;
      case Ident:
        child = this.Identifier();
        break;
      default:
        this.error("Number, dimension, comparison, ratio, function, or identifier is expected");
        break;
    }
    children.push(child);
    this.skipSC();
  }
  this.eat(RightParenthesis);
  return {
    type: "QueryFeatureRange",
    loc: this.getLocation(start, this.tokenStart),
    children
  };
}
function generate$1(node2) {
  this.children(node2);
}
const query_feature_range = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: generate$1,
  name: name$1,
  parse: parse$1,
  structure: structure$1
}, Symbol.toStringTag, { value: "Module" }));
const QUERY_CSS_FUNCTIONS = /* @__PURE__ */ new Set(["calc", "clamp", "min", "max"]);
const name = "QueryCSSFunction";
const structure = {
  name: String,
  expression: String
};
function parse() {
  const start = this.tokenStart;
  const name2 = this.consumeFunctionName();
  if (!QUERY_CSS_FUNCTIONS.has(name2)) {
    this.error('Unknown query single value function; expected: "calc", "clamp", "max", min"');
  }
  const body = this.Raw(this.tokenIndex, null, false);
  this.eat(RightParenthesis);
  return {
    type: "QueryCSSFunction",
    loc: this.getLocation(start, this.tokenStart),
    name: name2,
    expression: body.value
  };
}
function generate(node2) {
  this.token(Function, `${node2.name}(`);
  this.node(node2.expression);
  this.token(RightParenthesis, ")");
}
const query_css_function = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate,
  name,
  parse,
  structure
}, Symbol.toStringTag, { value: "Module" }));
const node = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Comparison: comparison,
  ContainerFeatureStyle: container_feature_style,
  ContainerQuery: container_query,
  MediaQuery: media_query,
  QueryCSSFunction: query_css_function,
  QueryFeature: query_feature,
  QueryFeatureRange: query_feature_range
}, Symbol.toStringTag, { value: "Module" }));
const cq_syntax = fork({
  atrule: {
    // extend or override at-rule dictionary
    container: {
      parse: {
        prelude() {
          return this.createSingleNodeList(this.ContainerQuery());
        },
        block(is_style_block = false) {
          return this.Block(is_style_block);
        }
      }
    }
  },
  node
});
cq_syntax.parse;
const entities = {
  "CounterClockwiseContourIntegral;": 8755,
  "ClockwiseContourIntegral;": 8754,
  "DoubleLongLeftRightArrow;": 10234,
  "NotNestedGreaterGreater;": 10914,
  "DiacriticalDoubleAcute;": 733,
  "NotSquareSupersetEqual;": 8931,
  "CloseCurlyDoubleQuote;": 8221,
  "DoubleContourIntegral;": 8751,
  "FilledVerySmallSquare;": 9642,
  "NegativeVeryThinSpace;": 8203,
  "NotPrecedesSlantEqual;": 8928,
  "NotRightTriangleEqual;": 8941,
  "NotSucceedsSlantEqual;": 8929,
  "CapitalDifferentialD;": 8517,
  "DoubleLeftRightArrow;": 8660,
  "DoubleLongRightArrow;": 10233,
  "EmptyVerySmallSquare;": 9643,
  "NestedGreaterGreater;": 8811,
  "NotDoubleVerticalBar;": 8742,
  "NotGreaterSlantEqual;": 10878,
  "NotLeftTriangleEqual;": 8940,
  "NotSquareSubsetEqual;": 8930,
  "OpenCurlyDoubleQuote;": 8220,
  "ReverseUpEquilibrium;": 10607,
  "DoubleLongLeftArrow;": 10232,
  "DownLeftRightVector;": 10576,
  "LeftArrowRightArrow;": 8646,
  "NegativeMediumSpace;": 8203,
  "NotGreaterFullEqual;": 8807,
  "NotRightTriangleBar;": 10704,
  "RightArrowLeftArrow;": 8644,
  "SquareSupersetEqual;": 8850,
  "leftrightsquigarrow;": 8621,
  "DownRightTeeVector;": 10591,
  "DownRightVectorBar;": 10583,
  "LongLeftRightArrow;": 10231,
  "Longleftrightarrow;": 10234,
  "NegativeThickSpace;": 8203,
  "NotLeftTriangleBar;": 10703,
  "PrecedesSlantEqual;": 8828,
  "ReverseEquilibrium;": 8651,
  "RightDoubleBracket;": 10215,
  "RightDownTeeVector;": 10589,
  "RightDownVectorBar;": 10581,
  "RightTriangleEqual;": 8885,
  "SquareIntersection;": 8851,
  "SucceedsSlantEqual;": 8829,
  "blacktriangleright;": 9656,
  "longleftrightarrow;": 10231,
  "DoubleUpDownArrow;": 8661,
  "DoubleVerticalBar;": 8741,
  "DownLeftTeeVector;": 10590,
  "DownLeftVectorBar;": 10582,
  "FilledSmallSquare;": 9724,
  "GreaterSlantEqual;": 10878,
  "LeftDoubleBracket;": 10214,
  "LeftDownTeeVector;": 10593,
  "LeftDownVectorBar;": 10585,
  "LeftTriangleEqual;": 8884,
  "NegativeThinSpace;": 8203,
  "NotGreaterGreater;": 8811,
  "NotLessSlantEqual;": 10877,
  "NotNestedLessLess;": 10913,
  "NotReverseElement;": 8716,
  "NotSquareSuperset;": 8848,
  "NotTildeFullEqual;": 8775,
  "RightAngleBracket;": 10217,
  "RightUpDownVector;": 10575,
  "SquareSubsetEqual;": 8849,
  "VerticalSeparator;": 10072,
  "blacktriangledown;": 9662,
  "blacktriangleleft;": 9666,
  "leftrightharpoons;": 8651,
  "rightleftharpoons;": 8652,
  "twoheadrightarrow;": 8608,
  "DiacriticalAcute;": 180,
  "DiacriticalGrave;": 96,
  "DiacriticalTilde;": 732,
  "DoubleRightArrow;": 8658,
  "DownArrowUpArrow;": 8693,
  "EmptySmallSquare;": 9723,
  "GreaterEqualLess;": 8923,
  "GreaterFullEqual;": 8807,
  "LeftAngleBracket;": 10216,
  "LeftUpDownVector;": 10577,
  "LessEqualGreater;": 8922,
  "NonBreakingSpace;": 160,
  "NotPrecedesEqual;": 10927,
  "NotRightTriangle;": 8939,
  "NotSucceedsEqual;": 10928,
  "NotSucceedsTilde;": 8831,
  "NotSupersetEqual;": 8841,
  "RightTriangleBar;": 10704,
  "RightUpTeeVector;": 10588,
  "RightUpVectorBar;": 10580,
  "UnderParenthesis;": 9181,
  "UpArrowDownArrow;": 8645,
  "circlearrowright;": 8635,
  "downharpoonright;": 8642,
  "ntrianglerighteq;": 8941,
  "rightharpoondown;": 8641,
  "rightrightarrows;": 8649,
  "twoheadleftarrow;": 8606,
  "vartriangleright;": 8883,
  "CloseCurlyQuote;": 8217,
  "ContourIntegral;": 8750,
  "DoubleDownArrow;": 8659,
  "DoubleLeftArrow;": 8656,
  "DownRightVector;": 8641,
  "LeftRightVector;": 10574,
  "LeftTriangleBar;": 10703,
  "LeftUpTeeVector;": 10592,
  "LeftUpVectorBar;": 10584,
  "LowerRightArrow;": 8600,
  "NotGreaterEqual;": 8817,
  "NotGreaterTilde;": 8821,
  "NotHumpDownHump;": 8782,
  "NotLeftTriangle;": 8938,
  "NotSquareSubset;": 8847,
  "OverParenthesis;": 9180,
  "RightDownVector;": 8642,
  "ShortRightArrow;": 8594,
  "UpperRightArrow;": 8599,
  "bigtriangledown;": 9661,
  "circlearrowleft;": 8634,
  "curvearrowright;": 8631,
  "downharpoonleft;": 8643,
  "leftharpoondown;": 8637,
  "leftrightarrows;": 8646,
  "nLeftrightarrow;": 8654,
  "nleftrightarrow;": 8622,
  "ntrianglelefteq;": 8940,
  "rightleftarrows;": 8644,
  "rightsquigarrow;": 8605,
  "rightthreetimes;": 8908,
  "straightepsilon;": 1013,
  "trianglerighteq;": 8885,
  "vartriangleleft;": 8882,
  "DiacriticalDot;": 729,
  "DoubleRightTee;": 8872,
  "DownLeftVector;": 8637,
  "GreaterGreater;": 10914,
  "HorizontalLine;": 9472,
  "InvisibleComma;": 8291,
  "InvisibleTimes;": 8290,
  "LeftDownVector;": 8643,
  "LeftRightArrow;": 8596,
  "Leftrightarrow;": 8660,
  "LessSlantEqual;": 10877,
  "LongRightArrow;": 10230,
  "Longrightarrow;": 10233,
  "LowerLeftArrow;": 8601,
  "NestedLessLess;": 8810,
  "NotGreaterLess;": 8825,
  "NotLessGreater;": 8824,
  "NotSubsetEqual;": 8840,
  "NotVerticalBar;": 8740,
  "OpenCurlyQuote;": 8216,
  "ReverseElement;": 8715,
  "RightTeeVector;": 10587,
  "RightVectorBar;": 10579,
  "ShortDownArrow;": 8595,
  "ShortLeftArrow;": 8592,
  "SquareSuperset;": 8848,
  "TildeFullEqual;": 8773,
  "UpperLeftArrow;": 8598,
  "ZeroWidthSpace;": 8203,
  "curvearrowleft;": 8630,
  "doublebarwedge;": 8966,
  "downdownarrows;": 8650,
  "hookrightarrow;": 8618,
  "leftleftarrows;": 8647,
  "leftrightarrow;": 8596,
  "leftthreetimes;": 8907,
  "longrightarrow;": 10230,
  "looparrowright;": 8620,
  "nshortparallel;": 8742,
  "ntriangleright;": 8939,
  "rightarrowtail;": 8611,
  "rightharpoonup;": 8640,
  "trianglelefteq;": 8884,
  "upharpoonright;": 8638,
  "ApplyFunction;": 8289,
  "DifferentialD;": 8518,
  "DoubleLeftTee;": 10980,
  "DoubleUpArrow;": 8657,
  "LeftTeeVector;": 10586,
  "LeftVectorBar;": 10578,
  "LessFullEqual;": 8806,
  "LongLeftArrow;": 10229,
  "Longleftarrow;": 10232,
  "NotEqualTilde;": 8770,
  "NotTildeEqual;": 8772,
  "NotTildeTilde;": 8777,
  "Poincareplane;": 8460,
  "PrecedesEqual;": 10927,
  "PrecedesTilde;": 8830,
  "RightArrowBar;": 8677,
  "RightTeeArrow;": 8614,
  "RightTriangle;": 8883,
  "RightUpVector;": 8638,
  "SucceedsEqual;": 10928,
  "SucceedsTilde;": 8831,
  "SupersetEqual;": 8839,
  "UpEquilibrium;": 10606,
  "VerticalTilde;": 8768,
  "VeryThinSpace;": 8202,
  "bigtriangleup;": 9651,
  "blacktriangle;": 9652,
  "divideontimes;": 8903,
  "fallingdotseq;": 8786,
  "hookleftarrow;": 8617,
  "leftarrowtail;": 8610,
  "leftharpoonup;": 8636,
  "longleftarrow;": 10229,
  "looparrowleft;": 8619,
  "measuredangle;": 8737,
  "ntriangleleft;": 8938,
  "shortparallel;": 8741,
  "smallsetminus;": 8726,
  "triangleright;": 9657,
  "upharpoonleft;": 8639,
  "varsubsetneqq;": 10955,
  "varsupsetneqq;": 10956,
  "DownArrowBar;": 10515,
  "DownTeeArrow;": 8615,
  "ExponentialE;": 8519,
  "GreaterEqual;": 8805,
  "GreaterTilde;": 8819,
  "HilbertSpace;": 8459,
  "HumpDownHump;": 8782,
  "Intersection;": 8898,
  "LeftArrowBar;": 8676,
  "LeftTeeArrow;": 8612,
  "LeftTriangle;": 8882,
  "LeftUpVector;": 8639,
  "NotCongruent;": 8802,
  "NotHumpEqual;": 8783,
  "NotLessEqual;": 8816,
  "NotLessTilde;": 8820,
  "Proportional;": 8733,
  "RightCeiling;": 8969,
  "RoundImplies;": 10608,
  "ShortUpArrow;": 8593,
  "SquareSubset;": 8847,
  "UnderBracket;": 9141,
  "VerticalLine;": 124,
  "blacklozenge;": 10731,
  "exponentiale;": 8519,
  "risingdotseq;": 8787,
  "triangledown;": 9663,
  "triangleleft;": 9667,
  "varsubsetneq;": 8842,
  "varsupsetneq;": 8843,
  "CircleMinus;": 8854,
  "CircleTimes;": 8855,
  "Equilibrium;": 8652,
  "GreaterLess;": 8823,
  "LeftCeiling;": 8968,
  "LessGreater;": 8822,
  "MediumSpace;": 8287,
  "NotLessLess;": 8810,
  "NotPrecedes;": 8832,
  "NotSucceeds;": 8833,
  "NotSuperset;": 8835,
  "OverBracket;": 9140,
  "RightVector;": 8640,
  "Rrightarrow;": 8667,
  "RuleDelayed;": 10740,
  "SmallCircle;": 8728,
  "SquareUnion;": 8852,
  "SubsetEqual;": 8838,
  "UpDownArrow;": 8597,
  "Updownarrow;": 8661,
  "VerticalBar;": 8739,
  "backepsilon;": 1014,
  "blacksquare;": 9642,
  "circledcirc;": 8858,
  "circleddash;": 8861,
  "curlyeqprec;": 8926,
  "curlyeqsucc;": 8927,
  "diamondsuit;": 9830,
  "eqslantless;": 10901,
  "expectation;": 8496,
  "nRightarrow;": 8655,
  "nrightarrow;": 8603,
  "preccurlyeq;": 8828,
  "precnapprox;": 10937,
  "quaternions;": 8461,
  "straightphi;": 981,
  "succcurlyeq;": 8829,
  "succnapprox;": 10938,
  "thickapprox;": 8776,
  "updownarrow;": 8597,
  "Bernoullis;": 8492,
  "CirclePlus;": 8853,
  "EqualTilde;": 8770,
  "Fouriertrf;": 8497,
  "ImaginaryI;": 8520,
  "Laplacetrf;": 8466,
  "LeftVector;": 8636,
  "Lleftarrow;": 8666,
  "NotElement;": 8713,
  "NotGreater;": 8815,
  "Proportion;": 8759,
  "RightArrow;": 8594,
  "RightFloor;": 8971,
  "Rightarrow;": 8658,
  "ThickSpace;": 8287,
  "TildeEqual;": 8771,
  "TildeTilde;": 8776,
  "UnderBrace;": 9183,
  "UpArrowBar;": 10514,
  "UpTeeArrow;": 8613,
  "circledast;": 8859,
  "complement;": 8705,
  "curlywedge;": 8911,
  "eqslantgtr;": 10902,
  "gtreqqless;": 10892,
  "lessapprox;": 10885,
  "lesseqqgtr;": 10891,
  "lmoustache;": 9136,
  "longmapsto;": 10236,
  "mapstodown;": 8615,
  "mapstoleft;": 8612,
  "nLeftarrow;": 8653,
  "nleftarrow;": 8602,
  "nsubseteqq;": 10949,
  "nsupseteqq;": 10950,
  "precapprox;": 10935,
  "rightarrow;": 8594,
  "rmoustache;": 9137,
  "sqsubseteq;": 8849,
  "sqsupseteq;": 8850,
  "subsetneqq;": 10955,
  "succapprox;": 10936,
  "supsetneqq;": 10956,
  "upuparrows;": 8648,
  "varepsilon;": 1013,
  "varnothing;": 8709,
  "Backslash;": 8726,
  "CenterDot;": 183,
  "CircleDot;": 8857,
  "Congruent;": 8801,
  "Coproduct;": 8720,
  "DoubleDot;": 168,
  "DownArrow;": 8595,
  "DownBreve;": 785,
  "Downarrow;": 8659,
  "HumpEqual;": 8783,
  "LeftArrow;": 8592,
  "LeftFloor;": 8970,
  "Leftarrow;": 8656,
  "LessTilde;": 8818,
  "Mellintrf;": 8499,
  "MinusPlus;": 8723,
  "NotCupCap;": 8813,
  "NotExists;": 8708,
  "NotSubset;": 8834,
  "OverBrace;": 9182,
  "PlusMinus;": 177,
  "Therefore;": 8756,
  "ThinSpace;": 8201,
  "TripleDot;": 8411,
  "UnionPlus;": 8846,
  "backprime;": 8245,
  "backsimeq;": 8909,
  "bigotimes;": 10754,
  "centerdot;": 183,
  "checkmark;": 10003,
  "complexes;": 8450,
  "dotsquare;": 8865,
  "downarrow;": 8595,
  "gtrapprox;": 10886,
  "gtreqless;": 8923,
  "gvertneqq;": 8809,
  "heartsuit;": 9829,
  "leftarrow;": 8592,
  "lesseqgtr;": 8922,
  "lvertneqq;": 8808,
  "ngeqslant;": 10878,
  "nleqslant;": 10877,
  "nparallel;": 8742,
  "nshortmid;": 8740,
  "nsubseteq;": 8840,
  "nsupseteq;": 8841,
  "pitchfork;": 8916,
  "rationals;": 8474,
  "spadesuit;": 9824,
  "subseteqq;": 10949,
  "subsetneq;": 8842,
  "supseteqq;": 10950,
  "supsetneq;": 8843,
  "therefore;": 8756,
  "triangleq;": 8796,
  "varpropto;": 8733,
  "DDotrahd;": 10513,
  "DotEqual;": 8784,
  "Integral;": 8747,
  "LessLess;": 10913,
  "NotEqual;": 8800,
  "NotTilde;": 8769,
  "PartialD;": 8706,
  "Precedes;": 8826,
  "RightTee;": 8866,
  "Succeeds;": 8827,
  "SuchThat;": 8715,
  "Superset;": 8835,
  "Uarrocir;": 10569,
  "UnderBar;": 95,
  "andslope;": 10840,
  "angmsdaa;": 10664,
  "angmsdab;": 10665,
  "angmsdac;": 10666,
  "angmsdad;": 10667,
  "angmsdae;": 10668,
  "angmsdaf;": 10669,
  "angmsdag;": 10670,
  "angmsdah;": 10671,
  "angrtvbd;": 10653,
  "approxeq;": 8778,
  "awconint;": 8755,
  "backcong;": 8780,
  "barwedge;": 8965,
  "bbrktbrk;": 9142,
  "bigoplus;": 10753,
  "bigsqcup;": 10758,
  "biguplus;": 10756,
  "bigwedge;": 8896,
  "boxminus;": 8863,
  "boxtimes;": 8864,
  "bsolhsub;": 10184,
  "capbrcup;": 10825,
  "circledR;": 174,
  "circledS;": 9416,
  "cirfnint;": 10768,
  "clubsuit;": 9827,
  "cupbrcap;": 10824,
  "curlyvee;": 8910,
  "cwconint;": 8754,
  "doteqdot;": 8785,
  "dotminus;": 8760,
  "drbkarow;": 10512,
  "dzigrarr;": 10239,
  "elinters;": 9191,
  "emptyset;": 8709,
  "eqvparsl;": 10725,
  "fpartint;": 10765,
  "geqslant;": 10878,
  "gesdotol;": 10884,
  "gnapprox;": 10890,
  "hksearow;": 10533,
  "hkswarow;": 10534,
  "imagline;": 8464,
  "imagpart;": 8465,
  "infintie;": 10717,
  "integers;": 8484,
  "intercal;": 8890,
  "intlarhk;": 10775,
  "laemptyv;": 10676,
  "ldrushar;": 10571,
  "leqslant;": 10877,
  "lesdotor;": 10883,
  "llcorner;": 8990,
  "lnapprox;": 10889,
  "lrcorner;": 8991,
  "lurdshar;": 10570,
  "mapstoup;": 8613,
  "multimap;": 8888,
  "naturals;": 8469,
  "ncongdot;": 10861,
  "notindot;": 8949,
  "otimesas;": 10806,
  "parallel;": 8741,
  "plusacir;": 10787,
  "pointint;": 10773,
  "precneqq;": 10933,
  "precnsim;": 8936,
  "profalar;": 9006,
  "profline;": 8978,
  "profsurf;": 8979,
  "raemptyv;": 10675,
  "realpart;": 8476,
  "rppolint;": 10770,
  "rtriltri;": 10702,
  "scpolint;": 10771,
  "setminus;": 8726,
  "shortmid;": 8739,
  "smeparsl;": 10724,
  "sqsubset;": 8847,
  "sqsupset;": 8848,
  "subseteq;": 8838,
  "succneqq;": 10934,
  "succnsim;": 8937,
  "supseteq;": 8839,
  "thetasym;": 977,
  "thicksim;": 8764,
  "timesbar;": 10801,
  "triangle;": 9653,
  "triminus;": 10810,
  "trpezium;": 9186,
  "ulcorner;": 8988,
  "urcorner;": 8989,
  "varkappa;": 1008,
  "varsigma;": 962,
  "vartheta;": 977,
  "Because;": 8757,
  "Cayleys;": 8493,
  "Cconint;": 8752,
  "Cedilla;": 184,
  "Diamond;": 8900,
  "DownTee;": 8868,
  "Element;": 8712,
  "Epsilon;": 917,
  "Implies;": 8658,
  "LeftTee;": 8867,
  "NewLine;": 10,
  "NoBreak;": 8288,
  "NotLess;": 8814,
  "Omicron;": 927,
  "OverBar;": 8254,
  "Product;": 8719,
  "UpArrow;": 8593,
  "Uparrow;": 8657,
  "Upsilon;": 933,
  "alefsym;": 8501,
  "angrtvb;": 8894,
  "angzarr;": 9084,
  "asympeq;": 8781,
  "backsim;": 8765,
  "because;": 8757,
  "bemptyv;": 10672,
  "between;": 8812,
  "bigcirc;": 9711,
  "bigodot;": 10752,
  "bigstar;": 9733,
  "bnequiv;": 8801,
  "boxplus;": 8862,
  "ccupssm;": 10832,
  "cemptyv;": 10674,
  "cirscir;": 10690,
  "coloneq;": 8788,
  "congdot;": 10861,
  "cudarrl;": 10552,
  "cudarrr;": 10549,
  "cularrp;": 10557,
  "curarrm;": 10556,
  "dbkarow;": 10511,
  "ddagger;": 8225,
  "ddotseq;": 10871,
  "demptyv;": 10673,
  "diamond;": 8900,
  "digamma;": 989,
  "dotplus;": 8724,
  "dwangle;": 10662,
  "epsilon;": 949,
  "eqcolon;": 8789,
  "equivDD;": 10872,
  "gesdoto;": 10882,
  "gtquest;": 10876,
  "gtrless;": 8823,
  "harrcir;": 10568,
  "intprod;": 10812,
  "isindot;": 8949,
  "larrbfs;": 10527,
  "larrsim;": 10611,
  "lbrksld;": 10639,
  "lbrkslu;": 10637,
  "ldrdhar;": 10599,
  "lesdoto;": 10881,
  "lessdot;": 8918,
  "lessgtr;": 8822,
  "lesssim;": 8818,
  "lotimes;": 10804,
  "lozenge;": 9674,
  "ltquest;": 10875,
  "luruhar;": 10598,
  "maltese;": 10016,
  "minusdu;": 10794,
  "napprox;": 8777,
  "natural;": 9838,
  "nearrow;": 8599,
  "nexists;": 8708,
  "notinva;": 8713,
  "notinvb;": 8951,
  "notinvc;": 8950,
  "notniva;": 8716,
  "notnivb;": 8958,
  "notnivc;": 8957,
  "npolint;": 10772,
  "npreceq;": 10927,
  "nsqsube;": 8930,
  "nsqsupe;": 8931,
  "nsubset;": 8834,
  "nsucceq;": 10928,
  "nsupset;": 8835,
  "nvinfin;": 10718,
  "nvltrie;": 8884,
  "nvrtrie;": 8885,
  "nwarrow;": 8598,
  "olcross;": 10683,
  "omicron;": 959,
  "orderof;": 8500,
  "orslope;": 10839,
  "pertenk;": 8241,
  "planckh;": 8462,
  "pluscir;": 10786,
  "plussim;": 10790,
  "plustwo;": 10791,
  "precsim;": 8830,
  "quatint;": 10774,
  "questeq;": 8799,
  "rarrbfs;": 10528,
  "rarrsim;": 10612,
  "rbrksld;": 10638,
  "rbrkslu;": 10640,
  "rdldhar;": 10601,
  "realine;": 8475,
  "rotimes;": 10805,
  "ruluhar;": 10600,
  "searrow;": 8600,
  "simplus;": 10788,
  "simrarr;": 10610,
  "subedot;": 10947,
  "submult;": 10945,
  "subplus;": 10943,
  "subrarr;": 10617,
  "succsim;": 8831,
  "supdsub;": 10968,
  "supedot;": 10948,
  "suphsol;": 10185,
  "suphsub;": 10967,
  "suplarr;": 10619,
  "supmult;": 10946,
  "supplus;": 10944,
  "swarrow;": 8601,
  "topfork;": 10970,
  "triplus;": 10809,
  "tritime;": 10811,
  "uparrow;": 8593,
  "upsilon;": 965,
  "uwangle;": 10663,
  "vzigzag;": 10650,
  "zigrarr;": 8669,
  "Aacute;": 193,
  "Abreve;": 258,
  "Agrave;": 192,
  "Assign;": 8788,
  "Atilde;": 195,
  "Barwed;": 8966,
  "Bumpeq;": 8782,
  "Cacute;": 262,
  "Ccaron;": 268,
  "Ccedil;": 199,
  "Colone;": 10868,
  "Conint;": 8751,
  "CupCap;": 8781,
  "Dagger;": 8225,
  "Dcaron;": 270,
  "DotDot;": 8412,
  "Dstrok;": 272,
  "Eacute;": 201,
  "Ecaron;": 282,
  "Egrave;": 200,
  "Exists;": 8707,
  "ForAll;": 8704,
  "Gammad;": 988,
  "Gbreve;": 286,
  "Gcedil;": 290,
  "HARDcy;": 1066,
  "Hstrok;": 294,
  "Iacute;": 205,
  "Igrave;": 204,
  "Itilde;": 296,
  "Jsercy;": 1032,
  "Kcedil;": 310,
  "Lacute;": 313,
  "Lambda;": 923,
  "Lcaron;": 317,
  "Lcedil;": 315,
  "Lmidot;": 319,
  "Lstrok;": 321,
  "Nacute;": 323,
  "Ncaron;": 327,
  "Ncedil;": 325,
  "Ntilde;": 209,
  "Oacute;": 211,
  "Odblac;": 336,
  "Ograve;": 210,
  "Oslash;": 216,
  "Otilde;": 213,
  "Otimes;": 10807,
  "Racute;": 340,
  "Rarrtl;": 10518,
  "Rcaron;": 344,
  "Rcedil;": 342,
  "SHCHcy;": 1065,
  "SOFTcy;": 1068,
  "Sacute;": 346,
  "Scaron;": 352,
  "Scedil;": 350,
  "Square;": 9633,
  "Subset;": 8912,
  "Supset;": 8913,
  "Tcaron;": 356,
  "Tcedil;": 354,
  "Tstrok;": 358,
  "Uacute;": 218,
  "Ubreve;": 364,
  "Udblac;": 368,
  "Ugrave;": 217,
  "Utilde;": 360,
  "Vdashl;": 10982,
  "Verbar;": 8214,
  "Vvdash;": 8874,
  "Yacute;": 221,
  "Zacute;": 377,
  "Zcaron;": 381,
  "aacute;": 225,
  "abreve;": 259,
  "agrave;": 224,
  "andand;": 10837,
  "angmsd;": 8737,
  "angsph;": 8738,
  "apacir;": 10863,
  "approx;": 8776,
  "atilde;": 227,
  "barvee;": 8893,
  "barwed;": 8965,
  "becaus;": 8757,
  "bernou;": 8492,
  "bigcap;": 8898,
  "bigcup;": 8899,
  "bigvee;": 8897,
  "bkarow;": 10509,
  "bottom;": 8869,
  "bowtie;": 8904,
  "boxbox;": 10697,
  "bprime;": 8245,
  "brvbar;": 166,
  "bullet;": 8226,
  "bumpeq;": 8783,
  "cacute;": 263,
  "capand;": 10820,
  "capcap;": 10827,
  "capcup;": 10823,
  "capdot;": 10816,
  "ccaron;": 269,
  "ccedil;": 231,
  "circeq;": 8791,
  "cirmid;": 10991,
  "colone;": 8788,
  "commat;": 64,
  "compfn;": 8728,
  "conint;": 8750,
  "coprod;": 8720,
  "copysr;": 8471,
  "cularr;": 8630,
  "cupcap;": 10822,
  "cupcup;": 10826,
  "cupdot;": 8845,
  "curarr;": 8631,
  "curren;": 164,
  "cylcty;": 9005,
  "dagger;": 8224,
  "daleth;": 8504,
  "dcaron;": 271,
  "dfisht;": 10623,
  "divide;": 247,
  "divonx;": 8903,
  "dlcorn;": 8990,
  "dlcrop;": 8973,
  "dollar;": 36,
  "drcorn;": 8991,
  "drcrop;": 8972,
  "dstrok;": 273,
  "eacute;": 233,
  "easter;": 10862,
  "ecaron;": 283,
  "ecolon;": 8789,
  "egrave;": 232,
  "egsdot;": 10904,
  "elsdot;": 10903,
  "emptyv;": 8709,
  "emsp13;": 8196,
  "emsp14;": 8197,
  "eparsl;": 10723,
  "eqcirc;": 8790,
  "equals;": 61,
  "equest;": 8799,
  "female;": 9792,
  "ffilig;": 64259,
  "ffllig;": 64260,
  "forall;": 8704,
  "frac12;": 189,
  "frac13;": 8531,
  "frac14;": 188,
  "frac15;": 8533,
  "frac16;": 8537,
  "frac18;": 8539,
  "frac23;": 8532,
  "frac25;": 8534,
  "frac34;": 190,
  "frac35;": 8535,
  "frac38;": 8540,
  "frac45;": 8536,
  "frac56;": 8538,
  "frac58;": 8541,
  "frac78;": 8542,
  "gacute;": 501,
  "gammad;": 989,
  "gbreve;": 287,
  "gesdot;": 10880,
  "gesles;": 10900,
  "gtlPar;": 10645,
  "gtrarr;": 10616,
  "gtrdot;": 8919,
  "gtrsim;": 8819,
  "hairsp;": 8202,
  "hamilt;": 8459,
  "hardcy;": 1098,
  "hearts;": 9829,
  "hellip;": 8230,
  "hercon;": 8889,
  "homtht;": 8763,
  "horbar;": 8213,
  "hslash;": 8463,
  "hstrok;": 295,
  "hybull;": 8259,
  "hyphen;": 8208,
  "iacute;": 237,
  "igrave;": 236,
  "iiiint;": 10764,
  "iinfin;": 10716,
  "incare;": 8453,
  "inodot;": 305,
  "intcal;": 8890,
  "iquest;": 191,
  "isinsv;": 8947,
  "itilde;": 297,
  "jsercy;": 1112,
  "kappav;": 1008,
  "kcedil;": 311,
  "kgreen;": 312,
  "lAtail;": 10523,
  "lacute;": 314,
  "lagran;": 8466,
  "lambda;": 955,
  "langle;": 10216,
  "larrfs;": 10525,
  "larrhk;": 8617,
  "larrlp;": 8619,
  "larrpl;": 10553,
  "larrtl;": 8610,
  "latail;": 10521,
  "lbrace;": 123,
  "lbrack;": 91,
  "lcaron;": 318,
  "lcedil;": 316,
  "ldquor;": 8222,
  "lesdot;": 10879,
  "lesges;": 10899,
  "lfisht;": 10620,
  "lfloor;": 8970,
  "lharul;": 10602,
  "llhard;": 10603,
  "lmidot;": 320,
  "lmoust;": 9136,
  "loplus;": 10797,
  "lowast;": 8727,
  "lowbar;": 95,
  "lparlt;": 10643,
  "lrhard;": 10605,
  "lsaquo;": 8249,
  "lsquor;": 8218,
  "lstrok;": 322,
  "lthree;": 8907,
  "ltimes;": 8905,
  "ltlarr;": 10614,
  "ltrPar;": 10646,
  "mapsto;": 8614,
  "marker;": 9646,
  "mcomma;": 10793,
  "midast;": 42,
  "midcir;": 10992,
  "middot;": 183,
  "minusb;": 8863,
  "minusd;": 8760,
  "mnplus;": 8723,
  "models;": 8871,
  "mstpos;": 8766,
  "nVDash;": 8879,
  "nVdash;": 8878,
  "nacute;": 324,
  "nbumpe;": 8783,
  "ncaron;": 328,
  "ncedil;": 326,
  "nearhk;": 10532,
  "nequiv;": 8802,
  "nesear;": 10536,
  "nexist;": 8708,
  "nltrie;": 8940,
  "notinE;": 8953,
  "nparsl;": 11005,
  "nprcue;": 8928,
  "nrarrc;": 10547,
  "nrarrw;": 8605,
  "nrtrie;": 8941,
  "nsccue;": 8929,
  "nsimeq;": 8772,
  "ntilde;": 241,
  "numero;": 8470,
  "nvDash;": 8877,
  "nvHarr;": 10500,
  "nvdash;": 8876,
  "nvlArr;": 10498,
  "nvrArr;": 10499,
  "nwarhk;": 10531,
  "nwnear;": 10535,
  "oacute;": 243,
  "odblac;": 337,
  "odsold;": 10684,
  "ograve;": 242,
  "ominus;": 8854,
  "origof;": 8886,
  "oslash;": 248,
  "otilde;": 245,
  "otimes;": 8855,
  "parsim;": 10995,
  "percnt;": 37,
  "period;": 46,
  "permil;": 8240,
  "phmmat;": 8499,
  "planck;": 8463,
  "plankv;": 8463,
  "plusdo;": 8724,
  "plusdu;": 10789,
  "plusmn;": 177,
  "preceq;": 10927,
  "primes;": 8473,
  "prnsim;": 8936,
  "propto;": 8733,
  "prurel;": 8880,
  "puncsp;": 8200,
  "qprime;": 8279,
  "rAtail;": 10524,
  "racute;": 341,
  "rangle;": 10217,
  "rarrap;": 10613,
  "rarrfs;": 10526,
  "rarrhk;": 8618,
  "rarrlp;": 8620,
  "rarrpl;": 10565,
  "rarrtl;": 8611,
  "ratail;": 10522,
  "rbrace;": 125,
  "rbrack;": 93,
  "rcaron;": 345,
  "rcedil;": 343,
  "rdquor;": 8221,
  "rfisht;": 10621,
  "rfloor;": 8971,
  "rharul;": 10604,
  "rmoust;": 9137,
  "roplus;": 10798,
  "rpargt;": 10644,
  "rsaquo;": 8250,
  "rsquor;": 8217,
  "rthree;": 8908,
  "rtimes;": 8906,
  "sacute;": 347,
  "scaron;": 353,
  "scedil;": 351,
  "scnsim;": 8937,
  "searhk;": 10533,
  "seswar;": 10537,
  "sfrown;": 8994,
  "shchcy;": 1097,
  "sigmaf;": 962,
  "sigmav;": 962,
  "simdot;": 10858,
  "smashp;": 10803,
  "softcy;": 1100,
  "solbar;": 9023,
  "spades;": 9824,
  "sqcaps;": 8851,
  "sqcups;": 8852,
  "sqsube;": 8849,
  "sqsupe;": 8850,
  "square;": 9633,
  "squarf;": 9642,
  "ssetmn;": 8726,
  "ssmile;": 8995,
  "sstarf;": 8902,
  "subdot;": 10941,
  "subset;": 8834,
  "subsim;": 10951,
  "subsub;": 10965,
  "subsup;": 10963,
  "succeq;": 10928,
  "supdot;": 10942,
  "supset;": 8835,
  "supsim;": 10952,
  "supsub;": 10964,
  "supsup;": 10966,
  "swarhk;": 10534,
  "swnwar;": 10538,
  "target;": 8982,
  "tcaron;": 357,
  "tcedil;": 355,
  "telrec;": 8981,
  "there4;": 8756,
  "thetav;": 977,
  "thinsp;": 8201,
  "thksim;": 8764,
  "timesb;": 8864,
  "timesd;": 10800,
  "topbot;": 9014,
  "topcir;": 10993,
  "tprime;": 8244,
  "tridot;": 9708,
  "tstrok;": 359,
  "uacute;": 250,
  "ubreve;": 365,
  "udblac;": 369,
  "ufisht;": 10622,
  "ugrave;": 249,
  "ulcorn;": 8988,
  "ulcrop;": 8975,
  "urcorn;": 8989,
  "urcrop;": 8974,
  "utilde;": 361,
  "vangrt;": 10652,
  "varphi;": 981,
  "varrho;": 1009,
  "veebar;": 8891,
  "vellip;": 8942,
  "verbar;": 124,
  "vsubnE;": 10955,
  "vsubne;": 8842,
  "vsupnE;": 10956,
  "vsupne;": 8843,
  "wedbar;": 10847,
  "wedgeq;": 8793,
  "weierp;": 8472,
  "wreath;": 8768,
  "xoplus;": 10753,
  "xotime;": 10754,
  "xsqcup;": 10758,
  "xuplus;": 10756,
  "xwedge;": 8896,
  "yacute;": 253,
  "zacute;": 378,
  "zcaron;": 382,
  "zeetrf;": 8488,
  "AElig;": 198,
  Aacute: 193,
  "Acirc;": 194,
  Agrave: 192,
  "Alpha;": 913,
  "Amacr;": 256,
  "Aogon;": 260,
  "Aring;": 197,
  Atilde: 195,
  "Breve;": 728,
  Ccedil: 199,
  "Ccirc;": 264,
  "Colon;": 8759,
  "Cross;": 10799,
  "Dashv;": 10980,
  "Delta;": 916,
  Eacute: 201,
  "Ecirc;": 202,
  Egrave: 200,
  "Emacr;": 274,
  "Eogon;": 280,
  "Equal;": 10869,
  "Gamma;": 915,
  "Gcirc;": 284,
  "Hacek;": 711,
  "Hcirc;": 292,
  "IJlig;": 306,
  Iacute: 205,
  "Icirc;": 206,
  Igrave: 204,
  "Imacr;": 298,
  "Iogon;": 302,
  "Iukcy;": 1030,
  "Jcirc;": 308,
  "Jukcy;": 1028,
  "Kappa;": 922,
  Ntilde: 209,
  "OElig;": 338,
  Oacute: 211,
  "Ocirc;": 212,
  Ograve: 210,
  "Omacr;": 332,
  "Omega;": 937,
  Oslash: 216,
  Otilde: 213,
  "Prime;": 8243,
  "RBarr;": 10512,
  "Scirc;": 348,
  "Sigma;": 931,
  "THORN;": 222,
  "TRADE;": 8482,
  "TSHcy;": 1035,
  "Theta;": 920,
  "Tilde;": 8764,
  Uacute: 218,
  "Ubrcy;": 1038,
  "Ucirc;": 219,
  Ugrave: 217,
  "Umacr;": 362,
  "Union;": 8899,
  "Uogon;": 370,
  "UpTee;": 8869,
  "Uring;": 366,
  "VDash;": 8875,
  "Vdash;": 8873,
  "Wcirc;": 372,
  "Wedge;": 8896,
  Yacute: 221,
  "Ycirc;": 374,
  aacute: 225,
  "acirc;": 226,
  "acute;": 180,
  "aelig;": 230,
  agrave: 224,
  "aleph;": 8501,
  "alpha;": 945,
  "amacr;": 257,
  "amalg;": 10815,
  "angle;": 8736,
  "angrt;": 8735,
  "angst;": 197,
  "aogon;": 261,
  "aring;": 229,
  "asymp;": 8776,
  atilde: 227,
  "awint;": 10769,
  "bcong;": 8780,
  "bdquo;": 8222,
  "bepsi;": 1014,
  "blank;": 9251,
  "blk12;": 9618,
  "blk14;": 9617,
  "blk34;": 9619,
  "block;": 9608,
  "boxDL;": 9559,
  "boxDR;": 9556,
  "boxDl;": 9558,
  "boxDr;": 9555,
  "boxHD;": 9574,
  "boxHU;": 9577,
  "boxHd;": 9572,
  "boxHu;": 9575,
  "boxUL;": 9565,
  "boxUR;": 9562,
  "boxUl;": 9564,
  "boxUr;": 9561,
  "boxVH;": 9580,
  "boxVL;": 9571,
  "boxVR;": 9568,
  "boxVh;": 9579,
  "boxVl;": 9570,
  "boxVr;": 9567,
  "boxdL;": 9557,
  "boxdR;": 9554,
  "boxdl;": 9488,
  "boxdr;": 9484,
  "boxhD;": 9573,
  "boxhU;": 9576,
  "boxhd;": 9516,
  "boxhu;": 9524,
  "boxuL;": 9563,
  "boxuR;": 9560,
  "boxul;": 9496,
  "boxur;": 9492,
  "boxvH;": 9578,
  "boxvL;": 9569,
  "boxvR;": 9566,
  "boxvh;": 9532,
  "boxvl;": 9508,
  "boxvr;": 9500,
  "breve;": 728,
  brvbar: 166,
  "bsemi;": 8271,
  "bsime;": 8909,
  "bsolb;": 10693,
  "bumpE;": 10926,
  "bumpe;": 8783,
  "caret;": 8257,
  "caron;": 711,
  "ccaps;": 10829,
  ccedil: 231,
  "ccirc;": 265,
  "ccups;": 10828,
  "cedil;": 184,
  "check;": 10003,
  "clubs;": 9827,
  "colon;": 58,
  "comma;": 44,
  "crarr;": 8629,
  "cross;": 10007,
  "csube;": 10961,
  "csupe;": 10962,
  "ctdot;": 8943,
  "cuepr;": 8926,
  "cuesc;": 8927,
  "cupor;": 10821,
  curren: 164,
  "cuvee;": 8910,
  "cuwed;": 8911,
  "cwint;": 8753,
  "dashv;": 8867,
  "dblac;": 733,
  "ddarr;": 8650,
  "delta;": 948,
  "dharl;": 8643,
  "dharr;": 8642,
  "diams;": 9830,
  "disin;": 8946,
  divide: 247,
  "doteq;": 8784,
  "dtdot;": 8945,
  "dtrif;": 9662,
  "duarr;": 8693,
  "duhar;": 10607,
  "eDDot;": 10871,
  eacute: 233,
  "ecirc;": 234,
  "efDot;": 8786,
  egrave: 232,
  "emacr;": 275,
  "empty;": 8709,
  "eogon;": 281,
  "eplus;": 10865,
  "epsiv;": 1013,
  "eqsim;": 8770,
  "equiv;": 8801,
  "erDot;": 8787,
  "erarr;": 10609,
  "esdot;": 8784,
  "exist;": 8707,
  "fflig;": 64256,
  "filig;": 64257,
  "fjlig;": 102,
  "fllig;": 64258,
  "fltns;": 9649,
  "forkv;": 10969,
  frac12: 189,
  frac14: 188,
  frac34: 190,
  "frasl;": 8260,
  "frown;": 8994,
  "gamma;": 947,
  "gcirc;": 285,
  "gescc;": 10921,
  "gimel;": 8503,
  "gneqq;": 8809,
  "gnsim;": 8935,
  "grave;": 96,
  "gsime;": 10894,
  "gsiml;": 10896,
  "gtcir;": 10874,
  "gtdot;": 8919,
  "harrw;": 8621,
  "hcirc;": 293,
  "hoarr;": 8703,
  iacute: 237,
  "icirc;": 238,
  "iexcl;": 161,
  igrave: 236,
  "iiint;": 8749,
  "iiota;": 8489,
  "ijlig;": 307,
  "imacr;": 299,
  "image;": 8465,
  "imath;": 305,
  "imped;": 437,
  "infin;": 8734,
  "iogon;": 303,
  "iprod;": 10812,
  iquest: 191,
  "isinE;": 8953,
  "isins;": 8948,
  "isinv;": 8712,
  "iukcy;": 1110,
  "jcirc;": 309,
  "jmath;": 567,
  "jukcy;": 1108,
  "kappa;": 954,
  "lAarr;": 8666,
  "lBarr;": 10510,
  "langd;": 10641,
  "laquo;": 171,
  "larrb;": 8676,
  "lates;": 10925,
  "lbarr;": 10508,
  "lbbrk;": 10098,
  "lbrke;": 10635,
  "lceil;": 8968,
  "ldquo;": 8220,
  "lescc;": 10920,
  "lhard;": 8637,
  "lharu;": 8636,
  "lhblk;": 9604,
  "llarr;": 8647,
  "lltri;": 9722,
  "lneqq;": 8808,
  "lnsim;": 8934,
  "loang;": 10220,
  "loarr;": 8701,
  "lobrk;": 10214,
  "lopar;": 10629,
  "lrarr;": 8646,
  "lrhar;": 8651,
  "lrtri;": 8895,
  "lsime;": 10893,
  "lsimg;": 10895,
  "lsquo;": 8216,
  "ltcir;": 10873,
  "ltdot;": 8918,
  "ltrie;": 8884,
  "ltrif;": 9666,
  "mDDot;": 8762,
  "mdash;": 8212,
  "micro;": 181,
  middot: 183,
  "minus;": 8722,
  "mumap;": 8888,
  "nabla;": 8711,
  "napid;": 8779,
  "napos;": 329,
  "natur;": 9838,
  "nbump;": 8782,
  "ncong;": 8775,
  "ndash;": 8211,
  "neArr;": 8663,
  "nearr;": 8599,
  "nedot;": 8784,
  "nesim;": 8770,
  "ngeqq;": 8807,
  "ngsim;": 8821,
  "nhArr;": 8654,
  "nharr;": 8622,
  "nhpar;": 10994,
  "nlArr;": 8653,
  "nlarr;": 8602,
  "nleqq;": 8806,
  "nless;": 8814,
  "nlsim;": 8820,
  "nltri;": 8938,
  "notin;": 8713,
  "notni;": 8716,
  "npart;": 8706,
  "nprec;": 8832,
  "nrArr;": 8655,
  "nrarr;": 8603,
  "nrtri;": 8939,
  "nsime;": 8772,
  "nsmid;": 8740,
  "nspar;": 8742,
  "nsubE;": 10949,
  "nsube;": 8840,
  "nsucc;": 8833,
  "nsupE;": 10950,
  "nsupe;": 8841,
  ntilde: 241,
  "numsp;": 8199,
  "nvsim;": 8764,
  "nwArr;": 8662,
  "nwarr;": 8598,
  oacute: 243,
  "ocirc;": 244,
  "odash;": 8861,
  "oelig;": 339,
  "ofcir;": 10687,
  ograve: 242,
  "ohbar;": 10677,
  "olarr;": 8634,
  "olcir;": 10686,
  "oline;": 8254,
  "omacr;": 333,
  "omega;": 969,
  "operp;": 10681,
  "oplus;": 8853,
  "orarr;": 8635,
  "order;": 8500,
  oslash: 248,
  otilde: 245,
  "ovbar;": 9021,
  "parsl;": 11005,
  "phone;": 9742,
  "plusb;": 8862,
  "pluse;": 10866,
  plusmn: 177,
  "pound;": 163,
  "prcue;": 8828,
  "prime;": 8242,
  "prnap;": 10937,
  "prsim;": 8830,
  "quest;": 63,
  "rAarr;": 8667,
  "rBarr;": 10511,
  "radic;": 8730,
  "rangd;": 10642,
  "range;": 10661,
  "raquo;": 187,
  "rarrb;": 8677,
  "rarrc;": 10547,
  "rarrw;": 8605,
  "ratio;": 8758,
  "rbarr;": 10509,
  "rbbrk;": 10099,
  "rbrke;": 10636,
  "rceil;": 8969,
  "rdquo;": 8221,
  "reals;": 8477,
  "rhard;": 8641,
  "rharu;": 8640,
  "rlarr;": 8644,
  "rlhar;": 8652,
  "rnmid;": 10990,
  "roang;": 10221,
  "roarr;": 8702,
  "robrk;": 10215,
  "ropar;": 10630,
  "rrarr;": 8649,
  "rsquo;": 8217,
  "rtrie;": 8885,
  "rtrif;": 9656,
  "sbquo;": 8218,
  "sccue;": 8829,
  "scirc;": 349,
  "scnap;": 10938,
  "scsim;": 8831,
  "sdotb;": 8865,
  "sdote;": 10854,
  "seArr;": 8664,
  "searr;": 8600,
  "setmn;": 8726,
  "sharp;": 9839,
  "sigma;": 963,
  "simeq;": 8771,
  "simgE;": 10912,
  "simlE;": 10911,
  "simne;": 8774,
  "slarr;": 8592,
  "smile;": 8995,
  "smtes;": 10924,
  "sqcap;": 8851,
  "sqcup;": 8852,
  "sqsub;": 8847,
  "sqsup;": 8848,
  "srarr;": 8594,
  "starf;": 9733,
  "strns;": 175,
  "subnE;": 10955,
  "subne;": 8842,
  "supnE;": 10956,
  "supne;": 8843,
  "swArr;": 8665,
  "swarr;": 8601,
  "szlig;": 223,
  "theta;": 952,
  "thkap;": 8776,
  "thorn;": 254,
  "tilde;": 732,
  "times;": 215,
  "trade;": 8482,
  "trisb;": 10701,
  "tshcy;": 1115,
  "twixt;": 8812,
  uacute: 250,
  "ubrcy;": 1118,
  "ucirc;": 251,
  "udarr;": 8645,
  "udhar;": 10606,
  ugrave: 249,
  "uharl;": 8639,
  "uharr;": 8638,
  "uhblk;": 9600,
  "ultri;": 9720,
  "umacr;": 363,
  "uogon;": 371,
  "uplus;": 8846,
  "upsih;": 978,
  "uring;": 367,
  "urtri;": 9721,
  "utdot;": 8944,
  "utrif;": 9652,
  "uuarr;": 8648,
  "vBarv;": 10985,
  "vDash;": 8872,
  "varpi;": 982,
  "vdash;": 8866,
  "veeeq;": 8794,
  "vltri;": 8882,
  "vnsub;": 8834,
  "vnsup;": 8835,
  "vprop;": 8733,
  "vrtri;": 8883,
  "wcirc;": 373,
  "wedge;": 8743,
  "xcirc;": 9711,
  "xdtri;": 9661,
  "xhArr;": 10234,
  "xharr;": 10231,
  "xlArr;": 10232,
  "xlarr;": 10229,
  "xodot;": 10752,
  "xrArr;": 10233,
  "xrarr;": 10230,
  "xutri;": 9651,
  yacute: 253,
  "ycirc;": 375,
  AElig: 198,
  Acirc: 194,
  "Aopf;": 120120,
  Aring: 197,
  "Ascr;": 119964,
  "Auml;": 196,
  "Barv;": 10983,
  "Beta;": 914,
  "Bopf;": 120121,
  "Bscr;": 8492,
  "CHcy;": 1063,
  "COPY;": 169,
  "Cdot;": 266,
  "Copf;": 8450,
  "Cscr;": 119966,
  "DJcy;": 1026,
  "DScy;": 1029,
  "DZcy;": 1039,
  "Darr;": 8609,
  "Dopf;": 120123,
  "Dscr;": 119967,
  Ecirc: 202,
  "Edot;": 278,
  "Eopf;": 120124,
  "Escr;": 8496,
  "Esim;": 10867,
  "Euml;": 203,
  "Fopf;": 120125,
  "Fscr;": 8497,
  "GJcy;": 1027,
  "Gdot;": 288,
  "Gopf;": 120126,
  "Gscr;": 119970,
  "Hopf;": 8461,
  "Hscr;": 8459,
  "IEcy;": 1045,
  "IOcy;": 1025,
  Icirc: 206,
  "Idot;": 304,
  "Iopf;": 120128,
  "Iota;": 921,
  "Iscr;": 8464,
  "Iuml;": 207,
  "Jopf;": 120129,
  "Jscr;": 119973,
  "KHcy;": 1061,
  "KJcy;": 1036,
  "Kopf;": 120130,
  "Kscr;": 119974,
  "LJcy;": 1033,
  "Lang;": 10218,
  "Larr;": 8606,
  "Lopf;": 120131,
  "Lscr;": 8466,
  "Mopf;": 120132,
  "Mscr;": 8499,
  "NJcy;": 1034,
  "Nopf;": 8469,
  "Nscr;": 119977,
  Ocirc: 212,
  "Oopf;": 120134,
  "Oscr;": 119978,
  "Ouml;": 214,
  "Popf;": 8473,
  "Pscr;": 119979,
  "QUOT;": 34,
  "Qopf;": 8474,
  "Qscr;": 119980,
  "Rang;": 10219,
  "Rarr;": 8608,
  "Ropf;": 8477,
  "Rscr;": 8475,
  "SHcy;": 1064,
  "Sopf;": 120138,
  "Sqrt;": 8730,
  "Sscr;": 119982,
  "Star;": 8902,
  THORN: 222,
  "TScy;": 1062,
  "Topf;": 120139,
  "Tscr;": 119983,
  "Uarr;": 8607,
  Ucirc: 219,
  "Uopf;": 120140,
  "Upsi;": 978,
  "Uscr;": 119984,
  "Uuml;": 220,
  "Vbar;": 10987,
  "Vert;": 8214,
  "Vopf;": 120141,
  "Vscr;": 119985,
  "Wopf;": 120142,
  "Wscr;": 119986,
  "Xopf;": 120143,
  "Xscr;": 119987,
  "YAcy;": 1071,
  "YIcy;": 1031,
  "YUcy;": 1070,
  "Yopf;": 120144,
  "Yscr;": 119988,
  "Yuml;": 376,
  "ZHcy;": 1046,
  "Zdot;": 379,
  "Zeta;": 918,
  "Zopf;": 8484,
  "Zscr;": 119989,
  acirc: 226,
  acute: 180,
  aelig: 230,
  "andd;": 10844,
  "andv;": 10842,
  "ange;": 10660,
  "aopf;": 120146,
  "apid;": 8779,
  "apos;": 39,
  aring: 229,
  "ascr;": 119990,
  "auml;": 228,
  "bNot;": 10989,
  "bbrk;": 9141,
  "beta;": 946,
  "beth;": 8502,
  "bnot;": 8976,
  "bopf;": 120147,
  "boxH;": 9552,
  "boxV;": 9553,
  "boxh;": 9472,
  "boxv;": 9474,
  "bscr;": 119991,
  "bsim;": 8765,
  "bsol;": 92,
  "bull;": 8226,
  "bump;": 8782,
  "caps;": 8745,
  "cdot;": 267,
  cedil: 184,
  "cent;": 162,
  "chcy;": 1095,
  "cirE;": 10691,
  "circ;": 710,
  "cire;": 8791,
  "comp;": 8705,
  "cong;": 8773,
  "copf;": 120148,
  "copy;": 169,
  "cscr;": 119992,
  "csub;": 10959,
  "csup;": 10960,
  "cups;": 8746,
  "dArr;": 8659,
  "dHar;": 10597,
  "darr;": 8595,
  "dash;": 8208,
  "diam;": 8900,
  "djcy;": 1106,
  "dopf;": 120149,
  "dscr;": 119993,
  "dscy;": 1109,
  "dsol;": 10742,
  "dtri;": 9663,
  "dzcy;": 1119,
  "eDot;": 8785,
  "ecir;": 8790,
  ecirc: 234,
  "edot;": 279,
  "emsp;": 8195,
  "ensp;": 8194,
  "eopf;": 120150,
  "epar;": 8917,
  "epsi;": 949,
  "escr;": 8495,
  "esim;": 8770,
  "euml;": 235,
  "euro;": 8364,
  "excl;": 33,
  "flat;": 9837,
  "fnof;": 402,
  "fopf;": 120151,
  "fork;": 8916,
  "fscr;": 119995,
  "gdot;": 289,
  "geqq;": 8807,
  "gesl;": 8923,
  "gjcy;": 1107,
  "gnap;": 10890,
  "gneq;": 10888,
  "gopf;": 120152,
  "gscr;": 8458,
  "gsim;": 8819,
  "gtcc;": 10919,
  "gvnE;": 8809,
  "hArr;": 8660,
  "half;": 189,
  "harr;": 8596,
  "hbar;": 8463,
  "hopf;": 120153,
  "hscr;": 119997,
  icirc: 238,
  "iecy;": 1077,
  iexcl: 161,
  "imof;": 8887,
  "iocy;": 1105,
  "iopf;": 120154,
  "iota;": 953,
  "iscr;": 119998,
  "isin;": 8712,
  "iuml;": 239,
  "jopf;": 120155,
  "jscr;": 119999,
  "khcy;": 1093,
  "kjcy;": 1116,
  "kopf;": 120156,
  "kscr;": 12e4,
  "lArr;": 8656,
  "lHar;": 10594,
  "lang;": 10216,
  laquo: 171,
  "larr;": 8592,
  "late;": 10925,
  "lcub;": 123,
  "ldca;": 10550,
  "ldsh;": 8626,
  "leqq;": 8806,
  "lesg;": 8922,
  "ljcy;": 1113,
  "lnap;": 10889,
  "lneq;": 10887,
  "lopf;": 120157,
  "lozf;": 10731,
  "lpar;": 40,
  "lscr;": 120001,
  "lsim;": 8818,
  "lsqb;": 91,
  "ltcc;": 10918,
  "ltri;": 9667,
  "lvnE;": 8808,
  "macr;": 175,
  "male;": 9794,
  "malt;": 10016,
  micro: 181,
  "mlcp;": 10971,
  "mldr;": 8230,
  "mopf;": 120158,
  "mscr;": 120002,
  "nGtv;": 8811,
  "nLtv;": 8810,
  "nang;": 8736,
  "napE;": 10864,
  "nbsp;": 160,
  "ncap;": 10819,
  "ncup;": 10818,
  "ngeq;": 8817,
  "nges;": 10878,
  "ngtr;": 8815,
  "nisd;": 8954,
  "njcy;": 1114,
  "nldr;": 8229,
  "nleq;": 8816,
  "nles;": 10877,
  "nmid;": 8740,
  "nopf;": 120159,
  "npar;": 8742,
  "npre;": 10927,
  "nsce;": 10928,
  "nscr;": 120003,
  "nsim;": 8769,
  "nsub;": 8836,
  "nsup;": 8837,
  "ntgl;": 8825,
  "ntlg;": 8824,
  "nvap;": 8781,
  "nvge;": 8805,
  "nvgt;": 62,
  "nvle;": 8804,
  "nvlt;": 60,
  "oast;": 8859,
  "ocir;": 8858,
  ocirc: 244,
  "odiv;": 10808,
  "odot;": 8857,
  "ogon;": 731,
  "oint;": 8750,
  "omid;": 10678,
  "oopf;": 120160,
  "opar;": 10679,
  "ordf;": 170,
  "ordm;": 186,
  "oror;": 10838,
  "oscr;": 8500,
  "osol;": 8856,
  "ouml;": 246,
  "para;": 182,
  "part;": 8706,
  "perp;": 8869,
  "phiv;": 981,
  "plus;": 43,
  "popf;": 120161,
  pound: 163,
  "prap;": 10935,
  "prec;": 8826,
  "prnE;": 10933,
  "prod;": 8719,
  "prop;": 8733,
  "pscr;": 120005,
  "qint;": 10764,
  "qopf;": 120162,
  "qscr;": 120006,
  "quot;": 34,
  "rArr;": 8658,
  "rHar;": 10596,
  "race;": 8765,
  "rang;": 10217,
  raquo: 187,
  "rarr;": 8594,
  "rcub;": 125,
  "rdca;": 10551,
  "rdsh;": 8627,
  "real;": 8476,
  "rect;": 9645,
  "rhov;": 1009,
  "ring;": 730,
  "ropf;": 120163,
  "rpar;": 41,
  "rscr;": 120007,
  "rsqb;": 93,
  "rtri;": 9657,
  "scap;": 10936,
  "scnE;": 10934,
  "sdot;": 8901,
  "sect;": 167,
  "semi;": 59,
  "sext;": 10038,
  "shcy;": 1096,
  "sime;": 8771,
  "simg;": 10910,
  "siml;": 10909,
  "smid;": 8739,
  "smte;": 10924,
  "solb;": 10692,
  "sopf;": 120164,
  "spar;": 8741,
  "squf;": 9642,
  "sscr;": 120008,
  "star;": 9734,
  "subE;": 10949,
  "sube;": 8838,
  "succ;": 8827,
  "sung;": 9834,
  "sup1;": 185,
  "sup2;": 178,
  "sup3;": 179,
  "supE;": 10950,
  "supe;": 8839,
  szlig: 223,
  "tbrk;": 9140,
  "tdot;": 8411,
  thorn: 254,
  times: 215,
  "tint;": 8749,
  "toea;": 10536,
  "topf;": 120165,
  "tosa;": 10537,
  "trie;": 8796,
  "tscr;": 120009,
  "tscy;": 1094,
  "uArr;": 8657,
  "uHar;": 10595,
  "uarr;": 8593,
  ucirc: 251,
  "uopf;": 120166,
  "upsi;": 965,
  "uscr;": 120010,
  "utri;": 9653,
  "uuml;": 252,
  "vArr;": 8661,
  "vBar;": 10984,
  "varr;": 8597,
  "vert;": 124,
  "vopf;": 120167,
  "vscr;": 120011,
  "wopf;": 120168,
  "wscr;": 120012,
  "xcap;": 8898,
  "xcup;": 8899,
  "xmap;": 10236,
  "xnis;": 8955,
  "xopf;": 120169,
  "xscr;": 120013,
  "xvee;": 8897,
  "yacy;": 1103,
  "yicy;": 1111,
  "yopf;": 120170,
  "yscr;": 120014,
  "yucy;": 1102,
  "yuml;": 255,
  "zdot;": 380,
  "zeta;": 950,
  "zhcy;": 1078,
  "zopf;": 120171,
  "zscr;": 120015,
  "zwnj;": 8204,
  "AMP;": 38,
  "Acy;": 1040,
  "Afr;": 120068,
  "And;": 10835,
  Auml: 196,
  "Bcy;": 1041,
  "Bfr;": 120069,
  COPY: 169,
  "Cap;": 8914,
  "Cfr;": 8493,
  "Chi;": 935,
  "Cup;": 8915,
  "Dcy;": 1044,
  "Del;": 8711,
  "Dfr;": 120071,
  "Dot;": 168,
  "ENG;": 330,
  "ETH;": 208,
  "Ecy;": 1069,
  "Efr;": 120072,
  "Eta;": 919,
  Euml: 203,
  "Fcy;": 1060,
  "Ffr;": 120073,
  "Gcy;": 1043,
  "Gfr;": 120074,
  "Hat;": 94,
  "Hfr;": 8460,
  "Icy;": 1048,
  "Ifr;": 8465,
  "Int;": 8748,
  Iuml: 207,
  "Jcy;": 1049,
  "Jfr;": 120077,
  "Kcy;": 1050,
  "Kfr;": 120078,
  "Lcy;": 1051,
  "Lfr;": 120079,
  "Lsh;": 8624,
  "Map;": 10501,
  "Mcy;": 1052,
  "Mfr;": 120080,
  "Ncy;": 1053,
  "Nfr;": 120081,
  "Not;": 10988,
  "Ocy;": 1054,
  "Ofr;": 120082,
  Ouml: 214,
  "Pcy;": 1055,
  "Pfr;": 120083,
  "Phi;": 934,
  "Psi;": 936,
  QUOT: 34,
  "Qfr;": 120084,
  "REG;": 174,
  "Rcy;": 1056,
  "Rfr;": 8476,
  "Rho;": 929,
  "Rsh;": 8625,
  "Scy;": 1057,
  "Sfr;": 120086,
  "Sub;": 8912,
  "Sum;": 8721,
  "Sup;": 8913,
  "Tab;": 9,
  "Tau;": 932,
  "Tcy;": 1058,
  "Tfr;": 120087,
  "Ucy;": 1059,
  "Ufr;": 120088,
  Uuml: 220,
  "Vcy;": 1042,
  "Vee;": 8897,
  "Vfr;": 120089,
  "Wfr;": 120090,
  "Xfr;": 120091,
  "Ycy;": 1067,
  "Yfr;": 120092,
  "Zcy;": 1047,
  "Zfr;": 8488,
  "acE;": 8766,
  "acd;": 8767,
  "acy;": 1072,
  "afr;": 120094,
  "amp;": 38,
  "and;": 8743,
  "ang;": 8736,
  "apE;": 10864,
  "ape;": 8778,
  "ast;": 42,
  auml: 228,
  "bcy;": 1073,
  "bfr;": 120095,
  "bne;": 61,
  "bot;": 8869,
  "cap;": 8745,
  cent: 162,
  "cfr;": 120096,
  "chi;": 967,
  "cir;": 9675,
  copy: 169,
  "cup;": 8746,
  "dcy;": 1076,
  "deg;": 176,
  "dfr;": 120097,
  "die;": 168,
  "div;": 247,
  "dot;": 729,
  "ecy;": 1101,
  "efr;": 120098,
  "egs;": 10902,
  "ell;": 8467,
  "els;": 10901,
  "eng;": 331,
  "eta;": 951,
  "eth;": 240,
  euml: 235,
  "fcy;": 1092,
  "ffr;": 120099,
  "gEl;": 10892,
  "gap;": 10886,
  "gcy;": 1075,
  "gel;": 8923,
  "geq;": 8805,
  "ges;": 10878,
  "gfr;": 120100,
  "ggg;": 8921,
  "glE;": 10898,
  "gla;": 10917,
  "glj;": 10916,
  "gnE;": 8809,
  "gne;": 10888,
  "hfr;": 120101,
  "icy;": 1080,
  "iff;": 8660,
  "ifr;": 120102,
  "int;": 8747,
  iuml: 239,
  "jcy;": 1081,
  "jfr;": 120103,
  "kcy;": 1082,
  "kfr;": 120104,
  "lEg;": 10891,
  "lap;": 10885,
  "lat;": 10923,
  "lcy;": 1083,
  "leg;": 8922,
  "leq;": 8804,
  "les;": 10877,
  "lfr;": 120105,
  "lgE;": 10897,
  "lnE;": 8808,
  "lne;": 10887,
  "loz;": 9674,
  "lrm;": 8206,
  "lsh;": 8624,
  macr: 175,
  "map;": 8614,
  "mcy;": 1084,
  "mfr;": 120106,
  "mho;": 8487,
  "mid;": 8739,
  "nGg;": 8921,
  "nGt;": 8811,
  "nLl;": 8920,
  "nLt;": 8810,
  "nap;": 8777,
  nbsp: 160,
  "ncy;": 1085,
  "nfr;": 120107,
  "ngE;": 8807,
  "nge;": 8817,
  "ngt;": 8815,
  "nis;": 8956,
  "niv;": 8715,
  "nlE;": 8806,
  "nle;": 8816,
  "nlt;": 8814,
  "not;": 172,
  "npr;": 8832,
  "nsc;": 8833,
  "num;": 35,
  "ocy;": 1086,
  "ofr;": 120108,
  "ogt;": 10689,
  "ohm;": 937,
  "olt;": 10688,
  "ord;": 10845,
  ordf: 170,
  ordm: 186,
  "orv;": 10843,
  ouml: 246,
  "par;": 8741,
  para: 182,
  "pcy;": 1087,
  "pfr;": 120109,
  "phi;": 966,
  "piv;": 982,
  "prE;": 10931,
  "pre;": 10927,
  "psi;": 968,
  "qfr;": 120110,
  quot: 34,
  "rcy;": 1088,
  "reg;": 174,
  "rfr;": 120111,
  "rho;": 961,
  "rlm;": 8207,
  "rsh;": 8625,
  "scE;": 10932,
  "sce;": 10928,
  "scy;": 1089,
  sect: 167,
  "sfr;": 120112,
  "shy;": 173,
  "sim;": 8764,
  "smt;": 10922,
  "sol;": 47,
  "squ;": 9633,
  "sub;": 8834,
  "sum;": 8721,
  sup1: 185,
  sup2: 178,
  sup3: 179,
  "sup;": 8835,
  "tau;": 964,
  "tcy;": 1090,
  "tfr;": 120113,
  "top;": 8868,
  "ucy;": 1091,
  "ufr;": 120114,
  "uml;": 168,
  uuml: 252,
  "vcy;": 1074,
  "vee;": 8744,
  "vfr;": 120115,
  "wfr;": 120116,
  "xfr;": 120117,
  "ycy;": 1099,
  "yen;": 165,
  "yfr;": 120118,
  yuml: 255,
  "zcy;": 1079,
  "zfr;": 120119,
  "zwj;": 8205,
  AMP: 38,
  "DD;": 8517,
  ETH: 208,
  "GT;": 62,
  "Gg;": 8921,
  "Gt;": 8811,
  "Im;": 8465,
  "LT;": 60,
  "Ll;": 8920,
  "Lt;": 8810,
  "Mu;": 924,
  "Nu;": 925,
  "Or;": 10836,
  "Pi;": 928,
  "Pr;": 10939,
  REG: 174,
  "Re;": 8476,
  "Sc;": 10940,
  "Xi;": 926,
  "ac;": 8766,
  "af;": 8289,
  amp: 38,
  "ap;": 8776,
  "dd;": 8518,
  deg: 176,
  "ee;": 8519,
  "eg;": 10906,
  "el;": 10905,
  eth: 240,
  "gE;": 8807,
  "ge;": 8805,
  "gg;": 8811,
  "gl;": 8823,
  "gt;": 62,
  "ic;": 8291,
  "ii;": 8520,
  "in;": 8712,
  "it;": 8290,
  "lE;": 8806,
  "le;": 8804,
  "lg;": 8822,
  "ll;": 8810,
  "lt;": 60,
  "mp;": 8723,
  "mu;": 956,
  "ne;": 8800,
  "ni;": 8715,
  not: 172,
  "nu;": 957,
  "oS;": 9416,
  "or;": 8744,
  "pi;": 960,
  "pm;": 177,
  "pr;": 8826,
  reg: 174,
  "rx;": 8478,
  "sc;": 8827,
  shy: 173,
  uml: 168,
  "wp;": 8472,
  "wr;": 8768,
  "xi;": 958,
  yen: 165,
  GT: 62,
  LT: 60,
  gt: 62,
  lt: 60
};
function reg_exp_entity(entity_name, is_attribute_value) {
  if (is_attribute_value && !entity_name.endsWith(";")) {
    return `${entity_name}\\b(?!=)`;
  }
  return entity_name;
}
function get_entity_pattern(is_attribute_value) {
  const reg_exp_num = "#(?:x[a-fA-F\\d]+|\\d+)(?:;)?";
  const reg_exp_entities = Object.keys(entities).map(
    (entity_name) => reg_exp_entity(entity_name, is_attribute_value)
  );
  const entity_pattern = new RegExp(`&(${reg_exp_num}|${reg_exp_entities.join("|")})`, "g");
  return entity_pattern;
}
get_entity_pattern(false);
get_entity_pattern(true);
/* @__PURE__ */ new Map([
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["dt", /* @__PURE__ */ new Set(["dt", "dd"])],
  ["dd", /* @__PURE__ */ new Set(["dt", "dd"])],
  [
    "p",
    new Set(
      "address article aside blockquote div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul".split(
        " "
      )
    )
  ],
  ["rt", /* @__PURE__ */ new Set(["rt", "rp"])],
  ["rp", /* @__PURE__ */ new Set(["rt", "rp"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup"])],
  ["option", /* @__PURE__ */ new Set(["option", "optgroup"])],
  ["thead", /* @__PURE__ */ new Set(["tbody", "tfoot"])],
  ["tbody", /* @__PURE__ */ new Set(["tbody", "tfoot"])],
  ["tfoot", /* @__PURE__ */ new Set(["tbody"])],
  ["tr", /* @__PURE__ */ new Set(["tr", "tbody"])],
  ["td", /* @__PURE__ */ new Set(["td", "th", "tr"])],
  ["th", /* @__PURE__ */ new Set(["td", "th", "tr"])]
]);
const meta_tags = /* @__PURE__ */ new Map([
  ["svelte:head", "Head"],
  ["svelte:options", "Options"],
  ["svelte:window", "Window"],
  ["svelte:document", "Document"],
  ["svelte:body", "Body"]
]);
Array.from(meta_tags.keys()).concat(
  "svelte:self",
  "svelte:component",
  "svelte:fragment",
  "svelte:element"
);
const aria_roles$1 = roles.keys();
const abstract_roles = new Set(aria_roles$1.filter((role) => roles.get(role).abstract));
const non_abstract_roles = aria_roles$1.filter((name2) => !abstract_roles.has(name2));
const non_interactive_roles = new Set(
  non_abstract_roles.filter((name2) => {
    const role = roles.get(name2);
    return (
      // 'toolbar' does not descend from widget, but it does support
      // aria-activedescendant, thus in practice we treat it as a widget.
      // focusable tabpanel elements are recommended if any panels in a set contain content where the first element in the panel is not focusable.
      // 'generic' is meant to have no semantic meaning.
      // 'cell' is treated as CellRole by the AXObject which is interactive, so we treat 'cell' it as interactive as well.
      !["toolbar", "tabpanel", "generic", "cell"].includes(name2) && !role.superClass.some((classes) => classes.includes("widget"))
    );
  }).concat(
    // The `progressbar` is descended from `widget`, but in practice, its
    // value is always `readonly`, so we treat it as a non-interactive role.
    "progressbar"
  )
);
const interactive_roles = new Set(
  non_abstract_roles.filter(
    (name2) => !non_interactive_roles.has(name2) && // 'generic' is meant to have no semantic meaning.
    name2 !== "generic"
  )
);
elementRoles.entries().forEach(([schema, roles2]) => {
  if ([...roles2].every((role) => role !== "generic" && non_interactive_roles.has(role))) ;
});
elementRoles.entries().forEach(([schema, roles2]) => {
  if ([...roles2].every((role) => interactive_roles.has(role))) ;
});
const interactive_ax_objects = new Set(
  [...AXObjects.keys()].filter((name2) => AXObjects.get(name2).type === "widget")
);
const non_interactive_ax_objects = new Set(
  [...AXObjects.keys()].filter(
    (name2) => ["windows", "structure"].includes(AXObjects.get(name2).type)
  )
);
elementAXObjects.entries().forEach(([schema, ax_object]) => {
  if ([...ax_object].every((role) => interactive_ax_objects.has(role))) ;
});
elementAXObjects.entries().forEach(([schema, ax_object]) => {
  if ([...ax_object].every((role) => non_interactive_ax_objects.has(role))) ;
});
const aria_attributes = "activedescendant atomic autocomplete busy checked colcount colindex colspan controls current describedby description details disabled dropeffect errormessage expanded flowto grabbed haspopup hidden invalid keyshortcuts label labelledby level live modal multiline multiselectable orientation owns placeholder posinset pressed readonly relevant required roledescription rowcount rowindex rowspan selected setsize sort valuemax valuemin valuenow valuetext".split(
  " "
);
new Set(aria_attributes);
const aria_roles = roles.keys();
new Set(aria_roles);
x`true`;
x`false`;
const svg_attributes = "accent-height accumulate additive alignment-baseline allowReorder alphabetic amplitude arabic-form ascent attributeName attributeType autoReverse azimuth baseFrequency baseline-shift baseProfile bbox begin bias by calcMode cap-height class clip clipPathUnits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominant-baseline dur dx dy edgeMode elevation enable-background end exponent externalResourcesRequired fill fill-opacity fill-rule filter filterRes filterUnits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight format from fr fx fy g1 g2 glyph-name glyph-orientation-horizontal glyph-orientation-vertical glyphRef gradientTransform gradientUnits hanging height href horiz-adv-x horiz-origin-x id ideographic image-rendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lang lengthAdjust letter-spacing lighting-color limitingConeAngle local marker-end marker-mid marker-start markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical max media method min mode name numOctaves offset onabort onactivate onbegin onclick onend onerror onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup onrepeat onresize onscroll onunload opacity operator order orient orientation origin overflow overline-position overline-thickness panose-1 paint-order pathLength patternContentUnits patternTransform patternUnits pointer-events points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY rendering-intent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shape-rendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stop-color stop-opacity strikethrough-position strikethrough-thickness string stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width style surfaceScale systemLanguage tabindex tableValues target targetX targetY text-anchor text-decoration text-rendering textLength to transform type u1 u2 underline-position underline-thickness unicode unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical values version vert-adv-y vert-origin-x vert-origin-y viewBox viewTarget visibility width widths word-spacing writing-mode x x-height x1 x2 xChannelSelector xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y y1 y2 yChannelSelector z zoomAndPan".split(
  " "
);
const svg_attribute_lookup = /* @__PURE__ */ new Map();
svg_attributes.forEach((name2) => {
  svg_attribute_lookup.set(name2.toLowerCase(), name2);
});
const attribute_lookup = {
  allowfullscreen: { property_name: "allowFullscreen", applies_to: ["iframe"] },
  allowpaymentrequest: { property_name: "allowPaymentRequest", applies_to: ["iframe"] },
  async: { applies_to: ["script"] },
  autofocus: { applies_to: ["button", "input", "keygen", "select", "textarea"] },
  autoplay: { applies_to: ["audio", "video"] },
  checked: { applies_to: ["input"] },
  controls: { applies_to: ["audio", "video"] },
  default: { applies_to: ["track"] },
  defer: { applies_to: ["script"] },
  disabled: {
    applies_to: [
      "button",
      "fieldset",
      "input",
      "keygen",
      "optgroup",
      "option",
      "select",
      "textarea"
    ]
  },
  formnovalidate: { property_name: "formNoValidate", applies_to: ["button", "input"] },
  hidden: {},
  indeterminate: { applies_to: ["input"] },
  inert: {},
  ismap: { property_name: "isMap", applies_to: ["img"] },
  loop: { applies_to: ["audio", "bgsound", "video"] },
  multiple: { applies_to: ["input", "select"] },
  muted: { applies_to: ["audio", "video"] },
  nomodule: { property_name: "noModule", applies_to: ["script"] },
  novalidate: { property_name: "noValidate", applies_to: ["form"] },
  open: { applies_to: ["details", "dialog"] },
  playsinline: { property_name: "playsInline", applies_to: ["video"] },
  readonly: { property_name: "readOnly", applies_to: ["input", "textarea"] },
  required: { applies_to: ["input", "select", "textarea"] },
  reversed: { applies_to: ["ol"] },
  selected: { applies_to: ["option"] },
  value: {
    applies_to: [
      "button",
      "option",
      "input",
      "li",
      "meter",
      "progress",
      "param",
      "select",
      "textarea"
    ]
  }
};
Object.keys(attribute_lookup).forEach((name2) => {
  const metadata = attribute_lookup[name2];
  if (!metadata.property_name) metadata.property_name = name2;
});
const css$8 = {
  code: '.half-border.svelte-nzv49h .red.svelte-nzv49h,.half-border.svelte-nzv49h .blue.svelte-nzv49h{content:"";position:fixed;top:-5px;height:4px}.half-border.svelte-nzv49h .red.svelte-nzv49h{background-color:var(--white)}.half-border.svelte-nzv49h .blue.svelte-nzv49h{background-color:gray}.selected.svelte-nzv49h.svelte-nzv49h{font-size:x-large !important}.selected.svelte-nzv49h span.svelte-nzv49h{color:var(--black);padding-left:2px !important;padding-right:2px !important;background-color:var(--white)}.locking-label.svelte-nzv49h.svelte-nzv49h{transition:transform 1s, padding-left 0.23s, opacity 0.13s, border-top 0.5s, top 0.33s !important}.locking.svelte-nzv49h.svelte-nzv49h{transition:transform 1s !important}.disappear.svelte-nzv49h.svelte-nzv49h{padding-left:15rem !important;opacity:0 !important;transition:padding-left 0.33s, opacity 3s, border-top 0.5s, top 0.33s}.circle.svelte-nzv49h.svelte-nzv49h{position:relative;left:calc(50% - 4rem);top:calc(50% - 1rem);height:2rem;width:8rem;text-align:right;font-size:large;color:var(--white);padding-bottom:1.5rem;transition:font-size 0.2s}p.svelte-nzv49h.svelte-nzv49h{font:"Roboto Mono", sans-serif;font-weight:300}.tags.svelte-nzv49h.svelte-nzv49h{position:fixed;z-index:1;opacity:1}.label.svelte-nzv49h.svelte-nzv49h{position:fixed;display:block;left:calc(50% - 6.5rem);top:calc(50% - 1.5rem);height:2rem;width:12rem;text-align:center;font-size:x-large;color:var(--black);background-color:var(--white);padding-bottom:1.5rem;transition:padding-left 0.33s, opacity 0.23s, border-top 0.5s, top 0.33s}@media(max-width: 576px){.circle.svelte-nzv49h.svelte-nzv49h{left:calc(50% - 3.5rem);top:calc(50% - 1rem);width:7.5rem;height:2rem;text-align:right;border-top:none}.half-border.svelte-nzv49h .red.svelte-nzv49h{display:none}.half-border.svelte-nzv49h .blue.svelte-nzv49h{display:none}.label.svelte-nzv49h.svelte-nzv49h{left:calc(50% - 3.5rem);top:calc(50% - 1.5rem);height:2rem;width:9rem}.icon-circle.svelte-nzv49h.svelte-nzv49h{left:calc(50% - 1.5rem)}}@media(max-width: 400px){.circle.svelte-nzv49h.svelte-nzv49h{top:calc(50% - 1rem);left:calc(70% - 4rem);font-size:1.3rem;width:9rem;height:2rem;text-align:right;border-top:none}.half-border.svelte-nzv49h .red.svelte-nzv49h{display:none}.half-border.svelte-nzv49h .blue.svelte-nzv49h{display:none}.icon-circle.svelte-nzv49h.svelte-nzv49h{left:calc(70% - 2rem)}.label.svelte-nzv49h.svelte-nzv49h{left:calc(70% - 4rem);top:calc(50% - 1.5rem);height:2rem;width:10rem}}@media(max-width: 341px){.circle.svelte-nzv49h.svelte-nzv49h{top:calc(52% - 1rem);left:calc(70% - 4rem);font-size:1rem;width:8rem;height:2rem;text-align:right;border-top:none}.icon-circle.svelte-nzv49h.svelte-nzv49h{left:calc(70% - 2rem)}.label.svelte-nzv49h.svelte-nzv49h{font-size:large;position:fixed;left:calc(70% - 4rem);top:calc(52% - 1.5rem);height:2rem;width:8rem;text-align:right !important;padding-bottom:1.5rem}}',
  map: '{"version":3,"file":"Circle.svelte","sources":["Circle.svelte"],"sourcesContent":["<script lang=\'ts\'>import { rescale } from \\"../scripts/functions\\";\\nimport { currentItem } from \\"../stores\\";\\nimport { fade, slide } from \\"svelte/transition\\";\\nimport { onMount, afterUpdate } from \\"svelte\\";\\nimport { parse } from \\"svelte/compiler\\";\\nexport let idx;\\nexport let sz;\\nexport let custom;\\nexport let locking;\\nexport let proficiency;\\nlet halfBorder;\\nlet alpha;\\nlet disappear = false;\\n$: test = generateAlpha($currentItem, idx, sz);\\nfunction generateTransform() {\\n  if (custom === \\"label\\") {\\n    return `rotate(calc(var(--ang_start) + ${4 * idx - 1}*var(--ang) + ${idx}*var(--ang)*var(--isindent))) translateX(var(--dist))`;\\n  } else {\\n    return `rotate(calc(var(--ang_start) + ${idx}*var(--ang) + ${Math.floor(idx / 4)}*var(--ang)*var(--isindent))) translateX(var(--dist))`;\\n  }\\n}\\nfunction generateAlpha(cur, idx2, sz2) {\\n  if (idx2 === cur) {\\n    alpha = 1;\\n  } else {\\n    if (custom === \\"label\\") {\\n      let thresh = Math.abs(cur - idx2 * 4 - 1);\\n      disappear = thresh < 3 ? false : true;\\n    } else {\\n      alpha = Math.abs(idx2 - cur);\\n      alpha = rescale(alpha, 1, sz2, 0.7, 0) - 0.4;\\n    }\\n  }\\n  return alpha;\\n}\\nonMount(() => {\\n  proficiency /= 10;\\n  if (halfBorder) {\\n    let redElement = halfBorder.querySelector(\\".red\\");\\n    let blueElement = halfBorder.querySelector(\\".blue\\");\\n    redElement.style.width = `${proficiency * 100}%`;\\n    blueElement.style.width = `${(1 - proficiency) * 100}%`;\\n    blueElement.style.left = `${proficiency * 100}%`;\\n  }\\n});\\n<\/script>\\n\\n{#if custom === \\"label\\"}\\n    <div class=\\"tags {custom}\\" class:locking-label={locking} class:disappear style=\\"transform: {generateTransform()}; opacity: {test};\\"> \\n        <slot></slot>\\n    </div>\\n{:else}\\n    <div class=\\"tags half-border {custom} {(idx === $currentItem)?\\"selected\\":\\"\\"}\\" bind:this={halfBorder} class:disappear class:locking style=\\"transform: {generateTransform()}; opacity: {test};\\"> \\n        <p><span><slot name=\\"letter\\"></slot></span><slot name=\\"tag\\"></slot></p>\\n        <div class=\\"red\\"></div>\\n        <div class=\\"blue\\"></div>\\n    </div>\\n{/if}\\n\\n<style>\\n    .half-border .red, .half-border .blue {\\n        content: \\"\\";\\n        position: fixed;\\n        top: -5px;\\n        height: 4px;\\n    }\\n    .half-border .red {\\n        background-color: var(--white);\\n    }\\n    .half-border .blue {\\n        background-color: gray;\\n    }\\n    .selected{\\n        font-size: x-large !important;\\n    }\\n    .selected span{\\n        color: var(--black);\\n        padding-left: 2px !important;\\n        padding-right: 2px !important;\\n        background-color: var(--white);\\n    }\\n    .locking-label{\\n        transition: transform 1s, padding-left 0.23s, opacity 0.13s, border-top 0.5s, top 0.33s !important;\\n    }\\n    .locking{\\n        transition: transform 1s !important;\\n    }\\n    .disappear{\\n        padding-left: 15rem !important;\\n        opacity: 0 !important;\\n        transition: padding-left 0.33s, opacity 3s, border-top 0.5s, top 0.33s;\\n    }\\n    .circle {\\n        position: relative;\\n        left: calc(50% - 4rem);\\n        top: calc(50% - 1rem);\\n        height: 2rem;\\n        width: 8rem;\\n        text-align: right;\\n        font-size: large;\\n        color: var(--white);\\n        /* border-top: solid 3px var(--white); */\\n        padding-bottom: 1.5rem;\\n        transition: font-size 0.2s;\\n    }\\n    p{\\n        font: \\"Roboto Mono\\", sans-serif;\\n        font-weight: 300;\\n    }\\n    .tags{\\n        position: fixed;\\n        z-index: 1;\\n        opacity : 1;\\n    }\\n    .label {\\n        position: fixed;\\n        display: block;\\n        left: calc(50% - 6.5rem);\\n        top: calc(50% - 1.5rem);\\n        height: 2rem;\\n        width: 12rem;\\n        text-align: center;\\n        font-size: x-large;\\n        color: var(--black);\\n        background-color: var(--white);\\n        padding-bottom: 1.5rem;\\n        transition: padding-left 0.33s, opacity 0.23s, border-top 0.5s, top 0.33s;\\n    }\\n    @media (max-width: 576px) {\\n        .circle{\\n            left: calc(50% - 3.5rem);\\n            top: calc(50% - 1rem);\\n            width: 7.5rem;\\n            height: 2rem;\\n            text-align: right;\\n            border-top: none;\\n        }\\n        .half-border .red {\\n            display: none;\\n        }\\n        .half-border .blue {\\n            display: none;\\n        }\\n        .label {\\n            left: calc(50% - 3.5rem);\\n            top: calc(50% - 1.5rem);\\n            height: 2rem;\\n            width: 9rem;\\n        }\\n        .icon-circle {\\n            left: calc(50% - 1.5rem);\\n        }\\n    }\\n    @media (max-width: 400px) {\\n        .circle{\\n            top: calc(50% - 1rem);\\n            left: calc(70% - 4rem);\\n            font-size: 1.3rem;\\n            width: 9rem;\\n            height: 2rem;\\n            text-align: right;\\n            border-top: none;\\n        }\\n        .half-border .red {\\n            display: none;\\n        }\\n        .half-border .blue {\\n            display: none;\\n        }\\n        .icon-circle {\\n            left: calc(70% - 2rem);\\n        }\\n        .label {\\n            left: calc(70% - 4rem);\\n            top: calc(50% - 1.5rem);\\n            height: 2rem;\\n            width: 10rem;\\n        }\\n    }\\n    @media (max-width: 341px) {\\n        .circle{\\n            top: calc(52% - 1rem);\\n            left: calc(70% - 4rem);\\n            font-size: 1rem;\\n            width: 8rem;\\n            height: 2rem;\\n            text-align: right;\\n            border-top: none;\\n        }\\n        .icon-circle {\\n            left: calc(70% - 2rem);\\n        }\\n        .label{\\n            font-size: large;\\n            position: fixed;\\n            /* display: block; */\\n            left: calc(70% - 4rem);\\n            top: calc(52% - 1.5rem);\\n            height: 2rem;\\n            width: 8rem;\\n            text-align: right !important;\\n            padding-bottom: 1.5rem;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AA4DI,0BAAY,CAAC,kBAAI,CAAE,0BAAY,CAAC,mBAAM,CAClC,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,GACZ,CACA,0BAAY,CAAC,kBAAK,CACd,gBAAgB,CAAE,IAAI,OAAO,CACjC,CACA,0BAAY,CAAC,mBAAM,CACf,gBAAgB,CAAE,IACtB,CACA,qCAAS,CACL,SAAS,CAAE,OAAO,CAAC,UACvB,CACA,uBAAS,CAAC,kBAAI,CACV,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,YAAY,CAAE,GAAG,CAAC,UAAU,CAC5B,aAAa,CAAE,GAAG,CAAC,UAAU,CAC7B,gBAAgB,CAAE,IAAI,OAAO,CACjC,CACA,0CAAc,CACV,UAAU,CAAE,SAAS,CAAC,EAAE,CAAC,CAAC,YAAY,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,KAAK,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,UAC5F,CACA,oCAAQ,CACJ,UAAU,CAAE,SAAS,CAAC,EAAE,CAAC,UAC7B,CACA,sCAAU,CACN,YAAY,CAAE,KAAK,CAAC,UAAU,CAC9B,OAAO,CAAE,CAAC,CAAC,UAAU,CACrB,UAAU,CAAE,YAAY,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,KACrE,CACA,mCAAQ,CACJ,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACtB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,OAAO,CAAC,CAEnB,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,SAAS,CAAC,IAC1B,CACA,6BAAC,CACG,IAAI,CAAE,aAAa,CAAC,CAAC,UAAU,CAC/B,WAAW,CAAE,GACjB,CACA,iCAAK,CACD,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,CAAC,CACV,OAAO,CAAG,CACd,CACA,kCAAO,CACH,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,KAAK,CACd,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACxB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,YAAY,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,KAAK,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,KACxE,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,mCAAO,CACH,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACxB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACrB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,IAChB,CACA,0BAAY,CAAC,kBAAK,CACd,OAAO,CAAE,IACb,CACA,0BAAY,CAAC,mBAAM,CACf,OAAO,CAAE,IACb,CACA,kCAAO,CACH,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACxB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACX,CACA,wCAAa,CACT,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAC3B,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,mCAAO,CACH,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACrB,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACtB,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,IAChB,CACA,0BAAY,CAAC,kBAAK,CACd,OAAO,CAAE,IACb,CACA,0BAAY,CAAC,mBAAM,CACf,OAAO,CAAE,IACb,CACA,wCAAa,CACT,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CACzB,CACA,kCAAO,CACH,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACtB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KACX,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,mCAAO,CACH,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACrB,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACtB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,IAChB,CACA,wCAAa,CACT,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CACzB,CACA,kCAAM,CACF,SAAS,CAAE,KAAK,CAChB,QAAQ,CAAE,KAAK,CAEf,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACtB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,KAAK,CAAC,UAAU,CAC5B,cAAc,CAAE,MACpB,CACJ"}'
};
const Circle$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let test;
  let $currentItem, $$unsubscribe_currentItem;
  $$unsubscribe_currentItem = subscribe(currentItem, (value) => $currentItem = value);
  let { idx } = $$props;
  let { sz } = $$props;
  let { custom } = $$props;
  let { locking } = $$props;
  let { proficiency } = $$props;
  let halfBorder;
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
  if ($$props.idx === void 0 && $$bindings.idx && idx !== void 0) $$bindings.idx(idx);
  if ($$props.sz === void 0 && $$bindings.sz && sz !== void 0) $$bindings.sz(sz);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  if ($$props.locking === void 0 && $$bindings.locking && locking !== void 0) $$bindings.locking(locking);
  if ($$props.proficiency === void 0 && $$bindings.proficiency && proficiency !== void 0) $$bindings.proficiency(proficiency);
  $$result.css.add(css$8);
  test = generateAlpha($currentItem, idx, sz);
  $$unsubscribe_currentItem();
  return `${custom === "label" ? `<div class="${[
    "tags " + escape(custom, true) + " svelte-nzv49h",
    (locking ? "locking-label" : "") + " " + (disappear ? "disappear" : "")
  ].join(" ").trim()}" style="${"transform: " + escape(generateTransform(), true) + "; opacity: " + escape(test, true) + ";"}">${slots.default ? slots.default({}) : ``}</div>` : `<div class="${[
    "tags half-border " + escape(custom, true) + " " + escape(idx === $currentItem ? "selected" : "", true) + " svelte-nzv49h",
    (disappear ? "disappear" : "") + " " + (locking ? "locking" : "")
  ].join(" ").trim()}" style="${"transform: " + escape(generateTransform(), true) + "; opacity: " + escape(test, true) + ";"}"${add_attribute("this", halfBorder, 0)}><p class="svelte-nzv49h"><span class="svelte-nzv49h">${slots.letter ? slots.letter({}) : ``}</span>${slots.tag ? slots.tag({}) : ``}</p> <div class="red svelte-nzv49h"></div> <div class="blue svelte-nzv49h"></div></div>`}`;
});
const css$7 = {
  code: '.centerall.svelte-crg73f.svelte-crg73f{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;display:flex}.stepselected.svelte-crg73f.svelte-crg73f{background-color:var(--white) !important}.steps.svelte-crg73f.svelte-crg73f{position:fixed;left:50%;top:0%;z-index:10;display:flex;align-items:center;justify-content:center;transform:translate(-100%, 70px) rotate(90deg)}.step.svelte-crg73f.svelte-crg73f{all:unset;cursor:pointer;position:relative;width:20px;height:20px;border-radius:50%;border:solid 1px var(--white);display:flex;align-items:center;justify-content:center;background-color:var(--black);color:var(--white);margin:0 5px;transition:all 0.23s}.step.svelte-crg73f.svelte-crg73f:hover{background-color:var(--white)}.step.svelte-crg73f.svelte-crg73f:last-child::before{display:none}.text-content.svelte-crg73f.svelte-crg73f{font-size:xx-large;color:rgb(237, 237, 237);transition:top .6s, left .6s}.text-container.svelte-crg73f.svelte-crg73f{position:absolute;left:0%;top:0%;width:46%;display:flex;flex-flow:column wrap;background-color:rgba(0, 0, 0, 0.35);align-items:center}.section.svelte-crg73f.svelte-crg73f{min-height:100vh;line-height:2em;padding:3em 5vw 3em 5vw;display:flex;flex-flow:column wrap;align-items:center;justify-content:center;border-left:var(--white) solid 1px;border-right:var(--white) solid 1px;border-bottom:var(--white) solid 1px}.content.svelte-crg73f.svelte-crg73f{width:350px}.mapinfo.svelte-crg73f.svelte-crg73f{position:fixed;top:80px;left:46%;width:54vw;z-index:1;display:flex;justify-content:center;align-items:center}.title.svelte-crg73f.svelte-crg73f{line-height:90%}.subtitle.svelte-crg73f.svelte-crg73f{margin:5px}.label.svelte-crg73f.svelte-crg73f{text-align:center;writing-mode:vertical-lr;text-orientation:mixed;padding:0px 7px 0px 7px;font-family:"Montserrat", sans-serif;font-weight:500;margin-right:20px;height:128px;transform:rotate(180deg);color:var(--black);background-color:var(--white)}.icon.svelte-crg73f.svelte-crg73f{width:75px;margin-bottom:1em;height:auto;filter:none}@media(max-width: 576px){.mapinfo.svelte-crg73f.svelte-crg73f{position:fixed;width:100%;top:-3px !important;left:0rem;right:auto;padding:0;margin:0;z-index:10;display:flex;align-items:center}.label.svelte-crg73f.svelte-crg73f{margin:0}.content.svelte-crg73f.svelte-crg73f{background-color:var(--black);width:100%;padding-left:10px}.text-container.svelte-crg73f.svelte-crg73f{top:calc(12rem + 127px);width:100vw}.steps.svelte-crg73f.svelte-crg73f{display:none}}@media(max-width: 576px){.mapinfo.svelte-crg73f.svelte-crg73f{top:-0.5em !important;border-bottom:solid rgba(255, 255, 255, 0.182) 1px}.text-container.svelte-crg73f.svelte-crg73f{background-color:rgba(0, 0, 0, 0.623)}}@media(max-width: 400px){.mapinfo.svelte-crg73f.svelte-crg73f{top:calc(0.8*12rem)}.content.svelte-crg73f h2.svelte-crg73f{font-size:3.5em}}@media(max-width: 350px){.content.svelte-crg73f h2.svelte-crg73f{font-size:3.1em}.mapinfo.svelte-crg73f.svelte-crg73f{top:-0.5em !important}}',
  map: '{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let title;\\nexport let texts;\\nexport let offset;\\nexport let label;\\nlet current = 0;\\nimport { coordinates, constellated, constellation_index, profile_index } from \\"../stores\\";\\nimport { slide, fade, scale } from \\"svelte/transition\\";\\nimport { cubicInOut, quintInOut } from \\"svelte/easing\\";\\nimport { onMount, onDestroy } from \\"svelte\\";\\nconst svgs = [\\n  \\"/media/icons/mor.svg\\",\\n  \\"/media/icons/italyflag.svg\\",\\n  \\"/media/icons/uaeflag.svg\\",\\n  \\"/media/icons/usaflag.svg\\",\\n  \\"/media/icons/ukflag.svg\\"\\n];\\nconst personal_txts = [\\n  \\"Graduated from Al Manbaa in Sciences Physiques, and got a full ride for Bocconi\'s International Relations program!\\",\\n  \\"Studied in Bocconi for a year. Didn\'t love politics though, so I transferred.\\",\\n  \\"I got a full ride from NYU to study Interactive Media at their satellite campus in Abu Dhabi! Interactive Media is a project-heavy program that integrates computer science, design, and communication.\\",\\n  \\"Spent a year taking classes in game design and web dev in New York!\\",\\n  \\"Moved to London, super excited for the next chapter.\\"\\n];\\nfunction expandOut(node, { duration, sign = 1 }) {\\n  return {\\n    duration,\\n    css: (t) => `\\n                transform: translate(${(1 - t) * 100 * sign}%, 0);\\n            `,\\n    easing: quintInOut\\n  };\\n}\\nfunction scrollToSection(sectionId) {\\n  const section = document.getElementById(sectionId);\\n  if (section) {\\n    section.scrollIntoView({\\n      behavior: \\"smooth\\",\\n      block: \\"start\\"\\n    });\\n  }\\n}\\nfunction toggleConstellate(index) {\\n  scrollToSection(\\"section-\\" + index);\\n  profile_index.set(index);\\n  constellated.set(true);\\n  constellation_index.set(index);\\n  current = index;\\n}\\nlet observer = null;\\nonMount(() => {\\n  const handleIntersection = (entries) => {\\n    entries.forEach((entry) => {\\n      if (entry.isIntersecting) {\\n        const index = parseInt(entry.target.id.replace(\\"section-\\", \\"\\"));\\n        profile_index.set(index);\\n        constellated.set(true);\\n        constellation_index.set(index);\\n        current = index;\\n      }\\n    });\\n  };\\n  observer = new IntersectionObserver(handleIntersection, {\\n    threshold: 0.4\\n  });\\n  const sections = document.querySelectorAll(\\".section\\");\\n  if (observer != null) {\\n    sections.forEach((section) => observer.observe(section));\\n    return () => {\\n      if (observer) {\\n        observer.disconnect();\\n        observer = null;\\n      }\\n    };\\n  }\\n});\\n<\/script>\\n\\n\\n<div class=\\"mapinfo\\" transition:fade>\\n    <div class=\\"label\\" transition:slide|global={{delay: offset*100, duration:200, easing: cubicInOut}}> history </div>\\n    <div class=\\"content\\" transition:slide|global={{delay: offset*100, duration:200, easing: cubicInOut}}>\\n        <div class=\\"title\\"> <h2>{texts[current]} </h2></div>\\n        <div class=\\"subtitle\\"> <h3> {title[current]} </h3> </div>\\n    </div>\\n</div>\\n<div class=\\"steps\\" transition:scale|global={{duration: 150}}>\\n    {#each texts as txt, i}\\n        <button class=\\"step {(i === current) ? \\"stepselected\\" : \\"\\"}\\" on:click={() => toggleConstellate(i)}></button>\\n    {/each}\\n</div>\\n\\n<div class=\\"centerall\\" transition:fade|global>\\n    <div class=\\"text-container\\" transition:fade|global>\\n        <div class=\\"text-content\\">\\n                {#each personal_txts as txt, i}\\n                    <div id={\\"section-\\" + i} class=\\"section\\" in:expandOut|global={{duration: 200, sign: -1}} out:expandOut|global={{duration: 200, sign: -1}}>\\n                        <span><img class=\\"icon\\" alt=\\"personal-icon\\" src=\\"{svgs[i]}\\"> </span>\\n                        {txt} \\n                    </div>\\n                {/each}\\n        </div>\\n    </div>\\n</div>\\n\\n<style>\\n    .centerall{\\n        position: absolute;\\n        left:0;\\n        top:0;\\n        width: 100%;\\n        height: 100%;\\n        overflow: auto;\\n        display: flex;\\n    }\\n    .stepselected{\\n        background-color: var(--white) !important;\\n    }\\n    .steps {\\n        position: fixed;\\n        left: 50%;\\n        top: 0%;\\n        z-index: 10;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        transform: translate(-100%, 70px) rotate(90deg);\\n    }\\n    .step {\\n        all:unset;\\n        cursor: pointer;\\n        position: relative;\\n        width: 20px;\\n        height: 20px;\\n        border-radius: 50%;\\n        border: solid 1px var(--white);\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        background-color: var(--black);\\n        color: var(--white);\\n        margin: 0 5px;\\n        transition: all 0.23s;\\n    }\\n    .step:hover{\\n        background-color: var(--white);\\n    }\\n    .step:last-child::before {\\n        display: none;\\n    }\\n    /* SCROLLING TEXT */\\n    .text-content {\\n        font-size: xx-large;\\n        color: rgb(237, 237, 237);\\n        transition: top .6s, left .6s;\\n    }\\n    .text-container{\\n        position: absolute;\\n        left: 0%;\\n        top: 0%;\\n        width: 46%;\\n        display: flex;\\n        flex-flow: column wrap;\\n        background-color: rgba(0, 0, 0, 0.35);\\n        align-items: center;\\n\\n    }\\n    .section {\\n        min-height: 100vh;\\n        line-height: 2em;\\n        padding: 3em 5vw 3em 5vw;\\n        display: flex;\\n        flex-flow: column wrap;\\n        align-items: center;\\n        justify-content: center;\\n        /* text-align: center; */\\n        border-left: var(--white) solid 1px;\\n        border-right: var(--white) solid 1px;\\n        border-bottom: var(--white) solid 1px;\\n    }\\n    /* MAP STUFF */\\n    .content{\\n        width: 350px;\\n    }\\n    .mapinfo{\\n        position: fixed;\\n        top: 80px;\\n        left: 46%;\\n        width: 54vw;\\n        z-index: 1;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n    .title{\\n        line-height: 90%;\\n    }\\n    .subtitle{\\n        margin: 5px;\\n    }\\n    .label{\\n        text-align: center;\\n        writing-mode: vertical-lr;\\n        text-orientation: mixed;\\n        padding: 0px 7px 0px 7px;\\n        font-family: \\"Montserrat\\", sans-serif;\\n        font-weight: 500;\\n        margin-right: 20px;\\n        height: 128px;\\n        transform: rotate(180deg);\\n        color: var(--black);\\n        background-color: var(--white);\\n    }\\n    .icon{\\n        width: 75px;\\n        margin-bottom: 1em;\\n        height: auto;\\n        filter: none;\\n    }\\n    @media (max-width: 576px) {\\n        .mapinfo{\\n            position: fixed;\\n            width: 100%;\\n            top: -3px !important;\\n            left: 0rem;\\n            right: auto;\\n            padding: 0;\\n            margin: 0;\\n            z-index: 10;\\n            display: flex;\\n            align-items: center;\\n        }\\n        .label{\\n            margin: 0;\\n        }\\n        .content{\\n            background-color: var(--black);\\n            width: 100%;\\n            padding-left: 10px;\\n        }\\n        .text-container{\\n            top: calc(12rem + 127px);\\n            width: 100vw;\\n        }\\n        .steps{\\n            display: none;\\n        }\\n    }\\n    @media (max-width: 576px) {\\n        .mapinfo{\\n            top: -0.5em !important;\\n            border-bottom: solid rgba(255, 255, 255, 0.182) 1px;\\n        }\\n        .text-container{\\n            background-color: rgba(0, 0, 0, 0.623);\\n        }\\n\\n    }\\n    @media (max-width: 400px) {\\n        .mapinfo{\\n            top: calc(0.8*12rem);\\n        }\\n        .content h2{\\n            font-size: 3.5em;\\n        }\\n    }\\n    @media (max-width: 350px) {\\n        .content h2{\\n            font-size: 3.1em;\\n        }\\n        .mapinfo{\\n            top: -0.5em !important;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAyGI,sCAAU,CACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAC,CACN,IAAI,CAAC,CACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,IAAI,CACd,OAAO,CAAE,IACb,CACA,yCAAa,CACT,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAAC,UACnC,CACA,kCAAO,CACH,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,GAAG,CACT,GAAG,CAAE,EAAE,CACP,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,UAAU,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,KAAK,CAClD,CACA,iCAAM,CACF,IAAI,KAAK,CACT,MAAM,CAAE,OAAO,CACf,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,OAAO,CAAC,CAC9B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,MAAM,CAAE,CAAC,CAAC,GAAG,CACb,UAAU,CAAE,GAAG,CAAC,KACpB,CACA,iCAAK,MAAM,CACP,gBAAgB,CAAE,IAAI,OAAO,CACjC,CACA,iCAAK,WAAW,QAAS,CACrB,OAAO,CAAE,IACb,CAEA,yCAAc,CACV,SAAS,CAAE,QAAQ,CACnB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,GAC9B,CACA,2CAAe,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,EAAE,CACR,GAAG,CAAE,EAAE,CACP,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MAAM,CAAC,IAAI,CACtB,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACrC,WAAW,CAAE,MAEjB,CACA,oCAAS,CACL,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACxB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MAAM,CAAC,IAAI,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CAEvB,WAAW,CAAE,IAAI,OAAO,CAAC,CAAC,KAAK,CAAC,GAAG,CACnC,YAAY,CAAE,IAAI,OAAO,CAAC,CAAC,KAAK,CAAC,GAAG,CACpC,aAAa,CAAE,IAAI,OAAO,CAAC,CAAC,KAAK,CAAC,GACtC,CAEA,oCAAQ,CACJ,KAAK,CAAE,KACX,CACA,oCAAQ,CACJ,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACjB,CACA,kCAAM,CACF,WAAW,CAAE,GACjB,CACA,qCAAS,CACL,MAAM,CAAE,GACZ,CACA,kCAAM,CACF,UAAU,CAAE,MAAM,CAClB,YAAY,CAAE,WAAW,CACzB,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACxB,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CACrC,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,IAAI,CAClB,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,gBAAgB,CAAE,IAAI,OAAO,CACjC,CACA,iCAAK,CACD,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IACZ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,oCAAQ,CACJ,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IAAI,CAAC,UAAU,CACpB,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACjB,CACA,kCAAM,CACF,MAAM,CAAE,CACZ,CACA,oCAAQ,CACJ,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,IAClB,CACA,2CAAe,CACX,GAAG,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,KAAK,CAAC,CACxB,KAAK,CAAE,KACX,CACA,kCAAM,CACF,OAAO,CAAE,IACb,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,oCAAQ,CACJ,GAAG,CAAE,MAAM,CAAC,UAAU,CACtB,aAAa,CAAE,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,GACpD,CACA,2CAAe,CACX,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CACzC,CAEJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,oCAAQ,CACJ,GAAG,CAAE,KAAK,GAAG,CAAC,KAAK,CACvB,CACA,sBAAQ,CAAC,gBAAE,CACP,SAAS,CAAE,KACf,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,sBAAQ,CAAC,gBAAE,CACP,SAAS,CAAE,KACf,CACA,oCAAQ,CACJ,GAAG,CAAE,MAAM,CAAC,UAChB,CACJ"}'
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
    "Graduated from Al Manbaa in Sciences Physiques, and got a full ride for Bocconi's International Relations program!",
    "Studied in Bocconi for a year. Didn't love politics though, so I transferred.",
    "I got a full ride from NYU to study Interactive Media at their satellite campus in Abu Dhabi! Interactive Media is a project-heavy program that integrates computer science, design, and communication.",
    "Spent a year taking classes in game design and web dev in New York!",
    "Moved to London, super excited for the next chapter."
  ];
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0) $$bindings.texts(texts);
  if ($$props.offset === void 0 && $$bindings.offset && offset2 !== void 0) $$bindings.offset(offset2);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  $$result.css.add(css$7);
  return `<div class="mapinfo svelte-crg73f"><div class="label svelte-crg73f" data-svelte-h="svelte-ogtrbw">history</div> <div class="content svelte-crg73f"><div class="title svelte-crg73f"><h2 class="svelte-crg73f">${escape(texts[current])}</h2></div> <div class="subtitle svelte-crg73f"><h3>${escape(title[current])}</h3></div></div></div> <div class="steps svelte-crg73f">${each(texts, (txt, i) => {
    return `<button class="${"step " + escape(i === current ? "stepselected" : "", true) + " svelte-crg73f"}"></button>`;
  })}</div> <div class="centerall svelte-crg73f"><div class="text-container svelte-crg73f"><div class="text-content svelte-crg73f">${each(personal_txts, (txt, i) => {
    return `<div${add_attribute("id", "section-" + i, 0)} class="section svelte-crg73f"><span><img class="icon svelte-crg73f" alt="personal-icon"${add_attribute("src", svgs[i], 0)}></span> ${escape(txt)} </div>`;
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
        { name: "react", score: 8 },
        { name: "svelte", score: 10 },
        { name: "bootstrap", score: 7 },
        { name: "javascript", score: 10 },
        { name: "c", score: 8 },
        { name: "c++", score: 8 },
        { name: "node.js", score: 8 },
        { name: "flask", score: 5 },
        { name: "python", score: 10 },
        { name: "sql", score: 8 },
        { name: "r", score: 10 },
        { name: "stata", score: 8 }
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
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.scrollThreshold === void 0 && $$bindings.scrollThreshold && scrollThreshold !== void 0) $$bindings.scrollThreshold(scrollThreshold);
  return `<div> ${index === 0 ? `${validate_component(Typewriter, "Typewriter").$$render($$result, { texts: about_txt, custom: "about" }, {}, {})}` : `${index === 1 ? `${validate_component(Card, "Card").$$render(
    $$result,
    {
      label: cards_text[0].label,
      title: cards_text[0].title,
      texts: cards_text[0].contents,
      offset: 0
    },
    {},
    {}
  )}` : `${index === 2 ? ` <div>${each(labels, (label, i) => {
    return `${validate_component(Circle$1, "Circle").$$render(
      $$result,
      {
        idx: i,
        sz: labels[index].length - 1,
        custom: "label",
        locking,
        proficiency: 0
      },
      {},
      {
        default: () => {
          return `${escape(label)} `;
        }
      }
    )}`;
  })}</div>  <div class="content">${each(tags[2].content, (tag, i) => {
    return `<div>${typeof tag === "object" && "score" in tag && "name" in tag ? `${validate_component(Circle$1, "Circle").$$render(
      $$result,
      {
        locking,
        idx: i,
        sz: tags[index].content.length - 1,
        custom: "circle centered",
        proficiency: tag.score
      },
      {},
      {
        tag: () => {
          return `<span slot="tag">${escape(tag.name.slice(1))}</span>`;
        },
        letter: () => {
          return `<span slot="letter">${escape(tag.name[0])}</span>`;
        }
      }
    )}` : ``} </div>`;
  })}</div>` : ``}`}`}</div>`;
});
const css$6 = {
  code: '#loading.svelte-7ob09p{position:fixed;top:0;left:0;width:100%;height:100%;z-index:6;overflow:hidden;transition:opacity 1s ease-in-out}.loader.svelte-7ob09p{position:fixed;left:calc(50% - 5rem);top:calc(50% - 5rem);width:10rem;height:10rem;border-radius:50%;border:1px solid transparent;border-top-color:#ffffffd5;animation:svelte-7ob09p-spin 1.5s linear infinite}.loader.svelte-7ob09p:before{content:"";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:4px solid;border-top-color:rgb(18, 18, 18);animation:svelte-7ob09p-spin-reverse .55s linear infinite}.loader.svelte-7ob09p:after{content:"";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:2px solid transparent;border-top-color:#ffffffb6;animation:svelte-7ob09p-spin 2s linear infinite}@keyframes svelte-7ob09p-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-7ob09p-spin-reverse{0%{transform:rotate(0deg)}100%{transform:rotate(-360deg)}}@media(max-width: 576px){.loader.svelte-7ob09p{left:calc(50% - 4.5rem);top:calc(50% - 4.5rem);width:9rem;height:9rem}}@media(max-width: 400px){.loader.svelte-7ob09p{left:calc(70% - 5.25rem);top:calc(50% - 5.25rem);width:10.5rem;height:10.5rem}}@media(max-width: 341px){.loader.svelte-7ob09p{left:calc(70% - 4.5rem);top:calc(50% - 4.5rem);width:9rem;height:9rem}}',
  map: '{"version":3,"file":"Loader.svelte","sources":["Loader.svelte"],"sourcesContent":["<div id=\\"loading\\"> \\n    <div class=\\"loader\\"> </div>\\n</div>\\n\\n<style>\\n    /*___________________________________________LOADER STUFF__________________________________________*/\\n    #loading {\\n        position: fixed;\\n        top: 0;\\n        left: 0;\\n        width: 100%;\\n        height: 100%;\\n        z-index: 6;\\n        overflow: hidden;\\n        transition: opacity 1s ease-in-out;\\n    }\\n    .loader {\\n        position: fixed;\\n        left: calc(50% - 5rem);\\n        top: calc(50% - 5rem);\\n        width: 10rem;\\n        height: 10rem;\\n        border-radius: 50%;\\n        border: 1px solid transparent;\\n        border-top-color: #ffffffd5;\\n        animation: spin 1.5s linear infinite;\\n    }\\n    .loader:before {\\n        content: \\"\\";\\n        position: absolute;\\n        top: 5px;\\n        left: 5px;\\n        right: 5px;\\n        bottom: 5px;\\n        border-radius: 50%;\\n        border: 4px solid;\\n        border-top-color: rgb(18, 18, 18);\\n        animation: spin-reverse .55s linear infinite;\\n    }\\n    .loader:after {\\n        content: \\"\\";\\n        position: absolute;\\n        top: 15px;\\n        left: 15px;\\n        right: 15px;\\n        bottom: 15px;\\n        border-radius: 50%;\\n        border: 2px solid transparent;\\n        border-top-color: #ffffffb6;\\n        animation: spin 2s linear infinite;\\n    }\\n    @keyframes spin {\\n        0% { \\n            transform: rotate(0deg);\\n        }\\n        100% {\\n            transform: rotate(360deg);\\n        }\\n    }\\n    @keyframes spin-reverse {\\n        0% { \\n            transform: rotate(0deg);\\n        }\\n        100% {\\n            transform: rotate(-360deg);\\n        }\\n    }\\n    @media (max-width: 576px) {\\n        .loader {\\n            left: calc(50% - 4.5rem);\\n            top: calc(50% - 4.5rem);\\n            width: 9rem;\\n            height: 9rem;\\n        }\\n    }\\n    @media (max-width: 400px) {\\n        .loader {\\n            left: calc(70% - 5.25rem);\\n            top: calc(50% - 5.25rem);\\n            width: 10.5rem;\\n            height: 10.5rem;\\n        }\\n    }\\n    @media (max-width: 341px) {\\n        .loader {\\n            left: calc(70% - 4.5rem);\\n            top: calc(50% - 4.5rem);\\n            width: 9rem;\\n            height: 9rem;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAMI,sBAAS,CACL,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,OAAO,CAAC,EAAE,CAAC,WAC3B,CACA,qBAAQ,CACJ,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACtB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACrB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,gBAAgB,CAAE,SAAS,CAC3B,SAAS,CAAE,kBAAI,CAAC,IAAI,CAAC,MAAM,CAAC,QAChC,CACA,qBAAO,OAAQ,CACX,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,SAAS,CAAE,0BAAY,CAAC,IAAI,CAAC,MAAM,CAAC,QACxC,CACA,qBAAO,MAAO,CACV,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,gBAAgB,CAAE,SAAS,CAC3B,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,MAAM,CAAC,QAC9B,CACA,WAAW,kBAAK,CACZ,EAAG,CACC,SAAS,CAAE,OAAO,IAAI,CAC1B,CACA,IAAK,CACD,SAAS,CAAE,OAAO,MAAM,CAC5B,CACJ,CACA,WAAW,0BAAa,CACpB,EAAG,CACC,SAAS,CAAE,OAAO,IAAI,CAC1B,CACA,IAAK,CACD,SAAS,CAAE,OAAO,OAAO,CAC7B,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,qBAAQ,CACJ,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACxB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,qBAAQ,CACJ,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,OAAO,CAAC,CACzB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,OAAO,CAAC,CACxB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,OACZ,CACJ,CACA,MAAO,YAAY,KAAK,CAAE,CACtB,qBAAQ,CACJ,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACxB,GAAG,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACJ"}'
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div id="loading" class="svelte-7ob09p" data-svelte-h="svelte-1mlx9lr"><div class="loader svelte-7ob09p"></div> </div>`;
});
const css$5 = {
  code: ":root{--translate-x:0rem;--translate-y:1.5rem;--scale:1.25;--rotate:0deg}.hidden.svelte-1b6nzlu{display:none}#logo.svelte-1b6nzlu{z-index:4;width:12rem !important;height:auto !important;position:relative !important;top:-2rem;left:.5rem;transform:translate(calc(var(--translate-x)), var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));opacity:1;cursor:pointer}.inner.svelte-1b6nzlu{stroke:var(--white) !important}.outer.svelte-1b6nzlu{stroke:rgba(calc( 255 - var(--dark))) !important;stroke-width:2px !important}",
  map: '{"version":3,"file":"LogoProjects.svelte","sources":["LogoProjects.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { browser } from \\"$app/environment\\";\\nexport let index = 0;\\nexport let translate = 0;\\nlet innerWidth = browser ? window.innerWidth : 1024;\\n$: isMobile = innerWidth < 765;\\n$: hidden = isMobile && index === 1 ? true : false;\\n<\/script>\\n<svg\\n   viewBox=\\"0 0 128 64\\"\\n   version=\\"1.1\\"\\n   class=\\"logos\\"\\n   id=\\"logo\\"\\n   class:hidden\\n   xmlns=\\"http://www.w3.org/2000/svg\\"\\n   xmlns:svg=\\"http://www.w3.org/2000/svg\\">\\n  <defs\\n     id=\\"defs2\\" />\\n  <g\\n     id=\\"g3731\\"\\n     style=\\"display:inline\\">\\n    <path\\n       id=\\"path7580\\"\\n       class=\\"outer\\"\\n       style=\\"display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none\\"\\n       d=\\"M 47.28361,31.850835 A 15.432775,15.432775 0 0 1 31.850835,47.28361 15.432775,15.432775 0 0 1 16.41806,31.850835 15.432775,15.432775 0 0 1 31.850835,16.41806 15.432775,15.432775 0 0 1 47.28361,31.850835 Z\\" />\\n    <path\\n       id=\\"path3725\\"\\n       class=\\"inner\\"\\n       style=\\"display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1\\"\\n       d=\\"M 47.432775,32 A 15.432775,15.432775 0 0 1 32,47.432775 15.432775,15.432775 0 0 1 16.567225,32 15.432775,15.432775 0 0 1 32,16.567225 15.432775,15.432775 0 0 1 47.432775,32 Z\\" />\\n    <path\\n       id=\\"path1183-1\\"\\n       class=\\"outer\\"\\n       style=\\"display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none\\"\\n       d=\\"M 82.283612,31.850835 A 15.432775,15.432775 0 0 1 66.850837,47.28361 15.432775,15.432775 0 0 1 51.418062,31.850835 15.432775,15.432775 0 0 1 66.850837,16.41806 15.432775,15.432775 0 0 1 82.283612,31.850835 Z\\" />\\n    <path\\n       id=\\"path3727\\"\\n       class=\\"inner\\"\\n       style=\\"display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1\\"\\n       d=\\"M 82.432775,32 A 15.432775,15.432775 0 0 1 67,47.432775 15.432775,15.432775 0 0 1 51.567225,32 15.432775,15.432775 0 0 1 67,16.567225 15.432775,15.432775 0 0 1 82.432775,32 Z\\" />\\n    <path\\n       id=\\"path2113\\"\\n       class=\\"outer\\"\\n       style=\\"display:inline;fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:2.64583;stroke-dasharray:none;stroke-opacity:1\\"\\n       d=\\"m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z\\"\\n       transform=\\"matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)\\" />\\n    <path\\n       id=\\"path3729\\"\\n       class=\\"inner\\"\\n       style=\\"display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.05833;stroke-dasharray:none;stroke-opacity:1\\"\\n       d=\\"m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z\\"\\n       transform=\\"matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)\\" />\\n  </g>\\n</svg>\\n\\n<style>\\n    :root {\\n        /* was -1.5 */\\n        --translate-x: 0rem; \\n        --translate-y: 1.5rem;\\n        /* was 1 */\\n        --scale: 1.25;\\n        --rotate: 0deg;\\n    }\\n    .hidden{\\n        display: none;\\n    }\\n    #logo{\\n        z-index: 4;\\n        width : 12rem !important;\\n        height : auto !important;\\n        position: relative !important;\\n        top: -2rem;\\n        left: .5rem;\\n        transform: translate(calc(var(--translate-x)), var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));\\n        /* transition: all 0.3s ease; */\\n        opacity: 1;\\n        cursor: pointer;\\n    }\\n    .inner {\\n        stroke: var(--white) !important;\\n    }\\n    .outer {\\n        stroke: rgba(calc( 255 - var(--dark))) !important;\\n        stroke-width: 2px !important;\\n    }\\n</style>"],"names":[],"mappings":"AAwDI,KAAM,CAEF,aAAa,CAAE,IAAI,CACnB,aAAa,CAAE,MAAM,CAErB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,IACd,CACA,sBAAO,CACH,OAAO,CAAE,IACb,CACA,oBAAK,CACD,OAAO,CAAE,CAAC,CACV,KAAK,CAAG,KAAK,CAAC,UAAU,CACxB,MAAM,CAAG,IAAI,CAAC,UAAU,CACxB,QAAQ,CAAE,QAAQ,CAAC,UAAU,CAC7B,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,KAAK,CACX,SAAS,CAAE,UAAU,KAAK,IAAI,aAAa,CAAC,CAAC,CAAC,CAAC,IAAI,aAAa,CAAC,CAAC,CAAC,OAAO,IAAI,QAAQ,CAAC,CAAC,CAAC,MAAM,IAAI,OAAO,CAAC,CAAC,CAE5G,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,OACZ,CACA,qBAAO,CACH,MAAM,CAAE,IAAI,OAAO,CAAC,CAAC,UACzB,CACA,qBAAO,CACH,MAAM,CAAE,KAAK,MAAM,GAAG,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,UAAU,CACjD,YAAY,CAAE,GAAG,CAAC,UACtB"}'
};
const LogoProjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  let hidden;
  let { index = 0 } = $$props;
  let { translate = 0 } = $$props;
  let innerWidth = 1024;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.translate === void 0 && $$bindings.translate && translate !== void 0) $$bindings.translate(translate);
  $$result.css.add(css$5);
  isMobile = innerWidth < 765;
  hidden = isMobile && index === 1 ? true : false;
  return `<svg viewBox="0 0 128 64" version="1.1" class="${["logos svelte-1b6nzlu", hidden ? "hidden" : ""].join(" ").trim()}" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs2"></defs><g id="g3731" style="display:inline"><path id="path7580" class="outer svelte-1b6nzlu" style="display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none" d="M 47.28361,31.850835 A 15.432775,15.432775 0 0 1 31.850835,47.28361 15.432775,15.432775 0 0 1 16.41806,31.850835 15.432775,15.432775 0 0 1 31.850835,16.41806 15.432775,15.432775 0 0 1 47.28361,31.850835 Z"></path><path id="path3725" class="inner svelte-1b6nzlu" style="display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1" d="M 47.432775,32 A 15.432775,15.432775 0 0 1 32,47.432775 15.432775,15.432775 0 0 1 16.567225,32 15.432775,15.432775 0 0 1 32,16.567225 15.432775,15.432775 0 0 1 47.432775,32 Z"></path><path id="path1183-1" class="outer svelte-1b6nzlu" style="display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none" d="M 82.283612,31.850835 A 15.432775,15.432775 0 0 1 66.850837,47.28361 15.432775,15.432775 0 0 1 51.418062,31.850835 15.432775,15.432775 0 0 1 66.850837,16.41806 15.432775,15.432775 0 0 1 82.283612,31.850835 Z"></path><path id="path3727" class="inner svelte-1b6nzlu" style="display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1" d="M 82.432775,32 A 15.432775,15.432775 0 0 1 67,47.432775 15.432775,15.432775 0 0 1 51.567225,32 15.432775,15.432775 0 0 1 67,16.567225 15.432775,15.432775 0 0 1 82.432775,32 Z"></path><path id="path2113" class="outer svelte-1b6nzlu" style="display:inline;fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:2.64583;stroke-dasharray:none;stroke-opacity:1" d="m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z" transform="matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)"></path><path id="path3729" class="inner svelte-1b6nzlu" style="display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.05833;stroke-dasharray:none;stroke-opacity:1" d="m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z" transform="matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)"></path></g></svg>`;
});
const css$4 = {
  code: '.media_container.svelte-17w38xe.svelte-17w38xe{width:100%;height:auto;min-height:500px;padding:3em 10vw}.blacked.svelte-17w38xe.svelte-17w38xe{background-color:var(--black) !important}.page.svelte-17w38xe.svelte-17w38xe{display:block;flex-direction:column;background-color:antiquewhite;overflow:auto}.banner.svelte-17w38xe.svelte-17w38xe{position:sticky;top:0;width:100%;min-height:140px;text-align:center}.row.svelte-17w38xe.svelte-17w38xe{display:flex;flex-direction:row;width:100%}.category.svelte-17w38xe.svelte-17w38xe{flex:0 1 200px;position:sticky;top:140px;height:75vh;overflow-wrap:break-word;writing-mode:vertical-rl;text-align:center;color:var(--white);background-color:var(--black);border-right:var(--white) solid 1px;z-index:2}.category.svelte-17w38xe h2.svelte-17w38xe{font:"Montserrat", sans-serif;font-weight:600;font-size:4em}.column.svelte-17w38xe.svelte-17w38xe{flex:2;display:flex;flex-flow:column}.title.svelte-17w38xe.svelte-17w38xe{margin-right:10em;min-height:150px;text-align:center;background-color:lightskyblue;z-index:1}.description.svelte-17w38xe.svelte-17w38xe{background-color:brown}.description.svelte-17w38xe p.svelte-17w38xe{padding:1em 20vw 1em 10vw;font-size:x-large;color:lightgrey !important}@media(max-width: 576px){.title.svelte-17w38xe.svelte-17w38xe{min-height:100px;padding:2em 0.5em;margin-right:0em}.banner.svelte-17w38xe.svelte-17w38xe{background-color:var(--black);min-height:210px;z-index:3}.category.svelte-17w38xe.svelte-17w38xe{flex:2 1 200px;position:sticky;top:200px;height:auto;border-right:none;border-bottom:var(--white) 1px solid;writing-mode:horizontal-tb}.category.svelte-17w38xe h2.svelte-17w38xe{font:"Montserrat", sans-serif;font-weight:600;font-size:3em}.description.svelte-17w38xe p.svelte-17w38xe{padding:0em 7vw 1em 7vw;font-size:x-large;color:lightgrey !important}.title.svelte-17w38xe h1.svelte-17w38xe{font-size:4em}}',
  map: '{"version":3,"file":"Documentation.svelte","sources":["Documentation.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let data;\\n$: ({ alt, title, category, tech, description, media } = data || {});\\nlet blacked = true;\\n<\/script>\\n  \\n  <div class=\\"page\\" class:blacked>\\n    <div class=\\"banner\\"></div>\\n    <div class=\\"row\\" class:blacked>\\n      <div class=\\"category\\" class:blacked><h2>{category}</h2></div>\\n      <div class=\\"column\\" class:blacked>\\n        <div class=\\"title\\" class:blacked><h1>{title}</h1></div>\\n        <div class=\\"description\\" class:blacked><p>{@html description}</p></div>\\n        <!----------------------------------------------------- MEDIA PART --------------------------------------------------->\\n        {#each media as m}\\n            {#if m.type === \\"image\\"}\\n                <img class=\\"media_container\\" src={m.src} alt={alt} >\\n            {:else if m.type === \\"video\\"}\\n            <!-- there was a transition property in this video tag maybe i should put it back -->\\n                <video class=\\"media_container\\" autoplay muted loop on:mouseout={(e) => e.currentTarget.play()}  style=\\"float:right; right:0rem; width:100%; height:100%\\">\\n                    <source src={m.src} type=\\"video/mp4\\">\\n                        Your browser does not support the video tag.\\n                </video>\\n            {:else if m.type === \\"youtube\\"}\\n                <!-- <iframe\\n                     src= {m.src} class=\\"yt-video\\" title=\\"YT video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen>\\n                </iframe> -->\\n            {/if}\\n        {/each}\\n      </div>\\n    </div>\\n    \\n  </div>\\n  \\n  <style>\\n    .yt-video{\\n        height: 100% !important;\\n        min-height: 50vw !important;\\n    }\\n    .media_container{\\n        width: 100%;\\n        height: auto;\\n        min-height: 500px;\\n        padding: 3em 10vw;\\n    }\\n    .blacked {\\n        background-color: var(--black) !important;\\n    }\\n    .page {\\n        display: block;\\n        flex-direction: column;\\n        background-color: antiquewhite;\\n        overflow: auto;\\n    }\\n    .banner {\\n        position: sticky;\\n        top: 0;\\n        width: 100%;\\n        min-height: 140px;\\n        text-align: center;\\n    }\\n    .row {\\n        display: flex;\\n        flex-direction: row;\\n        width: 100%;\\n    }\\n    .category {\\n        flex: 0 1 200px; /* flex-grow: 0, flex-shrink: 1, flex-basis: 200px */\\n        position: sticky;\\n        top: 140px;\\n        height: 75vh;\\n        /* FORMATTING & STYLE*/\\n        overflow-wrap: break-word;\\n        writing-mode: vertical-rl;\\n        text-align: center;\\n        color: var(--white);\\n        background-color: var(--black);\\n        border-right: var(--white) solid 1px;\\n        z-index: 2;\\n    }\\n    .category h2{\\n        font: \\"Montserrat\\", sans-serif;\\n        font-weight: 600;\\n        font-size: 4em;\\n    }\\n    .column{\\n        flex: 2;\\n        display: flex;\\n        flex-flow: column;\\n    }\\n    .title {\\n        /* position: sticky; */\\n        /* top: 140px; */\\n        margin-right: 10em;\\n        min-height: 150px;\\n        text-align: center;\\n        background-color: lightskyblue;\\n        z-index: 1;\\n        /* mask-image: linear-gradient(to top, transparent 1%, black 10%, black 90%, black 99%); */\\n    }\\n    .description {\\n        background-color: brown;\\n    }\\n    .description p {\\n        padding: 1em 20vw 1em 10vw;\\n        font-size: x-large;\\n        color: lightgrey !important;\\n    }\\n    @media(max-width: 576px){\\n        .title{\\n            min-height: 100px;\\n            padding: 2em 0.5em;\\n            margin-right: 0em;\\n        }\\n        .banner{\\n            background-color: var(--black);\\n            min-height: 210px;\\n            z-index: 3;\\n        }\\n        .category {\\n            flex: 2 1 200px; /* flex-grow: 0, flex-shrink: 1, flex-basis: 200px */\\n            position: sticky;\\n            top: 200px;\\n            height: auto;\\n            border-right: none;\\n            border-bottom: var(--white) 1px solid;\\n            writing-mode: horizontal-tb;\\n        }\\n        .category h2{\\n            font: \\"Montserrat\\", sans-serif;\\n            font-weight: 600;\\n            font-size: 3em;\\n        }\\n        .description p {\\n            padding: 0em 7vw 1em 7vw;\\n            font-size: x-large;\\n            color: lightgrey !important;\\n        }\\n        .title h1{\\n            font-size: 4em;\\n        }\\n    }\\n  </style>\\n  "],"names":[],"mappings":"AAsCI,8CAAgB,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,GAAG,CAAC,IACjB,CACA,sCAAS,CACL,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAAC,UACnC,CACA,mCAAM,CACF,OAAO,CAAE,KAAK,CACd,cAAc,CAAE,MAAM,CACtB,gBAAgB,CAAE,YAAY,CAC9B,QAAQ,CAAE,IACd,CACA,qCAAQ,CACJ,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,MAChB,CACA,kCAAK,CACD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,KAAK,CAAE,IACX,CACA,uCAAU,CACN,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CACf,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,KAAK,CACV,MAAM,CAAE,IAAI,CAEZ,aAAa,CAAE,UAAU,CACzB,YAAY,CAAE,WAAW,CACzB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,YAAY,CAAE,IAAI,OAAO,CAAC,CAAC,KAAK,CAAC,GAAG,CACpC,OAAO,CAAE,CACb,CACA,wBAAS,CAAC,iBAAE,CACR,IAAI,CAAE,YAAY,CAAC,CAAC,UAAU,CAC9B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,GACf,CACA,qCAAO,CACH,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MACf,CACA,oCAAO,CAGH,YAAY,CAAE,IAAI,CAClB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,YAAY,CAC9B,OAAO,CAAE,CAEb,CACA,0CAAa,CACT,gBAAgB,CAAE,KACtB,CACA,2BAAY,CAAC,gBAAE,CACX,OAAO,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,CAC1B,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,SAAS,CAAC,UACrB,CACA,MAAM,YAAY,KAAK,CAAC,CACpB,oCAAM,CACF,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,YAAY,CAAE,GAClB,CACA,qCAAO,CACH,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,CACb,CACA,uCAAU,CACN,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CACf,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,KAAK,CACV,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,IAAI,CAClB,aAAa,CAAE,IAAI,OAAO,CAAC,CAAC,GAAG,CAAC,KAAK,CACrC,YAAY,CAAE,aAClB,CACA,wBAAS,CAAC,iBAAE,CACR,IAAI,CAAE,YAAY,CAAC,CAAC,UAAU,CAC9B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,GACf,CACA,2BAAY,CAAC,gBAAE,CACX,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACxB,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,SAAS,CAAC,UACrB,CACA,qBAAM,CAAC,iBAAE,CACL,SAAS,CAAE,GACf,CACJ"}'
};
const Documentation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let alt;
  let title;
  let category;
  let tech;
  let description;
  let media;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css$4);
  ({ alt, title, category, tech, description, media } = data || {});
  return `<div class="${["page svelte-17w38xe", "blacked"].join(" ").trim()}"><div class="banner svelte-17w38xe"></div> <div class="${["row svelte-17w38xe", "blacked"].join(" ").trim()}"><div class="${["category svelte-17w38xe", "blacked"].join(" ").trim()}"><h2 class="svelte-17w38xe">${escape(category)}</h2></div> <div class="${["column svelte-17w38xe", "blacked"].join(" ").trim()}"><div class="${["title svelte-17w38xe", "blacked"].join(" ").trim()}"><h1 class="svelte-17w38xe">${escape(title)}</h1></div> <div class="${["description svelte-17w38xe", "blacked"].join(" ").trim()}"><p class="svelte-17w38xe"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p></div>  ${each(media, (m) => {
    return `${m.type === "image" ? `<img class="media_container svelte-17w38xe"${add_attribute("src", m.src, 0)}${add_attribute("alt", alt, 0)}>` : `${m.type === "video" ? ` <video class="media_container svelte-17w38xe" autoplay muted loop style="float:right; right:0rem; width:100%; height:100%"><source${add_attribute("src", m.src, 0)} type="video/mp4">
                        Your browser does not support the video tag.
                </video>` : `${m.type === "youtube" ? `` : ``}`}`}`;
  })}</div></div> </div>`;
});
const css$3 = {
  code: "#logo.svelte-1rj91ig.svelte-1rj91ig{position:absolute;z-index:3;left:0;top:0}#docButton.svelte-1rj91ig.svelte-1rj91ig{all:unset;cursor:pointer;position:fixed;bottom:0%;right:0%;margin:12px;padding:8px;background-color:white;color:black}.current.svelte-1rj91ig.svelte-1rj91ig{background-color:var(--white);color:var(--black);transition:all .12s}.documentation.svelte-1rj91ig.svelte-1rj91ig{position:absolute;z-index:4;bottom:-100%;left:0;width:100%;height:100%;display:flex;flex-flow:row wrap;justify-content:center;border-top:var(--white) 2px solid;background-color:var(--black);color:white;transition:bottom 0.37s ease}.container.svelte-1rj91ig.svelte-1rj91ig{position:absolute;left:0;top:0;display:flex;flex-flow:row nowrap;width:50vw}.squares.svelte-1rj91ig.svelte-1rj91ig,.texts.svelte-1rj91ig.svelte-1rj91ig{flex:1}.squares.svelte-1rj91ig.svelte-1rj91ig{transform:translate(0%, calc(50vh - 150px));display:flex;flex-direction:column-reverse}.texts.svelte-1rj91ig.svelte-1rj91ig{transform:translate(0%, calc(-100% + 50vh + 150px))}button.svelte-1rj91ig.svelte-1rj91ig{all:unset;cursor:pointer}.square.svelte-1rj91ig.svelte-1rj91ig{width:300px;height:300px;overflow:hidden;outline:1px solid white}.square.svelte-1rj91ig video.svelte-1rj91ig,img.svelte-1rj91ig.svelte-1rj91ig{width:300px;height:300px}.title.svelte-1rj91ig.svelte-1rj91ig{display:flex;justify-content:center;align-items:center;text-align:center;height:300px;width:calc(50vw - 210px);word-break:break-word;text-wrap:wrap;border:1px solid var(--white);font-size:12px}",
  map: '{"version":3,"file":"CarouselFinal.svelte","sources":["CarouselFinal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { contents, get_css_var } from \\"../scripts/functions\\";\\nimport { currentItem } from \\"../stores\\";\\nimport { fade } from \\"svelte/transition\\";\\nimport { quintOut } from \\"svelte/easing\\";\\nimport LogoProjects from \\"./LogoProjects.svelte\\";\\nimport Documentation from \\"./Documentation.svelte\\";\\nlet innerWidth = window.innerWidth;\\nlet innerHeight = window.innerHeight;\\n$: isMobile = innerWidth < 765;\\nlet logo;\\nlet scale;\\nlet indent;\\nlet baseHeight;\\nlet logoHeight;\\nlet threshold;\\nconst boxSize = 300;\\nconst max = contents.length - 1;\\nlet data = contents[$currentItem] || {};\\n$: data = contents[$currentItem] || {};\\n$: ({ alt, title, category, tech, description, media } = data || {});\\nconst length = Array.from({ length: max }, (_, i) => i);\\nlet scrollPos = 0;\\nlet lastScrollDelta = 0;\\nlet docmode = false;\\nlet carousel;\\nlet documentation;\\nlet isScrolling = false;\\nfunction updateCurrentItem(scrollPos2) {\\n  let closestIndex = max - Math.round(scrollPos2 / boxSize);\\n  currentItem.set(closestIndex);\\n  console.log(closestIndex);\\n}\\nfunction handleScroll(event) {\\n  if (docmode) {\\n    return;\\n  }\\n  const maxScrollPos = max * boxSize;\\n  const newScrollPos = scrollPos + event.deltaY;\\n  if (newScrollPos < 0) {\\n    scrollPos = 0;\\n  } else if (newScrollPos > maxScrollPos) {\\n    scrollPos = maxScrollPos;\\n  } else {\\n    scrollPos = newScrollPos;\\n  }\\n  if (!isScrolling) {\\n    isScrolling = true;\\n    requestAnimationFrame(() => {\\n      document.querySelector(\\".squares\\").style.transform = `translateY( calc(50vh - 150px - ${scrollPos}px) )`;\\n      document.querySelector(\\".texts\\").style.transform = `translateY( calc(-100% + 50vh + 150px + ${scrollPos}px) )`;\\n      isScrolling = false;\\n      updateCurrentItem(scrollPos);\\n      let diff = threshold - scrollPos;\\n      if (diff > 0 && scrollPos < threshold) {\\n        diff = 0;\\n        logo.style.transform = `translateY(${diff}px)`;\\n      } else if (scrollPos > threshold) {\\n        logo.style.transform = `translateY(${diff}px)`;\\n      }\\n    });\\n  }\\n  lastScrollDelta = event.deltaY;\\n}\\nonMount(() => {\\n  scale = parseFloat(get_css_var(\\"--scale\\"));\\n  indent = isMobile ? parseFloat(get_css_var(\\"--translate-y\\")) * 16 : parseFloat(get_css_var(\\"--translate-x\\")) * 16;\\n  baseHeight = isMobile ? 128 : 64;\\n  logoHeight = scale * baseHeight + indent;\\n  threshold = innerHeight / 2 - 150 - logoHeight;\\n  window.addEventListener(\\"wheel\\", handleScroll);\\n  return () => {\\n    window.removeEventListener(\\"wheel\\", handleScroll);\\n  };\\n});\\nfunction expandOut(node, { duration, sign = 1 }) {\\n  return {\\n    duration,\\n    css: (t) => `\\n                transform: translate(-50%, ${sign * (50 - (1 - t) * 100)}%);\\n                opacity: ${2 * t / 3};\\n                height: 60%;\\n            `,\\n    easing: quintOut\\n  };\\n}\\nfunction showDoc() {\\n  docmode = true;\\n  documentation.style.bottom = \\"2px\\";\\n}\\nfunction hideDoc() {\\n  docmode = false;\\n  documentation.style.bottom = \\"100%\\";\\n}\\n<\/script>\\n\\n<div id=\\"logo\\" bind:this={logo}> <LogoProjects> </LogoProjects> </div>\\n<div class=\\"container\\" bind:this={carousel}>\\n    <!-- THUMBNAILS -->\\n    <div on:click={showDoc} class=\\"squares\\"> \\n        {#each contents as {title, thumbnail:{src, type}, alt, category, tech}, i}\\n            <button class=\\"square\\"> \\n                {#if type === \\"video\\"}\\n                    <video muted loop\\n                        class=\\"thumbnail {(i===$currentItem)?\\"current\\":\\"\\"}\\" style=\\"float:right; right:0rem\\">\\n                        <source src={src} type=\\"video/mp4\\"> your browser does not support the video tag.\\n                    </video>\\n                {:else }\\n                    <img class=\\"{(i===$currentItem)?\\"current\\":\\"\\"}\\" alt={alt} src={src}>\\n                {/if}\\n            </button>\\n        {/each}\\n    </div>\\n    <!-- TITLES -->\\n    <div class=\\"texts\\">\\n        {#each contents as {title, thumbnail:{src, type}, alt, category, tech}, i}\\n            <div class=\\"{($currentItem === i) ? \\"current\\":\\"\\"} title\\"> <h1> {title} </h1> </div>\\n        {/each}\\n    </div>\\n</div>\\n<!-- documentation -->\\n<div class=\\"documentation\\" bind:this={documentation}>\\n    <Documentation data={data}/>\\n</div>\\n<button id=\\"docButton\\" on:click={showDoc}> click me </button>\\n\\n<style>\\n    #logo{\\n        /* display: none; */\\n        position: absolute;\\n        z-index: 3;\\n        left: 0;\\n        top: 0;\\n    }\\n    #docButton{\\n        all:unset;\\n        cursor: pointer;\\n        position: fixed;\\n        bottom: 0%;\\n        right: 0%;\\n        margin: 12px;\\n        padding: 8px;\\n        background-color: white;\\n        color: black;\\n    }\\n    .current{\\n        background-color: var(--white);\\n        color: var(--black);\\n        transition: all .12s;\\n    }\\n    .documentation {\\n        position: absolute;\\n        z-index: 4;\\n        bottom: -100%;\\n        left: 0;\\n        width: 100%;\\n        height: 100%;\\n        display: flex;\\n        flex-flow: row wrap;\\n        justify-content: center;\\n        border-top: var(--white) 2px solid;\\n        background-color: var(--black);\\n        color: white;\\n        transition: bottom 0.37s ease;\\n    }\\n    .container {\\n        position: absolute;\\n        left: 0;\\n        top: 0;\\n        display: flex;\\n        flex-flow: row nowrap;\\n        width: 50vw;\\n    }\\n\\n    .squares, .texts {\\n        flex: 1;\\n    }\\n\\n    .squares{\\n        transform: translate(0%, calc(50vh - 150px));\\n        display: flex;\\n        flex-direction: column-reverse;\\n    }\\n    .texts{ \\n        transform: translate(0%, calc(-100% + 50vh + 150px));\\n    }\\n    button{\\n        all: unset;\\n        cursor: pointer;\\n    }\\n    .square {\\n        width: 300px;\\n        height: 300px;\\n        overflow: hidden;\\n        outline: 1px solid white;\\n    }\\n    \\n    .square video, img{\\n        width: 300px;\\n        height: 300px;\\n    }\\n\\n    .title {\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        text-align: center;\\n        height: 300px;\\n        width: calc(50vw - 210px);\\n        word-break: break-word;\\n        text-wrap: wrap;\\n        border: 1px solid var(--white);\\n        font-size: 12px;\\n    }\\n    /* DOCUMENTATION BUTTONS */\\n    .isMobile{\\n        display: none;\\n    }\\n    .hidden{\\n        position: absolute;\\n        width: 100%;\\n        height: 100%;\\n        left:0;\\n        top: 0;\\n        overflow: hidden !important;\\n    }\\n</style>"],"names":[],"mappings":"AA+HI,mCAAK,CAED,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CACT,CACA,wCAAU,CACN,IAAI,KAAK,CACT,MAAM,CAAE,OAAO,CACf,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,EAAE,CACV,KAAK,CAAE,EAAE,CACT,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KACX,CACA,sCAAQ,CACJ,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,UAAU,CAAE,GAAG,CAAC,IACpB,CACA,4CAAe,CACX,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,KAAK,CACb,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,IAAI,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,OAAO,CAAC,CAAC,GAAG,CAAC,KAAK,CAClC,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,MAAM,CAAC,KAAK,CAAC,IAC7B,CACA,wCAAW,CACP,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,MAAM,CACrB,KAAK,CAAE,IACX,CAEA,sCAAQ,CAAE,oCAAO,CACb,IAAI,CAAE,CACV,CAEA,sCAAQ,CACJ,SAAS,CAAE,UAAU,EAAE,CAAC,CAAC,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAC5C,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,cACpB,CACA,oCAAM,CACF,SAAS,CAAE,UAAU,EAAE,CAAC,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CACvD,CACA,oCAAM,CACF,GAAG,CAAE,KAAK,CACV,MAAM,CAAE,OACZ,CACA,qCAAQ,CACJ,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,KACvB,CAEA,sBAAO,CAAC,oBAAK,CAAE,iCAAG,CACd,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACZ,CAEA,oCAAO,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CACzB,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,OAAO,CAAC,CAC9B,SAAS,CAAE,IACf"}'
};
const CarouselFinal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let alt;
  let title;
  let category;
  let tech;
  let description;
  let media;
  let $currentItem, $$unsubscribe_currentItem;
  $$unsubscribe_currentItem = subscribe(currentItem, (value) => $currentItem = value);
  let logo;
  const max = contents.length - 1;
  let data = contents[$currentItem] || {};
  Array.from({ length: max }, (_, i) => i);
  let carousel;
  let documentation;
  $$result.css.add(css$3);
  data = contents[$currentItem] || {};
  ({ alt, title, category, tech, description, media } = data || {});
  $$unsubscribe_currentItem();
  return `<div id="logo" class="svelte-1rj91ig"${add_attribute("this", logo, 0)}>${validate_component(LogoProjects, "LogoProjects").$$render($$result, {}, {}, {})}</div> <div class="container svelte-1rj91ig"${add_attribute("this", carousel, 0)}> <div class="squares svelte-1rj91ig">${each(contents, ({ title: title2, thumbnail: { src, type }, alt: alt2, category: category2, tech: tech2 }, i) => {
    return `<button class="square svelte-1rj91ig">${type === "video" ? `<video muted loop class="${"thumbnail " + escape(i === $currentItem ? "current" : "", true) + " svelte-1rj91ig"}" style="float:right; right:0rem"><source${add_attribute("src", src, 0)} type="video/mp4"> your browser does not support the video tag.
                    </video>` : `<img class="${escape(null_to_empty(i === $currentItem ? "current" : ""), true) + " svelte-1rj91ig"}"${add_attribute("alt", alt2, 0)}${add_attribute("src", src, 0)}>`} </button>`;
  })}</div>  <div class="texts svelte-1rj91ig">${each(contents, ({ title: title2, thumbnail: { src, type }, alt: alt2, category: category2, tech: tech2 }, i) => {
    return `<div class="${escape($currentItem === i ? "current" : "", true) + " title svelte-1rj91ig"}"><h1>${escape(title2)}</h1> </div>`;
  })}</div></div>  <div class="documentation svelte-1rj91ig"${add_attribute("this", documentation, 0)}>${validate_component(Documentation, "Documentation").$$render($$result, { data }, {}, {})}</div> <button id="docButton" class="svelte-1rj91ig" data-svelte-h="svelte-1r2h7zb">click me </button>`;
});
const css$2 = {
  code: ":root{--translate-x:0rem;--translate-y:1.5rem;--scale:1.25;--rotate:0deg}.hidden.svelte-1pa7nib{opacity:0 !important}#logo.svelte-1pa7nib{z-index:4;width:12rem !important;height:auto !important;position:fixed;top:-2rem;left:.5rem;transition:all 0.3s ease;opacity:1;animation:svelte-1pa7nib-enter 0.2s forwards;cursor:pointer}.inner.svelte-1pa7nib{stroke:var(--white) !important}.outer.svelte-1pa7nib{stroke:rgba(calc( 255 - var(--dark))) !important;stroke-width:2px !important}@keyframes svelte-1pa7nib-enter{0%{transform:translate(-12rem, var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));filter:blur(5px)}25%{filter:blur(3px)}75%{filter:blur(2px)}100%{transform:translate(var(--translate-x), var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));filter:none}}",
  map: '{"version":3,"file":"Logo.svelte","sources":["Logo.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let index = 0;\\nimport { fade } from \\"svelte/transition\\";\\nlet innerWidth = window.innerWidth;\\n$: isMobile = innerWidth < 765;\\n$: hidden = isMobile && index === 1 || index === 3 ? true : false;\\n<\/script>\\n<svg\\n   viewBox=\\"0 0 128 64\\"\\n   version=\\"1.1\\"\\n   id=\\"logo\\"\\n   class:hidden\\n   xmlns=\\"http://www.w3.org/2000/svg\\"\\n   xmlns:svg=\\"http://www.w3.org/2000/svg\\">\\n  <defs\\n     id=\\"defs2\\" />\\n  <g\\n     id=\\"g3731\\"\\n     style=\\"display:inline\\">\\n    <path\\n       id=\\"path7580\\"\\n       class=\\"outer\\"\\n       style=\\"display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none\\"\\n       d=\\"M 47.28361,31.850835 A 15.432775,15.432775 0 0 1 31.850835,47.28361 15.432775,15.432775 0 0 1 16.41806,31.850835 15.432775,15.432775 0 0 1 31.850835,16.41806 15.432775,15.432775 0 0 1 47.28361,31.850835 Z\\" />\\n    <path\\n       id=\\"path3725\\"\\n       class=\\"inner\\"\\n       style=\\"display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1\\"\\n       d=\\"M 47.432775,32 A 15.432775,15.432775 0 0 1 32,47.432775 15.432775,15.432775 0 0 1 16.567225,32 15.432775,15.432775 0 0 1 32,16.567225 15.432775,15.432775 0 0 1 47.432775,32 Z\\" />\\n    <path\\n       id=\\"path1183-1\\"\\n       class=\\"outer\\"\\n       style=\\"display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none\\"\\n       d=\\"M 82.283612,31.850835 A 15.432775,15.432775 0 0 1 66.850837,47.28361 15.432775,15.432775 0 0 1 51.418062,31.850835 15.432775,15.432775 0 0 1 66.850837,16.41806 15.432775,15.432775 0 0 1 82.283612,31.850835 Z\\" />\\n    <path\\n       id=\\"path3727\\"\\n       class=\\"inner\\"\\n       style=\\"display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1\\"\\n       d=\\"M 82.432775,32 A 15.432775,15.432775 0 0 1 67,47.432775 15.432775,15.432775 0 0 1 51.567225,32 15.432775,15.432775 0 0 1 67,16.567225 15.432775,15.432775 0 0 1 82.432775,32 Z\\" />\\n    <path\\n       id=\\"path2113\\"\\n       class=\\"outer\\"\\n       style=\\"display:inline;fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:2.64583;stroke-dasharray:none;stroke-opacity:1\\"\\n       d=\\"m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z\\"\\n       transform=\\"matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)\\" />\\n    <path\\n       id=\\"path3729\\"\\n       class=\\"inner\\"\\n       style=\\"display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.05833;stroke-dasharray:none;stroke-opacity:1\\"\\n       d=\\"m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z\\"\\n       transform=\\"matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)\\" />\\n  </g>\\n</svg>\\n\\n<style>\\n    :root {\\n        /* was -1.5 */\\n        --translate-x: 0rem; \\n        --translate-y: 1.5rem;\\n        /* was 1 */\\n        --scale: 1.25;\\n        --rotate: 0deg;\\n    }\\n    .hidden{\\n        /* display: none; */\\n        opacity: 0 !important;\\n    }\\n    #logo{\\n        z-index: 4;\\n        width : 12rem !important;\\n        height : auto !important;\\n        position: fixed;\\n        top: -2rem;\\n        left: .5rem;\\n        transition: all 0.3s ease;\\n        opacity:1;\\n        animation: enter 0.2s forwards;\\n        cursor: pointer;\\n    }\\n    .inner {\\n        /* stroke: var(--black) !important; */\\n        /* stroke: rgba(255, 255, 255, 0) !important; */\\n        stroke: var(--white) !important;\\n        /* stroke-width: 3px !important; */\\n    }\\n    .outer {\\n        stroke: rgba(calc( 255 - var(--dark))) !important;\\n        stroke-width: 2px !important;\\n    }\\n    @keyframes enter {\\n        0% {\\n            transform: translate(-12rem, var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));\\n            filter: blur(5px);\\n        }\\n        25% {\\n            filter: blur(3px);\\n        }\\n        75% {\\n            filter: blur(2px);\\n        }\\n        100% {\\n            transform: translate(var(--translate-x), var(--translate-y)) rotate(var(--rotate)) scale(var(--scale));\\n            filter: none;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAsDI,KAAM,CAEF,aAAa,CAAE,IAAI,CACnB,aAAa,CAAE,MAAM,CAErB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,IACd,CACA,sBAAO,CAEH,OAAO,CAAE,CAAC,CAAC,UACf,CACA,oBAAK,CACD,OAAO,CAAE,CAAC,CACV,KAAK,CAAG,KAAK,CAAC,UAAU,CACxB,MAAM,CAAG,IAAI,CAAC,UAAU,CACxB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,KAAK,CACX,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CACzB,QAAQ,CAAC,CACT,SAAS,CAAE,oBAAK,CAAC,IAAI,CAAC,QAAQ,CAC9B,MAAM,CAAE,OACZ,CACA,qBAAO,CAGH,MAAM,CAAE,IAAI,OAAO,CAAC,CAAC,UAEzB,CACA,qBAAO,CACH,MAAM,CAAE,KAAK,MAAM,GAAG,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,UAAU,CACjD,YAAY,CAAE,GAAG,CAAC,UACtB,CACA,WAAW,oBAAM,CACb,EAAG,CACC,SAAS,CAAE,UAAU,MAAM,CAAC,CAAC,IAAI,aAAa,CAAC,CAAC,CAAC,OAAO,IAAI,QAAQ,CAAC,CAAC,CAAC,MAAM,IAAI,OAAO,CAAC,CAAC,CAC1F,MAAM,CAAE,KAAK,GAAG,CACpB,CACA,GAAI,CACA,MAAM,CAAE,KAAK,GAAG,CACpB,CACA,GAAI,CACA,MAAM,CAAE,KAAK,GAAG,CACpB,CACA,IAAK,CACD,SAAS,CAAE,UAAU,IAAI,aAAa,CAAC,CAAC,CAAC,IAAI,aAAa,CAAC,CAAC,CAAC,OAAO,IAAI,QAAQ,CAAC,CAAC,CAAC,MAAM,IAAI,OAAO,CAAC,CAAC,CACtG,MAAM,CAAE,IACZ,CACJ"}'
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  let hidden;
  let { index = 0 } = $$props;
  let innerWidth = window.innerWidth;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  $$result.css.add(css$2);
  isMobile = innerWidth < 765;
  hidden = isMobile && index === 1 || index === 3 ? true : false;
  return `<svg viewBox="0 0 128 64" version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="${["svelte-1pa7nib", hidden ? "hidden" : ""].join(" ").trim()}"><defs id="defs2"></defs><g id="g3731" style="display:inline"><path id="path7580" class="outer svelte-1pa7nib" style="display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none" d="M 47.28361,31.850835 A 15.432775,15.432775 0 0 1 31.850835,47.28361 15.432775,15.432775 0 0 1 16.41806,31.850835 15.432775,15.432775 0 0 1 31.850835,16.41806 15.432775,15.432775 0 0 1 47.28361,31.850835 Z"></path><path id="path3725" class="inner svelte-1pa7nib" style="display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1" d="M 47.432775,32 A 15.432775,15.432775 0 0 1 32,47.432775 15.432775,15.432775 0 0 1 16.567225,32 15.432775,15.432775 0 0 1 32,16.567225 15.432775,15.432775 0 0 1 47.432775,32 Z"></path><path id="path1183-1" class="outer svelte-1pa7nib" style="display:inline;fill:none;stroke:#ffffff;stroke-width:2.83612;stroke-dasharray:none" d="M 82.283612,31.850835 A 15.432775,15.432775 0 0 1 66.850837,47.28361 15.432775,15.432775 0 0 1 51.418062,31.850835 15.432775,15.432775 0 0 1 66.850837,16.41806 15.432775,15.432775 0 0 1 82.283612,31.850835 Z"></path><path id="path3727" class="inner svelte-1pa7nib" style="display:inline;fill:none;stroke:#000000;stroke-width:1.13445;stroke-opacity:1" d="M 82.432775,32 A 15.432775,15.432775 0 0 1 67,47.432775 15.432775,15.432775 0 0 1 51.567225,32 15.432775,15.432775 0 0 1 67,16.567225 15.432775,15.432775 0 0 1 82.432775,32 Z"></path><path id="path2113" class="outer svelte-1pa7nib" style="display:inline;fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:2.64583;stroke-dasharray:none;stroke-opacity:1" d="m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z" transform="matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)"></path><path id="path3729" class="inner svelte-1pa7nib" style="display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.05833;stroke-dasharray:none;stroke-opacity:1" d="m 103.53119,1.1732653 -7.702232,13.3949127 -3.006361,5.228681 h 21.504843 l -3.04686,-5.256148 z m -12.830731,22.3141207 -2.573733,4.475705 15.451624,-0.02699 15.45162,-0.02747 -2.56297,-4.421244 z" transform="matrix(1.0081364,0,0,1.0912112,-5.8680882,16.874684)"></path></g></svg>`;
});
const P5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { target = void 0 } = $$props;
  let { sketch = void 0 } = $$props;
  let { parentDivStyle = "display: block;" } = $$props;
  let { debug = false } = $$props;
  createEventDispatcher();
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  if ($$props.sketch === void 0 && $$bindings.sketch && sketch !== void 0) $$bindings.sketch(sketch);
  if ($$props.parentDivStyle === void 0 && $$bindings.parentDivStyle && parentDivStyle !== void 0) $$bindings.parentDivStyle(parentDivStyle);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0) $$bindings.debug(debug);
  return `<div${add_attribute("style", parentDivStyle, 0)} class="m-0"></div>`;
});
const moroccoData = [{ "x": 459.498046875, "y": 23.931640625 }, { "x": 454.81292724609375, "y": 25.644407749176025 }, { "x": 450.10882568359375, "y": 27.362916469573975 }, { "x": 444.95318603515625, "y": 27.65788221359253 }, { "x": 442.7646179199219, "y": 32.20729064941406 }, { "x": 441.587158203125, "y": 37.28170394897461 }, { "x": 440.0575866699219, "y": 42.260040283203125 }, { "x": 438.13677978515625, "y": 47.10149955749512 }, { "x": 436.5248107910156, "y": 52.05430221557617 }, { "x": 434.5683288574219, "y": 56.86246109008789 }, { "x": 432.8426513671875, "y": 61.77745056152344 }, { "x": 431.13604736328125, "y": 66.69905853271484 }, { "x": 429.2331237792969, "y": 71.54848098754883 }, { "x": 427.197998046875, "y": 76.34402084350586 }, { "x": 425.0483703613281, "y": 81.08934020996094 }, { "x": 422.77313232421875, "y": 85.77564239501953 }, { "x": 420.31317138671875, "y": 90.3671646118164 }, { "x": 417.65234375, "y": 94.845703125 }, { "x": 415.17718505859375, "y": 99.4291000366211 }, { "x": 412.55291748046875, "y": 103.9214859008789 }, { "x": 409.45440673828125, "y": 108.10826873779297 }, { "x": 406.0815124511719, "y": 112.07697296142578 }, { "x": 402.1184997558594, "y": 115.4216079711914 }, { "x": 397.5610656738281, "y": 117.94302368164062 }, { "x": 393.0764465332031, "y": 120.5910873413086 }, { "x": 388.6536865234375, "y": 123.18997955322266 }, { "x": 384.37811279296875, "y": 126.15609741210938 }, { "x": 379.46575927734375, "y": 127.68878173828125 }, { "x": 374.9803161621094, "y": 130.29017639160156 }, { "x": 370.1950378417969, "y": 132.30557250976562 }, { "x": 365.4718933105469, "y": 134.5030975341797 }, { "x": 360.64459228515625, "y": 136.45787811279297 }, { "x": 355.8856506347656, "y": 138.20217895507812 }, { "x": 351.9248046875, "y": 141.52574157714844 }, { "x": 347.3769226074219, "y": 143.63231658935547 }, { "x": 343.39703369140625, "y": 145.94837188720703 }, { "x": 340.9978332519531, "y": 150.52581787109375 }, { "x": 337.98974609375, "y": 154.76419067382812 }, { "x": 334.4837646484375, "y": 158.6166229248047 }, { "x": 330.8410339355469, "y": 162.34080505371094 }, { "x": 327.1400451660156, "y": 166.00723266601562 }, { "x": 323.4205322265625, "y": 169.65493774414062 }, { "x": 319.750732421875, "y": 173.35226440429688 }, { "x": 318.0242004394531, "y": 177.68711853027344 }, { "x": 317.3608703613281, "y": 182.4414825439453 }, { "x": 318.02337646484375, "y": 187.3683624267578 }, { "x": 317.4278564453125, "y": 192.4932861328125 }, { "x": 314.8580627441406, "y": 197.00559997558594 }, { "x": 312.1199035644531, "y": 201.4189453125 }, { "x": 308.6827392578125, "y": 205.3327178955078 }, { "x": 305.5086669921875, "y": 209.46212768554688 }, { "x": 302.78814697265625, "y": 213.89845275878906 }, { "x": 300.8579406738281, "y": 218.7108917236328 }, { "x": 298.2333984375, "y": 223.12167358398438 }, { "x": 296.5347595214844, "y": 227.47328186035156 }, { "x": 297.2476806640625, "y": 232.2026824951172 }, { "x": 296.4305114746094, "y": 237.3435516357422 }, { "x": 296.48077392578125, "y": 242.55068969726562 }, { "x": 296.6995849609375, "y": 247.7557373046875 }, { "x": 296.5589294433594, "y": 252.95556640625 }, { "x": 294.75177001953125, "y": 257.8229675292969 }, { "x": 297.1585998535156, "y": 261.2396697998047 }, { "x": 301.0133056640625, "y": 264.7119598388672 }, { "x": 303.3760681152344, "y": 269.2534942626953 }, { "x": 304.4506530761719, "y": 273.8644256591797 }, { "x": 303.4291076660156, "y": 278.97210693359375 }, { "x": 301.93048095703125, "y": 283.95916748046875 }, { "x": 299.9606018066406, "y": 288.7799377441406 }, { "x": 297.5273132324219, "y": 293.38360595703125 }, { "x": 294.52850341796875, "y": 297.636962890625 }, { "x": 291.1021728515625, "y": 301.5604553222656 }, { "x": 288.1336364746094, "y": 305.83123779296875 }, { "x": 285.9785461425781, "y": 310.5652770996094 }, { "x": 283.1839599609375, "y": 314.95916748046875 }, { "x": 279.8166809082031, "y": 318.91650390625 }, { "x": 276.21295166015625, "y": 322.6510009765625 }, { "x": 273.0111541748047, "y": 326.7605285644531 }, { "x": 269.3216552734375, "y": 330.403076171875 }, { "x": 265.0130157470703, "y": 333.3287353515625 }, { "x": 260.53143310546875, "y": 335.984130859375 }, { "x": 255.95301818847656, "y": 338.46929931640625 }, { "x": 251.5605926513672, "y": 341.2637939453125 }, { "x": 247.4808349609375, "y": 344.5009460449219 }, { "x": 243.66038513183594, "y": 348.0411682128906 }, { "x": 240.0833740234375, "y": 351.8274230957031 }, { "x": 236.76210021972656, "y": 355.8397521972656 }, { "x": 233.38807678222656, "y": 359.79345703125 }, { "x": 228.7838897705078, "y": 362.1871032714844 }, { "x": 223.92849731445312, "y": 364.0751647949219 }, { "x": 219.12094116210938, "y": 366.0814514160156 }, { "x": 214.42019653320312, "y": 368.32330322265625 }, { "x": 209.50543212890625, "y": 370.0350341796875 }, { "x": 204.46282958984375, "y": 371.3417053222656 }, { "x": 199.37661743164062, "y": 372.4682312011719 }, { "x": 194.26193237304688, "y": 373.4574279785156 }, { "x": 189.12310791015625, "y": 374.3125915527344 }, { "x": 183.96694946289062, "y": 375.0558776855469 }, { "x": 178.94747924804688, "y": 376.3554382324219 }, { "x": 176.47439575195312, "y": 380.8066711425781 }, { "x": 173.63290405273438, "y": 384.7527160644531 }, { "x": 169.8763427734375, "y": 388.2026672363281 }, { "x": 168.0898895263672, "y": 393.0929870605469 }, { "x": 166.4241943359375, "y": 398.0287170410156 }, { "x": 164.48899841308594, "y": 402.86456298828125 }, { "x": 162.07513427734375, "y": 407.47662353515625 }, { "x": 160.40086364746094, "y": 412.3926696777344 }, { "x": 158.8724822998047, "y": 417.372314453125 }, { "x": 157.120849609375, "y": 422.2782287597656 }, { "x": 154.8723907470703, "y": 426.96258544921875 }, { "x": 151.18357849121094, "y": 430.6113586425781 }, { "x": 146.87208557128906, "y": 433.5323181152344 }, { "x": 142.4155502319336, "y": 436.230224609375 }, { "x": 137.86214447021484, "y": 438.7591857910156 }, { "x": 132.9039535522461, "y": 440.18267822265625 }, { "x": 129.3096160888672, "y": 443.807861328125 }, { "x": 125.08901977539062, "y": 446.7191162109375 }, { "x": 121.42909240722656, "y": 450.1114196777344 }, { "x": 120.07372283935547, "y": 455.099609375 }, { "x": 119.01892852783203, "y": 460.18682861328125 }, { "x": 116.89246368408203, "y": 464.9304504394531 }, { "x": 114.31255340576172, "y": 469.4159240722656 }, { "x": 112.78178405761719, "y": 474.39337158203125 }, { "x": 110.9232177734375, "y": 479.255859375 }, { "x": 108.63961791992188, "y": 483.9270935058594 }, { "x": 107.28077697753906, "y": 488.95074462890625 }, { "x": 106.89322662353516, "y": 494.1297607421875 }, { "x": 107.21456146240234, "y": 499.324462890625 }, { "x": 106.77674865722656, "y": 504.5101623535156 }, { "x": 105.3395004272461, "y": 509.5079650878906 }, { "x": 103.19668579101562, "y": 513.9159851074219 }, { "x": 100.15703582763672, "y": 517.987060546875 }, { "x": 95.67475128173828, "y": 520.5820007324219 }, { "x": 91.82366180419922, "y": 524.0577392578125 }, { "x": 88.35494995117188, "y": 527.94384765625 }, { "x": 84.75194549560547, "y": 531.7063293457031 }, { "x": 81.1667709350586, "y": 535.4855346679688 }, { "x": 77.78023529052734, "y": 539.435791015625 }, { "x": 73.53358459472656, "y": 542.4331665039062 }, { "x": 69.40406036376953, "y": 545.5875854492188 }, { "x": 66.29239654541016, "y": 549.7463989257812 }, { "x": 63.6935920715332, "y": 554.25927734375 }, { "x": 65.22427749633789, "y": 555.1138916015625 }, { "x": 67.44632339477539, "y": 550.4385375976562 }, { "x": 70.75005722045898, "y": 546.4334106445312 }, { "x": 73.7453384399414, "y": 544.30859375 }, { "x": 72.28839111328125, "y": 549.2805786132812 }, { "x": 69.74645233154297, "y": 553.8171997070312 }, { "x": 67.02690887451172, "y": 558.229248046875 }, { "x": 64.21296310424805, "y": 562.4840087890625 }, { "x": 62.12680435180664, "y": 567.1253662109375 }, { "x": 59.523319244384766, "y": 571.6346435546875 }, { "x": 56.829044342041016, "y": 576.0882568359375 }, { "x": 56.766517639160156, "y": 579.6781005859375 }, { "x": 55.9847526550293, "y": 584.152099609375 }, { "x": 51.87117958068848, "y": 586.9730834960938 }, { "x": 50.600088119506836, "y": 591.9765625 }, { "x": 49.541927337646484, "y": 597.0716552734375 }, { "x": 47.175119400024414, "y": 601.5790405273438 }, { "x": 45.520870208740234, "y": 606.4743041992188 }, { "x": 42.69009017944336, "y": 610.7094116210938 }, { "x": 37.925350189208984, "y": 610.9998779296875 }, { "x": 34.11590099334717, "y": 614.3949584960938 }, { "x": 31.667901039123535, "y": 618.86279296875 }, { "x": 29.8443660736084, "y": 623.7421875 }, { "x": 27.761024951934814, "y": 628.5133056640625 }, { "x": 26.320477962493896, "y": 633.4755249023438 }, { "x": 25.832947731018066, "y": 638.6616821289062 }, { "x": 25.10063409805298, "y": 643.8175048828125 }, { "x": 24.178285121917725, "y": 648.9437866210938 }, { "x": 23.49289321899414, "y": 654.1078491210938 }, { "x": 22.958109378814697, "y": 659.289794921875 }, { "x": 22.58155608177185, "y": 664.4855346679688 }, { "x": 22.463126182556152, "y": 669.69287109375 }, { "x": 23.761165380477905, "y": 665.8993530273438 }, { "x": 24.931742191314697, "y": 660.8248901367188 }, { "x": 26.466552734375, "y": 655.8471069335938 }, { "x": 28.06741714477539, "y": 650.8943481445312 }, { "x": 33.275330543518066, "y": 650.7596435546875 }, { "x": 38.48318290710449, "y": 650.6248779296875 }, { "x": 43.691097259521484, "y": 650.4901733398438 }, { "x": 48.89921188354492, "y": 650.36376953125 }, { "x": 54.10821533203125, "y": 650.28759765625 }, { "x": 59.3176383972168, "y": 650.2356567382812 }, { "x": 64.52710723876953, "y": 650.1981811523438 }, { "x": 69.73664474487305, "y": 650.169921875 }, { "x": 74.94628524780273, "y": 650.149169921875 }, { "x": 80.1558837890625, "y": 650.134521484375 }, { "x": 85.36555480957031, "y": 650.1253051757812 }, { "x": 90.57515716552734, "y": 650.12255859375 }, { "x": 95.7848129272461, "y": 650.1220703125 }, { "x": 100.99443054199219, "y": 650.1266479492188 }, { "x": 106.20401763916016, "y": 650.1356201171875 }, { "x": 111.4136734008789, "y": 650.14697265625 }, { "x": 116.6232681274414, "y": 650.164306640625 }, { "x": 121.83287048339844, "y": 650.1859130859375 }, { "x": 127.04246520996094, "y": 650.2099609375 }, { "x": 132.25206756591797, "y": 650.2340087890625 }, { "x": 137.46160888671875, "y": 650.258056640625 }, { "x": 142.6712646484375, "y": 650.2821655273438 }, { "x": 147.88080596923828, "y": 650.3062133789062 }, { "x": 153.09034729003906, "y": 650.3302612304688 }, { "x": 158.3000030517578, "y": 650.3543090820312 }, { "x": 163.50955200195312, "y": 650.3783569335938 }, { "x": 168.71908569335938, "y": 650.4024047851562 }, { "x": 173.92874145507812, "y": 650.426513671875 }, { "x": 176.89361572265625, "y": 648.4791259765625 }, { "x": 176.30067443847656, "y": 643.3037109375 }, { "x": 175.7793426513672, "y": 638.1201171875 }, { "x": 175.2745361328125, "y": 632.9349975585938 }, { "x": 174.78065490722656, "y": 627.7488403320312 }, { "x": 174.29415893554688, "y": 622.5619506835938 }, { "x": 173.81442260742188, "y": 617.37451171875 }, { "x": 173.3415069580078, "y": 612.1864013671875 }, { "x": 172.87644958496094, "y": 606.9974975585938 }, { "x": 172.42303466796875, "y": 601.8076782226562 }, { "x": 171.99185180664062, "y": 596.6160278320312 }, { "x": 171.91531372070312, "y": 591.4175415039062 }, { "x": 172.9409942626953, "y": 586.31640625 }, { "x": 174.68470764160156, "y": 581.4107666015625 }, { "x": 176.99343872070312, "y": 576.743896484375 }, { "x": 179.86720275878906, "y": 572.4037475585938 }, { "x": 183.46115112304688, "y": 568.648681640625 }, { "x": 188.27145385742188, "y": 566.880859375 }, { "x": 193.43450927734375, "y": 566.1903076171875 }, { "x": 198.6181182861328, "y": 565.6715698242188 }, { "x": 203.80426025390625, "y": 565.1761474609375 }, { "x": 208.98851013183594, "y": 564.662841796875 }, { "x": 214.1648712158203, "y": 564.0768432617188 }, { "x": 214.90184020996094, "y": 559.5450439453125 }, { "x": 214.86915588378906, "y": 554.3355712890625 }, { "x": 214.8364715576172, "y": 549.1260986328125 }, { "x": 214.80380249023438, "y": 543.91650390625 }, { "x": 214.7711181640625, "y": 538.7069702148438 }, { "x": 214.73843383789062, "y": 533.4974975585938 }, { "x": 214.70574951171875, "y": 528.2878723144531 }, { "x": 214.67308044433594, "y": 523.078369140625 }, { "x": 214.64039611816406, "y": 517.868896484375 }, { "x": 214.6077117919922, "y": 512.6592712402344 }, { "x": 214.5750274658203, "y": 507.4497375488281 }, { "x": 214.5423583984375, "y": 502.240234375 }, { "x": 214.50967407226562, "y": 497.0306091308594 }, { "x": 214.47698974609375, "y": 491.8211364746094 }, { "x": 214.44430541992188, "y": 486.61151123046875 }, { "x": 214.41163635253906, "y": 481.4020080566406 }, { "x": 214.3789520263672, "y": 476.1925354003906 }, { "x": 214.3462677001953, "y": 470.98291015625 }, { "x": 214.31358337402344, "y": 465.7734069824219 }, { "x": 214.28091430664062, "y": 460.5639343261719 }, { "x": 217.665283203125, "y": 458.75 }, { "x": 222.8748779296875, "y": 458.75 }, { "x": 228.08447265625, "y": 458.75 }, { "x": 233.294189453125, "y": 458.75 }, { "x": 238.5037841796875, "y": 458.75 }, { "x": 243.71337890625, "y": 458.75 }, { "x": 248.923095703125, "y": 458.75 }, { "x": 254.1326904296875, "y": 458.75 }, { "x": 259.34228515625, "y": 458.75 }, { "x": 264.552001953125, "y": 458.75 }, { "x": 269.7615966796875, "y": 458.75 }, { "x": 274.97119140625, "y": 458.75 }, { "x": 280.180908203125, "y": 458.75 }, { "x": 285.3905029296875, "y": 458.75 }, { "x": 290.60009765625, "y": 458.75 }, { "x": 295.809814453125, "y": 458.75 }, { "x": 301.0194091796875, "y": 458.75 }, { "x": 306.22900390625, "y": 458.75 }, { "x": 311.438720703125, "y": 458.75 }, { "x": 316.6483154296875, "y": 458.75 }, { "x": 321.85791015625, "y": 458.75 }, { "x": 327.067626953125, "y": 458.75 }, { "x": 332.2772216796875, "y": 458.75 }, { "x": 337.48681640625, "y": 458.75 }, { "x": 340.2699279785156, "y": 456.29388427734375 }, { "x": 340.33294677734375, "y": 451.0846862792969 }, { "x": 340.39593505859375, "y": 445.8754577636719 }, { "x": 340.45892333984375, "y": 440.6661376953125 }, { "x": 340.52191162109375, "y": 435.4569091796875 }, { "x": 340.5849304199219, "y": 430.2477111816406 }, { "x": 340.6479187011719, "y": 425.0383605957031 }, { "x": 340.7093200683594, "y": 419.82916259765625 }, { "x": 340.7689208984375, "y": 414.6199035644531 }, { "x": 340.8226013183594, "y": 409.4104309082031 }, { "x": 340.873779296875, "y": 404.201171875 }, { "x": 340.921875, "y": 398.9917907714844 }, { "x": 340.9654235839844, "y": 393.7821350097656 }, { "x": 341.00640869140625, "y": 388.5727233886719 }, { "x": 341.0436706542969, "y": 383.3631286621094 }, { "x": 341.0752868652344, "y": 378.15374755859375 }, { "x": 341.1015625, "y": 372.9441223144531 }, { "x": 341.1206359863281, "y": 367.7344970703125 }, { "x": 341.125, "y": 362.52490234375 }, { "x": 341.125, "y": 357.3153076171875 }, { "x": 341.125, "y": 352.1055908203125 }, { "x": 341.125, "y": 346.89599609375 }, { "x": 342.7864685058594, "y": 342.753173828125 }, { "x": 347.4071044921875, "y": 340.3620300292969 }, { "x": 351.59869384765625, "y": 337.2740478515625 }, { "x": 355.50372314453125, "y": 333.8266296386719 }, { "x": 359.7106018066406, "y": 330.76788330078125 }, { "x": 364.1054992675781, "y": 327.9706726074219 }, { "x": 368.26165771484375, "y": 324.86279296875 }, { "x": 372.4209289550781, "y": 321.7343444824219 }, { "x": 376.9449462890625, "y": 319.1673889160156 }, { "x": 380.8348693847656, "y": 315.9124755859375 }, { "x": 385.9582214355469, "y": 315.3086242675781 }, { "x": 390.91522216796875, "y": 313.8181457519531 }, { "x": 395.0859069824219, "y": 310.7161865234375 }, { "x": 399.8435974121094, "y": 308.9389343261719 }, { "x": 404.8990478515625, "y": 309.9987487792969 }, { "x": 410.00146484375, "y": 311.0302734375 }, { "x": 414.74700927734375, "y": 309.8358154296875 }, { "x": 419.81951904296875, "y": 308.7572937011719 }, { "x": 424.76904296875, "y": 307.2690124511719 }, { "x": 429.95379638671875, "y": 306.7884216308594 }, { "x": 435.1580810546875, "y": 306.5535888671875 }, { "x": 440.3614501953125, "y": 306.305419921875 }, { "x": 445.538818359375, "y": 305.7417907714844 }, { "x": 450.5892333984375, "y": 305.43463134765625 }, { "x": 452.89794921875, "y": 308.494873046875 }, { "x": 457.6282043457031, "y": 310.21209716796875 }, { "x": 461.14227294921875, "y": 306.4830017089844 }, { "x": 464.1077880859375, "y": 302.20037841796875 }, { "x": 466.74786376953125, "y": 297.71197509765625 }, { "x": 468.71417236328125, "y": 292.9434814453125 }, { "x": 472.6095275878906, "y": 289.5052185058594 }, { "x": 476.76983642578125, "y": 286.3700866699219 }, { "x": 480.8453063964844, "y": 283.1298828125 }, { "x": 485.299072265625, "y": 280.4305725097656 }, { "x": 489.91595458984375, "y": 278.017578125 }, { "x": 494.31988525390625, "y": 275.2434539794922 }, { "x": 498.29144287109375, "y": 271.8762664794922 }, { "x": 502.0709228515625, "y": 268.29115295410156 }, { "x": 506.1911315917969, "y": 265.11659240722656 }, { "x": 510.9978942871094, "y": 263.1582489013672 }, { "x": 516.1172485351562, "y": 262.2069396972656 }, { "x": 521.2005920410156, "y": 261.0884094238281 }, { "x": 526.1540222167969, "y": 259.47882080078125 }, { "x": 530.876220703125, "y": 257.3071594238281 }, { "x": 530.4845581054688, "y": 252.96463012695312 }, { "x": 533.0279541015625, "y": 248.76559448242188 }, { "x": 535.019287109375, "y": 244.04006958007812 }, { "x": 532.3154296875, "y": 239.9053192138672 }, { "x": 529.84814453125, "y": 238.52114868164062 }, { "x": 526.9483947753906, "y": 237.90203857421875 }, { "x": 526.2443542480469, "y": 233.343505859375 }, { "x": 527.5758361816406, "y": 229.2158203125 }, { "x": 530.626953125, "y": 225.78268432617188 }, { "x": 530.5303649902344, "y": 220.5755615234375 }, { "x": 531.3931579589844, "y": 216.19537353515625 }, { "x": 536.4874267578125, "y": 215.10531616210938 }, { "x": 541.576171875, "y": 213.98976135253906 }, { "x": 546.6544799804688, "y": 212.82705688476562 }, { "x": 551.7244873046875, "y": 211.62945556640625 }, { "x": 556.785400390625, "y": 210.39382934570312 }, { "x": 561.3428344726562, "y": 208.20887756347656 }, { "x": 559.8916625976562, "y": 203.3054656982422 }, { "x": 558.03125, "y": 198.4475860595703 }, { "x": 560.5387573242188, "y": 195.44061279296875 }, { "x": 565.7479858398438, "y": 195.39584350585938 }, { "x": 570.9022827148438, "y": 194.77728271484375 }, { "x": 575.9089965820312, "y": 193.52268981933594 }, { "x": 581.1115112304688, "y": 193.30906677246094 }, { "x": 586.28955078125, "y": 193.7832794189453 }, { "x": 591.3462524414062, "y": 192.61619567871094 }, { "x": 596.3208618164062, "y": 193.5008087158203 }, { "x": 601.4077758789062, "y": 194.61337280273438 }, { "x": 606.5275268554688, "y": 195.56675720214844 }, { "x": 611.7167358398438, "y": 196.01327514648438 }, { "x": 616.9144287109375, "y": 196.36473083496094 }, { "x": 622.1192016601562, "y": 196.48721313476562 }, { "x": 624.2586669921875, "y": 193.1157684326172 }, { "x": 621.6962280273438, "y": 189.54222106933594 }, { "x": 622.4849853515625, "y": 184.3960418701172 }, { "x": 626.2338256835938, "y": 181.45913696289062 }, { "x": 630.0597534179688, "y": 177.9683380126953 }, { "x": 627.5286865234375, "y": 174.10105895996094 }, { "x": 623.4093017578125, "y": 170.91331481933594 }, { "x": 619.0673828125, "y": 168.03944396972656 }, { "x": 615.2369995117188, "y": 164.5775604248047 }, { "x": 612.36865234375, "y": 160.2331085205078 }, { "x": 612.6629638671875, "y": 155.95791625976562 }, { "x": 612.1177368164062, "y": 151.29649353027344 }, { "x": 608.74609375, "y": 147.33829498291016 }, { "x": 606.239501953125, "y": 142.79508209228516 }, { "x": 606.2042846679688, "y": 137.66278076171875 }, { "x": 607.9428100585938, "y": 132.75638580322266 }, { "x": 608.0796508789062, "y": 127.6314926147461 }, { "x": 604.8250732421875, "y": 124.08219909667969 }, { "x": 605.1531372070312, "y": 120.8538589477539 }, { "x": 604.8807373046875, "y": 115.78254699707031 }, { "x": 605.5240478515625, "y": 110.61917114257812 }, { "x": 606.2026977539062, "y": 105.46393585205078 }, { "x": 604.7553100585938, "y": 100.48127746582031 }, { "x": 603.8900146484375, "y": 95.38667297363281 }, { "x": 602.556396484375, "y": 91.04936981201172 }, { "x": 603.8526000976562, "y": 87.09866333007812 }, { "x": 600.6148071289062, "y": 83.10897827148438 }, { "x": 601.28564453125, "y": 78.85005187988281 }, { "x": 601.4293823242188, "y": 75.1560287475586 }, { "x": 597.1942749023438, "y": 72.13629531860352 }, { "x": 594.3085327148438, "y": 67.95073318481445 }, { "x": 589.62841796875, "y": 65.96564865112305 }, { "x": 585.8902587890625, "y": 62.5011100769043 }, { "x": 582.1138305664062, "y": 59.23453903198242 }, { "x": 577.0909423828125, "y": 57.908512115478516 }, { "x": 572.3806762695312, "y": 59.93601608276367 }, { "x": 567.2396850585938, "y": 59.45417022705078 }, { "x": 562.8724365234375, "y": 56.679927825927734 }, { "x": 559.1315307617188, "y": 53.05897521972656 }, { "x": 556.9849853515625, "y": 48.488338470458984 }, { "x": 555.6376342773438, "y": 44.51687431335449 }, { "x": 553.03466796875, "y": 49.011680603027344 }, { "x": 549.1052856445312, "y": 52.1921272277832 }, { "x": 544.6485595703125, "y": 54.70835494995117 }, { "x": 539.469482421875, "y": 55.077423095703125 }, { "x": 534.3631591796875, "y": 54.12126159667969 }, { "x": 529.92138671875, "y": 51.49547004699707 }, { "x": 525.8369140625, "y": 53.240047454833984 }, { "x": 521.3052368164062, "y": 54.366310119628906 }, { "x": 517.3446044921875, "y": 53.05244827270508 }, { "x": 512.341796875, "y": 54.505916595458984 }, { "x": 507.3254699707031, "y": 55.91104507446289 }, { "x": 502.250244140625, "y": 56.87432098388672 }, { "x": 497.12738037109375, "y": 55.93791961669922 }, { "x": 492.2637939453125, "y": 54.453102111816406 }, { "x": 487.5025329589844, "y": 52.66554260253906 }, { "x": 483.00958251953125, "y": 50.06460380554199 }, { "x": 479.444091796875, "y": 46.297950744628906 }, { "x": 475.7507019042969, "y": 42.88015556335449 }, { "x": 471.98529052734375, "y": 39.42745780944824 }, { "x": 469.18841552734375, "y": 35.34216594696045 }, { "x": 467.080810546875, "y": 30.984667778015137 }, { "x": 466.46807861328125, "y": 25.82465696334839 }, { "x": 462.862548828125, "y": 23.93162727355957 }, { "x": 560.9686279296875, "y": 56.04293441772461 }, { "x": 562.3613891601562, "y": 59.27886962890625 }, { "x": 558.6304321289062, "y": 56.078330993652344 }, { "x": 432.71484375, "y": 63.84375 }, { "x": 431.03045654296875, "y": 68.79522323608398 }, { "x": 431.6592712402344, "y": 71.10565948486328 }, { "x": 429.7783508300781, "y": 71.50265121459961 }, { "x": 427.7601623535156, "y": 76.32770919799805 }, { "x": 425.5097961425781, "y": 81.0474853515625 }, { "x": 423.2100524902344, "y": 85.74488067626953 }, { "x": 420.64862060546875, "y": 90.29861450195312 }, { "x": 417.9202880859375, "y": 94.76072692871094 }, { "x": 415.6212463378906, "y": 99.43366241455078 }, { "x": 413.03936767578125, "y": 103.96260070800781 }, { "x": 409.75494384765625, "y": 108.0160140991211 }, { "x": 406.2218322753906, "y": 111.85203552246094 }, { "x": 402.48236083984375, "y": 114.96834564208984 }, { "x": 400.2690124511719, "y": 117.8718490600586 }, { "x": 402.8190612792969, "y": 121.59083557128906 }, { "x": 404.2362976074219, "y": 125.69953155517578 }, { "x": 408.0280456542969, "y": 128.09291076660156 }, { "x": 412.2762451171875, "y": 128.40457916259766 }, { "x": 409.7787780761719, "y": 132.93153381347656 }, { "x": 411.356201171875, "y": 137.6279067993164 }, { "x": 410.4848937988281, "y": 142.4818344116211 }, { "x": 413.22674560546875, "y": 144.6684341430664 }, { "x": 418.1711730957031, "y": 144.85485076904297 }, { "x": 422.09161376953125, "y": 147.7260284423828 }, { "x": 425.6445007324219, "y": 144.9049301147461 }, { "x": 427.5298156738281, "y": 141.8803482055664 }, { "x": 428.810302734375, "y": 137.20665740966797 }, { "x": 433.738037109375, "y": 137.20095825195312 }, { "x": 437.1573486328125, "y": 138.71449279785156 }, { "x": 439.587890625, "y": 142.38287353515625 }, { "x": 443.6223449707031, "y": 140.80844116210938 }, { "x": 448.635986328125, "y": 141.68678283691406 }, { "x": 450.701171875, "y": 138.20465850830078 }, { "x": 450.32110595703125, "y": 133.03929138183594 }, { "x": 450.95733642578125, "y": 127.86158752441406 }, { "x": 451.72088623046875, "y": 122.70155334472656 }, { "x": 450.90118408203125, "y": 117.88127899169922 }, { "x": 448.8469543457031, "y": 114.57776641845703 }, { "x": 450.60186767578125, "y": 110.26893615722656 }, { "x": 447.5216369628906, "y": 106.35272216796875 }, { "x": 445.6896057128906, "y": 102.20441436767578 }, { "x": 447.84674072265625, "y": 99.04886627197266 }, { "x": 451.8340759277344, "y": 98.43158721923828 }, { "x": 453.5727844238281, "y": 101.57418823242188 }, { "x": 457.3199157714844, "y": 103.40707397460938 }, { "x": 460.561279296875, "y": 102.52498626708984 }, { "x": 462.8500671386719, "y": 99.30039978027344 }, { "x": 464.0096130371094, "y": 95.72193145751953 }, { "x": 462.2707214355469, "y": 92.64197540283203 }, { "x": 464.9447326660156, "y": 89.82830047607422 }, { "x": 468.3233642578125, "y": 86.52552032470703 }, { "x": 471.81024169921875, "y": 83.37430572509766 }, { "x": 473.8031311035156, "y": 80.49531173706055 }, { "x": 474.3340148925781, "y": 75.60431289672852 }, { "x": 469.4122619628906, "y": 76.12995147705078 }, { "x": 464.3707580566406, "y": 75.35896301269531 }, { "x": 460.7833251953125, "y": 71.77584075927734 }, { "x": 456.37677001953125, "y": 71.2146110534668 }, { "x": 452.4440612792969, "y": 68.42763137817383 }, { "x": 448.1231994628906, "y": 66.03202438354492 }, { "x": 443.0856018066406, "y": 64.80405044555664 }, { "x": 437.9254455566406, "y": 64.09904098510742 }];
const italyData = [{ "x": 409.33331298828125, "y": 493.19813537597656 }, { "x": 405.0678253173828, "y": 494.1984405517578 }, { "x": 408.6051940917969, "y": 497.2391815185547 }, { "x": 410.2241668701172, "y": 493.6436767578125 }, { "x": 413.418212890625, "y": 493.01063537597656 }, { "x": 422.7957763671875, "y": 506.32432556152344 }, { "x": 426.2604522705078, "y": 507.22987365722656 }, { "x": 70.35408401489258, "y": 253.68515014648438 }, { "x": 73.94576072692871, "y": 251.8495864868164 }, { "x": 79.17620849609375, "y": 250.04771423339844 }, { "x": 80.1541748046875, "y": 253.39666748046875 }, { "x": 82.78570938110352, "y": 258.2102584838867 }, { "x": 80.40683174133301, "y": 262.89441680908203 }, { "x": 76.04478454589844, "y": 266.4734878540039 }, { "x": 72.52082252502441, "y": 270.4956741333008 }, { "x": 72.09038734436035, "y": 275.33961486816406 }, { "x": 75.49297904968262, "y": 278.19654083251953 }, { "x": 80.68193626403809, "y": 278.9074935913086 }, { "x": 85.37531852722168, "y": 276.5967483520508 }, { "x": 90.46258354187012, "y": 276.0520782470703 }, { "x": 95.55288124084473, "y": 273.6586380004883 }, { "x": 100.39519119262695, "y": 271.086669921875 }, { "x": 104.38650131225586, "y": 268.49996185302734 }, { "x": 106.34793281555176, "y": 264.3193893432617 }, { "x": 110.12207984924316, "y": 260.20931243896484 }, { "x": 110.87841415405273, "y": 254.63491821289062 }, { "x": 115.1752815246582, "y": 251.37337493896484 }, { "x": 120.40459060668945, "y": 248.81873321533203 }, { "x": 122.27604293823242, "y": 243.83645629882812 }, { "x": 123.9983901977539, "y": 240.08407592773438 }, { "x": 127.4408187866211, "y": 238.18934631347656 }, { "x": 131.82561111450195, "y": 234.69651794433594 }, { "x": 136.78188705444336, "y": 231.8441925048828 }, { "x": 142.23148345947266, "y": 231.73158264160156 }, { "x": 146.86734771728516, "y": 233.22771453857422 }, { "x": 151.75733947753906, "y": 234.63941192626953 }, { "x": 157.22246551513672, "y": 236.44961547851562 }, { "x": 160.31049346923828, "y": 240.53671264648438 }, { "x": 162.42631149291992, "y": 237.80477905273438 }, { "x": 167.78638076782227, "y": 239.7225112915039 }, { "x": 171.6201286315918, "y": 243.72750854492188 }, { "x": 175.07188415527344, "y": 245.4918441772461 }, { "x": 179.86013793945312, "y": 248.39161682128906 }, { "x": 183.46102142333984, "y": 252.6559829711914 }, { "x": 187.16949081420898, "y": 253.66260528564453 }, { "x": 191.52275466918945, "y": 257.2585678100586 }, { "x": 195.32070541381836, "y": 257.7013168334961 }, { "x": 196.15897369384766, "y": 256.1951599121094 }, { "x": 200.22220993041992, "y": 259.46075439453125 }, { "x": 205.81843948364258, "y": 260.52901458740234 }, { "x": 210.00691986083984, "y": 264.453857421875 }, { "x": 213.78044891357422, "y": 268.6789016723633 }, { "x": 215.97361755371094, "y": 273.8329544067383 }, { "x": 217.02324676513672, "y": 279.4182434082031 }, { "x": 218.21981811523438, "y": 284.7621307373047 }, { "x": 218.08486938476562, "y": 289.556884765625 }, { "x": 218.8949966430664, "y": 294.3663101196289 }, { "x": 219.8490447998047, "y": 299.77540588378906 }, { "x": 223.84857177734375, "y": 303.9145736694336 }, { "x": 226.4642791748047, "y": 309.02440643310547 }, { "x": 229.30509185791016, "y": 313.55308532714844 }, { "x": 230.7990264892578, "y": 319.1166076660156 }, { "x": 231.30384826660156, "y": 324.8713150024414 }, { "x": 230.85123443603516, "y": 330.6600112915039 }, { "x": 228.3388214111328, "y": 335.8041534423828 }, { "x": 230.18690490722656, "y": 340.72996520996094 }, { "x": 233.83438873291016, "y": 337.95179748535156 }, { "x": 239.50919342041016, "y": 339.07210540771484 }, { "x": 243.91004180908203, "y": 342.67122650146484 }, { "x": 242.66584014892578, "y": 348.2402877807617 }, { "x": 245.46151733398438, "y": 351.3081283569336 }, { "x": 250.80895233154297, "y": 352.80931854248047 }, { "x": 255.3062515258789, "y": 356.2522964477539 }, { "x": 258.2232131958008, "y": 360.44483947753906 }, { "x": 260.84613037109375, "y": 364.9281997680664 }, { "x": 263.8187789916992, "y": 366.9782485961914 }, { "x": 265.3170623779297, "y": 372.27734375 }, { "x": 261.6863555908203, "y": 374.88565826416016 }, { "x": 259.7025680541992, "y": 378.04395294189453 }, { "x": 264.1421661376953, "y": 380.57154083251953 }, { "x": 267.2386169433594, "y": 376.8209228515625 }, { "x": 273.01023864746094, "y": 377.4083938598633 }, { "x": 278.4867172241211, "y": 379.32159423828125 }, { "x": 283.70861053466797, "y": 381.89939880371094 }, { "x": 288.2062759399414, "y": 385.56739044189453 }, { "x": 291.7706298828125, "y": 390.09703063964844 }, { "x": 294.0622863769531, "y": 395.16358184814453 }, { "x": 296.8482131958008, "y": 399.7808609008789 }, { "x": 299.7811279296875, "y": 404.33489990234375 }, { "x": 305.14501953125, "y": 404.7493133544922 }, { "x": 309.54190826416016, "y": 408.3775939941406 }, { "x": 314.1802215576172, "y": 411.65916442871094 }, { "x": 317.2775421142578, "y": 416.4196319580078 }, { "x": 319.3291702270508, "y": 421.8326416015625 }, { "x": 322.06153869628906, "y": 425.3529357910156 }, { "x": 327.16175842285156, "y": 428.1391143798828 }, { "x": 331.0829620361328, "y": 432.45838928222656 }, { "x": 334.96862030029297, "y": 436.8000946044922 }, { "x": 338.4113006591797, "y": 441.508056640625 }, { "x": 341.43553924560547, "y": 445.11500549316406 }, { "x": 346.14659118652344, "y": 446.4364318847656 }, { "x": 350.36170196533203, "y": 446.971923828125 }, { "x": 355.61492919921875, "y": 449.1240539550781 }, { "x": 359.6851119995117, "y": 453.2724914550781 }, { "x": 362.0388870239258, "y": 458.53041076660156 }, { "x": 366.11829376220703, "y": 460.0415344238281 }, { "x": 370.5085220336914, "y": 456.3783264160156 }, { "x": 376.2240905761719, "y": 455.8390808105469 }, { "x": 381.7952346801758, "y": 457.39044189453125 }, { "x": 386.09391021728516, "y": 461.0266876220703 }, { "x": 389.8828430175781, "y": 461.80584716796875 }, { "x": 391.30005645751953, "y": 458.57215881347656 }, { "x": 396.94252014160156, "y": 458.72454833984375 }, { "x": 401.75423431396484, "y": 461.8520812988281 }, { "x": 405.3567657470703, "y": 466.38600158691406 }, { "x": 408.44007873535156, "y": 471.2370147705078 }, { "x": 410.4653625488281, "y": 476.44586181640625 }, { "x": 413.437255859375, "y": 481.4216613769531 }, { "x": 415.7041931152344, "y": 486.5388641357422 }, { "x": 416.5790252685547, "y": 490.4936218261719 }, { "x": 417.2201690673828, "y": 487.8266906738281 }, { "x": 420.98028564453125, "y": 489.96495056152344 }, { "x": 424.81739807128906, "y": 487.9691925048828 }, { "x": 430.21044921875, "y": 488.4787292480469 }, { "x": 433.72410583496094, "y": 492.9494323730469 }, { "x": 437.9543914794922, "y": 495.92279052734375 }, { "x": 434.6229705810547, "y": 500.1222686767578 }, { "x": 430.3949279785156, "y": 501.45513916015625 }, { "x": 431.5467529296875, "y": 505.6076965332031 }, { "x": 436.6272888183594, "y": 503.0306701660156 }, { "x": 441.0243835449219, "y": 503.07191467285156 }, { "x": 441.08888244628906, "y": 501.5245361328125 }, { "x": 445.6617126464844, "y": 501.05592346191406 }, { "x": 449.9426727294922, "y": 500.1980285644531 }, { "x": 454.61277770996094, "y": 499.5481872558594 }, { "x": 458.2080078125, "y": 504.0404510498047 }, { "x": 461.1014862060547, "y": 508.8659210205078 }, { "x": 463.5542755126953, "y": 514.1381683349609 }, { "x": 465.07171630859375, "y": 519.5030212402344 }, { "x": 461.8983154296875, "y": 523.7830200195312 }, { "x": 459.8849334716797, "y": 528.1165313720703 }, { "x": 463.8889923095703, "y": 529.9283599853516 }, { "x": 468.1404724121094, "y": 533.1145324707031 }, { "x": 473.15618896484375, "y": 533.7716979980469 }, { "x": 477.3733367919922, "y": 537.2280883789062 }, { "x": 480.532958984375, "y": 541.9452514648438 }, { "x": 481.07115173339844, "y": 542.7510528564453 }, { "x": 485.46266174316406, "y": 545.2916870117188 }, { "x": 489.92462158203125, "y": 542.7129211425781 }, { "x": 494.4994201660156, "y": 539.5721130371094 }, { "x": 498.8951873779297, "y": 541.9131622314453 }, { "x": 502.6429901123047, "y": 545.1624145507812 }, { "x": 505.2939910888672, "y": 549.9062652587891 }, { "x": 506.4877014160156, "y": 555.0839385986328 }, { "x": 507.60107421875, "y": 560.2245330810547 }, { "x": 508.09559631347656, "y": 565.9997711181641 }, { "x": 510.3351593017578, "y": 571.0473480224609 }, { "x": 512.5076141357422, "y": 576.0896606445312 }, { "x": 516.2831573486328, "y": 580.5030059814453 }, { "x": 518.7158966064453, "y": 585.6701507568359 }, { "x": 520.0685424804688, "y": 591.3267822265625 }, { "x": 520.6972808837891, "y": 597.1127777099609 }, { "x": 520.9599456787109, "y": 602.9367218017578 }, { "x": 522.5022888183594, "y": 608.4599151611328 }, { "x": 525.2772521972656, "y": 613.3058013916016 }, { "x": 528.8093566894531, "y": 617.5421295166016 }, { "x": 529.4183197021484, "y": 623.0331878662109 }, { "x": 527.6447143554688, "y": 628.5037384033203 }, { "x": 523.2277984619141, "y": 631.7913970947266 }, { "x": 517.8269653320312, "y": 630.9464111328125 }, { "x": 512.8631591796875, "y": 633.7390441894531 }, { "x": 508.84413146972656, "y": 637.3920440673828 }, { "x": 512.8983612060547, "y": 641.4474639892578 }, { "x": 513.1479797363281, "y": 646.7209930419922 }, { "x": 510.6578369140625, "y": 651.9983215332031 }, { "x": 508.9494171142578, "y": 657.2813720703125 }, { "x": 505.4910125732422, "y": 661.3938293457031 }, { "x": 500.1421813964844, "y": 663.3542022705078 }, { "x": 499.00440979003906, "y": 667.9036407470703 }, { "x": 498.5600128173828, "y": 672.8307342529297 }, { "x": 499.103515625, "y": 677.9420776367188 }, { "x": 501.6230010986328, "y": 682.9230499267578 }, { "x": 506.61949157714844, "y": 685.3421936035156 }, { "x": 511.8948516845703, "y": 684.5840911865234 }, { "x": 517.5575714111328, "y": 685.2009735107422 }, { "x": 522.7667846679688, "y": 683.438720703125 }, { "x": 525.3194122314453, "y": 678.2506561279297 }, { "x": 526.5904846191406, "y": 672.5845031738281 }, { "x": 529.2929382324219, "y": 667.6166687011719 }, { "x": 532.9099578857422, "y": 663.1555786132812 }, { "x": 537.0780792236328, "y": 659.4394989013672 }, { "x": 542.1595764160156, "y": 656.7548522949219 }, { "x": 546.4535827636719, "y": 652.8712768554688 }, { "x": 548.813720703125, "y": 647.8033294677734 }, { "x": 548.0841827392578, "y": 642.0382537841797 }, { "x": 547.4560852050781, "y": 636.3238525390625 }, { "x": 546.8144836425781, "y": 630.7285614013672 }, { "x": 549.7531433105469, "y": 626.0284271240234 }, { "x": 554.0609283447266, "y": 622.7803649902344 }, { "x": 558.8054656982422, "y": 619.5516662597656 }, { "x": 564.2309265136719, "y": 617.4142761230469 }, { "x": 569.7042236328125, "y": 616.9770660400391 }, { "x": 573.5914611816406, "y": 618.0887451171875 }, { "x": 577.2650604248047, "y": 616.9615936279297 }, { "x": 579.1978759765625, "y": 612.9718627929688 }, { "x": 579.7258605957031, "y": 609.8542633056641 }, { "x": 577.0921630859375, "y": 605.6224212646484 }, { "x": 577.7490997314453, "y": 600.723388671875 }, { "x": 576.7438049316406, "y": 595.7572021484375 }, { "x": 576.5890350341797, "y": 590.2056274414062 }, { "x": 578.2901306152344, "y": 584.8593139648438 }, { "x": 573.5736999511719, "y": 582.0685119628906 }, { "x": 569.3673553466797, "y": 578.5798950195312 }, { "x": 564.3816680908203, "y": 575.8445739746094 }, { "x": 560.4657287597656, "y": 571.7144470214844 }, { "x": 555.4554595947266, "y": 570.6408081054688 }, { "x": 549.9172973632812, "y": 570.2452545166016 }, { "x": 545.3608551025391, "y": 566.8642120361328 }, { "x": 544.158447265625, "y": 562.2844696044922 }, { "x": 544.2678070068359, "y": 556.9682769775391 }, { "x": 547.2605743408203, "y": 551.9765014648438 }, { "x": 551.0048522949219, "y": 547.5480041503906 }, { "x": 549.6803131103516, "y": 542.1371917724609 }, { "x": 551.6143188476562, "y": 536.7713775634766 }, { "x": 554.7261505126953, "y": 532.5057983398438 }, { "x": 556.6840515136719, "y": 527.9351654052734 }, { "x": 560.0046691894531, "y": 523.3614654541016 }, { "x": 563.2183074951172, "y": 518.700927734375 }, { "x": 566.6917724609375, "y": 514.1038360595703 }, { "x": 570.9013671875, "y": 510.4244689941406 }, { "x": 576.4508819580078, "y": 509.0585021972656 }, { "x": 580.6448669433594, "y": 512.1970672607422 }, { "x": 582.6433715820312, "y": 515.3965148925781 }, { "x": 584.6112060546875, "y": 518.2318115234375 }, { "x": 589.334228515625, "y": 520.8245391845703 }, { "x": 594.2320709228516, "y": 523.3533172607422 }, { "x": 599.5832366943359, "y": 525.1279754638672 }, { "x": 605.1701507568359, "y": 524.3245086669922 }, { "x": 610.8705902099609, "y": 524.8465881347656 }, { "x": 615.8362731933594, "y": 525.8177337646484 }, { "x": 618.2878265380859, "y": 530.0617980957031 }, { "x": 620.8170166015625, "y": 534.8299102783203 }, { "x": 622.7230987548828, "y": 539.7364501953125 }, { "x": 623.4573974609375, "y": 544.3220062255859 }, { "x": 624.628173828125, "y": 548.7413482666016 }, { "x": 628.9601745605469, "y": 552.53955078125 }, { "x": 633.8474884033203, "y": 555.4685516357422 }, { "x": 639.0058898925781, "y": 557.4938354492188 }, { "x": 643.1031951904297, "y": 556.5219116210938 }, { "x": 643.6015625, "y": 550.7080841064453 }, { "x": 645.0346832275391, "y": 545.1780700683594 }, { "x": 648.1075134277344, "y": 540.9005889892578 }, { "x": 649.6470184326172, "y": 536.2086486816406 }, { "x": 647.8589019775391, "y": 531.7198638916016 }, { "x": 645.8965606689453, "y": 526.3826599121094 }, { "x": 642.7404632568359, "y": 521.6929626464844 }, { "x": 638.3439636230469, "y": 517.9023132324219 }, { "x": 634.8320922851562, "y": 513.2959289550781 }, { "x": 629.9361724853516, "y": 510.59617614746094 }, { "x": 625.8934326171875, "y": 506.5142517089844 }, { "x": 623.9425811767578, "y": 502.5326232910156 }, { "x": 620.7801666259766, "y": 499.29261779785156 }, { "x": 616.7859497070312, "y": 497.97869873046875 }, { "x": 612.0645751953125, "y": 495.2550048828125 }, { "x": 607.2537078857422, "y": 492.18212890625 }, { "x": 601.7683258056641, "y": 490.25059509277344 }, { "x": 596.3378295898438, "y": 488.23858642578125 }, { "x": 592.1634826660156, "y": 484.209716796875 }, { "x": 587.7252807617188, "y": 480.7861022949219 }, { "x": 583.6275177001953, "y": 477.22666931152344 }, { "x": 579.0950622558594, "y": 473.76171875 }, { "x": 574.1563873291016, "y": 470.82525634765625 }, { "x": 568.8590087890625, "y": 468.5557556152344 }, { "x": 563.7224426269531, "y": 466.27027893066406 }, { "x": 558.320556640625, "y": 464.7700958251953 }, { "x": 552.9064483642578, "y": 462.78587341308594 }, { "x": 547.7389373779297, "y": 460.4140625 }, { "x": 542.756591796875, "y": 457.9519805908203 }, { "x": 537.7510833740234, "y": 455.8540954589844 }, { "x": 533.0070037841797, "y": 453.69720458984375 }, { "x": 527.9630432128906, "y": 450.87738037109375 }, { "x": 522.7405090332031, "y": 448.3689270019531 }, { "x": 517.6966857910156, "y": 445.4605255126953 }, { "x": 513.7191314697266, "y": 441.3777313232422 }, { "x": 512.1836090087891, "y": 435.7856903076172 }, { "x": 514.8591003417969, "y": 431.21038818359375 }, { "x": 519.6426849365234, "y": 428.002197265625 }, { "x": 523.9123382568359, "y": 424.3828887939453 }, { "x": 528.0057525634766, "y": 420.89971923828125 }, { "x": 527.0324096679688, "y": 415.8942108154297 }, { "x": 525.5640869140625, "y": 412.27728271484375 }, { "x": 520.9116058349609, "y": 409.3800506591797 }, { "x": 515.1818237304688, "y": 409.6484832763672 }, { "x": 509.63519287109375, "y": 411.1455993652344 }, { "x": 503.9108581542969, "y": 411.761474609375 }, { "x": 498.55726623535156, "y": 410.85816955566406 }, { "x": 492.9452209472656, "y": 412.1946563720703 }, { "x": 487.16783142089844, "y": 412.59913635253906 }, { "x": 481.7568359375, "y": 411.5808868408203 }, { "x": 475.9420928955078, "y": 411.2268524169922 }, { "x": 470.21620178222656, "y": 410.52935791015625 }, { "x": 466.20106506347656, "y": 406.62413024902344 }, { "x": 460.95440673828125, "y": 404.28143310546875 }, { "x": 455.876708984375, "y": 401.7041320800781 }, { "x": 451.1325378417969, "y": 398.69117736816406 }, { "x": 449.68055725097656, "y": 393.60416412353516 }, { "x": 444.2891082763672, "y": 391.4064636230469 }, { "x": 439.7550506591797, "y": 387.8941345214844 }, { "x": 436.1669158935547, "y": 383.602783203125 }, { "x": 432.6245574951172, "y": 379.24329376220703 }, { "x": 427.8466033935547, "y": 376.1911087036133 }, { "x": 424.05824279785156, "y": 371.85709381103516 }, { "x": 419.9851531982422, "y": 367.8520965576172 }, { "x": 416.2243957519531, "y": 363.5029525756836 }, { "x": 413.927978515625, "y": 358.3788146972656 }, { "x": 411.64222717285156, "y": 353.0443801879883 }, { "x": 409.48350524902344, "y": 347.6514434814453 }, { "x": 408.16871643066406, "y": 341.9972839355469 }, { "x": 406.38641357421875, "y": 336.5021743774414 }, { "x": 404.8218688964844, "y": 330.9024200439453 }, { "x": 403.5377731323242, "y": 325.41497802734375 }, { "x": 401.23753356933594, "y": 320.13488006591797 }, { "x": 399.4425735473633, "y": 314.79955291748047 }, { "x": 397.34354400634766, "y": 309.41996002197266 }, { "x": 395.14234161376953, "y": 304.0401611328125 }, { "x": 393.2572250366211, "y": 298.77906036376953 }, { "x": 391.57167053222656, "y": 293.81651306152344 }, { "x": 387.4927673339844, "y": 290.0400085449219 }, { "x": 383.4478530883789, "y": 290.5808334350586 }, { "x": 378.38523864746094, "y": 287.7803268432617 }, { "x": 373.7951965332031, "y": 284.31478118896484 }, { "x": 369.41295623779297, "y": 280.47833251953125 }, { "x": 365.1680450439453, "y": 276.5615921020508 }, { "x": 360.58587646484375, "y": 272.98558807373047 }, { "x": 356.28795623779297, "y": 269.30615234375 }, { "x": 351.43355560302734, "y": 266.45320892333984 }, { "x": 345.89717864990234, "y": 264.77232360839844 }, { "x": 341.3076629638672, "y": 261.2261428833008 }, { "x": 337.6274719238281, "y": 257.04383087158203 }, { "x": 333.83927154541016, "y": 252.83245086669922 }, { "x": 330.1755142211914, "y": 248.66840362548828 }, { "x": 327.22481536865234, "y": 243.71869659423828 }, { "x": 326.14854431152344, "y": 238.01537322998047 }, { "x": 325.15892791748047, "y": 233.7386932373047 }, { "x": 323.47106170654297, "y": 228.29794311523438 }, { "x": 322.34285736083984, "y": 222.68848419189453 }, { "x": 322.3767547607422, "y": 217.27181243896484 }, { "x": 320.91431427001953, "y": 212.17514038085938 }, { "x": 321.6383361816406, "y": 206.58210372924805 }, { "x": 322.8095245361328, "y": 202.4580535888672 }, { "x": 325.8904113769531, "y": 203.17011642456055 }, { "x": 325.40394592285156, "y": 200.4233512878418 }, { "x": 327.704345703125, "y": 205.29217147827148 }, { "x": 329.24114990234375, "y": 203.91683197021484 }, { "x": 329.8431091308594, "y": 200.5536880493164 }, { "x": 330.99932861328125, "y": 197.4966049194336 }, { "x": 331.15050506591797, "y": 202.45307540893555 }, { "x": 334.2039031982422, "y": 198.0997543334961 }, { "x": 335.2046890258789, "y": 194.12614822387695 }, { "x": 333.4589614868164, "y": 190.21622848510742 }, { "x": 330.8079833984375, "y": 187.76248931884766 }, { "x": 326.8638458251953, "y": 189.15825653076172 }, { "x": 327.6696014404297, "y": 186.12693405151367 }, { "x": 325.2044982910156, "y": 181.57731246948242 }, { "x": 325.21434020996094, "y": 176.6078872680664 }, { "x": 323.1131134033203, "y": 171.94903182983398 }, { "x": 324.28382110595703, "y": 166.41239166259766 }, { "x": 326.5383758544922, "y": 161.03389739990234 }, { "x": 327.98486328125, "y": 157.20810317993164 }, { "x": 324.9610595703125, "y": 162.15180206298828 }, { "x": 323.27699279785156, "y": 167.71620559692383 }, { "x": 323.15216064453125, "y": 173.33081436157227 }, { "x": 322.3810119628906, "y": 175.24093627929688 }, { "x": 319.96278381347656, "y": 172.90650177001953 }, { "x": 318.9779510498047, "y": 169.68669509887695 }, { "x": 316.7604751586914, "y": 166.83432388305664 }, { "x": 316.0276184082031, "y": 161.40271759033203 }, { "x": 319.6179962158203, "y": 158.3757209777832 }, { "x": 322.71875, "y": 155.3167839050293 }, { "x": 326.90287017822266, "y": 158.34851837158203 }, { "x": 324.15452575683594, "y": 155.49833297729492 }, { "x": 326.55059814453125, "y": 152.73924255371094 }, { "x": 329.09803009033203, "y": 151.72847747802734 }, { "x": 333.00609588623047, "y": 148.69001388549805 }, { "x": 335.1570129394531, "y": 147.2505989074707 }, { "x": 337.8871383666992, "y": 149.91640853881836 }, { "x": 332.8277282714844, "y": 152.52210235595703 }, { "x": 328.2619934082031, "y": 154.7165870666504 }, { "x": 329.70223236083984, "y": 157.56189727783203 }, { "x": 334.61598205566406, "y": 155.65633010864258 }, { "x": 339.58951568603516, "y": 152.76690292358398 }, { "x": 344.86297607421875, "y": 150.93297576904297 }, { "x": 349.6335144042969, "y": 148.1536521911621 }, { "x": 354.54335021972656, "y": 145.11180114746094 }, { "x": 358.6168746948242, "y": 142.05071258544922 }, { "x": 363.61988830566406, "y": 142.63729095458984 }, { "x": 367.39733123779297, "y": 139.42336654663086 }, { "x": 367.3093719482422, "y": 138.0700912475586 }, { "x": 364.98631286621094, "y": 135.35029983520508 }, { "x": 368.8059616088867, "y": 131.61714553833008 }, { "x": 372.7121047973633, "y": 133.57542419433594 }, { "x": 378.3388900756836, "y": 134.50244140625 }, { "x": 380.2387924194336, "y": 138.44556045532227 }, { "x": 385.0408706665039, "y": 138.07456588745117 }, { "x": 389.8830032348633, "y": 135.9391326904297 }, { "x": 388.5452575683594, "y": 131.80110931396484 }, { "x": 393.6154251098633, "y": 132.93295288085938 }, { "x": 397.48707580566406, "y": 137.24664306640625 }, { "x": 399.68981170654297, "y": 141.49438095092773 }, { "x": 401.7316207885742, "y": 144.50298690795898 }, { "x": 397.97635650634766, "y": 144.87849044799805 }, { "x": 403.5206527709961, "y": 146.50913619995117 }, { "x": 407.70042419433594, "y": 143.15575408935547 }, { "x": 404.81976318359375, "y": 138.98875427246094 }, { "x": 402.0451431274414, "y": 134.05688858032227 }, { "x": 397.2990493774414, "y": 131.3380584716797 }, { "x": 392.09395599365234, "y": 129.30230331420898 }, { "x": 391.64026641845703, "y": 123.81609725952148 }, { "x": 394.1405487060547, "y": 119.21377563476562 }, { "x": 391.8175811767578, "y": 115.98083114624023 }, { "x": 386.84320068359375, "y": 115.6836109161377 }, { "x": 386.90877532958984, "y": 111.43408203125 }, { "x": 389.78131103515625, "y": 108.16979789733887 }, { "x": 394.16883850097656, "y": 104.4702262878418 }, { "x": 393.79642486572266, "y": 100.42179870605469 }, { "x": 388.7435836791992, "y": 98.44447708129883 }, { "x": 384.0191192626953, "y": 97.44326782226562 }, { "x": 382.0537796020508, "y": 96.21944236755371 }, { "x": 381.67967224121094, "y": 91.33949851989746 }, { "x": 384.58734130859375, "y": 87.26652336120605 }, { "x": 389.1421356201172, "y": 84.33810615539551 }, { "x": 393.0388946533203, "y": 81.36647033691406 }, { "x": 397.36082458496094, "y": 80.19624900817871 }, { "x": 397.9901123046875, "y": 74.97199249267578 }, { "x": 392.5600280761719, "y": 73.24250984191895 }, { "x": 387.71446228027344, "y": 72.58780479431152 }, { "x": 382.5624694824219, "y": 71.97429847717285 }, { "x": 377.5782928466797, "y": 71.82560539245605 }, { "x": 372.6670150756836, "y": 72.44423294067383 }, { "x": 367.6791534423828, "y": 69.65485000610352 }, { "x": 362.0390930175781, "y": 69.72828674316406 }, { "x": 356.4907684326172, "y": 68.3786392211914 }, { "x": 351.36962890625, "y": 67.95330238342285 }, { "x": 346.8711624145508, "y": 65.8693904876709 }, { "x": 342.2033004760742, "y": 64.98111152648926 }, { "x": 336.8412170410156, "y": 64.8855504989624 }, { "x": 332.1399383544922, "y": 62.97788619995117 }, { "x": 327.7384948730469, "y": 59.52774143218994 }, { "x": 324.8007278442383, "y": 55.02225971221924 }, { "x": 323.4248046875, "y": 50.848167419433594 }, { "x": 320.8345260620117, "y": 46.9150333404541 }, { "x": 317.4632568359375, "y": 45.94070053100586 }, { "x": 315.8354721069336, "y": 42.04177141189575 }, { "x": 315.51123809814453, "y": 37.086669921875 }, { "x": 319.8997497558594, "y": 34.22226810455322 }, { "x": 318.4966354370117, "y": 31.402682065963745 }, { "x": 313.0127868652344, "y": 33.1091513633728 }, { "x": 307.53839111328125, "y": 34.48745632171631 }, { "x": 302.5237274169922, "y": 37.19028043746948 }, { "x": 297.4007568359375, "y": 39.592308044433594 }, { "x": 292.5743713378906, "y": 39.71851205825806 }, { "x": 288.43387603759766, "y": 37.93913745880127 }, { "x": 283.775146484375, "y": 40.220391273498535 }, { "x": 279.58773040771484, "y": 38.054598331451416 }, { "x": 275.4507141113281, "y": 40.61810922622681 }, { "x": 270.07080078125, "y": 40.190861225128174 }, { "x": 264.5720748901367, "y": 41.379666328430176 }, { "x": 260.96263122558594, "y": 44.050411224365234 }, { "x": 259.1865539550781, "y": 49.31567192077637 }, { "x": 256.89469146728516, "y": 54.20310592651367 }, { "x": 253.42481994628906, "y": 56.03443241119385 }, { "x": 247.77249145507812, "y": 55.78766345977783 }, { "x": 242.41615295410156, "y": 54.64963436126709 }, { "x": 242.10313415527344, "y": 50.811469078063965 }, { "x": 237.02674102783203, "y": 48.800533294677734 }, { "x": 232.54898834228516, "y": 51.16760063171387 }, { "x": 227.7049560546875, "y": 49.44156551361084 }, { "x": 225.37496185302734, "y": 54.12683391571045 }, { "x": 224.24490356445312, "y": 58.764729499816895 }, { "x": 223.7805938720703, "y": 62.892404556274414 }, { "x": 225.15631103515625, "y": 66.37610340118408 }, { "x": 228.37422943115234, "y": 69.87029647827148 }, { "x": 225.7406005859375, "y": 72.97077560424805 }, { "x": 221.67247772216797, "y": 73.05962181091309 }, { "x": 217.10296630859375, "y": 71.24851417541504 }, { "x": 215.7023468017578, "y": 66.58401393890381 }, { "x": 211.3500099182129, "y": 68.5727481842041 }, { "x": 207.73281860351562, "y": 71.59158515930176 }, { "x": 205.82142639160156, "y": 76.28033256530762 }, { "x": 205.79446411132812, "y": 81.54749298095703 }, { "x": 210.77857208251953, "y": 82.64138221740723 }, { "x": 209.47086715698242, "y": 87.32596969604492 }, { "x": 210.32000732421875, "y": 92.38839530944824 }, { "x": 211.12305068969727, "y": 96.94577026367188 }, { "x": 205.79266738891602, "y": 98.07081604003906 }, { "x": 204.46437454223633, "y": 93.73294448852539 }, { "x": 202.96387100219727, "y": 89.45525169372559 }, { "x": 198.557861328125, "y": 86.36171913146973 }, { "x": 193.38776397705078, "y": 88.33151054382324 }, { "x": 188.57877349853516, "y": 89.27880668640137 }, { "x": 185.8225326538086, "y": 92.18233871459961 }, { "x": 181.17353057861328, "y": 92.36800765991211 }, { "x": 177.4758071899414, "y": 88.56031227111816 }, { "x": 174.56562042236328, "y": 84.00143814086914 }, { "x": 175.28202056884766, "y": 78.4271011352539 }, { "x": 172.00365447998047, "y": 78.9661636352539 }, { "x": 167.94648361206055, "y": 76.71404647827148 }, { "x": 164.74623489379883, "y": 79.95989990234375 }, { "x": 164.8397560119629, "y": 83.83767890930176 }, { "x": 165.71615600585938, "y": 89.42104530334473 }, { "x": 164.02874755859375, "y": 94.80636024475098 }, { "x": 161.33098602294922, "y": 99.63898849487305 }, { "x": 157.51494216918945, "y": 103.94145202636719 }, { "x": 155.30493927001953, "y": 107.87097549438477 }, { "x": 151.44830322265625, "y": 111.60887336730957 }, { "x": 150.52544021606445, "y": 116.14517974853516 }, { "x": 153.03428268432617, "y": 120.30535888671875 }, { "x": 153.3462257385254, "y": 124.0632553100586 }, { "x": 150.69364547729492, "y": 127.67948532104492 }, { "x": 146.94327926635742, "y": 126.0455436706543 }, { "x": 146.75750732421875, "y": 122.8998031616211 }, { "x": 144.55756378173828, "y": 117.72584915161133 }, { "x": 140.02839279174805, "y": 114.52970886230469 }, { "x": 142.30706024169922, "y": 110.62085342407227 }, { "x": 139.97853088378906, "y": 107.56758117675781 }, { "x": 135.15402221679688, "y": 107.19504165649414 }, { "x": 129.86164474487305, "y": 105.30583953857422 }, { "x": 126.80033874511719, "y": 100.70023918151855 }, { "x": 123.44645309448242, "y": 97.01809692382812 }, { "x": 120.39567565917969, "y": 92.35696411132812 }, { "x": 122.28472900390625, "y": 87.33216094970703 }, { "x": 122.3830795288086, "y": 81.84295082092285 }, { "x": 117.86416244506836, "y": 80.2402286529541 }, { "x": 113.2402172088623, "y": 83.4683837890625 }, { "x": 112.55291366577148, "y": 87.6036319732666 }, { "x": 108.68975448608398, "y": 91.8234920501709 }, { "x": 103.74075698852539, "y": 94.00587463378906 }, { "x": 104.91945838928223, "y": 97.58187294006348 }, { "x": 105.94835090637207, "y": 102.94997596740723 }, { "x": 102.06460952758789, "y": 106.7809829711914 }, { "x": 99.04864501953125, "y": 110.99081230163574 }, { "x": 95.79340744018555, "y": 115.15533447265625 }, { "x": 91.43718528747559, "y": 117.09779739379883 }, { "x": 88.70393562316895, "y": 119.58385467529297 }, { "x": 83.72243690490723, "y": 119.73587799072266 }, { "x": 79.99794006347656, "y": 116.16210556030273 }, { "x": 74.65188980102539, "y": 115.62529182434082 }, { "x": 70.36263275146484, "y": 118.56780242919922 }, { "x": 65.7391996383667, "y": 121.68809127807617 }, { "x": 61.43594932556152, "y": 120.63124084472656 }, { "x": 56.517144203186035, "y": 123.09062194824219 }, { "x": 52.76649475097656, "y": 123.68013000488281 }, { "x": 50.28528690338135, "y": 122.88316345214844 }, { "x": 46.68329906463623, "y": 120.65252685546875 }, { "x": 43.971452713012695, "y": 125.00890350341797 }, { "x": 39.01666021347046, "y": 127.73146438598633 }, { "x": 35.73998498916626, "y": 130.45267486572266 }, { "x": 36.0073447227478, "y": 136.01681518554688 }, { "x": 40.317201137542725, "y": 139.5898094177246 }, { "x": 44.58435821533203, "y": 140.70987701416016 }, { "x": 45.20456790924072, "y": 144.30749893188477 }, { "x": 45.378844261169434, "y": 149.51757049560547 }, { "x": 48.51186466217041, "y": 152.5094108581543 }, { "x": 51.64787197113037, "y": 156.69727325439453 }, { "x": 54.664671897888184, "y": 160.50568389892578 }, { "x": 51.15025997161865, "y": 164.60670852661133 }, { "x": 52.41841983795166, "y": 169.94309997558594 }, { "x": 48.549049377441406, "y": 172.7085304260254 }, { "x": 44.04375076293945, "y": 174.74587631225586 }, { "x": 39.83308744430542, "y": 177.69245529174805 }, { "x": 35.66197347640991, "y": 178.16664123535156 }, { "x": 30.69288444519043, "y": 178.84934997558594 }, { "x": 26.180269479751587, "y": 181.47164916992188 }, { "x": 28.024482011795044, "y": 186.51568984985352 }, { "x": 32.05424928665161, "y": 188.7986831665039 }, { "x": 32.71278524398804, "y": 194.3258934020996 }, { "x": 35.86770677566528, "y": 198.7618179321289 }, { "x": 40.97335386276245, "y": 201.02460098266602 }, { "x": 45.916842460632324, "y": 201.0747833251953 }, { "x": 46.417887687683105, "y": 205.83987426757812 }, { "x": 48.66209697723389, "y": 210.56906509399414 }, { "x": 46.23739719390869, "y": 212.27674102783203 }, { "x": 43.17471218109131, "y": 216.3249053955078 }, { "x": 42.4101037979126, "y": 220.27320861816406 }, { "x": 38.53969621658325, "y": 224.04378509521484 }, { "x": 40.6614294052124, "y": 228.98113250732422 }, { "x": 41.10359334945679, "y": 231.73268127441406 }, { "x": 40.91624641418457, "y": 236.69298553466797 }, { "x": 43.807042598724365, "y": 241.1968536376953 }, { "x": 45.61129093170166, "y": 246.02621459960938 }, { "x": 50.63648319244385, "y": 247.13230895996094 }, { "x": 55.19474220275879, "y": 247.98844146728516 }, { "x": 58.635416984558105, "y": 251.85743713378906 }, { "x": 62.94456672668457, "y": 252.74506378173828 }, { "x": 65.79692935943604, "y": 253.7081527709961 }, { "x": 224.52741241455078, "y": 344.61988067626953 }, { "x": 222.0693130493164, "y": 349.30005645751953 }, { "x": 218.39610290527344, "y": 347.66121673583984 }, { "x": 215.92154693603516, "y": 349.502685546875 }, { "x": 211.2408790588379, "y": 348.37750244140625 }, { "x": 208.85915756225586, "y": 352.504150390625 }, { "x": 213.42080688476562, "y": 353.9253463745117 }, { "x": 218.00210571289062, "y": 353.0882568359375 }, { "x": 220.8388671875, "y": 351.7204132080078 }, { "x": 224.41473388671875, "y": 355.63436126708984 }, { "x": 224.30269622802734, "y": 352.52012634277344 }, { "x": 225.53751373291016, "y": 349.22388458251953 }, { "x": 207.26337051391602, "y": 361.97342681884766 }, { "x": 206.22127151489258, "y": 365.58499908447266 }, { "x": 249.21591186523438, "y": 378.7007522583008 }, { "x": 250.23917388916016, "y": 383.7898483276367 }, { "x": 219.51817321777344, "y": 380.7581253051758 }, { "x": 218.70030975341797, "y": 383.83397674560547 }, { "x": 359.24071502685547, "y": 480.1382751464844 }, { "x": 358.5132369995117, "y": 484.43218994140625 }, { "x": 372.7478332519531, "y": 135.93058395385742 }, { "x": 376.77313232421875, "y": 136.55673599243164 }, { "x": 326.1961975097656, "y": 680.1290435791016 }, { "x": 325.9227752685547, "y": 678.8262023925781 }, { "x": 322.25684356689453, "y": 682.6850128173828 }, { "x": 324.6916198730469, "y": 684.1846466064453 }, { "x": 326.78893280029297, "y": 684.2914886474609 }, { "x": 310.05274963378906, "y": 681.6469879150391 }, { "x": 311.8756790161133, "y": 680.9820861816406 }, { "x": 305.64432525634766, "y": 755.6319885253906 }, { "x": 304.86827850341797, "y": 759.8578338623047 }, { "x": 309.1762466430664, "y": 762.8142547607422 }, { "x": 311.5383529663086, "y": 758.7773284912109 }, { "x": 337.38904571533203, "y": 841.1331787109375 }, { "x": 337.85404205322266, "y": 841.7802734375 }, { "x": 340.5818328857422, "y": 841.5660400390625 }, { "x": 353.40047454833984, "y": 820.493896484375 }, { "x": 474.9069061279297, "y": 626.7384643554688 }, { "x": 477.8035888671875, "y": 625.2596130371094 }, { "x": 458.26788330078125, "y": 640.1614227294922 }, { "x": 454.6026153564453, "y": 641.6092376708984 }, { "x": 458.35215759277344, "y": 643.4185943603516 }, { "x": 460.41355895996094, "y": 645.1719207763672 }, { "x": 462.00360107421875, "y": 649.5180206298828 }, { "x": 463.38499450683594, "y": 647.1203002929688 }, { "x": 462.4589385986328, "y": 644.5620880126953 }, { "x": 462.09954833984375, "y": 651.5162963867188 }, { "x": 465.49913024902344, "y": 655.21630859375 }, { "x": 368.9664306640625, "y": 630.9734191894531 }, { "x": 370.9614791870117, "y": 632.3271179199219 }, { "x": 475.00775146484375, "y": 726.6826934814453 }, { "x": 470.6825714111328, "y": 724.2421722412109 }, { "x": 470.2831726074219, "y": 718.4376373291016 }, { "x": 470.67771911621094, "y": 712.6239929199219 }, { "x": 474.2663116455078, "y": 708.2063903808594 }, { "x": 475.71156311035156, "y": 702.6819610595703 }, { "x": 476.61463928222656, "y": 697.5853118896484 }, { "x": 478.9102783203125, "y": 693.0124816894531 }, { "x": 481.7949676513672, "y": 688.5377044677734 }, { "x": 484.61863708496094, "y": 683.7711486816406 }, { "x": 487.5580291748047, "y": 678.881591796875 }, { "x": 491.0427551269531, "y": 674.3489074707031 }, { "x": 494.03460693359375, "y": 669.3944396972656 }, { "x": 495.93011474609375, "y": 664.0276641845703 }, { "x": 498.92420959472656, "y": 660.9573974609375 }, { "x": 494.1025390625, "y": 658.5645751953125 }, { "x": 489.3905944824219, "y": 661.6531066894531 }, { "x": 484.2847900390625, "y": 664.3992767333984 }, { "x": 478.5773468017578, "y": 664.9528961181641 }, { "x": 476.7459716796875, "y": 661.3347778320312 }, { "x": 476.72747802734375, "y": 665.9974212646484 }, { "x": 472.7922668457031, "y": 670.1955261230469 }, { "x": 467.9714660644531, "y": 669.3884887695312 }, { "x": 462.6758270263672, "y": 667.8818511962891 }, { "x": 457.7337188720703, "y": 667.5113830566406 }, { "x": 452.3881378173828, "y": 668.0639953613281 }, { "x": 448.4738464355469, "y": 671.8074035644531 }, { "x": 443.9269714355469, "y": 674.2471008300781 }, { "x": 439.1735076904297, "y": 676.8729248046875 }, { "x": 433.8803405761719, "y": 677.3151702880859 }, { "x": 428.3328399658203, "y": 678.7174835205078 }, { "x": 422.6614685058594, "y": 678.2750549316406 }, { "x": 418.7033233642578, "y": 678.0791320800781 }, { "x": 414.09423828125, "y": 675.9369354248047 }, { "x": 408.6617736816406, "y": 677.6961212158203 }, { "x": 403.79503631591797, "y": 680.6355133056641 }, { "x": 398.09029388427734, "y": 680.4934234619141 }, { "x": 392.7982482910156, "y": 678.5142364501953 }, { "x": 389.0110092163086, "y": 674.5912017822266 }, { "x": 386.9916076660156, "y": 671.8604583740234 }, { "x": 381.61400604248047, "y": 672.3097076416016 }, { "x": 379.7974624633789, "y": 667.2247772216797 }, { "x": 375.6346969604492, "y": 664.2457885742188 }, { "x": 372.0736846923828, "y": 667.0377807617188 }, { "x": 366.5688705444336, "y": 666.452392578125 }, { "x": 363.5626678466797, "y": 670.2684478759766 }, { "x": 362.63599395751953, "y": 674.6304779052734 }, { "x": 357.62290954589844, "y": 677.204345703125 }, { "x": 352.6517333984375, "y": 675.3815307617188 }, { "x": 349.5613708496094, "y": 670.9585266113281 }, { "x": 347.4028549194336, "y": 667.6907806396484 }, { "x": 346.3404541015625, "y": 668.7736663818359 }, { "x": 343.63907623291016, "y": 671.6873321533203 }, { "x": 339.90674591064453, "y": 675.0098266601562 }, { "x": 335.29315185546875, "y": 677.4662780761719 }, { "x": 333.9223098754883, "y": 681.0305633544922 }, { "x": 330.85936737060547, "y": 685.5954284667969 }, { "x": 332.54002380371094, "y": 690.0981750488281 }, { "x": 330.7057418823242, "y": 694.1468200683594 }, { "x": 332.7606658935547, "y": 698.6645355224609 }, { "x": 337.0508041381836, "y": 701.9729766845703 }, { "x": 340.8011474609375, "y": 705.5149688720703 }, { "x": 344.81797790527344, "y": 708.5585479736328 }, { "x": 350.1595764160156, "y": 707.0731964111328 }, { "x": 355.66184997558594, "y": 707.2616119384766 }, { "x": 360.0251159667969, "y": 710.1480407714844 }, { "x": 364.33557891845703, "y": 711.6315155029297 }, { "x": 369.6145782470703, "y": 713.1050567626953 }, { "x": 372.97259521484375, "y": 716.8340911865234 }, { "x": 376.4240417480469, "y": 720.4415435791016 }, { "x": 381.01751708984375, "y": 723.5915985107422 }, { "x": 385.55482482910156, "y": 726.3024291992188 }, { "x": 390.57164001464844, "y": 727.6861114501953 }, { "x": 394.4514846801758, "y": 731.6047515869141 }, { "x": 398.7894821166992, "y": 734.8940582275391 }, { "x": 404.0709533691406, "y": 735.8944549560547 }, { "x": 408.2149963378906, "y": 739.3109741210938 }, { "x": 413.8499298095703, "y": 738.4457092285156 }, { "x": 419.6459503173828, "y": 738.9649963378906 }, { "x": 424.97381591796875, "y": 740.968994140625 }, { "x": 429.5976867675781, "y": 744.3511352539062 }, { "x": 433.5784912109375, "y": 748.5484619140625 }, { "x": 436.3251190185547, "y": 753.3396453857422 }, { "x": 438.2301025390625, "y": 758.582275390625 }, { "x": 443.4031524658203, "y": 760.2063751220703 }, { "x": 448.3881530761719, "y": 762.857421875 }, { "x": 452.3277587890625, "y": 764.1547698974609 }, { "x": 457.66070556640625, "y": 763.7365112304688 }, { "x": 462.59910583496094, "y": 764.7671661376953 }, { "x": 467.3919372558594, "y": 764.8968505859375 }, { "x": 471.0279541015625, "y": 767.3553161621094 }, { "x": 472.00628662109375, "y": 763.33056640625 }, { "x": 470.4195861816406, "y": 758.188232421875 }, { "x": 472.9959259033203, "y": 753.5198669433594 }, { "x": 475.6539764404297, "y": 748.4474792480469 }, { "x": 479.6330871582031, "y": 745.3943786621094 }, { "x": 483.00140380859375, "y": 743.8947448730469 }, { "x": 480.43792724609375, "y": 741.3508605957031 }, { "x": 480.84474182128906, "y": 738.0614166259766 }, { "x": 476.3066101074219, "y": 735.0186157226562 }, { "x": 475.7270812988281, "y": 729.5339202880859 }, { "x": 478.0009765625, "y": 730.4425811767578 }, { "x": 442.24574279785156, "y": 640.1588134765625 }, { "x": 444.29762268066406, "y": 641.9723358154297 }, { "x": 172.55665588378906, "y": 456.47926330566406 }, { "x": 170.23285293579102, "y": 460.90496826171875 }, { "x": 173.1043243408203, "y": 458.788818359375 }, { "x": 160.5982551574707, "y": 459.26768493652344 }, { "x": 159.40527725219727, "y": 460.0173645019531 }, { "x": 158.38004684448242, "y": 464.9613494873047 }, { "x": 153.9877700805664, "y": 467.0677032470703 }, { "x": 149.57083129882812, "y": 469.0983428955078 }, { "x": 145.81558990478516, "y": 473.43414306640625 }, { "x": 142.70130920410156, "y": 477.7893524169922 }, { "x": 140.0981101989746, "y": 479.4340515136719 }, { "x": 136.3847198486328, "y": 481.63905334472656 }, { "x": 131.41150665283203, "y": 484.1468200683594 }, { "x": 127.09513854980469, "y": 487.84271240234375 }, { "x": 121.53474044799805, "y": 487.65379333496094 }, { "x": 116.17582702636719, "y": 486.9142303466797 }, { "x": 111.66819953918457, "y": 483.7210998535156 }, { "x": 109.91710472106934, "y": 478.7089080810547 }, { "x": 106.68001174926758, "y": 480.19471740722656 }, { "x": 109.22821617126465, "y": 484.9180145263672 }, { "x": 106.62842750549316, "y": 489.83123779296875 }, { "x": 104.8825798034668, "y": 494.9608917236328 }, { "x": 108.33882141113281, "y": 498.4100036621094 }, { "x": 105.06465530395508, "y": 502.5252990722656 }, { "x": 106.8019027709961, "y": 504.17091369628906 }, { "x": 109.26834487915039, "y": 503.8553771972656 }, { "x": 111.19269180297852, "y": 504.62098693847656 }, { "x": 114.81597137451172, "y": 506.8544616699219 }, { "x": 117.37324523925781, "y": 510.9434356689453 }, { "x": 119.2852897644043, "y": 516.3406524658203 }, { "x": 118.3598403930664, "y": 521.7911071777344 }, { "x": 122.6917610168457, "y": 524.3580169677734 }, { "x": 122.25291442871094, "y": 528.3007354736328 }, { "x": 121.55606079101562, "y": 534.07666015625 }, { "x": 123.37432098388672, "y": 538.6107635498047 }, { "x": 119.63408279418945, "y": 541.5078582763672 }, { "x": 119.04530715942383, "y": 543.4045104980469 }, { "x": 118.60948181152344, "y": 548.3933563232422 }, { "x": 120.07612228393555, "y": 553.657958984375 }, { "x": 123.27155303955078, "y": 550.7020874023438 }, { "x": 126.84047317504883, "y": 554.109130859375 }, { "x": 126.29983139038086, "y": 559.718017578125 }, { "x": 123.46137619018555, "y": 562.3329010009766 }, { "x": 121.36924743652344, "y": 562.8367156982422 }, { "x": 121.45062637329102, "y": 568.1662292480469 }, { "x": 122.06893920898438, "y": 573.8111419677734 }, { "x": 119.43013763427734, "y": 578.6481475830078 }, { "x": 119.51103591918945, "y": 583.4510955810547 }, { "x": 118.08313369750977, "y": 587.8616943359375 }, { "x": 120.34505844116211, "y": 592.9364166259766 }, { "x": 116.81606674194336, "y": 597.2617340087891 }, { "x": 120.52546310424805, "y": 601.3545532226562 }, { "x": 122.91137313842773, "y": 605.7287139892578 }, { "x": 126.31719207763672, "y": 608.5874938964844 }, { "x": 127.65307235717773, "y": 613.0827789306641 }, { "x": 130.4744987487793, "y": 617.0753021240234 }, { "x": 131.62388610839844, "y": 621.3889465332031 }, { "x": 134.71906661987305, "y": 617.8508453369141 }, { "x": 138.80571746826172, "y": 619.0792999267578 }, { "x": 142.51652145385742, "y": 620.6800537109375 }, { "x": 146.58469009399414, "y": 616.8482055664062 }, { "x": 150.59713745117188, "y": 613.4388732910156 }, { "x": 152.5866470336914, "y": 609.3732452392578 }, { "x": 150.66018295288086, "y": 604.4569091796875 }, { "x": 153.4347915649414, "y": 599.3885040283203 }, { "x": 157.75272750854492, "y": 599.6705780029297 }, { "x": 161.28795623779297, "y": 596.8955230712891 }, { "x": 166.64973068237305, "y": 598.4209747314453 }, { "x": 170.50009536743164, "y": 601.9882354736328 }, { "x": 175.63874435424805, "y": 602.8553771972656 }, { "x": 178.07670211791992, "y": 604.3922729492188 }, { "x": 180.6901092529297, "y": 599.7828674316406 }, { "x": 180.97583389282227, "y": 594.5440368652344 }, { "x": 182.23827743530273, "y": 590.7801666259766 }, { "x": 183.04977798461914, "y": 585.3808898925781 }, { "x": 184.5052947998047, "y": 579.8139801025391 }, { "x": 184.83566284179688, "y": 575.0935668945312 }, { "x": 184.43149185180664, "y": 569.3733520507812 }, { "x": 185.56898880004883, "y": 563.9280242919922 }, { "x": 185.44979858398438, "y": 558.4876861572266 }, { "x": 186.46866607666016, "y": 553.6856079101562 }, { "x": 187.52054977416992, "y": 548.62255859375 }, { "x": 187.1807861328125, "y": 543.2960205078125 }, { "x": 188.09456253051758, "y": 538.2417602539062 }, { "x": 184.31966018676758, "y": 534.0894317626953 }, { "x": 183.1158218383789, "y": 528.6689147949219 }, { "x": 185.26276779174805, "y": 523.3902130126953 }, { "x": 188.88490295410156, "y": 518.9509582519531 }, { "x": 191.90720748901367, "y": 514.561279296875 }, { "x": 194.14824676513672, "y": 509.41871643066406 }, { "x": 191.55348205566406, "y": 504.6742248535156 }, { "x": 190.1284637451172, "y": 500.95567321777344 }, { "x": 190.10230255126953, "y": 497.4661865234375 }, { "x": 188.20147323608398, "y": 493.1448516845703 }, { "x": 185.93482208251953, "y": 489.0148162841797 }, { "x": 186.7581558227539, "y": 485.97132873535156 }, { "x": 184.1295394897461, "y": 484.4093933105469 }, { "x": 182.5939712524414, "y": 481.3431091308594 }, { "x": 177.78131866455078, "y": 481.79693603515625 }, { "x": 180.2755470275879, "y": 480.3428497314453 }, { "x": 183.05741119384766, "y": 475.8195495605469 }, { "x": 180.33316802978516, "y": 475.5025939941406 }, { "x": 177.69358825683594, "y": 475.1070861816406 }, { "x": 178.540771484375, "y": 470.99440002441406 }, { "x": 179.29363250732422, "y": 467.28880310058594 }, { "x": 175.3500099182129, "y": 465.93634033203125 }, { "x": 173.74422073364258, "y": 466.3254852294922 }, { "x": 171.3289794921875, "y": 463.01841735839844 }, { "x": 167.08794784545898, "y": 462.62217712402344 }, { "x": 164.7694435119629, "y": 459.40089416503906 }, { "x": 174.0121726989746, "y": 460.5232849121094 }, { "x": 175.42934036254883, "y": 462.6886901855469 }, { "x": 114.31143569946289, "y": 467.5131072998047 }, { "x": 111.79536628723145, "y": 471.0876007080078 }, { "x": 109.37606239318848, "y": 474.3417510986328 }, { "x": 111.92180061340332, "y": 476.72344970703125 }, { "x": 112.50877380371094, "y": 471.62428283691406 }, { "x": 115.81254577636719, "y": 470.7071990966797 }, { "x": 183.61525344848633, "y": 475.97743225097656 }, { "x": 188.08985900878906, "y": 481.5348663330078 }, { "x": 188.79448318481445, "y": 482.8235626220703 }, { "x": 111.18699836730957, "y": 600.5698547363281 }, { "x": 111.07252883911133, "y": 603.7097930908203 }, { "x": 114.11104965209961, "y": 604.4811706542969 }, { "x": 113.7214298248291, "y": 599.6990051269531 }, { "x": 116.95023727416992, "y": 608.9873504638672 }, { "x": 119.25884246826172, "y": 614.26806640625 }, { "x": 121.63907623291016, "y": 611.0264587402344 }, { "x": 121.96405410766602, "y": 606.4606323242188 }, { "x": 131.83049774169922, "y": 148.17208862304688 }, { "x": 137.17206192016602, "y": 146.92841339111328 }, { "x": 142.06042861938477, "y": 145.28382873535156 }, { "x": 145.0837516784668, "y": 146.60628509521484 }, { "x": 149.84931182861328, "y": 149.19623184204102 }, { "x": 155.39268112182617, "y": 151.3938980102539 }, { "x": 160.06298065185547, "y": 148.00968551635742 }, { "x": 164.84054565429688, "y": 144.38982772827148 }, { "x": 168.62066650390625, "y": 141.2480583190918 }, { "x": 171.33099365234375, "y": 146.16168212890625 }, { "x": 172.13999938964844, "y": 151.26851654052734 }, { "x": 168.08884811401367, "y": 154.84442901611328 }, { "x": 165.0355987548828, "y": 159.03144454956055 }, { "x": 161.59420013427734, "y": 163.75263595581055 }, { "x": 155.64212799072266, "y": 163.61613082885742 }, { "x": 152.4112091064453, "y": 165.25872421264648 }, { "x": 147.38705825805664, "y": 165.68903350830078 }, { "x": 145.83724212646484, "y": 165.20824432373047 }, { "x": 143.2344093322754, "y": 164.13689422607422 }, { "x": 138.35154724121094, "y": 160.68013763427734 }, { "x": 136.80428314208984, "y": 157.00151443481445 }, { "x": 134.61690521240234, "y": 151.81666564941406 }];
const usaData = [{ "x": 682.89140625, "y": 171.53790283203125 }, { "x": 677.519775390625, "y": 166.87640380859375 }, { "x": 672.44677734375, "y": 162.48968505859375 }, { "x": 664.8778808593751, "y": 163.711181640625 }, { "x": 657.141748046875, "y": 165.45989990234375 }, { "x": 649.3716796875001, "y": 167.0504150390625 }, { "x": 641.59892578125, "y": 168.62834472656252 }, { "x": 633.8261230468751, "y": 170.2062744140625 }, { "x": 626.053369140625, "y": 171.7842041015625 }, { "x": 618.252978515625, "y": 173.21136474609375 }, { "x": 616.0185058593751, "y": 168.01578369140626 }, { "x": 621.596044921875, "y": 162.57890625000002 }, { "x": 623.465380859375, "y": 155.85867919921876 }, { "x": 621.0947265625, "y": 149.93494873046876 }, { "x": 628.4545410156251, "y": 147.0811767578125 }, { "x": 636.309619140625, "y": 146.28782958984374 }, { "x": 643.452197265625, "y": 145.55821533203124 }, { "x": 650.099169921875, "y": 142.44600830078127 }, { "x": 655.4313476562501, "y": 137.74843750000002 }, { "x": 654.28076171875, "y": 131.1385986328125 }, { "x": 653.1463378906251, "y": 125.82889404296876 }, { "x": 657.9960449218751, "y": 119.67831420898438 }, { "x": 662.5385253906251, "y": 113.18483276367188 }, { "x": 669.0465820312501, "y": 108.97722778320313 }, { "x": 676.7986328125, "y": 107.76070556640626 }, { "x": 684.4208496093751, "y": 105.57353515625 }, { "x": 686.55654296875, "y": 112.56519165039063 }, { "x": 687.57509765625, "y": 120.26168212890626 }, { "x": 689.80703125, "y": 127.46263427734375 }, { "x": 692.8349121093751, "y": 133.3849365234375 }, { "x": 694.393798828125, "y": 141.07180175781252 }, { "x": 693.88525390625, "y": 148.98358154296875 }, { "x": 694.4319824218751, "y": 156.85909423828124 }, { "x": 696.0564941406251, "y": 164.6216552734375 }, { "x": 695.8587890625, "y": 172.45958251953127 }, { "x": 696.0656250000001, "y": 178.828369140625 }, { "x": 702.272705078125, "y": 175.61109619140626 }, { "x": 709.577294921875, "y": 173.086083984375 }, { "x": 715.8656738281251, "y": 170.07567138671877 }, { "x": 712.40458984375, "y": 174.97856445312502 }, { "x": 706.0595703125, "y": 179.73736572265625 }, { "x": 698.6290039062501, "y": 182.44290771484376 }, { "x": 694.742919921875, "y": 178.9754638671875 }, { "x": 690.3396484375, "y": 174.15926513671877 }, { "x": 183.86417236328126, "y": 487.75566406250005 }, { "x": 179.7979736328125, "y": 481.579736328125 }, { "x": 174.74510498046877, "y": 477.426953125 }, { "x": 169.9929443359375, "y": 471.330029296875 }, { "x": 166.62467041015626, "y": 464.29570312500005 }, { "x": 160.59508056640627, "y": 459.113720703125 }, { "x": 154.56898193359376, "y": 454.52119140625 }, { "x": 148.56917724609374, "y": 452.72958984375003 }, { "x": 140.83568115234374, "y": 451.206298828125 }, { "x": 133.49417724609376, "y": 448.38510742187503 }, { "x": 126.90223388671876, "y": 451.953125 }, { "x": 120.25827026367188, "y": 450.34775390625003 }, { "x": 113.6022216796875, "y": 454.57402343750005 }, { "x": 111.19940795898438, "y": 451.453564453125 }, { "x": 112.96340332031251, "y": 445.01035156250003 }, { "x": 109.69951171875, "y": 447.50673828125 }, { "x": 103.38686523437501, "y": 452.1681640625 }, { "x": 103.43507080078126, "y": 458.08203125 }, { "x": 96.81857299804688, "y": 462.56108398437505 }, { "x": 89.69235229492188, "y": 466.19365234375005 }, { "x": 82.93763427734376, "y": 469.5140625 }, { "x": 76.50718994140625, "y": 471.94003906250003 }, { "x": 73.30172729492188, "y": 474.03291015625 }, { "x": 70.0580078125, "y": 475.85791015625 }, { "x": 65.24674377441406, "y": 473.489013671875 }, { "x": 57.64193115234375, "y": 474.97514648437505 }, { "x": 51.11063842773437, "y": 473.28764648437505 }, { "x": 57.992330932617186, "y": 471.051220703125 }, { "x": 65.26772766113282, "y": 468.13334960937505 }, { "x": 72.74400024414064, "y": 467.184228515625 }, { "x": 80.11237182617188, "y": 464.506103515625 }, { "x": 85.93536987304688, "y": 459.32524414062505 }, { "x": 88.07819213867188, "y": 453.462060546875 }, { "x": 83.49683227539063, "y": 454.63671875 }, { "x": 78.77131347656251, "y": 449.32216796875 }, { "x": 71.91886596679689, "y": 449.09462890625 }, { "x": 74.70532836914063, "y": 441.962353515625 }, { "x": 69.07955322265624, "y": 439.481396484375 }, { "x": 65.4953582763672, "y": 432.68413085937505 }, { "x": 65.56680908203126, "y": 426.04741210937505 }, { "x": 69.04757690429688, "y": 419.49301757812503 }, { "x": 74.77149658203126, "y": 414.02360839843755 }, { "x": 81.30946655273438, "y": 415.18837890625 }, { "x": 87.66781005859376, "y": 412.8315673828125 }, { "x": 86.73572998046875, "y": 407.769482421875 }, { "x": 79.053564453125, "y": 406.49980468750005 }, { "x": 72.99469604492188, "y": 402.357568359375 }, { "x": 71.36549682617188, "y": 395.099853515625 }, { "x": 76.2758544921875, "y": 391.89860839843755 }, { "x": 84.12161254882812, "y": 391.04716796875005 }, { "x": 86.71416625976563, "y": 395.79189453125 }, { "x": 89.79873046875001, "y": 394.1450439453125 }, { "x": 86.7600830078125, "y": 386.94912109375 }, { "x": 83.63812255859375, "y": 379.68193359375005 }, { "x": 85.82424926757812, "y": 374.731103515625 }, { "x": 93.19000854492188, "y": 373.68356933593753 }, { "x": 98.7079833984375, "y": 368.229931640625 }, { "x": 106.37258300781251, "y": 366.6245361328125 }, { "x": 113.30809326171875, "y": 364.1866455078125 }, { "x": 119.87116699218751, "y": 368.5570068359375 }, { "x": 125.08245849609375, "y": 372.683837890625 }, { "x": 132.7046630859375, "y": 374.8467529296875 }, { "x": 140.1182861328125, "y": 377.57602539062503 }, { "x": 147.76043701171875, "y": 378.5146728515625 }, { "x": 151.66297607421876, "y": 384.2390380859375 }, { "x": 151.58824462890627, "y": 392.24387207031253 }, { "x": 151.51351318359374, "y": 400.2486572265625 }, { "x": 151.43878173828125, "y": 408.2534423828125 }, { "x": 151.36405029296876, "y": 416.258203125 }, { "x": 151.28931884765626, "y": 424.26298828125005 }, { "x": 151.21458740234377, "y": 432.2677734375 }, { "x": 151.13985595703124, "y": 440.27255859375003 }, { "x": 151.06512451171875, "y": 448.277294921875 }, { "x": 158.0961669921875, "y": 449.081201171875 }, { "x": 162.87799072265625, "y": 455.378076171875 }, { "x": 167.4576416015625, "y": 453.261474609375 }, { "x": 173.82998046875002, "y": 454.0529296875 }, { "x": 179.155029296875, "y": 459.731201171875 }, { "x": 183.64724121093752, "y": 466.334619140625 }, { "x": 188.28835449218752, "y": 472.75668945312503 }, { "x": 195.62468261718752, "y": 475.77314453125 }, { "x": 196.287060546875, "y": 483.69687500000003 }, { "x": 191.41431884765626, "y": 484.775634765625 }, { "x": 189.11956787109375, "y": 487.31083984375005 }, { "x": 131.10268554687502, "y": 444.61118164062503 }, { "x": 128.14384765625, "y": 446.251708984375 }, { "x": 282.9110107421875, "y": 482.845361328125 }, { "x": 281.2508056640625, "y": 475.27084960937503 }, { "x": 279.1673583984375, "y": 468.059033203125 }, { "x": 281.15205078125, "y": 461.42246093750003 }, { "x": 287.3208740234375, "y": 461.0791015625 }, { "x": 294.3626953125, "y": 464.876123046875 }, { "x": 299.025439453125, "y": 471.26743164062503 }, { "x": 297.3742919921875, "y": 476.89443359375 }, { "x": 290.2520263671875, "y": 479.69218750000005 }, { "x": 633.556396484375, "y": 480.205712890625 }, { "x": 638.789794921875, "y": 475.734375 }, { "x": 641.252734375, "y": 478.46435546875 }, { "x": 30.20858154296875, "y": 478.05424804687505 }, { "x": 35.21815490722656, "y": 474.424560546875 }, { "x": 40.82473449707031, "y": 473.33652343750003 }, { "x": 45.20074462890625, "y": 476.99765625000003 }, { "x": 37.50488891601563, "y": 477.72529296875 }, { "x": 644.2020996093751, "y": 476.01572265625003 }, { "x": 649.9783691406251, "y": 471.33798828125003 }, { "x": 652.034228515625, "y": 467.001123046875 }, { "x": 644.6503417968751, "y": 469.44912109375 }, { "x": 641.3121093750001, "y": 462.66806640625003 }, { "x": 635.667138671875, "y": 457.342236328125 }, { "x": 630.239501953125, "y": 454.354736328125 }, { "x": 626.31083984375, "y": 448.899560546875 }, { "x": 621.29150390625, "y": 444.63125 }, { "x": 617.0123046875, "y": 437.875927734375 }, { "x": 612.2947265625, "y": 431.744384765625 }, { "x": 616.12685546875, "y": 425.0877197265625 }, { "x": 612.755615234375, "y": 429.99150390625005 }, { "x": 609.7064941406251, "y": 422.77216796875 }, { "x": 610.561865234375, "y": 414.92197265625003 }, { "x": 608.9992187500001, "y": 407.3576171875 }, { "x": 602.727587890625, "y": 402.94548339843755 }, { "x": 596.9265625, "y": 397.63671875 }, { "x": 590.994482421875, "y": 392.47922363281253 }, { "x": 583.3520019531251, "y": 391.169384765625 }, { "x": 579.010888671875, "y": 395.644677734375 }, { "x": 571.90048828125, "y": 398.801171875 }, { "x": 566.4541015625, "y": 396.39445800781255 }, { "x": 559.543505859375, "y": 392.399169921875 }, { "x": 551.9557617187501, "y": 389.97441406250005 }, { "x": 543.994287109375, "y": 390.48906250000005 }, { "x": 536.2525390625, "y": 392.498291015625 }, { "x": 528.567578125, "y": 394.36118164062503 }, { "x": 528.3399414062501, "y": 389.16325683593755 }, { "x": 523.9717773437501, "y": 392.0794677734375 }, { "x": 516.222314453125, "y": 393.15012207031253 }, { "x": 508.3763671875, "y": 393.8499755859375 }, { "x": 502.47905273437505, "y": 398.6364990234375 }, { "x": 504.751171875, "y": 398.05095214843755 }, { "x": 507.87583007812503, "y": 402.88908691406255 }, { "x": 503.873193359375, "y": 408.1507568359375 }, { "x": 511.27294921875, "y": 410.94340820312505 }, { "x": 511.52226562500005, "y": 416.58432617187503 }, { "x": 504.42099609375003, "y": 413.6375732421875 }, { "x": 497.89018554687505, "y": 411.22697753906255 }, { "x": 495.80278320312505, "y": 417.05356445312503 }, { "x": 492.9171875, "y": 414.35556640625003 }, { "x": 486.265625, "y": 418.03496093750005 }, { "x": 478.89189453125005, "y": 415.111279296875 }, { "x": 476.3412109375, "y": 410.5999755859375 }, { "x": 470.76064453125, "y": 406.55607910156255 }, { "x": 470.921533203125, "y": 411.33146972656255 }, { "x": 463.18291015625005, "y": 410.58879394531255 }, { "x": 455.34892578125005, "y": 409.1375244140625 }, { "x": 447.586083984375, "y": 407.3369140625 }, { "x": 439.69326171875, "y": 408.466748046875 }, { "x": 432.14531250000005, "y": 411.1177978515625 }, { "x": 425.50168457031253, "y": 415.39912109375 }, { "x": 419.26225585937505, "y": 420.40512695312503 }, { "x": 412.9344482421875, "y": 425.2801513671875 }, { "x": 405.8250732421875, "y": 428.951806640625 }, { "x": 398.898876953125, "y": 432.951806640625 }, { "x": 393.15400390625, "y": 438.371337890625 }, { "x": 388.80380859375003, "y": 445.08793945312505 }, { "x": 386.2534423828125, "y": 452.580029296875 }, { "x": 386.89438476562503, "y": 460.5236328125 }, { "x": 388.8995361328125, "y": 468.251416015625 }, { "x": 385.3708740234375, "y": 474.69389648437505 }, { "x": 378.30986328125005, "y": 472.10087890625005 }, { "x": 370.52019042968755, "y": 470.65092773437505 }, { "x": 363.2413330078125, "y": 467.5033203125 }, { "x": 356.6719970703125, "y": 463.247216796875 }, { "x": 353.64299316406255, "y": 456.04985351562505 }, { "x": 351.4417236328125, "y": 449.38632812500003 }, { "x": 348.9619873046875, "y": 442.960888671875 }, { "x": 344.15769042968753, "y": 436.61069335937503 }, { "x": 339.275634765625, "y": 430.53544921875005 }, { "x": 336.41447753906255, "y": 423.0677734375 }, { "x": 333.3531494140625, "y": 415.741845703125 }, { "x": 328.087353515625, "y": 409.72563476562505 }, { "x": 321.8953857421875, "y": 405.1982666015625 }, { "x": 313.97165527343753, "y": 404.0940673828125 }, { "x": 306.48703613281253, "y": 404.59465332031255 }, { "x": 302.11374511718753, "y": 411.0290771484375 }, { "x": 297.109619140625, "y": 417.13271484375 }, { "x": 289.7853515625, "y": 414.026611328125 }, { "x": 283.350341796875, "y": 409.41728515625005 }, { "x": 277.6009765625, "y": 403.88056640625 }, { "x": 274.788232421875, "y": 396.5720458984375 }, { "x": 272.8808349609375, "y": 388.91569824218755 }, { "x": 268.1558349609375, "y": 382.77099609375 }, { "x": 262.15007324218755, "y": 377.5582275390625 }, { "x": 257.148779296875, "y": 371.3774658203125 }, { "x": 252.3972900390625, "y": 365.22580566406253 }, { "x": 244.69155273437502, "y": 363.3286865234375 }, { "x": 236.76435546875, "y": 362.214306640625 }, { "x": 228.85439453125002, "y": 360.98525390625 }, { "x": 226.2753662109375, "y": 366.918408203125 }, { "x": 219.53457031250002, "y": 367.805419921875 }, { "x": 211.6373291015625, "y": 366.51042480468755 }, { "x": 203.70596923828126, "y": 365.4324462890625 }, { "x": 195.75302734375, "y": 364.52036132812503 }, { "x": 187.83421630859377, "y": 363.3530517578125 }, { "x": 180.22075195312502, "y": 361.00253906250003 }, { "x": 173.25567626953125, "y": 357.0586181640625 }, { "x": 166.36517333984375, "y": 352.98417968750005 }, { "x": 159.49418945312502, "y": 348.87663574218755 }, { "x": 152.65850830078125, "y": 344.710595703125 }, { "x": 145.77615966796876, "y": 340.62248535156255 }, { "x": 138.82875976562502, "y": 336.6458251953125 }, { "x": 132.2481689453125, "y": 332.1868896484375 }, { "x": 128.42249755859376, "y": 328.4944091796875 }, { "x": 120.45784912109376, "y": 327.7005615234375 }, { "x": 112.52102050781251, "y": 326.658349609375 }, { "x": 104.60944824218751, "y": 325.4388671875 }, { "x": 98.51082153320313, "y": 322.12783203125 }, { "x": 98.19392700195313, "y": 314.13525390625 }, { "x": 94.5245361328125, "y": 307.0748779296875 }, { "x": 89.41361694335937, "y": 301.02768554687503 }, { "x": 85.73917846679687, "y": 296.6944580078125 }, { "x": 79.02717285156251, "y": 293.15400390625 }, { "x": 74.49081420898438, "y": 286.630322265625 }, { "x": 67.54574584960938, "y": 283.073388671875 }, { "x": 60.03501586914063, "y": 280.3833740234375 }, { "x": 59.45259094238281, "y": 273.1513427734375 }, { "x": 59.053662109375004, "y": 265.65874023437505 }, { "x": 55.46354370117188, "y": 258.51262207031255 }, { "x": 52.599847412109376, "y": 251.04289550781252 }, { "x": 49.09442749023438, "y": 243.87443847656252 }, { "x": 51.67848815917969, "y": 237.1643798828125 }, { "x": 49.020443725585935, "y": 231.08647460937502 }, { "x": 46.584222412109376, "y": 223.721875 }, { "x": 47.65981140136719, "y": 215.82622070312502 }, { "x": 43.50689849853516, "y": 209.300732421875 }, { "x": 42.36685485839844, "y": 201.52362060546875 }, { "x": 38.616250610351564, "y": 194.4541015625 }, { "x": 38.54707489013672, "y": 186.65260009765626 }, { "x": 40.341128540039065, "y": 178.892822265625 }, { "x": 38.3352783203125, "y": 171.203759765625 }, { "x": 37.013038635253906, "y": 163.97984619140627 }, { "x": 41.59255523681641, "y": 157.5322265625 }, { "x": 45.20862731933594, "y": 150.42244873046874 }, { "x": 46.44020690917969, "y": 142.54433593750002 }, { "x": 45.860137939453125, "y": 135.079296875 }, { "x": 47.1402587890625, "y": 127.18240966796876 }, { "x": 49.90232849121094, "y": 119.80071411132813 }, { "x": 54.11539306640625, "y": 112.99520263671876 }, { "x": 57.85993347167969, "y": 105.92192993164063 }, { "x": 61.10162353515625, "y": 98.60403442382812 }, { "x": 63.909609985351565, "y": 91.10824584960938 }, { "x": 67.00042419433595, "y": 83.72694091796876 }, { "x": 69.67494506835938, "y": 76.182421875 }, { "x": 73.01757202148437, "y": 69.69614868164064 }, { "x": 73.73367309570312, "y": 63.7079345703125 }, { "x": 73.26741943359374, "y": 57.018743896484374 }, { "x": 73.73839111328125, "y": 50.89441528320313 }, { "x": 73.52204589843751, "y": 42.89323120117187 }, { "x": 72.95906982421874, "y": 35.05032653808594 }, { "x": 77.17659912109374, "y": 31.23073883056641 }, { "x": 83.40377197265624, "y": 36.22416687011719 }, { "x": 90.7992431640625, "y": 39.15150756835938 }, { "x": 96.71926269531251, "y": 37.36320343017579 }, { "x": 99.62802124023438, "y": 31.63524398803711 }, { "x": 101.26194458007814, "y": 26.920184326171874 }, { "x": 109.01758422851563, "y": 28.89343185424805 }, { "x": 116.7381591796875, "y": 31.008892822265626 }, { "x": 124.46583251953126, "y": 33.09853515625 }, { "x": 132.20341796875, "y": 35.15042724609375 }, { "x": 139.95510253906252, "y": 37.14808197021485 }, { "x": 147.7249755859375, "y": 39.07476043701172 }, { "x": 155.5150146484375, "y": 40.917893981933595 }, { "x": 163.32462158203126, "y": 42.67645874023438 }, { "x": 171.15001220703127, "y": 44.36253204345704 }, { "x": 178.98695068359376, "y": 45.996337890625 }, { "x": 186.82595214843752, "y": 47.61848449707031 }, { "x": 194.66419677734376, "y": 49.2439697265625 }, { "x": 202.50341796875, "y": 50.86476440429688 }, { "x": 210.3666748046875, "y": 52.36592407226563 }, { "x": 218.24868164062502, "y": 53.763327026367186 }, { "x": 226.1438720703125, "y": 55.084912109375004 }, { "x": 234.0490234375, "y": 56.3458251953125 }, { "x": 241.96269531250002, "y": 57.55364685058594 }, { "x": 249.8833984375, "y": 58.712927246093756 }, { "x": 257.8107421875, "y": 59.82490844726563 }, { "x": 265.7451904296875, "y": 60.88819274902344 }, { "x": 273.6861083984375, "y": 61.89952087402344 }, { "x": 281.6343017578125, "y": 62.85153503417969 }, { "x": 289.590771484375, "y": 63.73129577636719 }, { "x": 297.55759277343753, "y": 64.51503295898438 }, { "x": 305.52724609375, "y": 65.2675537109375 }, { "x": 313.47490234375, "y": 66.21535949707032 }, { "x": 321.443505859375, "y": 66.97343139648439 }, { "x": 329.429638671875, "y": 67.52364501953124 }, { "x": 337.42216796875005, "y": 67.97245788574219 }, { "x": 345.418115234375, "y": 68.35432434082031 }, { "x": 353.41640625, "y": 68.68317871093751 }, { "x": 361.41669921875, "y": 68.96685791015625 }, { "x": 369.41801757812505, "y": 69.20953369140625 }, { "x": 377.42050781250003, "y": 69.41089782714843 }, { "x": 385.4241943359375, "y": 69.57265014648438 }, { "x": 393.42827148437505, "y": 69.70375061035156 }, { "x": 401.43229980468755, "y": 69.83252868652343 }, { "x": 409.4363525390625, "y": 69.96146850585939 }, { "x": 415.6739013671875, "y": 67.89990234375 }, { "x": 419.3616455078125, "y": 63.78245849609375 }, { "x": 422.00095214843753, "y": 70.96918334960938 }, { "x": 427.6121337890625, "y": 75.034326171875 }, { "x": 434.205322265625, "y": 77.78148193359375 }, { "x": 441.527783203125, "y": 76.02670288085938 }, { "x": 448.7052734375, "y": 79.46011352539062 }, { "x": 454.66196289062503, "y": 81.94153442382813 }, { "x": 461.286083984375, "y": 84.38346557617187 }, { "x": 468.18808593750003, "y": 81.84037475585939 }, { "x": 475.2041015625, "y": 82.802587890625 }, { "x": 482.68706054687505, "y": 84.13153076171875 }, { "x": 479.664453125, "y": 88.54443359375 }, { "x": 472.3515625, "y": 91.79966430664062 }, { "x": 465.774560546875, "y": 96.24237060546875 }, { "x": 460.818017578125, "y": 102.50125732421876 }, { "x": 454.71000976562505, "y": 107.549560546875 }, { "x": 461.4916015625, "y": 106.785009765625 }, { "x": 468.787744140625, "y": 103.52910766601563 }, { "x": 468.749658203125, "y": 109.22404174804689 }, { "x": 475.659375, "y": 108.93685302734376 }, { "x": 482.3771484375, "y": 104.9666015625 }, { "x": 489.578369140625, "y": 101.72079467773438 }, { "x": 495.047314453125, "y": 95.98770141601562 }, { "x": 501.84042968750003, "y": 92.00443115234376 }, { "x": 503.64853515625003, "y": 95.05907592773438 }, { "x": 498.67465820312503, "y": 101.02912597656251 }, { "x": 502.66943359375, "y": 101.68032226562501 }, { "x": 508.883544921875, "y": 105.88386840820313 }, { "x": 515.75869140625, "y": 107.692919921875 }, { "x": 522.59033203125, "y": 105.38065185546876 }, { "x": 530.25859375, "y": 103.36436157226564 }, { "x": 537.893115234375, "y": 101.01171264648438 }, { "x": 541.6474609375, "y": 106.03175659179688 }, { "x": 549.249658203125, "y": 103.90436401367188 }, { "x": 551.4967773437501, "y": 111.09951171875001 }, { "x": 557.76943359375, "y": 110.61248779296875 }, { "x": 555.450341796875, "y": 114.89263916015625 }, { "x": 547.464599609375, "y": 114.70768432617189 }, { "x": 539.666748046875, "y": 115.18983154296876 }, { "x": 532.193701171875, "y": 116.50418090820312 }, { "x": 524.85341796875, "y": 118.97318115234376 }, { "x": 518.390185546875, "y": 121.58995361328125 }, { "x": 514.05498046875, "y": 126.39776611328125 }, { "x": 510.67949218750005, "y": 133.6459716796875 }, { "x": 506.73896484375, "y": 140.59197998046875 }, { "x": 510.10302734375, "y": 137.63623046875 }, { "x": 514.7161621093751, "y": 131.09742431640626 }, { "x": 517.291015625, "y": 133.11136474609376 }, { "x": 514.16689453125, "y": 140.48024902343752 }, { "x": 512.84765625, "y": 148.28018798828126 }, { "x": 511.53076171875, "y": 155.87042236328125 }, { "x": 510.031689453125, "y": 163.53221435546877 }, { "x": 510.813916015625, "y": 171.41988525390624 }, { "x": 512.0564941406251, "y": 179.27542724609376 }, { "x": 514.501611328125, "y": 186.67886962890626 }, { "x": 519.26064453125, "y": 192.40528564453126 }, { "x": 526.06826171875, "y": 188.9780029296875 }, { "x": 529.45, "y": 181.8666748046875 }, { "x": 530.952294921875, "y": 174.02811279296876 }, { "x": 528.827783203125, "y": 166.41217041015625 }, { "x": 525.49140625, "y": 159.1496337890625 }, { "x": 525.5099609375, "y": 151.2448486328125 }, { "x": 527.073193359375, "y": 143.4534423828125 }, { "x": 528.8787597656251, "y": 136.4464599609375 }, { "x": 532.926416015625, "y": 130.1488525390625 }, { "x": 539.0353515625001, "y": 125.7056884765625 }, { "x": 540.6458984375, "y": 119.73721923828126 }, { "x": 547.32841796875, "y": 119.0732177734375 }, { "x": 554.732666015625, "y": 121.65982055664062 }, { "x": 561.523193359375, "y": 124.78334960937501 }, { "x": 562.69970703125, "y": 130.58865966796876 }, { "x": 564.784765625, "y": 137.94171142578125 }, { "x": 562.3265625, "y": 145.30821533203124 }, { "x": 559.0192382812501, "y": 151.78065185546876 }, { "x": 564.17705078125, "y": 149.2417236328125 }, { "x": 569.823291015625, "y": 143.9955810546875 }, { "x": 574.86728515625, "y": 149.52294921875 }, { "x": 577.225439453125, "y": 157.17197265625 }, { "x": 579.268310546875, "y": 164.879150390625 }, { "x": 576.719482421875, "y": 171.0322509765625 }, { "x": 572.76376953125, "y": 176.958447265625 }, { "x": 570.0552734375, "y": 184.06348876953126 }, { "x": 575.181494140625, "y": 187.75303955078127 }, { "x": 582.2771484375, "y": 189.56363525390626 }, { "x": 589.8534667968751, "y": 187.03447265625002 }, { "x": 595.99267578125, "y": 181.993603515625 }, { "x": 602.41142578125, "y": 177.21560058593752 }, { "x": 609.2435546875, "y": 173.1400390625 }, { "x": 615.263818359375, "y": 167.86700439453125 }, { "x": 620.9303710937501, "y": 162.24439697265626 }, { "x": 621.0829589843751, "y": 155.84921875 }, { "x": 621.68447265625, "y": 149.25987548828127 }, { "x": 629.3498046875001, "y": 147.01422119140625 }, { "x": 637.2898925781251, "y": 146.69899902343752 }, { "x": 644.889208984375, "y": 145.315234375 }, { "x": 650.764892578125, "y": 140.3863037109375 }, { "x": 653.0134765625, "y": 135.03375244140625 }, { "x": 650.2503417968751, "y": 129.49233398437502 }, { "x": 654.8015625, "y": 123.0673095703125 }, { "x": 659.38125, "y": 116.50804443359375 }, { "x": 664.802001953125, "y": 110.68496093750001 }, { "x": 672.488037109375, "y": 108.68162841796875 }, { "x": 680.267578125, "y": 106.82797241210938 }, { "x": 687.9802734375, "y": 104.68400268554689 }, { "x": 695.7196777343751, "y": 102.6396484375 }, { "x": 703.46611328125, "y": 100.62131958007814 }, { "x": 707.0179199218751, "y": 94.45912475585938 }, { "x": 712.440478515625, "y": 91.01312255859375 }, { "x": 715.1600097656251, "y": 83.55802001953126 }, { "x": 714.3957031250001, "y": 75.96649780273438 }, { "x": 715.7497070312501, "y": 68.17526245117188 }, { "x": 717.6500976562501, "y": 60.424102783203125 }, { "x": 720.669677734375, "y": 53.02679443359375 }, { "x": 726.4958007812501, "y": 54.965466308593754 }, { "x": 732.5949218750001, "y": 50.24977111816406 }, { "x": 739.9816406250001, "y": 53.193911743164065 }, { "x": 742.29873046875, "y": 60.85631103515625 }, { "x": 744.61162109375, "y": 68.52011413574219 }, { "x": 746.9065917968751, "y": 76.18941040039063 }, { "x": 752.5224121093751, "y": 79.52131958007813 }, { "x": 757.698388671875, "y": 82.6933349609375 }, { "x": 760.560205078125, "y": 89.86204833984375 }, { "x": 755.71533203125, "y": 95.83140258789062 }, { "x": 749.9329589843751, "y": 101.29746704101564 }, { "x": 745.1814453125, "y": 105.57714233398438 }, { "x": 740.813525390625, "y": 108.93362426757812 }, { "x": 736.4607421875, "y": 112.5609619140625 }, { "x": 730.4079101562501, "y": 117.09994506835938 }, { "x": 727.08154296875, "y": 122.72658691406251 }, { "x": 725.736083984375, "y": 130.60858154296875 }, { "x": 726.3802246093751, "y": 137.83726806640624 }, { "x": 726.3591796875, "y": 144.59670410156252 }, { "x": 731.99755859375, "y": 149.6522216796875 }, { "x": 737.581591796875, "y": 149.019677734375 }, { "x": 736.0857910156251, "y": 145.45106201171876 }, { "x": 740.892626953125, "y": 151.0441650390625 }, { "x": 735.510791015625, "y": 155.52298583984376 }, { "x": 735.51591796875, "y": 160.12089843750002 }, { "x": 728.8787597656251, "y": 159.76572265625 }, { "x": 722.33291015625, "y": 162.78558349609375 }, { "x": 715.1722167968751, "y": 166.26451416015627 }, { "x": 707.670947265625, "y": 169.01593017578125 }, { "x": 701.140625, "y": 173.28934326171876 }, { "x": 699.298486328125, "y": 175.16754150390625 }, { "x": 706.856201171875, "y": 173.54376220703125 }, { "x": 713.4696777343751, "y": 169.31380615234374 }, { "x": 714.11318359375, "y": 173.72130126953127 }, { "x": 707.8514160156251, "y": 178.704931640625 }, { "x": 700.784423828125, "y": 182.37353515625 }, { "x": 693.3011230468751, "y": 184.991162109375 }, { "x": 696.0244140625, "y": 189.51046142578127 }, { "x": 696.3236816406251, "y": 197.50806884765626 }, { "x": 694.12939453125, "y": 205.00002441406252 }, { "x": 690.8571289062501, "y": 212.24486083984377 }, { "x": 686.940087890625, "y": 213.38740234375 }, { "x": 681.611572265625, "y": 210.5200927734375 }, { "x": 685.702783203125, "y": 216.9134033203125 }, { "x": 689.102099609375, "y": 223.66890869140627 }, { "x": 687.9478515625001, "y": 231.4812744140625 }, { "x": 684.8783691406251, "y": 238.7862060546875 }, { "x": 683.8732421875001, "y": 246.6746826171875 }, { "x": 679.7064453125, "y": 246.0572021484375 }, { "x": 680.7294433593751, "y": 238.19853515625002 }, { "x": 678.51796875, "y": 231.4921875 }, { "x": 677.662890625, "y": 236.72509765625 }, { "x": 673.4926269531251, "y": 230.442724609375 }, { "x": 671.0157226562501, "y": 233.67751464843752 }, { "x": 675.0586914062501, "y": 238.9520263671875 }, { "x": 674.8365234375001, "y": 245.53164062500002 }, { "x": 677.938623046875, "y": 251.44411621093752 }, { "x": 682.2278808593751, "y": 253.1682861328125 }, { "x": 686.1458496093751, "y": 260.13432617187505 }, { "x": 690.0210937500001, "y": 267.1132568359375 }, { "x": 694.556201171875, "y": 273.5826171875 }, { "x": 694.3938964843751, "y": 281.20932617187503 }, { "x": 687.517333984375, "y": 285.09689941406253 }, { "x": 692.398193359375, "y": 279.712109375 }, { "x": 691.7367675781251, "y": 272.16472167968755 }, { "x": 688.0626953125001, "y": 277.39499511718753 }, { "x": 682.0878417968751, "y": 281.5687744140625 }, { "x": 683.201220703125, "y": 287.02329101562503 }, { "x": 685.8975585937501, "y": 289.098876953125 }, { "x": 680.5801757812501, "y": 293.76103515625 }, { "x": 673.39189453125, "y": 297.10056152343753 }, { "x": 667.8727539062501, "y": 302.8211669921875 }, { "x": 665.1342285156251, "y": 310.3179443359375 }, { "x": 657.6250976562501, "y": 312.502734375 }, { "x": 652.2474121093751, "y": 318.3159912109375 }, { "x": 650.170703125, "y": 326.00144042968753 }, { "x": 645.227783203125, "y": 331.8728759765625 }, { "x": 640.03564453125, "y": 337.9370849609375 }, { "x": 634.652490234375, "y": 342.917431640625 }, { "x": 630.04404296875, "y": 349.19658203125005 }, { "x": 626.84970703125, "y": 356.4600830078125 }, { "x": 625.23154296875, "y": 364.2921142578125 }, { "x": 624.4457519531251, "y": 372.1846435546875 }, { "x": 626.366015625, "y": 379.945947265625 }, { "x": 629.3285644531251, "y": 387.378369140625 }, { "x": 633.04443359375, "y": 394.46477050781255 }, { "x": 637.5071777343751, "y": 401.1044921875 }, { "x": 642.7732421875, "y": 407.12912597656253 }, { "x": 644.2197265625, "y": 414.3326416015625 }, { "x": 648.2797363281251, "y": 421.18083496093755 }, { "x": 652.181640625, "y": 428.17001953125003 }, { "x": 655.9811523437501, "y": 435.2080078125 }, { "x": 657.385791015625, "y": 443.05937500000005 }, { "x": 658.005419921875, "y": 451.04033203125005 }, { "x": 656.241943359375, "y": 458.50834960937505 }, { "x": 658.0253417968751, "y": 462.114501953125 }, { "x": 654.8971679687501, "y": 469.4609375 }, { "x": 648.994287109375, "y": 474.8427734375 }, { "x": 385.3674560546875, "y": 462.587646484375 }, { "x": 386.78818359375003, "y": 469.64111328125 }, { "x": 384.200830078125, "y": 458.057373046875 }, { "x": 386.54697265625003, "y": 441.87675781250005 }, { "x": 466.442041015625, "y": 407.58151855468753 }, { "x": 669.9298828125001, "y": 221.05947265625002 }, { "x": 669.427978515625, "y": 214.2747802734375 }, { "x": 668.8201171875, "y": 217.1714599609375 }, { "x": 668.93876953125, "y": 224.99125976562502 }, { "x": 730.922119140625, "y": 156.9502197265625 }, { "x": 536.935400390625, "y": 131.03753662109375 }, { "x": 536.9529296875, "y": 133.94482421875 }, { "x": 99.47030639648438, "y": 40.56386871337891 }, { "x": 90.42404174804688, "y": 473.61708984375 }, { "x": 97.71860961914064, "y": 469.80673828125003 }, { "x": 98.57631835937501, "y": 462.92568359375 }, { "x": 105.18115234375, "y": 458.41264648437505 }, { "x": 109.16038818359375, "y": 458.739990234375 }, { "x": 108.09234008789063, "y": 465.194580078125 }, { "x": 102.31083374023439, "y": 469.62919921875005 }, { "x": 270.50341796875, "y": 452.41850585937505 }, { "x": 269.75166015625, "y": 445.77866210937503 }, { "x": 276.8872314453125, "y": 448.32138671875003 }, { "x": 280.811181640625, "y": 453.39726562500005 }, { "x": 273.1883544921875, "y": 455.084716796875 }, { "x": 266.115087890625, "y": 448.37333984375005 }, { "x": 263.9537109375, "y": 453.051904296875 }, { "x": 260.52519531250005, "y": 443.41679687500005 }, { "x": 268.49140625, "y": 444.09257812500005 }, { "x": 263.7128662109375, "y": 447.227734375 }, { "x": 244.7399658203125, "y": 442.45478515625 }, { "x": 243.8703369140625, "y": 435.830224609375 }, { "x": 249.76630859375, "y": 436.62773437500005 }, { "x": 253.3765625, "y": 442.78291015625 }, { "x": 57.04063720703125, "y": 431.93002929687503 }, { "x": 63.383218383789064, "y": 431.47026367187505 }, { "x": 60.8826904296875, "y": 436.31303710937505 }, { "x": 214.4146240234375, "y": 430.297607421875 }, { "x": 209.60039062500002, "y": 433.06650390625003 }, { "x": 218.8953369140625, "y": 426.93320312500003 }, { "x": 226.3365234375, "y": 426.357421875 }, { "x": 223.64478759765626, "y": 432.79716796875005 }, { "x": 40.13863525390625, "y": 418.86787109375 }, { "x": 42.011041259765626, "y": 424.067822265625 }, { "x": 53.38778381347657, "y": 403.83261718750003 }, { "x": 57.235009765625, "y": 402.12382812500005 }, { "x": 61.84989929199219, "y": 408.21635742187505 }, { "x": 80.48408203125001, "y": 314.260791015625 }, { "x": 83.52383422851562, "y": 314.1876708984375 }, { "x": 81.64896850585939, "y": 304.26474609375003 }, { "x": 86.52258911132813, "y": 306.70419921875003 }, { "x": 61.0306884765625, "y": 289.0470458984375 }, { "x": 67.6993408203125, "y": 288.35634765625 }, { "x": 70.83792724609376, "y": 291.765771484375 }, { "x": 63.38783874511719, "y": 291.702783203125 }, { "x": 742.6208984375, "y": 159.0694091796875 }, { "x": 485.88461914062503, "y": 86.90963134765626 }, { "x": 491.974072265625, "y": 82.05401000976562 }, { "x": 494.7328125, "y": 83.55985717773439 }, { "x": 488.234619140625, "y": 88.07301025390625 }, { "x": 92.2264892578125, "y": 31.026450347900393 }, { "x": 98.42210083007814, "y": 32.930233764648435 }];
const uaeData = [{ "x": 695.439990234375, "y": 279.6800048828125 }, { "x": 698.1244140625, "y": 287.149365234375 }, { "x": 693.75478515625, "y": 293.2703369140625 }, { "x": 690.59912109375, "y": 300.3108154296875 }, { "x": 690.2436035156251, "y": 307.87985839843753 }, { "x": 691.3793457031251, "y": 315.71066894531253 }, { "x": 691.5235351562501, "y": 323.672265625 }, { "x": 696.9235351562501, "y": 329.27587890625 }, { "x": 696.624267578125, "y": 337.241845703125 }, { "x": 693.409716796875, "y": 344.49052734375005 }, { "x": 689.569482421875, "y": 351.50998535156253 }, { "x": 691.39892578125, "y": 357.5432861328125 }, { "x": 699.2193359375001, "y": 359.25192871093753 }, { "x": 706.8584960937501, "y": 357.8562744140625 }, { "x": 714.2587890625, "y": 357.515283203125 }, { "x": 718.039208984375, "y": 364.15678710937505 }, { "x": 720.19921875, "y": 371.83681640625 }, { "x": 724.063232421875, "y": 378.847314453125 }, { "x": 721.4920410156251, "y": 384.3115966796875 }, { "x": 713.749560546875, "y": 386.3279052734375 }, { "x": 706.3406738281251, "y": 389.35881347656255 }, { "x": 698.931787109375, "y": 392.3897216796875 }, { "x": 691.69091796875, "y": 391.42612304687503 }, { "x": 684.4253906250001, "y": 391.36467285156255 }, { "x": 676.500634765625, "y": 390.54638671875 }, { "x": 668.560205078125, "y": 391.1762939453125 }, { "x": 661.255517578125, "y": 394.387451171875 }, { "x": 654.111474609375, "y": 397.946923828125 }, { "x": 646.444482421875, "y": 400.15817871093753 }, { "x": 644.0883300781251, "y": 405.54416503906253 }, { "x": 650.276611328125, "y": 410.44797363281253 }, { "x": 654.964892578125, "y": 416.51630859375 }, { "x": 655.609521484375, "y": 424.48637695312505 }, { "x": 655.917138671875, "y": 432.4853515625 }, { "x": 652.1570800781251, "y": 439.448974609375 }, { "x": 647.8117187500001, "y": 446.161865234375 }, { "x": 645.4926269531251, "y": 453.78618164062505 }, { "x": 643.60146484375, "y": 461.564453125 }, { "x": 641.4232910156251, "y": 469.21586914062505 }, { "x": 636.3991210937501, "y": 475.425 }, { "x": 631.5458984375, "y": 481.76860351562505 }, { "x": 629.27080078125, "y": 489.41069335937505 }, { "x": 627.774755859375, "y": 497.27451171875003 }, { "x": 626.1393554687501, "y": 505.10205078125 }, { "x": 623.607958984375, "y": 512.6961425781251 }, { "x": 619.921728515625, "y": 519.7748046875 }, { "x": 615.9596679687501, "y": 526.73037109375 }, { "x": 611.997607421875, "y": 533.6859863281251 }, { "x": 608.329443359375, "y": 540.7665527343751 }, { "x": 606.06865234375, "y": 548.445556640625 }, { "x": 603.9701660156251, "y": 556.157470703125 }, { "x": 603.68271484375, "y": 564.133349609375 }, { "x": 604.0037109375, "y": 572.1317871093751 }, { "x": 604.32470703125, "y": 580.130224609375 }, { "x": 604.204248046875, "y": 588.1227539062501 }, { "x": 603.67001953125, "y": 596.109765625 }, { "x": 603.1357421875, "y": 604.096826171875 }, { "x": 600.3375976562501, "y": 611.229248046875 }, { "x": 595.4606445312501, "y": 617.577001953125 }, { "x": 589.209375, "y": 621.262744140625 }, { "x": 581.27255859375, "y": 620.22080078125 }, { "x": 573.335791015625, "y": 619.1789062500001 }, { "x": 565.40029296875, "y": 618.1269042968751 }, { "x": 557.46591796875, "y": 617.0669921875 }, { "x": 549.531494140625, "y": 616.0070312500001 }, { "x": 541.5966308593751, "y": 614.950732421875 }, { "x": 533.66171875, "y": 613.894775390625 }, { "x": 525.72685546875, "y": 612.83876953125 }, { "x": 517.79189453125, "y": 611.7828125 }, { "x": 509.85698242187505, "y": 610.72685546875 }, { "x": 501.92236328125, "y": 609.6684082031251 }, { "x": 493.98798828125, "y": 608.60849609375 }, { "x": 486.05356445312503, "y": 607.5485351562501 }, { "x": 478.11865234375, "y": 606.49248046875 }, { "x": 470.183740234375, "y": 605.4364746093751 }, { "x": 462.2490234375, "y": 604.379248046875 }, { "x": 454.314599609375, "y": 603.3192871093751 }, { "x": 446.38022460937503, "y": 602.259375 }, { "x": 438.445458984375, "y": 601.2020996093751 }, { "x": 430.51054687500005, "y": 600.146142578125 }, { "x": 422.57561035156255, "y": 599.0900390625001 }, { "x": 414.64121093750003, "y": 598.030078125 }, { "x": 406.7068115234375, "y": 596.9701660156251 }, { "x": 398.77226562500005, "y": 595.911767578125 }, { "x": 390.83732910156255, "y": 594.85576171875 }, { "x": 382.9024169921875, "y": 593.7998046875 }, { "x": 374.96787109375003, "y": 592.7409179687501 }, { "x": 367.0334716796875, "y": 591.68095703125 }, { "x": 359.0990234375, "y": 590.62138671875 }, { "x": 351.1640869140625, "y": 589.5654296875 }, { "x": 343.22917480468755, "y": 588.509423828125 }, { "x": 335.29428710937503, "y": 587.453466796875 }, { "x": 327.359375, "y": 586.397509765625 }, { "x": 319.4244384765625, "y": 585.3415039062501 }, { "x": 311.4899169921875, "y": 584.2824218750001 }, { "x": 303.55551757812503, "y": 583.2224609375 }, { "x": 295.621044921875, "y": 582.163134765625 }, { "x": 287.6861083984375, "y": 581.1071289062501 }, { "x": 279.75119628906253, "y": 580.051171875 }, { "x": 271.816552734375, "y": 578.993212890625 }, { "x": 263.8821533203125, "y": 577.9333007812501 }, { "x": 255.94775390625, "y": 576.87333984375 }, { "x": 248.01286621093752, "y": 575.816796875 }, { "x": 240.077978515625, "y": 574.760791015625 }, { "x": 232.14357910156252, "y": 573.70126953125 }, { "x": 224.21097412109376, "y": 572.6279296875 }, { "x": 216.2783935546875, "y": 571.554541015625 }, { "x": 208.39122314453127, "y": 570.27978515625 }, { "x": 202.04509277343752, "y": 565.7578125 }, { "x": 197.10378417968752, "y": 559.46005859375 }, { "x": 192.18804931640625, "y": 553.1423828125 }, { "x": 187.29774169921876, "y": 546.80498046875 }, { "x": 182.40107421875, "y": 540.4724609375 }, { "x": 177.50567626953125, "y": 534.138916015625 }, { "x": 172.615380859375, "y": 527.80146484375 }, { "x": 167.70399169921876, "y": 521.48037109375 }, { "x": 162.78634033203124, "y": 515.164111328125 }, { "x": 157.92008056640626, "y": 508.80820312500003 }, { "x": 153.053857421875, "y": 502.452294921875 }, { "x": 148.18760986328127, "y": 496.09638671875 }, { "x": 143.27467041015626, "y": 489.776513671875 }, { "x": 138.36632080078124, "y": 483.453076171875 }, { "x": 133.50006103515625, "y": 477.09716796875 }, { "x": 128.59927978515626, "y": 470.76787109375005 }, { "x": 123.67877197265625, "y": 464.45380859375 }, { "x": 118.81251220703126, "y": 458.097900390625 }, { "x": 113.93363037109376, "y": 451.751708984375 }, { "x": 109.03624267578125, "y": 445.41972656250005 }, { "x": 104.16337280273439, "y": 439.06884765625 }, { "x": 99.29158935546876, "y": 432.7171875 }, { "x": 94.39420776367187, "y": 426.385205078125 }, { "x": 89.5142333984375, "y": 420.03977050781253 }, { "x": 84.64797363281251, "y": 413.6838623046875 }, { "x": 79.7521728515625, "y": 407.35068359375003 }, { "x": 74.86514892578126, "y": 401.01079101562505 }, { "x": 69.99889526367187, "y": 394.65488281250003 }, { "x": 65.11595764160157, "y": 388.3117919921875 }, { "x": 60.22654724121094, "y": 381.97368164062505 }, { "x": 57.192083740234374, "y": 374.6929931640625 }, { "x": 57.16392822265625, "y": 366.71250000000003 }, { "x": 57.28006286621094, "y": 358.70939941406255 }, { "x": 57.227578735351564, "y": 351.01950683593753 }, { "x": 59.68215637207032, "y": 343.743896484375 }, { "x": 57.91461181640625, "y": 336.143505859375 }, { "x": 60.653393554687504, "y": 332.134228515625 }, { "x": 64.67548522949218, "y": 338.99162597656255 }, { "x": 65.20006103515625, "y": 346.94580078125 }, { "x": 65.8084503173828, "y": 354.901025390625 }, { "x": 70.50281677246093, "y": 355.967431640625 }, { "x": 72.18762817382813, "y": 348.96640625000003 }, { "x": 74.91207885742188, "y": 356.4578857421875 }, { "x": 79.55951538085938, "y": 355.0691650390625 }, { "x": 83.00704956054688, "y": 347.9866455078125 }, { "x": 88.0140380859375, "y": 351.10014648437505 }, { "x": 87.9275634765625, "y": 359.006103515625 }, { "x": 87.05354614257813, "y": 366.9357421875 }, { "x": 88.44421997070313, "y": 374.79758300781253 }, { "x": 89.09927978515626, "y": 382.72744140625 }, { "x": 90.8911865234375, "y": 390.39841308593753 }, { "x": 96.04616088867188, "y": 395.38835449218755 }, { "x": 104.02169189453126, "y": 395.73422851562503 }, { "x": 110.45722045898438, "y": 400.28178710937505 }, { "x": 113.35794067382812, "y": 396.2208984375 }, { "x": 121.33787841796875, "y": 396.53496093750005 }, { "x": 128.37701416015625, "y": 399.110546875 }, { "x": 135.98636474609376, "y": 400.00961914062503 }, { "x": 143.54796142578124, "y": 399.2720458984375 }, { "x": 151.02841796875, "y": 398.95000000000005 }, { "x": 158.72098388671876, "y": 397.44951171875005 }, { "x": 165.824365234375, "y": 394.05253906250005 }, { "x": 173.5410400390625, "y": 392.86210937500005 }, { "x": 179.72696533203126, "y": 387.93115234375 }, { "x": 187.16624755859377, "y": 385.18430175781253 }, { "x": 192.43184814453127, "y": 379.7046142578125 }, { "x": 198.87087402343752, "y": 375.129296875 }, { "x": 205.60885009765627, "y": 370.9328125 }, { "x": 208.720068359375, "y": 364.535791015625 }, { "x": 213.6182861328125, "y": 360.4475341796875 }, { "x": 219.20096435546876, "y": 365.936669921875 }, { "x": 224.64272460937502, "y": 371.07846679687503 }, { "x": 231.8831787109375, "y": 370.0281982421875 }, { "x": 239.6714599609375, "y": 371.7590576171875 }, { "x": 247.2398681640625, "y": 369.44011230468755 }, { "x": 255.020751953125, "y": 370.9375732421875 }, { "x": 262.99553222656255, "y": 371.631005859375 }, { "x": 270.6325927734375, "y": 369.69138183593753 }, { "x": 275.9648193359375, "y": 369.87900390625003 }, { "x": 282.5256591796875, "y": 374.34782714843755 }, { "x": 289.87587890625, "y": 372.23544921875003 }, { "x": 297.1544189453125, "y": 373.893798828125 }, { "x": 294.0094482421875, "y": 367.24077148437505 }, { "x": 301.46201171875003, "y": 368.2581787109375 }, { "x": 307.3124267578125, "y": 373.6923828125 }, { "x": 312.98388671875, "y": 378.38571777343753 }, { "x": 320.9380126953125, "y": 378.4395751953125 }, { "x": 328.77597656250003, "y": 376.81345214843753 }, { "x": 336.61396484375, "y": 375.18730468750005 }, { "x": 343.24594726562503, "y": 378.0322509765625 }, { "x": 350.6753662109375, "y": 378.7025146484375 }, { "x": 357.34055175781253, "y": 382.65205078125 }, { "x": 363.35556640625003, "y": 386.7857666015625 }, { "x": 370.81572265625005, "y": 386.3240478515625 }, { "x": 377.98203125000003, "y": 383.3111083984375 }, { "x": 385.6983154296875, "y": 384.25139160156255 }, { "x": 393.703125, "y": 384.28635253906253 }, { "x": 401.705712890625, "y": 384.2869384765625 }, { "x": 408.903564453125, "y": 381.38115234375005 }, { "x": 415.93796386718753, "y": 377.56076660156253 }, { "x": 423.80498046875005, "y": 376.1552734375 }, { "x": 431.372265625, "y": 373.789697265625 }, { "x": 438.892333984375, "y": 371.33916015625005 }, { "x": 445.95366210937505, "y": 367.933056640625 }, { "x": 450.7978515625, "y": 361.75778808593753 }, { "x": 458.2189453125, "y": 359.0281982421875 }, { "x": 465.23076171875005, "y": 355.4318359375 }, { "x": 471.62900390625003, "y": 350.99191894531253 }, { "x": 478.69130859375, "y": 351.37109375 }, { "x": 484.769921875, "y": 348.79375000000005 }, { "x": 490.314599609375, "y": 343.136669921875 }, { "x": 494.029296875, "y": 336.06022949218755 }, { "x": 496.57871093750003, "y": 328.75310058593755 }, { "x": 498.44990234375, "y": 322.600048828125 }, { "x": 501.63955078125, "y": 321.87734375 }, { "x": 502.9076171875, "y": 319.4266845703125 }, { "x": 504.82392578125, "y": 317.528125 }, { "x": 510.165966796875, "y": 319.1481201171875 }, { "x": 505.15512695312503, "y": 314.7247802734375 }, { "x": 497.54365234375, "y": 312.79443359375 }, { "x": 490.92978515625003, "y": 308.2849853515625 }, { "x": 488.76435546875, "y": 305.18674316406253 }, { "x": 493.55278320312505, "y": 305.6688232421875 }, { "x": 496.89584960937503, "y": 300.22041015625 }, { "x": 499.92778320312505, "y": 307.51682128906253 }, { "x": 506.07133789062505, "y": 311.819970703125 }, { "x": 506.97724609375, "y": 309.2309814453125 }, { "x": 513.25810546875, "y": 307.4773681640625 }, { "x": 517.1556152343751, "y": 300.6043212890625 }, { "x": 517.5577148437501, "y": 294.56171875 }, { "x": 520.5071777343751, "y": 290.225732421875 }, { "x": 524.7173828125001, "y": 284.2344482421875 }, { "x": 522.098681640625, "y": 277.25644531250003 }, { "x": 520.687939453125, "y": 270.617529296875 }, { "x": 526.855517578125, "y": 265.66398925781255 }, { "x": 532.432763671875, "y": 262.22648925781255 }, { "x": 539.65048828125, "y": 261.699072265625 }, { "x": 540.384765625, "y": 255.6286376953125 }, { "x": 547.27841796875, "y": 251.55971679687502 }, { "x": 554.172021484375, "y": 247.4907958984375 }, { "x": 560.6813476562501, "y": 242.83696289062502 }, { "x": 566.718896484375, "y": 237.59423828125 }, { "x": 573.859619140625, "y": 234.1528076171875 }, { "x": 578.156005859375, "y": 239.19140625 }, { "x": 580.778369140625, "y": 246.75456542968752 }, { "x": 583.400732421875, "y": 254.317724609375 }, { "x": 586.023046875, "y": 261.8808837890625 }, { "x": 588.64541015625, "y": 269.44404296875 }, { "x": 591.2677734375001, "y": 277.0072265625 }, { "x": 593.8900878906251, "y": 284.5703857421875 }, { "x": 596.8446777343751, "y": 291.997607421875 }, { "x": 603.373876953125, "y": 295.80710449218753 }, { "x": 611.3612792968751, "y": 295.74094238281253 }, { "x": 619.359765625, "y": 295.42099609375003 }, { "x": 627.358251953125, "y": 295.10104980468753 }, { "x": 635.35673828125, "y": 294.7811279296875 }, { "x": 643.1216796875001, "y": 293.022705078125 }, { "x": 650.240625, "y": 289.42275390625 }, { "x": 657.2510742187501, "y": 285.5835205078125 }, { "x": 664.6609375, "y": 282.5554443359375 }, { "x": 672.070947265625, "y": 279.527294921875 }, { "x": 679.240771484375, "y": 277.8779541015625 }, { "x": 686.9909179687501, "y": 279.8813720703125 }, { "x": 694.9474609375001, "y": 279.783740234375 }, { "x": 368.5340087890625, "y": 364.9455078125 }, { "x": 375.4307373046875, "y": 361.1246337890625 }, { "x": 381.8889404296875, "y": 356.481640625 }, { "x": 389.5362060546875, "y": 356.7075927734375 }, { "x": 396.22116699218753, "y": 352.457177734375 }, { "x": 401.43283691406253, "y": 351.13425292968753 }, { "x": 404.9342041015625, "y": 357.08671875000005 }, { "x": 412.412548828125, "y": 359.58652343750003 }, { "x": 417.745361328125, "y": 364.544189453125 }, { "x": 414.18010253906255, "y": 370.5227294921875 }, { "x": 406.33115234375003, "y": 371.285107421875 }, { "x": 401.30197753906253, "y": 366.6636962890625 }, { "x": 398.50053710937505, "y": 369.47844238281255 }, { "x": 391.32260742187503, "y": 372.69108886718755 }, { "x": 383.464599609375, "y": 372.06296386718753 }, { "x": 376.18503417968753, "y": 368.76713867187505 }, { "x": 450.613427734375, "y": 353.956494140625 }, { "x": 443.16474609375, "y": 351.12473144531253 }, { "x": 439.058984375, "y": 344.984033203125 }, { "x": 444.819775390625, "y": 341.00180664062503 }, { "x": 450.31528320312503, "y": 346.81491699218753 }, { "x": 453.28989257812503, "y": 353.8157470703125 }, { "x": 211.32203369140626, "y": 334.20859375000003 }, { "x": 218.0550537109375, "y": 335.1988525390625 }, { "x": 219.50162353515626, "y": 342.866943359375 }, { "x": 214.5999755859375, "y": 349.06169433593755 }, { "x": 208.91083984375, "y": 350.59208984375005 }, { "x": 205.472265625, "y": 343.4290771484375 }, { "x": 320.45595703125, "y": 350.1128662109375 }, { "x": 313.8872314453125, "y": 347.26970214843755 }, { "x": 307.1047607421875, "y": 348.422119140625 }, { "x": 300.358642578125, "y": 347.61552734375005 }, { "x": 306.1807861328125, "y": 345.3970458984375 }, { "x": 313.5288330078125, "y": 343.0159912109375 }, { "x": 320.739697265625, "y": 339.6458251953125 }, { "x": 326.80466308593753, "y": 342.284814453125 }, { "x": 327.8099365234375, "y": 335.459619140625 }, { "x": 332.29387207031255, "y": 328.8284423828125 }, { "x": 336.6531494140625, "y": 329.85446777343753 }, { "x": 339.37802734375003, "y": 335.826123046875 }, { "x": 334.4963623046875, "y": 341.3843505859375 }, { "x": 327.3567626953125, "y": 344.84843750000005 }, { "x": 322.1709228515625, "y": 349.39377441406253 }, { "x": 475.57133789062505, "y": 319.9591064453125 }, { "x": 477.000146484375, "y": 314.2266357421875 }, { "x": 482.23798828125, "y": 308.2399169921875 }, { "x": 483.39604492187505, "y": 314.35507812500003 }, { "x": 490.07187500000003, "y": 318.65185546875 }, { "x": 494.37578125000005, "y": 324.3213134765625 }, { "x": 486.62387695312503, "y": 323.51462402343753 }, { "x": 461.79296875, "y": 347.2971923828125 }, { "x": 455.1564453125, "y": 345.1882568359375 }, { "x": 451.20615234375003, "y": 339.54826660156255 }, { "x": 457.383984375, "y": 335.3599853515625 }, { "x": 462.037548828125, "y": 341.163720703125 }, { "x": 474.08969726562503, "y": 334.161328125 }, { "x": 472.351513671875, "y": 341.6182861328125 }, { "x": 467.408837890625, "y": 337.73994140625 }, { "x": 469.4994140625, "y": 335.15959472656255 }, { "x": 468.339111328125, "y": 330.877587890625 }, { "x": 170.65887451171875, "y": 306.8313232421875 }, { "x": 171.34376220703126, "y": 313.84238281250003 }, { "x": 165.17266845703125, "y": 313.09494628906253 }, { "x": 166.55247802734377, "y": 306.25253906250003 }, { "x": 125.05816650390625, "y": 355.57451171875005 }, { "x": 120.83144531250001, "y": 357.81103515625 }, { "x": 81.63942260742188, "y": 295.72873535156253 }, { "x": 79.81559448242189, "y": 298.85849609375003 }, { "x": 77.86852416992187, "y": 295.08530273437503 }, { "x": 284.981689453125, "y": 249.300146484375 }, { "x": 281.96628417968753, "y": 249.5789306640625 }, { "x": 458.77431640625, "y": 189.3244384765625 }, { "x": 456.49082031250003, "y": 192.87999267578127 }, { "x": 398.94677734375, "y": 596.1991699218751 }, { "x": 391.026123046875, "y": 595.138818359375 }, { "x": 383.10544433593753, "y": 594.078466796875 }, { "x": 375.184765625, "y": 593.018115234375 }, { "x": 367.264111328125, "y": 591.9577148437501 }, { "x": 359.34343261718755, "y": 590.89736328125 }, { "x": 351.42277832031255, "y": 589.83701171875 }, { "x": 343.502099609375, "y": 588.77666015625 }, { "x": 335.5814453125, "y": 587.71630859375 }, { "x": 327.6607666015625, "y": 586.655908203125 }, { "x": 319.74072265625, "y": 585.5910156250001 }, { "x": 311.82089843750003, "y": 584.524267578125 }, { "x": 303.90109863281253, "y": 583.45751953125 }, { "x": 295.98129882812503, "y": 582.390771484375 }, { "x": 288.061474609375, "y": 581.324072265625 }, { "x": 280.1416748046875, "y": 580.25732421875 }, { "x": 272.22185058593755, "y": 579.190576171875 }, { "x": 264.3021240234375, "y": 578.123291015625 }, { "x": 256.3832763671875, "y": 577.0494140625 }, { "x": 248.4644287109375, "y": 575.9755859375 }, { "x": 240.5457275390625, "y": 574.900732421875 }, { "x": 232.62797851562502, "y": 573.81865234375 }, { "x": 224.71025390625002, "y": 572.736572265625 }, { "x": 216.79396972656252, "y": 571.6439941406251 }, { "x": 208.88203125, "y": 570.520556640625 }, { "x": 202.27774658203126, "y": 566.3488281250001 }, { "x": 197.2526611328125, "y": 560.137548828125 }, { "x": 192.35074462890626, "y": 553.82626953125 }, { "x": 187.4551513671875, "y": 547.51005859375 }, { "x": 182.56337890625002, "y": 541.19091796875 }, { "x": 177.67562255859377, "y": 534.8686035156251 }, { "x": 172.78865966796874, "y": 528.545703125 }, { "x": 167.9017333984375, "y": 522.222802734375 }, { "x": 163.019482421875, "y": 515.8962890625 }, { "x": 158.1396240234375, "y": 509.56791992187505 }, { "x": 153.261181640625, "y": 503.2384765625 }, { "x": 148.38232421875, "y": 496.909326171875 }, { "x": 143.5025146484375, "y": 490.58090820312503 }, { "x": 138.61781005859376, "y": 484.25625 }, { "x": 133.7285888671875, "y": 477.93510742187505 }, { "x": 128.84061279296876, "y": 471.613037109375 }, { "x": 123.95632324218751, "y": 465.288037109375 }, { "x": 119.0759765625, "y": 458.96005859375003 }, { "x": 114.19887084960938, "y": 452.629541015625 }, { "x": 109.32431030273438, "y": 446.2970703125 }, { "x": 104.45220336914063, "y": 439.96274414062503 }, { "x": 99.5830078125, "y": 433.626171875 }, { "x": 94.71840820312501, "y": 427.286083984375 }, { "x": 89.85454711914063, "y": 420.9453857421875 }, { "x": 84.9927978515625, "y": 414.60307617187505 }, { "x": 80.13581542968751, "y": 408.2571044921875 }, { "x": 75.28335571289062, "y": 401.90771484375 }, { "x": 70.43717346191406, "y": 395.55351562500005 }, { "x": 65.59988098144532, "y": 389.19255371093755 }, { "x": 60.786074829101565, "y": 382.8138427734375 }, { "x": 57.06759338378907, "y": 375.9541748046875 }, { "x": 56.865115356445315, "y": 367.96542968750003 }, { "x": 56.662637329101564, "y": 359.9766357421875 }, { "x": 56.46015930175781, "y": 351.98789062500003 }, { "x": 59.44541625976563, "y": 344.73051757812505 }, { "x": 57.961474609375, "y": 336.96184082031255 }, { "x": 60.03280029296875, "y": 330.610107421875 }, { "x": 64.16247863769532, "y": 337.333984375 }, { "x": 65.45625915527344, "y": 345.12841796875 }, { "x": 65.89610900878907, "y": 353.10722656250005 }, { "x": 69.69352722167969, "y": 356.234326171875 }, { "x": 72.0984130859375, "y": 348.70517578125003 }, { "x": 75.09802856445313, "y": 356.02573242187503 }, { "x": 79.74369506835939, "y": 353.79306640625003 }, { "x": 83.8200439453125, "y": 347.0255859375 }, { "x": 88.3390869140625, "y": 352.06584472656255 }, { "x": 87.99993286132813, "y": 360.0071044921875 }, { "x": 87.55426025390625, "y": 367.96379394531255 }, { "x": 88.88741455078126, "y": 375.8369873046875 }, { "x": 89.49332275390626, "y": 383.79150390625 }, { "x": 91.52892456054688, "y": 391.46281738281255 }, { "x": 97.76081542968751, "y": 395.2007080078125 }, { "x": 105.64119262695313, "y": 396.1739013671875 }, { "x": 111.34087524414063, "y": 398.8521240234375 }, { "x": 116.6864013671875, "y": 396.23955078125005 }, { "x": 124.65400390625001, "y": 396.56962890625005 }, { "x": 131.73172607421876, "y": 400.1248779296875 }, { "x": 139.6724609375, "y": 399.42062988281253 }, { "x": 147.65186767578126, "y": 398.98723144531255 }, { "x": 155.59501953125002, "y": 398.174072265625 }, { "x": 162.74464111328126, "y": 394.709375 }, { "x": 170.6008544921875, "y": 393.6357666015625 }, { "x": 177.08450927734376, "y": 389.17453613281253 }, { "x": 184.45218505859376, "y": 386.18027343750003 }, { "x": 190.1638916015625, "y": 380.89226074218755 }, { "x": 196.86968994140625, "y": 376.60979003906255 }, { "x": 203.242041015625, "y": 371.80539550781253 }, { "x": 208.19873046875, "y": 366.88547363281253 }, { "x": 211.1812744140625, "y": 360.1413818359375 }, { "x": 217.72152099609377, "y": 363.7301025390625 }, { "x": 222.7255859375, "y": 369.9552001953125 }, { "x": 230.160595703125, "y": 369.55852050781255 }, { "x": 237.943212890625, "y": 371.32236328125003 }, { "x": 245.6276611328125, "y": 369.58469238281253 }, { "x": 253.5025390625, "y": 370.4677734375 }, { "x": 261.4525390625, "y": 371.269921875 }, { "x": 269.213623046875, "y": 369.9192626953125 }, { "x": 275.28264160156255, "y": 368.74851074218753 }, { "x": 281.6014404296875, "y": 373.58488769531255 }, { "x": 289.0529052734375, "y": 371.639794921875 }, { "x": 295.50087890625, "y": 373.3611572265625 }, { "x": 295.05478515625003, "y": 366.702587890625 }, { "x": 302.44919433593753, "y": 368.86679687500003 }, { "x": 308.10458984375003, "y": 374.47587890625005 }, { "x": 314.203271484375, "y": 378.239208984375 }, { "x": 322.1564208984375, "y": 377.87248535156255 }, { "x": 329.990234375, "y": 376.2959228515625 }, { "x": 337.829248046875, "y": 374.7444580078125 }, { "x": 344.308056640625, "y": 378.588330078125 }, { "x": 351.97343750000005, "y": 379.19650878906253 }, { "x": 358.3257080078125, "y": 383.7822998046875 }, { "x": 365.063427734375, "y": 386.017333984375 }, { "x": 372.715771484375, "y": 385.81389160156255 }, { "x": 379.84995117187503, "y": 382.95556640625 }, { "x": 387.71359863281253, "y": 384.17070312500005 }, { "x": 395.7031982421875, "y": 384.23642578125003 }, { "x": 403.669384765625, "y": 383.67314453125005 }, { "x": 410.70769042968755, "y": 380.02067871093755 }, { "x": 418.055419921875, "y": 376.94438476562505 }, { "x": 425.850830078125, "y": 375.22531738281253 }, { "x": 433.396875, "y": 372.627099609375 }, { "x": 441.05766601562505, "y": 370.4447021484375 }, { "x": 447.566064453125, "y": 365.934716796875 }, { "x": 452.934033203125, "y": 360.33598632812505 }, { "x": 460.532470703125, "y": 357.88310546875005 }, { "x": 467.21337890625, "y": 353.52556152343755 }, { "x": 473.865625, "y": 349.5522705078125 }, { "x": 481.2337890625, "y": 351.57023925781255 }, { "x": 487.09262695312503, "y": 346.13774414062505 }, { "x": 491.707666015625, "y": 339.6513671875 }, { "x": 495.265869140625, "y": 332.49697265625 }, { "x": 496.153515625, "y": 324.71823730468753 }, { "x": 499.636474609375, "y": 320.8209716796875 }, { "x": 502.32866210937505, "y": 319.453173828125 }, { "x": 504.8341796875, "y": 317.324755859375 }, { "x": 509.60410156250003, "y": 317.9000244140625 }, { "x": 502.86679687500003, "y": 314.7290283203125 }, { "x": 495.493115234375, "y": 311.87236328125 }, { "x": 488.60029296875, "y": 307.84482421875003 }, { "x": 490.20126953125003, "y": 303.4680419921875 }, { "x": 494.6078125, "y": 301.210986328125 }, { "x": 498.622705078125, "y": 304.99501953125 }, { "x": 503.774169921875, "y": 310.962109375 }, { "x": 504.876123046875, "y": 309.03740234375 }, { "x": 512.231884765625, "y": 308.518701171875 }, { "x": 516.2203125000001, "y": 301.60068359375003 }, { "x": 517.7869628906251, "y": 295.10532226562503 }, { "x": 519.339013671875, "y": 290.57382812500003 }, { "x": 523.594677734375, "y": 284.23496093750003 }, { "x": 521.57197265625, "y": 277.0892822265625 }, { "x": 520.989697265625, "y": 269.7227294921875 }, { "x": 527.1330078125, "y": 264.6216552734375 }, { "x": 532.9821289062501, "y": 262.281591796875 }, { "x": 539.632421875, "y": 260.39912109375 }, { "x": 541.418798828125, "y": 254.65141601562502 }, { "x": 548.2851074218751, "y": 250.56318359375 }, { "x": 555.0644042968751, "y": 246.333447265625 }, { "x": 561.51357421875, "y": 241.6192138671875 }, { "x": 567.745751953125, "y": 236.621044921875 }, { "x": 574.945849609375, "y": 233.2150634765625 }, { "x": 581.425537109375, "y": 228.90263671875002 }, { "x": 586.241259765625, "y": 225.1750244140625 }, { "x": 591.7283203125, "y": 219.64134521484377 }, { "x": 596.840478515625, "y": 213.49942626953126 }, { "x": 601.84111328125, "y": 207.26616210937502 }, { "x": 606.755029296875, "y": 200.96436767578126 }, { "x": 611.54482421875, "y": 194.5678466796875 }, { "x": 614.58798828125, "y": 187.39725341796876 }, { "x": 620.890625, "y": 187.16370849609376 }, { "x": 621.3685546875, "y": 194.56022949218752 }, { "x": 624.387744140625, "y": 192.0843505859375 }, { "x": 621.4813964843751, "y": 184.69019775390626 }, { "x": 622.7818359375, "y": 177.77779541015627 }, { "x": 628.5365234375, "y": 172.82384033203127 }, { "x": 632.798974609375, "y": 168.2575927734375 }, { "x": 638.2750000000001, "y": 162.68162841796877 }, { "x": 643.547998046875, "y": 161.00394287109376 }, { "x": 647.3602050781251, "y": 154.34782714843752 }, { "x": 649.32666015625, "y": 147.4163818359375 }, { "x": 652.8015625, "y": 140.2407958984375 }, { "x": 656.3400390625001, "y": 133.146826171875 }, { "x": 658.8566406250001, "y": 134.12470703125 }, { "x": 659.0185058593751, "y": 140.61607666015624 }, { "x": 666.8438476562501, "y": 139.1939453125 }, { "x": 671.3510253906251, "y": 133.23406982421875 }, { "x": 675.54248046875, "y": 126.539599609375 }, { "x": 681.750048828125, "y": 121.58187255859376 }, { "x": 687.6609375, "y": 116.60339965820313 }, { "x": 694.2571777343751, "y": 112.49872436523438 }, { "x": 701.31279296875, "y": 108.85001220703126 }, { "x": 707.4219726562501, "y": 103.76357421875001 }, { "x": 712.4993652343751, "y": 97.59451293945312 }, { "x": 717.927392578125, "y": 91.73875732421875 }, { "x": 717.301416015625, "y": 96.63453369140625 }, { "x": 718.809375, "y": 95.63187255859376 }, { "x": 720.9447753906251, "y": 88.01497802734376 }, { "x": 726.451904296875, "y": 82.23104858398438 }, { "x": 730.679833984375, "y": 75.53462524414063 }, { "x": 727.6361816406251, "y": 76.829638671875 }, { "x": 729.5836914062501, "y": 71.44843750000001 }, { "x": 732.940576171875, "y": 64.20371704101564 }, { "x": 735.205126953125, "y": 56.54856872558594 }, { "x": 739.2064941406251, "y": 50.69002380371094 }, { "x": 747.00625, "y": 48.962371826171875 }, { "x": 751.9705566406251, "y": 53.570962524414064 }, { "x": 753.0447265625, "y": 61.40843811035157 }, { "x": 752.0202148437501, "y": 69.33140869140625 }, { "x": 751.7144531250001, "y": 77.3146728515625 }, { "x": 749.9835937500001, "y": 85.05550537109376 }, { "x": 747.197314453125, "y": 92.31922607421875 }, { "x": 751.1070312500001, "y": 99.24688110351563 }, { "x": 747.809814453125, "y": 105.90623168945314 }, { "x": 747.3856933593751, "y": 113.72705688476563 }, { "x": 751.54443359375, "y": 119.26318359375 }, { "x": 756.7453125000001, "y": 124.89760742187501 }, { "x": 764.45634765625, "y": 124.44691162109376 }, { "x": 771.837939453125, "y": 125.75270996093751 }, { "x": 778.22939453125, "y": 129.85457763671877 }, { "x": 780.6540039062501, "y": 137.46739501953124 }, { "x": 781.3147949218751, "y": 145.31329345703125 }, { "x": 780.9508789062501, "y": 153.29578857421876 }, { "x": 781.2049316406251, "y": 161.27620849609374 }, { "x": 781.04619140625, "y": 168.89993896484376 }, { "x": 783.4512695312501, "y": 176.4303955078125 }, { "x": 782.6178710937501, "y": 184.36809082031252 }, { "x": 781.407861328125, "y": 192.26444091796876 }, { "x": 780.8937500000001, "y": 200.23839111328127 }, { "x": 780.6214355468751, "y": 208.22514648437502 }, { "x": 780.41484375, "y": 216.21387939453126 }, { "x": 781.6142089843751, "y": 224.05362548828126 }, { "x": 783.2693847656251, "y": 231.86845703125002 }, { "x": 775.885986328125, "y": 233.58864746093752 }, { "x": 773.442529296875, "y": 240.7164306640625 }, { "x": 770.35302734375, "y": 247.68520507812502 }, { "x": 764.2734375, "y": 252.86306152343752 }, { "x": 757.4461425781251, "y": 256.78630371093755 }, { "x": 750.7814453125001, "y": 260.0354248046875 }, { "x": 746.9325683593751, "y": 267.00048828125 }, { "x": 742.2448242187501, "y": 273.11904296875 }, { "x": 736.8184570312501, "y": 271.1524658203125 }, { "x": 738.999072265625, "y": 263.5130859375 }, { "x": 739.1514648437501, "y": 256.84873046875 }, { "x": 733.171923828125, "y": 251.54931640625 }, { "x": 728.5299804687501, "y": 245.45166015625 }, { "x": 726.57451171875, "y": 237.7276123046875 }, { "x": 720.2367675781251, "y": 233.35805664062502 }, { "x": 712.318017578125, "y": 233.557958984375 }, { "x": 705.33583984375, "y": 237.30888671875002 }, { "x": 699.498828125, "y": 242.7520751953125 }, { "x": 694.96669921875, "y": 249.2959716796875 }, { "x": 694.2859863281251, "y": 257.167626953125 }, { "x": 694.839892578125, "y": 265.1380859375 }, { "x": 694.672021484375, "y": 273.1236083984375 }, { "x": 696.0076171875, "y": 280.761767578125 }, { "x": 697.7554687500001, "y": 288.3327880859375 }, { "x": 693.520166015625, "y": 294.8396728515625 }, { "x": 689.912255859375, "y": 301.90859375 }, { "x": 690.7646484375, "y": 309.6946044921875 }, { "x": 691.3869140625001, "y": 317.6380126953125 }, { "x": 692.848876953125, "y": 324.9127685546875 }, { "x": 697.09169921875, "y": 330.92062988281253 }, { "x": 696.083251953125, "y": 338.829541015625 }, { "x": 692.7227539062501, "y": 346.06760253906253 }, { "x": 689.1593750000001, "y": 353.212060546875 }, { "x": 693.507373046875, "y": 357.8072021484375 }, { "x": 701.3761718750001, "y": 359.168408203125 }, { "x": 708.9268554687501, "y": 356.64453125 }, { "x": 715.98486328125, "y": 358.9751708984375 }, { "x": 718.628662109375, "y": 366.5030029296875 }, { "x": 721.51494140625, "y": 373.9377685546875 }, { "x": 725.1143554687501, "y": 381.0694580078125 }, { "x": 719.03984375, "y": 385.175439453125 }, { "x": 711.4423339843751, "y": 387.6419921875 }, { "x": 703.99560546875, "y": 390.54025878906253 }, { "x": 696.461181640625, "y": 393.1937255859375 }, { "x": 689.2809570312501, "y": 390.56535644531255 }, { "x": 681.405517578125, "y": 391.541748046875 }, { "x": 673.44814453125, "y": 390.9868408203125 }, { "x": 665.633203125, "y": 392.43837890625 }, { "x": 658.5326171875, "y": 396.08781738281255 }, { "x": 651.166064453125, "y": 399.15336914062505 }, { "x": 643.672119140625, "y": 401.52556152343755 }, { "x": 647.1013671875, "y": 408.16008300781255 }, { "x": 653.3783691406251, "y": 413.02529296875 }, { "x": 655.4668945312501, "y": 420.637646484375 }, { "x": 655.76455078125, "y": 428.622265625 }, { "x": 654.45791015625, "y": 436.18852539062505 }, { "x": 650.0402343750001, "y": 442.84750976562503 }, { "x": 646.647998046875, "y": 450.01962890625003 }, { "x": 644.59794921875, "y": 457.743115234375 }, { "x": 642.61572265625, "y": 465.48447265625003 }, { "x": 639.102783203125, "y": 472.506494140625 }, { "x": 633.937646484375, "y": 478.601025390625 }, { "x": 630.3701171875, "y": 485.70283203125 }, { "x": 628.545556640625, "y": 493.47954101562505 }, { "x": 626.979052734375, "y": 501.315380859375 }, { "x": 624.858203125, "y": 509.01523437500003 }, { "x": 621.724267578125, "y": 516.360400390625 }, { "x": 617.965625, "y": 523.4117187500001 }, { "x": 614.021337890625, "y": 530.362109375 }, { "x": 610.187109375, "y": 537.37255859375 }, { "x": 607.2289550781251, "y": 544.78369140625 }, { "x": 605.02451171875, "y": 552.46435546875 }, { "x": 603.802001953125, "y": 560.3443359375 }, { "x": 603.90908203125, "y": 568.3330078125 }, { "x": 604.23134765625, "y": 576.317626953125 }, { "x": 604.30087890625, "y": 584.3078125000001 }, { "x": 603.9596679687501, "y": 592.291162109375 }, { "x": 603.429248046875, "y": 600.2650390625 }, { "x": 602.744287109375, "y": 608.18447265625 }, { "x": 597.904638671875, "y": 614.54345703125 }, { "x": 592.8354003906251, "y": 620.7084472656251 }, { "x": 585.079150390625, "y": 620.86318359375 }, { "x": 577.153857421875, "y": 619.837158203125 }, { "x": 569.230078125, "y": 618.80029296875 }, { "x": 561.3068359375001, "y": 617.7604492187501 }, { "x": 553.38369140625, "y": 616.71826171875 }, { "x": 545.461181640625, "y": 615.672412109375 }, { "x": 537.5385253906251, "y": 614.626611328125 }, { "x": 529.615966796875, "y": 613.578515625 }, { "x": 521.6941894531251, "y": 612.5275390625001 }, { "x": 513.77216796875, "y": 611.4765625 }, { "x": 505.85039062500005, "y": 610.4255859375 }, { "x": 497.928369140625, "y": 609.374609375 }, { "x": 490.00639648437505, "y": 608.323583984375 }, { "x": 482.08457031250003, "y": 607.2726562500001 }, { "x": 474.16259765625, "y": 606.2216308593751 }, { "x": 466.24140625, "y": 605.167041015625 }, { "x": 458.32001953125, "y": 604.11142578125 }, { "x": 450.3986328125, "y": 603.055810546875 }, { "x": 442.47744140625, "y": 602.000244140625 }, { "x": 434.5560546875, "y": 600.94462890625 }, { "x": 426.63486328125003, "y": 599.8890625 }, { "x": 418.71347656250003, "y": 598.8334472656251 }, { "x": 410.7921142578125, "y": 597.77783203125 }, { "x": 402.8709228515625, "y": 596.722265625 }, { "x": 767.943115234375, "y": 188.78448486328125 }, { "x": 775.0429199218751, "y": 185.17525634765627 }, { "x": 776.408837890625, "y": 179.52701416015626 }, { "x": 770.0228027343751, "y": 175.58706054687502 }, { "x": 762.9711425781251, "y": 175.176953125 }, { "x": 762.188037109375, "y": 182.281005859375 }, { "x": 756.9412597656251, "y": 187.6549072265625 }, { "x": 760.91748046875, "y": 192.84877929687502 }, { "x": 764.9878906250001, "y": 182.38245849609376 }, { "x": 767.9478515625001, "y": 186.32379150390625 }, { "x": 382.68649902343753, "y": 372.01083984375003 }, { "x": 375.2226806640625, "y": 369.17929687500003 }, { "x": 367.486572265625, "y": 367.59013671875005 }, { "x": 372.174072265625, "y": 362.09665527343753 }, { "x": 379.02216796875, "y": 358.06633300781255 }, { "x": 386.37729492187503, "y": 356.061669921875 }, { "x": 393.45146484375005, "y": 353.55693359375005 }, { "x": 400.1316650390625, "y": 349.2656982421875 }, { "x": 403.24267578125, "y": 355.634033203125 }, { "x": 410.41403808593753, "y": 358.98701171875 }, { "x": 417.18547363281255, "y": 362.62387695312503 }, { "x": 415.94121093750005, "y": 369.765625 }, { "x": 408.291259765625, "y": 371.41379394531253 }, { "x": 401.49020996093753, "y": 368.4971435546875 }, { "x": 398.02041015625, "y": 369.617919921875 }, { "x": 390.998779296875, "y": 372.9610595703125 }, { "x": 120.78052368164063, "y": 356.0544677734375 }, { "x": 125.267578125, "y": 353.9013671875 }, { "x": 121.43917236328126, "y": 359.30905761718753 }, { "x": 444.7853515625, "y": 352.08249511718753 }, { "x": 439.063623046875, "y": 347.01030273437505 }, { "x": 442.650146484375, "y": 340.85556640625003 }, { "x": 448.64731445312503, "y": 344.7353759765625 }, { "x": 453.14755859375003, "y": 351.288525390625 }, { "x": 451.4609375, "y": 355.975244140625 }, { "x": 205.74542236328125, "y": 345.024609375 }, { "x": 207.60682373046876, "y": 337.79697265625003 }, { "x": 213.6600341796875, "y": 332.8927734375 }, { "x": 219.21302490234376, "y": 337.57639160156253 }, { "x": 218.3349365234375, "y": 345.18815917968755 }, { "x": 212.96883544921877, "y": 351.0920654296875 }, { "x": 317.4313232421875, "y": 348.5284423828125 }, { "x": 310.18881835937503, "y": 349.1746337890625 }, { "x": 302.25974121093753, "y": 348.86472167968753 }, { "x": 302.5294921875, "y": 344.498291015625 }, { "x": 310.3569580078125, "y": 344.421533203125 }, { "x": 317.4415771484375, "y": 340.73808593750005 }, { "x": 324.464013671875, "y": 340.117138671875 }, { "x": 327.40739746093755, "y": 337.784912109375 }, { "x": 330.561669921875, "y": 330.8654296875 }, { "x": 335.6689453125, "y": 327.018310546875 }, { "x": 339.947705078125, "y": 333.18845214843753 }, { "x": 336.9742431640625, "y": 340.2393310546875 }, { "x": 329.8717041015625, "y": 343.894677734375 }, { "x": 322.9365478515625, "y": 347.3760986328125 }, { "x": 453.840576171875, "y": 344.6616455078125 }, { "x": 451.28867187500003, "y": 338.60178222656253 }, { "x": 458.051416015625, "y": 335.16831054687503 }, { "x": 462.608056640625, "y": 341.503564453125 }, { "x": 461.76123046875, "y": 347.53486328125 }, { "x": 467.3986328125, "y": 338.63620605468753 }, { "x": 468.712158203125, "y": 334.5012939453125 }, { "x": 469.162744140625, "y": 330.60275878906253 }, { "x": 474.292724609375, "y": 336.0037841796875 }, { "x": 470.737451171875, "y": 342.6570068359375 }, { "x": 482.488525390625, "y": 322.51611328125 }, { "x": 474.87797851562505, "y": 320.08173828125 }, { "x": 476.79086914062503, "y": 313.83994140625003 }, { "x": 482.2900390625, "y": 308.09375 }, { "x": 484.46728515625, "y": 315.01552734375 }, { "x": 491.259521484375, "y": 319.1906005859375 }, { "x": 492.76401367187503, "y": 324.73447265625003 }, { "x": 165.9516357421875, "y": 314.2017333984375 }, { "x": 165.47335205078124, "y": 307.45673828125 }, { "x": 171.71019287109377, "y": 307.7239501953125 }, { "x": 170.67717285156252, "y": 314.97021484375 }, { "x": 79.55585327148438, "y": 297.86845703125 }, { "x": 81.20184326171875, "y": 294.9055419921875 }, { "x": 80.22291870117188, "y": 301.0120361328125 }, { "x": 283.02626953125, "y": 246.18840332031252 }, { "x": 284.72238769531253, "y": 253.1041015625 }, { "x": 454.00468750000005, "y": 191.2032470703125 }, { "x": 457.97138671875, "y": 187.78282470703127 }];
const englandData = [{ "x": 569.2756958007812, "y": 804.4183349609375 }, { "x": 565.3694458007812, "y": 804.9808349609375 }, { "x": 561.2999267578125, "y": 808.1881103515625 }, { "x": 556.4232788085938, "y": 810.9083251953125 }, { "x": 550.8436279296875, "y": 813.007568359375 }, { "x": 545.0314331054688, "y": 813.3536376953125 }, { "x": 542.7473754882812, "y": 815.3359985351562 }, { "x": 543.4703979492188, "y": 821.2191162109375 }, { "x": 543.2938232421875, "y": 827.176025390625 }, { "x": 545.858642578125, "y": 830.9765014648438 }, { "x": 549.8499145507812, "y": 833.966064453125 }, { "x": 554.1172485351562, "y": 836.8452758789062 }, { "x": 555.2465209960938, "y": 841.5386352539062 }, { "x": 557.0231323242188, "y": 842.6021118164062 }, { "x": 560.6194458007812, "y": 839.4702758789062 }, { "x": 562.5347290039062, "y": 844.1258544921875 }, { "x": 566.87353515625, "y": 845.639404296875 }, { "x": 570.5899658203125, "y": 847.6482543945312 }, { "x": 574.3352661132812, "y": 843.426513671875 }, { "x": 578.1860961914062, "y": 845.9193115234375 }, { "x": 581.0550537109375, "y": 847.7454223632812 }, { "x": 584.5645141601562, "y": 844.35498046875 }, { "x": 587.5987548828125, "y": 839.8636474609375 }, { "x": 587.4942626953125, "y": 834.7035522460938 }, { "x": 590.497314453125, "y": 830.1448364257812 }, { "x": 592.5277099609375, "y": 824.9070434570312 }, { "x": 594.3894653320312, "y": 822.7568359375 }, { "x": 599.1739501953125, "y": 820.1370849609375 }, { "x": 596.14892578125, "y": 816.4655151367188 }, { "x": 593.7322387695312, "y": 811.7841186523438 }, { "x": 587.9666137695312, "y": 811.31689453125 }, { "x": 582.5275268554688, "y": 813.5888061523438 }, { "x": 578.1686401367188, "y": 810.1083984375 }, { "x": 575.6122436523438, "y": 805.4642333984375 }, { "x": 207.64834594726562, "y": 993.438232421875 }, { "x": 205.41859436035156, "y": 987.6032104492188 }, { "x": 202.6766815185547, "y": 981.7933959960938 }, { "x": 197.20164489746094, "y": 978.6776123046875 }, { "x": 191.62783813476562, "y": 976.3114013671875 }, { "x": 187.91159057617188, "y": 979.1639404296875 }, { "x": 183.53814697265625, "y": 983.4608154296875 }, { "x": 177.14044189453125, "y": 984.6708374023438 }, { "x": 173.55429077148438, "y": 980.4625244140625 }, { "x": 174.28709411621094, "y": 974.3993530273438 }, { "x": 178.20921325683594, "y": 969.5185546875 }, { "x": 183.8811492919922, "y": 966.6548461914062 }, { "x": 189.82460021972656, "y": 964.2922973632812 }, { "x": 195.15272521972656, "y": 966.373046875 }, { "x": 199.28245544433594, "y": 961.96728515625 }, { "x": 205.13644409179688, "y": 959.9984130859375 }, { "x": 208.98565673828125, "y": 954.9691772460938 }, { "x": 213.98411560058594, "y": 951.2844848632812 }, { "x": 215.81182861328125, "y": 945.1024169921875 }, { "x": 220.6697998046875, "y": 943.3280639648438 }, { "x": 223.56639099121094, "y": 938.0841674804688 }, { "x": 224.3052520751953, "y": 931.9917602539062 }, { "x": 228.1856231689453, "y": 929.8981323242188 }, { "x": 232.65989685058594, "y": 925.270263671875 }, { "x": 238.10211181640625, "y": 924.6755981445312 }, { "x": 242.93150329589844, "y": 921.9840087890625 }, { "x": 245.46844482421875, "y": 916.3934936523438 }, { "x": 250.73577880859375, "y": 912.6229248046875 }, { "x": 254.90415954589844, "y": 907.6934814453125 }, { "x": 258.51499938964844, "y": 902.867919921875 }, { "x": 258.45631408691406, "y": 896.3504638671875 }, { "x": 259.2333679199219, "y": 889.9205322265625 }, { "x": 260.9249267578125, "y": 883.646240234375 }, { "x": 263.90528869628906, "y": 879.7227783203125 }, { "x": 270.2816162109375, "y": 880.6162719726562 }, { "x": 276.0968017578125, "y": 882.5778198242188 }, { "x": 280.9526672363281, "y": 878.2694702148438 }, { "x": 283.3711242675781, "y": 872.6489868164062 }, { "x": 280.2178955078125, "y": 867.0940551757812 }, { "x": 283.882568359375, "y": 863.622314453125 }, { "x": 286.6636962890625, "y": 860.4948120117188 }, { "x": 293.03448486328125, "y": 859.2769165039062 }, { "x": 299.5336608886719, "y": 858.7681274414062 }, { "x": 305.91815185546875, "y": 857.5838623046875 }, { "x": 312.4185485839844, "y": 857.2501831054688 }, { "x": 318.6359558105469, "y": 857.4188232421875 }, { "x": 325.019287109375, "y": 858.7249755859375 }, { "x": 331.3880615234375, "y": 858.2504272460938 }, { "x": 337.482666015625, "y": 860.335205078125 }, { "x": 342.8964538574219, "y": 863.7885131835938 }, { "x": 349.3968200683594, "y": 863.7149047851562 }, { "x": 355.6386413574219, "y": 861.8975219726562 }, { "x": 362.07989501953125, "y": 861.2853393554688 }, { "x": 368.0906982421875, "y": 859.954833984375 }, { "x": 367.6436462402344, "y": 853.5158081054688 }, { "x": 367.4210510253906, "y": 848.1611938476562 }, { "x": 370.6942443847656, "y": 844.3756103515625 }, { "x": 372.2107849121094, "y": 841.0440673828125 }, { "x": 377.2172546386719, "y": 837.653564453125 }, { "x": 381.47540283203125, "y": 832.748046875 }, { "x": 387.088623046875, "y": 830.0437622070312 }, { "x": 391.18426513671875, "y": 825.1048583984375 }, { "x": 394.1697082519531, "y": 819.4249877929688 }, { "x": 391.7928771972656, "y": 813.9137573242188 }, { "x": 391.3785705566406, "y": 807.4080810546875 }, { "x": 391.90142822265625, "y": 801.665771484375 }, { "x": 392.5196533203125, "y": 795.2488403320312 }, { "x": 387.56689453125, "y": 793.3773193359375 }, { "x": 384.0682067871094, "y": 788.177001953125 }, { "x": 379.4097900390625, "y": 783.8868408203125 }, { "x": 373.5159606933594, "y": 785.9197998046875 }, { "x": 368.9398193359375, "y": 782.6696166992188 }, { "x": 365.3523864746094, "y": 777.2767333984375 }, { "x": 363.52337646484375, "y": 771.2142944335938 }, { "x": 361.2549133300781, "y": 765.2579956054688 }, { "x": 360.4342956542969, "y": 760.0936889648438 }, { "x": 362.12677001953125, "y": 756.697265625 }, { "x": 364.8673095703125, "y": 751.0653686523438 }, { "x": 368.49627685546875, "y": 746.286865234375 }, { "x": 369.9902648925781, "y": 741.0257568359375 }, { "x": 371.23284912109375, "y": 737.417724609375 }, { "x": 365.1565856933594, "y": 736.2806396484375 }, { "x": 359.8305358886719, "y": 732.6203002929688 }, { "x": 355.12066650390625, "y": 728.1509399414062 }, { "x": 357.1415710449219, "y": 722.5345458984375 }, { "x": 363.1955871582031, "y": 720.2478637695312 }, { "x": 368.45465087890625, "y": 718.0248413085938 }, { "x": 370.3464660644531, "y": 712.9411010742188 }, { "x": 365.8227233886719, "y": 717.0143432617188 }, { "x": 362.2535400390625, "y": 715.666259765625 }, { "x": 362.34771728515625, "y": 710.18603515625 }, { "x": 365.3587341308594, "y": 705.0292358398438 }, { "x": 368.0039367675781, "y": 699.61572265625 }, { "x": 371.0486145019531, "y": 694.3780517578125 }, { "x": 365.6877136230469, "y": 691.0186767578125 }, { "x": 360.55316162109375, "y": 687.671875 }, { "x": 360.94830322265625, "y": 681.3103637695312 }, { "x": 362.6343078613281, "y": 676.7194213867188 }, { "x": 366.88739013671875, "y": 672.9039916992188 }, { "x": 372.22344970703125, "y": 669.3610229492188 }, { "x": 377.4557800292969, "y": 671.2630615234375 }, { "x": 383.4164733886719, "y": 672.4309692382812 }, { "x": 387.3039855957031, "y": 673.892333984375 }, { "x": 389.15863037109375, "y": 668.6697387695312 }, { "x": 383.2196960449219, "y": 666.8577270507812 }, { "x": 380.2596130371094, "y": 661.1209106445312 }, { "x": 378.3846740722656, "y": 654.984375 }, { "x": 373.5815734863281, "y": 650.98876953125 }, { "x": 375.4915466308594, "y": 646.8187255859375 }, { "x": 373.80474853515625, "y": 642.1446533203125 }, { "x": 368.463134765625, "y": 638.4668579101562 }, { "x": 364.9049072265625, "y": 633.79248046875 }, { "x": 361.6490783691406, "y": 628.1937866210938 }, { "x": 359.3084716796875, "y": 622.578369140625 }, { "x": 364.72308349609375, "y": 619.0289306640625 }, { "x": 369.823486328125, "y": 615.4511108398438 }, { "x": 367.44219970703125, "y": 609.4006958007812 }, { "x": 365.595703125, "y": 603.4263916015625 }, { "x": 368.4554443359375, "y": 597.5814819335938 }, { "x": 372.0337829589844, "y": 592.1344604492188 }, { "x": 375.9256896972656, "y": 586.9049682617188 }, { "x": 370.72369384765625, "y": 584.1340942382812 }, { "x": 369.0362854003906, "y": 578.1092529296875 }, { "x": 369.0280456542969, "y": 571.5897827148438 }, { "x": 369.95526123046875, "y": 565.2110595703125 }, { "x": 375.62359619140625, "y": 562.2028198242188 }, { "x": 380.929443359375, "y": 559.0161743164062 }, { "x": 378.12738037109375, "y": 553.476806640625 }, { "x": 380.84228515625, "y": 547.740478515625 }, { "x": 385.6078186035156, "y": 543.9020385742188 }, { "x": 382.3914489746094, "y": 539.0347900390625 }, { "x": 379.7574462890625, "y": 536.9283447265625 }, { "x": 376.3529357910156, "y": 540.5211791992188 }, { "x": 372.0802917480469, "y": 541.5208740234375 }, { "x": 371.0312194824219, "y": 536.1724243164062 }, { "x": 368.3580322265625, "y": 541.9960327148438 }, { "x": 364.3150329589844, "y": 547.060791015625 }, { "x": 361.2350769042969, "y": 546.6226196289062 }, { "x": 362.4372863769531, "y": 549.3502807617188 }, { "x": 358.793701171875, "y": 549.9869995117188 }, { "x": 355.82843017578125, "y": 544.2003784179688 }, { "x": 356.6649169921875, "y": 537.9744873046875 }, { "x": 355.4272155761719, "y": 535.505615234375 }, { "x": 350.787353515625, "y": 532.5524291992188 }, { "x": 347.46014404296875, "y": 526.9482116699219 }, { "x": 346.0236511230469, "y": 520.6577453613281 }, { "x": 343.230224609375, "y": 514.7920532226562 }, { "x": 339.79473876953125, "y": 509.25152587890625 }, { "x": 335.98101806640625, "y": 503.9683837890625 }, { "x": 332.7227783203125, "y": 498.6205749511719 }, { "x": 335.71221923828125, "y": 492.92218017578125 }, { "x": 336.916748046875, "y": 486.5386047363281 }, { "x": 339.3111267089844, "y": 481.013916015625 }, { "x": 342.619384765625, "y": 475.4618835449219 }, { "x": 346.0548095703125, "y": 470.0570068359375 }, { "x": 347.4949645996094, "y": 463.71099853515625 }, { "x": 350.7323303222656, "y": 458.1083068847656 }, { "x": 355.6247863769531, "y": 456.9746398925781 }, { "x": 357.2213439941406, "y": 452.1885986328125 }, { "x": 363.3363037109375, "y": 451.3553161621094 }, { "x": 367.6299743652344, "y": 449.1062316894531 }, { "x": 371.47637939453125, "y": 445.1006164550781 }, { "x": 372.9232482910156, "y": 440.2886962890625 }, { "x": 378.39886474609375, "y": 438.9930419921875 }, { "x": 383.2730712890625, "y": 434.7041931152344 }, { "x": 387.96978759765625, "y": 430.6831359863281 }, { "x": 393.1455078125, "y": 426.78057861328125 }, { "x": 397.1202697753906, "y": 421.93878173828125 }, { "x": 398.8214416503906, "y": 416.782470703125 }, { "x": 403.0794372558594, "y": 411.9277648925781 }, { "x": 408.2082824707031, "y": 407.9441223144531 }, { "x": 414.38433837890625, "y": 407.834228515625 }, { "x": 416.8399353027344, "y": 402.7192687988281 }, { "x": 422.1019287109375, "y": 399.2070617675781 }, { "x": 425.9047546386719, "y": 395.3555908203125 }, { "x": 423.56378173828125, "y": 389.2928771972656 }, { "x": 420.27294921875, "y": 383.85400390625 }, { "x": 417.5073547363281, "y": 378.0714416503906 }, { "x": 422.4639587402344, "y": 375.0096130371094 }, { "x": 426.6883239746094, "y": 370.27325439453125 }, { "x": 429.9096984863281, "y": 365.2604064941406 }, { "x": 433.22869873046875, "y": 359.909912109375 }, { "x": 438.2138366699219, "y": 359.2149353027344 }, { "x": 441.2582702636719, "y": 364.9190979003906 }, { "x": 445.8205261230469, "y": 369.5600891113281 }, { "x": 451.9390563964844, "y": 371.1366271972656 }, { "x": 450.9761962890625, "y": 374.1885986328125 }, { "x": 449.28948974609375, "y": 375.70819091796875 }, { "x": 454.1567077636719, "y": 377.9183654785156 }, { "x": 459.5205993652344, "y": 381.0985107421875 }, { "x": 463.0899963378906, "y": 386.34722900390625 }, { "x": 464.6340026855469, "y": 392.3410949707031 }, { "x": 465.70068359375, "y": 398.62103271484375 }, { "x": 464.80987548828125, "y": 404.6508483886719 }, { "x": 467.22735595703125, "y": 410.48748779296875 }, { "x": 466.8792419433594, "y": 416.8077697753906 }, { "x": 469.8689880371094, "y": 422.5695495605469 }, { "x": 469.9646301269531, "y": 428.7725830078125 }, { "x": 472.0889892578125, "y": 434.8520202636719 }, { "x": 474.8646240234375, "y": 440.7442321777344 }, { "x": 477.5711669921875, "y": 446.4892272949219 }, { "x": 480.5425720214844, "y": 452.1436767578125 }, { "x": 480.8888854980469, "y": 458.6524963378906 }, { "x": 482.87005615234375, "y": 464.8057556152344 }, { "x": 484.57080078125, "y": 471.0852966308594 }, { "x": 488.2356262207031, "y": 476.4226989746094 }, { "x": 492.6561279296875, "y": 480.81182861328125 }, { "x": 494.1812438964844, "y": 485.2212219238281 }, { "x": 499.91558837890625, "y": 488.2476501464844 }, { "x": 505.7113952636719, "y": 491.1944885253906 }, { "x": 511.8681945800781, "y": 492.9672546386719 }, { "x": 518.13330078125, "y": 494.6348876953125 }, { "x": 523.4506530761719, "y": 497.7847900390625 }, { "x": 528.8553466796875, "y": 501.235595703125 }, { "x": 533.97265625, "y": 505.139892578125 }, { "x": 536.9550170898438, "y": 510.6650695800781 }, { "x": 540.4628295898438, "y": 516.1415710449219 }, { "x": 542.8058471679688, "y": 522.1839294433594 }, { "x": 545.7691040039062, "y": 527.4718933105469 }, { "x": 551.4401245117188, "y": 530.6225891113281 }, { "x": 552.8981323242188, "y": 535.4677734375 }, { "x": 558.6875610351562, "y": 538.4157104492188 }, { "x": 564.2821655273438, "y": 541.70703125 }, { "x": 559.516357421875, "y": 544.9673461914062 }, { "x": 556.4845581054688, "y": 550.3153686523438 }, { "x": 557.1422119140625, "y": 556.7764282226562 }, { "x": 559.5606079101562, "y": 562.8165893554688 }, { "x": 562.854736328125, "y": 568.4400634765625 }, { "x": 566.4912719726562, "y": 573.8505859375 }, { "x": 570.2726440429688, "y": 579.1614990234375 }, { "x": 574.0341796875, "y": 584.4864501953125 }, { "x": 577.6578369140625, "y": 589.90576171875 }, { "x": 580.7711791992188, "y": 595.6223754882812 }, { "x": 577.7975463867188, "y": 596.0804443359375 }, { "x": 571.847412109375, "y": 594.2462768554688 }, { "x": 565.6353149414062, "y": 595.806396484375 }, { "x": 560.1575317382812, "y": 592.390869140625 }, { "x": 555.5150756835938, "y": 587.8223266601562 }, { "x": 550.7180786132812, "y": 584.197265625 }, { "x": 544.48974609375, "y": 586.0903930664062 }, { "x": 538.1319580078125, "y": 587.4903564453125 }, { "x": 531.8460388183594, "y": 586.6254272460938 }, { "x": 526.5719909667969, "y": 587.4539184570312 }, { "x": 532.505126953125, "y": 588.3087158203125 }, { "x": 538.2080688476562, "y": 588.6976928710938 }, { "x": 544.56591796875, "y": 587.4559936523438 }, { "x": 550.9212036132812, "y": 586.0165405273438 }, { "x": 555.230712890625, "y": 590.84716796875 }, { "x": 559.6224975585938, "y": 595.6587524414062 }, { "x": 564.7177734375, "y": 599.7005004882812 }, { "x": 570.1002807617188, "y": 603.139892578125 }, { "x": 575.4910888671875, "y": 606.6482543945312 }, { "x": 581.1227416992188, "y": 609.8875732421875 }, { "x": 584.72802734375, "y": 615.2705688476562 }, { "x": 587.7520751953125, "y": 620.9734497070312 }, { "x": 590.304443359375, "y": 626.9703369140625 }, { "x": 593.0848388671875, "y": 632.8673095703125 }, { "x": 595.7412109375, "y": 638.7872924804688 }, { "x": 595.7654418945312, "y": 645.306884765625 }, { "x": 595.6107177734375, "y": 651.8212280273438 }, { "x": 591.2763061523438, "y": 656.3699951171875 }, { "x": 586.349365234375, "y": 660.63818359375 }, { "x": 581.9005737304688, "y": 665.3936767578125 }, { "x": 578.85888671875, "y": 671.124755859375 }, { "x": 578.91162109375, "y": 675.0390014648438 }, { "x": 584.9386596679688, "y": 677.3609008789062 }, { "x": 588.4266967773438, "y": 682.8486938476562 }, { "x": 594.3085327148438, "y": 683.3160400390625 }, { "x": 599.249755859375, "y": 681.5421752929688 }, { "x": 602.32421875, "y": 676.0682983398438 }, { "x": 604.7022094726562, "y": 670.0075073242188 }, { "x": 608.9080200195312, "y": 665.3013305664062 }, { "x": 615.407470703125, "y": 664.9140014648438 }, { "x": 621.7252807617188, "y": 664.1107177734375 }, { "x": 628.2371826171875, "y": 664.4063110351562 }, { "x": 634.648193359375, "y": 665.4776000976562 }, { "x": 640.4733276367188, "y": 664.2775268554688 }, { "x": 646.817138671875, "y": 665.7772216796875 }, { "x": 653.2523193359375, "y": 666.809326171875 }, { "x": 659.6070556640625, "y": 668.1718139648438 }, { "x": 665.5225830078125, "y": 670.8939208984375 }, { "x": 671.0191650390625, "y": 674.39404296875 }, { "x": 676.1876831054688, "y": 678.3656005859375 }, { "x": 681.1044311523438, "y": 682.6458740234375 }, { "x": 685.8180541992188, "y": 687.1491088867188 }, { "x": 689.3638305664062, "y": 692.54541015625 }, { "x": 691.1815795898438, "y": 698.800537109375 }, { "x": 691.7825927734375, "y": 705.2799682617188 }, { "x": 692.6322631835938, "y": 711.7310791015625 }, { "x": 693.3118896484375, "y": 718.1204223632812 }, { "x": 692.2617797851562, "y": 724.5545043945312 }, { "x": 690.5408325195312, "y": 730.836181640625 }, { "x": 687.9494018554688, "y": 736.8123168945312 }, { "x": 686.5670776367188, "y": 743.1139526367188 }, { "x": 685.9608764648438, "y": 749.60205078125 }, { "x": 684.935791015625, "y": 756.0396728515625 }, { "x": 681.8775024414062, "y": 761.4531860351562 }, { "x": 676.828125, "y": 765.5579833984375 }, { "x": 672.9541015625, "y": 770.7860107421875 }, { "x": 668.633056640625, "y": 775.6646728515625 }, { "x": 663.6121826171875, "y": 778.9714965820312 }, { "x": 664.6062622070312, "y": 783.8631591796875 }, { "x": 662.6329345703125, "y": 789.5294799804688 }, { "x": 657.619140625, "y": 793.6700439453125 }, { "x": 651.7293090820312, "y": 796.4054565429688 }, { "x": 646.3899536132812, "y": 795.051513671875 }, { "x": 641.1009521484375, "y": 796.6820068359375 }, { "x": 640.3596801757812, "y": 799.0200805664062 }, { "x": 642.3076782226562, "y": 804.5769653320312 }, { "x": 642.0361328125, "y": 811.088134765625 }, { "x": 641.7740478515625, "y": 816.0762939453125 }, { "x": 636.9973754882812, "y": 820.4801635742188 }, { "x": 632.1019287109375, "y": 824.7823486328125 }, { "x": 625.7115478515625, "y": 823.9076538085938 }, { "x": 621.2662963867188, "y": 824.1550903320312 }, { "x": 616.206787109375, "y": 826.641845703125 }, { "x": 609.7515258789062, "y": 827.5239868164062 }, { "x": 613.239501953125, "y": 828.435546875 }, { "x": 619.71484375, "y": 828.9945678710938 }, { "x": 626.1471557617188, "y": 829.7925415039062 }, { "x": 631.818359375, "y": 832.9302368164062 }, { "x": 638.0855102539062, "y": 834.7088012695312 }, { "x": 643.1934204101562, "y": 838.591552734375 }, { "x": 640.81689453125, "y": 842.7979125976562 }, { "x": 647.1539916992188, "y": 841.40673828125 }, { "x": 653.3869018554688, "y": 839.6504516601562 }, { "x": 659.8322143554688, "y": 838.66845703125 }, { "x": 666.2808227539062, "y": 837.709228515625 }, { "x": 672.7301635742188, "y": 836.7554321289062 }, { "x": 678.5183715820312, "y": 837.9856567382812 }, { "x": 677.118896484375, "y": 844.2725830078125 }, { "x": 673.801513671875, "y": 846.6629638671875 }, { "x": 675.7398071289062, "y": 852.8778686523438 }, { "x": 676.1526489257812, "y": 859.373046875 }, { "x": 673.8826904296875, "y": 865.0879516601562 }, { "x": 669.3900146484375, "y": 868.7586059570312 }, { "x": 663.2925415039062, "y": 870.842041015625 }, { "x": 657.5087280273438, "y": 873.5455322265625 }, { "x": 651.6065673828125, "y": 876.176513671875 }, { "x": 647.8914184570312, "y": 881.4144287109375 }, { "x": 647.8113403320312, "y": 887.8463745117188 }, { "x": 644.420654296875, "y": 890.7820434570312 }, { "x": 637.9291381835938, "y": 890.1820068359375 }, { "x": 631.5767211914062, "y": 890.9478149414062 }, { "x": 626.8500366210938, "y": 895.4020385742188 }, { "x": 620.8762817382812, "y": 897.9734497070312 }, { "x": 614.6650390625, "y": 899.9539794921875 }, { "x": 608.4893798828125, "y": 902.0369873046875 }, { "x": 603.1552124023438, "y": 905.6722412109375 }, { "x": 599.0322875976562, "y": 910.7142944335938 }, { "x": 592.7548828125, "y": 911.1476440429688 }, { "x": 586.5021362304688, "y": 909.3251342773438 }, { "x": 580.3173828125, "y": 907.2638549804688 }, { "x": 574.1106567382812, "y": 905.27294921875 }, { "x": 567.83544921875, "y": 903.749267578125 }, { "x": 561.3557739257812, "y": 903.322998046875 }, { "x": 555.0040893554688, "y": 904.7232055664062 }, { "x": 548.5791625976562, "y": 905.815673828125 }, { "x": 542.1282958984375, "y": 906.755126953125 }, { "x": 535.7388305664062, "y": 908.0462646484375 }, { "x": 529.50439453125, "y": 909.9269409179688 }, { "x": 525.2372741699219, "y": 914.645751953125 }, { "x": 520.0694580078125, "y": 912.304931640625 }, { "x": 514.1156005859375, "y": 909.7174682617188 }, { "x": 507.6676330566406, "y": 908.9061889648438 }, { "x": 501.17864990234375, "y": 909.4818725585938 }, { "x": 495.2344055175781, "y": 908.0277709960938 }, { "x": 489.8525695800781, "y": 904.4107666015625 }, { "x": 484.8296813964844, "y": 900.30712890625 }, { "x": 483.57220458984375, "y": 900.5139770507812 }, { "x": 488.09423828125, "y": 905.0391235351562 }, { "x": 483.4471435546875, "y": 909.1167602539062 }, { "x": 477.4069519042969, "y": 911.5507202148438 }, { "x": 472.0574035644531, "y": 914.6882934570312 }, { "x": 475.30181884765625, "y": 916.0615234375 }, { "x": 481.3740539550781, "y": 913.79052734375 }, { "x": 486.7047119140625, "y": 910.1505737304688 }, { "x": 492.581298828125, "y": 911.7564086914062 }, { "x": 498.74053955078125, "y": 913.715576171875 }, { "x": 503.6290588378906, "y": 917.4542236328125 }, { "x": 501.899169921875, "y": 921.9157104492188 }, { "x": 497.88812255859375, "y": 926.5126342773438 }, { "x": 493.424560546875, "y": 930.5302124023438 }, { "x": 487.3443908691406, "y": 931.1026000976562 }, { "x": 482.17926025390625, "y": 927.12841796875 }, { "x": 476.64556884765625, "y": 923.7111206054688 }, { "x": 470.64874267578125, "y": 922.2650756835938 }, { "x": 467.94476318359375, "y": 921.2002563476562 }, { "x": 468.2959899902344, "y": 917.0078125 }, { "x": 462.2020568847656, "y": 914.7151489257812 }, { "x": 456.7257080078125, "y": 917.120361328125 }, { "x": 450.2632751464844, "y": 916.5908813476562 }, { "x": 444.5307922363281, "y": 919.27978515625 }, { "x": 444.78277587890625, "y": 924.9879760742188 }, { "x": 442.3804016113281, "y": 930.0496826171875 }, { "x": 436.1966857910156, "y": 931.6862182617188 }, { "x": 431.0218505859375, "y": 929.346435546875 }, { "x": 424.7664489746094, "y": 927.63037109375 }, { "x": 418.27545166015625, "y": 927.0379638671875 }, { "x": 411.90618896484375, "y": 925.8237915039062 }, { "x": 408.22857666015625, "y": 929.4877319335938 }, { "x": 410.1552734375, "y": 933.0097045898438 }, { "x": 407.2498779296875, "y": 938.6749877929688 }, { "x": 405.8642578125, "y": 933.8433227539062 }, { "x": 401.8417053222656, "y": 928.8666381835938 }, { "x": 396.73931884765625, "y": 924.80810546875 }, { "x": 391.4098815917969, "y": 921.0560913085938 }, { "x": 385.7366943359375, "y": 917.8524169921875 }, { "x": 379.61932373046875, "y": 915.6358032226562 }, { "x": 373.46331787109375, "y": 915.690673828125 }, { "x": 367.3571472167969, "y": 917.888916015625 }, { "x": 361.0833740234375, "y": 919.1975708007812 }, { "x": 354.599609375, "y": 919.76025390625 }, { "x": 349.18560791015625, "y": 923.0665893554688 }, { "x": 344.057373046875, "y": 926.9248046875 }, { "x": 338.0506286621094, "y": 928.4130859375 }, { "x": 334.6994323730469, "y": 933.9909057617188 }, { "x": 333.026123046875, "y": 940.1392211914062 }, { "x": 332.0593566894531, "y": 944.2665405273438 }, { "x": 330.7298889160156, "y": 948.2494506835938 }, { "x": 334.236083984375, "y": 950.9743041992188 }, { "x": 330.8861083984375, "y": 956.533447265625 }, { "x": 325.12579345703125, "y": 959.491455078125 }, { "x": 322.4698181152344, "y": 965.2977294921875 }, { "x": 320.97125244140625, "y": 970.0369873046875 }, { "x": 314.8570556640625, "y": 970.4697875976562 }, { "x": 308.7745056152344, "y": 969.501708984375 }, { "x": 305.38372802734375, "y": 964.4515380859375 }, { "x": 300.2821350097656, "y": 960.8466796875 }, { "x": 294.6040344238281, "y": 961.05859375 }, { "x": 288.9393310546875, "y": 957.9566650390625 }, { "x": 286.2483825683594, "y": 953.204833984375 }, { "x": 282.9319152832031, "y": 958.1422729492188 }, { "x": 278.5703430175781, "y": 954.9512329101562 }, { "x": 272.3909606933594, "y": 953.0204467773438 }, { "x": 266.1421203613281, "y": 953.7822265625 }, { "x": 260.2799377441406, "y": 956.0588989257812 }, { "x": 253.76736450195312, "y": 956.3574829101562 }, { "x": 248.11744689941406, "y": 955.7877197265625 }, { "x": 244.3812255859375, "y": 957.6835327148438 }, { "x": 242.9151611328125, "y": 963.0730590820312 }, { "x": 238.75454711914062, "y": 966.86328125 }, { "x": 233.46315002441406, "y": 968.0654907226562 }, { "x": 228.311279296875, "y": 971.1024169921875 }, { "x": 224.36239624023438, "y": 975.77685546875 }, { "x": 219.87005615234375, "y": 977.38623046875 }, { "x": 221.11358642578125, "y": 982.42236328125 }, { "x": 219.48892211914062, "y": 988.3031005859375 }, { "x": 213.7626190185547, "y": 990.1944580078125 }, { "x": 209.90899658203125, "y": 994.525146484375 }, { "x": 513.5160217285156, "y": 906.9561157226562 }, { "x": 508.12628173828125, "y": 904.1383056640625 }, { "x": 500.28204345703125, "y": 903.2022094726562 }, { "x": 622.560546875, "y": 836.7445068359375 }, { "x": 621.4202880859375, "y": 835.482421875 }, { "x": 619.3776245117188, "y": 838.8135986328125 }, { "x": 627.1277465820312, "y": 834.8246459960938 }, { "x": 633.7122802734375, "y": 800.7633666992188 }, { "x": 634.8538208007812, "y": 801.7282104492188 }, { "x": 655.2240600585938, "y": 775.3070068359375 }, { "x": 385.1531677246094, "y": 631.9513549804688 }, { "x": 384.55389404296875, "y": 630.509033203125 }, { "x": 378.481201171875, "y": 628.4047241210938 }, { "x": 373.90802001953125, "y": 625.2664794921875 }, { "x": 377.6784973144531, "y": 630.5562744140625 }, { "x": 360.17449951171875, "y": 531.1886596679688 }];
const englandMobile = [{ "x": 404.49298706054685, "y": 569.0928344726562 }, { "x": 399.8547180175781, "y": 570.9268310546875 }, { "x": 393.88002319335936, "y": 573.7086303710937 }, { "x": 387.1498291015625, "y": 575.0953857421874 }, { "x": 386.88023681640624, "y": 580.0754943847655 }, { "x": 386.12905273437497, "y": 586.7818054199219 }, { "x": 391.5762268066406, "y": 590.2999633789062 }, { "x": 394.85512695312497, "y": 594.6662475585937 }, { "x": 397.3021362304687, "y": 593.5682250976562 }, { "x": 400.718310546875, "y": 595.9248291015624 }, { "x": 405.4129760742187, "y": 599.3537780761718 }, { "x": 410.40556030273433, "y": 596.8345214843749 }, { "x": 414.4637573242187, "y": 599.2999877929688 }, { "x": 417.4655456542969, "y": 593.4795288085937 }, { "x": 418.5792053222656, "y": 587.5674255371093 }, { "x": 421.2216796875, "y": 581.9629821777344 }, { "x": 425.50661621093747, "y": 579.6247497558593 }, { "x": 421.9211242675781, "y": 574.5727355957031 }, { "x": 414.97072753906247, "y": 574.5169372558594 }, { "x": 409.4465637207031, "y": 572.6262023925781 }, { "x": 151.35384216308594, "y": 701.4067626953124 }, { "x": 148.75975341796874, "y": 694.5034057617187 }, { "x": 142.55523223876952, "y": 691.2113037109375 }, { "x": 137.54134979248045, "y": 691.3823303222656 }, { "x": 131.54947967529296, "y": 695.0681823730469 }, { "x": 128.1739791870117, "y": 691.0557861328125 }, { "x": 130.6829391479492, "y": 684.677685546875 }, { "x": 137.30168609619142, "y": 681.2363891601562 }, { "x": 143.50870666503906, "y": 681.3549926757812 }, { "x": 149.513020324707, "y": 678.0513977050781 }, { "x": 154.70343017578125, "y": 673.1065368652344 }, { "x": 158.29825744628906, "y": 667.0652343749999 }, { "x": 162.4818618774414, "y": 662.7884582519531 }, { "x": 164.0900695800781, "y": 656.8599060058593 }, { "x": 170.06219024658202, "y": 653.9329284667969 }, { "x": 175.99934082031248, "y": 651.5430419921875 }, { "x": 180.27778320312498, "y": 645.9891845703124 }, { "x": 185.57584838867186, "y": 640.6944946289062 }, { "x": 186.92562561035155, "y": 633.6408325195312 }, { "x": 188.3371612548828, "y": 626.2512695312499 }, { "x": 192.0376037597656, "y": 621.8082946777344 }, { "x": 199.05946807861326, "y": 623.8974853515624 }, { "x": 204.37877807617187, "y": 618.5861755371093 }, { "x": 203.01669616699218, "y": 612.5881958007812 }, { "x": 206.4076202392578, "y": 608.3067626953125 }, { "x": 213.8871612548828, "y": 607.2892761230469 }, { "x": 221.38129272460935, "y": 606.3023376464844 }, { "x": 228.76169128417968, "y": 606.1175964355468 }, { "x": 236.1482208251953, "y": 606.7504760742187 }, { "x": 243.29369812011717, "y": 608.8134765625 }, { "x": 250.25445556640622, "y": 610.6418762207031 }, { "x": 257.60419921874995, "y": 608.8391967773437 }, { "x": 263.62982177734375, "y": 606.8322509765625 }, { "x": 262.8380920410156, "y": 599.7379577636718 }, { "x": 264.83006286621094, "y": 595.4107666015625 }, { "x": 270.6888458251953, "y": 591.4126831054687 }, { "x": 276.5755279541016, "y": 587.0775024414062 }, { "x": 280.7795440673828, "y": 581.1175048828125 }, { "x": 280.18731689453125, "y": 574.6333618164062 }, { "x": 280.44654846191406, "y": 567.5732910156249 }, { "x": 279.18388671875, "y": 561.6099609375 }, { "x": 273.98797607421875, "y": 557.0784179687499 }, { "x": 267.8933959960938, "y": 555.9974853515624 }, { "x": 262.9956817626953, "y": 551.6388916015625 }, { "x": 260.3638458251953, "y": 544.8223937988281 }, { "x": 258.1764739990234, "y": 538.532177734375 }, { "x": 260.22170104980466, "y": 533.2779052734375 }, { "x": 264.84967346191405, "y": 527.9509582519531 }, { "x": 266.38404235839846, "y": 522.1761291503906 }, { "x": 259.6698913574219, "y": 519.8059387207031 }, { "x": 254.37953796386716, "y": 514.7564025878905 }, { "x": 259.70936889648436, "y": 510.342822265625 }, { "x": 265.59145812988277, "y": 507.1035705566406 }, { "x": 261.18492736816404, "y": 508.21731567382807 }, { "x": 259.0677947998047, "y": 503.21584472656247 }, { "x": 263.34756164550777, "y": 497.8281860351562 }, { "x": 265.1505187988281, "y": 491.3657043457031 }, { "x": 258.70583190917966, "y": 487.8989868164062 }, { "x": 258.6341186523438, "y": 480.99396362304685 }, { "x": 263.6637878417969, "y": 476.78234252929684 }, { "x": 269.58405151367185, "y": 475.90546264648435 }, { "x": 275.61322021484375, "y": 478.71857910156245 }, { "x": 277.87770996093747, "y": 473.4281616210937 }, { "x": 272.39447631835935, "y": 469.43520507812497 }, { "x": 269.19765014648436, "y": 463.1117065429687 }, { "x": 269.53049621582034, "y": 458.3371887207031 }, { "x": 264.58046569824216, "y": 453.21185913085935 }, { "x": 260.4689056396484, "y": 447.5552062988281 }, { "x": 258.0578918457031, "y": 441.24384155273435 }, { "x": 264.62064819335933, "y": 437.448486328125 }, { "x": 262.0695831298828, "y": 430.60968627929685 }, { "x": 264.3060241699219, "y": 423.66505737304686 }, { "x": 268.6986480712891, "y": 417.473876953125 }, { "x": 264.445947265625, "y": 412.98642578125 }, { "x": 264.3282196044922, "y": 405.3957580566406 }, { "x": 268.1717895507812, "y": 399.8236999511719 }, { "x": 271.61037292480466, "y": 395.5017639160156 }, { "x": 273.22455139160155, "y": 389.19330444335935 }, { "x": 274.1431945800781, "y": 384.027685546875 }, { "x": 271.1481994628906, "y": 383.9013488769531 }, { "x": 266.6774536132813, "y": 384.45155639648436 }, { "x": 264.1510833740234, "y": 384.57823486328124 }, { "x": 260.3895660400391, "y": 390.4095458984375 }, { "x": 260.16859436035156, "y": 390.9412109375 }, { "x": 255.4105255126953, "y": 387.790869140625 }, { "x": 257.0251525878906, "y": 381.08917236328125 }, { "x": 251.2411163330078, "y": 378.2885528564453 }, { "x": 248.36122131347653, "y": 371.3934417724609 }, { "x": 245.17981872558593, "y": 364.570278930664 }, { "x": 240.8260528564453, "y": 358.3571380615234 }, { "x": 240.68689880371093, "y": 351.9723937988281 }, { "x": 241.84326171875, "y": 344.5572814941406 }, { "x": 246.18410339355466, "y": 338.43715209960936 }, { "x": 248.93544006347653, "y": 331.5589599609375 }, { "x": 253.27070617675778, "y": 325.80154113769527 }, { "x": 256.5400787353516, "y": 322.47951049804686 }, { "x": 263.05348815917966, "y": 321.2694641113281 }, { "x": 266.2493957519531, "y": 315.6986877441406 }, { "x": 271.1692199707031, "y": 312.94408264160154 }, { "x": 276.5337646484375, "y": 307.70091857910154 }, { "x": 282.3687072753906, "y": 303.1852264404297 }, { "x": 285.47181701660156, "y": 297.44541015625 }, { "x": 290.8589630126953, "y": 292.21950683593747 }, { "x": 297.6778106689453, "y": 290.5147521972656 }, { "x": 301.851235961914, "y": 285.3558410644531 }, { "x": 302.7878021240234, "y": 279.60720214843747 }, { "x": 299.6502990722656, "y": 272.90599670410154 }, { "x": 302.0465087890625, "y": 268.3484344482422 }, { "x": 306.22166442871094, "y": 262.42716674804683 }, { "x": 310.60862731933594, "y": 256.676968383789 }, { "x": 315.080419921875, "y": 261.70104064941404 }, { "x": 321.1515014648437, "y": 265.77773742675777 }, { "x": 320.2053009033203, "y": 267.13225708007815 }, { "x": 323.98615112304685, "y": 270.8243469238281 }, { "x": 329.8386322021484, "y": 275.25303039550784 }, { "x": 331.71364440917966, "y": 282.2875732421875 }, { "x": 331.34243164062497, "y": 289.51503906249997 }, { "x": 333.1402618408203, "y": 296.5493255615234 }, { "x": 335.473794555664, "y": 303.4618255615234 }, { "x": 336.53607788085935, "y": 310.61236572265625 }, { "x": 340.13618164062495, "y": 317.2762512207031 }, { "x": 342.48415527343747, "y": 324.2247039794922 }, { "x": 344.0756469726562, "y": 331.5479370117187 }, { "x": 346.8594970703125, "y": 338.514077758789 }, { "x": 349.98883972167965, "y": 343.5655578613281 }, { "x": 356.0886322021484, "y": 347.8422485351562 }, { "x": 362.9860076904297, "y": 350.7303039550781 }, { "x": 369.81602783203124, "y": 353.45777893066406 }, { "x": 376.3202728271484, "y": 356.9121490478515 }, { "x": 380.8428649902344, "y": 362.52167663574215 }, { "x": 385.0473937988281, "y": 368.75951232910154 }, { "x": 388.1117309570312, "y": 375.2950531005859 }, { "x": 392.10473022460934, "y": 379.74172363281247 }, { "x": 398.5168823242187, "y": 383.5909973144531 }, { "x": 397.6034729003906, "y": 387.5070068359375 }, { "x": 395.69936523437497, "y": 394.30833740234374 }, { "x": 398.44049072265625, "y": 401.34572143554686 }, { "x": 402.5626037597656, "y": 407.72215576171874 }, { "x": 406.9656311035156, "y": 413.91102905273436 }, { "x": 411.164306640625, "y": 420.2382873535156 }, { "x": 410.4582824707031, "y": 423.2563110351562 }, { "x": 403.4612731933594, "y": 423.0471740722656 }, { "x": 396.99242553710934, "y": 419.6744506835937 }, { "x": 391.5350830078125, "y": 414.9338134765625 }, { "x": 384.23810424804685, "y": 417.0022827148437 }, { "x": 376.86366577148436, "y": 416.3520141601562 }, { "x": 378.70390014648433, "y": 417.77384643554683 }, { "x": 385.62071533203124, "y": 417.48045654296874 }, { "x": 392.70872802734374, "y": 417.14899902343745 }, { "x": 397.6651672363281, "y": 422.8933654785156 }, { "x": 403.89240722656245, "y": 427.07298583984374 }, { "x": 410.1140502929687, "y": 431.24559936523434 }, { "x": 415.24835205078125, "y": 436.57421264648434 }, { "x": 418.5296447753906, "y": 443.36370849609375 }, { "x": 421.74774780273435, "y": 450.24331054687497 }, { "x": 423.0352111816406, "y": 457.55178222656247 }, { "x": 421.2113830566406, "y": 464.3929748535156 }, { "x": 415.4797485351562, "y": 469.37145996093744 }, { "x": 411.29799194335936, "y": 475.6173706054687 }, { "x": 413.9570861816406, "y": 479.3317626953125 }, { "x": 418.779541015625, "y": 484.64418334960936 }, { "x": 425.3146545410156, "y": 483.24221801757807 }, { "x": 428.56163940429684, "y": 476.606787109375 }, { "x": 433.50141601562495, "y": 471.61010131835934 }, { "x": 440.9468627929687, "y": 470.8747253417968 }, { "x": 448.51911621093745, "y": 471.38947143554685 }, { "x": 455.53432617187497, "y": 471.28953857421874 }, { "x": 462.98485717773434, "y": 472.73512573242186 }, { "x": 470.24791259765624, "y": 474.78078002929686 }, { "x": 476.68933105468744, "y": 478.7845031738281 }, { "x": 482.53213500976557, "y": 483.6325500488281 }, { "x": 487.7764526367187, "y": 489.0976257324218 }, { "x": 490.02936401367185, "y": 496.31616210937494 }, { "x": 490.75487060546874, "y": 503.8640625 }, { "x": 490.8772338867187, "y": 511.32057495117186 }, { "x": 488.98124389648433, "y": 518.6548522949219 }, { "x": 486.60144042968744, "y": 525.788751220703 }, { "x": 485.7871948242187, "y": 533.333575439453 }, { "x": 482.42164916992186, "y": 539.6740356445313 }, { "x": 477.3293029785156, "y": 545.2166564941406 }, { "x": 472.3820068359375, "y": 550.9607238769531 }, { "x": 471.5551147460937, "y": 555.6914916992188 }, { "x": 466.7143310546875, "y": 561.3179382324219 }, { "x": 459.6614807128906, "y": 563.816259765625 }, { "x": 453.7905639648437, "y": 564.034112548828 }, { "x": 455.6077697753906, "y": 568.7149780273437 }, { "x": 456.3661743164062, "y": 575.578857421875 }, { "x": 451.1147216796875, "y": 580.9742065429687 }, { "x": 444.5142395019531, "y": 582.8101684570312 }, { "x": 439.35575561523433, "y": 584.2380249023437 }, { "x": 431.95722045898435, "y": 585.673272705078 }, { "x": 439.2506103515625, "y": 586.2262145996093 }, { "x": 446.36036987304686, "y": 588.2208129882812 }, { "x": 453.53652343749997, "y": 590.647784423828 }, { "x": 454.90456542968747, "y": 595.6988586425781 }, { "x": 461.29381713867184, "y": 594.1723510742187 }, { "x": 468.7854064941406, "y": 592.9349182128906 }, { "x": 476.29771728515624, "y": 591.8146789550781 }, { "x": 480.66673583984374, "y": 594.9574584960938 }, { "x": 477.9643615722656, "y": 599.4903259277344 }, { "x": 479.3094604492187, "y": 606.9091552734375 }, { "x": 475.8703430175781, "y": 612.9056823730468 }, { "x": 469.7022338867187, "y": 616.1840698242187 }, { "x": 462.68044433593747, "y": 618.9242553710938 }, { "x": 459.1727111816406, "y": 625.3007751464843 }, { "x": 456.2816223144531, "y": 629.4882995605468 }, { "x": 448.74149780273433, "y": 629.3379943847656 }, { "x": 442.7260864257812, "y": 633.8106201171875 }, { "x": 435.5181884765625, "y": 636.1987121582031 }, { "x": 428.7281799316406, "y": 639.4301025390624 }, { "x": 423.18701171875, "y": 644.0984924316406 }, { "x": 415.8367980957031, "y": 642.3011962890624 }, { "x": 408.6292419433594, "y": 639.9064392089844 }, { "x": 401.26134033203124, "y": 638.3037536621093 }, { "x": 393.8012817382812, "y": 639.4552673339844 }, { "x": 386.2935852050781, "y": 640.5940063476562 }, { "x": 378.871337890625, "y": 642.1874633789062 }, { "x": 373.15794677734374, "y": 646.6970031738281 }, { "x": 366.6938201904297, "y": 643.0414855957031 }, { "x": 359.1870635986328, "y": 642.3580200195312 }, { "x": 352.2065246582031, "y": 641.1560485839843 }, { "x": 345.9796478271484, "y": 636.8597045898437 }, { "x": 346.1821411132812, "y": 637.6257995605469 }, { "x": 343.8277160644531, "y": 642.5840332031249 }, { "x": 336.9233978271484, "y": 645.5090026855469 }, { "x": 340.63486328125, "y": 646.376055908203 }, { "x": 347.2366271972656, "y": 642.8869506835937 }, { "x": 354.19375305175777, "y": 645.4046691894531 }, { "x": 359.3131225585937, "y": 649.886181640625 }, { "x": 354.3765930175781, "y": 655.0937133789062 }, { "x": 347.9830047607422, "y": 658.2673828124999 }, { "x": 341.7955841064453, "y": 653.8855895996094 }, { "x": 334.93407592773434, "y": 651.6265258789062 }, { "x": 334.7050506591797, "y": 648.3689453124999 }, { "x": 327.56903686523435, "y": 646.2988952636719 }, { "x": 320.6983428955078, "y": 647.667236328125 }, { "x": 317.1504486083984, "y": 652.6637939453125 }, { "x": 313.69163513183594, "y": 657.2180664062499 }, { "x": 307.2898010253906, "y": 656.3776733398437 }, { "x": 299.8617004394531, "y": 655.0485961914062 }, { "x": 292.3954681396484, "y": 654.2876708984375 }, { "x": 293.1002960205078, "y": 659.5295959472655 }, { "x": 290.16844787597654, "y": 660.7939453125 }, { "x": 285.79705810546875, "y": 654.9931823730468 }, { "x": 279.6569549560547, "y": 650.5290161132812 }, { "x": 272.83507385253904, "y": 647.2411010742187 }, { "x": 265.7146759033203, "y": 647.7895141601562 }, { "x": 258.401611328125, "y": 649.4742309570312 }, { "x": 251.1811309814453, "y": 651.2498229980469 }, { "x": 245.06854248046872, "y": 655.2000976562499 }, { "x": 240.14233093261717, "y": 660.0845886230468 }, { "x": 239.60662841796875, "y": 666.6773376464844 }, { "x": 239.29281616210938, "y": 670.1504638671875 }, { "x": 237.3943908691406, "y": 675.7600341796874 }, { "x": 231.99273986816405, "y": 680.4990478515624 }, { "x": 228.95228576660156, "y": 685.4004150390624 }, { "x": 221.91712341308593, "y": 684.5193908691406 }, { "x": 217.41749572753906, "y": 678.8947814941406 }, { "x": 210.60621032714843, "y": 678.0770324707031 }, { "x": 206.2763916015625, "y": 673.4494018554688 }, { "x": 201.99867553710936, "y": 675.29365234375 }, { "x": 194.95293884277342, "y": 672.9646484374999 }, { "x": 188.0006622314453, "y": 675.2517395019531 }, { "x": 180.46118927001953, "y": 675.9542175292968 }, { "x": 176.3600646972656, "y": 677.5409240722656 }, { "x": 173.01083984374998, "y": 682.6913330078124 }, { "x": 166.4940658569336, "y": 684.6158203125 }, { "x": 161.545637512207, "y": 688.5075622558593 }, { "x": 160.8290817260742, "y": 693.8163940429687 }, { "x": 156.9296173095703, "y": 698.7472412109374 }, { "x": 151.4673828125, "y": 701.5217773437499 }, { "x": 361.634927368164, "y": 638.9784179687499 }, { "x": 441.2213256835937, "y": 592.8371643066406 }, { "x": 439.7489929199219, "y": 591.7172241210938 }, { "x": 445.04791259765625, "y": 590.3483703613281 }, { "x": 448.9587951660156, "y": 567.4672058105468 }, { "x": 464.3316223144531, "y": 549.5123168945312 }, { "x": 275.1553619384765, "y": 447.3535461425781 }, { "x": 268.65517578125, "y": 443.8455139160156 }, { "x": 271.5111663818359, "y": 448.4152526855469 }];
const uaeMobile = [{ "x": 357.7199951171875, "y": 149.84000244140626 }, { "x": 356.93376464843755, "y": 156.3064208984375 }, { "x": 354.9462890625, "y": 163.2963623046875 }, { "x": 355.577392578125, "y": 170.85264892578127 }, { "x": 358.4052978515625, "y": 177.2900390625 }, { "x": 355.568359375, "y": 184.28472900390625 }, { "x": 357.6545654296875, "y": 189.1988037109375 }, { "x": 364.9746337890625, "y": 188.30123291015627 }, { "x": 369.34318847656255, "y": 193.37270507812502 }, { "x": 372.51462402343753, "y": 200.29996337890626 }, { "x": 366.25737304687505, "y": 203.41652832031252 }, { "x": 359.15720214843753, "y": 206.32115478515627 }, { "x": 352.21269531250005, "y": 205.68233642578127 }, { "x": 344.60808105468755, "y": 205.52740478515625 }, { "x": 337.681298828125, "y": 208.7417724609375 }, { "x": 331.64702148437505, "y": 211.85366210937502 }, { "x": 336.99692382812503, "y": 217.0548828125 }, { "x": 337.894482421875, "y": 224.57622070312502 }, { "x": 334.96262207031253, "y": 231.385693359375 }, { "x": 332.3523193359375, "y": 238.5135498046875 }, { "x": 329.965234375, "y": 245.7137451171875 }, { "x": 325.4175537109375, "y": 251.81093750000002 }, { "x": 323.7626953125, "y": 259.292578125 }, { "x": 321.6985107421875, "y": 266.664501953125 }, { "x": 317.97983398437503, "y": 273.365185546875 }, { "x": 314.258935546875, "y": 280.0633056640625 }, { "x": 312.0923095703125, "y": 287.42233886718753 }, { "x": 311.96171875, "y": 295.0660888671875 }, { "x": 312.191162109375, "y": 302.73020019531253 }, { "x": 311.67917480468753, "y": 310.3844482421875 }, { "x": 308.94956054687503, "y": 317.2015625 }, { "x": 302.951171875, "y": 320.414306640625 }, { "x": 295.3450927734375, "y": 319.4158203125 }, { "x": 287.741162109375, "y": 318.4010009765625 }, { "x": 280.1370849609375, "y": 317.3873779296875 }, { "x": 272.5327880859375, "y": 316.375390625 }, { "x": 264.9284912109375, "y": 315.363427734375 }, { "x": 257.3245849609375, "y": 314.3484130859375 }, { "x": 249.7205810546875, "y": 313.334228515625 }, { "x": 242.11630859375, "y": 312.32211914062503 }, { "x": 234.51250000000002, "y": 311.3063232421875 }, { "x": 226.90837402343752, "y": 310.29306640625003 }, { "x": 219.30421142578126, "y": 309.280029296875 }, { "x": 211.7004150390625, "y": 308.26425781250003 }, { "x": 204.09617919921877, "y": 307.251904296875 }, { "x": 196.49212646484375, "y": 306.2379638671875 }, { "x": 188.88826904296877, "y": 305.222705078125 }, { "x": 181.28397216796876, "y": 304.2107177734375 }, { "x": 173.6796875, "y": 303.1987548828125 }, { "x": 166.0755615234375, "y": 302.1853759765625 }, { "x": 158.47177734375, "y": 301.1696044921875 }, { "x": 150.8674560546875, "y": 300.15756835937503 }, { "x": 143.26346435546876, "y": 299.14328613281253 }, { "x": 135.65953369140624, "y": 298.12839355468753 }, { "x": 128.05526123046877, "y": 297.11640625 }, { "x": 120.45287475585938, "y": 296.09033203125 }, { "x": 112.92463989257813, "y": 294.7342529296875 }, { "x": 107.93421630859376, "y": 288.9427978515625 }, { "x": 103.24110717773438, "y": 282.8745361328125 }, { "x": 98.549072265625, "y": 276.80539550781253 }, { "x": 93.85199584960938, "y": 270.740185546875 }, { "x": 89.16281127929688, "y": 264.6689453125 }, { "x": 84.49930419921876, "y": 258.57783203125 }, { "x": 79.791796875, "y": 252.520751953125 }, { "x": 75.11986083984375, "y": 246.4361572265625 }, { "x": 70.42005615234376, "y": 240.37309570312502 }, { "x": 65.74246826171876, "y": 234.2928466796875 }, { "x": 61.06788635253906, "y": 228.2102783203125 }, { "x": 56.3808837890625, "y": 222.1372802734375 }, { "x": 51.71261901855469, "y": 216.04984130859376 }, { "x": 47.02704467773438, "y": 209.97573242187502 }, { "x": 42.354248046875, "y": 203.89180908203127 }, { "x": 38.59604187011719, "y": 197.34649658203125 }, { "x": 38.64003143310547, "y": 189.68824462890626 }, { "x": 39.82657928466797, "y": 182.53887939453125 }, { "x": 39.83128814697265, "y": 175.670751953125 }, { "x": 42.600030517578126, "y": 182.13872070312502 }, { "x": 44.138545227050784, "y": 189.186474609375 }, { "x": 46.78728332519532, "y": 186.35496826171877 }, { "x": 50.405120849609375, "y": 185.98853759765626 }, { "x": 54.20845031738281, "y": 186.8631591796875 }, { "x": 53.58919067382813, "y": 194.46656494140626 }, { "x": 54.53058776855469, "y": 202.03052978515626 }, { "x": 58.35319213867188, "y": 207.72509765625 }, { "x": 65.22861022949219, "y": 210.14089355468752 }, { "x": 70.33609313964844, "y": 208.24591064453125 }, { "x": 77.33637695312501, "y": 210.12120361328127 }, { "x": 84.51544189453125, "y": 209.46534423828126 }, { "x": 91.62321166992187, "y": 207.310546875 }, { "x": 98.47401123046876, "y": 204.837109375 }, { "x": 104.82548217773439, "y": 201.09722900390625 }, { "x": 110.74379272460938, "y": 196.5335693359375 }, { "x": 114.52992553710938, "y": 190.95061035156252 }, { "x": 120.19106445312501, "y": 193.77603759765626 }, { "x": 126.581396484375, "y": 195.2027587890625 }, { "x": 133.95347900390624, "y": 194.72005615234377 }, { "x": 141.49776611328127, "y": 195.8155029296875 }, { "x": 147.7265625, "y": 194.72551269531252 }, { "x": 154.315380859375, "y": 195.88211669921876 }, { "x": 157.22972412109377, "y": 194.59539794921875 }, { "x": 162.7572998046875, "y": 195.860302734375 }, { "x": 168.82149658203124, "y": 199.34816894531252 }, { "x": 176.3474853515625, "y": 198.00018310546875 }, { "x": 183.10211181640625, "y": 199.71608886718752 }, { "x": 189.403564453125, "y": 202.44061279296875 }, { "x": 196.34288330078127, "y": 203.05662841796877 }, { "x": 203.51624755859376, "y": 202.12861328125 }, { "x": 211.18387451171876, "y": 202.10208740234376 }, { "x": 217.96898193359377, "y": 198.78038330078127 }, { "x": 225.3591064453125, "y": 196.96025390625002 }, { "x": 232.44865722656252, "y": 194.3739990234375 }, { "x": 238.14858398437502, "y": 189.79307861328127 }, { "x": 244.7602294921875, "y": 186.12872314453125 }, { "x": 251.12834472656252, "y": 185.47156982421876 }, { "x": 256.12451171875, "y": 179.82242431640626 }, { "x": 258.1211181640625, "y": 172.74224853515625 }, { "x": 262.07490234375, "y": 171.36756591796876 }, { "x": 263.34355468750005, "y": 169.1260986328125 }, { "x": 261.9110107421875, "y": 167.3357177734375 }, { "x": 255.18935546875002, "y": 163.95462646484376 }, { "x": 256.7763916015625, "y": 162.83441162109375 }, { "x": 259.7800048828125, "y": 163.480078125 }, { "x": 262.8245849609375, "y": 164.57076416015624 }, { "x": 268.1328369140625, "y": 161.1983642578125 }, { "x": 269.0666259765625, "y": 155.65704345703125 }, { "x": 271.442041015625, "y": 150.245556640625 }, { "x": 271.7767333984375, "y": 143.962841796875 }, { "x": 277.7234619140625, "y": 141.78153076171876 }, { "x": 281.341357421875, "y": 137.13614501953126 }, { "x": 287.914111328125, "y": 133.18565673828124 }, { "x": 293.9072509765625, "y": 128.41732177734377 }, { "x": 299.187255859375, "y": 129.91079101562502 }, { "x": 301.7003662109375, "y": 137.1588623046875 }, { "x": 304.213427734375, "y": 144.4068359375 }, { "x": 306.726513671875, "y": 151.6549072265625 }, { "x": 310.70244140625, "y": 157.74093017578124 }, { "x": 318.34677734375003, "y": 157.76383056640626 }, { "x": 326.0120361328125, "y": 157.45721435546875 }, { "x": 333.3911865234375, "y": 155.71890869140626 }, { "x": 340.16928710937503, "y": 152.16090087890626 }, { "x": 347.1695068359375, "y": 149.06744384765625 }, { "x": 354.48344726562505, "y": 150.0322509765625 }, { "x": 194.73065185546875, "y": 191.993115234375 }, { "x": 201.25856933593752, "y": 188.12862548828127 }, { "x": 208.11058349609377, "y": 186.2285888671875 }, { "x": 212.18695068359375, "y": 188.3624267578125 }, { "x": 218.66820068359377, "y": 191.63712158203126 }, { "x": 214.16571044921875, "y": 195.67241210937502 }, { "x": 208.95413818359376, "y": 193.7193359375 }, { "x": 203.35196533203126, "y": 196.36354980468752 }, { "x": 196.10577392578125, "y": 194.21328125000002 }, { "x": 230.22160644531252, "y": 184.65260009765626 }, { "x": 233.3652099609375, "y": 181.43076171875 }, { "x": 236.37246093750002, "y": 187.87064208984376 }, { "x": 119.37322998046875, "y": 178.16983642578126 }, { "x": 117.050341796875, "y": 184.75196533203126 }, { "x": 112.7361328125, "y": 181.71453857421875 }, { "x": 167.1343994140625, "y": 183.429541015625 }, { "x": 160.30827636718752, "y": 184.4478515625 }, { "x": 165.92320556640627, "y": 182.02607421875 }, { "x": 172.3571533203125, "y": 180.50146484375 }, { "x": 175.21278076171876, "y": 175.79571533203125 }, { "x": 179.98587646484376, "y": 175.934033203125 }, { "x": 175.73696289062502, "y": 181.397412109375 }, { "x": 250.33349609375, "y": 170.7721923828125 }, { "x": 249.23125000000002, "y": 166.43026123046874 }, { "x": 252.1905029296875, "y": 167.6136474609375 }, { "x": 256.8691650390625, "y": 172.25872802734375 }, { "x": 240.896484375, "y": 183.64859619140626 }, { "x": 235.50356445312502, "y": 180.09254150390626 }, { "x": 240.6158203125, "y": 180.05228271484376 }, { "x": 246.6079833984375, "y": 179.96361083984377 }, { "x": 243.53813476562502, "y": 177.0728759765625 }, { "x": 246.224853515625, "y": 176.28615722656252 }, { "x": 94.14144897460938, "y": 167.75413818359377 }, { "x": 71.70239868164063, "y": 186.10538330078126 }, { "x": 70.62138366699219, "y": 187.62119140625 }, { "x": 49.97901306152344, "y": 158.546142578125 }, { "x": 152.43543701171876, "y": 135.30731201171875 }, { "x": 239.45949707031252, "y": 104.98777465820314 }, { "x": 209.473388671875, "y": 308.09958496093753 }, { "x": 201.84074707031252, "y": 307.077783203125 }, { "x": 194.20810546875, "y": 306.0559814453125 }, { "x": 186.57546386718752, "y": 305.0341796875 }, { "x": 178.942822265625, "y": 304.0123779296875 }, { "x": 171.3103271484375, "y": 302.989453125 }, { "x": 163.67851562500002, "y": 301.9614990234375 }, { "x": 156.04669189453125, "y": 300.93356933593753 }, { "x": 148.41488037109374, "y": 299.90561523437503 }, { "x": 140.783251953125, "y": 298.876171875 }, { "x": 133.15236816406252, "y": 297.841357421875 }, { "x": 125.522216796875, "y": 296.80112304687503 }, { "x": 117.893359375, "y": 295.75146484375 }, { "x": 110.99331054687501, "y": 293.01220703125 }, { "x": 106.21987915039062, "y": 286.97055664062503 }, { "x": 101.50404052734376, "y": 280.8826904296875 }, { "x": 96.79417724609375, "y": 274.79020996093755 }, { "x": 92.08673095703125, "y": 268.6958251953125 }, { "x": 87.38458862304688, "y": 262.59736328125 }, { "x": 82.68316040039062, "y": 256.4983642578125 }, { "x": 77.97565307617188, "y": 250.404052734375 }, { "x": 73.26570434570313, "y": 244.31162109375 }, { "x": 68.562353515625, "y": 238.2140869140625 }, { "x": 63.86480407714844, "y": 232.11210937500002 }, { "x": 59.172097778320314, "y": 226.00639648437502 }, { "x": 54.485107421875, "y": 219.89627685546876 }, { "x": 49.80318908691406, "y": 213.78225097656252 }, { "x": 45.13059539794922, "y": 207.66114501953126 }, { "x": 40.48003997802735, "y": 201.52327880859377 }, { "x": 38.4436019897461, "y": 194.41846923828126 }, { "x": 38.24848785400391, "y": 186.72020263671877 }, { "x": 39.34898681640625, "y": 179.42839355468752 }, { "x": 41.350930786132814, "y": 177.58265380859376 }, { "x": 42.843927001953126, "y": 184.95878906250002 }, { "x": 45.448143005371094, "y": 186.12847900390625 }, { "x": 49.01502380371094, "y": 188.73551025390626 }, { "x": 53.040548706054686, "y": 183.8625 }, { "x": 53.825225830078125, "y": 191.22598876953126 }, { "x": 54.58456726074219, "y": 198.85230712890626 }, { "x": 56.01468200683594, "y": 206.33548583984376 }, { "x": 63.136932373046875, "y": 208.26518554687502 }, { "x": 68.41583251953125, "y": 208.11953125000002 }, { "x": 75.6513427734375, "y": 210.02425537109377 }, { "x": 83.31824340820313, "y": 209.52252197265625 }, { "x": 90.67374877929687, "y": 207.74222412109376 }, { "x": 97.74420776367188, "y": 205.32760009765627 }, { "x": 104.33358764648438, "y": 201.60173339843752 }, { "x": 110.23556518554688, "y": 196.83572998046876 }, { "x": 114.27284545898438, "y": 191.42165527343752 }, { "x": 119.9366943359375, "y": 193.2366943359375 }, { "x": 126.5065673828125, "y": 195.05072021484375 }, { "x": 133.9717529296875, "y": 194.72034912109376 }, { "x": 141.59676513671877, "y": 195.68052978515627 }, { "x": 148.07410888671876, "y": 194.76217041015627 }, { "x": 154.79066162109376, "y": 195.94085693359375 }, { "x": 157.52739257812502, "y": 193.3512939453125 }, { "x": 163.87681884765627, "y": 197.00633544921877 }, { "x": 170.50474853515627, "y": 199.03082275390625 }, { "x": 178.05755615234375, "y": 197.531494140625 }, { "x": 184.84534912109376, "y": 199.44515380859377 }, { "x": 191.11519775390627, "y": 203.30058593750002 }, { "x": 198.34866943359376, "y": 201.85573730468752 }, { "x": 205.817578125, "y": 202.13388671875 }, { "x": 213.33292236328126, "y": 201.1588134765625 }, { "x": 220.38543701171875, "y": 198.22584228515626 }, { "x": 227.70805664062502, "y": 195.90725097656252 }, { "x": 234.3035400390625, "y": 192.3615234375 }, { "x": 240.72314453125, "y": 188.71856689453125 }, { "x": 247.1483154296875, "y": 184.8086669921875 }, { "x": 253.495703125, "y": 183.12098388671876 }, { "x": 257.4820068359375, "y": 176.57886962890626 }, { "x": 259.19111328125, "y": 170.22703857421877 }, { "x": 261.53603515625, "y": 168.3227783203125 }, { "x": 262.651611328125, "y": 167.5672119140625 }, { "x": 255.6530517578125, "y": 164.62596435546877 }, { "x": 256.4298095703125, "y": 162.193310546875 }, { "x": 260.32177734375, "y": 164.08858642578124 }, { "x": 264.0198486328125, "y": 164.74703369140624 }, { "x": 268.696923828125, "y": 159.6317138671875 }, { "x": 270.24711914062505, "y": 154.46062011718752 }, { "x": 270.7342529296875, "y": 147.82435302734376 }, { "x": 273.87333984375005, "y": 142.00125732421876 }, { "x": 279.82294921875, "y": 140.05455322265624 }, { "x": 284.0179443359375, "y": 135.35623779296876 }, { "x": 290.4155517578125, "y": 131.08083496093752 }, { "x": 296.8064697265625, "y": 126.89656982421876 }, { "x": 302.1161376953125, "y": 122.74678955078126 }, { "x": 307.59128417968753, "y": 117.76101074218751 }, { "x": 312.400341796875, "y": 111.746826171875 }, { "x": 316.8812744140625, "y": 105.50108642578125 }, { "x": 321.18381347656253, "y": 105.22982788085938 }, { "x": 321.80673828125003, "y": 104.57154541015626 }, { "x": 322.2503173828125, "y": 98.0021728515625 }, { "x": 327.22153320312503, "y": 93.70911865234375 }, { "x": 332.05263671875, "y": 89.91085815429688 }, { "x": 334.8235595703125, "y": 83.3823486328125 }, { "x": 338.2183837890625, "y": 76.5192138671875 }, { "x": 339.303662109375, "y": 80.23677368164063 }, { "x": 345.50273437500005, "y": 77.09532470703125 }, { "x": 350.17180175781255, "y": 71.1689453125 }, { "x": 356.11130371093753, "y": 66.63420715332032 }, { "x": 362.75021972656253, "y": 62.872314453125 }, { "x": 367.77919921875, "y": 57.04697875976563 }, { "x": 368.8511474609375, "y": 59.696813964843756 }, { "x": 371.63835449218755, "y": 52.71263427734375 }, { "x": 375.4085693359375, "y": 46.53750915527344 }, { "x": 375.3333740234375, "y": 44.695777893066406 }, { "x": 377.805908203125, "y": 37.42652740478516 }, { "x": 384.078857421875, "y": 34.402626037597656 }, { "x": 386.488525390625, "y": 40.992765808105474 }, { "x": 385.85722656250005, "y": 48.65733642578125 }, { "x": 383.5534912109375, "y": 55.87287292480469 }, { "x": 384.247314453125, "y": 62.484106445312506 }, { "x": 384.9215087890625, "y": 69.44247436523438 }, { "x": 391.10405273437505, "y": 72.51944580078126 }, { "x": 398.295654296875, "y": 73.76667480468751 }, { "x": 400.756591796875, "y": 80.91591796875 }, { "x": 400.46865234375, "y": 88.60928955078126 }, { "x": 401.2451904296875, "y": 95.95646362304687 }, { "x": 401.0811767578125, "y": 103.54550170898438 }, { "x": 400.39946289062505, "y": 111.20794677734375 }, { "x": 400.186767578125, "y": 118.90579223632812 }, { "x": 401.383740234375, "y": 126.26834716796876 }, { "x": 396.7011962890625, "y": 130.57525634765625 }, { "x": 392.190380859375, "y": 136.38255615234374 }, { "x": 385.5599365234375, "y": 139.6962890625 }, { "x": 381.7103515625, "y": 146.27628173828126 }, { "x": 379.142724609375, "y": 142.63089599609376 }, { "x": 377.528515625, "y": 136.57279052734376 }, { "x": 373.7830322265625, "y": 130.30397949218752 }, { "x": 367.951806640625, "y": 126.508642578125 }, { "x": 361.22905273437505, "y": 129.87733154296876 }, { "x": 357.0888671875, "y": 136.1900146484375 }, { "x": 357.4399658203125, "y": 143.87650146484376 }, { "x": 358.415771484375, "y": 151.31083984375002 }, { "x": 356.55637207031253, "y": 158.1167724609375 }, { "x": 355.474853515625, "y": 165.27324218750002 }, { "x": 356.53312988281255, "y": 172.55281982421874 }, { "x": 358.083203125, "y": 179.27554931640626 }, { "x": 354.73576660156255, "y": 186.19913330078126 }, { "x": 359.9660888671875, "y": 189.50755615234377 }, { "x": 367.27902832031253, "y": 188.78238525390626 }, { "x": 370.20725097656253, "y": 195.78273925781252 }, { "x": 371.0472412109375, "y": 202.119970703125 }, { "x": 363.750732421875, "y": 204.56654052734376 }, { "x": 356.4785400390625, "y": 206.425146484375 }, { "x": 349.19169921875005, "y": 205.56531982421876 }, { "x": 341.6880126953125, "y": 206.71981201171877 }, { "x": 334.6753662109375, "y": 209.837255859375 }, { "x": 334.08583984375, "y": 214.45574951171875 }, { "x": 337.76010742187503, "y": 220.68118896484376 }, { "x": 337.1885009765625, "y": 228.1546142578125 }, { "x": 333.38493652343755, "y": 234.8005126953125 }, { "x": 331.439697265625, "y": 242.2510986328125 }, { "x": 327.4599853515625, "y": 248.67021484375002 }, { "x": 324.48923339843753, "y": 255.671728515625 }, { "x": 322.84885253906253, "y": 263.19279785156255 }, { "x": 319.7889404296875, "y": 270.24228515625 }, { "x": 316.0155517578125, "y": 276.955078125 }, { "x": 313.11801757812503, "y": 284.0631591796875 }, { "x": 311.88251953125, "y": 291.6248046875 }, { "x": 312.14597167968753, "y": 299.320849609375 }, { "x": 311.92514648437503, "y": 307.0156494140625 }, { "x": 311.0201904296875, "y": 314.5546875 }, { "x": 306.1852294921875, "y": 320.52802734375 }, { "x": 298.5769287109375, "y": 319.9185791015625 }, { "x": 290.9414794921875, "y": 318.918017578125 }, { "x": 283.3067626953125, "y": 317.9122802734375 }, { "x": 275.6721923828125, "y": 316.90390625000003 }, { "x": 268.0384033203125, "y": 315.891162109375 }, { "x": 260.4044921875, "y": 314.878369140625 }, { "x": 252.770703125, "y": 313.865625 }, { "x": 245.1369384765625, "y": 312.8522216796875 }, { "x": 237.5037353515625, "y": 311.835009765625 }, { "x": 229.8704345703125, "y": 310.8177978515625 }, { "x": 222.23723144531252, "y": 309.8005859375 }, { "x": 214.60393066406252, "y": 308.783349609375 }, { "x": 394.3755615234375, "y": 104.083837890625 }, { "x": 397.9905517578125, "y": 99.72142944335938 }, { "x": 391.543115234375, "y": 97.54414062500001 }, { "x": 388.519482421875, "y": 103.46812133789064 }, { "x": 392.3301025390625, "y": 101.8175537109375 }, { "x": 202.2420654296875, "y": 196.29498291015625 }, { "x": 194.88151855468752, "y": 194.20128173828127 }, { "x": 198.29820556640627, "y": 189.95467529296877 }, { "x": 205.24554443359375, "y": 187.82902832031252 }, { "x": 210.63802490234377, "y": 186.0479736328125 }, { "x": 216.7451904296875, "y": 189.92257080078127 }, { "x": 216.8121337890625, "y": 195.46263427734377 }, { "x": 210.40616455078126, "y": 193.301025390625 }, { "x": 204.784423828125, "y": 196.6077392578125 }, { "x": 72.67410278320312, "y": 187.3839111328125 }, { "x": 232.25051269531252, "y": 186.012158203125 }, { "x": 231.1909912109375, "y": 180.48381347656252 }, { "x": 236.3914306640625, "y": 185.2483642578125 }, { "x": 113.16274414062501, "y": 183.17827148437502 }, { "x": 115.88133544921875, "y": 176.79783935546877 }, { "x": 119.753955078125, "y": 181.43040771484377 }, { "x": 170.0400634765625, "y": 185.13441162109376 }, { "x": 163.00576171875, "y": 184.3145263671875 }, { "x": 163.05472412109376, "y": 182.55190429687502 }, { "x": 170.12564697265626, "y": 179.77437744140627 }, { "x": 173.74196777343752, "y": 177.72233886718752 }, { "x": 178.23203125, "y": 174.36562500000002 }, { "x": 177.92076416015627, "y": 180.44643554687502 }, { "x": 171.37608642578127, "y": 184.0372314453125 }, { "x": 235.6816162109375, "y": 179.23846435546875 }, { "x": 241.16823730468752, "y": 180.58132324218752 }, { "x": 237.8128662109375, "y": 183.17357177734377 }, { "x": 243.83693847656252, "y": 175.46190185546877 }, { "x": 246.2520751953125, "y": 180.73696289062502 }, { "x": 248.750732421875, "y": 170.4694580078125 }, { "x": 250.02312011718752, "y": 165.26046142578124 }, { "x": 253.9357666015625, "y": 168.60955810546875 }, { "x": 254.64934082031252, "y": 172.254736328125 }, { "x": 93.74945068359375, "y": 162.71097412109376 }, { "x": 94.37999267578125, "y": 168.1101806640625 }, { "x": 51.039895629882814, "y": 158.19730224609376 }, { "x": 152.06702880859376, "y": 133.25362548828127 }, { "x": 236.840087890625, "y": 105.36047973632813 }];
const moroccoMobile = [{ "x": 283.698828125, "y": 22.358984375 }, { "x": 278.90867919921874, "y": 23.828299903869627 }, { "x": 274.2729614257812, "y": 25.34518508911133 }, { "x": 272.94927368164065, "y": 30.380560302734374 }, { "x": 271.2439758300781, "y": 35.30085487365723 }, { "x": 269.5816345214844, "y": 40.240659332275385 }, { "x": 267.6981018066406, "y": 45.08912734985351 }, { "x": 265.9200927734375, "y": 49.98898162841797 }, { "x": 263.8835021972656, "y": 54.78795852661133 }, { "x": 261.6476745605469, "y": 59.497300720214845 }, { "x": 259.09410400390624, "y": 64.04047698974608 }, { "x": 256.61826171875, "y": 68.62703094482421 }, { "x": 253.64299926757812, "y": 72.9023468017578 }, { "x": 250.10102539062498, "y": 76.71318359374999 }, { "x": 245.5769287109375, "y": 79.29833526611327 }, { "x": 241.13880004882813, "y": 81.9405517578125 }, { "x": 236.63922119140625, "y": 84.44770050048828 }, { "x": 231.98343505859376, "y": 86.62785491943359 }, { "x": 227.21769409179686, "y": 88.73088073730469 }, { "x": 222.47352294921873, "y": 90.73176574707031 }, { "x": 218.27247924804686, "y": 93.60619201660155 }, { "x": 213.98583374023437, "y": 95.63406677246094 }, { "x": 211.39974365234374, "y": 100.12113037109374 }, { "x": 207.90360107421876, "y": 103.9858917236328 }, { "x": 204.21587524414062, "y": 107.67117309570312 }, { "x": 200.50581054687498, "y": 111.334033203125 }, { "x": 199.21235351562498, "y": 115.66127319335938 }, { "x": 198.8250305175781, "y": 120.52782287597655 }, { "x": 197.30715942382812, "y": 125.359765625 }, { "x": 194.4989990234375, "y": 129.71234741210935 }, { "x": 191.2364990234375, "y": 133.77483520507812 }, { "x": 188.95022583007812, "y": 138.4185089111328 }, { "x": 186.33905029296875, "y": 142.87347412109375 }, { "x": 186.32301025390623, "y": 147.4503143310547 }, { "x": 185.85446166992188, "y": 152.62433471679688 }, { "x": 186.04712524414063, "y": 157.83419799804688 }, { "x": 184.81072387695312, "y": 162.83112792968748 }, { "x": 188.01014404296873, "y": 166.16176147460936 }, { "x": 190.82568359375, "y": 170.40263977050782 }, { "x": 190.02027587890623, "y": 175.5338134765625 }, { "x": 188.33746337890625, "y": 180.46237182617188 }, { "x": 185.86940307617186, "y": 185.04656372070312 }, { "x": 182.5558898925781, "y": 189.0658203125 }, { "x": 179.99640502929688, "y": 193.57050781249998 }, { "x": 177.18339233398436, "y": 197.95121459960936 }, { "x": 173.61614990234375, "y": 201.7304931640625 }, { "x": 170.26705017089844, "y": 205.70955810546874 }, { "x": 165.95948486328123, "y": 208.638330078125 }, { "x": 161.4043975830078, "y": 211.17327880859375 }, { "x": 157.13570556640624, "y": 214.15408935546876 }, { "x": 153.326708984375, "y": 217.70977783203125 }, { "x": 149.93359985351563, "y": 221.664599609375 }, { "x": 146.0422607421875, "y": 224.99356689453126 }, { "x": 141.19631958007812, "y": 226.91610107421874 }, { "x": 136.45724792480468, "y": 229.08417968749998 }, { "x": 131.47772216796875, "y": 230.61111450195312 }, { "x": 126.38622741699218, "y": 231.73052978515625 }, { "x": 121.24971618652343, "y": 232.6212646484375 }, { "x": 116.11637268066406, "y": 233.51038818359373 }, { "x": 113.20897827148437, "y": 237.39610595703124 }, { "x": 109.82613220214843, "y": 241.13841552734374 }, { "x": 108.12408447265625, "y": 246.0647216796875 }, { "x": 106.13741760253906, "y": 250.88083496093748 }, { "x": 104.17410583496094, "y": 255.6771728515625 }, { "x": 102.55009765625, "y": 260.63004760742183 }, { "x": 100.08861999511718, "y": 265.17265625 }, { "x": 95.90027923583985, "y": 268.25791015625 }, { "x": 91.4057632446289, "y": 270.89874877929685 }, { "x": 86.68339538574219, "y": 272.8440246582031 }, { "x": 82.78134002685547, "y": 276.0627990722656 }, { "x": 80.1174530029297, "y": 280.3002075195312 }, { "x": 78.94773406982421, "y": 285.35216064453124 }, { "x": 76.48899383544921, "y": 289.9183898925781 }, { "x": 74.86002807617187, "y": 294.86712646484375 }, { "x": 72.77713012695312, "y": 299.62876586914064 }, { "x": 72.17360076904296, "y": 304.7737548828125 }, { "x": 72.1750244140625, "y": 309.9745361328125 }, { "x": 71.0370880126953, "y": 315.0400756835937 }, { "x": 67.8713363647461, "y": 319.00758666992186 }, { "x": 63.57115020751953, "y": 321.8851806640625 }, { "x": 60.080596923828125, "y": 325.75648803710936 }, { "x": 56.48460464477539, "y": 329.53078613281247 }, { "x": 52.73719100952148, "y": 333.0970947265625 }, { "x": 48.740133666992186, "y": 336.38482666015625 }, { "x": 46.024512481689456, "y": 340.82908935546874 }, { "x": 48.1594741821289, "y": 338.89483642578125 }, { "x": 51.632659912109375, "y": 335.189990234375 }, { "x": 51.2303955078125, "y": 337.8835815429687 }, { "x": 48.48472213745117, "y": 342.3052124023437 }, { "x": 46.21050415039062, "y": 346.82154541015626 }, { "x": 43.547917175292966, "y": 351.2978149414062 }, { "x": 41.41736831665039, "y": 355.63280029296874 }, { "x": 40.51472930908203, "y": 359.39246826171876 }, { "x": 38.25484733581543, "y": 363.54046630859375 }, { "x": 36.75837669372558, "y": 368.45985107421876 }, { "x": 34.769260787963866, "y": 373.19276123046876 }, { "x": 30.392333984375, "y": 374.7049926757812 }, { "x": 27.263561058044434, "y": 378.71654052734374 }, { "x": 25.374521446228027, "y": 383.57436523437497 }, { "x": 23.744436168670653, "y": 388.476025390625 }, { "x": 23.179111766815186, "y": 393.6573974609375 }, { "x": 22.30463366508484, "y": 398.79555664062497 }, { "x": 21.739809656143187, "y": 403.9779907226562 }, { "x": 21.478628158569336, "y": 409.1834228515625 }, { "x": 22.548602676391603, "y": 406.1138427734375 }, { "x": 24.007870864868163, "y": 401.11074218749997 }, { "x": 27.345008087158202, "y": 398.47182617187497 }, { "x": 32.55686264038086, "y": 398.3369873046875 }, { "x": 37.76893920898438, "y": 398.21064453125 }, { "x": 42.982114410400385, "y": 398.14637451171876 }, { "x": 48.19563293457031, "y": 398.1098999023437 }, { "x": 53.40919952392578, "y": 398.087890625 }, { "x": 58.62277526855468, "y": 398.07606201171876 }, { "x": 63.83641510009765, "y": 398.07338867187497 }, { "x": 69.04999084472655, "y": 398.07679443359376 }, { "x": 74.26362152099608, "y": 398.0863525390625 }, { "x": 79.47716979980468, "y": 398.104736328125 }, { "x": 84.6907455444336, "y": 398.1281372070312 }, { "x": 89.90428924560547, "y": 398.152197265625 }, { "x": 95.11790618896484, "y": 398.17629394531247 }, { "x": 100.3314453125, "y": 398.2003540039062 }, { "x": 105.54498901367187, "y": 398.2244506835937 }, { "x": 110.75853271484375, "y": 398.2485107421875 }, { "x": 114.07107543945312, "y": 396.60272216796875 }, { "x": 113.52181396484374, "y": 391.4181640625 }, { "x": 113.01837463378907, "y": 386.228955078125 }, { "x": 112.53011474609374, "y": 381.0382446289062 }, { "x": 112.05332641601562, "y": 375.84654541015624 }, { "x": 111.59004211425781, "y": 370.653564453125 }, { "x": 111.15591735839844, "y": 365.45802001953126 }, { "x": 111.62673645019531, "y": 360.2963500976562 }, { "x": 113.46283569335937, "y": 355.42629394531247 }, { "x": 116.24789733886719, "y": 351.03209228515624 }, { "x": 120.45764770507812, "y": 348.2176879882812 }, { "x": 125.62693481445312, "y": 347.5501220703125 }, { "x": 130.81689453125, "y": 347.0536865234375 }, { "x": 136.00149841308593, "y": 346.5062744140625 }, { "x": 136.93115234375, "y": 342.1403442382812 }, { "x": 136.8984405517578, "y": 336.92685546875 }, { "x": 136.86573791503906, "y": 331.7132934570312 }, { "x": 136.83303527832032, "y": 326.4997863769531 }, { "x": 136.80032348632812, "y": 321.2862976074219 }, { "x": 136.7676208496094, "y": 316.0728088378906 }, { "x": 136.73491821289062, "y": 310.85926513671876 }, { "x": 136.70220642089845, "y": 305.645703125 }, { "x": 136.66950378417968, "y": 300.4322143554687 }, { "x": 136.63680114746091, "y": 295.2187072753906 }, { "x": 136.60409851074218, "y": 290.0052185058594 }, { "x": 136.57138671874998, "y": 284.7917114257812 }, { "x": 140.233642578125, "y": 283.25 }, { "x": 145.44724121093748, "y": 283.25 }, { "x": 150.66083984374998, "y": 283.25 }, { "x": 155.8744384765625, "y": 283.25 }, { "x": 161.088037109375, "y": 283.25 }, { "x": 166.30170898437498, "y": 283.25 }, { "x": 171.5153076171875, "y": 283.25 }, { "x": 176.72890625, "y": 283.25 }, { "x": 181.9425048828125, "y": 283.25 }, { "x": 187.156103515625, "y": 283.25 }, { "x": 192.369775390625, "y": 283.25 }, { "x": 197.5833740234375, "y": 283.25 }, { "x": 202.79697265625, "y": 283.25 }, { "x": 208.01057128906248, "y": 283.25 }, { "x": 212.15719604492188, "y": 282.17006225585936 }, { "x": 212.2202392578125, "y": 276.95677490234374 }, { "x": 212.2832824707031, "y": 271.7435424804687 }, { "x": 212.34634399414062, "y": 266.53032836914065 }, { "x": 212.40936889648438, "y": 261.3171142578125 }, { "x": 212.468310546875, "y": 256.1038452148438 }, { "x": 212.52086181640624, "y": 250.8904846191406 }, { "x": 212.56768188476562, "y": 245.67703247070312 }, { "x": 212.60871582031248, "y": 240.4635986328125 }, { "x": 212.64306640625, "y": 235.25016479492186 }, { "x": 212.6683349609375, "y": 230.03658447265624 }, { "x": 212.67499999999998, "y": 224.82294921874998 }, { "x": 212.67499999999998, "y": 219.6093505859375 }, { "x": 212.67499999999998, "y": 214.395751953125 }, { "x": 217.0302001953125, "y": 211.827294921875 }, { "x": 221.04779052734375, "y": 208.5124084472656 }, { "x": 225.31015625, "y": 205.5257568359375 }, { "x": 229.49847412109375, "y": 202.4497314453125 }, { "x": 233.87015380859376, "y": 199.62543945312498 }, { "x": 238.21711425781248, "y": 197.24993896484375 }, { "x": 243.174072265625, "y": 195.91854248046874 }, { "x": 247.5970947265625, "y": 193.34098510742186 }, { "x": 252.6904296875, "y": 194.30219726562498 }, { "x": 257.5419738769531, "y": 193.64669799804688 }, { "x": 262.5692443847656, "y": 192.4208801269531 }, { "x": 267.75971679687495, "y": 191.98675537109375 }, { "x": 272.96622924804683, "y": 191.72412719726563 }, { "x": 278.0974670410156, "y": 191.13388671875 }, { "x": 281.2923095703125, "y": 193.86343994140626 }, { "x": 285.1272338867187, "y": 191.26707763671874 }, { "x": 287.92314453125, "y": 186.87124633789062 }, { "x": 290.5276733398437, "y": 182.50568237304688 }, { "x": 294.66660766601564, "y": 179.33660278320312 }, { "x": 298.95037841796875, "y": 176.386279296875 }, { "x": 303.522998046875, "y": 173.88613891601562 }, { "x": 307.54604492187497, "y": 170.58380432128905 }, { "x": 311.50152587890625, "y": 167.20164489746094 }, { "x": 316.3971252441406, "y": 165.52176208496093 }, { "x": 321.4871459960937, "y": 164.42731323242188 }, { "x": 326.32757568359375, "y": 162.51705627441405 }, { "x": 326.8754455566406, "y": 158.11496276855468 }, { "x": 328.92657470703125, "y": 153.621435546875 }, { "x": 325.9212280273437, "y": 151.33906249999998 }, { "x": 323.7493957519531, "y": 149.2706298828125 }, { "x": 325.11408081054685, "y": 145.1709991455078 }, { "x": 326.3264221191406, "y": 140.55992736816404 }, { "x": 328.6674438476562, "y": 137.3253143310547 }, { "x": 333.7603393554687, "y": 136.2098358154297 }, { "x": 338.8375610351562, "y": 135.0253448486328 }, { "x": 343.87380371093747, "y": 133.68976440429685 }, { "x": 343.5827392578125, "y": 129.2129638671875 }, { "x": 344.13245849609376, "y": 125.27039184570312 }, { "x": 349.34133300781247, "y": 125.11845092773437 }, { "x": 354.4014892578125, "y": 124.04375915527343 }, { "x": 359.5947998046875, "y": 124.27112121582032 }, { "x": 364.59002685546875, "y": 123.93892211914063 }, { "x": 369.69471435546876, "y": 124.95737304687499 }, { "x": 374.8634887695312, "y": 125.59600830078125 }, { "x": 380.06727294921876, "y": 125.90941162109375 }, { "x": 381.8720703125, "y": 123.325244140625 }, { "x": 381.45437011718747, "y": 118.78831176757812 }, { "x": 385.25391845703126, "y": 115.67951049804687 }, { "x": 383.8218139648437, "y": 111.89764099121093 }, { "x": 379.56519775390626, "y": 108.89391479492187 }, { "x": 376.0375610351562, "y": 105.14728393554687 }, { "x": 375.9529296875, "y": 100.74572143554687 }, { "x": 373.32459716796876, "y": 96.50926513671875 }, { "x": 371.51613769531247, "y": 91.74679260253906 }, { "x": 372.9625610351562, "y": 86.75698547363281 }, { "x": 371.0142456054687, "y": 82.45371856689454 }, { "x": 371.026806640625, "y": 78.62035522460937 }, { "x": 371.4838012695312, "y": 73.45647888183593 }, { "x": 370.8795532226562, "y": 68.39278869628906 }, { "x": 369.145361328125, "y": 63.68009796142578 }, { "x": 369.5791748046875, "y": 59.67660675048828 }, { "x": 368.7173706054687, "y": 55.38859939575195 }, { "x": 367.1954711914062, "y": 51.99701690673828 }, { "x": 363.7212646484375, "y": 48.45032577514648 }, { "x": 359.5723510742187, "y": 45.575130462646484 }, { "x": 355.3540405273437, "y": 42.94686431884766 }, { "x": 350.4653076171875, "y": 44.02695083618164 }, { "x": 345.7782470703125, "y": 42.05414733886718 }, { "x": 342.34523925781247, "y": 38.18788452148438 }, { "x": 340.81788330078126, "y": 35.505605697631836 }, { "x": 337.5108154296875, "y": 39.279337310791014 }, { "x": 332.778857421875, "y": 41.06633911132812 }, { "x": 327.6977905273437, "y": 40.10850524902344 }, { "x": 323.5239562988281, "y": 39.901580047607425 }, { "x": 319.4427551269531, "y": 39.50692596435547 }, { "x": 314.44086303710935, "y": 40.97670669555664 }, { "x": 309.3856689453125, "y": 42.12862319946289 }, { "x": 304.29308471679684, "y": 41.03999252319336 }, { "x": 299.6539611816406, "y": 39.04233245849609 }, { "x": 295.68385009765626, "y": 35.79511489868164 }, { "x": 292.09827880859376, "y": 32.17552261352539 }, { "x": 289.4103088378906, "y": 28.18647155761719 }, { "x": 287.88099365234376, "y": 23.50680503845215 }, { "x": 343.72438964843747, "y": 41.0472412109375 }, { "x": 344.4504760742187, "y": 43.19997787475586 }, { "x": 267.62890625, "y": 46.30625 }, { "x": 267.6226440429688, "y": 50.444827270507815 }, { "x": 265.4846130371094, "y": 51.81581344604492 }, { "x": 263.3421875, "y": 56.55432434082031 }, { "x": 260.99228515625, "y": 61.192807006835935 }, { "x": 258.2783142089844, "y": 65.63143463134764 }, { "x": 255.91171264648438, "y": 70.23785095214843 }, { "x": 252.639453125, "y": 74.27075805664063 }, { "x": 248.764208984375, "y": 77.22301788330077 }, { "x": 249.68755493164062, "y": 80.70679168701172 }, { "x": 251.94506225585937, "y": 83.93790740966796 }, { "x": 255.18150634765624, "y": 85.7569091796875 }, { "x": 254.84653320312498, "y": 90.25790252685546 }, { "x": 254.67168579101562, "y": 94.78583068847657 }, { "x": 259.5566101074219, "y": 94.87939758300782 }, { "x": 263.02418823242186, "y": 95.10600433349609 }, { "x": 264.7292297363281, "y": 91.64087524414062 }, { "x": 268.67057495117183, "y": 89.96784973144531 }, { "x": 271.2599792480469, "y": 93.37779083251952 }, { "x": 275.6752197265625, "y": 92.57307434082031 }, { "x": 278.2467895507812, "y": 90.45883789062499 }, { "x": 278.42919921875, "y": 85.27648162841797 }, { "x": 279.1437133789062, "y": 80.14074401855468 }, { "x": 277.2775024414062, "y": 76.3419921875 }, { "x": 276.67063598632814, "y": 72.4316192626953 }, { "x": 275.62274169921875, "y": 68.43406524658204 }, { "x": 279.4275817871094, "y": 67.0938751220703 }, { "x": 282.430712890625, "y": 69.32225494384765 }, { "x": 284.7733642578125, "y": 68.86089324951172 }, { "x": 286.28257446289064, "y": 65.22369995117188 }, { "x": 286.2583312988281, "y": 62.321208190917964 }, { "x": 289.83718261718747, "y": 59.264418029785155 }, { "x": 292.3177856445312, "y": 56.13597640991211 }, { "x": 290.4825012207031, "y": 53.320624542236324 }, { "x": 285.6421813964844, "y": 52.61625442504883 }, { "x": 281.7435729980469, "y": 50.7323486328125 }, { "x": 277.6007934570312, "y": 48.21128845214844 }, { "x": 272.7949340820312, "y": 46.69138717651367 }];
const italyMobile = [{ "x": 279.5555419921875, "y": 335.4654235839844 }, { "x": 278.39715576171875, "y": 337.9561767578125 }, { "x": 281.4784851074219, "y": 335.6739196777344 }, { "x": 288.81451416015625, "y": 345.3099365234375 }, { "x": 54.24353790283203, "y": 175.49783325195312 }, { "x": 59.40538024902344, "y": 173.377685546875 }, { "x": 61.781986236572266, "y": 178.06643676757812 }, { "x": 58.735191345214844, "y": 183.45709228515625 }, { "x": 54.012840270996094, "y": 188.0635223388672 }, { "x": 57.56132888793945, "y": 192.15769958496094 }, { "x": 63.48943328857422, "y": 191.05935668945312 }, { "x": 69.6588020324707, "y": 189.6061248779297 }, { "x": 74.94558334350586, "y": 186.29696655273438 }, { "x": 78.17946243286133, "y": 181.66102600097656 }, { "x": 80.8589096069336, "y": 175.83612060546875 }, { "x": 86.815673828125, "y": 172.6191864013672 }, { "x": 88.79248809814453, "y": 167.39772033691406 }, { "x": 93.07328796386719, "y": 163.97738647460938 }, { "x": 99.236572265625, "y": 161.09768676757812 }, { "x": 104.65717315673828, "y": 162.7185516357422 }, { "x": 111.32962036132812, "y": 164.18841552734375 }, { "x": 114.47840118408203, "y": 166.02816772460938 }, { "x": 120.24346923828125, "y": 167.68531799316406 }, { "x": 124.53416442871094, "y": 170.9006805419922 }, { "x": 129.37745666503906, "y": 175.4815673828125 }, { "x": 134.15152740478516, "y": 178.04347229003906 }, { "x": 136.70260620117188, "y": 176.76806640625 }, { "x": 142.12036895751953, "y": 180.11874389648438 }, { "x": 147.44329833984375, "y": 183.91419982910156 }, { "x": 150.95565795898438, "y": 189.61424255371094 }, { "x": 152.17803955078125, "y": 196.2274627685547 }, { "x": 152.73805236816406, "y": 202.0000457763672 }, { "x": 154.674560546875, "y": 207.9058837890625 }, { "x": 157.9022674560547, "y": 213.902099609375 }, { "x": 160.52700805664062, "y": 219.87051391601562 }, { "x": 160.6791229248047, "y": 226.7971954345703 }, { "x": 159.24864196777344, "y": 233.1737823486328 }, { "x": 164.51913452148438, "y": 232.193603515625 }, { "x": 169.2285919189453, "y": 236.31068420410156 }, { "x": 170.71600341796875, "y": 240.91888427734375 }, { "x": 176.5482940673828, "y": 243.9733428955078 }, { "x": 180.13427734375, "y": 248.99208068847656 }, { "x": 183.38714599609375, "y": 253.01806640625 }, { "x": 180.1881866455078, "y": 256.3621063232422 }, { "x": 183.04708862304688, "y": 260.1553955078125 }, { "x": 188.25364685058594, "y": 258.21275329589844 }, { "x": 194.76751708984375, "y": 260.6422882080078 }, { "x": 200.15272521972656, "y": 265.0216979980469 }, { "x": 203.193603515625, "y": 271.09759521484375 }, { "x": 206.8109893798828, "y": 276.0941162109375 }, { "x": 212.7851104736328, "y": 278.5174255371094 }, { "x": 217.5699462890625, "y": 283.2033996582031 }, { "x": 219.4742431640625, "y": 289.6418762207031 }, { "x": 225.53173828125, "y": 292.8344421386719 }, { "x": 230.1272735595703, "y": 298.0936279296875 }, { "x": 233.87579345703125, "y": 303.7183837890625 }, { "x": 239.3232421875, "y": 304.9512023925781 }, { "x": 245.12249755859375, "y": 307.2340087890625 }, { "x": 248.47561645507812, "y": 313.260009765625 }, { "x": 253.87579345703125, "y": 310.8255310058594 }, { "x": 260.68280029296875, "y": 311.3577575683594 }, { "x": 265.8013000488281, "y": 313.6918029785156 }, { "x": 269.2152099609375, "y": 311.99652099609375 }, { "x": 275.21852111816406, "y": 315.2142028808594 }, { "x": 279.02734375, "y": 320.988037109375 }, { "x": 282.1071472167969, "y": 327.03631591796875 }, { "x": 283.1670837402344, "y": 333.4017333984375 }, { "x": 286.330078125, "y": 332.00396728515625 }, { "x": 290.6905822753906, "y": 331.5939636230469 }, { "x": 295.8964538574219, "y": 335.40130615234375 }, { "x": 296.72808837890625, "y": 339.5005798339844 }, { "x": 293.1927185058594, "y": 343.3213195800781 }, { "x": 298.96826171875, "y": 341.0194091796875 }, { "x": 301.211181640625, "y": 341.7352600097656 }, { "x": 306.6287841796875, "y": 340.049560546875 }, { "x": 311.714599609375, "y": 342.1283874511719 }, { "x": 315.01104736328125, "y": 348.115966796875 }, { "x": 315.7779846191406, "y": 354.1439208984375 }, { "x": 313.828857421875, "y": 359.3277587890625 }, { "x": 318.7945251464844, "y": 362.0699462890625 }, { "x": 324.22283935546875, "y": 364.5259094238281 }, { "x": 326.1915283203125, "y": 369.1332092285156 }, { "x": 331.7487487792969, "y": 370.1446533203125 }, { "x": 337.08673095703125, "y": 366.2357177734375 }, { "x": 341.75201416015625, "y": 370.1020202636719 }, { "x": 344.7340393066406, "y": 376.06085205078125 }, { "x": 345.1200256347656, "y": 382.4393615722656 }, { "x": 347.2106628417969, "y": 388.83251953125 }, { "x": 351.3271484375, "y": 394.2255859375 }, { "x": 353.3771057128906, "y": 400.8255920410156 }, { "x": 353.9154052734375, "y": 407.778564453125 }, { "x": 355.7492980957031, "y": 414.34381103515625 }, { "x": 359.9167785644531, "y": 419.63232421875 }, { "x": 358.1221923828125, "y": 426.2794189453125 }, { "x": 351.96337890625, "y": 427.22662353515625 }, { "x": 346.1220397949219, "y": 430.74725341796875 }, { "x": 349.3269958496094, "y": 436.2380676269531 }, { "x": 346.710693359375, "y": 442.6990051269531 }, { "x": 343.0590515136719, "y": 447.8025817871094 }, { "x": 339.22076416015625, "y": 451.83526611328125 }, { "x": 339.5456237792969, "y": 457.7000732421875 }, { "x": 342.71661376953125, "y": 463.2483215332031 }, { "x": 349.3055114746094, "y": 463.02325439453125 }, { "x": 355.4845275878906, "y": 461.7947692871094 }, { "x": 357.7110595703125, "y": 455.2560119628906 }, { "x": 361.4036560058594, "y": 449.5892028808594 }, { "x": 366.6027526855469, "y": 445.42779541015625 }, { "x": 371.8472900390625, "y": 440.9165954589844 }, { "x": 371.9928894042969, "y": 434.1544494628906 }, { "x": 371.1297302246094, "y": 427.3863830566406 }, { "x": 375.107177734375, "y": 422.2817077636719 }, { "x": 381.0926818847656, "y": 418.85565185546875 }, { "x": 387.38525390625, "y": 418.85101318359375 }, { "x": 391.92010498046875, "y": 417.7002258300781 }, { "x": 393.4316101074219, "y": 413.32421875 }, { "x": 391.2099609375, "y": 408.02862548828125 }, { "x": 391.1412658691406, "y": 401.9607849121094 }, { "x": 391.0033264160156, "y": 396.4462890625 }, { "x": 385.8275451660156, "y": 392.22528076171875 }, { "x": 380.55804443359375, "y": 388.0451354980469 }, { "x": 374.3796081542969, "y": 387.0625305175781 }, { "x": 370.8457946777344, "y": 382.7704162597656 }, { "x": 370.16607666015625, "y": 376.9875793457031 }, { "x": 374.1573181152344, "y": 371.328857421875 }, { "x": 374.20416259765625, "y": 364.8438720703125 }, { "x": 377.9802551269531, "y": 359.5424499511719 }, { "x": 381.1664123535156, "y": 354.10357666015625 }, { "x": 385.2007141113281, "y": 348.5751037597656 }, { "x": 391.299560546875, "y": 346.15228271484375 }, { "x": 395.4789733886719, "y": 350.0568542480469 }, { "x": 398.4921569824219, "y": 353.3287048339844 }, { "x": 404.4149475097656, "y": 356.4902648925781 }, { "x": 411.20928955078125, "y": 356.2163391113281 }, { "x": 417.39349365234375, "y": 357.4655456542969 }, { "x": 420.1872253417969, "y": 362.8957824707031 }, { "x": 422.2381591796875, "y": 368.3031005859375 }, { "x": 424.3298645019531, "y": 373.8426208496094 }, { "x": 430.26373291015625, "y": 377.13641357421875 }, { "x": 435.43206787109375, "y": 377.4237976074219 }, { "x": 436.6398620605469, "y": 370.644775390625 }, { "x": 439.7572937011719, "y": 365.2905578613281 }, { "x": 438.0321350097656, "y": 359.5356750488281 }, { "x": 434.32891845703125, "y": 353.91986083984375 }, { "x": 429.78277587890625, "y": 348.6799621582031 }, { "x": 424.2900085449219, "y": 344.78466796875 }, { "x": 421.3966064453125, "y": 340.405029296875 }, { "x": 416.21612548828125, "y": 338.1275329589844 }, { "x": 410.616455078125, "y": 334.4537658691406 }, { "x": 404.1116943359375, "y": 332.0395812988281 }, { "x": 398.86669921875, "y": 327.6833190917969 }, { "x": 393.7062683105469, "y": 323.4868469238281 }, { "x": 387.8509216308594, "y": 320.05120849609375 }, { "x": 381.60516357421875, "y": 317.3965759277344 }, { "x": 375.1654968261719, "y": 315.1378479003906 }, { "x": 369.1758728027344, "y": 311.97332763671875 }, { "x": 363.4203186035156, "y": 309.42938232421875 }, { "x": 357.1600036621094, "y": 306.58380126953125 }, { "x": 351.17645263671875, "y": 303.0853271484375 }, { "x": 348.116455078125, "y": 297.11993408203125 }, { "x": 352.56292724609375, "y": 292.4453430175781 }, { "x": 357.8887634277344, "y": 288.43853759765625 }, { "x": 358.36529541015625, "y": 282.7537841796875 }, { "x": 353.14208984375, "y": 279.4966125488281 }, { "x": 346.4002685546875, "y": 280.7677307128906 }, { "x": 339.7859802246094, "y": 280.7172546386719 }, { "x": 332.9903564453125, "y": 281.8190002441406 }, { "x": 326.2829895019531, "y": 281.0772399902344 }, { "x": 319.5748291015625, "y": 279.8558349609375 }, { "x": 313.9931640625, "y": 276.1876220703125 }, { "x": 307.8863525390625, "y": 273.09864807128906 }, { "x": 304.29766845703125, "y": 268.2959747314453 }, { "x": 299.253662109375, "y": 263.9112548828125 }, { "x": 294.42645263671875, "y": 259.2126770019531 }, { "x": 289.4189758300781, "y": 254.624267578125 }, { "x": 284.7799072265625, "y": 249.56199645996094 }, { "x": 281.6193542480469, "y": 243.59031677246094 }, { "x": 279.1875305175781, "y": 237.05519104003906 }, { "x": 277.3576354980469, "y": 230.37225341796875 }, { "x": 275.760009765625, "y": 223.70626831054688 }, { "x": 273.30882263183594, "y": 217.36961364746094 }, { "x": 270.79461669921875, "y": 210.90306091308594 }, { "x": 268.82061767578125, "y": 204.4396514892578 }, { "x": 264.60630798339844, "y": 199.54945373535156 }, { "x": 259.0759735107422, "y": 198.58273315429688 }, { "x": 253.62362670898438, "y": 194.31976318359375 }, { "x": 248.41238403320312, "y": 189.73240661621094 }, { "x": 243.2634735107422, "y": 185.29505920410156 }, { "x": 236.81312561035156, "y": 182.83139038085938 }, { "x": 231.96359252929688, "y": 178.03662109375 }, { "x": 227.12884521484375, "y": 173.3582000732422 }, { "x": 224.45269775390625, "y": 167.0806427001953 }, { "x": 223.06651306152344, "y": 161.28306579589844 }, { "x": 221.64813232421875, "y": 154.60350036621094 }, { "x": 220.78948974609375, "y": 148.30233764648438 }, { "x": 221.2809295654297, "y": 141.81651306152344 }, { "x": 223.7086181640625, "y": 141.2677001953125 }, { "x": 225.259033203125, "y": 142.7430191040039 }, { "x": 226.15187072753906, "y": 140.11753845214844 }, { "x": 227.36227416992188, "y": 141.3536605834961 }, { "x": 229.5584716796875, "y": 136.88875579833984 }, { "x": 228.06126403808594, "y": 132.3322525024414 }, { "x": 224.93405151367188, "y": 131.77899932861328 }, { "x": 223.553955078125, "y": 127.29059600830078 }, { "x": 222.4085693359375, "y": 121.39207458496094 }, { "x": 223.89402770996094, "y": 115.06343841552734 }, { "x": 224.21961975097656, "y": 113.09162902832031 }, { "x": 221.9113006591797, "y": 119.62069702148438 }, { "x": 221.5355987548828, "y": 123.87409973144531 }, { "x": 219.38311767578125, "y": 119.39602661132812 }, { "x": 217.5317840576172, "y": 115.29088592529297 }, { "x": 221.2459259033203, "y": 111.80406951904297 }, { "x": 224.66749572753906, "y": 111.76504516601562 }, { "x": 224.5703887939453, "y": 108.26549530029297 }, { "x": 228.23977661132812, "y": 105.80362701416016 }, { "x": 232.17091369628906, "y": 105.71499633789062 }, { "x": 227.23585510253906, "y": 109.4410400390625 }, { "x": 227.31329345703125, "y": 111.62619018554688 }, { "x": 233.3118133544922, "y": 108.35916137695312 }, { "x": 239.47959899902344, "y": 105.8432388305664 }, { "x": 244.91468811035156, "y": 101.91187286376953 }, { "x": 250.8334503173828, "y": 101.39767456054688 }, { "x": 250.60459899902344, "y": 99.07395935058594 }, { "x": 252.78443908691406, "y": 94.42327880859375 }, { "x": 258.3810272216797, "y": 96.16615295410156 }, { "x": 262.18516540527344, "y": 99.2624740600586 }, { "x": 265.5041198730469, "y": 96.19277954101562 }, { "x": 269.7381286621094, "y": 96.0232925415039 }, { "x": 273.0772399902344, "y": 101.18714141845703 }, { "x": 271.80067443847656, "y": 102.72904205322266 }, { "x": 277.6667785644531, "y": 103.20849609375 }, { "x": 275.88856506347656, "y": 97.73011779785156 }, { "x": 270.8714141845703, "y": 93.57135009765625 }, { "x": 267.7798767089844, "y": 89.05879974365234 }, { "x": 268.5146179199219, "y": 83.98722076416016 }, { "x": 264.56439208984375, "y": 82.04079055786133 }, { "x": 267.91680908203125, "y": 77.88692474365234 }, { "x": 268.3095703125, "y": 73.52446746826172 }, { "x": 262.5800018310547, "y": 71.66244506835938 }, { "x": 260.51910400390625, "y": 67.87062454223633 }, { "x": 264.79290771484375, "y": 63.482662200927734 }, { "x": 270.2356719970703, "y": 61.21841812133789 }, { "x": 271.2709197998047, "y": 56.383392333984375 }, { "x": 265.0841979980469, "y": 55.05278396606445 }, { "x": 258.9899597167969, "y": 54.282379150390625 }, { "x": 253.0955810546875, "y": 53.83091735839844 }, { "x": 246.48622131347656, "y": 52.91279983520508 }, { "x": 240.65602111816406, "y": 51.210832595825195 }, { "x": 234.7908477783203, "y": 49.99033546447754 }, { "x": 228.86135864257812, "y": 48.74351119995117 }, { "x": 224.44692993164062, "y": 44.193918228149414 }, { "x": 221.88063049316406, "y": 39.10847091674805 }, { "x": 217.55528259277344, "y": 37.28471565246582 }, { "x": 216.979736328125, "y": 31.41277313232422 }, { "x": 219.72354125976562, "y": 27.283109188079834 }, { "x": 213.2615203857422, "y": 29.42199420928955 }, { "x": 207.10751342773438, "y": 32.255629539489746 }, { "x": 201.26104736328125, "y": 32.648261070251465 }, { "x": 195.93121337890625, "y": 33.48854446411133 }, { "x": 191.0752410888672, "y": 34.13051509857178 }, { "x": 184.69105529785156, "y": 34.13460826873779 }, { "x": 180.08621215820312, "y": 37.326608657836914 }, { "x": 178.0416717529297, "y": 43.44594192504883 }, { "x": 171.94544982910156, "y": 43.94432830810547 }, { "x": 168.38677978515625, "y": 41.06644630432129 }, { "x": 162.94361877441406, "y": 39.743988037109375 }, { "x": 158.14566040039062, "y": 40.720014572143555 }, { "x": 156.46279907226562, "y": 46.36198043823242 }, { "x": 156.59439086914062, "y": 50.9266357421875 }, { "x": 157.88401794433594, "y": 55.82099914550781 }, { "x": 152.8543701171875, "y": 55.03532028198242 }, { "x": 149.6142578125, "y": 51.90777778625488 }, { "x": 144.74369049072266, "y": 54.780391693115234 }, { "x": 143.87445068359375, "y": 60.808006286621094 }, { "x": 146.96683502197266, "y": 64.1191635131836 }, { "x": 148.13461303710938, "y": 69.89946365356445 }, { "x": 144.1956558227539, "y": 70.95661544799805 }, { "x": 141.89948272705078, "y": 65.79632568359375 }, { "x": 135.72000122070312, "y": 65.31605529785156 }, { "x": 131.42318725585938, "y": 68.58354187011719 }, { "x": 125.67088317871094, "y": 67.34594345092773 }, { "x": 123.04788208007812, "y": 61.4284782409668 }, { "x": 120.93846893310547, "y": 59.519493103027344 }, { "x": 116.6186294555664, "y": 59.67953109741211 }, { "x": 116.69479370117188, "y": 65.30583953857422 }, { "x": 115.0487289428711, "y": 71.48572158813477 }, { "x": 110.76995086669922, "y": 76.68859481811523 }, { "x": 107.26177978515625, "y": 81.2596664428711 }, { "x": 108.33912658691406, "y": 86.77387237548828 }, { "x": 108.1235122680664, "y": 91.85189056396484 }, { "x": 104.1856918334961, "y": 90.13645935058594 }, { "x": 102.1906967163086, "y": 84.49811553955078 }, { "x": 101.86743927001953, "y": 80.26420211791992 }, { "x": 97.17903137207031, "y": 78.08284378051758 }, { "x": 92.0063247680664, "y": 74.55746841430664 }, { "x": 87.83921813964844, "y": 69.94628524780273 }, { "x": 88.10627746582031, "y": 63.78325271606445 }, { "x": 84.99622344970703, "y": 60.378421783447266 }, { "x": 82.13595199584961, "y": 64.92093658447266 }, { "x": 76.61056137084961, "y": 68.42034912109375 }, { "x": 77.33785629272461, "y": 73.37650680541992 }, { "x": 73.69655990600586, "y": 78.14963150024414 }, { "x": 70.24713516235352, "y": 83.44966125488281 }, { "x": 66.30376815795898, "y": 86.4084243774414 }, { "x": 61.00528335571289, "y": 84.80475616455078 }, { "x": 55.338985443115234, "y": 84.76084899902344 }, { "x": 49.730621337890625, "y": 87.49740600585938 }, { "x": 44.35032081604004, "y": 88.96097564697266 }, { "x": 40.36292266845703, "y": 89.0938720703125 }, { "x": 37.202938079833984, "y": 89.46282196044922 }, { "x": 30.91651725769043, "y": 91.744873046875 }, { "x": 31.34809684753418, "y": 98.0306167602539 }, { "x": 36.43684196472168, "y": 100.65554809570312 }, { "x": 36.63414192199707, "y": 105.83708190917969 }, { "x": 40.361501693725586, "y": 110.00231170654297 }, { "x": 42.25954627990723, "y": 115.13243865966797 }, { "x": 41.04898262023926, "y": 120.52428436279297 }, { "x": 35.900723457336426, "y": 123.22298431396484 }, { "x": 31.001583099365234, "y": 125.76361083984375 }, { "x": 25.35750389099121, "y": 127.01469421386719 }, { "x": 26.470633029937744, "y": 132.13007354736328 }, { "x": 28.578930854797363, "y": 137.0916976928711 }, { "x": 34.07375431060791, "y": 140.6602554321289 }, { "x": 37.31981086730957, "y": 143.27063751220703 }, { "x": 38.96392631530762, "y": 148.35568237304688 }, { "x": 35.457825660705566, "y": 151.4169921875 }, { "x": 32.37125778198242, "y": 156.8654327392578 }, { "x": 34.02191352844238, "y": 161.15602111816406 }, { "x": 35.77568531036377, "y": 166.73590087890625 }, { "x": 39.198699951171875, "y": 170.97142028808594 }, { "x": 44.2485294342041, "y": 173.32443237304688 }, { "x": 49.24034118652344, "y": 174.7355499267578 }, { "x": 156.3516082763672, "y": 236.4132537841797 }, { "x": 152.26406860351562, "y": 238.44081115722656 }, { "x": 147.4939193725586, "y": 238.9183349609375 }, { "x": 148.94720458984375, "y": 242.6168975830078 }, { "x": 153.892578125, "y": 241.14694213867188 }, { "x": 156.20179748535156, "y": 241.68008422851562 }, { "x": 144.84224700927734, "y": 247.98228454589844 }, { "x": 172.81060791015625, "y": 259.1338348388672 }, { "x": 153.01211547851562, "y": 260.5054168701172 }, { "x": 246.1604766845703, "y": 326.75885009765625 }, { "x": 255.16522216796875, "y": 97.28705596923828 }, { "x": 224.13079833984375, "y": 460.0860290527344 }, { "x": 222.1534423828125, "y": 461.4776611328125 }, { "x": 225.05606079101562, "y": 463.76910400390625 }, { "x": 214.50485229492188, "y": 462.1432800292969 }, { "x": 209.59629821777344, "y": 510.6006164550781 }, { "x": 212.9316864013672, "y": 515.1477966308594 }, { "x": 232.1652374267578, "y": 567.3955078125 }, { "x": 234.00714111328125, "y": 568.4367065429688 }, { "x": 242.58572387695312, "y": 552.528076171875 }, { "x": 318.9013671875, "y": 430.94671630859375 }, { "x": 309.48492431640625, "y": 434.5926208496094 }, { "x": 313.775146484375, "y": 436.3890075683594 }, { "x": 315.8232116699219, "y": 438.7610778808594 }, { "x": 315.3999328613281, "y": 440.8021240234375 }, { "x": 317.1228942871094, "y": 442.62396240234375 }, { "x": 253.62196350097656, "y": 427.8924560546875 }, { "x": 320.51190185546875, "y": 489.753662109375 }, { "x": 320.3189697265625, "y": 482.7507019042969 }, { "x": 323.3934326171875, "y": 476.76361083984375 }, { "x": 324.1694641113281, "y": 470.40399169921875 }, { "x": 328.0061950683594, "y": 465.0813903808594 }, { "x": 331.61834716796875, "y": 459.3160095214844 }, { "x": 335.5913391113281, "y": 453.6556396484375 }, { "x": 338.98382568359375, "y": 448.1003112792969 }, { "x": 334.87762451171875, "y": 446.4932556152344 }, { "x": 328.7543640136719, "y": 449.8006591796875 }, { "x": 324.52435302734375, "y": 447.6025085449219 }, { "x": 322.3771057128906, "y": 453.0013732910156 }, { "x": 316.2276611328125, "y": 452.810546875 }, { "x": 310.2864685058594, "y": 452.3031311035156 }, { "x": 305.0224914550781, "y": 455.2274475097656 }, { "x": 299.2362060546875, "y": 457.9008483886719 }, { "x": 292.7535095214844, "y": 459.1045837402344 }, { "x": 286.9338684082031, "y": 458.3110656738281 }, { "x": 281.0370788574219, "y": 457.9771728515625 }, { "x": 274.7622375488281, "y": 460.60443115234375 }, { "x": 268.22552490234375, "y": 458.7998352050781 }, { "x": 264.8348388671875, "y": 454.2434387207031 }, { "x": 260.09288024902344, "y": 452.57855224609375 }, { "x": 255.86215209960938, "y": 450.3311767578125 }, { "x": 250.00152587890625, "y": 451.5533752441406 }, { "x": 248.0807342529297, "y": 456.821533203125 }, { "x": 241.96328735351562, "y": 457.00640869140625 }, { "x": 239.03919982910156, "y": 451.4425354003906 }, { "x": 237.083984375, "y": 454.33935546875 }, { "x": 231.90133666992188, "y": 456.6035461425781 }, { "x": 229.0834197998047, "y": 461.350830078125 }, { "x": 228.34559631347656, "y": 466.6808776855469 }, { "x": 228.50607299804688, "y": 471.6469421386719 }, { "x": 233.27024841308594, "y": 475.6203308105469 }, { "x": 237.87281799316406, "y": 478.22271728515625 }, { "x": 244.62673950195312, "y": 478.1335754394531 }, { "x": 249.66061401367188, "y": 481.1122131347656 }, { "x": 255.09190368652344, "y": 483.956787109375 }, { "x": 259.6658630371094, "y": 488.1148681640625 }, { "x": 265.3955993652344, "y": 491.119384765625 }, { "x": 270.16204833984375, "y": 495.1795349121094 }, { "x": 276.28607177734375, "y": 497.38165283203125 }, { "x": 282.08660888671875, "y": 498.96337890625 }, { "x": 288.9072570800781, "y": 500.06256103515625 }, { "x": 294.38067626953125, "y": 504.27667236328125 }, { "x": 297.906982421875, "y": 509.9891662597656 }, { "x": 302.6937255859375, "y": 513.4992980957031 }, { "x": 308.1389465332031, "y": 515.7932434082031 }, { "x": 314.20068359375, "y": 515.9179382324219 }, { "x": 319.197021484375, "y": 518.4264526367188 }, { "x": 321.1339416503906, "y": 514.4266662597656 }, { "x": 322.2738342285156, "y": 508.4964599609375 }, { "x": 326.349609375, "y": 503.73876953125 }, { "x": 326.3788757324219, "y": 501.44927978515625 }, { "x": 325.2514343261719, "y": 497.9479675292969 }, { "x": 324.5412292480469, "y": 493.7315979003906 }, { "x": 300.9482727050781, "y": 433.811279296875 }, { "x": 121.70443725585938, "y": 310.9861755371094 }, { "x": 121.85648345947266, "y": 313.04534912109375 }, { "x": 111.86235046386719, "y": 312.4822998046875 }, { "x": 111.03584289550781, "y": 317.1483154296875 }, { "x": 105.67829895019531, "y": 320.165771484375 }, { "x": 101.56210327148438, "y": 325.4184875488281 }, { "x": 97.97312927246094, "y": 327.7593688964844 }, { "x": 92.13591003417969, "y": 331.1597595214844 }, { "x": 85.9007568359375, "y": 331.1452331542969 }, { "x": 80.32343673706055, "y": 328.08642578125 }, { "x": 78.3179817199707, "y": 327.1805419921875 }, { "x": 77.79415130615234, "y": 333.1855773925781 }, { "x": 79.11838150024414, "y": 338.2325439453125 }, { "x": 77.26213455200195, "y": 343.94549560546875 }, { "x": 78.93383026123047, "y": 343.80535888671875 }, { "x": 83.46920776367188, "y": 345.4886779785156 }, { "x": 86.09040069580078, "y": 351.14715576171875 }, { "x": 88.2826156616211, "y": 355.83935546875 }, { "x": 87.88583374023438, "y": 361.5839538574219 }, { "x": 87.87723541259766, "y": 367.08465576171875 }, { "x": 85.97051239013672, "y": 370.183349609375 }, { "x": 86.99002838134766, "y": 376.3071594238281 }, { "x": 91.21929168701172, "y": 375.96356201171875 }, { "x": 89.4781723022461, "y": 382.1919860839844 }, { "x": 87.29521942138672, "y": 384.03741455078125 }, { "x": 87.59610748291016, "y": 390.6974182128906 }, { "x": 85.9734878540039, "y": 396.4505920410156 }, { "x": 86.85674285888672, "y": 402.1729431152344 }, { "x": 86.61041259765625, "y": 407.29833984375 }, { "x": 90.1133041381836, "y": 411.572265625 }, { "x": 93.06070709228516, "y": 416.610595703125 }, { "x": 95.18650817871094, "y": 420.2445983886719 }, { "x": 99.54850769042969, "y": 419.77679443359375 }, { "x": 104.2762451171875, "y": 418.0174865722656 }, { "x": 107.81430053710938, "y": 413.4972839355469 }, { "x": 108.14140319824219, "y": 407.608154296875 }, { "x": 112.5010986328125, "y": 405.87908935546875 }, { "x": 118.24040222167969, "y": 406.3492736816406 }, { "x": 123.91644287109375, "y": 408.61529541015625 }, { "x": 127.17709350585938, "y": 407.0340576171875 }, { "x": 129.11402130126953, "y": 401.2843017578125 }, { "x": 129.40839385986328, "y": 395.1509704589844 }, { "x": 130.01244354248047, "y": 388.8702697753906 }, { "x": 130.60122680664062, "y": 382.178955078125 }, { "x": 131.15733337402344, "y": 375.9165344238281 }, { "x": 131.3675537109375, "y": 369.7850341796875 }, { "x": 130.2817153930664, "y": 364.1787414550781 }, { "x": 129.10587310791016, "y": 357.67596435546875 }, { "x": 133.3588409423828, "y": 352.3556213378906 }, { "x": 136.1432876586914, "y": 346.1795959472656 }, { "x": 133.1638641357422, "y": 341.1475524902344 }, { "x": 132.49456024169922, "y": 336.6303405761719 }, { "x": 131.62269592285156, "y": 331.318603515625 }, { "x": 129.0381622314453, "y": 328.7372741699219 }, { "x": 124.75108337402344, "y": 327.8750305175781 }, { "x": 128.4884490966797, "y": 324.0463562011719 }, { "x": 125.81416320800781, "y": 322.71539306640625 }, { "x": 126.88336181640625, "y": 319.1095275878906 }, { "x": 123.34929656982422, "y": 318.7301330566406 }, { "x": 120.13726043701172, "y": 315.2803955078125 }, { "x": 116.48988342285156, "y": 312.88427734375 }, { "x": 122.98635864257812, "y": 315.2885437011719 }, { "x": 81.86287307739258, "y": 319.92425537109375 }, { "x": 79.65542984008789, "y": 324.4546203613281 }, { "x": 82.24650192260742, "y": 321.3138427734375 }, { "x": 129.29334259033203, "y": 324.2780456542969 }, { "x": 132.23064422607422, "y": 328.6826477050781 }, { "x": 79.9013557434082, "y": 408.61029052734375 }, { "x": 82.63698196411133, "y": 408.17498779296875 }, { "x": 85.07074737548828, "y": 413.9906311035156 }, { "x": 87.9135971069336, "y": 413.339111328125 }, { "x": 94.55366516113281, "y": 105.44805908203125 }, { "x": 100.09567260742188, "y": 104.66439056396484 }, { "x": 103.96200561523438, "y": 104.39104461669922 }, { "x": 109.17304229736328, "y": 107.2564468383789 }, { "x": 114.34066009521484, "y": 104.72261810302734 }, { "x": 118.7811508178711, "y": 101.10111236572266 }, { "x": 120.66919708251953, "y": 105.66124725341797 }, { "x": 118.72589874267578, "y": 109.89628601074219 }, { "x": 115.72061157226562, "y": 114.74932098388672 }, { "x": 109.94609069824219, "y": 116.0430908203125 }, { "x": 105.7480239868164, "y": 116.38043212890625 }, { "x": 103.962158203125, "y": 117.92401123046875 }, { "x": 99.34595489501953, "y": 114.148193359375 }, { "x": 97.18331146240234, "y": 110.00064086914062 }];
const usaMobile = [{ "x": 351.445703125, "y": 95.76895141601562 }, { "x": 347.5315185546875, "y": 92.11142578125 }, { "x": 341.8863525390625, "y": 91.98049926757812 }, { "x": 335.79624023437503, "y": 93.29978637695312 }, { "x": 329.68906250000003, "y": 94.53959350585937 }, { "x": 323.58188476562503, "y": 95.77939453125 }, { "x": 318.0015869140625, "y": 96.14907836914062 }, { "x": 320.7980224609375, "y": 91.28945312500001 }, { "x": 320.534912109375, "y": 86.39190063476563 }, { "x": 324.769921875, "y": 83.38114624023439 }, { "x": 330.69345703125003, "y": 83.2435791015625 }, { "x": 335.6531005859375, "y": 80.26943969726562 }, { "x": 337.48984375000003, "y": 75.78636474609375 }, { "x": 337.80876464843755, "y": 71.7474853515625 }, { "x": 341.26926269531253, "y": 66.59241638183593 }, { "x": 346.7390380859375, "y": 64.07857971191407 }, { "x": 352.508740234375, "y": 62.999993896484376 }, { "x": 353.92758789062503, "y": 69.0255615234375 }, { "x": 354.7166259765625, "y": 74.76812744140625 }, { "x": 357.2566162109375, "y": 79.9725341796875 }, { "x": 356.8782958984375, "y": 86.1890625 }, { "x": 358.02824707031255, "y": 92.31082763671876 }, { "x": 358.61520996093753, "y": 98.08842163085939 }, { "x": 361.69990234375, "y": 97.85255737304688 }, { "x": 366.885888671875, "y": 94.67463989257813 }, { "x": 365.29587402343753, "y": 98.1691162109375 }, { "x": 359.85434570312503, "y": 101.05010375976563 }, { "x": 357.24985351562503, "y": 97.89716186523438 }, { "x": 101.93208618164063, "y": 253.87783203125002 }, { "x": 98.75089721679689, "y": 249.671240234375 }, { "x": 94.9239990234375, "y": 245.306494140625 }, { "x": 91.38024291992188, "y": 240.4932373046875 }, { "x": 87.44620971679687, "y": 236.65529785156252 }, { "x": 81.5024658203125, "y": 235.54616699218752 }, { "x": 75.76727905273438, "y": 234.672216796875 }, { "x": 70.80472717285156, "y": 235.163427734375 }, { "x": 65.34183959960939, "y": 237.2736572265625 }, { "x": 66.34695739746094, "y": 232.83364257812502 }, { "x": 63.509716796875004, "y": 234.947607421875 }, { "x": 61.70967102050781, "y": 239.04836425781252 }, { "x": 56.4865478515625, "y": 242.33876953125002 }, { "x": 51.32367553710938, "y": 245.1038818359375 }, { "x": 46.42793884277344, "y": 246.1510009765625 }, { "x": 44.533843994140625, "y": 247.3765869140625 }, { "x": 39.86803283691407, "y": 247.6327880859375 }, { "x": 36.13264617919922, "y": 245.781494140625 }, { "x": 41.97958831787109, "y": 244.3409423828125 }, { "x": 47.592132568359375, "y": 242.7934326171875 }, { "x": 52.774923706054686, "y": 239.94780273437502 }, { "x": 52.76890258789063, "y": 235.93937988281252 }, { "x": 49.365151977539064, "y": 234.6545166015625 }, { "x": 46.64577331542969, "y": 232.569189453125 }, { "x": 44.178453063964845, "y": 229.605908203125 }, { "x": 43.28457946777344, "y": 224.330029296875 }, { "x": 45.13983001708985, "y": 219.3136962890625 }, { "x": 49.71653442382812, "y": 218.07913818359376 }, { "x": 54.060797119140624, "y": 215.32020263671876 }, { "x": 50.21108703613281, "y": 213.39223632812502 }, { "x": 46.690182495117185, "y": 209.70958251953127 }, { "x": 47.804421997070314, "y": 205.95333251953127 }, { "x": 53.30137329101563, "y": 206.496435546875 }, { "x": 54.887045288085936, "y": 207.0427001953125 }, { "x": 52.72326354980469, "y": 201.38106689453127 }, { "x": 53.30996398925782, "y": 197.378759765625 }, { "x": 58.11158142089844, "y": 194.77469482421876 }, { "x": 63.94781494140625, "y": 193.37037353515626 }, { "x": 69.10343017578126, "y": 193.69582519531252 }, { "x": 73.65486450195313, "y": 196.52635498046877 }, { "x": 79.4119873046875, "y": 198.5600341796875 }, { "x": 85.1794189453125, "y": 199.998046875 }, { "x": 85.79713134765625, "y": 205.7991455078125 }, { "x": 85.7393798828125, "y": 211.98564453125002 }, { "x": 85.68162231445312, "y": 218.17214355468752 }, { "x": 85.62387084960938, "y": 224.3586181640625 }, { "x": 85.56611328125, "y": 230.5451171875 }, { "x": 87.82780151367187, "y": 234.18278808593752 }, { "x": 91.89820556640625, "y": 238.31105957031252 }, { "x": 96.27731323242188, "y": 236.21599121093752 }, { "x": 100.29545288085939, "y": 240.74821777343752 }, { "x": 103.61827392578125, "y": 245.95805664062502 }, { "x": 108.07730102539062, "y": 249.3694580078125 }, { "x": 105.84630737304688, "y": 252.6668212890625 }, { "x": 102.97867431640626, "y": 254.33964843750002 }, { "x": 74.10078125000001, "y": 233.17106933593752 }, { "x": 150.71282958984375, "y": 249.39772949218752 }, { "x": 149.78972167968752, "y": 243.6644287109375 }, { "x": 152.39149169921876, "y": 239.95131835937502 }, { "x": 157.69818115234375, "y": 243.02080078125002 }, { "x": 159.5321044921875, "y": 247.857421875 }, { "x": 154.38135986328126, "y": 250.72280273437502 }, { "x": 328.86154785156253, "y": 248.262451171875 }, { "x": 329.2029541015625, "y": 249.7570556640625 }, { "x": 27.314010620117188, "y": 247.27272949218752 }, { "x": 32.179805755615234, "y": 246.80715332031252 }, { "x": 28.688996887207033, "y": 248.85068359375 }, { "x": 333.580078125, "y": 246.71010742187502 }, { "x": 335.59367675781255, "y": 243.5771240234375 }, { "x": 331.1099365234375, "y": 242.641796875 }, { "x": 327.0718994140625, "y": 238.820751953125 }, { "x": 323.90378417968753, "y": 234.48378906250002 }, { "x": 319.983837890625, "y": 231.36083984375 }, { "x": 316.363818359375, "y": 226.3697265625 }, { "x": 317.49970703125, "y": 222.90153808593752 }, { "x": 314.912353515625, "y": 221.6705078125 }, { "x": 315.3317138671875, "y": 215.57039794921877 }, { "x": 311.2953125, "y": 211.44157714843752 }, { "x": 306.84794921875, "y": 207.312841796875 }, { "x": 301.3294189453125, "y": 205.811376953125 }, { "x": 297.3087646484375, "y": 209.2070068359375 }, { "x": 292.586669921875, "y": 207.70750732421877 }, { "x": 286.97421875000003, "y": 205.15755615234377 }, { "x": 280.84885253906253, "y": 205.48228759765627 }, { "x": 274.9258544921875, "y": 207.22530517578127 }, { "x": 273.198388671875, "y": 203.95377197265626 }, { "x": 268.3901123046875, "y": 206.5954345703125 }, { "x": 262.7283447265625, "y": 207.844091796875 }, { "x": 262.44841308593755, "y": 208.97960205078127 }, { "x": 262.60917968750005, "y": 213.17720947265627 }, { "x": 266.0082763671875, "y": 215.72799072265627 }, { "x": 263.43059082031255, "y": 217.42877197265625 }, { "x": 259.370556640625, "y": 216.268994140625 }, { "x": 256.622900390625, "y": 217.88536376953127 }, { "x": 251.98603515625, "y": 218.76994628906252 }, { "x": 248.79140625000002, "y": 215.42838134765626 }, { "x": 245.2545166015625, "y": 214.00030517578125 }, { "x": 241.85869140625002, "y": 215.2645263671875 }, { "x": 235.852490234375, "y": 213.97982177734377 }, { "x": 229.75341796875, "y": 214.2595947265625 }, { "x": 224.02662353515626, "y": 216.56348876953126 }, { "x": 219.29177246093752, "y": 220.51695556640627 }, { "x": 214.13482666015625, "y": 223.88936767578127 }, { "x": 208.75371093750002, "y": 226.9257568359375 }, { "x": 204.91112060546877, "y": 231.69521484375002 }, { "x": 203.08840332031252, "y": 237.48320312500002 }, { "x": 204.36397705078127, "y": 243.5076904296875 }, { "x": 201.27346191406252, "y": 247.25004882812502 }, { "x": 195.48060302734376, "y": 245.45966796875 }, { "x": 189.85301513671877, "y": 242.989208984375 }, { "x": 186.72984619140627, "y": 237.9686279296875 }, { "x": 185.79962158203125, "y": 232.4419921875 }, { "x": 181.84073486328126, "y": 227.896240234375 }, { "x": 178.73262939453127, "y": 222.771923828125 }, { "x": 176.17467041015627, "y": 217.19842529296875 }, { "x": 171.9060791015625, "y": 212.79613037109377 }, { "x": 165.86324462890624, "y": 211.62626953125002 }, { "x": 161.3597412109375, "y": 214.9813232421875 }, { "x": 157.05714111328126, "y": 218.11671142578126 }, { "x": 151.88001708984376, "y": 214.847412109375 }, { "x": 147.77382812500002, "y": 210.30614013671877 }, { "x": 146.39647216796874, "y": 204.347998046875 }, { "x": 142.25126953125, "y": 200.00603027343752 }, { "x": 138.16693115234375, "y": 195.42752685546876 }, { "x": 133.66644287109375, "y": 191.85343017578126 }, { "x": 127.541357421875, "y": 190.9826416015625 }, { "x": 123.27635498046875, "y": 192.50087890625002 }, { "x": 118.56234130859376, "y": 193.7403076171875 }, { "x": 112.45126342773438, "y": 192.787548828125 }, { "x": 106.308935546875, "y": 192.05007324218752 }, { "x": 100.32201538085938, "y": 190.6072998046875 }, { "x": 94.95035400390626, "y": 187.54007568359376 }, { "x": 89.63648681640625, "y": 184.37174072265626 }, { "x": 84.34547729492188, "y": 181.16545410156252 }, { "x": 78.98452758789062, "y": 178.07764892578126 }, { "x": 75.53137817382813, "y": 174.3412841796875 }, { "x": 69.37462158203125, "y": 173.74547119140627 }, { "x": 63.249548339843756, "y": 172.87535400390627 }, { "x": 59.202606201171875, "y": 169.83858642578124 }, { "x": 57.60003662109375, "y": 164.02324218750002 }, { "x": 53.13524475097656, "y": 160.30894775390627 }, { "x": 49.7020263671875, "y": 156.70167236328126 }, { "x": 45.66942443847657, "y": 152.28687744140626 }, { "x": 39.90055694580079, "y": 150.11495361328124 }, { "x": 40.227525329589845, "y": 144.309423828125 }, { "x": 37.52396087646484, "y": 138.79541015625 }, { "x": 35.185002136230466, "y": 133.07825927734376 }, { "x": 36.15606689453125, "y": 127.78214111328126 }, { "x": 33.3039794921875, "y": 122.80771484375 }, { "x": 33.16067810058594, "y": 116.88561401367188 }, { "x": 31.416405487060548, "y": 111.29408569335938 }, { "x": 28.926179504394533, "y": 105.69924316406251 }, { "x": 30.164778900146487, "y": 99.6614990234375 }, { "x": 28.15552749633789, "y": 93.91534423828125 }, { "x": 30.88386688232422, "y": 88.64359130859376 }, { "x": 33.055050659179685, "y": 82.92972412109376 }, { "x": 32.98774108886719, "y": 77.02689208984376 }, { "x": 34.28054504394531, "y": 71.01618652343751 }, { "x": 37.49178771972656, "y": 65.7294921875 }, { "x": 40.19490661621094, "y": 60.1678466796875 }, { "x": 42.4168197631836, "y": 54.394647216796876 }, { "x": 44.65179595947266, "y": 48.630368041992185 }, { "x": 45.64044189453125, "y": 43.513291931152345 }, { "x": 46.52187805175781, "y": 38.67584991455078 }, { "x": 46.8082763671875, "y": 33.46873168945312 }, { "x": 46.515679931640626, "y": 27.36792755126953 }, { "x": 50.331277465820314, "y": 27.182089233398436 }, { "x": 55.888153076171875, "y": 29.774185943603516 }, { "x": 60.22483520507813, "y": 27.030287170410155 }, { "x": 61.50414733886719, "y": 23.646991729736328 }, { "x": 67.47637634277345, "y": 25.26090888977051 }, { "x": 73.44898071289063, "y": 26.874466705322266 }, { "x": 79.43529663085937, "y": 28.436370849609375 }, { "x": 85.44223022460938, "y": 29.916674041748045 }, { "x": 91.47317504882812, "y": 31.296653747558594 }, { "x": 97.523193359375, "y": 32.58982467651367 }, { "x": 103.58156738281251, "y": 33.84413146972656 }, { "x": 109.63889770507814, "y": 35.102577209472656 }, { "x": 115.71251220703125, "y": 36.279447937011724 }, { "x": 121.80857543945314, "y": 37.3345443725586 }, { "x": 127.91767578125001, "y": 38.311526489257815 }, { "x": 134.0364501953125, "y": 39.22612609863282 }, { "x": 140.16339111328125, "y": 40.08371124267578 }, { "x": 146.2985107421875, "y": 40.88209533691406 }, { "x": 152.4421142578125, "y": 41.61035919189453 }, { "x": 158.596630859375, "y": 42.241085815429685 }, { "x": 164.75346679687502, "y": 42.846580505371094 }, { "x": 170.90411376953125, "y": 43.5008544921875 }, { "x": 177.07790527343752, "y": 43.8992416381836 }, { "x": 183.25721435546876, "y": 44.20139770507812 }, { "x": 189.4394287109375, "y": 44.440721130371095 }, { "x": 195.62322998046875, "y": 44.6292724609375 }, { "x": 201.80843505859377, "y": 44.76982421875 }, { "x": 207.9943359375, "y": 44.872473144531256 }, { "x": 214.18026123046877, "y": 44.972048950195315 }, { "x": 217.85662841796875, "y": 42.30404357910156 }, { "x": 220.95745849609375, "y": 45.31788024902344 }, { "x": 225.64506835937502, "y": 47.99031066894531 }, { "x": 230.95185546875, "y": 48.060061645507815 }, { "x": 236.6790771484375, "y": 49.63929748535156 }, { "x": 241.154541015625, "y": 51.96739807128907 }, { "x": 246.3435791015625, "y": 51.41249389648438 }, { "x": 251.88762207031252, "y": 52.321588134765626 }, { "x": 246.987646484375, "y": 55.527825927734376 }, { "x": 242.1661376953125, "y": 59.19039001464844 }, { "x": 237.7162841796875, "y": 63.39191589355469 }, { "x": 242.24208984375002, "y": 62.68095092773438 }, { "x": 244.25664062500002, "y": 64.50955200195312 }, { "x": 249.622509765625, "y": 63.541418457031256 }, { "x": 254.94387207031252, "y": 60.72688598632813 }, { "x": 259.4058349609375, "y": 56.542626953125 }, { "x": 261.3581787109375, "y": 57.85361328125 }, { "x": 260.15190429687505, "y": 60.668835449218754 }, { "x": 265.0278564453125, "y": 63.669104003906256 }, { "x": 270.62900390625, "y": 63.266430664062504 }, { "x": 276.3941162109375, "y": 61.37514343261719 }, { "x": 280.3086181640625, "y": 63.04555358886719 }, { "x": 285.1197998046875, "y": 63.400271606445315 }, { "x": 288.7601318359375, "y": 65.22178344726564 }, { "x": 285.697705078125, "y": 67.29318542480469 }, { "x": 279.623291015625, "y": 67.54820556640625 }, { "x": 273.7536376953125, "y": 68.72981567382813 }, { "x": 268.626953125, "y": 70.89056091308595 }, { "x": 265.91708984375, "y": 75.72860107421874 }, { "x": 263.1258544921875, "y": 81.12794189453126 }, { "x": 266.864208984375, "y": 76.26672973632813 }, { "x": 268.15986328125, "y": 77.77492065429688 }, { "x": 266.430419921875, "y": 83.634423828125 }, { "x": 265.8470458984375, "y": 89.60347900390626 }, { "x": 265.38322753906255, "y": 95.5721435546875 }, { "x": 266.25537109375, "y": 101.65552368164063 }, { "x": 269.8494384765625, "y": 106.25803833007814 }, { "x": 274.126416015625, "y": 102.40754394531251 }, { "x": 275.4727783203125, "y": 96.42266845703125 }, { "x": 273.1736083984375, "y": 90.72284545898438 }, { "x": 272.79443359375, "y": 84.6691650390625 }, { "x": 274.2827880859375, "y": 79.04835815429688 }, { "x": 277.35764160156253, "y": 74.17667846679689 }, { "x": 279.9369140625, "y": 70.17796020507814 }, { "x": 285.33046875, "y": 69.73942260742189 }, { "x": 290.686962890625, "y": 72.28634643554688 }, { "x": 292.3580810546875, "y": 77.0241943359375 }, { "x": 291.120654296875, "y": 82.88703613281251 }, { "x": 291.2696044921875, "y": 85.96997680664063 }, { "x": 295.425537109375, "y": 82.135888671875 }, { "x": 298.24460449218753, "y": 87.42723388671875 }, { "x": 299.66208496093753, "y": 93.407421875 }, { "x": 296.8683349609375, "y": 97.82760009765626 }, { "x": 295.098828125, "y": 103.04395141601563 }, { "x": 300.69577636718753, "y": 104.97765502929688 }, { "x": 306.322509765625, "y": 102.57560424804689 }, { "x": 311.10732421875, "y": 98.673583984375 }, { "x": 316.1944580078125, "y": 95.23136596679687 }, { "x": 320.5851318359375, "y": 90.90578002929688 }, { "x": 319.7624755859375, "y": 85.6326904296875 }, { "x": 325.2792236328125, "y": 83.40258178710937 }, { "x": 331.27353515625003, "y": 82.93719482421875 }, { "x": 336.24106445312503, "y": 79.79453735351564 }, { "x": 335.36223144531255, "y": 75.54132080078125 }, { "x": 338.2170654296875, "y": 70.46501770019532 }, { "x": 342.0102783203125, "y": 65.60929870605469 }, { "x": 347.922607421875, "y": 64.01509399414063 }, { "x": 353.88620605468753, "y": 62.37015075683594 }, { "x": 359.86962890625, "y": 60.79710083007813 }, { "x": 363.7613525390625, "y": 57.22802734375 }, { "x": 366.91135253906253, "y": 53.188238525390624 }, { "x": 367.2864501953125, "y": 47.36604614257813 }, { "x": 368.4534423828125, "y": 41.346961975097656 }, { "x": 371.09345703125, "y": 35.94356231689453 }, { "x": 375.605419921875, "y": 35.37498016357422 }, { "x": 380.38322753906255, "y": 37.894586181640626 }, { "x": 382.17216796875005, "y": 43.81708526611328 }, { "x": 384.91647949218753, "y": 48.44170227050782 }, { "x": 388.77263183593755, "y": 51.28741455078125 }, { "x": 389.38530273437505, "y": 56.78345642089844 }, { "x": 384.792236328125, "y": 60.85302429199219 }, { "x": 381.6399169921875, "y": 64.62156982421875 }, { "x": 378.0368896484375, "y": 66.88023071289064 }, { "x": 373.91899414062505, "y": 70.25183715820313 }, { "x": 372.5943603515625, "y": 76.26655273437501 }, { "x": 372.4970947265625, "y": 81.93436889648439 }, { "x": 376.9763427734375, "y": 85.72461547851563 }, { "x": 377.59091796875003, "y": 82.73416137695312 }, { "x": 379.816162109375, "y": 86.81669311523437 }, { "x": 377.837109375, "y": 90.02651367187501 }, { "x": 372.7728515625, "y": 90.37169189453125 }, { "x": 367.33486328125, "y": 93.25536499023438 }, { "x": 361.7093017578125, "y": 95.61136474609376 }, { "x": 360.264111328125, "y": 97.49647216796876 }, { "x": 365.68339843750005, "y": 95.07774047851562 }, { "x": 366.2867431640625, "y": 97.51669921875 }, { "x": 361.15288085937505, "y": 100.91732788085938 }, { "x": 356.9622314453125, "y": 102.63175048828126 }, { "x": 358.1524658203125, "y": 108.31311645507813 }, { "x": 356.2425537109375, "y": 114.03662719726563 }, { "x": 353.46794433593755, "y": 116.76904907226563 }, { "x": 351.57670898437505, "y": 117.21749267578126 }, { "x": 354.60605468750003, "y": 122.11985473632814 }, { "x": 353.0060546875, "y": 127.99552001953126 }, { "x": 351.61894531250005, "y": 133.91021728515625 }, { "x": 350.040283203125, "y": 130.21497802734376 }, { "x": 348.8533935546875, "y": 125.64051513671876 }, { "x": 347.37646484375, "y": 125.62995605468751 }, { "x": 346.23820800781255, "y": 127.5468505859375 }, { "x": 347.8447998046875, "y": 132.7272216796875 }, { "x": 348.9939697265625, "y": 136.4786865234375 }, { "x": 353.046826171875, "y": 140.00830078125 }, { "x": 356.443798828125, "y": 145.111376953125 }, { "x": 356.9291015625, "y": 150.74227294921874 }, { "x": 355.01665039062505, "y": 150.80391845703124 }, { "x": 355.429833984375, "y": 145.90511474609377 }, { "x": 352.16728515625005, "y": 150.69527587890624 }, { "x": 352.56047363281255, "y": 153.24825439453124 }, { "x": 351.0748291015625, "y": 156.85855712890626 }, { "x": 345.609130859375, "y": 159.42967529296877 }, { "x": 342.7239501953125, "y": 164.77021484375 }, { "x": 337.4547119140625, "y": 167.36973876953127 }, { "x": 335.0979736328125, "y": 172.9485107421875 }, { "x": 331.3198974609375, "y": 177.62357177734376 }, { "x": 327.33964843750005, "y": 181.7691650390625 }, { "x": 323.9397705078125, "y": 186.8195556640625 }, { "x": 322.4529052734375, "y": 192.80411376953126 }, { "x": 322.844140625, "y": 198.88402099609377 }, { "x": 325.114453125, "y": 204.6304931640625 }, { "x": 328.2891357421875, "y": 209.93229980468752 }, { "x": 332.1939208984375, "y": 214.71474609375002 }, { "x": 333.91789550781255, "y": 220.24727783203127 }, { "x": 336.9782958984375, "y": 225.6223876953125 }, { "x": 338.6890869140625, "y": 231.4866943359375 }, { "x": 338.98046875, "y": 237.65471191406252 }, { "x": 338.9265869140625, "y": 241.3682861328125 }, { "x": 335.6431396484375, "y": 246.46044921875 }, { "x": 202.77165527343752, "y": 241.9763916015625 }, { "x": 202.00352783203127, "y": 238.197705078125 }, { "x": 204.04178466796876, "y": 231.05375976562502 }, { "x": 344.89765625, "y": 121.28896484375001 }, { "x": 344.7764892578125, "y": 116.17852783203125 }, { "x": 344.3126953125, "y": 122.12951049804688 }, { "x": 374.53779296875, "y": 88.40509643554688 }, { "x": 278.4694091796875, "y": 77.00374755859374 }, { "x": 59.587518310546876, "y": 31.089763641357422 }, { "x": 58.704235839843754, "y": 244.60917968750002 }, { "x": 61.39719848632813, "y": 240.0898193359375 }, { "x": 64.86140136718751, "y": 239.9143798828125 }, { "x": 62.144091796875, "y": 244.291455078125 }, { "x": 144.61533203125, "y": 235.3551025390625 }, { "x": 147.7361572265625, "y": 233.90224609375002 }, { "x": 149.1006591796875, "y": 237.2807373046875 }, { "x": 142.69737548828124, "y": 234.04570312500002 }, { "x": 139.2541015625, "y": 232.94963378906252 }, { "x": 144.22510986328126, "y": 232.04018554687502 }, { "x": 134.0774658203125, "y": 231.477392578125 }, { "x": 132.23338623046874, "y": 227.74309082031252 }, { "x": 136.40603027343752, "y": 230.309423828125 }, { "x": 38.55142669677734, "y": 225.25920410156252 }, { "x": 41.52969665527344, "y": 228.13525390625 }, { "x": 116.88058471679688, "y": 226.14604492187502 }, { "x": 119.094091796875, "y": 224.1104736328125 }, { "x": 123.25404052734376, "y": 224.60733642578126 }, { "x": 29.889592742919923, "y": 219.754345703125 }, { "x": 38.31025543212891, "y": 213.031005859375 }, { "x": 38.610226440429685, "y": 211.05400390625002 }, { "x": 39.428688049316406, "y": 214.7022216796875 }, { "x": 51.93556823730469, "y": 167.40341796875 }, { "x": 52.57078247070313, "y": 162.12486572265627 }, { "x": 40.610565185546875, "y": 154.11906738281252 }, { "x": 46.38428649902344, "y": 155.5481201171875 }, { "x": 379.4732177734375, "y": 89.37191162109376 }, { "x": 378.641748046875, "y": 90.09537963867187 }, { "x": 257.2837158203125, "y": 50.379541015625 }, { "x": 254.467529296875, "y": 53.931695556640626 }, { "x": 57.88595275878907, "y": 25.2906982421875 }];
const css$1 = {
  code: "#p5.svelte-19ztf50{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:0}",
  map: '{"version":3,"file":"Sketch.svelte","sources":["Sketch.svelte"],"sourcesContent":["<script lang=\\"ts\\">import P5, {} from \\"p5-svelte\\";\\nimport { coordinates, constellated, constellation_index, delta, spinDelta, currentItem } from \\"../stores\\";\\nimport { throttle } from \\"lodash-es\\";\\nimport { get_css_var, rescale } from \\"../scripts/functions\\";\\nimport { moroccoData, englandData, italyData, uaeData, usaData } from \\"../scripts/coordinateData\\";\\nimport { moroccoMobile, englandMobile, italyMobile, uaeMobile, usaMobile } from \\"../scripts/coordinateMobile\\";\\nimport { onMount } from \\"svelte\\";\\nexport let index;\\nlet innerWidth;\\nlet innerHeight;\\nlet isMobile;\\nlet quadtree;\\nconst capacity = 8;\\nlet map;\\nlet scaledMoroccoData = moroccoData.map((coord) => ({ ...coord }));\\nlet scaledItalyData = italyData.map((coord) => ({ ...coord }));\\nlet scaledUaeData = uaeData.map((coord) => ({ ...coord }));\\nlet scaledUsaData = usaData.map((coord) => ({ ...coord }));\\nlet scaledEnglandData = englandData.map((coord) => ({ ...coord }));\\nlet pointData = [scaledMoroccoData, scaledItalyData, scaledUaeData, scaledUsaData, scaledEnglandData];\\nconst spread = 0;\\nlet point = 0;\\nlet weight = 0.9;\\nlet originalWidth;\\nlet originalHeight;\\nlet aspectRatio;\\nlet scale;\\nlet parameters = 0;\\nconst offset = 35e-5;\\nlet forceradius = 140;\\nlet proximity = 12;\\nlet repulsionStrength = 11;\\nlet prox = [12, 11];\\nlet snapStrength = 100;\\nlet cx, cy, s;\\nlet max;\\nlet angle = 0;\\nlet spinSpeed = 0;\\nconst maxSpinSpeed = 0.1;\\nconst spinDecay = 0.9;\\nspinDelta.subscribe((value) => {\\n  handleScroll(value);\\n});\\n$: coordinate_index = constellation_index;\\n$: if (index === 1) {\\n  constellated.set(true);\\n  changeMode();\\n  angle = 0;\\n  spinSpeed = 0;\\n} else {\\n  if (index != 2) {\\n    angle = 0;\\n    spinSpeed = 0;\\n  }\\n  constellated.set(false);\\n  changeMode();\\n  constellation_index.set(0);\\n}\\n$: if ($constellated) {\\n  changeMode();\\n  constellated.set(false);\\n}\\nconst range = 100;\\nconst walkers = [];\\nconst wobblers = [];\\nconst positions = [\\n  { x: 1 / 7, y: 1 / 3 },\\n  { x: 1 / 5, y: 6 / 7 },\\n  { x: 1 / 5, y: 3 / 5 }\\n];\\nconst thrupdate2 = throttle((p5) => {\\n  wobblers.forEach((wobbler, i) => {\\n    $coordinates[i] = { ...$coordinates[i], x: wobbler.x, y: wobbler.y };\\n  });\\n}, 100);\\nlet accent1_s, accent2_s, accent3_s, white_s, black_s;\\nlet accent1;\\nlet accent2;\\nlet accent3;\\nlet white;\\nlet black;\\nonMount(() => {\\n  black_s = get_css_var(\\"--black\\").trim();\\n  white_s = get_css_var(\\"--white\\").trim();\\n  accent1_s = get_css_var(\\"--accent1\\").trim();\\n  accent2_s = get_css_var(\\"--accent2\\").trim();\\n  accent3_s = get_css_var(\\"--accent3\\").trim();\\n  s = parseFloat(get_css_var(\\"--media_size\\").trim()) + 50 - 20;\\n  let ang = parseFloat(get_css_var(\\"--ang\\"));\\n  max = -ang * 13 + 1;\\n});\\nfunction handleScroll(deltaY) {\\n  spinSpeed = Math.sign(deltaY) * maxSpinSpeed * Math.min(Math.abs(deltaY) / 100, 1);\\n}\\nclass Wobbler {\\n  //this is the endpoint that controls the floating boxes\\n  ox;\\n  oy;\\n  //originf\\n  xoff;\\n  yoff;\\n  //offset\\n  xnoise;\\n  ynoise;\\n  //noise value\\n  x;\\n  y;\\n  //position\\n  constructor(p5, ox, oy) {\\n    this.xoff = p5.random(1e3);\\n    this.yoff = p5.random(1e3);\\n    this.ox = ox;\\n    this.oy = oy;\\n    this.x = ox;\\n    this.y = oy;\\n    this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -range * 1.5, range * 1.5);\\n    this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -range, range);\\n  }\\n  move(p5) {\\n    this.xoff += 2e-3;\\n    this.yoff += 2e-3;\\n    this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -range, range);\\n    this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -range, range);\\n  }\\n  display(p5) {\\n    white.setAlpha(255);\\n    p5.fill(white);\\n    this.x = this.ox + this.xnoise;\\n    this.y = this.oy + this.ynoise;\\n    p5.ellipse(this.x - 50, this.y - 100, 15);\\n  }\\n}\\nclass Walker {\\n  x;\\n  y;\\n  //position\\n  ox;\\n  oy;\\n  //original position\\n  xoff;\\n  yoff;\\n  //offset\\n  xnoise;\\n  ynoise;\\n  traveling;\\n  mapmode;\\n  constructor(p5) {\\n    this.xoff = p5.random(5e3);\\n    this.yoff = p5.random(5e3);\\n    this.mapmode = false;\\n    this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -p5.width * spread, p5.width * (1 + spread));\\n    this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -p5.height * spread, p5.height * (1 + spread));\\n    this.x = this.xnoise;\\n    this.y = this.ynoise;\\n    this.ox = 0 + this.x;\\n    this.oy = 0 + this.y;\\n    this.traveling = false;\\n  }\\n  move(p5) {\\n    this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -p5.width * spread, p5.width * (1 + spread));\\n    this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -p5.height * spread, p5.height * (1 + spread));\\n    this.xoff += offset;\\n    this.yoff += offset;\\n    this.x = this.xnoise;\\n    this.y = this.ynoise;\\n  }\\n  repel(p5, mouseX, mouseY) {\\n    let d = p5.dist(mouseX, mouseY, this.x, this.y);\\n    if (d < forceradius) {\\n      if (!this.traveling && !this.mapmode) {\\n        this.ox = this.x;\\n        this.oy = this.y;\\n      }\\n      this.traveling = true;\\n      let dx = this.x - mouseX;\\n      let dy = this.y - mouseY;\\n      let forceDirection = p5.createVector(dx, dy);\\n      let forceMagnitude = repulsionStrength * (1 - d / forceradius);\\n      forceDirection.setMag(forceMagnitude);\\n      this.x += forceDirection.x;\\n      this.y += forceDirection.y;\\n    }\\n  }\\n  goBack(p5) {\\n    let xtarget = this.ox;\\n    let ytarget = this.oy;\\n    let d = p5.dist(xtarget, ytarget, this.x, this.y);\\n    let dx = xtarget - this.x;\\n    let dy = ytarget - this.y;\\n    let forceDirection = p5.createVector(dx, dy);\\n    let stopThreshold = 1;\\n    if (d > stopThreshold) {\\n      let forceMagnitude = p5.map(d, 0, p5.width / 2, 0, snapStrength);\\n      forceDirection.setMag(forceMagnitude);\\n      if (p5.dist(this.x + forceDirection.x, this.y + forceDirection.y, xtarget, ytarget) > d) {\\n        forceDirection.x = 0;\\n        forceDirection.y = 0;\\n      }\\n      this.x += forceDirection.x;\\n      this.y += forceDirection.y;\\n    } else {\\n      this.x = xtarget;\\n      this.y = ytarget;\\n    }\\n    if (d < 1) {\\n      this.traveling = false;\\n    }\\n  }\\n}\\nfunction scaleConstellation(w, h) {\\n  scale = w / originalWidth;\\n  cy = h / 2;\\n  if (w < 400) {\\n    cx = 7 * w / 10;\\n  } else {\\n    cx = w / 2;\\n  }\\n  if (w > 700) {\\n    scaledMoroccoData = scaleCoordinates(moroccoData, scale, scale);\\n    scaledItalyData = scaleCoordinates(italyData, scale, scale);\\n    scaledUaeData = scaleCoordinates(uaeData, scale, scale);\\n    scaledUsaData = scaleCoordinates(usaData, scale, scale);\\n    scaledEnglandData = scaleCoordinates(englandData, scale, scale);\\n  } else {\\n    scaledMoroccoData = scaleCoordinates(moroccoMobile, scale, scale);\\n    scaledItalyData = scaleCoordinates(italyMobile, scale, scale);\\n    scaledUaeData = scaleCoordinates(uaeMobile, scale, scale);\\n    scaledUsaData = scaleCoordinates(usaMobile, scale, scale);\\n    scaledEnglandData = scaleCoordinates(englandMobile, scale, scale);\\n  }\\n  pointData = [scaledMoroccoData, scaledItalyData, scaledUaeData, scaledUsaData, scaledEnglandData];\\n  map = new Float32Array(pointData[$constellation_index].flatMap((coord) => [coord.x, coord.y]));\\n}\\nfunction scaleCoordinates(data, scaleX, scaleY) {\\n  return data.map((coord) => ({\\n    x: coord.x * scaleX,\\n    y: coord.y * scaleY\\n  }));\\n}\\nconst sketch = (p5) => {\\n  p5.mouseClicked = () => {\\n    console.log(innerHeight);\\n    parameters += 1;\\n    parameters %= 4;\\n  };\\n  p5.setup = () => {\\n    p5.createCanvas(innerWidth, innerHeight);\\n    isMobile = innerWidth > 765;\\n    originalWidth = isMobile ? 1440 : 365;\\n    originalHeight = isMobile ? 780 : 667;\\n    aspectRatio = originalWidth / originalHeight;\\n    englandData.forEach((point2) => {\\n      point2.x += 700;\\n      point2.y -= 300;\\n    });\\n    moroccoData.forEach((point2) => {\\n      point2.x += 770;\\n      point2.y += 70;\\n    });\\n    uaeData.forEach((point2) => {\\n      point2.x += 600;\\n      point2.y += 70;\\n    });\\n    usaData.forEach((point2) => {\\n      point2.x += 650;\\n      point2.y += 150;\\n    });\\n    italyData.forEach((point2) => {\\n      point2.x += 700;\\n      point2.y += 50;\\n    });\\n    englandMobile.forEach((point2) => {\\n      point2.x -= 120;\\n      point2.y -= 120;\\n    });\\n    moroccoMobile.forEach((point2) => {\\n      point2.y += 140;\\n    });\\n    uaeMobile.forEach((point2) => {\\n      point2.y += 180;\\n      point2.x -= 40;\\n    });\\n    usaMobile.forEach((point2) => {\\n      point2.y += 240;\\n      point2.x -= 20;\\n    });\\n    italyMobile.forEach((point2) => {\\n      point2.y += 120;\\n      point2.x -= 30;\\n    });\\n    scaleConstellation(innerWidth, innerHeight);\\n    p5.pixelDensity(p5.displayDensity());\\n    quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);\\n    white = p5.color(white_s);\\n    black = p5.color(black_s);\\n    accent1 = p5.color(accent1_s);\\n    accent2 = p5.color(accent2_s);\\n    accent3 = p5.color(accent3_s);\\n    let numWalkers = isMobile ? 1e3 : 500;\\n    for (let i = 0; i < numWalkers; i++) {\\n      walkers.push(new Walker(p5));\\n    }\\n    for (let i = 0; i < 3; i++) {\\n      wobblers.push(new Wobbler(p5, p5.width * positions[i].x, p5.height * positions[i].y));\\n    }\\n  };\\n  p5.draw = () => {\\n    p5.clear();\\n    quadtree.clear();\\n    p5.background(black);\\n    if (index === 2 && s > 220) {\\n      let progress = p5.map($delta, 0, max, 3 * p5.PI / 2, p5.PI / 2);\\n      p5.noFill();\\n      p5.stroke(white);\\n      p5.strokeWeight(1);\\n      p5.arc(cx, cy, s, s, 0, 2 * p5.PI);\\n      let s2 = s - 20;\\n      p5.stroke(white);\\n      p5.strokeWeight(6);\\n      p5.fill(white);\\n      p5.arc(cx, cy, s2, s2, progress, p5.PI / 2, p5.PIE);\\n      p5.fill(black);\\n      p5.noStroke();\\n      p5.rect(p5.width / 2 - 10, 0, s2, p5.height);\\n    }\\n    p5.push();\\n    p5.translate(p5.width / 2, p5.height / 2);\\n    p5.rotate(angle);\\n    p5.translate(-p5.width / 2, -p5.height / 2);\\n    walkers.forEach((walker, i) => {\\n      if (index === 2) {\\n        let mouseX = p5.mouseX - p5.width / 2;\\n        let mouseY = p5.mouseY - p5.height / 2;\\n        let rotatedMouse = p5.createVector(mouseX, mouseY).rotate(-angle);\\n        walker.repel(p5, rotatedMouse.x + p5.width / 2, rotatedMouse.y + p5.height / 2);\\n        if (walker.traveling && p5.dist(rotatedMouse.x + p5.width / 2, rotatedMouse.y + p5.height / 2, walker.x, walker.y) > proximity) {\\n          walker.goBack(p5);\\n        } else if (!walker.mapmode && !walker.traveling) {\\n          walker.move(p5);\\n        }\\n      } else {\\n        walker.repel(p5, p5.mouseX, p5.mouseY);\\n        if (walker.traveling && p5.dist(p5.mouseX, p5.mouseY, walker.x, walker.y) > proximity) {\\n          walker.goBack(p5);\\n        } else if (!walker.mapmode && !walker.traveling) {\\n          walker.move(p5);\\n        }\\n      }\\n      quadtree.insert(new Point(walker.x, walker.y, walker));\\n      p5.stroke(white);\\n      p5.strokeWeight(point);\\n      p5.point(walker.x, walker.y);\\n    });\\n    walkers.forEach((walker, i) => {\\n      let searchArea = new Circle(walker.x, walker.y, proximity);\\n      let pointsInRange = quadtree.query(searchArea);\\n      if (walker.mapmode && index === 1 && !walker.traveling && i < walkers.length - 1) {\\n        let d = p5.dist(walkers[i + 1].x, walker.x, walkers[i + 1].y, walker.y);\\n        let alpha = 255 - p5.map(d, 0, proximity, 0, 255);\\n        let isFar = d > proximity;\\n        isFar ? white.setAlpha(0.1) : white.setAlpha(alpha);\\n        isFar ? p5.stroke(white) : p5.stroke(white);\\n        p5.strokeWeight(d === 0 ? weight : weight - p5.map(d, 0, proximity, weight, 0));\\n        isFar ? p5.strokeWeight(0.2) : true;\\n        if (d < 3 * proximity) {\\n          p5.line(walker.x, walker.y, walkers[i + 1].x, walkers[i + 1].y);\\n        }\\n      }\\n      for (let i2 = 0; i2 < pointsInRange.length; i2++) {\\n        const other = pointsInRange[i2];\\n        if (other.userData !== walker) {\\n          let d = other.sqDistanceFrom(walker);\\n          let alpha = p5.map(d, 0, proximity * proximity, 255, 0);\\n          white.setAlpha(alpha);\\n          p5.stroke(white);\\n          p5.strokeWeight(d === 0 ? weight : p5.map(d, 0, proximity * proximity, weight, 0));\\n          p5.line(walker.x, walker.y, other.x, other.y);\\n        }\\n      }\\n    });\\n    wobblers.forEach((wobbler, i) => {\\n      wobbler.move(p5);\\n      wobbler.display(p5);\\n    });\\n    thrupdate2(p5);\\n    p5.strokeWeight(0.4);\\n    white.setAlpha(10);\\n    p5.stroke(white);\\n    p5.noFill();\\n    p5.rectMode(p5.CENTER);\\n    drawQuadtree(p5, quadtree);\\n    p5.pop();\\n    angle += spinSpeed;\\n    if (Math.abs(spinSpeed) > 0) {\\n      spinSpeed *= spinDecay;\\n    }\\n    white.setAlpha(255);\\n  };\\n  p5.windowResized = () => {\\n    p5.resizeCanvas(innerWidth, innerHeight);\\n    isMobile = innerWidth > 765;\\n    quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);\\n    wobblers.forEach((wobbler, i) => {\\n      wobbler.ox = p5.width * positions[i].x;\\n      wobbler.oy = p5.height * positions[i].y;\\n    });\\n    scaleConstellation(innerWidth, innerHeight);\\n    changeMode();\\n  };\\n};\\nfunction drawQuadtree(p5, quadtree2) {\\n  if (!quadtree2) return;\\n  p5.rect(quadtree2.boundary.x, quadtree2.boundary.y, quadtree2.boundary.w * 2, quadtree2.boundary.h * 2);\\n  if (quadtree2.divided) {\\n    drawQuadtree(p5, quadtree2.northeast);\\n    drawQuadtree(p5, quadtree2.northwest);\\n    drawQuadtree(p5, quadtree2.southeast);\\n    drawQuadtree(p5, quadtree2.southwest);\\n  }\\n}\\nfunction drawMap(p5, map2) {\\n  p5.noFill();\\n  p5.stroke(white);\\n  p5.strokeWeight(0.2);\\n  p5.beginShape();\\n  map2.forEach((coord) => {\\n    let x = coord.x;\\n    let y = coord.y;\\n    p5.vertex(x, y);\\n  });\\n  p5.endShape(p5.CLOSE);\\n}\\nfunction changeMode() {\\n  map = new Float32Array(pointData[$constellation_index].flatMap((coord) => [coord.x, coord.y]));\\n  constellated.set(index === 1 ? true : false);\\n  walkers.forEach((walker, i) => {\\n    if (!$constellated) {\\n      if (index === 3) {\\n        walker.mapmode = true;\\n        proximity = 6;\\n        point = 1;\\n        let upperborder = !isMobile ? innerWidth / 2 - 100 : cy - 100;\\n        let lowerborder = !isMobile ? innerWidth / 2 + 100 : cy + 100;\\n        if (isMobile) {\\n          walker.oy = Math.random() < 0.5 ? upperborder : lowerborder;\\n          walker.ox = Math.random() * innerWidth;\\n        } else {\\n          walker.ox = Math.random() < 0.5 ? upperborder : lowerborder;\\n          walker.oy = Math.random() * innerHeight;\\n        }\\n      } else if (index === 2) {\\n        let rad = 160;\\n        let rad2 = 160;\\n        proximity = 0;\\n        let radius = Math.random() < 0.2 ? rad - Math.random() * 10 : rad2 - Math.random() * 10;\\n        let angle2 = Math.random() * 2 * Math.PI;\\n        walker.mapmode = true;\\n        walker.oy = cy + Math.sin(angle2) * radius;\\n        walker.ox = cx + Math.cos(angle2) * radius;\\n      } else {\\n        walker.mapmode = false;\\n        proximity = prox[0];\\n        walker.ox = walker.xnoise;\\n        walker.oy = walker.ynoise;\\n      }\\n    } else if (i < pointData[$constellation_index].length) {\\n      walker.mapmode = true;\\n      walker.ox = map[2 * i];\\n      walker.oy = map[2 * i + 1];\\n    } else {\\n      walker.mapmode = false;\\n      proximity = innerWidth > 765 ? prox[1] : 15;\\n      walker.ox = walker.xnoise;\\n      walker.oy = walker.ynoise;\\n    }\\n    walker.traveling = true;\\n  });\\n}\\n<\/script>\\n  \\n  <svelte:window bind:innerWidth bind:innerHeight/>\\n  \\n  <div id=\\"p5\\">\\n    <P5 {sketch} />\\n  </div>\\n\\n  <style>\\n    #p5 {\\n      width: 100vw;\\n      height: 100vh;\\n      position: fixed;\\n      left: 0;\\n      top: 0;\\n      z-index: 0;\\n      /* filter: invert(var(--dark)); */\\n      /* filter: invert(1); */\\n    }\\n  </style>"],"names":[],"mappings":"AAueI,kBAAI,CACF,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,CAGX"}'
};
const capacity = 8;
const spread = 0;
let weight = 0.9;
const offset = 35e-5;
let forceradius = 140;
let repulsionStrength = 11;
let snapStrength = 100;
const maxSpinSpeed = 0.1;
const spinDecay = 0.9;
const range = 100;
function scaleCoordinates(data, scaleX, scaleY) {
  return data.map((coord) => ({ x: coord.x * scaleX, y: coord.y * scaleY }));
}
function drawQuadtree(p5, quadtree2) {
  if (!quadtree2) return;
  p5.rect(quadtree2.boundary.x, quadtree2.boundary.y, quadtree2.boundary.w * 2, quadtree2.boundary.h * 2);
  if (quadtree2.divided) {
    drawQuadtree(p5, quadtree2.northeast);
    drawQuadtree(p5, quadtree2.northwest);
    drawQuadtree(p5, quadtree2.southeast);
    drawQuadtree(p5, quadtree2.southwest);
  }
}
const Sketch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $constellation_index, $$unsubscribe_constellation_index;
  let $constellated, $$unsubscribe_constellated;
  let $$unsubscribe_delta;
  let $coordinates, $$unsubscribe_coordinates;
  $$unsubscribe_constellation_index = subscribe(constellation_index, (value) => $constellation_index = value);
  $$unsubscribe_constellated = subscribe(constellated, (value) => $constellated = value);
  $$unsubscribe_delta = subscribe(delta, (value) => value);
  $$unsubscribe_coordinates = subscribe(coordinates, (value) => $coordinates = value);
  let { index } = $$props;
  let innerWidth;
  let innerHeight;
  let isMobile;
  let quadtree;
  let map;
  let scaledMoroccoData = moroccoData.map((coord) => ({ ...coord }));
  let scaledItalyData = italyData.map((coord) => ({ ...coord }));
  let scaledUaeData = uaeData.map((coord) => ({ ...coord }));
  let scaledUsaData = usaData.map((coord) => ({ ...coord }));
  let scaledEnglandData = englandData.map((coord) => ({ ...coord }));
  let pointData = [
    scaledMoroccoData,
    scaledItalyData,
    scaledUaeData,
    scaledUsaData,
    scaledEnglandData
  ];
  let point = 0;
  let originalWidth;
  let scale;
  let proximity = 12;
  let prox = [12, 11];
  let cx, cy;
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
        if (p5.dist(this.x + forceDirection.x, this.y + forceDirection.y, xtarget, ytarget) > d) {
          forceDirection.x = 0;
          forceDirection.y = 0;
        }
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
  function scaleConstellation(w, h) {
    scale = w / originalWidth;
    cy = h / 2;
    {
      cx = w / 2;
    }
    {
      scaledMoroccoData = scaleCoordinates(moroccoMobile, scale, scale);
      scaledItalyData = scaleCoordinates(italyMobile, scale, scale);
      scaledUaeData = scaleCoordinates(uaeMobile, scale, scale);
      scaledUsaData = scaleCoordinates(usaMobile, scale, scale);
      scaledEnglandData = scaleCoordinates(englandMobile, scale, scale);
    }
    pointData = [
      scaledMoroccoData,
      scaledItalyData,
      scaledUaeData,
      scaledUsaData,
      scaledEnglandData
    ];
    map = new Float32Array(pointData[$constellation_index].flatMap((coord) => [coord.x, coord.y]));
  }
  const sketch = (p5) => {
    p5.mouseClicked = () => {
      console.log(innerHeight);
    };
    p5.setup = () => {
      p5.createCanvas(innerWidth, innerHeight);
      isMobile = innerWidth > 765;
      originalWidth = isMobile ? 1440 : 365;
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
      englandMobile.forEach((point2) => {
        point2.x -= 120;
        point2.y -= 120;
      });
      moroccoMobile.forEach((point2) => {
        point2.y += 140;
      });
      uaeMobile.forEach((point2) => {
        point2.y += 180;
        point2.x -= 40;
      });
      usaMobile.forEach((point2) => {
        point2.y += 240;
        point2.x -= 20;
      });
      italyMobile.forEach((point2) => {
        point2.y += 120;
        point2.x -= 30;
      });
      scaleConstellation(innerWidth, innerHeight);
      p5.pixelDensity(p5.displayDensity());
      quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);
      white = p5.color(white_s);
      black = p5.color(black_s);
      p5.color(accent1_s);
      p5.color(accent2_s);
      p5.color(accent3_s);
      let numWalkers = isMobile ? 1e3 : 500;
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
        if (walker.mapmode && index === 1 && !walker.traveling && i < walkers.length - 1) {
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
        for (let i2 = 0; i2 < pointsInRange.length; i2++) {
          const other = pointsInRange[i2];
          if (other.userData !== walker) {
            let d = other.sqDistanceFrom(walker);
            let alpha = p5.map(d, 0, proximity * proximity, 255, 0);
            white.setAlpha(alpha);
            p5.stroke(white);
            p5.strokeWeight(d === 0 ? weight : p5.map(d, 0, proximity * proximity, weight, 0));
            p5.line(walker.x, walker.y, other.x, other.y);
          }
        }
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
      isMobile = innerWidth > 765;
      quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);
      wobblers.forEach((wobbler, i) => {
        wobbler.ox = p5.width * positions[i].x;
        wobbler.oy = p5.height * positions[i].y;
      });
      scaleConstellation(innerWidth, innerHeight);
      changeMode();
    };
  };
  function changeMode() {
    map = new Float32Array(pointData[$constellation_index].flatMap((coord) => [coord.x, coord.y]));
    constellated.set(index === 1 ? true : false);
    walkers.forEach((walker, i) => {
      if (!$constellated) {
        if (index === 3) {
          walker.mapmode = true;
          proximity = 6;
          point = 1;
          let upperborder = !isMobile ? innerWidth / 2 - 100 : cy - 100;
          let lowerborder = !isMobile ? innerWidth / 2 + 100 : cy + 100;
          if (isMobile) {
            walker.oy = Math.random() < 0.5 ? upperborder : lowerborder;
            walker.ox = Math.random() * innerWidth;
          } else {
            walker.ox = Math.random() < 0.5 ? upperborder : lowerborder;
            walker.oy = Math.random() * innerHeight;
          }
        } else if (index === 2) {
          let rad = 160;
          let rad2 = 160;
          proximity = 0;
          let radius = Math.random() < 0.2 ? rad - Math.random() * 10 : rad2 - Math.random() * 10;
          let angle2 = Math.random() * 2 * Math.PI;
          walker.mapmode = true;
          walker.oy = cy + Math.sin(angle2) * radius;
          walker.ox = cx + Math.cos(angle2) * radius;
        } else {
          walker.mapmode = false;
          proximity = prox[0];
          walker.ox = walker.xnoise;
          walker.oy = walker.ynoise;
        }
      } else if (i < pointData[$constellation_index].length) {
        walker.mapmode = true;
        walker.ox = map[2 * i];
        walker.oy = map[2 * i + 1];
      } else {
        walker.mapmode = false;
        proximity = 15;
        walker.ox = walker.xnoise;
        walker.oy = walker.ynoise;
      }
      walker.traveling = true;
    });
  }
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  $$result.css.add(css$1);
  {
    if (index === 1) {
      constellated.set(true);
      changeMode();
      angle = 0;
      spinSpeed = 0;
    } else {
      if (index != 2) {
        angle = 0;
        spinSpeed = 0;
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
const css = {
  code: ".flip-container.svelte-1utwaon.svelte-1utwaon{perspective:1500px;width:100%;height:100vh;position:relative}.flip-card.svelte-1utwaon.svelte-1utwaon{width:100%;height:100%;position:relative;transition:transform 0.6s ease;transform-style:preserve-3d}.flipped.svelte-1utwaon .flip-card.svelte-1utwaon{transform:rotateY(180deg)}.flip-face.svelte-1utwaon.svelte-1utwaon{position:absolute;width:100%;height:100%;backface-visibility:hidden;top:0;left:0}.flip-front.svelte-1utwaon.svelte-1utwaon{z-index:2;overflow:hidden}.flip-back.svelte-1utwaon.svelte-1utwaon{transform:rotateY(180deg);overflow-y:auto;z-index:2;box-sizing:border-box}#wrapper.svelte-1utwaon.svelte-1utwaon{width:100%;height:100%}.flip-btn.svelte-1utwaon.svelte-1utwaon{position:fixed;top:1rem;right:1rem;padding:0.75rem 1.75rem;font-size:1rem;font-weight:600;z-index:10;border:none;cursor:pointer;background:var(--white);color:var(--black);transition:all 0.3s ease}.flip-btn.svelte-1utwaon.svelte-1utwaon:hover{transform:scale(1.09);background:var(--white)}@media(prefers-color-scheme: dark){.flip-btn.svelte-1utwaon.svelte-1utwaon{background:var(--white);color:var(--black)}.flip-btn.svelte-1utwaon.svelte-1utwaon:hover{background:var(--black);color:var(--white)}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Manager from \\"../components/Manager.svelte\\";\\nimport Menu from \\"../components/Menu.svelte\\";\\nimport Profile from \\"../components/Profile.svelte\\";\\nimport Items from \\"../components/Items.svelte\\";\\nimport Loader from \\"../components/Loader.svelte\\";\\nimport CarouselFinal from \\"../components/CarouselFinal.svelte\\";\\nimport Logo from \\"../components/Logo.svelte\\";\\nimport Sketch from \\"../components/Sketch.svelte\\";\\nimport Documentation from \\"../components/Documentation.svelte\\";\\nimport { contents } from \\"../scripts/functions\\";\\nimport { onMount } from \\"svelte\\";\\nimport { gui_angle, gui_carousel, gui_menu, gui_motion, gui_outline, transitioned } from \\"../stores\\";\\nimport ProjectsPage from \\"../components/ProjectsPage.svelte\\";\\nimport Test from \\"../components/Test.svelte\\";\\nlet t;\\nlet darkmode;\\n$: showDocs = index === 3 ? true : false;\\nlet index = 0;\\nlet scrollThreshold = 70;\\nlet innerWidth;\\n$: isMobile = innerWidth < 765;\\nconst unsubscribe = transitioned.subscribe(($transitioned) => {\\n  t = $transitioned;\\n});\\n<\/script>\\n\\n<svelte:window bind:innerWidth />\\n\\n<Sketch bind:index={index} />\\n\\n<Manager>\\n    <Loader slot=\\"loader\\" />\\n    <div slot=\\"bs\\" id=\\"blackscreen\\"> </div>\\n\\n    <!-- Flip Card Container -->\\n    <div slot=\\"main\\" class=\\"flip-container\\" class:flipped={showDocs}>\\n        <div class=\\"flip-card\\">\\n            <!-- FRONT SIDE -->\\n            <div class=\\"flip-face flip-front\\">\\n\\n                <div id=\\"wrapper\\">\\n                    <Logo bind:index={index}/>\\n                    <Menu bind:index={index} bind:type={$gui_menu} bind:outline={$gui_outline}/>\\n                    {#if !(index === 1 && isMobile)}\\n                        <Profile bind:index={index}/>\\n                    {/if}\\n                    {#if index != 3}\\n                        <Items bind:index={index} bind:scrollThreshold={scrollThreshold}/>\\n                    {:else if t && $gui_carousel === \\"stack\\"}\\n                        <CarouselFinal />\\n                    {:else if t}\\n                        <CarouselFinal />\\n                    {/if}\\n                </div>\\n            </div>\\n\\n            <!-- BACK SIDE -->\\n            <div class=\\"flip-face flip-back\\">\\n                <button class=\\"flip-btn\\" on:click={() => index = 2}>Back</button>\\n                {#each contents as content }\\n                    <div class=\\"doc\\">\\n                        <Documentation data={content} />\\n                    </div>\\n                {/each}\\n                <!-- <ProjectsPage /> -->\\n            </div>\\n        </div>\\n    </div>\\n</Manager>\\n\\n<style>\\n\\n    .flip-container {\\n        perspective: 1500px;\\n        width: 100%;\\n        height: 100vh;\\n        position: relative;\\n    }\\n\\n    .flip-card {\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transition: transform 0.6s ease;\\n        transform-style: preserve-3d;\\n    }\\n\\n    .flipped .flip-card {\\n        transform: rotateY(180deg);\\n    }\\n\\n    .flip-face {\\n        position: absolute;\\n        width: 100%;\\n        height: 100%;\\n        backface-visibility: hidden;\\n        top: 0;\\n        left: 0;\\n    }\\n\\n    .flip-front {\\n        z-index: 2;\\n        overflow: hidden;\\n    }\\n\\n    .flip-back {\\n        transform: rotateY(180deg);\\n        overflow-y: auto;\\n        z-index: 2;\\n        /* overflow-x: hidden; */\\n        /* padding: 2rem; */\\n        box-sizing: border-box;\\n    }\\n\\n    #wrapper {\\n        width: 100%;\\n        height: 100%;\\n    }\\n\\n    .flip-btn {\\n        position: fixed;\\n        top: 1rem;\\n        right: 1rem;\\n        /* height: 10px; */\\n        padding: 0.75rem 1.75rem;\\n        font-size: 1rem;\\n        font-weight: 600;\\n        z-index: 10;\\n        border: none;\\n        cursor: pointer;\\n        background: var(--white);\\n        color: var(--black);\\n        transition: all 0.3s ease;\\n    }\\n\\n.flip-btn:hover {\\n    transform: scale(1.09);\\n    background: var(--white);\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n    .flip-btn {\\n        background: var(--white);\\n        color: var(--black);\\n    }\\n\\n    .flip-btn:hover {\\n        background: var(--black);\\n        color: var(--white);\\n    }\\n}\\n</style>"],"names":[],"mappings":"AAwEI,6CAAgB,CACZ,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QACd,CAEA,wCAAW,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAAI,CAC/B,eAAe,CAAE,WACrB,CAEA,uBAAQ,CAAC,yBAAW,CAChB,SAAS,CAAE,QAAQ,MAAM,CAC7B,CAEA,wCAAW,CACP,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,mBAAmB,CAAE,MAAM,CAC3B,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CACV,CAEA,yCAAY,CACR,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,MACd,CAEA,wCAAW,CACP,SAAS,CAAE,QAAQ,MAAM,CAAC,CAC1B,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CAGV,UAAU,CAAE,UAChB,CAEA,sCAAS,CACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CAEA,uCAAU,CACN,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CAEX,OAAO,CAAE,OAAO,CAAC,OAAO,CACxB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACzB,CAEJ,uCAAS,MAAO,CACZ,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,UAAU,CAAE,IAAI,OAAO,CAC3B,CAEA,MAAO,uBAAuB,IAAI,CAAE,CAChC,uCAAU,CACN,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,KAAK,CAAE,IAAI,OAAO,CACtB,CAEA,uCAAS,MAAO,CACZ,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,KAAK,CAAE,IAAI,OAAO,CACtB,CACJ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showDocs;
  let isMobile;
  let $gui_menu, $$unsubscribe_gui_menu;
  let $gui_outline, $$unsubscribe_gui_outline;
  let $gui_carousel, $$unsubscribe_gui_carousel;
  $$unsubscribe_gui_menu = subscribe(gui_menu, (value) => $gui_menu = value);
  $$unsubscribe_gui_outline = subscribe(gui_outline, (value) => $gui_outline = value);
  $$unsubscribe_gui_carousel = subscribe(gui_carousel, (value) => $gui_carousel = value);
  let t;
  let index = 0;
  let scrollThreshold = 70;
  let innerWidth;
  transitioned.subscribe(($transitioned) => {
    t = $transitioned;
  });
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    showDocs = index === 3 ? true : false;
    isMobile = innerWidth < 765;
    $$rendered = ` ${validate_component(Sketch, "Sketch").$$render(
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
        return `<div slot="main" class="${["flip-container svelte-1utwaon", showDocs ? "flipped" : ""].join(" ").trim()}"><div class="flip-card svelte-1utwaon"> <div class="flip-face flip-front svelte-1utwaon"><div id="wrapper" class="svelte-1utwaon">${validate_component(Logo, "Logo").$$render(
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
        )} ${!(index === 1 && isMobile) ? `${validate_component(Profile, "Profile").$$render(
          $$result,
          { index },
          {
            index: ($$value) => {
              index = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``} ${index != 3 ? `${validate_component(Items, "Items").$$render(
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
        )}` : `${t && $gui_carousel === "stack" ? `${validate_component(CarouselFinal, "CarouselFinal").$$render($$result, {}, {}, {})}` : `${t ? `${validate_component(CarouselFinal, "CarouselFinal").$$render($$result, {}, {}, {})}` : ``}`}`}</div></div>  <div class="flip-face flip-back svelte-1utwaon"><button class="flip-btn svelte-1utwaon" data-svelte-h="svelte-11bfi8z">Back</button> ${each(contents, (content) => {
          return `<div class="doc">${validate_component(Documentation, "Documentation").$$render($$result, { data: content }, {}, {})} </div>`;
        })} </div></div></div>`;
      },
      bs: () => {
        return `<div slot="bs" id="blackscreen" data-svelte-h="svelte-acx2c9"></div>`;
      },
      loader: () => {
        return `${validate_component(Loader, "Loader").$$render($$result, { slot: "loader" }, {}, {})}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_gui_menu();
  $$unsubscribe_gui_outline();
  $$unsubscribe_gui_carousel();
  return $$rendered;
});
export {
  Page as default
};
