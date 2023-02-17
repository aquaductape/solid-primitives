(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const N={};function qe(e){N.context=e}const Ve=(e,t)=>e===t,He=Symbol("solid-track"),Q={equals:Ve};let Ae=_e;const C=1,G=2,xe={owned:null,cleanups:null,context:null,owner:null};var p=null;let T=null,h=null,g=null,x=null,ce=0;function H(e,t){const n=h,s=p,r=e.length===0,l=r?xe:{owned:null,cleanups:null,context:null,owner:t||s},o=r?e:()=>e(()=>$(()=>te(l)));p=l,h=null;try{return P(o,!0)}finally{h=n,p=s}}function R(e,t){t=t?Object.assign({},Q,t):Q;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),Ne(n,r));return[Le.bind(n),s]}function Y(e,t,n){const s=he(e,t,!1,C);I(s)}function Ce(e,t,n){Ae=Je;const s=he(e,t,!1,C);s.user=!0,x?x.push(s):I(s)}function ee(e,t,n){n=n?Object.assign({},Q,n):Q;const s=he(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,I(s),Le.bind(s)}function $e(e){return P(e,!1)}function $(e){const t=h;h=null;try{return e()}finally{h=t}}function Fe(e,t,n){const s=Array.isArray(e);let r,l=n&&n.defer;return o=>{let i;if(s){i=Array(e.length);for(let f=0;f<e.length;f++)i[f]=e[f]()}else i=e();if(l){l=!1;return}const c=$(()=>t(i,r,o));return r=i,c}}function ae(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function Qe(){return p}function Le(){const e=T;if(this.sources&&(this.state||e))if(this.state===C||e)I(this);else{const t=g;g=null,P(()=>X(this),!1),g=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function Ne(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&P(()=>{for(let r=0;r<e.observers.length;r+=1){const l=e.observers[r],o=T&&T.running;o&&T.disposed.has(l),(o&&!l.tState||!o&&!l.state)&&(l.pure?g.push(l):x.push(l),l.observers&&Te(l)),o||(l.state=C)}if(g.length>1e6)throw g=[],new Error},!1)),t}function I(e){if(!e.fn)return;te(e);const t=p,n=h,s=ce;h=p=e,Ge(e,e.value,s),h=n,p=t}function Ge(e,t,n){let s;try{s=e.fn(t)}catch(r){e.pure&&(e.state=C,e.owned&&e.owned.forEach(te),e.owned=null),Oe(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ne(e,s):e.value=s,e.updatedAt=n)}function he(e,t,n,s=C,r){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==xe&&(p.owned?p.owned.push(l):p.owned=[l]),l}function J(e){const t=T;if(e.state===0||t)return;if(e.state===G||t)return X(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ce);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===C||t)I(e);else if(e.state===G||t){const r=g;g=null,P(()=>X(e,n[0]),!1),g=r}}function P(e,t){if(g)return e();let n=!1;t||(g=[]),x?n=!0:x=[],ce++;try{const s=e();return Ye(n),s}catch(s){g||(x=null),Oe(s)}}function Ye(e){if(g&&(_e(g),g=null),e)return;const t=x;x=null,t.length&&P(()=>Ae(t),!1)}function _e(e){for(let t=0;t<e.length;t++)J(e[t])}function Je(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:J(s)}for(N.context&&qe(),t=0;t<n;t++)J(e[t])}function X(e,t){const n=T;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===C||n?r!==t&&J(r):(r.state===G||n)&&X(r,t))}}function Te(e){const t=T;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=G,s.pure?g.push(s):x.push(s),s.observers&&Te(s))}}function te(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const l=r.pop(),o=n.observerSlots.pop();s<r.length&&(l.sourceSlots[o]=s,r[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)te(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Xe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Oe(e){throw e=Xe(e),e}const Ze=Symbol("fallback");function ve(e){for(let t=0;t<e.length;t++)e[t]()}function ze(e,t,n={}){let s=[],r=[],l=[],o=0,i=t.length>1?[]:null;return ae(()=>ve(l)),()=>{let c=e()||[],f,u;return c[He],$(()=>{let a=c.length,m,L,K,q,V,S,E,A,k;if(a===0)o!==0&&(ve(l),l=[],s=[],r=[],o=0,i&&(i=[])),n.fallback&&(s=[Ze],r[0]=H(We=>(l[0]=We,n.fallback())),o=1);else if(o===0){for(r=new Array(a),u=0;u<a;u++)s[u]=c[u],r[u]=H(y);o=a}else{for(K=new Array(a),q=new Array(a),i&&(V=new Array(a)),S=0,E=Math.min(o,a);S<E&&s[S]===c[S];S++);for(E=o-1,A=a-1;E>=S&&A>=S&&s[E]===c[A];E--,A--)K[A]=r[E],q[A]=l[E],i&&(V[A]=i[E]);for(m=new Map,L=new Array(A+1),u=A;u>=S;u--)k=c[u],f=m.get(k),L[u]=f===void 0?-1:f,m.set(k,u);for(f=S;f<=E;f++)k=s[f],u=m.get(k),u!==void 0&&u!==-1?(K[u]=r[f],q[u]=l[f],i&&(V[u]=i[f]),u=L[u],m.set(k,u)):l[f]();for(u=S;u<a;u++)u in K?(r[u]=K[u],l[u]=q[u],i&&(i[u]=V[u],i[u](u))):r[u]=H(y);r=r.slice(0,o=a),s=c.slice(0)}return r});function y(a){if(l[u]=a,i){const[m,L]=R(u);return i[u]=L,t(c[u],m)}return t(c[u])}}}function pe(e,t){return $(()=>e(t||{}))}function et(e){const t="fallback"in e&&{fallback:()=>e.fallback};return ee(ze(()=>e.each,e.children,t||void 0))}function tt(e,t,n){let s=n.length,r=t.length,l=s,o=0,i=0,c=t[r-1].nextSibling,f=null;for(;o<r||i<l;){if(t[o]===n[i]){o++,i++;continue}for(;t[r-1]===n[l-1];)r--,l--;if(r===o){const u=l<s?i?n[i-1].nextSibling:n[l-i]:c;for(;i<l;)e.insertBefore(n[i++],u)}else if(l===i)for(;o<r;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[i]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[i++],t[o++].nextSibling),e.insertBefore(n[--l],u),t[r]=n[l]}else{if(!f){f=new Map;let y=i;for(;y<l;)f.set(n[y],y++)}const u=f.get(t[o]);if(u!=null)if(i<u&&u<l){let y=o,a=1,m;for(;++y<r&&y<l&&!((m=f.get(t[y]))==null||m!==u+a);)a++;if(a>u-i){const L=t[o];for(;i<u;)e.insertBefore(n[i++],L)}else e.replaceChild(n[i++],t[o++])}else o++;else t[o++].remove()}}}function nt(e,t,n,s={}){let r;return H(l=>{r=l,t===document?e():M(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function ge(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function M(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Z(e,t,s,n);Y(r=>Z(e,t(),r,n),s)}function Z(e,t,n,s,r){for(N.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(N.context)return n;if(l==="number"&&(t=t.toString()),o){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=D(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(N.context)return n;n=D(e,n,s)}else{if(l==="function")return Y(()=>{let i=t();for(;typeof i=="function";)i=i();n=Z(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(le(i,t,n,r))return Y(()=>n=Z(e,i,n,s,!0)),()=>n;if(N.context){if(!i.length)return n;for(let f=0;f<i.length;f++)if(i[f].parentNode)return n=i}if(i.length===0){if(n=D(e,n,s),o)return n}else c?n.length===0?me(e,i,s):tt(e,n,i):(n&&D(e),me(e,i));n=i}else if(t instanceof Node){if(N.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=D(e,n,s,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function le(e,t,n,s){let r=!1;for(let l=0,o=t.length;l<o;l++){let i=t[l],c=n&&n[l];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=le(e,i,c)||r;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();r=le(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||r}else e.push(i),r=!0;else{const f=String(i);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return r}function me(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function D(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const i=t[o];if(r!==i){const c=i.parentNode===e;!l&&!o?c?e.replaceChild(r,i):e.insertBefore(r,n):c&&i.remove()}else l=!0}}else e.insertBefore(r,n);return[r]}var st=Object.defineProperty,d=(e,t)=>st(e,"name",{value:t,configurable:!0});function ke(e){return e!==null&&(typeof e=="object"||typeof e=="function")}d(ke,"isObject");var F=d((e,t)=>e===t||e.length===t.length&&e.every((n,s)=>n===t[s]),"arrayEquals");function rt(e){return(...t)=>{for(const n of e)typeof n=="function"&&n(...t)}}d(rt,"chain");var ie=d(e=>typeof e=="function"&&!e.length?e():e,"access"),oe=d(e=>Array.isArray(e)?e:[e],"asArray");function ue(e,...t){return typeof e=="function"?e(...t):e}d(ue,"accessWith");function lt(e,t,n){const s=Array.isArray(e);let r,l=!0;return o=>{let i;if(s){i=Array(e.length);for(let f=0;f<e.length;f++)i[f]=e[f]()}else i=e();if(l)return l=!1,r=i,n;const c=$(()=>t(i,r,o));return r=i,c}}d(lt,"defer");var De=Object.entries,it=Object.keys,ot=d(e=>Qe()?ae(e):e,"tryOnCleanup"),ut=d(()=>{let e=[];const t=d(()=>e=[],"clear");return{push:(...n)=>e.push(...n),execute(n,s,r,l){e.forEach(o=>o(n,s,r,l)),t()},clear:t}},"createCallbackStack");function ft(e){let t=0,n;return(...s)=>{n=s,t++,queueMicrotask(()=>--t===0&&e(...n))}}d(ft,"createMicrotask");function ct(e){const t={...e},n={},s=new Map,r=d(i=>{const c=s.get(i);if(c)return c[0]();const f=R(t[i],{name:typeof i=="string"?i:void 0});return s.set(i,f),delete t[i],f[0]()},"getValue"),l=d((i,c)=>{const f=s.get(i);if(f)return f[1](c);i in t&&(t[i]=ue(c,[t[i]]))},"setValue");for(const i of it(e))n[i]=void 0,Object.defineProperty(n,i,{get:r.bind(void 0,i)});return[n,d((i,c)=>(ke(i)?$(()=>{$e(()=>{for(const[f,u]of De(ue(i,n)))l(f,()=>u)})}):l(i,c),n),"setter")]}d(ct,"createStaticStore");function at(e,t,n,s){const r=e.length,l=t.length;let o=0;if(!l){for(;o<r;o++)n(e[o]);return}if(!r){for(;o<l;o++)s(t[o]);return}for(;o<l&&t[o]===e[o];o++);let i,c;t=t.slice(o),e=e.slice(o);for(i of t)e.includes(i)||s(i);for(c of e)t.includes(c)||n(c)}d(at,"handleDiffArray");var ht=Object.defineProperty,j=(e,t)=>ht(e,"name",{value:t,configurable:!0});function _(e,t,n,s){return e.addEventListener(t,n,s),ot(e.removeEventListener.bind(e,t,n,s))}j(_,"makeEventListener");function de(e,t,n,s){const r=j(()=>{oe(ie(e)).forEach(l=>{l&&oe(ie(t)).forEach(o=>_(l,o,n,s))})},"attachListeners");typeof e=="function"?Ce(r):Y(r)}j(de,"createEventListener");function pt(e,t,n){const[s,r]=R();return de(e,t,r,n),s}j(pt,"createEventSignal");function gt(e,t,n){for(const[s,r]of De(t))r&&de(e,s,r,n)}j(gt,"createEventListenerMap");function dt(e,t){const{push:n,execute:s}=ut();return[(r,l,o)=>{const i=_(e,r,l,o??t);return n(i),i},ae(s)]}j(dt,"makeEventListenerStack");let yt=Ke;const ne=1,z=2,wt={owned:null,cleanups:null,context:null,owner:null};var w=null;let U=null,b=null,v=null,O=null,ye=0;function Me(e,t){const n=b,s=w,r=e.length===0,l=r?wt:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=r?e:()=>e(()=>Ue(()=>se(l)));w=l,b=null;try{return B(o,!0)}finally{b=n,w=s}}function Ue(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function Re(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function Pe(){return w}function bt(e,t){const n=w,s=b;w=e,b=null;try{return B(t,!0)}catch(r){we(r)}finally{w=n,b=s}}function vt(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let r=0;r<e.observers.length;r+=1){const l=e.observers[r],o=U&&U.running;o&&U.disposed.has(l),(o&&!l.tState||!o&&!l.state)&&(l.pure?v.push(l):O.push(l),l.observers&&Ie(l)),o||(l.state=ne)}if(v.length>1e6)throw v=[],new Error},!1)),t}function mt(e){if(!e.fn)return;se(e);const t=w,n=b,s=ye;b=w=e,St(e,e.value,s),b=n,w=t}function St(e,t,n){let s;try{s=e.fn(t)}catch(r){e.pure&&(e.state=ne,e.owned&&e.owned.forEach(se),e.owned=null),we(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?vt(e,s):e.value=s,e.updatedAt=n)}function je(e){const t=U;if(e.state===0||t)return;if(e.state===z||t)return fe(e);if(e.suspense&&Ue(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ye);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===ne||t)mt(e);else if(e.state===z||t){const r=v;v=null,B(()=>fe(e,n[0]),!1),v=r}}function B(e,t){if(v)return e();let n=!1;t||(v=[]),O?n=!0:O=[],ye++;try{const s=e();return Et(n),s}catch(s){n||(O=null),v=null,we(s)}}function Et(e){if(v&&(Ke(v),v=null),e)return;const t=O;O=null,t.length&&B(()=>yt(t),!1)}function Ke(e){for(let t=0;t<e.length;t++)je(e[t])}function fe(e,t){const n=U;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===ne||n?r!==t&&je(r):(r.state===z||n)&&fe(r,t))}}function Ie(e){const t=U;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=z,s.pure?v.push(s):O.push(s),s.observers&&Ie(s))}}function se(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const l=r.pop(),o=n.observerSlots.pop();s<r.length&&(l.sourceSlots[o]=s,r[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)se(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function At(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function we(e){throw e=At(e),e}var xt=Object.defineProperty,be=(e,t)=>xt(e,"name",{value:t,configurable:!0});function Be(e,...t){return t.length===0&&(t=[Pe()]),Me(n=>(oe(ie(t)).forEach(s=>s&&bt(s,Re.bind(void 0,n))),e(n)),t[0])}be(Be,"createSubRoot");function Ct(e,...t){return Be(n=>(e(n),n),...t)}be(Ct,"createDisposable");function re(e){let t=0,n,s;return()=>(s||Me(r=>{n=e(r),s=r}),t++,Pe()&&Re(()=>{t--,queueMicrotask(()=>{t||!s||(s(),s=void 0,n=void 0)})}),n)}be(re,"createSharedRoot");function Se(e,t){for(let n=e.length-1;n>=0;n--){const s=t.slice(0,n+1);if(!F(e[n],s))return!1}return!0}const W=re(()=>{const[e,t]=R([]),[n,s]=R(null),r=()=>t([]);return _(window,"keydown",l=>{if(l.repeat||typeof l.key!="string")return;const o=l.key.toUpperCase();e().includes(o)||$e(()=>{s(l),t(i=>[...i,o])})}),_(window,"keyup",l=>{if(typeof l.key!="string")return;const o=l.key.toUpperCase();t(i=>i.filter(c=>c!==o))}),_(window,"blur",r),_(window,"contextmenu",l=>{l.defaultPrevented||r()}),[e,{event:n}]}),$t=re(()=>{const[e]=W();let t=$(e);return ee(()=>{const n=e(),s=t;return t=n,s.length===0&&n.length===1?n[0]:null})}),Lt=re(()=>{const[e]=W();return ee(t=>e().length===0?[]:[...t,e()],[])});function Nt(e,t={}){e=e.toUpperCase();const{preventDefault:n=!0}=t,[,{event:s}]=W(),r=$t();return ee(()=>r()===e?(n&&s().preventDefault(),!0):!1)}function Ee(e,t,n={}){if(!e.length)return;e=e.map(u=>u.toUpperCase());const{preventDefault:s=!0,requireReset:r=!1}=n,[,{event:l}]=W(),o=Lt();let i=!1;Ce(Fe(o,r?u=>{if(!u.length)return i=!1;i||(u.length<e.length?Se(u,e.slice(0,u.length))?s&&l().preventDefault():i=!0:(i=!0,Se(u,e)&&(s&&l().preventDefault(),t())))}:u=>{const y=u.at(-1);if(y){if(s&&y.length<e.length){F(y,e.slice(0,e.length-1))&&l().preventDefault();return}if(F(y,e)){const a=u.at(-2);(!a||F(a,e.slice(0,e.length-1)))&&(s&&l().preventDefault(),t())}}}))}const _t=ge(`<ul class="
        fixed top-4 right-4
        flex flex-col items-end
        "></ul>`),Tt=ge('<li class="text-white bg-red-500 p-2 border-b border-b-red-700"></li>'),Ot=ge('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-v"><h4>Is pressing Shift?</h4><p></p></div><div class="wrapper-v"><h4>Pressed keys</h4><p class="min-h-5"></p></div></div>'),kt=e=>{const[t,n]=R([]),s=r=>{const l={text:r};n(o=>[...o,l]),setTimeout(()=>n(o=>o.filter(i=>i!==l)),3e3)};return e.messageTrigger(s),(()=>{const r=_t.cloneNode(!0);return M(r,pe(et,{get each(){return t()},children:({text:l})=>(()=>{const o=Tt.cloneNode(!0);return M(o,l),o})()})),r})()},Dt=()=>{const[e]=W(),t=Nt("Shift");Ee(["Q"],()=>{n("Q pressed")}),Ee(["Control","E","R"],()=>{n("Control + E + R pressed")},{preventDefault:!0});let n;return(()=>{const s=Ot.cloneNode(!0),r=s.firstChild,l=r.firstChild,o=l.nextSibling,i=r.nextSibling,c=i.firstChild,f=c.nextSibling;return M(o,()=>t()?"YES":"NO"),M(f,()=>e().join(", ")),M(s,pe(kt,{messageTrigger:u=>n=u}),null),s})()};nt(()=>pe(Dt,{}),document.getElementById("root"));
