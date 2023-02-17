(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const p={};function ne(e){p.context=e}const se=(e,t)=>e===t,O={equals:se};let Q=Z;const b=1,T=2,X={owned:null,cleanups:null,context:null,owner:null};var a=null;let m=null,u=null,h=null,y=null,U=0;function oe(e,t){const n=u,s=a,i=e.length===0,r=i?X:{owned:null,cleanups:null,context:null,owner:t||s},l=i?e:()=>e(()=>v(()=>P(r)));a=r,u=null;try{return S(l,!0)}finally{u=n,a=s}}function C(e,t){t=t?Object.assign({},O,t):O;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Y(n,i));return[J.bind(n),s]}function B(e,t,n){const s=V(e,t,!1,b);E(s)}function A(e,t,n){Q=ce;const s=V(e,t,!1,b);s.user=!0,y?y.push(s):E(s)}function W(e,t,n){n=n?Object.assign({},O,n):O;const s=V(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,E(s),J.bind(s)}function ie(e){return S(e,!1)}function v(e){const t=u;u=null;try{return e()}finally{u=t}}function re(){return a}function H(e,t){const n=a;a=e;try{return S(t,!0)}catch(s){R(s)}finally{a=n}}function J(){const e=m;if(this.sources&&(this.state||e))if(this.state===b||e)E(this);else{const t=h;h=null,S(()=>j(this),!1),h=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function Y(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=m&&m.running;l&&m.disposed.has(r),(l&&!r.tState||!l&&!r.state)&&(r.pure?h.push(r):y.push(r),r.observers&&z(r)),l||(r.state=b)}if(h.length>1e6)throw h=[],new Error},!1)),t}function E(e){if(!e.fn)return;P(e);const t=a,n=u,s=U;u=a=e,le(e,e.value,s),u=n,a=t}function le(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=b,e.owned&&e.owned.forEach(P),e.owned=null),R(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Y(e,s):e.value=s,e.updatedAt=n)}function V(e,t,n,s=b,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==X&&(a.owned?a.owned.push(r):a.owned=[r]),r}function N(e){const t=m;if(e.state===0||t)return;if(e.state===T||t)return j(e);if(e.suspense&&v(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<U);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===b||t)E(e);else if(e.state===T||t){const i=h;h=null,S(()=>j(e,n[0]),!1),h=i}}function S(e,t){if(h)return e();let n=!1;t||(h=[]),y?n=!0:y=[],U++;try{const s=e();return fe(n),s}catch(s){h||(y=null),R(s)}}function fe(e){if(h&&(Z(h),h=null),e)return;const t=y;y=null,t.length&&S(()=>Q(t),!1)}function Z(e){for(let t=0;t<e.length;t++)N(e[t])}function ce(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:N(s)}for(p.context&&ne(),t=0;t<n;t++)N(e[t])}function j(e,t){const n=m;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===b||n?i!==t&&N(i):(i.state===T||n)&&j(i,t))}}function z(e){const t=m;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=T,s.pure?h.push(s):y.push(s),s.observers&&z(s))}}function P(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)P(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ue(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function R(e){throw e=ue(e),e}function k(e,t){return v(()=>e(t||{}))}function ae(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,f=t[i-1].nextSibling,c=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const d=r<s?o?n[o-1].nextSibling:n[r-o]:f;for(;o<r;)e.insertBefore(n[o++],d)}else if(r===o)for(;l<i;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const d=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],d),t[i]=n[r]}else{if(!c){c=new Map;let w=o;for(;w<r;)c.set(n[w],w++)}const d=c.get(t[l]);if(d!=null)if(o<d&&d<r){let w=l,_=1,q;for(;++w<i&&w<r&&!((q=c.get(t[w]))==null||q!==d+_);)_++;if(_>d-o){const te=t[l];for(;o<d;)e.insertBefore(n[o++],te)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const F="_$DX_DELEGATE";function he(e,t,n,s={}){let i;return oe(r=>{i=r,t===document?e():D(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function de(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ge(e,t=window.document){const n=t[F]||(t[F]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,pe))}}function D(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return L(e,t,s,n);B(i=>L(e,t(),i,n),s)}function pe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),p.registry&&!p.done&&(p.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function L(e,t,n,s,i){for(p.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(p.context)return n;if(r==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=x(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(p.context)return n;n=x(e,n,s)}else{if(r==="function")return B(()=>{let o=t();for(;typeof o=="function";)o=o();n=L(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(M(o,t,n,i))return B(()=>n=L(e,o,n,s,!0)),()=>n;if(p.context){if(!o.length)return n;for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=x(e,n,s),l)return n}else f?n.length===0?G(e,o,s):ae(e,n,o):(n&&x(e),G(e,o));n=o}else if(t instanceof Node){if(p.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=x(e,n,s,t);x(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function M(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],f=n&&n[r];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=M(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=M(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const c=String(o);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return i}function G(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function x(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}var ye=Object.defineProperty,g=(e,t)=>ye(e,"name",{value:t,configurable:!0});function ee(e){return e!==null&&(typeof e=="object"||typeof e=="function")}g(ee,"isObject");function be(e){return(...t)=>{for(const n of e)typeof n=="function"&&n(...t)}}g(be,"chain");var we=g(e=>typeof e=="function"&&!e.length?e():e,"access");function I(e,...t){return typeof e=="function"?e(...t):e}g(I,"accessWith");function me(e,t,n){const s=Array.isArray(e);let i,r=!0;return l=>{let o;if(s){o=Array(e.length);for(let c=0;c<e.length;c++)o[c]=e[c]()}else o=e();if(r)return r=!1,i=o,n;const f=v(()=>t(o,i,l));return i=o,f}}g(me,"defer");var Se=Object.entries,xe=Object.keys;function Ae(e){let t=0,n;return(...s)=>{n=s,t++,queueMicrotask(()=>--t===0&&e(...n))}}g(Ae,"createMicrotask");function ve(e){const t={...e},n={},s=new Map,i=g(o=>{const f=s.get(o);if(f)return f[0]();const c=C(t[o],{name:typeof o=="string"?o:void 0});return s.set(o,c),delete t[o],c[0]()},"getValue"),r=g((o,f)=>{const c=s.get(o);if(c)return c[1](f);o in t&&(t[o]=I(f,[t[o]]))},"setValue");for(const o of xe(e))n[o]=void 0,Object.defineProperty(n,o,{get:i.bind(void 0,o)});return[n,g((o,f)=>(ee(o)?v(()=>{ie(()=>{for(const[c,d]of Se(I(o,n)))r(c,()=>d)})}):r(o,f),n),"setter")]}g(ve,"createStaticStore");function Ee(e,t,n,s){const i=e.length,r=t.length;let l=0;if(!r){for(;l<i;l++)n(e[l]);return}if(!i){for(;l<r;l++)s(t[l]);return}for(;l<r&&t[l]===e[l];l++);let o,f;t=t.slice(l),e=e.slice(l);for(o of t)e.includes(o)||s(o);for(f of e)t.includes(f)||n(f)}g(Ee,"handleDiffArray");const K=e=>typeof e=="object"&&e!==null;function Ce(e,t){return new Proxy({},{get:(n,s)=>{if(s===Symbol.iterator||s==="length")return Reflect.get(e,s);const i=Reflect.get(n,s);if(i)return i;const r=t(s);return Reflect.set(n,s,r),r},set:()=>!1})}function $(e,t){const n=t??{},s=n.memo??typeof e=="function",i=typeof e=="function"?o=>()=>e()[o]:o=>()=>e[o],r=we(e);if(n.lazy){const o=re();return Ce(r,f=>{const c=i(f);return n.deep&&K(r[f])?H(o,()=>$(c,{...n,memo:s})):s?H(o,()=>W(c,void 0,t)):c})}const l=Array.isArray(r)?[]:{};for(const[o,f]of Object.entries(r)){const c=i(o);n.deep&&K(f)?l[o]=$(c,{...n,memo:s}):l[o]=s?W(c,void 0,t):c}return l}const Oe=de('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-v"><button class="btn"></button></div></div>'),Te=e=>{const{seconds:t,count:n}=$(e,{lazy:!0});A(()=>console.log("Seconds",t())),A(()=>console.log("Count",n()));const s=$(()=>e.list,{lazy:!0,deep:!0}),[{n:i},{n:r}]=s;return A(()=>console.log("0:",i())),A(()=>console.log("1:",r())),A(()=>console.log("2:",s[2].n())),[]},Ne=()=>{const[e,t]=C(0);setInterval(()=>t(o=>++o),1e3);const[n,s]=C(0),[i,r]=C([{},{},{}]);return setInterval(()=>{console.log("~shuffle~"),r(o=>o.slice().sort(()=>Math.random()-.5))},2e3),setTimeout(()=>r([{n:1},{n:2},{n:3}]),3e3),(()=>{const o=Oe.cloneNode(!0),f=o.firstChild,c=f.firstChild;return f.$$click=()=>s(d=>++d),D(c,n),D(o,k(Te,{get seconds(){return e()},get count(){return n()},get list(){return i()}}),null),o})()};he(()=>k(Ne,{}),document.getElementById("root"));ge(["click"]);
