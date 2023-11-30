(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),s=t(667),l=t.n(s),c=new URL(t(765),t.b),f=i()(a()),u=l()(c);f.push([n.id,`/* css reset */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* site styles */\n\nbody {\n    background-image: url(${u});\n}\n\n.layout {\n    align-items: center;\n    /* background: red; */\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 50px;\n    height: calc(100vh - 100px);\n    margin: 50px;\n    width: calc(100vw - 100px);\n}\n\n.an-watch-face {\n    align-items: center;\n    background-color: rgba(80, 80, 80, 0.8);\n    background-size: cover;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    height: min(80vh, 80vw);\n    width: min(80vh, 80vw);\n}\n\n.clock-center {\n    background-color: #fff;\n    border-radius: 50%;\n    height: 10px;\n    overflow: visible;\n    position: relative;\n    width: 10px;\n}\n\n.hand {\n    background-color: #fff;\n    position: absolute;\n    left: 5px;\n    height: 4px;\n    top: 3px;\n    transform-origin: left;\n    transform: rotate(-90deg);\n}\n.second {\n    width: min(35vh, 35vw);\n}\n\n.minute {\n    width: min(30vh, 30vw);\n}\n\n.hour {\n    width: min(25vh, 25vw);\n}   \n\n.di-watch-face {\n    background-color: rgba(80, 80, 80, 0.8);\n    background-size: cover;\n    border: 2px solid #fff;\n    border-radius: 5%;\n    padding: 20px;\n    width: fit-content;\n}\n\n.digital-watch {\n    color: #fff;\n    font-family: 'DM Mono', monospace;\n    font-size: 48px;\n}\n\n.mike-button {\n    background-color: #fff;\n    border: none;\n    border-radius: 5%;\n    cursor: pointer;\n    font-size: 20px;\n    padding: 5px 20px;\n    position: absolute;\n    top: 30px;\n    right: 30px;\n}\n\n.mike-button:active {\n    transform: scale(0.8);\n}\n\n/* Snowflake animations */\n\n/* customizable snowflake styling */\n.snowflake {\n    color: #fff;\n    font-size: 1em;\n    font-family: Arial;\n    text-shadow: 0 0 1px #000;\n  }\n  \n@-webkit-keyframes snowflakes-fall {\n    0% {\n        top: -10%;\n    }\n    100% {\n        top: 100%;\n    }\n}\n\n@-webkit-keyframes snowflakes-shake {\n    0% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n    }\n\n    50% {\n        -webkit-transform:translateX(80px);\n        transform:translateX(80px);\n    }\n\n    100% {\n        -webkit-transform:translateX(0px);\n        transform:translateX(0px);\n    }\n}\n\n@keyframes snowflakes-fall {\n    0% {\n        top:-10%;\n    }\n    \n    100% {\n        top:100%;\n    }\n}\n\n@keyframes snowflakes-shake {\n    0% {\n        transform:translateX(0px);\n    }\n    \n    50% {\n        transform:translateX(80px);\n    }\n    \n    100% {\n        transform:translateX(0px);\n    }\n}\n  \n.snowflake {\n    position: fixed;\n    top: -10%;\n    z-index: 9999;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default;\n    -webkit-animation-name: snowflakes-fall, snowflakes-shake;\n    -webkit-animation-duration: 10s, 3s;\n    -webkit-animation-timing-function: linear, ease-in-out;\n    -webkit-animation-iteration-count: infinite, infinite;\n    -webkit-animation-play-state: running, running;\n    animation-name: snowflakes-fall, snowflakes-shake;\n    animation-duration: 10s, 3s;\n    animation-timing-function: linear, ease-in-out;\n    animation-iteration-count: infinite, infinite;\n    animation-play-state: running, running\n}\n\n.snowflake:nth-of-type(0) {\n    left: 1%;\n    -webkit-animation-delay: 0s,0s;\n    animation-delay: 0s, 0s\n}\n\n.snowflake:nth-of-type(1) {\n    left: 10%;\n    -webkit-animation-delay: 1s, 1s;\n    animation-delay: 1s, 1s\n}\n\n.snowflake:nth-of-type(2) {\n    left: 20%;\n    -webkit-animation-delay: 6s, .5s;\n    animation-delay: 6s, .5s\n}\n\n.snowflake:nth-of-type(3) {\n    left: 30%;\n    -webkit-animation-delay: 4s, 2s;\n    animation-delay: 4s, 2s\n}\n\n.snowflake:nth-of-type(4) {\n    left: 40%;\n    -webkit-animation-delay: 2s, 2s;\n    animation-delay: 2s, 2s\n}\n\n.snowflake:nth-of-type(5) {\n    left: 50%;\n    -webkit-animation-delay: 8s, 3s;\n    animation-delay: 8s, 3s\n}\n\n.snowflake:nth-of-type(6) {\n    left: 60%;\n    -webkit-animation-delay: 6s, 2s;\n    animation-delay: 6s, 2s\n}\n\n.snowflake:nth-of-type(7) {\n    left: 70%;\n    -webkit-animation-delay: 2.5s, 1s;\n    animation-delay: 2.5s, 1s\n}\n\n.snowflake:nth-of-type(8) {\n    left: 80%;\n    -webkit-animation-delay: 1s, 0s;\n    animation-delay: 1s, 0s\n}\n\n.snowflake:nth-of-type(9) {\n    left: 90%;\n    -webkit-animation-delay: 3s, 1.5s;\n    animation-delay: 3s, 1.5s\n}\n`,""]);const d=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var f=[].concat(n[c]);o&&i[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),e.push(f))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],f=r[c]||0,u="".concat(c," ").concat(f);r[c]=f+1;var d=t(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var m=a(p,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var l=o(n,a),c=0;c<r.length;c++){var f=t(r[c]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}r=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},765:(n,e,t)=>{n.exports=t.p+"21f20729019ce7d7d92e.jpg"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),a=t.n(o),r=t(569),i=t.n(r),s=t(565),l=t.n(s),c=t(216),f=t.n(c),u=t(589),d=t.n(u),p=t(28),m={};m.styleTagTransform=d(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const g=t.p+"images/bg.jpg",h=t.p+"images/catBg.jpeg",b=[t.p+"images/clockBg.jpeg",t.p+"images/clockBg1.jpeg",t.p+"images/clockBg2.jpeg",t.p+"images/clockBg3.jpeg",t.p+"images/clockBg4.jpeg",t.p+"images/clockBg5.jpeg"];document.querySelector("body").style.backgroundImage=`url(${g})`;const y=document.querySelector(".an-watch-face"),k=document.querySelector(".di-watch-face");let v=!1;document.querySelector(".mike-button").addEventListener("click",(()=>{if(v)y.style.backgroundImage="none",k.style.backgroundImage="none",v=!1;else{const n=(()=>{const n=Math.floor(Math.random()*b.length);return b[n]})();y.style.backgroundImage=`url(${n})`,k.style.backgroundImage=`url(${h})`,v=!0}}));const w=document.querySelector(".second"),x=document.querySelector(".minute"),S=document.querySelector(".hour"),q=document.querySelector(".hours-di"),j=document.querySelector(".minutes-di"),M=()=>{const n=new Date,e=n.getSeconds(),t=n.getMinutes(),o=n.getHours();w.style.transform=`rotate(${6*e-90}deg)`,x.style.transform=`rotate(${6*t-90}deg)`,S.style.transform=`rotate(${30*o+t/2-90}deg)`,q.textContent=`${o<10?`0${o}`:o}`,j.textContent=`${t<10?`0${t}`:t}`};M();const $=document.querySelector(".colon");let I=!0;setInterval(M,1e3),setInterval((()=>{$.style.color=I?"#fff":"rgba(0, 0, 0, 0)",I=!I}),600)})()})();