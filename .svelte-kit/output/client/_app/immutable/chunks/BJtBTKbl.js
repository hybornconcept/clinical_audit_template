var nt=e=>{throw TypeError(e)};var Mt=(e,t,n)=>t.has(e)||nt("Cannot "+n);var A=(e,t,n)=>(Mt(e,t,"read from private field"),n?n.call(e):t.get(e)),C=(e,t,n)=>t.has(e)?nt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{o as je}from"./DsqBcCEZ.js";import{aV as Ge,y as P,g as O,o as N,x as $e}from"./C8RON-me.js";new URL("sveltekit-internal://");function qt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Ht(e){return e.split("%25").map(decodeURI).join("%25")}function Kt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Te({href:e}){return e.split("#")[0]}function Wt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const Yt="/__data.json",Jt=".html__data.json";function zt(e){return e.endsWith(".html")?e.replace(/\.html$/,Jt):e.replace(/\/$/,"")+Yt}function Xt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Zt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Qt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&Y.delete(Me(e)),Qt(e,t));const Y=new Map;function en(e,t){const n=Me(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Zt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function tn(e,t,n){if(Y.size>0){const r=Me(e,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(t,n)}function Me(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Xt(...a)}"]`}return r}const nn=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function rn(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${on(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return Ce(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ce(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const h=nn.exec(c),[,u,y,d,m]=h;return t.push({name:d,matcher:m,optional:!!u,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Ce(c)}).join("")}).join("")}/?$`),params:t}}function an(e){return!/^\([^)]+\)$/.test(e)}function on(e){return e.slice(1).split("/").filter(an)}function sn(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let f=a[o-i];if(c.chained&&c.rest&&i&&(f=a.slice(o-i,o+1).filter(h=>h).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const h=t[o+1],u=a[o+1];h&&!h.rest&&h.optional&&u&&c.chained&&(i=0),!h&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Ce(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function cn({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,f,h]])=>{const{pattern:u,params:y}=rn(o),d={id:o,exec:m=>{const l=u.exec(m);if(l)return sn(l,y,r)},errors:[1,...h||[]].map(m=>e[m]),layouts:[0,...f||[]].map(i),leaf:s(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function yt(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function rt(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var dt;const T=((dt=globalThis.__sveltekit_sp4vay)==null?void 0:dt.base)??"";var ht;const ln=((ht=globalThis.__sveltekit_sp4vay)==null?void 0:ht.assets)??T,fn="1738381435596",wt="sveltekit:snapshot",_t="sveltekit:scroll",vt="sveltekit:states",un="sveltekit:pageurl",B="sveltekit:history",X="sveltekit:navigation",pe={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},de=location.origin;function bt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function qe(){return{x:pageXOffset,y:pageYOffset}}function F(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const at={...pe,"":pe.hover};function At(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function St(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=At(e)}}function De(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||Ae(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===de&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ge(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=F(o,"preload-code")),a===null&&(a=F(o,"preload-data")),t===null&&(t=F(o,"keepfocus")),n===null&&(n=F(o,"noscroll")),s===null&&(s=F(o,"reload")),i===null&&(i=F(o,"replacestate")),o=At(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:at[r??"off"],preload_data:at[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function ot(e){const t=Ge(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const kt={v:()=>{}};function dn(){const{set:e,subscribe:t}=Ge(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${ln}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==fn;return i&&(e(!0),kt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function Ae(e,t,n){return e.origin!==de||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Gn(e){const t=new DataView(e);let n="";for(let r=0;r<e.byteLength;r++)n+=String.fromCharCode(t.getUint8(r));return pn(n)}function st(e){const t=hn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const Et="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function hn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=Et.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}function pn(e){let t="";for(let n=0;n<e.length;n+=3){const r=[void 0,void 0,void 0,void 0];r[0]=e.charCodeAt(n)>>2,r[1]=(e.charCodeAt(n)&3)<<4,e.length>n+1&&(r[1]|=e.charCodeAt(n+1)>>4,r[2]=(e.charCodeAt(n+1)&15)<<2),e.length>n+2&&(r[2]|=e.charCodeAt(n+2)>>6,r[3]=e.charCodeAt(n+2)&63);for(let a=0;a<r.length;a++)typeof r[a]>"u"?t+="=":t+=Et[r[a]]}return t}const gn=-1,mn=-2,yn=-3,wn=-4,_n=-5,vn=-6;function Mn(e,t){return Rt(JSON.parse(e),t)}function Rt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===gn)return;if(s===yn)return NaN;if(s===wn)return 1/0;if(s===_n)return-1/0;if(s===vn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=t==null?void 0:t[c];if(f)return r[s]=f(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const h=new Set;r[s]=h;for(let d=1;d<o.length;d+=1)h.add(a(o[d]));break;case"Map":const u=new Map;r[s]=u;for(let d=1;d<o.length;d+=2)u.set(a(o[d]),a(o[d+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let d=1;d<o.length;d+=2)y[o[d]]=a(o[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[c],m=o[1],l=st(m),g=new d(l);r[s]=g;break}case"ArrayBuffer":{const d=o[1],m=st(d);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let f=0;f<o.length;f+=1){const h=o[f];h!==mn&&(c[f]=a(h))}}else{const c={};r[s]=c;for(const f in o){const h=o[f];c[f]=a(h)}}return r[s]}return a(0)}const Ut=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ut];const bn=new Set([...Ut]);[...bn];function An(e){return e.filter(t=>t!=null)}class Se{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class He{constructor(t,n){this.status=t,this.location=n}}class Ke extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Sn="x-sveltekit-invalidated",kn="x-sveltekit-trailing-slash";function me(e){return e instanceof Se||e instanceof Ke?e.status:500}function En(e){return e instanceof Ke?e.text:"Internal Error"}let E,Z,Pe;const Rn=je.toString().includes("$$")||/function \w+\(\) \{\}/.test(je.toString());var ne,re,ae,oe,se,ie,ce,le,pt,fe,gt,ue,mt;Rn?(E={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Pe={current:!1}):(E=new(pt=class{constructor(){C(this,ne,P({}));C(this,re,P(null));C(this,ae,P(null));C(this,oe,P({}));C(this,se,P({id:null}));C(this,ie,P({}));C(this,ce,P(-1));C(this,le,P(new URL("https://example.com")))}get data(){return O(A(this,ne))}set data(t){N(A(this,ne),t)}get form(){return O(A(this,re))}set form(t){N(A(this,re),t)}get error(){return O(A(this,ae))}set error(t){N(A(this,ae),t)}get params(){return O(A(this,oe))}set params(t){N(A(this,oe),t)}get route(){return O(A(this,se))}set route(t){N(A(this,se),t)}get state(){return O(A(this,ie))}set state(t){N(A(this,ie),t)}get status(){return O(A(this,ce))}set status(t){N(A(this,ce),t)}get url(){return O(A(this,le))}set url(t){N(A(this,le),t)}},ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,ce=new WeakMap,le=new WeakMap,pt),Z=new(gt=class{constructor(){C(this,fe,P(null))}get current(){return O(A(this,fe))}set current(t){N(A(this,fe),t)}},fe=new WeakMap,gt),Pe=new(mt=class{constructor(){C(this,ue,P(!1))}get current(){return O(A(this,ue))}set current(t){N(A(this,ue),t)}},ue=new WeakMap,mt),kt.v=()=>Pe.current=!0);function We(e){Object.assign(E,e)}const Un=new Set(["icon","shortcut icon","apple-touch-icon"]),V=yt(_t)??{},Q=yt(wt)??{},$={url:ot({}),page:ot({}),navigating:Ge(null),updated:dn()};function Ye(e){V[e]=qe()}function In(e,t){let n=e+1;for(;V[n];)delete V[n],n+=1;for(n=t+1;Q[n];)delete Q[n],n+=1}function q(e){return location.href=e.href,new Promise(()=>{})}async function It(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function it(){}let ke,Ve,ye,j,Fe,S;const we=[],_e=[];let L=null;const Je=new Set,Ln=new Set,J=new Set;let w={branch:[],error:null,url:null},ze=!1,ve=!1,ct=!0,ee=!1,K=!1,Lt=!1,Ee=!1,G,I,x,H;const z=new Set;let Oe;async function Wn(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),S=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),ke=cn(e),j=document.documentElement,Fe=t,Ve=e.nodes[0],ye=e.nodes[1],Ve(),ye(),I=(i=history.state)==null?void 0:i[B],x=(o=history.state)==null?void 0:o[X],I||(I=x=Date.now(),history.replaceState({...history.state,[B]:I,[X]:x},""));const r=V[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Dn(Fe,n):Nn(S.hash?Gt(new URL(location.href)):location.href,{replaceState:!0}),$n()}async function xn(){if(await(Oe||(Oe=Promise.resolve())),!Oe)return;Oe=null;const e=Ue(w.url,!0);L=null;const t=H={},n=e&&await Qe(e);if(!(!n||t!==H)){if(n.type==="redirect")return he(new URL(n.location,w.url).href,{},1,t);n.props.page&&Object.assign(E,n.props.page),w=n.state,xt(),G.$set(n.props),We(n.props.page)}}function xt(){we.length=0,Ee=!1}function Tt(e){_e.some(t=>t==null?void 0:t.snapshot)&&(Q[e]=_e.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function Ct(e){var t;(t=Q[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=_e[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function lt(){Ye(I),rt(_t,V),Tt(x),rt(wt,Q)}async function he(e,t,n,r){return W({type:"goto",url:bt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ee=!0),t.invalidate&&t.invalidate.forEach(jn)}})}async function Tn(e){if(e.id!==(L==null?void 0:L.id)){const t={};z.add(t),L={id:e.id,token:t,promise:Qe({...e,preload:t}).then(n=>(z.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Ne(e){const t=Nt(e);if(!t)return;const n=ke.find(r=>r.exec(jt(t)));n&&await Promise.all([...n.layouts,n.leaf].map(r=>r==null?void 0:r[1]()))}function Pt(e,t,n){var s;w=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(E,e.props.page),G=new S.root({target:t,props:{...e.props,stores:$,components:_e},hydrate:n,sync:!1}),Ct(x);const a={from:null,to:{params:w.params,route:{id:((s=w.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};J.forEach(i=>i(a)),ve=!0}function te({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(T&&(e.pathname===T||e.pathname===T+"/"))o="always";else for(const d of n)(d==null?void 0:d.slash)!==void 0&&(o=d.slash);e.pathname=qt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:An(n).map(d=>d.node.component),page:Ie(E)}};i!==void 0&&(c.props.form=i);let f={},h=!E,u=0;for(let d=0;d<Math.max(n.length,w.branch.length);d+=1){const m=n[d],l=w.branch[d];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(h=!0),m&&(f={...f,...m.data},h&&(c.props[`data_${u}`]=f),u+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==E.form||h)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:h?f:E.data}),c}async function Xe({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var h,u,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((h=f.universal)!=null&&h.load){let d=function(...l){for(const g of l){const{href:_}=new URL(g,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(l,g)=>(o&&(c.route=!0),l[g])}),params:new Proxy(r,{get:(l,g)=>(o&&c.params.add(g),l[g])}),data:(s==null?void 0:s.data)??null,url:Wt(n,()=>{o&&(c.url=!0)},l=>{o&&c.search_params.add(l)},S.hash),async fetch(l,g){let _;l instanceof Request?(_=l.url,g={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...g}):_=l;const U=new URL(_,n);return o&&d(U.href),U.origin===n.origin&&(_=U.href.slice(n.origin.length)),ve?tn(_,U.href,g):en(_,g)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(l){o=!1;try{return l()}finally{o=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:e,server:s,universal:(u=f.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function ft(e,t,n,r,a,s){if(Ee)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==w.params[i])return!0;for(const i of a.dependencies)if(we.some(o=>o(new URL(i))))return!0;return!1}function Ze(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Cn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function ut({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Ie(E),constructors:[]}}}async function Qe({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===e)return z.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,f=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let h=null;const u=w.url?e!==be(w.url):!1,y=w.route?a.id!==w.route.id:!1,d=Cn(w.url,n);let m=!1;const l=f.map((p,v)=>{var D;const k=w.branch[v],R=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||ft(m,y,u,d,(D=k.server)==null?void 0:D.uses,r));return R&&(m=!0),R});if(l.some(Boolean)){try{h=await Vt(n,l)}catch(p){const v=await M(p,{url:n,params:r,route:{id:e}});return z.has(s)?ut({error:v,url:n,params:r,route:a}):Re({status:me(p),error:v,url:n,route:a})}if(h.type==="redirect")return h}const g=h==null?void 0:h.nodes;let _=!1;const U=f.map(async(p,v)=>{var Le;if(!p)return;const k=w.branch[v],R=g==null?void 0:g[v];if((!R||R.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!ft(_,y,u,d,(Le=k.universal)==null?void 0:Le.uses,r))return k;if(_=!0,(R==null?void 0:R.type)==="error")throw R;return Xe({loader:p[1],url:n,params:r,route:a,parent:async()=>{var tt;const et={};for(let xe=0;xe<v;xe+=1)Object.assign(et,(tt=await U[xe])==null?void 0:tt.data);return et},server_data_node:Ze(R===void 0&&p[0]?{type:"skip"}:R??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of U)p.catch(()=>{});const b=[];for(let p=0;p<f.length;p+=1)if(f[p])try{b.push(await U[p])}catch(v){if(v instanceof He)return{type:"redirect",location:v.location};if(z.has(s))return ut({error:await M(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let k=me(v),R;if(g!=null&&g.includes(v))k=v.status??k,R=v.error;else if(v instanceof Se)R=v.body;else{if(await $.updated.check())return await It(),await q(n);R=await M(v,{params:r,url:n,route:{id:a.id}})}const D=await Ot(p,b,i);return D?te({url:n,params:r,branch:b.slice(0,D.idx).concat(D.node),status:k,error:R,route:a}):await Dt(n,{id:a.id},R,k)}else b.push(void 0);return te({url:n,params:r,branch:b,status:200,error:null,route:a,form:t?void 0:null})}async function Ot(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Re({status:e,error:t,url:n,route:r}){const a={};let s=null;if(S.server_loads[0]===0)try{const o=await Vt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==de||n.pathname!==location.pathname||ze)&&await q(n)}try{const o=await Xe({loader:Ve,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ze(s)}),c={node:await ye(),loader:ye,universal:null,server:null,data:null};return te({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof He)return he(new URL(o.location,location.href),{},0);throw o}}function Nt(e){let t;try{if(t=S.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);S.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}function Ue(e,t){if(!e||Ae(e,T,S.hash))return;const n=Nt(e);if(!n)return;const r=jt(n);for(const a of ke){const s=a.exec(r);if(s)return{id:be(e),invalidating:t,route:a,params:Kt(s),url:e}}}function jt(e){return Ht(S.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function be(e){return(S.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function $t({url:e,type:t,intent:n,delta:r}){let a=!1;const s=Bt(w,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return ee||Je.forEach(o=>o(i)),a?null:s}async function W({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=it,block:h=it}){const u=Ue(t,!1),y=$t({url:t,type:e,delta:n==null?void 0:n.delta,intent:u});if(!y){h();return}const d=I,m=x;f(),ee=!0,ve&&$.navigating.set(Z.current=y.navigation),H=c;let l=u&&await Qe(u);if(!l){if(Ae(t,T,S.hash))return await q(t);l=await Dt(t,{id:null},await M(new Ke(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(u==null?void 0:u.url)||t,H!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(o>=20)l=await Re({status:500,error:await M(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return he(new URL(l.location,t).href,{},o+1,c),!1;else l.props.page.status>=400&&await $.updated.check()&&(await It(),await q(t));if(xt(),Ye(d),Tt(m),l.props.page.url.pathname!==t.pathname&&(t.pathname=l.props.page.url.pathname),i=n?n.state:i,!n){const b=s?0:1,p={[B]:I+=b,[X]:x+=b,[vt]:i};(s?history.replaceState:history.pushState).call(history,p,"",t),s||In(I,x)}if(L=null,l.props.page.state=i,ve){w=l.state,l.props.page&&(l.props.page.url=t);const b=(await Promise.all(Array.from(Ln,p=>p(y.navigation)))).filter(p=>typeof p=="function");if(b.length>0){let p=function(){b.forEach(v=>{J.delete(v)})};b.push(p),b.forEach(v=>{J.add(v)})}G.$set(l.props),We(l.props.page),Lt=!0}else Pt(l,Fe,!1);const{activeElement:g}=document;await $e();const _=n?n.scroll:a?qe():null;if(ct){const b=t.hash&&document.getElementById(decodeURIComponent(S.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));_?scrollTo(_.x,_.y):b?b.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==g&&document.activeElement!==document.body;!r&&!U&&Be(),ct=!0,l.props.page&&Object.assign(E,l.props.page),ee=!1,e==="popstate"&&Ct(x),y.fulfil(void 0),J.forEach(b=>b(y.navigation)),$.navigating.set(Z.current=null)}async function Dt(e,t,n,r){return e.origin===de&&e.pathname===location.pathname&&!ze?await Re({status:r,error:n,url:e,route:t}):await q(e)}function Pn(){let e;j.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){s.defaultPrevented||r(s.composedPath()[0],1)}j.addEventListener("mousedown",t),j.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(Ne(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=St(s,j);if(!o)return;const{url:c,external:f,download:h}=De(o,T,S.hash);if(f||h)return;const u=ge(o),y=c&&be(w.url)===be(c);if(!u.reload&&!y)if(i<=u.preload_data){const d=Ue(c,!1);d&&Tn(d)}else i<=u.preload_code&&Ne(c)}function a(){n.disconnect();for(const s of j.querySelectorAll("a")){const{url:i,external:o,download:c}=De(s,T,S.hash);if(o||c)continue;const f=ge(s);f.reload||(f.preload_code===pe.viewport&&n.observe(s),f.preload_code===pe.eager&&Ne(i))}}J.add(a),a()}function M(e,t){if(e instanceof Se)return e.body;const n=me(e),r=En(e);return S.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function On(e,t){je(()=>(e.add(t),()=>{e.delete(t)}))}function Yn(e){On(Je,e)}function Nn(e,t={}){return e=new URL(bt(e)),e.origin!==de?Promise.reject(new Error("goto: invalid URL")):he(e,t,0)}function jn(e){if(typeof e=="function")we.push(e);else{const{href:t}=new URL(e,location.href);we.push(n=>n.href===t)}}function Jn(){return Ee=!0,xn()}async function zn(e){if(e.type==="error"){const t=new URL(location.href),{branch:n,route:r}=w;if(!r)return;const a=await Ot(w.branch.length,n,r.errors);if(a){const s=te({url:t,params:w.params,branch:n.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});w=s.state,G.$set(s.props),We(s.props.page),$e().then(Be)}}else e.type==="redirect"?he(e.location,{invalidateAll:!0},0):(E.form=e.data,E.status=e.status,G.$set({form:null,page:Ie(E)}),await $e(),G.$set({form:e.data}),e.type==="success"&&Be())}function $n(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(lt(),!ee){const a=Bt(w,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Je.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&lt()}),(t=navigator.connection)!=null&&t.saveData||Pn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=St(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=De(r,T,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ge(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[h,u]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=h===Te(location);if(s||c.reload&&(!y||!u)){$t({url:a,type:"link"})?ee=!0:n.preventDefault();return}if(u!==void 0&&y){const[,d]=w.url.href.split("#");if(d===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(K=!0,Ye(I),e(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(Ae(o,T,!1))return;const c=n.target,f=ge(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&h.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(h).toString(),W({type:"form",url:o,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[B]){const a=n.state[B];if(H={},a===I)return;const s=V[a],i=n.state[vt]??{},o=new URL(n.state[un]??location.href),c=n.state[X],f=w.url?Te(location)===Te(w.url):!1;if(c===x&&(Lt||f)){i!==E.state&&(E.state=i),e(o),V[I]=qe(),s&&scrollTo(s.x,s.y),I=a;return}const u=a-I;await W({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{I=a,x=c},block:()=>{history.go(-u)},nav_token:H})}else if(!K){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[B]:++I,[X]:x},"",location.href)):S.hash&&w.url.hash===location.hash&&W({type:"goto",url:Gt(w.url)})});for(const n of document.querySelectorAll("link"))Un.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Z.current=null)});function e(n){w.url=E.url=n,$.page.set(Ie(E)),$.page.notify()}}async function Dn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){ze=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Ue(c,!1)||{});let f,h=!0;try{const u=r.map(async(m,l)=>{const g=i[l];return g!=null&&g.uses&&(g.uses=Ft(g.uses)),Xe({loader:S.nodes[m],url:c,params:a,route:s,parent:async()=>{const _={};for(let U=0;U<l;U+=1)Object.assign(_,(await u[U]).data);return _},server_data_node:Ze(g)})}),y=await Promise.all(u),d=ke.find(({id:m})=>m===s.id);if(d){const m=d.layouts;for(let l=0;l<m.length;l++)m[l]||y.splice(l,0,void 0)}f=te({url:c,params:a,branch:y,status:t,error:n,form:o,route:d??null})}catch(u){if(u instanceof He){await q(new URL(u.location,location.href));return}f=await Re({status:me(u),error:await M(u,{url:c,params:a,route:s}),url:c,route:s}),e.textContent="",h=!1}f.props.page&&(f.props.page.state={}),Pt(f,e,h)}async function Vt(e,t){var s;const n=new URL(e);n.pathname=zt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(kn,"1"),n.searchParams.append(Sn,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new Se(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),f=new TextDecoder;function h(d){return Rt(d,{...S.decoders,Promise:m=>new Promise((l,g)=>{o.set(m,{fulfil:l,reject:g})})})}let u="";for(;;){const{done:d,value:m}=await c.read();if(d&&!u)break;for(u+=!m&&u?`
`:f.decode(m,{stream:!0});;){const l=u.indexOf(`
`);if(l===-1)break;const g=JSON.parse(u.slice(0,l));if(u=u.slice(l+1),g.type==="redirect")return i(g);if(g.type==="data")(y=g.nodes)==null||y.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=Ft(_.uses),_.data=h(_.data))}),i(g);else if(g.type==="chunk"){const{id:_,data:U,error:b}=g,p=o.get(_);o.delete(_),b?p.reject(h(b)):p.fulfil(h(U))}}}})}function Ft(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Be(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Bt(e,t,n,r){var c,f;let a,s;const i=new Promise((h,u)=>{a=h,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((f=t==null?void 0:t.route)==null?void 0:f.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function Ie(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function Gt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{mn as H,yn as N,wn as P,gn as U,_n as a,vn as b,Mn as c,S as d,Gn as e,zn as f,Yn as g,Nn as h,Jn as i,Wn as j,E as p,$ as s,Pe as u};
