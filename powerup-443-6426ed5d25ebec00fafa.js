/*! For license information please see powerup-443-6426ed5d25ebec00fafa.js.LICENSE.txt */
"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[443],{98443:(t,r,e)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){a(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function a(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function c(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=s(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}function s(t,r){if(t){if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,r):void 0}}function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function l(){l=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function h(){}function y(){}function v(){}var d={};u(d,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==r&&e.call(g,i)&&(d=g);var b=v.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function o(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==n(p)&&e.call(p,"__await")?r.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}}function O(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,O(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=v,u(b,"constructor",v),u(v,"constructor",y),y.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function p(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function h(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){p(i,n,o,a,c,"next",t)}function c(t){p(i,n,o,a,c,"throw",t)}a(void 0)}))}}function y(t,r,e,n){return v.apply(this,arguments)}function v(){return(v=h(l().mark((function t(r,e,n,o){var i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(r);case 2:return(i=t.sent).push(e),t.next=6,r.set(o||"card","shared","notes",JSON.stringify(i));case 6:if(!n){t.next=9;break}return t.next=9,r.closePopup();case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,r){return m.apply(this,arguments)}function m(){return(m=h(l().mark((function t(r,e){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,r.get(e||"card","shared","notes","[]");case 3:return t.t1=t.sent,t.abrupt("return",t.t0.parse.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return(b=h(l().mark((function t(r){var e,n,o,a,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.cards("all");case 2:e=t.sent,n=[],o=u(e),t.prev=5,s=l().mark((function t(){var e,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.value,t.next=3,d(r,e.id);case 3:o=t.sent,n.push.apply(n,c(o.map((function(t){return i(i({},t),{},{card:e})}))));case 5:case"end":return t.stop()}}),t)})),o.s();case 8:if((a=o.n()).done){t.next=12;break}return t.delegateYield(s(),"t0",10);case 10:t.next=8;break;case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(5),o.e(t.t1);case 17:return t.prev=17,o.f(),t.finish(17);case 20:return t.abrupt("return",n);case 21:case"end":return t.stop()}}),t,null,[[5,14,17,20]])})))).apply(this,arguments)}function w(t,r,e){return x.apply(this,arguments)}function x(){return(x=h(l().mark((function t(r,e,n){var o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(r);case 2:return(o=t.sent).splice(e,1),t.abrupt("return",r.set(n||"card","shared","notes",JSON.stringify(o)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t,r){return k.apply(this,arguments)}function k(){return(k=h(l().mark((function t(r,e){var n,o,i,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.cards("all");case 2:n=t.sent,o=u(n),t.prev=4,o.s();case 6:if((i=o.n()).done){t.next=12;break}return a=i.value,t.next=10,r.set(a.id,e,"notes","[]");case 10:t.next=6;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),o.e(t.t0);case 17:return t.prev=17,o.f(),t.finish(17);case 20:return t.next=22,r.alert({message:"Deleted Notes!",display:"info",duration:5});case 22:case"end":return t.stop()}}),t,null,[[4,14,17,20]])})))).apply(this,arguments)}function j(t){return L.apply(this,arguments)}function L(){return(L=h(l().mark((function t(r){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.get("board","private","notes-auth","false");case 2:return e=t.sent,t.abrupt("return","true"===e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t,r){return S.apply(this,arguments)}function S(){return(S=h(l().mark((function t(r,e){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.set("board","private","notes-auth",e?"true":"false");case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.d(r,{DI:()=>d,QV:()=>E,ZM:()=>g,kT:()=>y,lj:()=>w,p6:()=>O,v0:()=>j}),e(41539),e(88674),e(78783),e(66992),e(33948),e(21249),e(40561),e(82526),e(41817),e(32165),e(72443),e(39341),e(73706),e(10408),e(69070),e(78011),e(30489),e(89554),e(54747),e(68309),e(68304),e(65069),e(47042),e(91038),e(74916),e(79753),e(47941),e(57327),e(38880),e(49337),e(33321)}}]);