!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.airplay=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.airplay=t())}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){var n=r(1);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(3)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-airplay{position:relative;-webkit-order:11;-moz-box-ordinal-group:12;order:11;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon{margin-top:6px;margin-left:6px}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon .xgplayer-icon-airplay{display:block}.xgplayer-skin-default .xgplayer-airplay .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-airplay .xgplayer-tips .xgplayer-tip-airplay{display:block}.xgplayer-skin-default .xgplayer-airplay:hover{opacity:.85}.xgplayer-skin-default .xgplayer-airplay:hover .xgplayer-tips{display:block}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[r].concat(o).concat([i]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n,i,o={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),l=function(e){return document.querySelector(e)},s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=l.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,p=0,f=[],u=r(4);function d(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(x(n.parts[a],t))}else{var l=[];for(a=0;a<n.parts.length;a++)l.push(x(n.parts[a],t));o[n.id]={id:n.id,refs:1,parts:l}}}}function y(e,t){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}function h(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),f.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,i)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function g(e){var t=document.createElement("style");return e.attrs.type="text/css",b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function x(e,t){var r,n,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var a=p++;r=c||(c=g(t)),n=k.bind(null,r,a,!1),i=k.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),n=L.bind(null,r,t),i=function(){v(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(t),n=j.bind(null,r),i=function(){v(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=y(e,t);return d(r,t),function(e){for(var n=[],i=0;i<r.length;i++){var a=r[i];(l=o[a.id]).refs--,n.push(l)}e&&d(y(e,t),t);for(i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete o[l.id]}}}};var m,w=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function k(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function j(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function L(e,t,r){var n=r.css,i=r.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(n=u(n)),i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([n],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,r){"use strict";r.r(t);var n={name:"airplay",method:function(){let e=this;function t(){e.video.webkitShowPlaybackTargetPicker()}e.config.airplay&&window.WebKitPlaybackTargetAvailabilityEvent&&(e.on("airplayBtnClick",t),e.once("destroy",(function r(){e.off("airplayBtnClick",t),e.off("destroy",r)})))}};function i(e="div",t="",r={},n=""){let i=document.createElement(e);return i.className=n,i.innerHTML=t,Object.keys(r).forEach(t=>{let n=t,o=r[t];"video"===e||"audio"===e?o&&i.setAttribute(n,o):i.setAttribute(n,o)}),i}r(0);var o={name:"s_airplay",method:function(){let e=this;if(!e.config.airplay||!window.WebKitPlaybackTargetAvailabilityEvent)return;let t=i("xg-airplay",'<xg-icon class="xgplayer-icon">\n    <div class="xgplayer-icon-airplay"><svg t="1600422191774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3100" width="28" height="28"><path d="M256 938.666667h512L512 597.333333 256 938.666667z m170.666667-85.333334l85.333333-113.781333L597.333333 853.333333H426.666667zM853.333333 85.333333H170.666667C99.946667 85.333333 42.666667 142.613333 42.666667 213.333333v426.666667c0 70.72 57.28 128 128 128h106.666666l64-85.333333H170.666667c-23.573333 0-42.666667-19.093333-42.666667-42.666667V213.333333c0-23.573333 19.093333-42.666667 42.666667-42.666666h682.666666c23.573333 0 42.666667 19.093333 42.666667 42.666666v426.666667c0 23.573333-19.093333 42.666667-42.666667 42.666667H682.666667l64 85.333333h106.666666c70.72 0 128-57.28 128-128V213.333333c0-70.72-57.28-128-128-128z" p-id="3101" fill="#ffffff"></path></svg></div>\n  </xg-icon>',{},"xgplayer-airplay"),r=i("xg-tips",`<span class="xgplayer-tip-airplay">${e.lang.AIRPLAY_TIPS}</span>`,{},"xgplayer-tips");t.appendChild(r),e.once("ready",()=>{e.controls.appendChild(t),e.video.addEventListener("webkitplaybacktargetavailabilitychanged",e=>{switch(e.availability){case"available":t.hidden=!1,t.disabled=!1;break;case"not-available":t.hidden=!0,t.disabled=!0}})}),["click","touchend"].forEach(r=>{t.addEventListener(r,(function(t){t.preventDefault(),t.stopPropagation(),e.userGestureTrigEvent("airplayBtnClick")}))})}};t.default={name:"airplay",method:function(){n.method.call(this),o.method.call(this)}}}])}));