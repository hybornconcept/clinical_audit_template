import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.pJnnSxIP.js","_app/immutable/chunks/sdSxDXLH.js","_app/immutable/chunks/C8RON-me.js","_app/immutable/chunks/CqCzlca1.js","_app/immutable/chunks/Bn7blaSb.js","_app/immutable/chunks/2vCV1Xqa.js","_app/immutable/chunks/BT6mpISv.js","_app/immutable/chunks/DsqBcCEZ.js"];
export const stylesheets = [];
export const fonts = [];
