"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[783],{8443:(e,r,t)=>{function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=c(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,o=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){i=!0,u=e},f:function(){try{o||null==t.return||t.return()}finally{if(i)throw u}}}}function c(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function l(e,r,t,n,a,u,o){try{var i=e[u](o),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,a)}function f(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var u=e.apply(r,t);function o(e){l(u,n,a,o,i,"next",e)}function i(e){l(u,n,a,o,i,"throw",e)}o(void 0)}))}}function p(e,r,t,n){return m.apply(this,arguments)}function m(){return(m=f(regeneratorRuntime.mark((function e(r,t,n,a){var u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(r);case 2:return(u=e.sent).push(t),e.next=6,r.set(a||"card","shared","notes",JSON.stringify(u));case 6:if(!n){e.next=9;break}return e.next=9,r.closePopup();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,r){return h.apply(this,arguments)}function h(){return(h=f(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,r.get(t||"card","shared","notes","[]");case 3:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=f(regeneratorRuntime.mark((function e(r){var t,n,u,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.cards("all");case 2:t=e.sent,n=[],u=i(t),e.prev=5,s=regeneratorRuntime.mark((function e(){var t,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.value,e.next=3,y(r,t.id);case 3:u=e.sent,n.push.apply(n,o(u.map((function(e){return a(a({},e),{},{card:t})}))));case 5:case"end":return e.stop()}}),e)})),u.s();case 8:if((c=u.n()).done){e.next=12;break}return e.delegateYield(s(),"t0",10);case 10:e.next=8;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(5),u.e(e.t1);case 17:return e.prev=17,u.f(),e.finish(17);case 20:return e.abrupt("return",n);case 21:case"end":return e.stop()}}),e,null,[[5,14,17,20]])})))).apply(this,arguments)}function b(e,r,t){return g.apply(this,arguments)}function g(){return(g=f(regeneratorRuntime.mark((function e(r,t,n){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(r);case 2:return(a=e.sent).splice(t,1),e.abrupt("return",r.set(n||"card","shared","notes",JSON.stringify(a)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,r){return x.apply(this,arguments)}function x(){return(x=f(regeneratorRuntime.mark((function e(r,t){var n,a,u,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.cards("all");case 2:n=e.sent,a=i(n),e.prev=4,a.s();case 6:if((u=a.n()).done){e.next=12;break}return o=u.value,e.next=10,r.set(o.id,t,"notes","[]");case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),a.e(e.t0);case 17:return e.prev=17,a.f(),e.finish(17);case 20:return e.next=22,r.alert({message:"Deleted Notes!",display:"info",duration:5});case 22:case"end":return e.stop()}}),e,null,[[4,14,17,20]])})))).apply(this,arguments)}function O(e){return k.apply(this,arguments)}function k(){return(k=f(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("board","private","notes-auth","false");case 2:return t=e.sent,e.abrupt("return","true"===t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,r){return R.apply(this,arguments)}function R(){return(R=f(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.set("board","private","notes-auth",t?"true":"false");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.d(r,{kT:()=>p,DI:()=>y,ZM:()=>d,lj:()=>b,p6:()=>w,v0:()=>O,QV:()=>j}),t(5666),t(1539),t(8674),t(8783),t(6992),t(3948),t(1249),t(561),t(7042),t(8309),t(1038),t(4916),t(2526),t(1817),t(2165),t(9753),t(9070),t(7941),t(7327),t(5003),t(9554),t(4747),t(9337),t(3321)},783:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s}),t(9753),t(2526),t(1817),t(1539),t(2165),t(6992),t(8783),t(3948),t(7042),t(8309),t(1038),t(4916),t(8674),t(5666);var n=t(7294),a=t(2613),u=t(8443);function o(e,r,t,n,a,u,o){try{var i=e[u](o),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,a)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var u=e.apply(r,t);function i(e){o(u,n,a,i,c,"next",e)}function c(e){o(u,n,a,i,c,"throw",e)}i(void 0)}))}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const s=function(){var e,r,t=(0,a.DN)(),o=(e=(0,n.useState)(null),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,u=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(i)throw a}}return u}}(e,r)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=o[0],l=o[1],f=function(){var e=i(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.v0)(t);case 2:r=e.sent,l(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.QV)(t,!s);case 2:return e.next=4,f();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){f()}),[]),n.createElement("div",null,null===s&&n.createElement("p",null,"Loading..."),null!==s&&n.createElement("div",null,n.createElement("p",null,"Authorize the Notes Power-Up"),n.createElement("p",null,n.createElement("span",null,"Current Status: "),n.createElement("span",{style:{color:s?"green":"red"}},s?"✅ Authorized":"❌ Unauthorized")),n.createElement("button",{className:s?"mod-danger":"mod-primary",onClick:p},s?"Unauthorize":"Authorize")))}}}]);