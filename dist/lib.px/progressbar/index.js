/*! vue-ydui v0.2.8 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="/dist/",e(0)}({0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBar=void 0;var o=r(71),s=n(o);e.ProgressBar=s.default},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(n[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},2:function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=f[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(l(n.parts[s],e))}else{for(var i=[],s=0;s<n.parts.length;s++)i.push(l(n.parts[s],e));f[n.id]={id:n.id,refs:1,parts:i}}}}function o(t){for(var e=[],r={},n=0;n<t.length;n++){var o=t[n],s=o[0],i=o[1],a=o[2],l=o[3],d={css:i,media:a,sourceMap:l};r[s]?r[s].parts.push(d):e.push(r[s]={id:s,parts:[d]})}return e}function s(t,e){var r=p(),n=m[m.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function l(t,e){var r,n,o;if(e.singleton){var s=g++;r=v||(v=a(e)),n=d.bind(null,r,s,!1),o=d.bind(null,r,s,!0)}else r=a(e),n=u.bind(null,r),o=function(){i(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function d(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var s=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function u(t,e){var r=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f={},c=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=c(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=o(t);return n(r,e),function(t){for(var s=[],i=0;i<r.length;i++){var a=r[i],l=f[a.id];l.refs--,s.push(l)}if(t){var d=o(t);n(d,e)}for(var i=0;i<s.length;i++){var l=s[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete f[l.id]}}}};var y=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},3:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,document.addEventListener("touchmove",t))},unlock:function(){e=!1,document.removeEventListener("touchmove",t)}}}(),n=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||r.test(t)||n.test(t)},o=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var r=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===r||"auto"===r)return e;e=e.parentNode}return window},s=function(t,e){var r=t==window?document.body.offsetHeight:t.offsetHeight,n=t===window?0:t.getBoundingClientRect().top,o=e.getBoundingClientRect().top-n,s=o+e.offsetHeight;return o>=0&&o<r||s>0&&s<=r},i=function(t,e){return e=e||"",0!=e.replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")},a=function(t,e){i(t,e)||(t.className=""==t.className?e:t.className+" "+e)},l=function(t,e){if(i(t,e)){for(var r=" "+t.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+e+" ")>=0;)r=r.replace(" "+e+" "," ");t.className=r.replace(/^\s+|\s+$/g,"")}};e.pageScroll=r,e.isColor=n,e.getScrollview=o,e.checkInview=s,e.addClass=a,e.removeClass=l},12:function(t,e,r){e=t.exports=r(1)(),e.push([t.id,".m-progressbar{position:relative;color:#333;width:100%;height:100%}.m-progressbar>svg{width:100%}.m-progressbar>svg>path{-webkit-transition:all .8s linear;transition:all .8s linear}.progressbar-content{position:absolute;top:50%;left:50%;font-size:15px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},30:function(t,e,r){var n=r(12);"string"==typeof n&&(n=[[t.id,n,""]]);r(2)(n,{});n.locals&&(t.exports=n.locals)},71:function(t,e,r){var n,o;r(30),n=r(144);var s=r(85);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=n},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-progressbar"},["line"!=t.type?r("div",{staticClass:"progressbar-content"},[t._v(t._s(100*t.progress)+"%")]):t._e(),t._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{viewBox:t.viewBox,preserveAspectRatio:"line"==t.type?"none":""}},[r("path",{attrs:{"fill-opacity":t.fillColor?1:0,d:t.getPathString,fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.trailWidth}}),t._v(" "),r("path",{ref:"trailPath",style:{strokeDasharray:t.stroke.dasharray,strokeDashoffset:t.stroke.dashoffset},attrs:{"fill-opacity":"0",d:t.getPathString,stroke:t.trailColor,"stroke-width":t.strokeWidth?t.strokeWidth:t.trailWidth}})])])},staticRenderFns:[]}},144:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3);e.default={name:"yd-progressbar",data:function(){return{viewBox:"0 0 100 100",show:!1,stroke:{dasharray:"",dashoffset:""}}},props:{type:{type:String,validator:function(t){return["circle","line"].indexOf(t)>-1},default:"circle"},fillColor:{type:String,validator:function(t){return!t||(0,n.isColor)(t)}},strokeWidth:{validator:function(t){return/^\d*$/.test(t)},default:0},strokeColor:{type:String,validator:function(t){return!t||(0,n.isColor)(t)},default:"#E5E5E5"},trailWidth:{validator:function(t){return/^\d*$/.test(t)},default:0,require:!0},trailColor:{type:String,validator:function(t){return!t||(0,n.isColor)(t)},default:"#646464"},progress:{validator:function(t){return/^(0(.\d+)?|1(\.0+)?)$/.test(t)},default:0}},methods:{init:function(){var t=this,e=this.length=this.$refs.trailPath.getTotalLength();this.stroke.dashoffset=e,this.stroke.dasharray=e+","+e,this.scrollview=(0,n.getScrollview)(this.$el),this.show=!0,"line"==this.type&&(this.viewBox="0 0 100 "+(this.strokeWidth?this.strokeWidth:this.trailWidth)),setTimeout(function(){t.scrollHandler()},0),this.bindEvent()},scrollHandler:function(){(0,n.checkInview)(this.scrollview,this.$el)&&(this.stroke.dashoffset=this.length-this.progress*this.length)},bindEvent:function(){this.scrollview.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},unbindEvent:function(){this.scrollview.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}},watch:{progress:function(t){this.stroke.dashoffset=this.length-t*this.length}},computed:{getPathString:function(){if("line"==this.type)return"M 0,{R} L 100,{R}".replace(/\{R\}/g,this.trailWidth/2);var t=50-(this.strokeWidth?this.strokeWidth:this.trailWidth)/2;return"M 50,50 m 0,-{R} a {R},{R} 0 1 1 0,{2R} a {R},{R} 0 1 1 0,-{2R}".replace(/\{R\}/g,t).replace(/\{2R\}/g,2*t)}},mounted:function(){this.init()},destoryed:function(){this.unbindEvent()}}}})});