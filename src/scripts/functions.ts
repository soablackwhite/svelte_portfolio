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
    "category": "Web Project",
    "tech": "HTML, CSS, JS",
    "content": "This is a web project where I implemented a website to navigate a comic based on a short fiction piece by my friend Noora. The comic was drawn by the artist Derouich. Basic vanilla JS with HTML and CSS, hosted and deployed on a free platform.",
    "media": {
      "type": "pic",
      "src": "/media/thumbnails/comic_doc.png"
    }
  },
  {
    "title": "ML Rock Paper Scissors",
    "video": false,
    "src": "/media/thumbnails/rps.png",
    "alt": "ML Rock Paper Scissors video",
    "category": "Web Project",
    "tech": "ml5.js, p5.js, Teachable Machine",
    "content": "This is a small project I started to have a little fun with Google’s Teachable Machine. ML Rock Paper Scissors is a game that uses image recognition input from the camera in a turn-by-turn rps-like battle against the computer. I’m using the ml5 module of p5.js here, which allows lightweight machine learning for creative purposes. I trained a model with the Teachable Machine Google app by uploading a couple of thousand images of hand signs under different angles and positions with differen...",
    "media": {
      "type": "pics",
      "src": ""
    }
  },
  {
    "title": "OFx Tunnel Maker",
    "video": false,
    "src": "/media/thumbnails/tunnel.png",
    "alt": "OFx Tunnel Maker image",
    "category": "Generative Art",
    "tech": "C++, openFrameworks",
    "content": "A desktop application I built on openFrameworks for creating tunnel visuals. Two circle equations combined to make a parametrised 3D Torus bound to a GUI that allows the user to capture the specific view and stylization of the tunnel. Inspired by that one Code Lyoko intro.",
    "media": {
      "type": "video",
      "src": ""
    }
  },
  {
    "title": "Algo Gallery",
    "video": true,
    "src": "/media/animated/art_docu.mp4",
    "alt": "Algorithm Gallery video",
    "category": "Generative Art",
    "tech": "Processing, Unity, openFrameworks",
    "content": "Visualizations of algorithms using openFrameworks (C++), Unity (C#), and Processing (Java). Experimented with 3D matrix transformations for computer graphics, visualized Conway’s Game Of Life, and implemented motion blur effect and ripple effect through pixel displacement and filtering.",
    "media": {
      "type": "vids",
      "src": ["/media/animated/art_docu.mp4", "/media/animated/art_docu2.mp4", "/media/animated/art_docu3.mp4"]
    }
  },
  {
    "title": "OS GIFs",
    "video": false,
    "src": "/media/animated/osgif.webp",
    "alt": "OS GIFs image",
    "category": "Generative Art",
    "tech": "p5.js, OpenFrameworks, Processing",
    "content": "OS GIFs (open-source GIFs) was my Interactive Media Capstone Project. The gallery is a collection of artistic experiments exploring the processes behind algorithmic art in an attempt to redefine what “open-source” means. This redefinition is essential in a time where the term is thrown around loosely when often we can see code but not understand or access it optimally. After all, is code truly open source if I can read it without understanding? Some of the art breaks down its own algorithm into smaller chunks and processes that it visualizes, while others take the “open-source” literally by showing the code as it is typed.",
    "media": {
      "type": "pic",
      "src": ""
    }
  },
  {
    "title": "NYU Algorave",
    "video": true,
    "src": "/media/animated/cube.mp4",
    "alt": "NYU Algorave video",
    "category": "Live Coding",
    "tech": "Hydra, Javascript, GLSL, TidalCycles",
    "content": "Music and visuals generated via live-compiled code and synchronized dynamically. The first piece was a solo project where I used Hydra, a live-coding environment for video and shader synthesis, and TidalCycles, a live-coding environment for algorithmic patterns, which, when combined with sound samples, can generate music algorithmically. In the second project, I collaborated with two other coders to incorporate more complex shader control (via GLSL) and dynamic visuals (via p5.js) into the project. The final piece was performed live in front of an audience at NYU, which you can see in the video down below.",
    "media": {
      "type": "yt",
      "src": "https://www.youtube.com/embed/l7t5j4vmwBE?si=PoQnUvbIRjhm9iuA"
    }
  },  
  {
    "title": "postcARds",
    "video": true,
    "src": "/media/animated/postcARds.mp4",
    "alt": "postcARds video",
    "category": "AR App",
    "tech": "Unity, C#",
    "content": "An augmented reality app to interact with the commercial postcards at Museum für Kommunikation in Berlin that I built and deployed with my team at NYU as part of a commission by the museum. The app utilized Unity’s ARCore and ARKit environments for raycasting to edit the postcards using the phone’s camera, and save the customized versions of the postcards into the visitor’s portable devices.",
    "media": {
      "type": "pics",
      "src": ""
    }
  },
  {
    "title": "Reccie",
    "video": true,
    "src": "/media/animated/art_docu2.mp4",
    "alt": "Reccie video",
    "category": "Recommendation system",
    "tech": "p5.js",
    "content": "Reccie is a sketch I made for friends, prototyping a recommender system by taking the approach of collaborative filtering to recommend TV shows based on our movie tastes. It builds a taste profile based on the user’s answers and recommends TV shows based on people with similar tastes. The algorithm is pretty straightforward: you calculate similarities between users, assign a weight to each user based on similarity, then every series gets a weighted sum of the users’ ratings, and the user gets recommended the series with the highest weighted sum.",
    "media": {
      "type": "pics",
      "src": ""
    }
  },
  {
    "title": "Mistborn",
    "video": false,
    "src": "/media/animated/mistborn.gif",
    "alt": "Mistborn image",
    "category": "Game",
    "tech": "Processing, Java",
    "content": "A small experimental game named after the book that inspired it. In the game, you can pull or push against referential objects to apply a force that redirects your movements. I built the physics logic using vector math, with basic collision detection for the characters and friction effects for the ashfall graphic. Thought the game would be more fun with a controller but I didn’t have one, so I built one using an Arduino board and created a multiplayer mode.",
    "media": {
      "type": "pics",
      "src": ""
    }
  },
  {
    "title": "Gemstone",
    "video": false,
    "src": "/media/thumbnails/gemstone.png",
    "alt": "Gemstone video",
    "category": "Game",
    "tech": "GMS2, GLSL",
    "content": "A 2D platformer game where you can manipulate the direction of gravity and shoot enemies above you! Used Game Maker Studio 2 coupled with some GLSL for animations. I’m no Da Vinci but I tried making some pixel art myself. The openGL code for the ripple effect is based on another Java algorithm that I worked on in some of my algo art.",
    "media": {
      "type": "yt",
      "src": ""
    }
  },
  {
    "title": "Mad Socks",
    "video": false,
    "src": "/media/thumbnails/madsocks.png",
    "alt": "Mad Socks image",
    "category": "Game",
    "tech": "Unity, C#",
    "content": "In January 2021, I and six other friends decided to team up and participate in the annual Global Game Jam. For this game-making hackathon, I was put in charge of Game Design, Story, and Programming. Mad Socks came to be as the result of 3 sleepless nights of dogged labour. And while it was far from a finished product, our omnium-gatherum of botched ideas, pervasive glitches and unresolved memory leaks was nominated for the Best Game Design and Best Art Direction award. The game loop is the coupling of a linear narrative part and a local multiplayer 2D top-down game where the goal is finding your sister-sock in a procedurally generated maze before the time limit, after which the washing machine runs and both of the socks’ (players) controls are randomized.",
    "media": {
      "type": "pics",
      "src": ""
    }
  },
  {
    "title": "Switch",
    "video": false,
    "src": "/media/thumbnails/switch.png",
    "alt": "Switch image",
    "category": "Game",
    "tech": "GMS2",
    "content": "A small game made using GMS2. The challenge of this project was that I was only allowed to use two colours, no shading and no lighting. So I opted for black and white and made colour colour-switching part of the gameplay to improve cohesion. The game is a 2D platformer multiplayer game where two players wrestle to get the ball into their opponent’s net. Every time a player touches the ball the background switches to their colour, making it impossible for the player controlling the ball to distinguish their character as it blends into the environment, save for a small pair of eyes that contrasts with the background.",
    "media": {
      "type": "yt",
      "src": ""
    }
  }
]