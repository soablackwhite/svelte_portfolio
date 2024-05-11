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
export function updateTag(index:number, incr:number, dir:number, rt:HTMLElement, past: number) {
    let insert: number;
    let ang = parseInt(get_css_var('--ang'));
    insert = (past + incr); //new angle start value, incremented curr val by scroll val
    let lock = Math.round(insert / ang); //im actually flooring here, but since lock is negative i gotta ceil it
    lock = (lock === -4 || lock === -9) ? lock + dir : lock;
    let max = -13 * ang; //max scrollable, last category to show
    insert = clamp(insert, 0, max);
    set_css_var("--ang_start", `${insert}deg`, rt);
    let idx = -lock;
    idx = (idx > 8) ? idx - 2 : (idx > 3) ? idx - 1 : idx;
    idx = clamp(idx, 0, 11);
    return([insert, idx]);
}
//__________________________________LOCK TAG FUNCTION___________________________________________
export function lockTag(past:number, dir:number, rt:HTMLElement){
  let ang = parseInt(get_css_var('--ang'));
  let lock = Math.round(past / ang); //im actually flooring here, but since lock is negative i gotta ceil it
  lock = (lock === -4 || lock === -9) ? lock + dir : lock;
  let insert = lock * ang;
  set_css_var("--ang_start", `${insert}deg`, rt);
  let idx = -lock;
  idx = (idx > 8) ? idx - 2 : (idx > 3) ? idx - 1 : idx;
  return([insert, idx]);
}
//_____________________________MEDIA QUERY FUNCTION MEDIUM_____________________________________
export function updateMedia(){isMedium = window.matchMedia("(min-width: 400px) and (max-width: 576px)").matches;}

//_____________________________TEXT CONTENT_____________________________________

export const contents = [
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
    "category": "Recommendation system",
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
]