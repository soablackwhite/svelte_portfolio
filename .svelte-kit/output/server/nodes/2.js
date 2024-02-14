

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.pHNqP4Fd.js","_app/immutable/chunks/scheduler.pRsUaojv.js","_app/immutable/chunks/index.LtzutoOz.js","_app/immutable/chunks/index.gpARhjws.js"];
export const stylesheets = ["_app/immutable/assets/2.Jjb-5GhP.css"];
export const fonts = [];
