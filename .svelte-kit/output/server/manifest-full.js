export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BPqmE6X7.js","app":"_app/immutable/entry/app.BNFOiP0t.js","imports":["_app/immutable/entry/start.BPqmE6X7.js","_app/immutable/chunks/BJtBTKbl.js","_app/immutable/chunks/DsqBcCEZ.js","_app/immutable/chunks/C8RON-me.js","_app/immutable/entry/app.BNFOiP0t.js","_app/immutable/chunks/C8RON-me.js","_app/immutable/chunks/sdSxDXLH.js","_app/immutable/chunks/CqCzlca1.js","_app/immutable/chunks/DsqBcCEZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
