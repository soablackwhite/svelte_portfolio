

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BYh-xOe3.js","_app/immutable/chunks/scheduler.B3MMMELT.js","_app/immutable/chunks/index.vM1bySNN.js"];
export const stylesheets = [];
export const fonts = [];
