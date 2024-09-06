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
]

