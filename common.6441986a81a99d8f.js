"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{5151:(y,h,i)=>{i.d(h,{c:()=>r});var v=i(771),l=i(9951),c=i(6535);const r=(n,o)=>{let e,t;const u=(a,w,E)=>{if(typeof document>"u")return;const p=document.elementFromPoint(a,w);p&&o(p)?p!==e&&(s(),d(p,E)):s()},d=(a,w)=>{e=a,t||(t=e);const E=e;(0,v.w)(()=>E.classList.add("ion-activated")),w()},s=(a=!1)=>{if(!e)return;const w=e;(0,v.w)(()=>w.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,l.a),onMove:a=>u(a.currentX,a.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),t=void 0}})}},1836:(y,h,i)=>{i.d(h,{g:()=>l});var v=i(1848);const l=()=>{if(void 0!==v.w)return v.w.Capacitor}},983:(y,h,i)=>{i.d(h,{c:()=>v,i:()=>l});const v=(c,r,n)=>"function"==typeof n?n(c,r):"string"==typeof n?c[n]===r[n]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,n)=>void 0!==c&&(Array.isArray(c)?c.some(o=>v(o,r,n)):v(c,r,n))},4510:(y,h,i)=>{i.d(h,{g:()=>v});const v=(o,e,t,u,d)=>c(o[1],e[1],t[1],u[1],d).map(s=>l(o[0],e[0],t[0],u[0],s)),l=(o,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-o*Math.pow(d-1,3),c=(o,e,t,u,d)=>n((u-=d)-3*(t-=d)+3*(e-=d)-(o-=d),3*t-6*e+3*o,3*e-3*o,o).filter(a=>a>=0&&a<=1),n=(o,e,t,u)=>{if(0===o)return((o,e,t)=>{const u=e*e-4*o*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*o),(-e-Math.sqrt(u))/(2*o)]})(e,t,u);const d=(3*(t/=o)-(e/=o)*e)/3,s=(2*e*e*e-9*e*t+27*(u/=o))/27;if(0===d)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-d),-Math.sqrt(-d)];const a=Math.pow(s/2,2)+Math.pow(d/3,3);if(0===a)return[Math.pow(s/2,.5)-e/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-e/3];const w=Math.sqrt(Math.pow(-d/3,3)),E=Math.acos(-s/(2*Math.sqrt(Math.pow(-d/3,3)))),p=2*Math.pow(w,1/3);return[p*Math.cos(E/3)-e/3,p*Math.cos((E+2*Math.PI)/3)-e/3,p*Math.cos((E+4*Math.PI)/3)-e/3]}},4162:(y,h,i)=>{i.d(h,{i:()=>v});const v=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},8434:(y,h,i)=>{i.r(h),i.d(h,{startFocusVisible:()=>r});const v="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let o=[],e=!0;const t=n?n.shadowRoot:document,u=n||document.body,d=M=>{o.forEach(g=>g.classList.remove(v)),M.forEach(g=>g.classList.add(v)),o=M},s=()=>{e=!1,d([])},a=M=>{e=c.includes(M.key),e||d([])},w=M=>{if(e&&void 0!==M.composedPath){const g=M.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));d(g)}},E=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",w),t.addEventListener("focusout",E),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("mousedown",s),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",w),t.removeEventListener("focusout",E),t.removeEventListener("touchstart",s),t.removeEventListener("mousedown",s)},setFocus:d}}},9749:(y,h,i)=>{i.d(h,{c:()=>l});var v=i(512);const l=o=>{const e=o;let t;return{hasLegacyControl:()=>{if(void 0===t){const d=void 0!==e.label||c(e),s=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,a=(0,v.h)(e);t=!0===e.legacy||!d&&!s&&null!==a}return t}}},c=o=>!!(r.includes(o.tagName)&&null!==o.querySelector('[slot="label"]')||n.includes(o.tagName)&&""!==o.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},9951:(y,h,i)=>{i.d(h,{I:()=>l,a:()=>e,b:()=>t,c:()=>o,d:()=>d,h:()=>u});var v=i(1836),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const r={getEngine(){const s=window.TapticEngine;if(s)return s;const a=(0,v.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,v.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(s){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?s.style:s.style.toLowerCase();a.impact({style:w})},notification(s){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?s.type:s.type.toLowerCase();a.notification({type:w})},selection(){const s=this.isCapacitor()?l.Light:"light";this.impact({style:s})},selectionStart(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionStart():s.gestureSelectionStart())},selectionChanged(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionChanged():s.gestureSelectionChanged())},selectionEnd(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionEnd():s.gestureSelectionEnd())}},n=()=>r.available(),o=()=>{n()&&r.selection()},e=()=>{n()&&r.selectionStart()},t=()=>{n()&&r.selectionChanged()},u=()=>{n()&&r.selectionEnd()},d=s=>{n()&&r.impact(s)}},7946:(y,h,i)=>{i.d(h,{I:()=>o,a:()=>d,b:()=>n,c:()=>w,d:()=>p,f:()=>s,g:()=>u,i:()=>t,p:()=>E,r:()=>M,s:()=>a});var v=i(5861),l=i(512),c=i(2400);const n="ion-content",o=".ion-content-scroll-host",e=`${n}, ${o}`,t=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,v.Z)(function*(_){return t(_)?(yield new Promise(m=>(0,l.c)(_,m)),_.getScrollElement()):_});return function(m){return g.apply(this,arguments)}}(),d=g=>g.querySelector(o)||g.querySelector(e),s=g=>g.closest(e),a=(g,_)=>t(g)?g.scrollToTop(_):Promise.resolve(g.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),w=(g,_,m,O)=>t(g)?g.scrollByPoint(_,m,O):Promise.resolve(g.scrollBy({top:m,left:_,behavior:O>0?"smooth":"auto"})),E=g=>(0,c.b)(g,n),p=g=>{if(t(g)){const m=g.scrollY;return g.scrollY=!1,m}return g.style.setProperty("overflow","hidden"),!0},M=(g,_)=>{t(g)?g.scrollY=_:g.style.removeProperty("overflow")}},5307:(y,h,i)=>{i.d(h,{a:()=>v,b:()=>w,c:()=>e,d:()=>E,e:()=>D,f:()=>o,g:()=>p,h:()=>c,i:()=>l,j:()=>O,k:()=>C,l:()=>t,m:()=>s,n:()=>M,o:()=>d,p:()=>n,q:()=>r,r:()=>m,s:()=>f,t:()=>a,u:()=>g,v:()=>_,w:()=>u});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5917:(y,h,i)=>{i.d(h,{c:()=>r,g:()=>n});var v=i(1848),l=i(512),c=i(2400);const r=(e,t,u)=>{let d,s;if(void 0!==v.w&&"MutationObserver"in v.w){const p=Array.isArray(t)?t:[t];d=new MutationObserver(M=>{for(const g of M)for(const _ of g.addedNodes)if(_.nodeType===Node.ELEMENT_NODE&&p.includes(_.slot))return u(),void(0,l.r)(()=>a(_))}),d.observe(e,{childList:!0})}const a=p=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(g=>{u();for(const _ of g)for(const m of _.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===t&&E()}),s.observe(null!==(M=p.parentElement)&&void 0!==M?M:p,{subtree:!0,childList:!0})},E=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),E()}}},n=(e,t,u)=>{const d=null==e?0:e.toString().length,s=o(d,t);if(void 0===u)return s;try{return u(d,t)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),s}},o=(e,t)=>`${e} / ${t}`},6591:(y,h,i)=>{i.r(h),i.d(h,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>g,keyboardDidOpen:()=>p,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>E,setKeyboardOpen:()=>w,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var v=i(3920);i(1836),i(1848);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},u=!1;const d=()=>{e={},t={},u=!1},s=f=>{if(v.K.getEngine())a(f);else{if(!f.visualViewport)return;t=C(f.visualViewport),f.visualViewport.onresize=()=>{O(f),p()||M(f)?w(f):g(f)&&E(f)}}},a=f=>{f.addEventListener("keyboardDidShow",D=>w(f,D)),f.addEventListener("keyboardDidHide",()=>E(f))},w=(f,D)=>{_(f,D),u=!0},E=f=>{m(f),u=!1},p=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=f=>u&&!g(f),g=f=>u&&t.height===f.innerHeight,_=(f,D)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:f.innerHeight-t.height}});f.dispatchEvent(L)},m=f=>{const D=new CustomEvent(n);f.dispatchEvent(D)},O=f=>{e=Object.assign({},t),t=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},3920:(y,h,i)=>{i.d(h,{K:()=>r,a:()=>c});var v=i(1836),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),c=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(c||{});const r={getEngine(){const n=(0,v.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},9252:(y,h,i)=>{i.d(h,{c:()=>o});var v=i(5861),l=i(1848),c=i(3920);const r=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},n=e=>{const t=r(e);return null===t?0:t.clientHeight},o=function(){var e=(0,v.Z)(function*(t){let u,d,s,a;const w=function(){var _=(0,v.Z)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;u=()=>{void 0===a&&(a=n(O)),s=!0,E(s,O)},d=()=>{s=!1,E(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return _.apply(this,arguments)}}(),E=(_,m)=>{t&&t(_,p(m))},p=_=>{if(0===a||a===n(_))return;const m=r(_);return null!==m?new Promise(O=>{const f=new ResizeObserver(()=>{m.clientHeight===a&&(f.disconnect(),O())});f.observe(m)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>s}});return function(u){return e.apply(this,arguments)}}()},9229:(y,h,i)=>{i.d(h,{c:()=>l});var v=i(5861);const l=()=>{let c;return{lock:function(){var n=(0,v.Z)(function*(){const o=c;let e;return c=new Promise(t=>e=t),void 0!==o&&(yield o),e});return function(){return n.apply(this,arguments)}}()}}},4793:(y,h,i)=>{i.d(h,{c:()=>c});var v=i(1848),l=i(512);const c=(r,n,o)=>{let e;const t=()=>!(void 0===n()||void 0!==r.label||null===o()),d=()=>{const a=n();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const w=o().scrollWidth;if(0===w&&null===a.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==e)return;const E=e=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(d(),E.disconnect(),e=void 0)},{threshold:.01,root:r});E.observe(a)}else a.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},2217:(y,h,i)=>{i.d(h,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,n)=>{const o=c*r/n-c+"ms",e=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(c,r,n)=>{const o=r/n,e=c*o-c+"ms",t=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})}}},3049:(y,h,i)=>{i.r(h),i.d(h,{createSwipeBackGesture:()=>n});var v=i(512),l=i(4162),c=i(6535);i(2019);const n=(o,e,t,u,d)=>{const s=o.ownerDocument.defaultView;let a=(0,l.i)(o);const E=m=>a?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,l.i)(o),(m=>{const{startX:C}=m;return a?C>=s.innerWidth-50:C<=50})(m)&&e()),onStart:t,onMove:m=>{const C=E(m)/s.innerWidth;u(C)},onEnd:m=>{const O=E(m),C=s.innerWidth,f=O/C,D=(m=>a?-m.velocityX:m.velocityX)(m),L=D>=0&&(D>.2||O>C/2),b=(L?1-f:f)*C;let A=0;if(b>5){const T=b/Math.abs(D);A=Math.min(T,540)}d(L,f<=0?.01:(0,v.l)(0,f,.9999),A)}})}},6806:(y,h,i)=>{i.d(h,{w:()=>v});const v=(r,n,o)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{o(l(t,n))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,n)=>{let o;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)o=c(e.addedNodes[t],n)||o}),o},c=(r,n)=>{if(1!==r.nodeType)return;const o=r;return(o.tagName===n.toUpperCase()?[o]:Array.from(o.querySelectorAll(n))).find(t=>t.value===o.value)}},3554:(y,h,i)=>{i.d(h,{e:()=>n});var v=i(6814),l=i(6223),c=i(1929),r=i(9212);let n=(()=>{var o;class e{}return(o=e).\u0275fac=function(u){return new(u||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[v.ez,l.u5,c.Pc]}),e})()}}]);