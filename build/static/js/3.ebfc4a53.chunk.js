(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{42:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(5);r(49);e.a=function(t){return t.href?a.a.createElement("a",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),href:t.href},t.children):t.to?a.a.createElement(o.b,{to:t.to,exact:t.exact,className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger")},t.children):a.a.createElement("button",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),type:t.type,onClick:t.onClick,disabled:t.disabled},t.children)}},43:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},44:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(45),i=r(42);e.a=function(t){return a.a.createElement(o.a,{onCancel:t.onClear,header:"An Error Occurred!",show:!!t.error,footer:a.a.createElement(i.a,{onClick:t.onClear},"Okay")},a.a.createElement("p",null,t.error))}},45:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(4),i=r.n(o),c=(r(48),r(15)),u=r(41),l=function(t){var e=a.a.createElement("div",{className:"modal ".concat(t.className),style:t.style},a.a.createElement("header",{className:"modal__header ".concat(t.headerClass)},a.a.createElement("h2",null,t.header)),a.a.createElement("form",{onSubmit:t.onSubmit?t.onSubmit:function(t){return t.preventDefault()}},a.a.createElement("div",{className:"modal__content ".concat(t.contentClass)},t.children),a.a.createElement("footer",{className:"modal__footer ".concat(t.footerClass)},t.footer)));return i.a.createPortal(e,document.getElementById("modal-hook"))};e.a=function(t){return a.a.createElement(a.a.Fragment,null,t.show&&a.a.createElement(c.a,{onClick:t.onCancel}),a.a.createElement(u.a,{in:t.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},a.a.createElement(l,t)))}},46:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(43),a=r(9),o=r(0);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function s(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:O(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var m={};l(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,o)&&(m=g);var b=v.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var u=f(t[a],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function O(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=f(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),l(b,u,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var c=function(){var t=Object(o.useState)(!1),e=Object(a.a)(t,2),r=e[0],c=e[1],u=Object(o.useState)(),l=Object(a.a)(u,2),s=l[0],f=l[1],h=Object(o.useRef)([]),p=Object(o.useCallback)(function(){var t=Object(n.a)(i().mark((function t(e){var r,n,a,o,u,l,s=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:{},c(!0),o=new AbortController,h.current.push(o),t.prev=6,t.next=9,fetch(e,{method:r,body:n,headers:a,signal:o.signal});case 9:return u=t.sent,t.next=12,u.json();case 12:if(l=t.sent,h.current=h.current.filter((function(t){return t!==o})),u.ok){t.next=16;break}throw new Error(l.message);case 16:return c(!1),t.abrupt("return",l);case 20:throw t.prev=20,t.t0=t.catch(6),f(t.t0.message),c(!1),t.t0;case 25:case"end":return t.stop()}}),t,null,[[6,20]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){h.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:r,error:s,sendRequest:p,clearError:function(){f(null)}}}},47:function(t,e,r){"use strict";var n=r(0),a=r.n(n);r(53);e.a=function(t){return a.a.createElement("div",{className:"card ".concat(t.className),style:t.style},t.children)}},48:function(t,e,r){},49:function(t,e,r){},50:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(51);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},51:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},52:function(t,e,r){"use strict";var n=r(16);r.d(e,"c",(function(){return a})),r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i})),r.d(e,"d",(function(){return c}));var a=function(){return{type:"REQUIRE"}},o=function(t){return{type:"MINLENGTH",val:t}},i=function(){return{type:"EMAIL"}},c=function(t,e){var r,a=!0,o=function(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(n.a)(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,c=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw o}}}}(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;"REQUIRE"===i.type&&(a=a&&t.trim().length>0),"MINLENGTH"===i.type&&(a=a&&t.trim().length>=i.val),"MAXLENGTH"===i.type&&(a=a&&t.trim().length<=i.val),"MIN"===i.type&&(a=a&&+t>=i.val),"MAX"===i.type&&(a=a&&+t<=i.val),"EMAIL"===i.type&&(a=a&&/^\S+@\S+\.\S+$/.test(t))}}catch(c){o.e(c)}finally{o.f()}return a}},53:function(t,e,r){},54:function(t,e,r){"use strict";var n=r(9),a=r(50),o=r(0),i=r.n(o),c=r(52),u=(r(55),function(t,e){switch(e.type){case"CHANGE":return Object(a.a)(Object(a.a)({},t),{},{value:e.val,isValid:Object(c.d)(e.val,e.validators)});case"TOUCH":return Object(a.a)(Object(a.a)({},t),{},{isTouched:!0});default:return t}});e.a=function(t){var e=Object(o.useReducer)(u,{value:t.initialValue||"",isTouched:!1,isValid:t.initialValid||!1}),r=Object(n.a)(e,2),a=r[0],c=r[1],l=t.id,s=t.onInput,f=a.value,h=a.isValid;Object(o.useEffect)((function(){s(l,f,h)}),[l,f,h,s]);var p=function(e){c({type:"CHANGE",val:e.target.value,validators:t.validators})},d=function(){c({type:"TOUCH"})},v="input"===t.element?i.a.createElement("input",{id:t.id,type:t.type,placeholder:t.placeholder,onChange:p,onBlur:d,value:a.value}):i.a.createElement("textarea",{id:t.id,rows:t.rows||3,onChange:p,onBlur:d,value:a.value});return i.a.createElement("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid")},i.a.createElement("label",{htmlFor:"{props.id}"},t.label),v,!a.isValid&&a.isTouched&&i.a.createElement("p",null,t.errorText))}},55:function(t,e,r){},56:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(9),a=r(51),o=r(50),i=r(0),c=function(t,e){switch(e.type){case"INPUT_CHANGE":var r=!0;for(var n in t.inputs)t.inputs[n]&&(r=n===e.inputId?r&&e.isValid:r&&t.inputs[n].isValid);return Object(o.a)(Object(o.a)({},t),{},{inputs:Object(o.a)(Object(o.a)({},t.inputs),{},Object(a.a)({},e.inputId,{value:e.value,isValid:e.isValid})),isValid:r});case"SET_DATA":return{inputs:e.inputs,isValid:e.formIsValid};default:return t}},u=function(t,e){var r=Object(i.useReducer)(c,{inputs:t,isValid:e}),a=Object(n.a)(r,2),o=a[0],u=a[1];return[o,Object(i.useCallback)((function(t,e,r){u({type:"INPUT_CHANGE",value:e,isValid:r,inputId:t})}),[]),Object(i.useCallback)((function(t,e){u({type:"SET_DATA",inputs:t,formIsValid:e})}),[])]}},57:function(t,e,r){"use strict";var n=r(9),a=r(0),o=r.n(a),i=r(42);r(58);e.a=function(t){var e=Object(a.useRef)(),r=Object(a.useState)(),c=Object(n.a)(r,2),u=c[0],l=c[1],s=Object(a.useState)(),f=Object(n.a)(s,2),h=f[0],p=f[1],d=Object(a.useState)(!1),v=Object(n.a)(d,2),m=v[0],y=v[1];Object(a.useEffect)((function(){if(u){var t=new FileReader;t.onload=function(){p(t.result)},t.readAsDataURL(u)}}),[u]);return o.a.createElement("div",{className:"form-control"},o.a.createElement("input",{type:"file",ref:e,id:t.id,style:{display:"none"},accept:".jpg,.png,jpeg",onChange:function(e){var r,n=m;e.target.files&&1===e.target.files.length?(r=e.target.files[0],l(r),y(!0),n=!0):(y(!1),n=!1),t.onInput(t.id,r,n)}}),o.a.createElement("div",{className:"image-upload ".concat(t.center&&"center")},o.a.createElement("div",{className:"image-upload__preview"},h&&o.a.createElement("img",{src:h,alt:"Preview"}),!h&&o.a.createElement("p",null,"Please pick an image.")),o.a.createElement(i.a,{type:"button",onClick:function(){e.current.click()}},"PICK IMAGE")),!m&&o.a.createElement("p",null,t.errorText))}},58:function(t,e,r){},65:function(t,e,r){},68:function(t,e,r){"use strict";r.r(e);var n=r(50),a=r(43),o=r(9),i=r(0),c=r.n(i),u=r(47),l=r(54),s=r(42),f=r(56),h=r(11),p=r(44),d=r(14),v=r(46),m=r(57),y=r(52);r(65);function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:O(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};u(v,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==e&&r.call(y,o)&&(v=y);var b=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function O(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),u(b,c,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}e.default=function(){var t=Object(i.useContext)(h.a),e=Object(i.useState)(!0),r=Object(o.a)(e,2),b=r[0],w=r[1],E=Object(v.a)(),O=E.isLoading,j=E.error,x=E.sendRequest,L=E.clearError,N=Object(f.a)({email:{value:"",isValid:!1},password:{value:"",isValid:""}},!1),k=Object(o.a)(N,3),_=k[0],S=k[1],P=k[2],I=function(){var e=Object(a.a)(g().mark((function e(r){var n,a,o;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),console.log("http://localhost:5000/api"),console.log(_),!b){e.next=15;break}return e.prev=4,e.next=7,x("".concat("http://localhost:5000/api","/users/login"),"POST",JSON.stringify({email:_.inputs.email.value,password:_.inputs.password.value}),{"Content-Type":"application/json"});case 7:n=e.sent,t.login(n.userId,n.token),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:e.next=29;break;case 15:return e.prev=15,(a=new FormData).append("name",_.inputs.name.value),a.append("email",_.inputs.email.value),a.append("password",_.inputs.password.value),a.append("image",_.inputs.image.value),e.next=23,x("".concat("http://localhost:5000/api","/users/signup"),"POST",a);case 23:o=e.sent,t.login(o.userId,o.token),e.next=29;break;case 27:e.prev=27,e.t1=e.catch(15);case 29:case"end":return e.stop()}}),e,null,[[4,11],[15,27]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{error:j,onClear:L}),c.a.createElement(u.a,{className:"authentication"},O&&c.a.createElement(d.a,{asOverlay:!0}),c.a.createElement("h2",null,"Login Required"),c.a.createElement("form",{onSubmit:I},!b&&c.a.createElement(l.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[y.c],errorText:"Please enter a name",onInput:S}),c.a.createElement(l.a,{id:"email",element:"input",type:"email",label:"E-Mail",validators:[Object(y.a)()],errorText:"Please enter a valid email address.",onInput:S}),c.a.createElement(l.a,{id:"password",element:"input",type:"password",label:"Password",validators:[Object(y.b)(6)],errorText:"Please enter a valid email password.(At least 6 characters.)",onInput:S}),!b&&c.a.createElement(m.a,{id:"image",center:!0,onInput:S,errorText:"Please provide an image."}),c.a.createElement(s.a,{type:"submit",disabled:!_.isValid},b?"LOGIN":"SIGNUP")),c.a.createElement(s.a,{inverse:!0,onClick:function(){b?P(Object(n.a)(Object(n.a)({},_.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):P(Object(n.a)(Object(n.a)({},_.inputs),{},{name:void 0,image:void 0}),_.inputs.email.isValid&&_.inputs.password.isValid),w((function(t){return!t}))}},"SWITCH TO ",b?"SIGNUP":"LOGIN")))}}}]);
//# sourceMappingURL=3.ebfc4a53.chunk.js.map