import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.oCoU3fbf.js","_app/immutable/chunks/scheduler.Gj1f5TGB.js","_app/immutable/chunks/index.frSQBQnr.js"];
export const stylesheets = [];
export const fonts = [];
