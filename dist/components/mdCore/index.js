/*!
 * Vue Material v0.6.0
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var f=n[r]={exports:{},id:r,loaded:!1};return e[r].call(f.exports,f,f.exports,t),f.loaded=!0,f.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)})([(function(e,t,n){e.exports=n(43)}),(function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)}),(function(e,t,n){e.exports=!n(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))}),(function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}}),(function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),(function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}}),(function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}}),(function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}}),(function(e,t,n){var r=n(57),f=n(6);e.exports=function(e){return r(f(e))}}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function f(e){e.component("md-ink-ripple",e.extend(a.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var o=n(!(function(){var e=new Error('Cannot find module "./mdInkRipple.vue"');throw e.code="MODULE_NOT_FOUND",e})()),a=r(o);e.exports=t.default}),(function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function f(e){e.material=new e({data:function(){return{styles:[],currentTheme:null,inkRipple:!0}},methods:{registerTheme:function(e,t){var n={};"string"==typeof e?n[e]=t:n=e,g(n,this.styles)},applyCurrentTheme:function(e){document.body.classList.remove("md-theme-"+this.currentTheme),document.body.classList.add("md-theme-"+e),this.currentTheme=e},setCurrentTheme:function(e){h.indexOf(e)>=0?this.applyCurrentTheme(e):(h.indexOf("default")===-1?this.registerTheme("default",p):console.warn("The theme '"+e+"' doesn't exists. You need to register it first in order to use."),this.applyCurrentTheme("default"))}}}),e.component("md-theme",s.default),e.prototype.$material=e.material}Object.defineProperty(t,"__esModule",{value:!0});var o=n(44),a=r(o);t.default=f;var i=n(41),c=r(i),u=n(42),d=r(u),l=n(99),s=r(l),b=["primary","accent","background","warn","hue-1","hue-2","hue-3"],p={primary:"indigo",accent:"pink",background:"white",warn:"deep-orange"},A=function(e,t){var n=document.head,r="md-theme-"+t,f=n.querySelector("#"+r);if(f)f.textContent=e;else{var o=document.createElement("style");e=e.replace(/THEME_NAME/g,r),o.type="text/css",o.id=r,o.textContent=e,n.appendChild(o)}},h=[],m=function(e,t){return b.forEach((function(n){e=e.replace(RegExp("("+n.toUpperCase()+")-(COLOR|CONTRAST)-?(A?\\d*)-?(\\d*\\.?\\d+)?","g"),(function(e,r,f,o,a){var i=void 0,u=0===+o?500:o;if(t[n]?"string"==typeof t[n]?i=c.default[t[n]]:(i=c.default[t[n].color]||c.default[p[n]],u=0===+o?t[n].hue:o):i=c.default[p[n]],"COLOR"===f){var l=c.default[t[n]];return o||l||("accent"===n?u="A200":"background"===n&&(u=50)),a?(0,d.default)(i[u],a):i[u]}return i.darkText.indexOf(u)>=0?a?(0,d.default)("#000",a):"rgba(0, 0, 0, .87)":a?(0,d.default)("#fff",a):"rgba(255, 255, 255, .87)"}))})),e},x=function(e,t,n){var r=[];n.forEach((function(t){r.push(m(t,e))})),A(r.join("\n"),t)},g=function(e,t){var n=e?(0,a.default)(e):[];n.forEach((function(n){x(e[n],n,t),h.push(n)}))};e.exports=t.default}),(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",darkText:[50,100,200,300,"A100"]},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",darkText:[50,100,200,"A100"]},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",darkText:[50,100,200,"A100"]},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",darkText:[50,100,200,"A100"]},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",darkText:[50,100,200,"A100"]},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",darkText:[50,100,200,300,400,"A100"]},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",darkText:[50,100,200,300,400,500,"A100","A200","A300"]},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",darkText:[50,100,200,300,400,500,600,"A100","A200","A300","A400"]},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",darkText:[50,100,200,300,400,"A100","A200","A300","A400"]},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",darkText:[50,100,200,300,400,500,"A100","A200","A300","A400"]},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",darkText:[50,100,200,300,400,500,600,"A100","A200","A300","A400"]},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",darkText:[50,100,200,300,400,500,600,700,800,"A100","A200","A300","A400"]},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",darkText:[50,100,200,300,400,500,600,700,800,900,"A100","A200","A300","A400"]},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",darkText:[50,100,200,300,400,500,600,700,800,900,"A100","A200","A300","A400"]},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",darkText:[50,100,200,300,400,500,600,700,"A100","A200","A300","A400"]},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",darkText:[50,100,200,300,400,"A100","A200"]},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",darkText:[50,100,200,"A100","A200","A300","A400"]},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#fff",A200:"#000000",A400:"#303030",A700:"#616161",darkText:[50,100,200,300,400,500,"A100"]},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",darkText:[50,100,200,300,"A100","A200","A300","A400"]},white:{50:"#fff",100:"#fff",200:"#fff",300:"#fff",400:"#fff",500:"#fff",600:"#fff",700:"#fff",800:"#fff",900:"#fff",A100:"#fff",A200:"#fff",A400:"#fff",A700:"#fff",darkText:[50,100,200,300,400,500,600,700,800,900,"A100","A200","A300","A400"]},black:{50:"#000",100:"#000",200:"#000",300:"#000",400:"#000",500:"#000",600:"#000",700:"#000",800:"#000",900:"#000",A100:"#000",A200:"#000",A400:"#000",A700:"#000",darkText:[]}},e.exports=t.default}),(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n="",r="",f="",o=e.toString().match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);if(!o)throw new Error("Invalid color"+e);if(e=o[1],6===e.length)n=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),f=parseInt(e.substring(4,6),16);else if(3===e.length){var a=e.substring(0,1),i=e.substring(1,2),c=e.substring(2,3);n=parseInt(a+a,16),r=parseInt(i+i,16),f=parseInt(c+c,16)}return t?(t>1&&(t/=100),"rgba("+n+", "+r+", "+f+", "+t+")"):"rgb("+n+", "+r+", "+f+")"},e.exports=t.default}),(function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function f(e){return f.installed?void console.warn("Vue Material is already installed."):(f.installed=!0,e.use(a.default),e.use(c.default),void e.material.styles.push(d.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var o=n(40),a=r(o),i=n(39),c=r(i),u=n(98),d=r(u);n(100),e.exports=t.default}),(function(e,t,n){e.exports={default:n(45),__esModule:!0}}),(function(e,t,n){n(70),e.exports=n(1).Object.keys}),(function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}}),(function(e,t,n){var r=n(5);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}}),(function(e,t,n){var r=n(8),f=n(66),o=n(65);e.exports=function(e){return function(t,n,a){var i,c=r(t),u=f(c.length),d=o(a,u);if(e&&n!=n){for(;u>d;)if(i=c[d++],i!=i)return!0}else for(;u>d;d++)if((e||d in c)&&c[d]===n)return e||d||0;return!e&&-1}}}),(function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}}),(function(e,t,n){var r=n(46);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,f){return e.call(t,n,r,f)}}return function(){return e.apply(t,arguments)}}}),(function(e,t,n){var r=n(5),f=n(4).document,o=r(f)&&r(f.createElement);e.exports=function(e){return o?f.createElement(e):{}}}),(function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}),(function(e,t,n){var r=n(4),f=n(1),o=n(50),a=n(55),i="prototype",c=function(e,t,n){var u,d,l,s=e&c.F,b=e&c.G,p=e&c.S,A=e&c.P,h=e&c.B,m=e&c.W,x=b?f:f[t]||(f[t]={}),g=x[i],v=b?r:p?r[t]:(r[t]||{})[i];b&&(n=t);for(u in n)d=!s&&v&&void 0!==v[u],d&&u in x||(l=d?v[u]:n[u],x[u]=b&&"function"!=typeof v[u]?n[u]:h&&d?o(l,r):m&&v[u]==l?(function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[i]=e[i],t})(l):A&&"function"==typeof l?o(Function.call,l):l,A&&((x.virtual||(x.virtual={}))[u]=l,e&c.R&&g&&!g[u]&&a(g,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c}),(function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}}),(function(e,t,n){var r=n(58),f=n(62);e.exports=n(2)?function(e,t,n){return r.f(e,t,f(1,n))}:function(e,t,n){return e[t]=n,e}}),(function(e,t,n){e.exports=!n(2)&&!n(3)((function(){return 7!=Object.defineProperty(n(51)("div"),"a",{get:function(){return 7}}).a}))}),(function(e,t,n){var r=n(49);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}}),(function(e,t,n){var r=n(47),f=n(56),o=n(68),a=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),f)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}}),(function(e,t,n){var r=n(54),f=n(8),o=n(48)(!1),a=n(63)("IE_PROTO");e.exports=function(e,t){var n,i=f(e),c=0,u=[];for(n in i)n!=a&&r(i,n)&&u.push(n);for(;t.length>c;)r(i,n=t[c++])&&(~o(u,n)||u.push(n));return u}}),(function(e,t,n){var r=n(59),f=n(52);e.exports=Object.keys||function(e){return r(e,f)}}),(function(e,t,n){var r=n(53),f=n(1),o=n(3);e.exports=function(e,t){var n=(f.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*o((function(){n(1)})),"Object",a)}}),(function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}}),(function(e,t,n){var r=n(64)("keys"),f=n(69);e.exports=function(e){return r[e]||(r[e]=f(e))}}),(function(e,t,n){var r=n(4),f="__core-js_shared__",o=r[f]||(r[f]={});e.exports=function(e){return o[e]||(o[e]={})}}),(function(e,t,n){var r=n(7),f=Math.max,o=Math.min;e.exports=function(e,t){return e=r(e),e<0?f(e+t,0):o(e,t)}}),(function(e,t,n){var r=n(7),f=Math.min;e.exports=function(e){return e>0?f(r(e),9007199254740991):0}}),(function(e,t,n){var r=n(6);e.exports=function(e){return Object(r(e))}}),(function(e,t,n){var r=n(5);e.exports=function(e,t){if(!r(e))return e;var n,f;if(t&&"function"==typeof(n=e.toString)&&!r(f=n.call(e)))return f;if("function"==typeof(n=e.valueOf)&&!r(f=n.call(e)))return f;if(!t&&"function"==typeof(n=e.toString)&&!r(f=n.call(e)))return f;throw TypeError("Can't convert object to primitive value")}}),(function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}}),(function(e,t,n){var r=n(67),f=n(60);n(61)("keys",(function(){return function(e){return f(r(e))}}))}),(function(e,t,n){t=e.exports=n(72)(),t.push([e.id,'html{height:100%;box-sizing:border-box}html *,html :after,html :before{box-sizing:inherit}body{min-height:100%;margin:0;position:relative;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:rgba(0,0,0,.87);font-family:Roboto,Noto Sans,Noto,sans-serif}[tabindex="-1"]:focus{outline:none}audio,canvas,embed,iframe,img,object,svg,video{max-width:100%;font-style:italic;vertical-align:middle}audio:not(.md-image),canvas:not(.md-image),embed:not(.md-image),iframe:not(.md-image),img:not(.md-image),object:not(.md-image),svg:not(.md-image),video:not(.md-image){height:auto}[tabindex="-1"]:focus{outline:none!important}.md-scrollbar::-webkit-scrollbar,.md-scrollbar ::-webkit-scrollbar{width:10px;height:10px;box-shadow:inset 1px 1px 0 rgba(0,0,0,.12);transition:all .5s cubic-bezier(.35,0,.25,1);background-color:rgba(0,0,0,.05)}.md-scrollbar::-webkit-scrollbar:hover,.md-scrollbar ::-webkit-scrollbar:hover{box-shadow:inset 1px 1px 0 rgba(0,0,0,.054),inset 0 -1px 0 rgba(0,0,0,.038);background-color:rgba(0,0,0,.087)}.md-scrollbar::-webkit-scrollbar-button,.md-scrollbar ::-webkit-scrollbar-button{display:none}.md-scrollbar::-webkit-scrollbar-corner,.md-scrollbar ::-webkit-scrollbar-corner{background-color:transparent}.md-scrollbar::-webkit-scrollbar-thumb,.md-scrollbar ::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.26);box-shadow:inset 1px 1px 0 rgba(0,0,0,.054),inset 0 -1px 0 rgba(0,0,0,.087);transition:all .5s cubic-bezier(.35,0,.25,1)}.md-caption{font-size:12px;font-weight:400;letter-spacing:.02em;line-height:17px}.md-body-1,body{font-weight:400;line-height:20px}.md-body-1,.md-body-2,body{font-size:14px;letter-spacing:.01em}.md-body-2{font-weight:500;line-height:24px}.md-subheading{font-size:16px;font-weight:400;letter-spacing:.01em;line-height:24px}.md-title{font-size:20px;font-weight:500;letter-spacing:.005em;line-height:26px}.md-headline{font-size:24px;line-height:32px}.md-display-1,.md-headline{font-weight:400;letter-spacing:0}.md-display-1{font-size:34px;line-height:40px}.md-display-2{font-size:45px;font-weight:400;letter-spacing:0;line-height:48px}.md-display-3{font-size:56px;font-weight:400;letter-spacing:-.005em;line-height:58px}.md-display-4{font-size:112px;font-weight:300;letter-spacing:-.01em;line-height:112px}a:not(.md-button):not(.md-bottom-bar-item){text-decoration:none}a:not(.md-button):not(.md-bottom-bar-item):hover{text-decoration:underline}button:focus{outline:none}',""])}),(function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},f=0;f<this.length;f++){var o=this[f][0];"number"==typeof o&&(r[o]=!0)}for(f=0;f<t.length;f++){var a=t[f];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}}),,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t){e.exports=".THEME_NAME :not(input):not(textarea)::selection{background:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME a:not(.md-button){color:ACCENT-COLOR}.THEME_NAME a:not(.md-button):hover{color:ACCENT-COLOR-800}body.THEME_NAME{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST-0.87}.THEME_NAME .md-caption,.THEME_NAME .md-display-1,.THEME_NAME .md-display-2,.THEME_NAME .md-display-3,.THEME_NAME .md-display-4{color:BACKGROUND-CONTRAST-0.57}.THEME_NAME code:not(.hljs){background-color:ACCENT-COLOR-A100-0.2;color:ACCENT-COLOR-800}\n"}),(function(e,t,n){var r,f;r=n(!(function(){var e=new Error('Cannot find module "!!babel-loader!vue-loader/lib/selector?type=script&index=0!./mdTheme.vue"');throw e.code="MODULE_NOT_FOUND",e})()),f=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(f=r=r.default),"function"==typeof f&&(f=f.options),e.exports=r}),(function(e,t,n){var r=n(71);"string"==typeof r&&(r=[[e.id,r,""]]);n(!(function(){var e=new Error('Cannot find module "!./../../../node_modules/vue-style-loader/addStyles.js"');throw e.code="MODULE_NOT_FOUND",e})())(r,{});r.locals&&(e.exports=r.locals)})])}));