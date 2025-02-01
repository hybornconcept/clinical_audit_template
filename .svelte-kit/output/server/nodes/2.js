import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.PrAOIdA6.js","_app/immutable/chunks/sdSxDXLH.js","_app/immutable/chunks/C8RON-me.js","_app/immutable/chunks/CqCzlca1.js","_app/immutable/chunks/Bn7blaSb.js","_app/immutable/chunks/2vCV1Xqa.js","_app/immutable/chunks/BT6mpISv.js","_app/immutable/chunks/DsqBcCEZ.js","_app/immutable/chunks/BJtBTKbl.js"];
export const stylesheets = ["_app/immutable/assets/2.CV-KWLNP.css"];
export const fonts = [];
