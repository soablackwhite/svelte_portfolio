import { writable } from 'svelte/store';
export const currentItem = writable(0); //the current selected element
export const transitioned = writable(false); //whether the border transitioned from round to sqr
export const delta = writable(0); //the scroll level
export const thumbnail = writable(0); //thumbnail index for typewriter

export const variables = writable({
    black: "#121212",
    white: "#faf5f5",
    yellow: "rgb(249, 223, 77)",
    dist: "-16rem",
    ang: "-18deg",
    ang_start: "0deg",
    ang_img: "-33deg",
    dist_img: "-13rem",
    indent_ui: "0rem",
    isindent: "0deg",
    vidy : "1rem",
    vidx : "0rem",
  });
// GUI VARIABLES
export const gui_carousel = writable("minimal");
export const gui_menu = writable("menu");
export const gui_outline = writable("nooutline");
export const gui_angle = writable("horizontal");
export const gui_motion = writable("flat");

export const coordinates = writable([
  { x: 0, y: 0},
  { x: 0, y: 0},
  { x: 0, y: 0},
]);

// export const myStore = writable([
//   { x: writable(0), y: writable(0)},
//   { x: writable(0), y: writable(0)},
//   { x: writable(0), y: writable(0)},
// ]);