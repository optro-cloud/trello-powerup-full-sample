(self.webpackChunkreact=self.webpackChunkreact||[]).push([[740],{8443:(e,t,r)=>{"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=c(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){i=!0,o=e},f:function(){try{u||null==r.return||r.return()}finally{if(i)throw o}}}}function c(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){l(o,n,a,u,i,"next",e)}function i(e){l(o,n,a,u,i,"throw",e)}u(void 0)}))}}function p(e,t,r,n){return m.apply(this,arguments)}function m(){return(m=f(regeneratorRuntime.mark((function e(t,r,n,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return(o=e.sent).push(r),e.next=6,t.set(a||"card","shared","notes",JSON.stringify(o));case 6:if(!n){e.next=9;break}return e.next=9,t.closePopup();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return h.apply(this,arguments)}function h(){return(h=f(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,t.get(r||"card","shared","notes","[]");case 3:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return(b=f(regeneratorRuntime.mark((function e(t){var r,n,o,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.cards("all");case 2:r=e.sent,n=[],o=i(r),e.prev=5,s=regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.value,e.next=3,d(t,r.id);case 3:o=e.sent,n.push.apply(n,u(o.map((function(e){return a(a({},e),{},{card:r})}))));case 5:case"end":return e.stop()}}),e)})),o.s();case 8:if((c=o.n()).done){e.next=12;break}return e.delegateYield(s(),"t0",10);case 10:e.next=8;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(5),o.e(e.t1);case 17:return e.prev=17,o.f(),e.finish(17);case 20:return e.abrupt("return",n);case 21:case"end":return e.stop()}}),e,null,[[5,14,17,20]])})))).apply(this,arguments)}function v(e,t,r){return g.apply(this,arguments)}function g(){return(g=f(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return(a=e.sent).splice(r,1),e.abrupt("return",t.set(n||"card","shared","notes",JSON.stringify(a)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return x.apply(this,arguments)}function x(){return(x=f(regeneratorRuntime.mark((function e(t,r){var n,a,o,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.cards("all");case 2:n=e.sent,a=i(n),e.prev=4,a.s();case 6:if((o=a.n()).done){e.next=12;break}return u=o.value,e.next=10,t.set(u.id,r,"notes","[]");case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),a.e(e.t0);case 17:return e.prev=17,a.f(),e.finish(17);case 20:return e.next=22,t.alert({message:"Deleted Notes!",display:"info",duration:5});case 22:case"end":return e.stop()}}),e,null,[[4,14,17,20]])})))).apply(this,arguments)}function k(e){return O.apply(this,arguments)}function O(){return(O=f(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("board","private","notes-auth","false");case 2:return r=e.sent,e.abrupt("return","true"===r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return j.apply(this,arguments)}function j(){return(j=f(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.set("board","private","notes-auth",r?"true":"false");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.d(t,{kT:()=>p,DI:()=>d,ZM:()=>y,lj:()=>v,p6:()=>w,v0:()=>k,QV:()=>S}),r(5666),r(8674),r(1539),r(8783),r(6992),r(3948),r(1249),r(561),r(7042),r(8309),r(1038),r(2526),r(1817),r(2165),r(9753),r(9070),r(7941),r(7327),r(5003),r(9554),r(4747),r(9337),r(3321)},6740:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f}),r(2526),r(1817),r(1539),r(2165),r(8783),r(6992),r(3948),r(7042),r(8309),r(1038),r(9753);var n=r(7294),a=r(3144),o=r(8443),u=$RefreshSig$();function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=window.TrelloPowerUp.iframe();function l(){u();var e=i((0,n.useState)("#0079bf"),2),t=e[0],r=e[1],c=i((0,n.useState)(""),2),l=c[0],f=c[1];return n.createElement("div",{id:"container"},n.createElement("p",null,"Add a new note to the card."),n.createElement("label",{htmlFor:"color"},"Color"),n.createElement("div",{className:"color-picker-container"},n.createElement(a.iY,{color:t,onChange:function(e){return r(e.hex)},colors:["#0079bf","#70b500","#ff9f1a","#eb5a46","#f2d600","#c377e0"]})),n.createElement("label",{htmlFor:"note"},"Note (Markdown)"),n.createElement("textarea",{className:"note-field",value:l,id:"note",name:"note",onChange:function(e){return f(e.target.value)}}),n.createElement("p",null,n.createElement("a",{href:"https://www.markdownguide.org/getting-started/",rel:"noreferrer",target:"_blank"},"View Markdown Documentation")),n.createElement("button",{disabled:0===l.length,title:0===l.length?"Enter a note first":"Create Note",className:"mod-primary",onClick:function(){return(0,o.kT)(s,{color:t,text:l},!0)}},"Create"))}u(l,"+N9E32M2zLCp9bIU+Ru/M29+Vc4=");const f=l;$RefreshReg$(l,"CardButton")}}]);