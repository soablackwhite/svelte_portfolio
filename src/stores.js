import { writable } from 'svelte/store';
export const currentCircle = writable(0);
export const transitioned = writable(false);
export const delta = writable(0);
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