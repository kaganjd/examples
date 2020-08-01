!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/gotrue/dist/",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JSONHTTPError=t.TextHTTPError=t.HTTPError=t.getPagination=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(3);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"getPagination",{enumerable:!0,get:function(){return i.getPagination}});var c=t.HTTPError=function(e){function t(e){a(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.statusText));return r.name=r.constructor.name,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(r,r.constructor):r.stack=new Error(e.statusText).stack,r.status=e.status,r}return u(t,e),t}(function(e){function t(){var t=Reflect.construct(e,Array.from(arguments));return Object.setPrototypeOf(t,Object.getPrototypeOf(this)),t}return t.prototype=Object.create(e.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}(Error)),l=t.TextHTTPError=function(e){function t(e,r){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.data=r,n}return u(t,e),t}(c),f=t.JSONHTTPError=function(e){function t(e,r){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.json=r,n}return u(t,e),t}(c),p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments[1];a(this,e),this.apiURL=t,this.apiURL.match(/\/[^\/]?/)&&(this._sameOrigin=!0),this.defaultHeaders=r&&r.defaultHeaders||{}}return o(e,[{key:"headers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n({},this.defaultHeaders,{"Content-Type":"application/json"},e)}},{key:"parseJsonResponse",value:function(e){return e.json().then((function(t){if(!e.ok)return Promise.reject(new f(e,t));var r=(0,i.getPagination)(e);return r?{pagination:r,items:t}:t}))}},{key:"request",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this.headers(r.headers||{});return this._sameOrigin&&(r.credentials=r.credentials||"same-origin"),fetch(this.apiURL+e,n({},r,{headers:o})).then((function(e){var r=e.headers.get("Content-Type");return r&&r.match(/json/)?t.parseJsonResponse(e):e.ok?e.text().then((function(e){})):e.text().then((function(t){return Promise.reject(new l(e,t))}))}))}}]),e}();t.default=p},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=(o=r(4))&&o.__esModule?o:{default:o};function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=/^http:\/\//,f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.APIUrl,n=void 0===r?"/.netlify/identity":r,o=t.audience,a=void 0===o?"":o,s=t.setCookie,c=void 0!==s&&s;u(this,e),n.match(l)&&console.warn("Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely."),a&&(this.audience=a),this.setCookie=c,this.api=new i.default(n)}var t,r,n;return t=e,(r=[{key:"_request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.headers=t.headers||{};var r=t.audience||this.audience;return r&&(t.headers["X-JWT-AUD"]=r),this.api.request(e,t).catch((function(e){return e instanceof i.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message="".concat(e.json.error,": ").concat(e.json.error_description))),Promise.reject(e)}))}},{key:"settings",value:function(){return this._request("/settings")}},{key:"signup",value:function(e,t,r){return this._request("/signup",{method:"POST",body:JSON.stringify({email:e,password:t,data:r})})}},{key:"login",value:function(e,t,r){var n=this;return this._setRememberHeaders(r),this._request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=password&username=".concat(encodeURIComponent(e),"&password=").concat(encodeURIComponent(t))}).then((function(e){return a.default.removeSavedSession(),n.createUser(e,r)}))}},{key:"loginExternalUrl",value:function(e){return"".concat(this.api.apiURL,"/authorize?provider=").concat(e)}},{key:"confirm",value:function(e,t){return this._setRememberHeaders(t),this.verify("signup",e,t)}},{key:"requestPasswordRecovery",value:function(e){return this._request("/recover",{method:"POST",body:JSON.stringify({email:e})})}},{key:"recover",value:function(e,t){return this._setRememberHeaders(t),this.verify("recovery",e,t)}},{key:"acceptInvite",value:function(e,t,r){var n=this;return this._setRememberHeaders(r),this._request("/verify",{method:"POST",body:JSON.stringify({token:e,password:t,type:"signup"})}).then((function(e){return n.createUser(e,r)}))}},{key:"acceptInviteExternalUrl",value:function(e,t){return"".concat(this.api.apiURL,"/authorize?provider=").concat(e,"&invite_token=").concat(t)}},{key:"createUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this._setRememberHeaders(t);var r=new a.default(this.api,e,this.audience);return r.getUserData().then((function(e){return t&&e._saveSession(),e}))}},{key:"currentUser",value:function(){var e=a.default.recoverSession(this.api);return e&&this._setRememberHeaders(e._fromStorage),e}},{key:"verify",value:function(e,t,r){var n=this;return this._setRememberHeaders(r),this._request("/verify",{method:"POST",body:JSON.stringify({token:t,type:e})}).then((function(e){return n.createUser(e,r)}))}},{key:"_setRememberHeaders",value:function(e){this.setCookie&&(this.api.defaultHeaders=this.api.defaultHeaders||{},this.api.defaultHeaders["X-Use-Cookie"]=e?"1":"session")}}])&&c(t.prototype,r),n&&c(t,n),e}();t.default=f,"undefined"!=typeof window&&(window.GoTrue=f)},function(e,t,r){"use strict";r.r(t);var n=r(1);let o;o=new(r.n(n).a)({APIUrl:"nostalgic-payne-051c14.netlify.app/.netlify/identity",audience:"",setCookie:!1}),window.auth=o,document.querySelector("form[name='signup']").addEventListener("submit",e=>{e.preventDefault();const t=e.target;o||console.log("No auth");const{email:r,password:n,campaign:i}=t.elements;o.signup(r.value,n.value).then(e=>console.log(e)).catch(e=>console.log(e))})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.getPagination=function(e){var t=e.headers.get("Link"),r={};if(null==t)return null;t=t.split(",");for(var o=e.headers.get("X-Total-Count"),i=0,a=t.length;i<a;i++){var s=t[i].replace(/(^\s*|\s*$)/,"").split(";"),u=n(s,2),c=u[0],l=u[1],f=c.match(/page=(\d+)/),p=f&&parseInt(f[1],10);l.match(/last/)?r.last=p:l.match(/next/)?r.next=p:l.match(/prev/)?r.prev=p:l.match(/first/)&&(r.first=p)}return r.last=Math.max(r.last||0,r.prev&&r.prev+1||0),r.current=r.next?r.next-1:r.last||1,r.total=o?parseInt(o,10):null,r}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=(o=r(5))&&o.__esModule?o:{default:o};function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p={},d=null,h={api:1,token:1,audience:1,url:1},y={api:1},v=function(){return"undefined"!=typeof window},b=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=t,this.url=t.apiURL,this.audience=n,this._processTokenResponse(r),d=this}var t,r,n;return t=e,n=[{key:"removeSavedSession",value:function(){v()&&localStorage.removeItem("gotrue.user")}},{key:"recoverSession",value:function(t){if(d)return d;var r=v()&&localStorage.getItem("gotrue.user");if(r)try{var n=JSON.parse(r),o=n.url,a=n.token,s=n.audience;return o&&a?new e(t||new i.default(o,{}),a,s)._saveUserData(n,!0):null}catch(e){return console.error(new Error("Gotrue-js: Error recovering session: ".concat(e))),null}return null}}],(r=[{key:"update",value:function(e){var t=this;return this._request("/user",{method:"PUT",body:JSON.stringify(e)}).then((function(e){return t._saveUserData(e)._refreshSavedSession()}))}},{key:"jwt",value:function(e){var t=this.tokenDetails();if(null==t)return Promise.reject(new Error("Gotrue-js: failed getting jwt access token"));var r=t.expires_at,n=t.refresh_token,o=t.access_token;return e||r-6e4<Date.now()?this._refreshToken(n):Promise.resolve(o)}},{key:"logout",value:function(){return this._request("/logout",{method:"POST"}).then(this.clearSession.bind(this)).catch(this.clearSession.bind(this))}},{key:"_refreshToken",value:function(e){var t=this;return p[e]?p[e]:p[e]=this.api.request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=refresh_token&refresh_token=".concat(e)}).then((function(r){return delete p[e],t._processTokenResponse(r),t._refreshSavedSession(),t.token.access_token})).catch((function(r){return delete p[e],t.clearSession(),Promise.reject(r)}))}},{key:"_request",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r.headers=r.headers||{};var n=r.audience||this.audience;return n&&(r.headers["X-JWT-AUD"]=n),this.jwt().then((function(n){return t.api.request(e,c({headers:Object.assign(r.headers,{Authorization:"Bearer ".concat(n)})},r)).catch((function(e){return e instanceof i.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message="".concat(e.json.error,": ").concat(e.json.error_description))),Promise.reject(e)}))}))}},{key:"getUserData",value:function(){return this._request("/user").then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this))}},{key:"_saveUserData",value:function(t,r){for(var n in t)n in e.prototype||n in h||(this[n]=t[n]);return r&&(this._fromStorage=!0),this}},{key:"_processTokenResponse",value:function(e){var t;this.token=e;try{t=JSON.parse(function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}var r=window.atob(t);try{return decodeURIComponent(escape(r))}catch(e){return r}}(e.access_token.split(".")[1])),this.token.expires_at=1e3*t.exp}catch(t){console.error(new Error("Gotrue-js: Failed to parse tokenResponse claims: ".concat(JSON.stringify(e))))}}},{key:"_refreshSavedSession",value:function(){return v()&&localStorage.getItem("gotrue.user")&&this._saveSession(),this}},{key:"_saveSession",value:function(){return v()&&localStorage.setItem("gotrue.user",JSON.stringify(this._details)),this}},{key:"tokenDetails",value:function(){return this.token}},{key:"clearSession",value:function(){e.removeSavedSession(),this.token=null,d=null}},{key:"admin",get:function(){return new a.default(this)}},{key:"_details",get:function(){var t={};for(var r in this)r in e.prototype||r in y||(t[r]=this[r]);return t}}])&&f(t.prototype,r),n&&f(t,n),e}();t.default=b},function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.user=t}var t,r,o;return t=e,(r=[{key:"listUsers",value:function(e){return this.user._request("/admin/users",{method:"GET",audience:e})}},{key:"getUser",value:function(e){return this.user._request("/admin/users/".concat(e.id))}},{key:"updateUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.user._request("/admin/users/".concat(e.id),{method:"PUT",body:JSON.stringify(t)})}},{key:"createUser",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.email=e,r.password=t,this.user._request("/admin/users",{method:"POST",body:JSON.stringify(r)})}},{key:"deleteUser",value:function(e){return this.user._request("/admin/users/".concat(e.id),{method:"DELETE"})}}])&&n(t.prototype,r),o&&n(t,o),e}();t.default=o}]);