import{S as st,i as ut,s as lt,Q as Pt,k as C,l as $,m as S,h as b,n as E,b as se,H as we,V as Qe,R as It,T as Dt,U as Ct,g as _e,d as ke,K as $t,P as St,I as Ot,a as N,q as W,y as Ze,W as At,c as R,r as U,z as Ke,G as y,A as Ye,B as Je,o as Vt,X as Lt}from"../chunks/index.bce3161e.js";function Bt(e){let t,r,n,a;const o=e[2].default,s=Pt(o,e,e[1],null);return{c(){t=C("button"),s&&s.c(),this.h()},l(u){t=$(u,"BUTTON",{class:!0});var i=S(t);s&&s.l(i),i.forEach(b),this.h()},h(){E(t,"class","text-new-white p-2 bg-dph-orange rounded-md font-bold text-md md:text-lg lg:text-xl font-brand hover:scale-110 transition-all active:brightness-75")},m(u,i){se(u,t,i),s&&s.m(t,null),r=!0,n||(a=[we(t,"click",Qe(function(){St(e[0])&&e[0].apply(this,arguments)})),we(t,"submit",Qe(null))],n=!0)},p(u,[i]){e=u,s&&s.p&&(!r||i&2)&&It(s,o,e,e[1],r?Ct(o,e[1],i,null):Dt(e[1]),null)},i(u){r||(_e(s,u),r=!0)},o(u){ke(s,u),r=!1},d(u){u&&b(t),s&&s.d(u),n=!1,$t(a)}}}function Ft(e,t,r){let{$$slots:n={},$$scope:a}=t,{clickEvent:o=void 0}=t;return e.$$set=s=>{"clickEvent"in s&&r(0,o=s.clickEvent),"$$scope"in s&&r(1,a=s.$$scope)},[o,a,n]}class Ge extends st{constructor(t){super(),ut(this,t,Ft,Bt,lt,{clickEvent:0})}}var ft={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Te={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},jt=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],me={CSS:{},springs:{}};function q(e,t,r){return Math.min(Math.max(e,t),r)}function he(e,t){return e.indexOf(t)>-1}function be(e,t){return e.apply(null,t)}var c={arr:function(e){return Array.isArray(e)},obj:function(e){return he(Object.prototype.toString.call(e),"Object")},pth:function(e){return c.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||c.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return c.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return c.hex(e)||c.rgb(e)||c.hsl(e)},key:function(e){return!ft.hasOwnProperty(e)&&!Te.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function ct(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(r){return parseFloat(r)}):[]}function dt(e,t){var r=ct(e),n=q(c.und(r[0])?1:r[0],.1,100),a=q(c.und(r[1])?100:r[1],.1,100),o=q(c.und(r[2])?10:r[2],.1,100),s=q(c.und(r[3])?0:r[3],.1,100),u=Math.sqrt(a/n),i=o/(2*Math.sqrt(a*n)),h=i<1?u*Math.sqrt(1-i*i):0,l=1,f=i<1?(i*u+-s)/h:-s+u;function p(m){var v=t?t*m/1e3:m;return i<1?v=Math.exp(-v*i*u)*(l*Math.cos(h*v)+f*Math.sin(h*v)):v=(l+f*v)*Math.exp(-v*u),m===0||m===1?m:1-v}function M(){var m=me.springs[e];if(m)return m;for(var v=1/6,w=0,_=0;;)if(w+=v,p(w)===1){if(_++,_>=16)break}else _=0;var g=w*v*1e3;return me.springs[e]=g,g}return t?p:M}function Ht(e){return e===void 0&&(e=10),function(t){return Math.ceil(q(t,1e-6,1)*e)*(1/e)}}var zt=function(){var e=11,t=1/(e-1);function r(l,f){return 1-3*f+3*l}function n(l,f){return 3*f-6*l}function a(l){return 3*l}function o(l,f,p){return((r(f,p)*l+n(f,p))*l+a(f))*l}function s(l,f,p){return 3*r(f,p)*l*l+2*n(f,p)*l+a(f)}function u(l,f,p,M,m){var v,w,_=0;do w=f+(p-f)/2,v=o(w,M,m)-l,v>0?p=w:f=w;while(Math.abs(v)>1e-7&&++_<10);return w}function i(l,f,p,M){for(var m=0;m<4;++m){var v=s(f,p,M);if(v===0)return f;var w=o(f,p,M)-l;f-=w/v}return f}function h(l,f,p,M){if(!(0<=l&&l<=1&&0<=p&&p<=1))return;var m=new Float32Array(e);if(l!==f||p!==M)for(var v=0;v<e;++v)m[v]=o(v*t,l,p);function w(_){for(var g=0,d=1,T=e-1;d!==T&&m[d]<=_;++d)g+=t;--d;var V=(_-m[d])/(m[d+1]-m[d]),k=g+V*t,F=s(k,l,p);return F>=.001?i(_,k,l,p):F===0?k:u(_,g,g+t,l,p)}return function(_){return l===f&&p===M||_===0||_===1?_:o(w(_),f,M)}}return h}(),vt=function(){var e={linear:function(){return function(n){return n}}},t={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var a,o=4;n<((a=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((a*3-2)/22-n,2)}},Elastic:function(n,a){n===void 0&&(n=1),a===void 0&&(a=.5);var o=q(n,1,10),s=q(a,.1,2);return function(u){return u===0||u===1?u:-o*Math.pow(2,10*(u-1))*Math.sin((u-1-s/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/s)}}},r=["Quad","Cubic","Quart","Quint","Expo"];return r.forEach(function(n,a){t[n]=function(){return function(o){return Math.pow(o,a+2)}}}),Object.keys(t).forEach(function(n){var a=t[n];e["easeIn"+n]=a,e["easeOut"+n]=function(o,s){return function(u){return 1-a(o,s)(1-u)}},e["easeInOut"+n]=function(o,s){return function(u){return u<.5?a(o,s)(u*2)/2:1-a(o,s)(u*-2+2)/2}},e["easeOutIn"+n]=function(o,s){return function(u){return u<.5?(1-a(o,s)(1-u*2))/2:(a(o,s)(u*2-1)+1)/2}}}),e}();function Pe(e,t){if(c.fnc(e))return e;var r=e.split("(")[0],n=vt[r],a=ct(e);switch(r){case"spring":return dt(e,t);case"cubicBezier":return be(zt,a);case"steps":return be(Ht,a);default:return be(n,a)}}function ht(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function pe(e,t){for(var r=e.length,n=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<r;o++)if(o in e){var s=e[o];t.call(n,s,o,e)&&a.push(s)}return a}function ye(e){return e.reduce(function(t,r){return t.concat(c.arr(r)?ye(r):r)},[])}function Xe(e){return c.arr(e)?e:(c.str(e)&&(e=ht(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function Ie(e,t){return e.some(function(r){return r===t})}function De(e){var t={};for(var r in e)t[r]=e[r];return t}function Ee(e,t){var r=De(e);for(var n in e)r[n]=t.hasOwnProperty(n)?t[n]:e[n];return r}function xe(e,t){var r=De(e);for(var n in t)r[n]=c.und(e[n])?t[n]:e[n];return r}function Nt(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function Rt(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=e.replace(t,function(u,i,h,l){return i+i+h+h+l+l}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),a=parseInt(n[1],16),o=parseInt(n[2],16),s=parseInt(n[3],16);return"rgba("+a+","+o+","+s+",1)"}function Wt(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),r=parseInt(t[1],10)/360,n=parseInt(t[2],10)/100,a=parseInt(t[3],10)/100,o=t[4]||1;function s(p,M,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?p+(M-p)*6*m:m<1/2?M:m<2/3?p+(M-p)*(2/3-m)*6:p}var u,i,h;if(n==0)u=i=h=a;else{var l=a<.5?a*(1+n):a+n-a*n,f=2*a-l;u=s(f,l,r+1/3),i=s(f,l,r),h=s(f,l,r-1/3)}return"rgba("+u*255+","+i*255+","+h*255+","+o+")"}function Ut(e){if(c.rgb(e))return Nt(e);if(c.hex(e))return Rt(e);if(c.hsl(e))return Wt(e)}function te(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function qt(e){if(he(e,"translate")||e==="perspective")return"px";if(he(e,"rotate")||he(e,"skew"))return"deg"}function Me(e,t){return c.fnc(e)?e(t.target,t.id,t.total):e}function Q(e,t){return e.getAttribute(t)}function Ce(e,t,r){var n=te(t);if(Ie([r,"deg","rad","turn"],n))return t;var a=me.CSS[t+r];if(!c.und(a))return a;var o=100,s=document.createElement(e.tagName),u=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;u.appendChild(s),s.style.position="absolute",s.style.width=o+r;var i=o/s.offsetWidth;u.removeChild(s);var h=i*parseFloat(t);return me.CSS[t+r]=h,h}function gt(e,t,r){if(t in e.style){var n=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(n)||"0";return r?Ce(e,a,r):a}}function $e(e,t){if(c.dom(e)&&!c.inp(e)&&(!c.nil(Q(e,t))||c.svg(e)&&e[t]))return"attribute";if(c.dom(e)&&Ie(jt,t))return"transform";if(c.dom(e)&&t!=="transform"&&gt(e,t))return"css";if(e[t]!=null)return"object"}function mt(e){if(c.dom(e)){for(var t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,n=new Map,a;a=r.exec(t);)n.set(a[1],a[2]);return n}}function Qt(e,t,r,n){var a=he(t,"scale")?1:0+qt(t),o=mt(e).get(t)||a;return r&&(r.transforms.list.set(t,o),r.transforms.last=t),n?Ce(e,o,n):o}function Se(e,t,r,n){switch($e(e,t)){case"transform":return Qt(e,t,n,r);case"css":return gt(e,t,r);case"attribute":return Q(e,t);default:return e[t]||0}}function Oe(e,t){var r=/^(\*=|\+=|-=)/.exec(e);if(!r)return e;var n=te(e)||0,a=parseFloat(t),o=parseFloat(e.replace(r[0],""));switch(r[0][0]){case"+":return a+o+n;case"-":return a-o+n;case"*":return a*o+n}}function pt(e,t){if(c.col(e))return Ut(e);if(/\s/g.test(e))return e;var r=te(e),n=r?e.substr(0,e.length-r.length):e;return t?n+t:n}function Ae(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Zt(e){return Math.PI*2*Q(e,"r")}function Kt(e){return Q(e,"width")*2+Q(e,"height")*2}function Yt(e){return Ae({x:Q(e,"x1"),y:Q(e,"y1")},{x:Q(e,"x2"),y:Q(e,"y2")})}function yt(e){for(var t=e.points,r=0,n,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=Ae(n,o)),n=o}return r}function Jt(e){var t=e.points;return yt(e)+Ae(t.getItem(t.numberOfItems-1),t.getItem(0))}function xt(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Zt(e);case"rect":return Kt(e);case"line":return Yt(e);case"polyline":return yt(e);case"polygon":return Jt(e)}}function Gt(e){var t=xt(e);return e.setAttribute("stroke-dasharray",t),t}function Xt(e){for(var t=e.parentNode;c.svg(t)&&c.svg(t.parentNode);)t=t.parentNode;return t}function bt(e,t){var r=t||{},n=r.el||Xt(e),a=n.getBoundingClientRect(),o=Q(n,"viewBox"),s=a.width,u=a.height,i=r.viewBox||(o?o.split(" "):[0,0,s,u]);return{el:n,viewBox:i,x:i[0]/1,y:i[1]/1,w:s,h:u,vW:i[2],vH:i[3]}}function er(e,t){var r=c.str(e)?ht(e)[0]:e,n=t||100;return function(a){return{property:a,el:r,svg:bt(r),totalLength:xt(r)*(n/100)}}}function tr(e,t,r){function n(l){l===void 0&&(l=0);var f=t+l>=1?t+l:0;return e.el.getPointAtLength(f)}var a=bt(e.el,e.svg),o=n(),s=n(-1),u=n(1),i=r?1:a.w/a.vW,h=r?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*i;case"y":return(o.y-a.y)*h;case"angle":return Math.atan2(u.y-s.y,u.x-s.x)*180/Math.PI}}function et(e,t){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=pt(c.pth(e)?e.totalLength:e,t)+"";return{original:n,numbers:n.match(r)?n.match(r).map(Number):[0],strings:c.str(e)||t?n.split(r):[]}}function Ve(e){var t=e?ye(c.arr(e)?e.map(Xe):Xe(e)):[];return pe(t,function(r,n,a){return a.indexOf(r)===n})}function wt(e){var t=Ve(e);return t.map(function(r,n){return{target:r,id:n,total:t.length,transforms:{list:mt(r)}}})}function rr(e,t){var r=De(t);if(/^spring/.test(r.easing)&&(r.duration=dt(r.easing)),c.arr(e)){var n=e.length,a=n===2&&!c.obj(e[0]);a?e={value:e}:c.fnc(t.duration)||(r.duration=t.duration/n)}var o=c.arr(e)?e:[e];return o.map(function(s,u){var i=c.obj(s)&&!c.pth(s)?s:{value:s};return c.und(i.delay)&&(i.delay=u?0:t.delay),c.und(i.endDelay)&&(i.endDelay=u===o.length-1?t.endDelay:0),i}).map(function(s){return xe(s,r)})}function nr(e){for(var t=pe(ye(e.map(function(o){return Object.keys(o)})),function(o){return c.key(o)}).reduce(function(o,s){return o.indexOf(s)<0&&o.push(s),o},[]),r={},n=function(o){var s=t[o];r[s]=e.map(function(u){var i={};for(var h in u)c.key(h)?h==s&&(i.value=u[h]):i[h]=u[h];return i})},a=0;a<t.length;a++)n(a);return r}function ar(e,t){var r=[],n=t.keyframes;n&&(t=xe(nr(n),t));for(var a in t)c.key(a)&&r.push({name:a,tweens:rr(t[a],e)});return r}function ir(e,t){var r={};for(var n in e){var a=Me(e[n],t);c.arr(a)&&(a=a.map(function(o){return Me(o,t)}),a.length===1&&(a=a[0])),r[n]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function or(e,t){var r;return e.tweens.map(function(n){var a=ir(n,t),o=a.value,s=c.arr(o)?o[1]:o,u=te(s),i=Se(t.target,e.name,u,t),h=r?r.to.original:i,l=c.arr(o)?o[0]:h,f=te(l)||te(i),p=u||f;return c.und(s)&&(s=h),a.from=et(l,p),a.to=et(Oe(s,l),p),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=Pe(a.easing,a.duration),a.isPath=c.pth(o),a.isPathTargetInsideSVG=a.isPath&&c.svg(t.target),a.isColor=c.col(a.from.original),a.isColor&&(a.round=1),r=a,a})}var _t={css:function(e,t,r){return e.style[t]=r},attribute:function(e,t,r){return e.setAttribute(t,r)},object:function(e,t,r){return e[t]=r},transform:function(e,t,r,n,a){if(n.list.set(t,r),t===n.last||a){var o="";n.list.forEach(function(s,u){o+=u+"("+s+") "}),e.style.transform=o}}};function kt(e,t){var r=wt(e);r.forEach(function(n){for(var a in t){var o=Me(t[a],n),s=n.target,u=te(o),i=Se(s,a,u,n),h=u||te(i),l=Oe(pt(o,h),i),f=$e(s,a);_t[f](s,a,l,n.transforms,!0)}})}function sr(e,t){var r=$e(e.target,t.name);if(r){var n=or(t,e),a=n[n.length-1];return{type:r,property:t.name,animatable:e,tweens:n,duration:a.end,delay:n[0].delay,endDelay:a.endDelay}}}function ur(e,t){return pe(ye(e.map(function(r){return t.map(function(n){return sr(r,n)})})),function(r){return!c.und(r)})}function Et(e,t){var r=e.length,n=function(o){return o.timelineOffset?o.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,e.map(function(o){return n(o)+o.duration})):t.duration,a.delay=r?Math.min.apply(Math,e.map(function(o){return n(o)+o.delay})):t.delay,a.endDelay=r?a.duration-Math.max.apply(Math,e.map(function(o){return n(o)+o.duration-o.endDelay})):t.endDelay,a}var tt=0;function lr(e){var t=Ee(ft,e),r=Ee(Te,e),n=ar(r,e),a=wt(e.targets),o=ur(a,n),s=Et(o,r),u=tt;return tt++,xe(t,{id:u,children:[],animatables:a,animations:o,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var H=[],Mt=function(){var e;function t(){!e&&(!rt()||!P.suspendWhenDocumentHidden)&&H.length>0&&(e=requestAnimationFrame(r))}function r(a){for(var o=H.length,s=0;s<o;){var u=H[s];u.paused?(H.splice(s,1),o--):(u.tick(a),s++)}e=s>0?requestAnimationFrame(r):void 0}function n(){P.suspendWhenDocumentHidden&&(rt()?e=cancelAnimationFrame(e):(H.forEach(function(a){return a._onDocumentVisibility()}),Mt()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),t}();function rt(){return!!document&&document.hidden}function P(e){e===void 0&&(e={});var t=0,r=0,n=0,a,o=0,s=null;function u(g){var d=window.Promise&&new Promise(function(T){return s=T});return g.finished=d,d}var i=lr(e);u(i);function h(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,a.forEach(function(d){return d.reversed=i.reversed})}function l(g){return i.reversed?i.duration-g:g}function f(){t=0,r=l(i.currentTime)*(1/P.speed)}function p(g,d){d&&d.seek(g-d.timelineOffset)}function M(g){if(i.reversePlayback)for(var T=o;T--;)p(g,a[T]);else for(var d=0;d<o;d++)p(g,a[d])}function m(g){for(var d=0,T=i.animations,V=T.length;d<V;){var k=T[d],F=k.animatable,Z=k.tweens,O=Z.length-1,x=Z[O];O&&(x=pe(Z,function(A){return g<A.end})[0]||x);for(var z=q(g-x.start-x.delay,0,x.duration)/x.duration,K=isNaN(z)?1:x.easing(z),I=x.to.strings,ie=x.round,re=[],ne=x.to.numbers.length,B=void 0,Y=0;Y<ne;Y++){var J=void 0,G=x.to.numbers[Y],ae=x.from.numbers[Y]||0;x.isPath?J=tr(x.value,K*G,x.isPathTargetInsideSVG):J=ae+K*(G-ae),ie&&(x.isColor&&Y>2||(J=Math.round(J*ie)/ie)),re.push(J)}var ue=I.length;if(!ue)B=re[0];else{B=I[0];for(var j=0;j<ue;j++){I[j];var le=I[j+1],fe=re[j];isNaN(fe)||(le?B+=fe+le:B+=fe+" ")}}_t[k.type](F.target,k.property,B,F.transforms),k.currentValue=B,d++}}function v(g){i[g]&&!i.passThrough&&i[g](i)}function w(){i.remaining&&i.remaining!==!0&&i.remaining--}function _(g){var d=i.duration,T=i.delay,V=d-i.endDelay,k=l(g);i.progress=q(k/d*100,0,100),i.reversePlayback=k<i.currentTime,a&&M(k),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),k<=T&&i.currentTime!==0&&m(0),(k>=V&&i.currentTime!==d||!d)&&m(d),k>T&&k<V?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),m(k)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=q(k,0,d),i.began&&v("update"),g>=d&&(r=0,w(),i.remaining?(t=n,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&h()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(s(),u(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,a=i.children,o=a.length;for(var d=o;d--;)i.children[d].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,m(i.reversed?i.duration:0)},i._onDocumentVisibility=f,i.set=function(g,d){return kt(g,d),i},i.tick=function(g){n=g,t||(t=n),_((n+(r-t))*P.speed)},i.seek=function(g){_(l(g))},i.pause=function(){i.paused=!0,f()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,H.push(i),f(),Mt())},i.reverse=function(){h(),i.completed=!i.reversed,f()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var d=Ve(g);Tt(d,i)},i.reset(),i.autoplay&&i.play(),i}function nt(e,t){for(var r=t.length;r--;)Ie(e,t[r].animatable.target)&&t.splice(r,1)}function Tt(e,t){var r=t.animations,n=t.children;nt(e,r);for(var a=n.length;a--;){var o=n[a],s=o.animations;nt(e,s),!s.length&&!o.children.length&&n.splice(a,1)}!r.length&&!n.length&&t.pause()}function fr(e){for(var t=Ve(e),r=H.length;r--;){var n=H[r];Tt(t,n)}}function cr(e,t){t===void 0&&(t={});var r=t.direction||"normal",n=t.easing?Pe(t.easing):null,a=t.grid,o=t.axis,s=t.from||0,u=s==="first",i=s==="center",h=s==="last",l=c.arr(e),f=parseFloat(l?e[0]:e),p=l?parseFloat(e[1]):0,M=te(l?e[1]:e)||0,m=t.start||0+(l?f:0),v=[],w=0;return function(_,g,d){if(u&&(s=0),i&&(s=(d-1)/2),h&&(s=d-1),!v.length){for(var T=0;T<d;T++){if(!a)v.push(Math.abs(s-T));else{var V=i?(a[0]-1)/2:s%a[0],k=i?(a[1]-1)/2:Math.floor(s/a[0]),F=T%a[0],Z=Math.floor(T/a[0]),O=V-F,x=k-Z,z=Math.sqrt(O*O+x*x);o==="x"&&(z=-O),o==="y"&&(z=-x),v.push(z)}w=Math.max.apply(Math,v)}n&&(v=v.map(function(I){return n(I/w)*w})),r==="reverse"&&(v=v.map(function(I){return o?I<0?I*-1:-I:Math.abs(w-I)}))}var K=l?(p-f)/w:f;return m+K*(Math.round(v[g]*100)/100)+M}}function dr(e){e===void 0&&(e={});var t=P(e);return t.duration=0,t.add=function(r,n){var a=H.indexOf(t),o=t.children;a>-1&&H.splice(a,1);function s(p){p.passThrough=!0}for(var u=0;u<o.length;u++)s(o[u]);var i=xe(r,Ee(Te,e));i.targets=i.targets||e.targets;var h=t.duration;i.autoplay=!1,i.direction=t.direction,i.timelineOffset=c.und(n)?h:Oe(n,h),s(t),t.seek(i.timelineOffset);var l=P(i);s(l),o.push(l);var f=Et(o,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}P.version="3.2.1";P.speed=1;P.suspendWhenDocumentHidden=!0;P.running=H;P.remove=fr;P.get=Se;P.set=kt;P.convertPx=Ce;P.path=er;P.setDashoffset=Gt;P.stagger=cr;P.timeline=dr;P.easing=Pe;P.penner=vt;P.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const{document:at}=Lt;function vr(e){let t;return{c(){t=W("Play Now")},l(r){t=U(r,"Play Now")},m(r,n){se(r,t,n)},d(r){r&&b(t)}}}function it(e){let t;return{c(){t=C("div"),this.h()},l(r){t=$(r,"DIV",{class:!0}),S(t).forEach(b),this.h()},h(){E(t,"class","px-4")},m(r,n){se(r,t,n)},d(r){r&&b(t)}}}function hr(e){let t;return{c(){t=W("Discover")},l(r){t=U(r,"Discover")},m(r,n){se(r,t,n)},d(r){r&&b(t)}}}function ot(e){let t;return{c(){t=C("div"),this.h()},l(r){t=$(r,"DIV",{class:!0}),S(t).forEach(b),this.h()},h(){E(t,"class","w-1/5")},m(r,n){se(r,t,n)},d(r){r&&b(t)}}}function gr(e){let t,r,n,a,o,s,u,i,h,l,f,p,M,m,v,w,_,g,d,T,V,k,F,Z,O,x,z,K,I,ie,re,ne,B,Y,J,G,ae,ue,j,le,fe;Ot(e[4]),x=new Ge({props:{$$slots:{default:[vr]},$$scope:{ctx:e}}});let A=e[1]>768&&it();I=new Ge({props:{$$slots:{default:[hr]},$$scope:{ctx:e}}});let L=e[1]>768&&ot();return{c(){t=N(),r=C("main"),n=C("div"),a=C("div"),o=C("div"),s=C("h1"),u=C("span"),i=W("Explore"),h=N(),l=C("h1"),f=C("span"),p=W("Create"),M=N(),m=C("h1"),v=C("span"),w=W("Play"),g=N(),d=C("h2"),T=W("Over "),V=C("span"),k=W(e[3]),F=W(`\r
        of the latest and best datapacks from creators across the globe`),Z=N(),O=C("div"),Ze(x.$$.fragment),z=N(),A&&A.c(),K=N(),Ze(I.$$.fragment),ie=N(),L&&L.c(),re=N(),ne=C("div"),B=C("h2"),Y=W("Content here"),J=N(),G=C("div"),ae=C("h2"),ue=W("Content here"),this.h()},l(D){At("svelte-1dkapgb",at.head).forEach(b),t=R(D),r=$(D,"MAIN",{class:!0});var oe=S(r);n=$(oe,"DIV",{class:!0});var ee=S(n);a=$(ee,"DIV",{class:!0});var ce=S(a);o=$(ce,"DIV",{class:!0});var de=S(o);s=$(de,"H1",{id:!0,class:!0});var Le=S(s);u=$(Le,"SPAN",{class:!0});var Be=S(u);i=U(Be,"Explore"),Be.forEach(b),Le.forEach(b),h=R(de),l=$(de,"H1",{id:!0,class:!0});var Fe=S(l);f=$(Fe,"SPAN",{class:!0});var je=S(f);p=U(je,"Create"),je.forEach(b),Fe.forEach(b),M=R(de),m=$(de,"H1",{id:!0,class:!0});var He=S(m);v=$(He,"SPAN",{class:!0});var ze=S(v);w=U(ze,"Play"),ze.forEach(b),He.forEach(b),de.forEach(b),g=R(ce),d=$(ce,"H2",{class:!0});var ge=S(d);T=U(ge,"Over "),V=$(ge,"SPAN",{title:!0,class:!0});var Ne=S(V);k=U(Ne,e[3]),Ne.forEach(b),F=U(ge,`\r
        of the latest and best datapacks from creators across the globe`),ge.forEach(b),Z=R(ce),O=$(ce,"DIV",{class:!0});var ve=S(O);Ke(x.$$.fragment,ve),z=R(ve),A&&A.l(ve),K=R(ve),Ke(I.$$.fragment,ve),ve.forEach(b),ce.forEach(b),ie=R(ee),L&&L.l(ee),re=R(ee),ne=$(ee,"DIV",{class:!0});var Re=S(ne);B=$(Re,"H2",{});var We=S(B);Y=U(We,"Content here"),We.forEach(b),Re.forEach(b),ee.forEach(b),J=R(oe),G=$(oe,"DIV",{class:!0});var Ue=S(G);ae=$(Ue,"H2",{});var qe=S(ae);ue=U(qe,"Content here"),qe.forEach(b),Ue.forEach(b),oe.forEach(b),this.h()},h(){at.title="Datapack Hub",E(u,"class","letters text-dph-orange inline-block"),E(s,"id","indexText1"),E(s,"class","split-text text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl font-brand font-bold inline-block overflow-y-hidden absolute md:text-left md:left-0 md:translate-x-0 left-1/2 -translate-x-1/2 text-center w-full md:w-auto"),E(f,"class","letters text-dph-orange inline-block"),E(l,"id","indexText2"),E(l,"class","split-text text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl font-brand font-bold inline-block overflow-y-hidden absolute md:text-left md:left-0 md:translate-x-0 left-1/2 -translate-x-1/2 text-center w-full md:w-auto"),E(v,"class","letters text-dph-orange inline-block"),E(m,"id","indexText3"),E(m,"class","split-text text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl font-brand font-bold inline-block overflow-y-hidden absolute md:text-left md:left-0 md:translate-x-0 left-1/2 -translate-x-1/2 text-center w-full md:w-auto"),E(o,"class",_="relative w-full h-[4.5rem] md:h-24 lg:h-32 xl:h-40 "+(e[0]?"visible":"invisible")),E(V,"title",e[2].toString()),E(V,"class","font-bold text-gradient from-pink-600 to-yellow-400 bg-gradient-to-br"),E(d,"class","dark:text-new-white text-black mt-0 text-xl sm:text-2xl md:text-3xl xl:text-4xl md:text-left text-center w-full md:w-auto"),E(O,"class","flex justify-evenly md:justify-start w-full items-center mt-8 md:mt-16"),E(a,"class","md:w-3/5 lg:w-2/5 w-2/3 mt-16 md:mt-0"),E(ne,"class","w-4/5 my-8 sm:my-16 md:mt-0 md:w-2/5 dark:bg-stone-800 bg-dark-white h-full md:h-2/3 rounded-xl"),E(n,"class","flex md:flex-row flex-col justify-start items-center w-screen overflow-visible px-0 sm:px-8 md:px-16 lg:px-24 h-[66.666vh]"),E(G,"class","dark:bg-stone-800 bg-dark-white h-[33.333vh] w-screen"),E(r,"class","dark:bg-stone-900 bg-new-white transition-all")},m(D,X){se(D,t,X),se(D,r,X),y(r,n),y(n,a),y(a,o),y(o,s),y(s,u),y(u,i),y(o,h),y(o,l),y(l,f),y(f,p),y(o,M),y(o,m),y(m,v),y(v,w),y(a,g),y(a,d),y(d,T),y(d,V),y(V,k),y(d,F),y(a,Z),y(a,O),Ye(x,O,null),y(O,z),A&&A.m(O,null),y(O,K),Ye(I,O,null),y(n,ie),L&&L.m(n,null),y(n,re),y(n,ne),y(ne,B),y(B,Y),y(r,J),y(r,G),y(G,ae),y(ae,ue),j=!0,le||(fe=we(window,"resize",e[4]),le=!0)},p(D,[X]){(!j||X&1&&_!==(_="relative w-full h-[4.5rem] md:h-24 lg:h-32 xl:h-40 "+(D[0]?"visible":"invisible")))&&E(o,"class",_);const oe={};X&32&&(oe.$$scope={dirty:X,ctx:D}),x.$set(oe),D[1]>768?A||(A=it(),A.c(),A.m(O,K)):A&&(A.d(1),A=null);const ee={};X&32&&(ee.$$scope={dirty:X,ctx:D}),I.$set(ee),D[1]>768?L||(L=ot(),L.c(),L.m(n,re)):L&&(L.d(1),L=null)},i(D){j||(_e(x.$$.fragment,D),_e(I.$$.fragment,D),j=!0)},o(D){ke(x.$$.fragment,D),ke(I.$$.fragment,D),j=!1},d(D){D&&b(t),D&&b(r),Je(x),A&&A.d(),Je(I),L&&L.d(),le=!1,fe()}}}function mr(e,t,r){let n=Math.floor(Math.random()*1e7),a=Intl.NumberFormat("en",{notation:"compact"}).format(n),o=!1,s;Vt(async()=>{document.querySelectorAll(".split-text .letters").forEach(h=>{h.innerHTML=h.textContent.replace(/\S/g,"<span class='letter'>$&</span>")}),P.timeline({loop:!0,autoplay:!0}).add({targets:"#indexText1 .letter",translateY:["1.1em",0],duration:750,delay:(h,l)=>50*l}).add({targets:"#indexText1",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3}).add({targets:"#indexText2 .letter",translateY:["1.1em",0],duration:750,delay:(h,l)=>50*l}).add({targets:"#indexText2",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3}).add({targets:"#indexText3 .letter",translateY:["1.1em",0],duration:750,delay:(h,l)=>50*l}).add({targets:"#indexText3",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3}),r(0,o=!0)});function u(){r(1,s=window.innerWidth)}return[o,s,n,a,u]}class yr extends st{constructor(t){super(),ut(this,t,mr,gr,lt,{})}}export{yr as default};
