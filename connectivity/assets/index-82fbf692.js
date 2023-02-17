(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const w={};function se(e){w.context=e}const ie=(e,t)=>e===t,L={equals:ie};let R=J;const y=1,N=2,G={owned:null,cleanups:null,context:null,owner:null};var a=null;let m=null,u=null,h=null,d=null,B=0;function oe(e,t){const n=u,s=a,i=e.length===0,r=i?G:{owned:null,cleanups:null,context:null,owner:t||s},l=i?e:()=>e(()=>A(()=>M(r)));a=r,u=null;try{return E(l,!0)}finally{u=n,a=s}}function U(e,t){t=t?Object.assign({},L,t):L;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Y(n,i));return[Q.bind(n),s]}function O(e,t,n){const s=D(e,t,!1,y);C(s)}function re(e,t,n){R=he;const s=D(e,t,!1,y);s.user=!0,d?d.push(s):C(s)}function le(e,t,n){n=n?Object.assign({},L,n):L;const s=D(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,C(s),Q.bind(s)}function fe(e){return E(e,!1)}function A(e){const t=u;u=null;try{return e()}finally{u=t}}function K(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function ce(){return a}function Q(){const e=m;if(this.sources&&(this.state||e))if(this.state===y||e)C(this);else{const t=h;h=null,E(()=>T(this),!1),h=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function Y(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=m&&m.running;l&&m.disposed.has(r),(l&&!r.tState||!l&&!r.state)&&(r.pure?h.push(r):d.push(r),r.observers&&X(r)),l||(r.state=y)}if(h.length>1e6)throw h=[],new Error},!1)),t}function C(e){if(!e.fn)return;M(e);const t=a,n=u,s=B;u=a=e,ue(e,e.value,s),u=n,a=t}function ue(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=y,e.owned&&e.owned.forEach(M),e.owned=null),Z(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Y(e,s):e.value=s,e.updatedAt=n)}function D(e,t,n,s=y,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==G&&(a.owned?a.owned.push(r):a.owned=[r]),r}function _(e){const t=m;if(e.state===0||t)return;if(e.state===N||t)return T(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===y||t)C(e);else if(e.state===N||t){const i=h;h=null,E(()=>T(e,n[0]),!1),h=i}}function E(e,t){if(h)return e();let n=!1;t||(h=[]),d?n=!0:d=[],B++;try{const s=e();return ae(n),s}catch(s){h||(d=null),Z(s)}}function ae(e){if(h&&(J(h),h=null),e)return;const t=d;d=null,t.length&&E(()=>R(t),!1)}function J(e){for(let t=0;t<e.length;t++)_(e[t])}function he(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:_(s)}for(w.context&&se(),t=0;t<n;t++)_(e[t])}function T(e,t){const n=m;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===y||n?i!==t&&_(i):(i.state===N||n)&&T(i,t))}}function X(e){const t=m;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=N,s.pure?h.push(s):d.push(s),s.observers&&X(s))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function pe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Z(e){throw e=pe(e),e}function ge(e,t){return A(()=>e(t||{}))}function de(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,f=t[i-1].nextSibling,c=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const g=r<s?o?n[o-1].nextSibling:n[r-o]:f;for(;o<r;)e.insertBefore(n[o++],g)}else if(r===o)for(;l<i;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const g=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],g),t[i]=n[r]}else{if(!c){c=new Map;let b=o;for(;b<r;)c.set(n[b],b++)}const g=c.get(t[l]);if(g!=null)if(o<g&&g<r){let b=l,k=1,q;for(;++b<i&&b<r&&!((q=c.get(t[b]))==null||q!==g+k);)k++;if(k>g-o){const ne=t[l];for(;o<g;)e.insertBefore(n[o++],ne)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}function ye(e,t,n,s={}){let i;return oe(r=>{i=r,t===document?e():z(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function I(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function z(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return j(e,t,s,n);O(i=>j(e,t(),i,n),s)}function j(e,t,n,s,i){for(w.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(w.context)return n;if(r==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=v(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(w.context)return n;n=v(e,n,s)}else{if(r==="function")return O(()=>{let o=t();for(;typeof o=="function";)o=o();n=j(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(P(o,t,n,i))return O(()=>n=j(e,o,n,s,!0)),()=>n;if(w.context){if(!o.length)return n;for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=v(e,n,s),l)return n}else f?n.length===0?W(e,o,s):de(e,n,o):(n&&v(e),W(e,o));n=o}else if(t instanceof Node){if(w.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=v(e,n,s,t);v(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function P(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],f=n&&n[r];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=P(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=P(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const c=String(o);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return i}function W(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function v(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}var be=Object.defineProperty,p=(e,t)=>be(e,"name",{value:t,configurable:!0});function ee(e){return e!==null&&(typeof e=="object"||typeof e=="function")}p(ee,"isObject");function we(e){return(...t)=>{for(const n of e)typeof n=="function"&&n(...t)}}p(we,"chain");var F=p(e=>typeof e=="function"&&!e.length?e():e,"access"),H=p(e=>Array.isArray(e)?e:[e],"asArray");function $(e,...t){return typeof e=="function"?e(...t):e}p($,"accessWith");function me(e,t,n){const s=Array.isArray(e);let i,r=!0;return l=>{let o;if(s){o=Array(e.length);for(let c=0;c<e.length;c++)o[c]=e[c]()}else o=e();if(r)return r=!1,i=o,n;const f=A(()=>t(o,i,l));return i=o,f}}p(me,"defer");var te=Object.entries,ve=Object.keys,Ee=p(e=>ce()?K(e):e,"tryOnCleanup"),Se=p(()=>{let e=[];const t=p(()=>e=[],"clear");return{push:(...n)=>e.push(...n),execute(n,s,i,r){e.forEach(l=>l(n,s,i,r)),t()},clear:t}},"createCallbackStack");function xe(e){let t=0,n;return(...s)=>{n=s,t++,queueMicrotask(()=>--t===0&&e(...n))}}p(xe,"createMicrotask");function Ae(e){const t={...e},n={},s=new Map,i=p(o=>{const f=s.get(o);if(f)return f[0]();const c=U(t[o],{name:typeof o=="string"?o:void 0});return s.set(o,c),delete t[o],c[0]()},"getValue"),r=p((o,f)=>{const c=s.get(o);if(c)return c[1](f);o in t&&(t[o]=$(f,[t[o]]))},"setValue");for(const o of ve(e))n[o]=void 0,Object.defineProperty(n,o,{get:i.bind(void 0,o)});return[n,p((o,f)=>(ee(o)?A(()=>{fe(()=>{for(const[c,g]of te($(o,n)))r(c,()=>g)})}):r(o,f),n),"setter")]}p(Ae,"createStaticStore");function Ce(e,t,n,s){const i=e.length,r=t.length;let l=0;if(!r){for(;l<i;l++)n(e[l]);return}if(!i){for(;l<r;l++)s(t[l]);return}for(;l<r&&t[l]===e[l];l++);let o,f;t=t.slice(l),e=e.slice(l);for(o of t)e.includes(o)||s(o);for(f of e)t.includes(f)||n(f)}p(Ce,"handleDiffArray");var Le=Object.defineProperty,S=(e,t)=>Le(e,"name",{value:t,configurable:!0});function x(e,t,n,s){return e.addEventListener(t,n,s),Ee(e.removeEventListener.bind(e,t,n,s))}S(x,"makeEventListener");function V(e,t,n,s){const i=S(()=>{H(F(e)).forEach(r=>{r&&H(F(t)).forEach(l=>x(r,l,n,s))})},"attachListeners");typeof e=="function"?re(i):O(i)}S(V,"createEventListener");function Ne(e,t,n){const[s,i]=U();return V(e,t,i,n),s}S(Ne,"createEventSignal");function Oe(e,t,n){for(const[s,i]of te(t))i&&V(e,s,i,n)}S(Oe,"createEventListenerMap");function _e(e,t){const{push:n,execute:s}=Se();return[(i,r,l)=>{const o=x(e,i,r,l??t);return n(o),o},K(s)]}S(_e,"makeEventListenerStack");function Te(e){const t=x(window,"online",e.bind(void 0,!0)),n=x(window,"offline",e.bind(void 0,!1));return()=>(t(),n())}function je(){const[e,t]=U(navigator.onLine);return Te(t),e}const Me=I('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center">You are currently: <!> (try toggling your network state in dev tools!)</div>'),ke=I("<strong>online</strong>"),Pe=I("<strong>offline</strong>"),$e=()=>{const e=je();return(()=>{const t=Me.cloneNode(!0),n=t.firstChild,s=n.nextSibling;return s.nextSibling,z(t,(()=>{const i=le(()=>!!e());return()=>i()?ke.cloneNode(!0):Pe.cloneNode(!0)})(),s),t})()};ye(()=>ge($e,{}),document.getElementById("root"));
