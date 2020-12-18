/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
var shimFeatures={"no-bootstrap":!0,"intersection-observer":!1,"resize-observer":!1,"web-animations":!1,"build-fetch":!1,inert:!1};window.DojoHasEnvironment&&window.DojoHasEnvironment.staticFeatures&&Object.keys(window.DojoHasEnvironment.staticFeatures).forEach(function(e){shimFeatures[e]=window.DojoHasEnvironment.staticFeatures[e]}),window.DojoHasEnvironment={staticFeatures:shimFeatures},function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("lib_apconf2020",[],r):"object"==typeof exports?exports.lib_apconf2020=r():e.lib_apconf2020=r()}(window,function(){return function(e){function r(r){for(var n,t,s=r[0],a=r[1],c=0,o=[];c<s.length;c++)t=s[c],i[t]&&o.push(i[t][0]),i[t]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(d&&d(r);o.length;)o.shift()()}var n={},t={bootstrap:0},i={bootstrap:0};function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var r=[];t[e]?r.push(t[e]):0!==t[e]&&{main:1,"src/bof/BOF":1,"src/cfp/CFP":1,"src/credits/Credits":1,"src/live/Live":1,"src/privacy/Privacy":1,"src/register/Register":1,"src/roadmap/Roadmap":1,"src/talks/Talks":1}[e]&&r.push(t[e]=new Promise(function(r,n){for(var t=({main:"main","runtime/IntersectionObserver":"runtime/IntersectionObserver","runtime/ResizeObserver":"runtime/ResizeObserver","runtime/WebAnimations":"runtime/WebAnimations","runtime/blocks":"runtime/blocks","runtime/client":"runtime/client","runtime/fetch":"runtime/fetch","runtime/inert":"runtime/inert","runtime/pointerEvents":"runtime/pointerEvents","src/_nls/de/main":"src/_nls/de/main","src/_nls/fr/main":"src/_nls/fr/main","src/bof/BOF":"src/bof/BOF","src/cfp/CFP":"src/cfp/CFP","src/credits/Credits":"src/credits/Credits","src/live/Live":"src/live/Live","src/privacy/Privacy":"src/privacy/Privacy","src/register/Register":"src/register/Register","src/roadmap/Roadmap":"src/roadmap/Roadmap","src/talks/Talks":"src/talks/Talks","src/cfp/nls/de/main":"src/cfp/nls/de/main","src/cfp/nls/fr/main":"src/cfp/nls/fr/main","src/credits/nls/de/main":"src/credits/nls/de/main","src/credits/nls/fr/main":"src/credits/nls/fr/main","src/privacy/nls/de/main":"src/privacy/nls/de/main","src/privacy/nls/fr/main":"src/privacy/nls/fr/main","src/register/nls/de/main":"src/register/nls/de/main","src/register/nls/fr/main":"src/register/nls/fr/main"}[e]||e)+"."+{main:"dfb39690ae026e725fe9","runtime/IntersectionObserver":"31d6cfe0d16ae931b73c","runtime/ResizeObserver":"31d6cfe0d16ae931b73c","runtime/WebAnimations":"31d6cfe0d16ae931b73c","runtime/blocks":"31d6cfe0d16ae931b73c","runtime/client":"31d6cfe0d16ae931b73c","runtime/fetch":"31d6cfe0d16ae931b73c","runtime/inert":"31d6cfe0d16ae931b73c","runtime/pointerEvents":"31d6cfe0d16ae931b73c","src/_nls/de/main":"31d6cfe0d16ae931b73c","src/_nls/fr/main":"31d6cfe0d16ae931b73c","src/bof/BOF":"57918c8551a3c77da40d","src/cfp/CFP":"f6e429b389278a8cb7b3","src/credits/Credits":"f6e429b389278a8cb7b3","src/live/Live":"94ec0e782b47831ba374","src/privacy/Privacy":"f6e429b389278a8cb7b3","src/register/Register":"c56542697ff08e4cb06a","src/roadmap/Roadmap":"54e624691af7ba81853b","src/talks/Talks":"57918c8551a3c77da40d","src/cfp/nls/de/main":"31d6cfe0d16ae931b73c","src/cfp/nls/fr/main":"31d6cfe0d16ae931b73c","src/credits/nls/de/main":"31d6cfe0d16ae931b73c","src/credits/nls/fr/main":"31d6cfe0d16ae931b73c","src/privacy/nls/de/main":"31d6cfe0d16ae931b73c","src/privacy/nls/fr/main":"31d6cfe0d16ae931b73c","src/register/nls/de/main":"31d6cfe0d16ae931b73c","src/register/nls/fr/main":"31d6cfe0d16ae931b73c"}[e]+".bundle.css",i=s.p+t,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var o=(f=a[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(o===t||o===i))return r()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){var f;if((o=(f=d[c]).getAttribute("data-href"))===t||o===i)return r()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=r,l.onerror=function(r){var t=r&&r.target&&r.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");s.request=t,n(s)},l.href=i,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){t[e]=0}));var n=i[e];if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(function(r,t){n=i[e]=[r,t]});r.push(n[2]=a);var c,o=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=function(e){return s.p+""+({main:"main","runtime/IntersectionObserver":"runtime/IntersectionObserver","runtime/ResizeObserver":"runtime/ResizeObserver","runtime/WebAnimations":"runtime/WebAnimations","runtime/blocks":"runtime/blocks","runtime/client":"runtime/client","runtime/fetch":"runtime/fetch","runtime/inert":"runtime/inert","runtime/pointerEvents":"runtime/pointerEvents","src/_nls/de/main":"src/_nls/de/main","src/_nls/fr/main":"src/_nls/fr/main","src/bof/BOF":"src/bof/BOF","src/cfp/CFP":"src/cfp/CFP","src/credits/Credits":"src/credits/Credits","src/live/Live":"src/live/Live","src/privacy/Privacy":"src/privacy/Privacy","src/register/Register":"src/register/Register","src/roadmap/Roadmap":"src/roadmap/Roadmap","src/talks/Talks":"src/talks/Talks","src/cfp/nls/de/main":"src/cfp/nls/de/main","src/cfp/nls/fr/main":"src/cfp/nls/fr/main","src/credits/nls/de/main":"src/credits/nls/de/main","src/credits/nls/fr/main":"src/credits/nls/fr/main","src/privacy/nls/de/main":"src/privacy/nls/de/main","src/privacy/nls/fr/main":"src/privacy/nls/fr/main","src/register/nls/de/main":"src/register/nls/de/main","src/register/nls/fr/main":"src/register/nls/fr/main"}[e]||e)+"."+{main:"0ce9653154fd471a64b1","runtime/IntersectionObserver":"308bf340cc3e3c702f91","runtime/ResizeObserver":"5b5dc5c9c5409b33cd17","runtime/WebAnimations":"ae4cac47c7bd6d45b9ed","runtime/blocks":"7dfa9096a5982a86ff36","runtime/client":"0b0def565384d36e3841","runtime/fetch":"c974b1798261e3f1f762","runtime/inert":"ca9b421ea54ee3fbc2be","runtime/pointerEvents":"801ed543166291b9edc6","src/_nls/de/main":"0cc1346c7c782492a169","src/_nls/fr/main":"c9c01f66ba94d8d682a3","src/bof/BOF":"517488199156b6b425ce","src/cfp/CFP":"aa371051f2525b9576a8","src/credits/Credits":"8dad77f759eca28e0463","src/live/Live":"8dee7c6c4e23eed1b594","src/privacy/Privacy":"2b26658fc78db36d96ef","src/register/Register":"e201c1f1e742eb08a1b2","src/roadmap/Roadmap":"de361a7e049cfbae5348","src/talks/Talks":"84f2b576a7f32bd33fc7","src/cfp/nls/de/main":"709c167173b890f1a667","src/cfp/nls/fr/main":"b76ff8145b5fed6523ae","src/credits/nls/de/main":"d6540f070ff20381af6f","src/credits/nls/fr/main":"133632fa8f84391902fc","src/privacy/nls/de/main":"0b4ae280c80caf2d1573","src/privacy/nls/fr/main":"c9a61968013e3095b172","src/register/nls/de/main":"ad0cdf3899eb40ff7391","src/register/nls/fr/main":"fd3562d930e1d27b843b"}[e]+".bundle.js"}(e),c=function(r){d.onerror=d.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src,a=new Error("Loading chunk "+e+" failed.\n("+t+": "+s+")");a.type=t,a.request=s,n[1](a)}i[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,o.appendChild(d)}return Promise.all(r)},s.m=e,s.c=n,s.d=function(e,r,n){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)s.d(n,t,function(r){return e[r]}.bind(null,t));return n},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="",s.oe=function(e){throw console.error(e),e};var a=window.dojoWebpackJsonpapconf2020=window.dojoWebpackJsonpapconf2020||[],c=a.push.bind(a);a.push=r,a=a.slice();for(var o=0;o<a.length;o++)r(a[o]);var d=c;return s(s.s=4)}([function(e,r,n){"use strict";n.r(r),function(e){const n="undefined"!=typeof window&&window.navigator.userAgent.indexOf("jsdom")>-1?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:void 0;r.default=n}.call(this,n(3))},function(e,r,n){"use strict";n.r(r),n.d(r,"testCache",function(){return i}),n.d(r,"testFunctions",function(){return s}),n.d(r,"normalize",function(){return o}),n.d(r,"exists",function(){return d}),n.d(r,"add",function(){return f}),n.d(r,"default",function(){return l});var t=n(0);const i={},s={},{staticFeatures:a}=t.default.DojoHasEnvironment||{};"DojoHasEnvironment"in t.default&&delete t.default.DojoHasEnvironment;const c=a?"function"==typeof a?a.apply(t.default):a:{};function o(e,r){const n=e.match(/[\?:]|[^:\?]*/g)||[];let t=0;const i=function e(r){const i=n[t++];return":"===i?null:"?"===n[t++]?!r&&l(i)?e():(e(!0),e(r)):i}();return i&&r(i)}function d(e){const r=e.toLowerCase();return Boolean(r in c||r in i||s[r])}function f(e,r,n=!1){const t=e.toLowerCase();if(d(t)&&!n&&!(t in c))throw new TypeError(`Feature "${e}" exists and overwrite not true.`);"function"==typeof r?s[t]=r:(i[t]=r,delete s[t])}function l(e,r=!1){let n;const t=e.toLowerCase();if(t in c)n=c[t];else if(s[t])n=i[t]=s[t].call(null),delete s[t];else if(t in i)n=i[t];else if(r)throw new TypeError(`Attempt to detect unregistered has feature "${e}"`);return n}f("public-path",void 0),f("dojo-debug",!1),f("host-browser",!0),f("host-jsdom","undefined"!=typeof navigator&&-1!==navigator.userAgent.indexOf("jsdom")),f("host-node",!1),f("fetch",!0),f("es6-array",!0),f("es6-array-fill",!0),f("es7-array",!0),f("es2019-array",!0),f("es6-map",!0),f("es6-iterator",!0),f("es6-math",!0),f("es6-math-imul",!0),f("es6-object",!0),f("es2017-object",!0),f("es-observable",!1),f("es6-promise",!0),f("es2018-promise-finally",()=>void 0!==t.default.Promise.prototype.finally,!0),f("es6-set",!0),f("es6-string",!0),f("es6-string-raw",!0),f("es2017-string",!0),f("es6-symbol",!0),f("es6-weakmap",!0),f("microtasks",!0),f("postmessage",!0),f("raf",!0),f("setimmediate",!1),f("dom-mutationobserver",!0),f("dom-webanimation",()=>void 0!==t.default.Animation&&void 0!==t.default.KeyframeEffect,!0),f("abort-controller",()=>void 0!==t.default.AbortController),f("abort-signal",()=>void 0!==t.default.AbortSignal),f("dom-intersection-observer",()=>void 0!==t.default.IntersectionObserver,!0),f("dom-resize-observer",()=>void 0!==t.default.ResizeObserver,!0),f("dom-pointer-events",()=>void 0!==t.default.onpointerdown,!0),f("dom-css-variables",!0),f("dom-inert",()=>Element.prototype.hasOwnProperty("inert"),!0),f("build-elide",!1),f("test",!1),f("global-this",()=>void 0!==t.default.globalThis)},function(e,r,n){"use strict";n.r(r),n.d(r,"ShimPromise",function(){return s}),n.d(r,"isThenable",function(){return a});var t=n(0),i=n(1);let s=t.default.Promise;const a=function(e){return e&&"function"==typeof e.then};Object(i.default)("es2018-promise-finally")||(t.default.Promise.prototype.finally=function(e){return this.then(e&&(r=>Promise.resolve(e()).then(()=>r)),e&&(r=>Promise.resolve(e()).then(()=>{throw r})))}),r.default=s},function(e,r){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,r,n){n(5),n(2),e.exports=n(8)},function(e,r,n){},,,function(e,r,n){var t=n(1),i=n(9).default;n(10);var s=[];t.default("build-serve")&&(s.push(n.e("runtime/client").then(n.t.bind(null,11,7))),s.push(n.e("runtime/client").then(n.t.bind(null,12,7)))),t.default("build-blocks")&&s.push(n.e("runtime/blocks").then(n.t.bind(null,13,7))),t.default("intersection-observer")&&!t.default("dom-intersection-observer")&&s.push(n.e("runtime/IntersectionObserver").then(n.bind(null,14))),t.default("build-fetch"),t.default("web-animations")&&!t.default("dom-webanimation")&&s.push(n.e("runtime/WebAnimations").then(n.bind(null,16))),t.default("resize-observer")&&!t.default("dom-resize-observer")&&s.push(n.e("runtime/ResizeObserver").then(n.bind(null,17))),t.default("inert")&&!t.default("dom-inert")&&s.push(n.e("runtime/inert").then(n.t.bind(null,18,7))),t.default("dom-pointer-events")||s.push(n.e("runtime/pointerEvents").then(n.bind(null,19))),s.push(i),e.exports=Promise.all(s).then(function(){return n.e("main").then(n.bind(null,20))})},function(e,r,n){"use strict";n.r(r),r.default=Promise.resolve()},function(e,r,n){var t=n(1),i=n(0);i.default.apconf2020||(i.default.apconf2020={}),t.exists("build-time-render")||t.add("build-time-render",!1,!1),t.exists("build-serve")||t.add("build-serve",!1,!1);var s=i.default.apconf2020.base?i.default.apconf2020.base:i.default.__app_base__,a=i.default.apconf2020.publicPath?i.default.apconf2020.publicPath:i.default.__public_path__,c=i.default.apconf2020.publicOrigin?i.default.apconf2020.publicOrigin:i.default.__public_origin__;if(t.add("app-base",s||"/",!0),a||c){var o=c||window.location.origin;a&&(o+=a,t.add("public-path",a,!0)),n.p=o}}])});
//# sourceMappingURL=bootstrap.23a0f850556bb89d3705.bundle.js.map