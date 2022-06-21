/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/ETNewsPage/FilterAndActivitiesCard.js":
/*!************************************************************!*\
  !*** ./resources/js/ETNewsPage/FilterAndActivitiesCard.js ***!
  \************************************************************/
/***/ (() => {

//Xử lý bấm nút 'Thời gian'
$('.time-cover__time').click(function () {
  $('.time-cover__option').toggleClass("display");
});
$('.drop-down-1').click(function () {
  $('.time-cover__option').toggleClass("display");
}); //Xử lý bấm nút 'Năm' và 'Tháng'

$('.year-cover .year').click(function () {
  $('.year-cover__option').toggleClass("display");
});
$('.drop-down-2').click(function () {
  $('.year-cover__option').toggleClass("display");
});
$('.month-cover .month').click(function () {
  $('.month-cover__option').toggleClass("display");
});
$('.drop-down-3').click(function () {
  $('.month-cover__option').toggleClass("display");
}); //Xử lý bấm nút 'Xem thêm'

$('.more-cover .more').click(function () {
  $('.show-more').addClass("display");
});
$('.more-cover .more').click(function () {
  $('.more-cover').addClass("display");
});

/***/ }),

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

/***/ "./resources/js/HomePage/Footer.js":
/*!*****************************************!*\
  !*** ./resources/js/HomePage/Footer.js ***!
  \*****************************************/
/***/ (() => {

$("#btnScrolltoTop").click(function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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

/***/ "./resources/js/HomePage/Thinking.js":
/*!*******************************************!*\
  !*** ./resources/js/HomePage/Thinking.js ***!
  \*******************************************/
/***/ (() => {

$('.owl-carousel').owlCarousel({
  dotsEach: true,
  loop: false,
  nav: false,
  items: 3,
  responsive: {
    0: {
      items: 1,
      dots: false
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

/***/ }),

/***/ "./resources/js/HrDepartmentPage/ActivityPicture.js":
/*!**********************************************************!*\
  !*** ./resources/js/HrDepartmentPage/ActivityPicture.js ***!
  \**********************************************************/
/***/ (() => {

var owl = $('.owl-carousel-activity-picture');
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
      margin: 60,
      dotsEach: false
    },
    600: {
      margin: 150
    },
    1200: {
      stagePadding: 165
    }
  }
});

/***/ }),

/***/ "./resources/js/HrDepartmentPage/HrDepartment.js":
/*!*******************************************************!*\
  !*** ./resources/js/HrDepartmentPage/HrDepartment.js ***!
  \*******************************************************/
/***/ (() => {

$(document).ready(function () {
  $(".container-term").click(function () {
    $(".term-category").toggle();
  });
});
$(function () {
  $(".term-item").on("click", function (e) {
    $('.term-item').removeClass('active');
    $(this).addClass('active');
  });
});

/***/ }),

/***/ "./resources/js/HrDepartmentPage/NavbarCarousel.js":
/*!*********************************************************!*\
  !*** ./resources/js/HrDepartmentPage/NavbarCarousel.js ***!
  \*********************************************************/
/***/ (() => {

var owl = $('.owl-carousel-navbar');
owl.owlCarousel({
  items: 3,
  loop: false,
  margin: 10,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: false,
  dots: false
});
$(function () {
  $(".cc-navbar__item").on("click", function (e) {
    $('.cc-navbar__item').removeClass('active');
    $(this).addClass('active');
  });
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./ETNewsPage/FilterAndActivitiesCard */ "./resources/js/ETNewsPage/FilterAndActivitiesCard.js");

__webpack_require__(/*! ./HrDepartmentPage/ActivityPicture */ "./resources/js/HrDepartmentPage/ActivityPicture.js");

__webpack_require__(/*! ./HrDepartmentPage/HrDepartment */ "./resources/js/HrDepartmentPage/HrDepartment.js");

__webpack_require__(/*! ./HrDepartmentPage/NavbarCarousel */ "./resources/js/HrDepartmentPage/NavbarCarousel.js");

__webpack_require__(/*! ./HomePage/Banner */ "./resources/js/HomePage/Banner.js");

__webpack_require__(/*! ./HomePage/Thinking */ "./resources/js/HomePage/Thinking.js");

__webpack_require__(/*! ./HomePage/Footer */ "./resources/js/HomePage/Footer.js");

__webpack_require__(/*! ./HomePage/Navbar */ "./resources/js/HomePage/Navbar.js");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n   ╷\n10 │     color: $white;\r\n   │            ^^^^^^\n   ╵\n  resources\\sass\\base.scss 10:12  @import\n  resources\\sass\\app.scss 2:9     root stylesheet\n    at processResult (D:\\clbet\\ETClub\\node_modules\\webpack\\lib\\NormalModule.js:753:19)\n    at D:\\clbet\\ETClub\\node_modules\\webpack\\lib\\NormalModule.js:855:5\n    at D:\\clbet\\ETClub\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at D:\\clbet\\ETClub\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (D:\\clbet\\ETClub\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at D:\\clbet\\ETClub\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (D:\\clbet\\ETClub\\node_modules\\sass\\sass.dart.js:99012:16)\n    at render_closure1.call$2 (D:\\clbet\\ETClub\\node_modules\\sass\\sass.dart.js:84527:12)\n    at _RootZone.runBinary$3$3 (D:\\clbet\\ETClub\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (D:\\clbet\\ETClub\\node_modules\\sass\\sass.dart.js:28080:21)");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/js/app.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/sass/app.scss");
/******/ 	
/******/ })()
;