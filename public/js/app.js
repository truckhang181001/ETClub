/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/HomePage/Banner.js":
/*!*****************************************!*\
  !*** ./resources/js/HomePage/Banner.js ***!
  \*****************************************/
/***/ (() => {

var owl = $('.owl-carousel-banner');
owl.owlCarousel({
  nav: true,
  items: 1,
  loop: true,
  margin: 0,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  autoplaySpeed: 2000,
  navSpeed: 2000,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  stagePadding: 0,
  responsive: {
    0: {
      nav: false
    },
    1000: {
      nav: true
    }
  }
});

/***/ }),

/***/ "./resources/js/HomePage/Navbar.js":
/*!*****************************************!*\
  !*** ./resources/js/HomePage/Navbar.js ***!
  \*****************************************/
/***/ (() => {

//khi scroll chuột thì add class sticky cho navbar
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('.nav-container').addClass('sticky');
    } else if ($(this).scrollTop(0)) {
      $('.nav-container').removeClass('sticky');
    }
  });
}); //click vào nav-link thì add class active.

$('.nav-link').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
}); // click vào cách thẻ con của nav-link thì add class active cho nav-link đó.

$('.nav-link .more li').click(function () {
  $('.nav-link').addClass('active').siblings().removeClass('active');
}); //xử lý bấm nào icon menu

$('#menu-mobile').click(function () {
  $('.side-bar').toggleClass("show");
}); // xử lý bấm vào icon close

$('.icon-close').click(function () {
  $('.side-bar').toggleClass("show");
});
$('.background-blur').click(function () {
  $('.side-bar').toggleClass("show");
}); //Xử lý show ra danh sách con

$('.intro-btn').click(function () {
  $('nav ul .intro-show').toggleClass("show1");
  $('.icon-close').addClass('invisible');
  $('.side-bar__menu').addClass('invisible');
  $('.intro-show').addClass('visible');
});
$('.tech-btn').click(function () {
  $('nav ul .tech-show').toggleClass("show2");
  $('.icon-close').addClass('invisible');
  $('.side-bar__menu').addClass('invisible');
  $('.tech-show').addClass('visible');
});
$('.competition-btn').click(function () {
  $('nav ul .divider-4').toggleClass("toggle-color");
  $('nav ul .competition-show').toggleClass("show3");
  $('.icon-close').addClass('invisible');
  $('.side-bar__menu').addClass('invisible');
  $('.competition-show').addClass('visible');
});
$('nav ul li').click(function () {
  $(this).addClass("active").siblings().removeClass("active");
}); //Xử lý bấm nút quay lại menu

$('#previous-1').click(function () {
  $('nav ul .intro-show').toggleClass("show1");
  $('.icon-close').removeClass('invisible');
  $('.side-bar__menu').removeClass('invisible');
  $('nav ul .divider-2').toggleClass("toggle-color");
});
$('#previous-2').click(function () {
  $('nav ul .tech-show').toggleClass("show2");
  $('.icon-close').removeClass('invisible');
  $('.side-bar__menu').removeClass('invisible');
  $('nav ul .divider-3').toggleClass("toggle-color");
});
$('#previous-3').click(function () {
  $('nav ul .competition-show').toggleClass("show3");
  $('.icon-close').removeClass('invisible');
  $('.side-bar__menu').removeClass('invisible');
  $('nav ul .divider-4').toggleClass("toggle-color");
}); //Xử lý đổi màu cho divider

$('.homepage-btn').click(function () {
  $('nav ul .divider-1').toggleClass("toggle-color");
  $('nav ul .divider-2').removeClass("toggle-color");
  $('nav ul .divider-3').removeClass("toggle-color");
  $('nav ul .divider-4').removeClass("toggle-color");
  $('nav ul .divider-5').removeClass("toggle-color");
});
$('.intro-btn').click(function () {
  $('nav ul .divider-2').toggleClass("toggle-color");
  $('nav ul .divider-1').removeClass("toggle-color");
  $('nav ul .divider-3').removeClass("toggle-color");
  $('nav ul .divider-4').removeClass("toggle-color");
  $('nav ul .divider-5').removeClass("toggle-color");
});
$('.tech-btn').click(function () {
  $('nav ul .divider-3').toggleClass("toggle-color");
  $('nav ul .divider-1').removeClass("toggle-color");
  $('nav ul .divider-2').removeClass("toggle-color");
  $('nav ul .divider-4').removeClass("toggle-color");
  $('nav ul .divider-5').removeClass("toggle-color");
});
$('.competition-btn').click(function () {
  $('nav ul .divider-4').toggleClass("toggle-color");
  $('nav ul .divider-1').removeClass("toggle-color");
  $('nav ul .divider-2').removeClass("toggle-color");
  $('nav ul .divider-3').removeClass("toggle-color");
  $('nav ul .divider-5').removeClass("toggle-color");
});
$('.CTV-btn').click(function () {
  $('nav ul .divider-5').toggleClass("toggle-color");
  $('nav ul .divider-1').removeClass("toggle-color");
  $('nav ul .divider-2').removeClass("toggle-color");
  $('nav ul .divider-3').removeClass("toggle-color");
  $('nav ul .divider-4').removeClass("toggle-color");
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./HomePage/Navbar */ "./resources/js/HomePage/Navbar.js");

__webpack_require__(/*! ./HomePage/Banner */ "./resources/js/HomePage/Banner.js");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;