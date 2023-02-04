/*!
  * Bootstrap v5.0.0-beta2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function i(t,e){var n,i;t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n=t,i=e,(Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(n,i)}var o,r,s=function(t){do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},a=function(t){var e=t.getAttribute("data-bs-target");if(!e||"#"===e){var n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),e=n&&"#"!==n?n.trim():null}return e},l=function(t){var e=a(t);return e&&document.querySelector(e)?e:null},c=function(t){var e=a(t);return e?document.querySelector(e):null},u=function(t){if(!t)return 0;var e=window.getComputedStyle(t),n=e.transitionDuration,i=e.transitionDelay,o=Number.parseFloat(n),r=Number.parseFloat(i);return o||r?(n=n.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(n)+Number.parseFloat(i))):0},f=function(t){t.dispatchEvent(new Event("transitionend"))},d=function(t){return(t[0]||t).nodeType},h=function(t,e){var n=!1,i=e+5;t.addEventListener("transitionend",(function e(){n=!0,t.removeEventListener("transitionend",e)})),setTimeout((function(){n||f(t)}),i)},p=function(t,e,n){Object.keys(n).forEach((function(i){var o,r=n[i],s=e[i],a=s&&d(s)?"element":null==(o=s)?""+o:{}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(r).test(a))throw new TypeError(t.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+r+'".')}))},g=function(t){if(!t)return!1;if(t.style&&t.parentNode&&t.parentNode.style){var e=getComputedStyle(t),n=getComputedStyle(t.parentNode);return"none"!==e.display&&"none"!==n.display&&"hidden"!==e.visibility}return!1},m=function(){return function(){}},v=function(t){return t.offsetHeight},_=function(){var t=window.jQuery;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},b="rtl"===document.documentElement.dir,y=function(t,e){var n;n=function(){var n=_();if(n){var i=n.fn[t];n.fn[t]=e.jQueryInterface,n.fn[t].Constructor=e,n.fn[t].noConflict=function(){return n.fn[t]=i,e.jQueryInterface}}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n()},w=(o={},r=1,{set:function(t,e,n){void 0===t.bsKey&&(t.bsKey={key:e,id:r},r++),o[t.bsKey.id]=n},get:function(t,e){if(!t||void 0===t.bsKey)return null;var n=t.bsKey;return n.key===e?o[n.id]:null},delete:function(t,e){if(void 0!==t.bsKey){var n=t.bsKey;n.key===e&&(delete o[n.id],delete t.bsKey)}}}),E=function(t,e,n){w.set(t,e,n)},T=function(t,e){return w.get(t,e)},k=/[^.]*(?=\..*)\.|.*/,A=/\..*/,L=/::\d+$/,O={},D=1,x={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function S(t,e){return e&&e+"::"+D++||t.uidEvent||D++}function j(t){var e=S(t);return t.uidEvent=e,O[e]=O[e]||{},O[e]}function N(t,e,n){void 0===n&&(n=null);for(var i=Object.keys(t),o=0,r=i.length;o<r;o++){var s=t[i[o]];if(s.originalHandler===e&&s.delegationSelector===n)return s}return null}function P(t,e,n){var i="string"==typeof e,o=i?n:e,r=t.replace(A,""),s=x[r];return s&&(r=s),C.has(r)||(r=t),[i,o,r]}function I(t,e,n,i,o){if("string"==typeof e&&t){n||(n=i,i=null);var r=P(e,n,i),s=r[0],a=r[1],l=r[2],c=j(t),u=c[l]||(c[l]={}),f=N(u,a,s?n:null);if(f)f.oneOff=f.oneOff&&o;else{var d=S(a,e.replace(k,"")),h=s?function(t,e,n){return function i(o){for(var r=t.querySelectorAll(e),s=o.target;s&&s!==this;s=s.parentNode)for(var a=r.length;a--;)if(r[a]===s)return o.delegateTarget=s,i.oneOff&&B.off(t,o.type,n),n.apply(s,[o]);return null}}(t,n,i):function(t,e){return function n(i){return i.delegateTarget=t,n.oneOff&&B.off(t,i.type,e),e.apply(t,[i])}}(t,n);h.delegationSelector=s?n:null,h.originalHandler=a,h.oneOff=o,h.uidEvent=d,u[d]=h,t.addEventListener(l,h,s)}}}function M(t,e,n,i,o){var r=N(e[n],i,o);r&&(t.removeEventListener(n,r,Boolean(o)),delete e[n][r.uidEvent])}var B={on:function(t,e,n,i){I(t,e,n,i,!1)},one:function(t,e,n,i){I(t,e,n,i,!0)},off:function(t,e,n,i){if("string"==typeof e&&t){var o=P(e,n,i),r=o[0],s=o[1],a=o[2],l=a!==e,c=j(t),u=e.startsWith(".");if(void 0===s){u&&Object.keys(c).forEach((function(n){!function(t,e,n,i){var o=e[n]||{};Object.keys(o).forEach((function(r){if(r.includes(i)){var s=o[r];M(t,e,n,s.originalHandler,s.delegationSelector)}}))}(t,c,n,e.slice(1))}));var f=c[a]||{};Object.keys(f).forEach((function(n){var i=n.replace(L,"");if(!l||e.includes(i)){var o=f[n];M(t,c,a,o.originalHandler,o.delegationSelector)}}))}else{if(!c||!c[a])return;M(t,c,a,s,r?n:null)}}},trigger:function(t,e,n){if("string"!=typeof e||!t)return null;var i,o=_(),r=e.replace(A,""),s=e!==r,a=C.has(r),l=!0,c=!0,u=!1,f=null;return s&&o&&(i=o.Event(e,n),o(t).trigger(i),l=!i.isPropagationStopped(),c=!i.isImmediatePropagationStopped(),u=i.isDefaultPrevented()),a?(f=document.createEvent("HTMLEvents")).initEvent(r,l,!0):f=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((function(t){Object.defineProperty(f,t,{get:function(){return n[t]}})})),u&&f.preventDefault(),c&&t.dispatchEvent(f),f.defaultPrevented&&void 0!==i&&i.preventDefault(),f}},H=function(){function t(t){t&&(this._element=t,E(t,this.constructor.DATA_KEY,this))}return t.prototype.dispose=function(){var t,e;t=this._element,e=this.constructor.DATA_KEY,w.delete(t,e),this._element=null},t.getInstance=function(t){return T(t,this.DATA_KEY)},e(t,null,[{key:"VERSION",get:function(){return"5.0.0-beta2"}}]),t}(),R=function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var o=n.prototype;return o.close=function(t){var e=t?this._getRootElement(t):this._element,n=this._triggerCloseEvent(e);null===n||n.defaultPrevented||this._removeElement(e)},o._getRootElement=function(t){return c(t)||t.closest(".alert")},o._triggerCloseEvent=function(t){return B.trigger(t,"close.bs.alert")},o._removeElement=function(t){var e=this;if(t.classList.remove("show"),t.classList.contains("fade")){var n=u(t);B.one(t,"transitionend",(function(){return e._destroyElement(t)})),h(t,n)}else this._destroyElement(t)},o._destroyElement=function(t){t.parentNode&&t.parentNode.removeChild(t),B.trigger(t,"closed.bs.alert")},n.jQueryInterface=function(t){return this.each((function(){var e=T(this,"bs.alert");e||(e=new n(this)),"close"===t&&e[t](this)}))},n.handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},e(n,null,[{key:"DATA_KEY",get:function(){return"bs.alert"}}]),n}(H);B.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',R.handleDismiss(new R)),y("alert",R);var W=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.toggle=function(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))},n.jQueryInterface=function(t){return this.each((function(){var e=T(this,"bs.button");e||(e=new n(this)),"toggle"===t&&e[t]()}))},e(n,null,[{key:"DATA_KEY",get:function(){return"bs.button"}}]),n}(H);function K(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function U(t){return t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}))}B.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',(function(t){t.preventDefault();var e=t.target.closest('[data-bs-toggle="button"]'),n=T(e,"bs.button");n||(n=new W(e)),n.toggle()})),y("button",W);var z={setDataAttribute:function(t,e,n){t.setAttribute("data-bs-"+U(e),n)},removeDataAttribute:function(t,e){t.removeAttribute("data-bs-"+U(e))},getDataAttributes:function(t){if(!t)return{};var e={};return Object.keys(t.dataset).filter((function(t){return t.startsWith("bs")})).forEach((function(n){var i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=K(t.dataset[n])})),e},getDataAttribute:function(t,e){return K(t.getAttribute("data-bs-"+U(e)))},offset:function(t){var e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:function(t){return{top:t.offsetTop,left:t.offsetLeft}}},F=function(t,e){var n;return void 0===e&&(e=document.documentElement),(n=[]).concat.apply(n,Element.prototype.querySelectorAll.call(e,t))},Y=function(t,e){return void 0===e&&(e=document.documentElement),Element.prototype.querySelector.call(e,t)},q=function(t,e){var n;return(n=[]).concat.apply(n,t.children).filter((function(t){return t.matches(e)}))},V=function(t,e){for(var n=t.previousElementSibling;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},X={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Q={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},$=function(t){function o(e,n){var i;return(i=t.call(this,e)||this)._items=null,i._interval=null,i._activeElement=null,i._isPaused=!1,i._isSliding=!1,i.touchTimeout=null,i.touchStartX=0,i.touchDeltaX=0,i._config=i._getConfig(n),i._indicatorsElement=Y(".carousel-indicators",i._element),i._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,i._pointerEvent=Boolean(window.PointerEvent),i._addEventListeners(),i}i(o,t);var r=o.prototype;return r.next=function(){this._isSliding||this._slide("next")},r.nextWhenVisible=function(){!document.hidden&&g(this._element)&&this.next()},r.prev=function(){this._isSliding||this._slide("prev")},r.pause=function(t){t||(this._isPaused=!0),Y(".carousel-item-next, .carousel-item-prev",this._element)&&(f(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},r.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},r.to=function(t){var e=this;this._activeElement=Y(".active.carousel-item",this._element);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)B.one(this._element,"slid.bs.carousel",(function(){return e.to(t)}));else{if(n===t)return this.pause(),void this.cycle();var i=t>n?"next":"prev";this._slide(i,this._items[t])}},r.dispose=function(){t.prototype.dispose.call(this),B.off(this._element,".bs.carousel"),this._items=null,this._config=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},r._getConfig=function(t){return t=n({},X,t),p("carousel",t,Q),t},r._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&(b?this.next():this.prev()),e<0&&(b?this.prev():this.next())}},r._addEventListeners=function(){var t=this;this._config.keyboard&&B.on(this._element,"keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&(B.on(this._element,"mouseenter.bs.carousel",(function(e){return t.pause(e)})),B.on(this._element,"mouseleave.bs.carousel",(function(e){return t.cycle(e)}))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()},r._addTouchEventListeners=function(){var t=this,e=function(e){!t._pointerEvent||"pen"!==e.pointerType&&"touch"!==e.pointerType?t._pointerEvent||(t.touchStartX=e.touches[0].clientX):t.touchStartX=e.clientX},n=function(e){!t._pointerEvent||"pen"!==e.pointerType&&"touch"!==e.pointerType||(t.touchDeltaX=e.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};F(".carousel-item img",this._element).forEach((function(t){B.on(t,"dragstart.bs.carousel",(function(t){return t.preventDefault()}))})),this._pointerEvent?(B.on(this._element,"pointerdown.bs.carousel",(function(t){return e(t)})),B.on(this._element,"pointerup.bs.carousel",(function(t){return n(t)})),this._element.classList.add("pointer-event")):(B.on(this._element,"touchstart.bs.carousel",(function(t){return e(t)})),B.on(this._element,"touchmove.bs.carousel",(function(e){return function(e){e.touches&&e.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.touches[0].clientX-t.touchStartX}(e)})),B.on(this._element,"touchend.bs.carousel",(function(t){return n(t)})))},r._keydown=function(t){/input|textarea/i.test(t.target.tagName)||("ArrowLeft"===t.key?(t.preventDefault(),b?this.next():this.prev()):"ArrowRight"===t.key&&(t.preventDefault(),b?this.prev():this.next()))},r._getItemIndex=function(t){return this._items=t&&t.parentNode?F(".carousel-item",t.parentNode):[],this._items.indexOf(t)},r._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+("prev"===t?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},r._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(Y(".active.carousel-item",this._element));return B.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:i,to:n})},r._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=Y(".active",this._indicatorsElement);e.classList.remove("active"),e.removeAttribute("aria-current");for(var n=F("[data-bs-target]",this._indicatorsElement),i=0;i<n.length;i++)if(Number.parseInt(n[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){n[i].classList.add("active"),n[i].setAttribute("aria-current","true");break}}},r._updateInterval=function(){var t=this._activeElement||Y(".active.carousel-item",this._element);if(t){var e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}},r._slide=function(t,e){var n=this,i=Y(".active.carousel-item",this._element),o=this._getItemIndex(i),r=e||i&&this._getItemByDirection(t,i),s=this._getItemIndex(r),a=Boolean(this._interval),l="next"===t?"carousel-item-start":"carousel-item-end",c="next"===t?"carousel-item-next":"carousel-item-prev",f="next"===t?"left":"right";if(r&&r.classList.contains("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(r,f).defaultPrevented&&i&&r){if(this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r,this._element.classList.contains("slide")){r.classList.add(c),v(r),i.classList.add(l),r.classList.add(l);var d=u(i);B.one(i,"transitionend",(function(){r.classList.remove(l,c),r.classList.add("active"),i.classList.remove("active",c,l),n._isSliding=!1,setTimeout((function(){B.trigger(n._element,"slid.bs.carousel",{relatedTarget:r,direction:f,from:o,to:s})}),0)})),h(i,d)}else i.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,B.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:f,from:o,to:s});a&&this.cycle()}},o.carouselInterface=function(t,e){var i=T(t,"bs.carousel"),r=n({},X,z.getDataAttributes(t));"object"==typeof e&&(r=n({},r,e));var s="string"==typeof e?e:r.slide;if(i||(i=new o(t,r)),"number"==typeof e)i.to(e);else if("string"==typeof s){if(void 0===i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else r.interval&&r.ride&&(i.pause(),i.cycle())},o.jQueryInterface=function(t){return this.each((function(){o.carouselInterface(this,t)}))},o.dataApiClickHandler=function(t){var e=c(this);if(e&&e.classList.contains("carousel")){var i=n({},z.getDataAttributes(e),z.getDataAttributes(this)),r=this.getAttribute("data-bs-slide-to");r&&(i.interval=!1),o.carouselInterface(e,i),r&&T(e,"bs.carousel").to(r),t.preventDefault()}},e(o,null,[{key:"Default",get:function(){return X}},{key:"DATA_KEY",get:function(){return"bs.carousel"}}]),o}(H);B.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",$.dataApiClickHandler),B.on(window,"load.bs.carousel.data-api",(function(){for(var t=F('[data-bs-ride="carousel"]'),e=0,n=t.length;e<n;e++)$.carouselInterface(t[e],T(t[e],"bs.carousel"))})),y("carousel",$);var G={toggle:!0,parent:""},Z={toggle:"boolean",parent:"(string|element)"},J=function(t){function o(e,n){var i;(i=t.call(this,e)||this)._isTransitioning=!1,i._config=i._getConfig(n),i._triggerArray=F('[data-bs-toggle="collapse"][href="#'+e.id+'"],[data-bs-toggle="collapse"][data-bs-target="#'+e.id+'"]');for(var o=F('[data-bs-toggle="collapse"]'),r=0,s=o.length;r<s;r++){var a=o[r],c=l(a),u=F(c).filter((function(t){return t===e}));null!==c&&u.length&&(i._selector=c,i._triggerArray.push(a))}return i._parent=i._config.parent?i._getParent():null,i._config.parent||i._addAriaAndCollapsedClass(i._element,i._triggerArray),i._config.toggle&&i.toggle(),i}i(o,t);var r=o.prototype;return r.toggle=function(){this._element.classList.contains("show")?this.hide():this.show()},r.show=function(){var t=this;if(!this._isTransitioning&&!this._element.classList.contains("show")){var e,n;this._parent&&0===(e=F(".show, .collapsing",this._parent).filter((function(e){return"string"==typeof t._config.parent?e.getAttribute("data-bs-parent")===t._config.parent:e.classList.contains("collapse")}))).length&&(e=null);var i=Y(this._selector);if(e){var r=e.find((function(t){return i!==t}));if((n=r?T(r,"bs.collapse"):null)&&n._isTransitioning)return}if(!B.trigger(this._element,"show.bs.collapse").defaultPrevented){e&&e.forEach((function(t){i!==t&&o.collapseInterface(t,"hide"),n||E(t,"bs.collapse",null)}));var s=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach((function(t){t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)})),this.setTransitioning(!0);var a="scroll"+(s[0].toUpperCase()+s.slice(1)),l=u(this._element);B.one(this._element,"transitionend",(function(){t._element.classList.remove("collapsing"),t._element.classList.add("collapse","show"),t._element.style[s]="",t.setTransitioning(!1),B.trigger(t._element,"shown.bs.collapse")})),h(this._element,l),this._element.style[s]=this._element[a]+"px"}}},r.hide=function(){var t=this;if(!this._isTransitioning&&this._element.classList.contains("show")&&!B.trigger(this._element,"hide.bs.collapse").defaultPrevented){var e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",v(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");var n=this._triggerArray.length;if(n>0)for(var i=0;i<n;i++){var o=this._triggerArray[i],r=c(o);r&&!r.classList.contains("show")&&(o.classList.add("collapsed"),o.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[e]="";var s=u(this._element);B.one(this._element,"transitionend",(function(){t.setTransitioning(!1),t._element.classList.remove("collapsing"),t._element.classList.add("collapse"),B.trigger(t._element,"hidden.bs.collapse")})),h(this._element,s)}},r.setTransitioning=function(t){this._isTransitioning=t},r.dispose=function(){t.prototype.dispose.call(this),this._config=null,this._parent=null,this._triggerArray=null,this._isTransitioning=null},r._getConfig=function(t){return(t=n({},G,t)).toggle=Boolean(t.toggle),p("collapse",t,Z),t},r._getDimension=function(){return this._element.classList.contains("width")?"width":"height"},r._getParent=function(){var t=this,e=this._config.parent;return d(e)?void 0===e.jquery&&void 0===e[0]||(e=e[0]):e=Y(e),F('[data-bs-toggle="collapse"][data-bs-parent="'+e+'"]',e).forEach((function(e){var n=c(e);t._addAriaAndCollapsedClass(n,[e])})),e},r._addAriaAndCollapsedClass=function(t,e){if(t&&e.length){var n=t.classList.contains("show");e.forEach((function(t){n?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",n)}))}},o.collapseInterface=function(t,e){var i=T(t,"bs.collapse"),r=n({},G,z.getDataAttributes(t),"object"==typeof e&&e?e:{});if(!i&&r.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(r.toggle=!1),i||(i=new o(t,r)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}},o.jQueryInterface=function(t){return this.each((function(){o.collapseInterface(this,t)}))},e(o,null,[{key:"Default",get:function(){return G}},{key:"DATA_KEY",get:function(){return"bs.collapse"}}]),o}(H);B.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();var e=z.getDataAttributes(this),n=l(this);F(n).forEach((function(t){var n,i=T(t,"bs.collapse");i?(null===i._parent&&"string"==typeof e.parent&&(i._config.parent=e.parent,i._parent=i._getParent()),n="toggle"):n=e,J.collapseInterface(t,n)}))})),y("collapse",J);var tt="top",et="bottom",nt="right",it="left",ot=[tt,et,nt,it],rt=ot.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),st=[].concat(ot,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),at=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function lt(t){return t?(t.nodeName||"").toLowerCase():null}function ct(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ut(t){return t instanceof ct(t).Element||t instanceof Element}function ft(t){return t instanceof ct(t).HTMLElement||t instanceof HTMLElement}var dt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},o=e.elements[t];ft(o)&&lt(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(t){var e=i[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var i=e.elements[t],o=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});ft(i)&&lt(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(t){i.removeAttribute(t)})))}))}},requires:["computeStyles"]};function ht(t){return t.split("-")[0]}function pt(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function gt(t,e){var n,i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&((n=i)instanceof ct(n).ShadowRoot||n instanceof ShadowRoot)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function mt(t){return ct(t).getComputedStyle(t)}function vt(t){return["table","td","th"].indexOf(lt(t))>=0}function _t(t){return((ut(t)?t.ownerDocument:t.document)||window.document).documentElement}function bt(t){return"html"===lt(t)?t:t.assignedSlot||t.parentNode||t.host||_t(t)}function yt(t){if(!ft(t)||"fixed"===mt(t).position)return null;var e=t.offsetParent;if(e){var n=_t(e);if("body"===lt(e)&&"static"===mt(e).position&&"static"!==mt(n).position)return n}return e}function wt(t){for(var e=ct(t),n=yt(t);n&&vt(n)&&"static"===mt(n).position;)n=yt(n);return n&&"body"===lt(n)&&"static"===mt(n).position?e:n||function(t){for(var e=bt(t);ft(e)&&["html","body"].indexOf(lt(e))<0;){var n=mt(e);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return e;e=e.parentNode}return null}(t)||e}function Et(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Tt(t,e,n){return Math.max(t,Math.min(e,n))}function kt(t){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),t)}function At(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var Lt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,i=t.name,o=n.elements.arrow,r=n.modifiersData.popperOffsets,s=ht(n.placement),a=Et(s),l=[it,nt].indexOf(s)>=0?"height":"width";if(o&&r){var c=n.modifiersData[i+"#persistent"].padding,u=pt(o),f="y"===a?tt:it,d="y"===a?et:nt,h=n.rects.reference[l]+n.rects.reference[a]-r[a]-n.rects.popper[l],p=r[a]-n.rects.reference[a],g=wt(o),m=g?"y"===a?g.clientHeight||0:g.clientWidth||0:0,v=h/2-p/2,_=c[f],b=m-u[l]-c[d],y=m/2-u[l]/2+v,w=Tt(_,y,b),E=a;n.modifiersData[i]=((e={})[E]=w,e.centerOffset=w-y,e)}},effect:function(t){var e=t.state,n=t.options,i=t.name,o=n.element,r=void 0===o?"[data-popper-arrow]":o,s=n.padding,a=void 0===s?0:s;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r)))&&gt(e.elements.popper,r)&&(e.elements.arrow=r,e.modifiersData[i+"#persistent"]={padding:kt("number"!=typeof a?a:At(a,ot))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},Ot={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Dt(t){var e,n=t.popper,i=t.popperRect,o=t.placement,r=t.offsets,s=t.position,a=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets?function(t){var e=t.x,n=t.y,i=window.devicePixelRatio||1;return{x:Math.round(e*i)/i||0,y:Math.round(n*i)/i||0}}(r):r,u=c.x,f=void 0===u?0:u,d=c.y,h=void 0===d?0:d,p=r.hasOwnProperty("x"),g=r.hasOwnProperty("y"),m=it,v=tt,_=window;if(l){var b=wt(n);b===ct(n)&&(b=_t(n)),o===tt&&(v=et,h-=b.clientHeight-i.height,h*=a?1:-1),o===it&&(m=nt,f-=b.clientWidth-i.width,f*=a?1:-1)}var y,w=Object.assign({position:s},l&&Ot);return a?Object.assign(Object.assign({},w),{},((y={})[v]=g?"0":"",y[m]=p?"0":"",y.transform=(_.devicePixelRatio||1)<2?"translate("+f+"px, "+h+"px)":"translate3d("+f+"px, "+h+"px, 0)",y)):Object.assign(Object.assign({},w),{},((e={})[v]=g?h+"px":"",e[m]=p?f+"px":"",e.transform="",e))}var xt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,l=void 0===a||a,c={placement:ht(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),Dt(Object.assign(Object.assign({},c),{},{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),Dt(Object.assign(Object.assign({},c),{},{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-placement":e.placement})},data:{}},Ct={passive:!0},St={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,o=i.scroll,r=void 0===o||o,s=i.resize,a=void 0===s||s,l=ct(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach((function(t){t.addEventListener("scroll",n.update,Ct)})),a&&l.addEventListener("resize",n.update,Ct),function(){r&&c.forEach((function(t){t.removeEventListener("scroll",n.update,Ct)})),a&&l.removeEventListener("resize",n.update,Ct)}},data:{}},jt={left:"right",right:"left",bottom:"top",top:"bottom"};function Nt(t){return t.replace(/left|right|bottom|top/g,(function(t){return jt[t]}))}var Pt={start:"end",end:"start"};function It(t){return t.replace(/start|end/g,(function(t){return Pt[t]}))}function Mt(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function Bt(t){var e=ct(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ht(t){return Mt(_t(t)).left+Bt(t).scrollLeft}function Rt(t){var e=mt(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function Wt(t,e){void 0===e&&(e=[]);var n=function t(e){return["html","body","#document"].indexOf(lt(e))>=0?e.ownerDocument.body:ft(e)&&Rt(e)?e:t(bt(e))}(t),i="body"===lt(n),o=ct(n),r=i?[o].concat(o.visualViewport||[],Rt(n)?n:[]):n,s=e.concat(r);return i?s:s.concat(Wt(bt(r)))}function Kt(t){return Object.assign(Object.assign({},t),{},{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ut(t,e){return"viewport"===e?Kt(function(t){var e=ct(t),n=_t(t),i=e.visualViewport,o=n.clientWidth,r=n.clientHeight,s=0,a=0;return i&&(o=i.width,r=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=i.offsetLeft,a=i.offsetTop)),{width:o,height:r,x:s+Ht(t),y:a}}(t)):ft(e)?function(t){var e=Mt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Kt(function(t){var e=_t(t),n=Bt(t),i=t.ownerDocument.body,o=Math.max(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),r=Math.max(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-n.scrollLeft+Ht(t),a=-n.scrollTop;return"rtl"===mt(i||e).direction&&(s+=Math.max(e.clientWidth,i?i.clientWidth:0)-o),{width:o,height:r,x:s,y:a}}(_t(t)))}function zt(t){return t.split("-")[1]}function Ft(t){var e,n=t.reference,i=t.element,o=t.placement,r=o?ht(o):null,s=o?zt(o):null,a=n.x+n.width/2-i.width/2,l=n.y+n.height/2-i.height/2;switch(r){case tt:e={x:a,y:n.y-i.height};break;case et:e={x:a,y:n.y+n.height};break;case nt:e={x:n.x+n.width,y:l};break;case it:e={x:n.x-i.width,y:l};break;default:e={x:n.x,y:n.y}}var c=r?Et(r):null;if(null!=c){var u="y"===c?"height":"width";switch(s){case"start":e[c]=e[c]-(n[u]/2-i[u]/2);break;case"end":e[c]=e[c]+(n[u]/2-i[u]/2)}}return e}function Yt(t,e){void 0===e&&(e={});var n=e,i=n.placement,o=void 0===i?t.placement:i,r=n.boundary,s=void 0===r?"clippingParents":r,a=n.rootBoundary,l=void 0===a?"viewport":a,c=n.elementContext,u=void 0===c?"popper":c,f=n.altBoundary,d=void 0!==f&&f,h=n.padding,p=void 0===h?0:h,g=kt("number"!=typeof p?p:At(p,ot)),m="popper"===u?"reference":"popper",v=t.elements.reference,_=t.rects.popper,b=t.elements[d?m:u],y=function(t,e,n){var i="clippingParents"===e?function(t){var e=Wt(bt(t)),n=["absolute","fixed"].indexOf(mt(t).position)>=0&&ft(t)?wt(t):t;return ut(n)?e.filter((function(t){return ut(t)&&gt(t,n)&&"body"!==lt(t)})):[]}(t):[].concat(e),o=[].concat(i,[n]),r=o[0],s=o.reduce((function(e,n){var i=Ut(t,n);return e.top=Math.max(i.top,e.top),e.right=Math.min(i.right,e.right),e.bottom=Math.min(i.bottom,e.bottom),e.left=Math.max(i.left,e.left),e}),Ut(t,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(ut(b)?b:b.contextElement||_t(t.elements.popper),s,l),w=Mt(v),E=Ft({reference:w,element:_,strategy:"absolute",placement:o}),T=Kt(Object.assign(Object.assign({},_),E)),k="popper"===u?T:w,A={top:y.top-k.top+g.top,bottom:k.bottom-y.bottom+g.bottom,left:y.left-k.left+g.left,right:k.right-y.right+g.right},L=t.modifiersData.offset;if("popper"===u&&L){var O=L[o];Object.keys(A).forEach((function(t){var e=[nt,et].indexOf(t)>=0?1:-1,n=[tt,et].indexOf(t)>=0?"y":"x";A[t]+=O[n]*e}))}return A}function qt(t,e){void 0===e&&(e={});var n=e,i=n.placement,o=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=void 0===l?st:l,u=zt(i),f=u?a?rt:rt.filter((function(t){return zt(t)===u})):ot,d=f.filter((function(t){return c.indexOf(t)>=0}));0===d.length&&(d=f);var h=d.reduce((function(e,n){return e[n]=Yt(t,{placement:n,boundary:o,rootBoundary:r,padding:s})[ht(n)],e}),{});return Object.keys(h).sort((function(t,e){return h[t]-h[e]}))}var Vt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var o=n.mainAxis,r=void 0===o||o,s=n.altAxis,a=void 0===s||s,l=n.fallbackPlacements,c=n.padding,u=n.boundary,f=n.rootBoundary,d=n.altBoundary,h=n.flipVariations,p=void 0===h||h,g=n.allowedAutoPlacements,m=e.options.placement,v=ht(m),_=l||(v!==m&&p?function(t){if("auto"===ht(t))return[];var e=Nt(t);return[It(t),e,It(e)]}(m):[Nt(m)]),b=[m].concat(_).reduce((function(t,n){return t.concat("auto"===ht(n)?qt(e,{placement:n,boundary:u,rootBoundary:f,padding:c,flipVariations:p,allowedAutoPlacements:g}):n)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,T=!0,k=b[0],A=0;A<b.length;A++){var L=b[A],O=ht(L),D="start"===zt(L),x=[tt,et].indexOf(O)>=0,C=x?"width":"height",S=Yt(e,{placement:L,boundary:u,rootBoundary:f,altBoundary:d,padding:c}),j=x?D?nt:it:D?et:tt;y[C]>w[C]&&(j=Nt(j));var N=Nt(j),P=[];if(r&&P.push(S[O]<=0),a&&P.push(S[j]<=0,S[N]<=0),P.every((function(t){return t}))){k=L,T=!1;break}E.set(L,P)}if(T)for(var I=function(t){var e=b.find((function(e){var n=E.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return k=e,"break"},M=p?3:1;M>0&&"break"!==I(M);M--);e.placement!==k&&(e.modifiersData[i]._skip=!0,e.placement=k,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Xt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Qt(t){return[tt,nt,et,it].some((function(e){return t[e]>=0}))}var $t={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,i=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,s=Yt(e,{elementContext:"reference"}),a=Yt(e,{altBoundary:!0}),l=Xt(s,i),c=Xt(a,o,r),u=Qt(l),f=Qt(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-reference-hidden":u,"data-popper-escaped":f})}},Gt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,i=t.name,o=n.offset,r=void 0===o?[0,0]:o,s=st.reduce((function(t,n){return t[n]=function(t,e,n){var i=ht(t),o=[it,tt].indexOf(i)>=0?-1:1,r="function"==typeof n?n(Object.assign(Object.assign({},e),{},{placement:t})):n,s=r[0],a=r[1];return s=s||0,a=(a||0)*o,[it,nt].indexOf(i)>=0?{x:a,y:s}:{x:s,y:a}}(n,e.rects,r),t}),{}),a=s[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[i]=s}},Zt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=Ft({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},Jt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,i=t.name,o=n.mainAxis,r=void 0===o||o,s=n.altAxis,a=void 0!==s&&s,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,f=n.padding,d=n.tether,h=void 0===d||d,p=n.tetherOffset,g=void 0===p?0:p,m=Yt(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),v=ht(e.placement),_=zt(e.placement),b=!_,y=Et(v),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,T=e.rects.reference,k=e.rects.popper,A="function"==typeof g?g(Object.assign(Object.assign({},e.rects),{},{placement:e.placement})):g,L={x:0,y:0};if(E){if(r){var O="y"===y?tt:it,D="y"===y?et:nt,x="y"===y?"height":"width",C=E[y],S=E[y]+m[O],j=E[y]-m[D],N=h?-k[x]/2:0,P="start"===_?T[x]:k[x],I="start"===_?-k[x]:-T[x],M=e.elements.arrow,B=h&&M?pt(M):{width:0,height:0},H=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},R=H[O],W=H[D],K=Tt(0,T[x],B[x]),U=b?T[x]/2-N-K-R-A:P-K-R-A,z=b?-T[x]/2+N+K+W+A:I+K+W+A,F=e.elements.arrow&&wt(e.elements.arrow),Y=F?"y"===y?F.clientTop||0:F.clientLeft||0:0,q=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,V=E[y]+U-q-Y,X=E[y]+z-q,Q=Tt(h?Math.min(S,V):S,C,h?Math.max(j,X):j);E[y]=Q,L[y]=Q-C}if(a){var $="x"===y?tt:it,G="x"===y?et:nt,Z=E[w],J=Tt(Z+m[$],Z,Z-m[G]);E[w]=J,L[w]=J-Z}e.modifiersData[i]=L}},requiresIfExists:["offset"]};function te(t,e,n){void 0===n&&(n=!1);var i,o,r=_t(e),s=Mt(t),a=ft(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!n)&&(("body"!==lt(e)||Rt(r))&&(l=(i=e)!==ct(i)&&ft(i)?{scrollLeft:(o=i).scrollLeft,scrollTop:o.scrollTop}:Bt(i)),ft(e)?((c=Mt(e)).x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=Ht(r))),{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}var ee={placement:"bottom",modifiers:[],strategy:"absolute"};function ne(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function ie(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,i=void 0===n?[]:n,o=e.defaultOptions,r=void 0===o?ee:o;return function(t,e,n){void 0===n&&(n=r);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},ee),r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,u={state:a,setOptions:function(n){f(),a.options=Object.assign(Object.assign(Object.assign({},r),a.options),n),a.scrollParents={reference:ut(t)?Wt(t):t.contextElement?Wt(t.contextElement):[],popper:Wt(e)};var o,s,c=function(t){var e=function(t){var e=new Map,n=new Set,i=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||function t(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(i){if(!n.has(i)){var o=e.get(i);o&&t(o)}})),i.push(o)}(t)})),i}(t);return at.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((o=[].concat(i,a.options.modifiers),s=o.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign(Object.assign(Object.assign({},n),e),{},{options:Object.assign(Object.assign({},n.options),e.options),data:Object.assign(Object.assign({},n.data),e.data)}):e,t}),{}),Object.keys(s).map((function(t){return s[t]}))));return a.orderedModifiers=c.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,i=void 0===n?{}:n,o=t.effect;if("function"==typeof o){var r=o({state:a,name:e,instance:u,options:i});l.push(r||function(){})}})),u.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,n=t.popper;if(ne(e,n)){a.rects={reference:te(e,wt(n),"fixed"===a.options.strategy),popper:pt(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var o=a.orderedModifiers[i],r=o.fn,s=o.options,l=void 0===s?{}:s,f=o.name;"function"==typeof r&&(a=r({state:a,options:l,name:f,instance:u})||a)}else a.reset=!1,i=-1}}},update:(o=function(){return new Promise((function(t){u.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(o())}))}))),s}),destroy:function(){f(),c=!0}};if(!ne(t,e))return u;function f(){l.forEach((function(t){return t()})),l=[]}return u.setOptions(n).then((function(t){!c&&n.onFirstUpdate&&n.onFirstUpdate(t)})),u}}var oe=ie(),re=ie({defaultModifiers:[St,Zt,xt,dt]}),se=ie({defaultModifiers:[St,Zt,xt,dt,Gt,Vt,Jt,Lt,$t]}),ae=Object.freeze({__proto__:null,popperGenerator:ie,detectOverflow:Yt,createPopperBase:oe,createPopper:se,createPopperLite:re,top:tt,bottom:et,right:nt,left:it,auto:"auto",basePlacements:ot,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:rt,placements:st,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:at,applyStyles:dt,arrow:Lt,computeStyles:xt,eventListeners:St,flip:Vt,hide:$t,offset:Gt,popperOffsets:Zt,preventOverflow:Jt}),le=new RegExp("ArrowUp|ArrowDown|Escape"),ce=b?"top-end":"top-start",ue=b?"top-start":"top-end",fe=b?"bottom-end":"bottom-start",de=b?"bottom-start":"bottom-end",he=b?"left-start":"right-start",pe=b?"right-start":"left-start",ge={offset:[0,2],flip:!0,boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null},me={offset:"(array|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)"},ve=function(t){function o(e,n){var i;return(i=t.call(this,e)||this)._popper=null,i._config=i._getConfig(n),i._menu=i._getMenuElement(),i._inNavbar=i._detectNavbar(),i._addEventListeners(),i}i(o,t);var r=o.prototype;return r.toggle=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")){var t=this._element.classList.contains("show");o.clearMenus(),t||this.show()}},r.show=function(){if(!(this._element.disabled||this._element.classList.contains("disabled")||this._menu.classList.contains("show"))){var t=o.getParentFromElement(this._element),e={relatedTarget:this._element};if(!B.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._inNavbar)z.setDataAttribute(this._menu,"popper","none");else{if(void 0===ae)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var n=this._element;"parent"===this._config.reference?n=t:d(this._config.reference)?(n=this._config.reference,void 0!==this._config.reference.jquery&&(n=this._config.reference[0])):"object"==typeof this._config.reference&&(n=this._config.reference);var i=this._getPopperConfig(),r=i.modifiers.find((function(t){return"applyStyles"===t.name&&!1===t.enabled}));this._popper=se(n,this._menu,i),r&&z.setDataAttribute(this._menu,"popper","static")}var s;"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&(s=[]).concat.apply(s,document.body.children).forEach((function(t){return B.on(t,"mouseover",null,(function(){}))})),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),B.trigger(this._element,"shown.bs.dropdown",e)}}},r.hide=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")&&this._menu.classList.contains("show")){var t={relatedTarget:this._element};B.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||(this._popper&&this._popper.destroy(),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),z.removeDataAttribute(this._menu,"popper"),B.trigger(this._element,"hidden.bs.dropdown",t))}},r.dispose=function(){t.prototype.dispose.call(this),B.off(this._element,".bs.dropdown"),this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null)},r.update=function(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()},r._addEventListeners=function(){var t=this;B.on(this._element,"click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},r._getConfig=function(t){if(t=n({},this.constructor.Default,z.getDataAttributes(this._element),t),p("dropdown",t,this.constructor.DefaultType),"object"==typeof t.reference&&!d(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t},r._getMenuElement=function(){return function(t,e){for(var n=t.nextElementSibling;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]}(this._element,".dropdown-menu")[0]},r._getPlacement=function(){var t=this._element.parentNode;if(t.classList.contains("dropend"))return he;if(t.classList.contains("dropstart"))return pe;var e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ue:ce:e?de:fe},r._detectNavbar=function(){return null!==this._element.closest(".navbar")},r._getOffset=function(){var t=this,e=this._config.offset;return"string"==typeof e?e.split(",").map((function(t){return Number.parseInt(t,10)})):"function"==typeof e?function(n){return e(n,t._element)}:e},r._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{altBoundary:this._config.flip,boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),n({},t,"function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig)},o.dropdownInterface=function(t,e){var n=T(t,"bs.dropdown");if(n||(n=new o(t,"object"==typeof e?e:null)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}},o.jQueryInterface=function(t){return this.each((function(){o.dropdownInterface(this,t)}))},o.clearMenus=function(t){if(!t||2!==t.button&&("keyup"!==t.type||"Tab"===t.key))for(var e=F('[data-bs-toggle="dropdown"]'),n=0,i=e.length;n<i;n++){var o=T(e[n],"bs.dropdown"),r={relatedTarget:e[n]};if(t&&"click"===t.type&&(r.clickEvent=t),o){var s,a=o._menu;if(e[n].classList.contains("show")&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&"Tab"===t.key)&&a.contains(t.target)||B.trigger(e[n],"hide.bs.dropdown",r).defaultPrevented))"ontouchstart"in document.documentElement&&(s=[]).concat.apply(s,document.body.children).forEach((function(t){return B.off(t,"mouseover",null,(function(){}))})),e[n].setAttribute("aria-expanded","false"),o._popper&&o._popper.destroy(),a.classList.remove("show"),e[n].classList.remove("show"),z.removeDataAttribute(a,"popper"),B.trigger(e[n],"hidden.bs.dropdown",r)}}},o.getParentFromElement=function(t){return c(t)||t.parentNode},o.dataApiKeydownHandler=function(t){if(!(/input|textarea/i.test(t.target.tagName)?"Space"===t.key||"Escape"!==t.key&&("ArrowDown"!==t.key&&"ArrowUp"!==t.key||t.target.closest(".dropdown-menu")):!le.test(t.key))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!this.classList.contains("disabled"))){var e=o.getParentFromElement(this),n=this.classList.contains("show");if("Escape"===t.key)return(this.matches('[data-bs-toggle="dropdown"]')?this:V(this,'[data-bs-toggle="dropdown"]')[0]).focus(),void o.clearMenus();if(n||"ArrowUp"!==t.key&&"ArrowDown"!==t.key)if(n&&"Space"!==t.key){var i=F(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",e).filter(g);if(i.length){var r=i.indexOf(t.target);"ArrowUp"===t.key&&r>0&&r--,"ArrowDown"===t.key&&r<i.length-1&&r++,i[r=-1===r?0:r].focus()}}else o.clearMenus();else(this.matches('[data-bs-toggle="dropdown"]')?this:V(this,'[data-bs-toggle="dropdown"]')[0]).click()}},e(o,null,[{key:"Default",get:function(){return ge}},{key:"DefaultType",get:function(){return me}},{key:"DATA_KEY",get:function(){return"bs.dropdown"}}]),o}(H);B.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',ve.dataApiKeydownHandler),B.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",ve.dataApiKeydownHandler),B.on(document,"click.bs.dropdown.data-api",ve.clearMenus),B.on(document,"keyup.bs.dropdown.data-api",ve.clearMenus),B.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),ve.dropdownInterface(this,"toggle")})),B.on(document,"click.bs.dropdown.data-api",".dropdown form",(function(t){return t.stopPropagation()})),y("dropdown",ve);var _e={backdrop:!0,keyboard:!0,focus:!0},be={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},ye=function(t){function o(e,n){var i;return(i=t.call(this,e)||this)._config=i._getConfig(n),i._dialog=Y(".modal-dialog",e),i._backdrop=null,i._isShown=!1,i._isBodyOverflowing=!1,i._ignoreBackdropClick=!1,i._isTransitioning=!1,i._scrollbarWidth=0,i}i(o,t);var r=o.prototype;return r.toggle=function(t){return this._isShown?this.hide():this.show(t)},r.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){this._element.classList.contains("fade")&&(this._isTransitioning=!0);var n=B.trigger(this._element,"show.bs.modal",{relatedTarget:t});this._isShown||n.defaultPrevented||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),B.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',(function(t){return e.hide(t)})),B.on(this._dialog,"mousedown.dismiss.bs.modal",(function(){B.one(e._element,"mouseup.dismiss.bs.modal",(function(t){t.target===e._element&&(e._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return e._showElement(t)})))}},r.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning&&!B.trigger(this._element,"hide.bs.modal").defaultPrevented){this._isShown=!1;var n=this._element.classList.contains("fade");if(n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),B.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),B.off(this._element,"click.dismiss.bs.modal"),B.off(this._dialog,"mousedown.dismiss.bs.modal"),n){var i=u(this._element);B.one(this._element,"transitionend",(function(t){return e._hideModal(t)})),h(this._element,i)}else this._hideModal()}},r.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return B.off(t,".bs.modal")})),t.prototype.dispose.call(this),B.off(document,"focusin.bs.modal"),this._config=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},r.handleUpdate=function(){this._adjustDialog()},r._getConfig=function(t){return t=n({},_e,t),p("modal",t,be),t},r._showElement=function(t){var e=this,n=this._element.classList.contains("fade"),i=Y(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),n&&v(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus();var o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,B.trigger(e._element,"shown.bs.modal",{relatedTarget:t})};if(n){var r=u(this._dialog);B.one(this._dialog,"transitionend",o),h(this._dialog,r)}else o()},r._enforceFocus=function(){var t=this;B.off(document,"focusin.bs.modal"),B.on(document,"focusin.bs.modal",(function(e){document===e.target||t._element===e.target||t._element.contains(e.target)||t._element.focus()}))},r._setEscapeEvent=function(){var t=this;this._isShown?B.on(this._element,"keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&"Escape"===e.key?(e.preventDefault(),t.hide()):t._config.keyboard||"Escape"!==e.key||t._triggerBackdropTransition()})):B.off(this._element,"keydown.dismiss.bs.modal")},r._setResizeEvent=function(){var t=this;this._isShown?B.on(window,"resize.bs.modal",(function(){return t._adjustDialog()})):B.off(window,"resize.bs.modal")},r._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){document.body.classList.remove("modal-open"),t._resetAdjustments(),t._resetScrollbar(),B.trigger(t._element,"hidden.bs.modal")}))},r._removeBackdrop=function(){this._backdrop.parentNode.removeChild(this._backdrop),this._backdrop=null},r._showBackdrop=function(t){var e=this,n=this._element.classList.contains("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),document.body.appendChild(this._backdrop),B.on(this._element,"click.dismiss.bs.modal",(function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._triggerBackdropTransition():e.hide())})),n&&v(this._backdrop),this._backdrop.classList.add("show"),!n)return void t();var i=u(this._backdrop);B.one(this._backdrop,"transitionend",t),h(this._backdrop,i)}else if(!this._isShown&&this._backdrop){this._backdrop.classList.remove("show");var o=function(){e._removeBackdrop(),t()};if(this._element.classList.contains("fade")){var r=u(this._backdrop);B.one(this._backdrop,"transitionend",o),h(this._backdrop,r)}else o()}else t()},r._triggerBackdropTransition=function(){var t=this;if(!B.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented){var e=this._element.scrollHeight>document.documentElement.clientHeight;e||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var n=u(this._dialog);B.off(this._element,"transitionend"),B.one(this._element,"transitionend",(function(){t._element.classList.remove("modal-static"),e||(B.one(t._element,"transitionend",(function(){t._element.style.overflowY=""})),h(t._element,n))})),h(this._element,n),this._element.focus()}},r._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;(!this._isBodyOverflowing&&t&&!b||this._isBodyOverflowing&&!t&&b)&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),(this._isBodyOverflowing&&!t&&!b||!this._isBodyOverflowing&&t&&b)&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},r._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},r._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},r._setScrollbar=function(){var t=this;this._isBodyOverflowing&&(this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",(function(e){return e+t._scrollbarWidth})),this._setElementAttributes(".sticky-top","marginRight",(function(e){return e-t._scrollbarWidth})),this._setElementAttributes("body","paddingRight",(function(e){return e+t._scrollbarWidth}))),document.body.classList.add("modal-open")},r._setElementAttributes=function(t,e,n){F(t).forEach((function(t){var i=t.style[e],o=window.getComputedStyle(t)[e];z.setDataAttribute(t,e,i),t.style[e]=n(Number.parseFloat(o))+"px"}))},r._resetScrollbar=function(){this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight"),this._resetElementAttributes("body","paddingRight")},r._resetElementAttributes=function(t,e){F(t).forEach((function(t){var n=z.getDataAttribute(t,e);void 0===n&&t===document.body?t.style[e]="":(z.removeDataAttribute(t,e),t.style[e]=n)}))},r._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o.jQueryInterface=function(t,e){return this.each((function(){var i=T(this,"bs.modal"),r=n({},_e,z.getDataAttributes(this),"object"==typeof t&&t?t:{});if(i||(i=new o(this,r)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t](e)}}))},e(o,null,[{key:"Default",get:function(){return _e}},{key:"DATA_KEY",get:function(){return"bs.modal"}}]),o}(H);B.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){var e=this,i=c(this);"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault(),B.one(i,"show.bs.modal",(function(t){t.defaultPrevented||B.one(i,"hidden.bs.modal",(function(){g(e)&&e.focus()}))}));var o=T(i,"bs.modal");if(!o){var r=n({},z.getDataAttributes(i),z.getDataAttributes(this));o=new ye(i,r)}o.toggle(this)})),y("modal",ye);var we=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ee=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function ke(t,e,n){var i;if(!t.length)return t;if(n&&"function"==typeof n)return n(t);for(var o=(new window.DOMParser).parseFromString(t,"text/html"),r=Object.keys(e),s=(i=[]).concat.apply(i,o.body.querySelectorAll("*")),a=function(t,n){var i,o=s[t],a=o.nodeName.toLowerCase();if(!r.includes(a))return o.parentNode.removeChild(o),"continue";var l=(i=[]).concat.apply(i,o.attributes),c=[].concat(e["*"]||[],e[a]||[]);l.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(e.includes(n))return!we.has(n)||Boolean(Ee.test(t.nodeValue)||Te.test(t.nodeValue));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,r=i.length;o<r;o++)if(i[o].test(n))return!0;return!1})(t,c)||o.removeAttribute(t.nodeName)}))},l=0,c=s.length;l<c;l++)a(l);return o.body.innerHTML}var Ae=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Le=new Set(["sanitize","allowList","sanitizeFn"]),Oe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},De={AUTO:"auto",TOP:"top",RIGHT:b?"left":"right",BOTTOM:"bottom",LEFT:b?"right":"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Ce={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Se=function(t){function o(e,n){var i;if(void 0===ae)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");return(i=t.call(this,e)||this)._isEnabled=!0,i._timeout=0,i._hoverState="",i._activeTrigger={},i._popper=null,i.config=i._getConfig(n),i.tip=null,i._setListeners(),i}i(o,t);var r=o.prototype;return r.enable=function(){this._isEnabled=!0},r.disable=function(){this._isEnabled=!1},r.toggleEnabled=function(){this._isEnabled=!this._isEnabled},r.toggle=function(t){if(this._isEnabled)if(t){var e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}},r.dispose=function(){clearTimeout(this._timeout),B.off(this._element,this.constructor.EVENT_KEY),B.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.config=null,this.tip=null,t.prototype.dispose.call(this)},r.show=function(){var t=this;if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(this.isWithContent()&&this._isEnabled){var e=B.trigger(this._element,this.constructor.Event.SHOW),n=function t(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var n=e.getRootNode();return n instanceof ShadowRoot?n:null}return e instanceof ShadowRoot?e:e.parentNode?t(e.parentNode):null}(this._element),i=null===n?this._element.ownerDocument.documentElement.contains(this._element):n.contains(this._element);if(!e.defaultPrevented&&i){var o=this.getTipElement(),r=s(this.constructor.NAME);o.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&o.classList.add("fade");var a="function"==typeof this.config.placement?this.config.placement.call(this,o,this._element):this.config.placement,l=this._getAttachment(a);this._addAttachmentClass(l);var c=this._getContainer();E(o,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||c.appendChild(o),B.trigger(this._element,this.constructor.Event.INSERTED),this._popper=se(this._element,o,this._getPopperConfig(l)),o.classList.add("show");var f,d,p="function"==typeof this.config.customClass?this.config.customClass():this.config.customClass;p&&(f=o.classList).add.apply(f,p.split(" ")),"ontouchstart"in document.documentElement&&(d=[]).concat.apply(d,document.body.children).forEach((function(t){B.on(t,"mouseover",(function(){}))}));var g=function(){var e=t._hoverState;t._hoverState=null,B.trigger(t._element,t.constructor.Event.SHOWN),"out"===e&&t._leave(null,t)};if(this.tip.classList.contains("fade")){var m=u(this.tip);B.one(this.tip,"transitionend",g),h(this.tip,m)}else g()}}},r.hide=function(){var t=this;if(this._popper){var e=this.getTipElement(),n=function(){"show"!==t._hoverState&&e.parentNode&&e.parentNode.removeChild(e),t._cleanTipClass(),t._element.removeAttribute("aria-describedby"),B.trigger(t._element,t.constructor.Event.HIDDEN),t._popper&&(t._popper.destroy(),t._popper=null)};if(!B.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented){var i;if(e.classList.remove("show"),"ontouchstart"in document.documentElement&&(i=[]).concat.apply(i,document.body.children).forEach((function(t){return B.off(t,"mouseover",m)})),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this.tip.classList.contains("fade")){var o=u(e);B.one(e,"transitionend",n),h(e,o)}else n();this._hoverState=""}}},r.update=function(){null!==this._popper&&this._popper.update()},r.isWithContent=function(){return Boolean(this.getTitle())},r.getTipElement=function(){if(this.tip)return this.tip;var t=document.createElement("div");return t.innerHTML=this.config.template,this.tip=t.children[0],this.tip},r.setContent=function(){var t=this.getTipElement();this.setElementContent(Y(".tooltip-inner",t),this.getTitle()),t.classList.remove("fade","show")},r.setElementContent=function(t,e){if(null!==t)return"object"==typeof e&&d(e)?(e.jquery&&(e=e[0]),void(this.config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this.config.html?(this.config.sanitize&&(e=ke(e,this.config.allowList,this.config.sanitizeFn)),t.innerHTML=e):t.textContent=e)},r.getTitle=function(){var t=this._element.getAttribute("data-bs-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this._element):this.config.title),t},r.updateAttachment=function(t){return"right"===t?"end":"left"===t?"start":t},r._initializeOnDelegatedTarget=function(t,e){var n=this.constructor.DATA_KEY;return(e=e||T(t.delegateTarget,n))||(e=new this.constructor(t.delegateTarget,this._getDelegateConfig()),E(t.delegateTarget,n,e)),e},r._getOffset=function(){var t=this,e=this.config.offset;return"string"==typeof e?e.split(",").map((function(t){return Number.parseInt(t,10)})):"function"==typeof e?function(n){return e(n,t._element)}:e},r._getPopperConfig=function(t){var e=this,i={placement:t,modifiers:[{name:"flip",options:{altBoundary:!0,fallbackPlacements:this.config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this.config.boundary}},{name:"arrow",options:{element:"."+this.constructor.NAME+"-arrow"}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:function(t){return e._handlePopperPlacementChange(t)}}],onFirstUpdate:function(t){t.options.placement!==t.placement&&e._handlePopperPlacementChange(t)}};return n({},i,"function"==typeof this.config.popperConfig?this.config.popperConfig(i):this.config.popperConfig)},r._addAttachmentClass=function(t){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(t))},r._getContainer=function(){return!1===this.config.container?document.body:d(this.config.container)?this.config.container:Y(this.config.container)},r._getAttachment=function(t){return De[t.toUpperCase()]},r._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(e){if("click"===e)B.on(t._element,t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==e){var n="hover"===e?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i="hover"===e?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;B.on(t._element,n,t.config.selector,(function(e){return t._enter(e)})),B.on(t._element,i,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t._element&&t.hide()},B.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=n({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},r._fixTitle=function(){var t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))},r._enter=function(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e.config.delay&&e.config.delay.show?e._timeout=setTimeout((function(){"show"===e._hoverState&&e.show()}),e.config.delay.show):e.show())},r._leave=function(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout((function(){"out"===e._hoverState&&e.hide()}),e.config.delay.hide):e.hide())},r._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},r._getConfig=function(t){var e=z.getDataAttributes(this._element);return Object.keys(e).forEach((function(t){Le.has(t)&&delete e[t]})),t&&"object"==typeof t.container&&t.container.jquery&&(t.container=t.container[0]),"number"==typeof(t=n({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),p("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=ke(t.template,t.allowList,t.sanitizeFn)),t},r._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},r._cleanTipClass=function(){var t=this.getTipElement(),e=t.getAttribute("class").match(Ae);null!==e&&e.length>0&&e.map((function(t){return t.trim()})).forEach((function(e){return t.classList.remove(e)}))},r._handlePopperPlacementChange=function(t){var e=t.state;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))},o.jQueryInterface=function(t){return this.each((function(){var e=T(this,"bs.tooltip"),n="object"==typeof t&&t;if((e||!/dispose|hide/.test(t))&&(e||(e=new o(this,n)),"string"==typeof t)){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},e(o,null,[{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return"tooltip"}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Ce}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return Oe}}]),o}(H);y("tooltip",Se);var je=new RegExp("(^|\\s)bs-popover\\S+","g"),Ne=n({},Se.Default,{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Pe=n({},Se.DefaultType,{content:"(string|element|function)"}),Ie={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Me=function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var o=n.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.setContent=function(){var t=this.getTipElement();this.setElementContent(Y(".popover-header",t),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this._element)),this.setElementContent(Y(".popover-body",t),e),t.classList.remove("fade","show")},o._addAttachmentClass=function(t){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(t))},o._getContent=function(){return this._element.getAttribute("data-bs-content")||this.config.content},o._cleanTipClass=function(){var t=this.getTipElement(),e=t.getAttribute("class").match(je);null!==e&&e.length>0&&e.map((function(t){return t.trim()})).forEach((function(e){return t.classList.remove(e)}))},n.jQueryInterface=function(t){return this.each((function(){var e=T(this,"bs.popover"),i="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new n(this,i),E(this,"bs.popover",e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},e(n,null,[{key:"Default",get:function(){return Ne}},{key:"NAME",get:function(){return"popover"}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return Ie}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return Pe}}]),n}(Se);y("popover",Me);var Be={offset:10,method:"auto",target:""},He={offset:"number",method:"string",target:"(string|element)"},Re=function(t){function o(e,n){var i;return(i=t.call(this,e)||this)._scrollElement="BODY"===e.tagName?window:e,i._config=i._getConfig(n),i._selector=i._config.target+" .nav-link, "+i._config.target+" .list-group-item, "+i._config.target+" .dropdown-item",i._offsets=[],i._targets=[],i._activeTarget=null,i._scrollHeight=0,B.on(i._scrollElement,"scroll.bs.scrollspy",(function(){return i._process()})),i.refresh(),i._process(),i}i(o,t);var r=o.prototype;return r.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":"position",n="auto"===this._config.method?e:this._config.method,i="position"===n?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),F(this._selector).map((function(t){var e=l(t),o=e?Y(e):null;if(o){var r=o.getBoundingClientRect();if(r.width||r.height)return[z[n](o).top+i,e]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},r.dispose=function(){t.prototype.dispose.call(this),B.off(this._scrollElement,".bs.scrollspy"),this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},r._getConfig=function(t){if("string"!=typeof(t=n({},Be,"object"==typeof t&&t?t:{})).target&&d(t.target)){var e=t.target.id;e||(e=s("scrollspy"),t.target.id=e),t.target="#"+e}return p("scrollspy",t,He),t},r._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},r._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},r._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},r._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},r._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map((function(e){return e+'[data-bs-target="'+t+'"],'+e+'[href="'+t+'"]'})),n=Y(e.join(","));n.classList.contains("dropdown-item")?(Y(".dropdown-toggle",n.closest(".dropdown")).classList.add("active"),n.classList.add("active")):(n.classList.add("active"),function(t,e){for(var n=[],i=t.parentNode;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)i.matches(e)&&n.push(i),i=i.parentNode;return n}(n,".nav, .list-group").forEach((function(t){V(t,".nav-link, .list-group-item").forEach((function(t){return t.classList.add("active")})),V(t,".nav-item").forEach((function(t){q(t,".nav-link").forEach((function(t){return t.classList.add("active")}))}))}))),B.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t})},r._clear=function(){F(this._selector).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},o.jQueryInterface=function(t){return this.each((function(){var e=T(this,"bs.scrollspy");if(e||(e=new o(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},e(o,null,[{key:"Default",get:function(){return Be}},{key:"DATA_KEY",get:function(){return"bs.scrollspy"}}]),o}(H);B.on(window,"load.bs.scrollspy.data-api",(function(){F('[data-bs-spy="scroll"]').forEach((function(t){return new Re(t,z.getDataAttributes(t))}))})),y("scrollspy",Re);var We=function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var o=n.prototype;return o.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active")||this._element.classList.contains("disabled"))){var e,n=c(this._element),i=this._element.closest(".nav, .list-group");if(i){var o="UL"===i.nodeName||"OL"===i.nodeName?":scope > li > .active":".active";e=(e=F(o,i))[e.length-1]}var r=e?B.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(!(B.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==r&&r.defaultPrevented)){this._activate(this._element,i);var s=function(){B.trigger(e,"hidden.bs.tab",{relatedTarget:t._element}),B.trigger(t._element,"shown.bs.tab",{relatedTarget:e})};n?this._activate(n,n.parentNode,s):s()}}},o._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?q(e,".active"):F(":scope > li > .active",e))[0],r=n&&o&&o.classList.contains("fade"),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=u(o);o.classList.remove("show"),B.one(o,"transitionend",s),h(o,a)}else s()},o._transitionComplete=function(t,e,n){if(e){e.classList.remove("active");var i=Y(":scope > .dropdown-menu .active",e.parentNode);i&&i.classList.remove("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),v(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&t.parentNode.classList.contains("dropdown-menu")&&(t.closest(".dropdown")&&F(".dropdown-toggle").forEach((function(t){return t.classList.add("active")})),t.setAttribute("aria-expanded",!0)),n&&n()},n.jQueryInterface=function(t){return this.each((function(){var e=T(this,"bs.tab")||new n(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},e(n,null,[{key:"DATA_KEY",get:function(){return"bs.tab"}}]),n}(H);B.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){t.preventDefault(),(T(this,"bs.tab")||new We(this)).show()})),y("tab",We);var Ke={animation:"boolean",autohide:"boolean",delay:"number"},Ue={animation:!0,autohide:!0,delay:5e3},ze=function(t){function o(e,n){var i;return(i=t.call(this,e)||this)._config=i._getConfig(n),i._timeout=null,i._setListeners(),i}i(o,t);var r=o.prototype;return r.show=function(){var t=this;if(!B.trigger(this._element,"show.bs.toast").defaultPrevented){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var e=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),B.trigger(t._element,"shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),v(this._element),this._element.classList.add("showing"),this._config.animation){var n=u(this._element);B.one(this._element,"transitionend",e),h(this._element,n)}else e()}},r.hide=function(){var t=this;if(this._element.classList.contains("show")&&!B.trigger(this._element,"hide.bs.toast").defaultPrevented){var e=function(){t._element.classList.add("hide"),B.trigger(t._element,"hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var n=u(this._element);B.one(this._element,"transitionend",e),h(this._element,n)}else e()}},r.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),B.off(this._element,"click.dismiss.bs.toast"),t.prototype.dispose.call(this),this._config=null},r._getConfig=function(t){return t=n({},Ue,z.getDataAttributes(this._element),"object"==typeof t&&t?t:{}),p("toast",t,this.constructor.DefaultType),t},r._setListeners=function(){var t=this;B.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',(function(){return t.hide()}))},r._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},o.jQueryInterface=function(t){return this.each((function(){var e=T(this,"bs.toast");if(e||(e=new o(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t](this)}}))},e(o,null,[{key:"DefaultType",get:function(){return Ke}},{key:"Default",get:function(){return Ue}},{key:"DATA_KEY",get:function(){return"bs.toast"}}]),o}(H);return y("toast",ze),{Alert:R,Button:W,Carousel:$,Collapse:J,Dropdown:ve,Modal:ye,Popover:Me,ScrollSpy:Re,Tab:We,Toast:ze,Tooltip:Se}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);
(function() {
  var Util,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    return Util;

  })();

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        return this.start();
      } else {
        return document.addEventListener('DOMContentLoaded', this.start);
      }
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          window.addEventListener('scroll', this.scrollHandler, false);
          window.addEventListener('resize', this.scrollHandler, false);
          return this.interval = setInterval(this.scrollCallback, 50);
        }
      }
    };

    WOW.prototype.stop = function() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
    };

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute('style', 'visibility: visible;'));
      }
      return _results;
    };

    WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
      var style;
      style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
      if (duration) {
        style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
      }
      if (delay) {
        style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
      }
      if (iteration) {
        style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
      }
      return style;
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util || (this._util = new Util());
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);


wow = new WOW(
  {
    animateClass: 'animated',
    offset: 50
  }
);
wow.init();

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});

(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:2,
      loop:true,
      nav: true,
      margin:30,
      responsive:{
          
          992:{
              items:4
          }
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);