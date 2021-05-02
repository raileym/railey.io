/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/ctns-scss.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/ctns-scss.js":
/*!*****************************!*\
  !*** ./js/src/ctns-scss.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! scss/ctns-admin */ "./scss/ctns-admin.scss");
__webpack_require__(/*! scss/ctns-icon */ "./scss/ctns-icon.scss");
__webpack_require__(/*! scss/ctns-minimal */ "./scss/ctns-minimal.scss");
__webpack_require__(/*! scss/ctns-mobile */ "./scss/ctns-mobile.scss");
__webpack_require__(/*! scss/ctns */ "./scss/ctns.scss");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-admin.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-admin.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* ****************************************************************************\n * HTML CSS - WP Admin\n * ****************************************************************************\n */\n.form-table th {\n  padding: 4px 10px 4px 30px;\n  vertical-align: middle;\n  width: 150px; }\n\n.form-table td {\n  font-size: 12px;\n  margin-bottom: 0;\n  padding: 4px 10px; }\n\nform h3 {\n  margin: 2em 0 0 0; }\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  margin: 0 5px 0 0;\n  padding: 0;\n  vertical-align: middle; }\n\n/* Using this to make em entries stand-out within notices */\np em {\n  font-weight: bold; }\n\nlabel {\n  margin: 0 20px 0 0; }\n\n/* ****************************************************************************\n * BCA CSS - WP Admin\n * ****************************************************************************\n */\n/* Re-shapes the look of a setting entry (drops left column) */\n.ctns-notice th,\n.ctns-includes th {\n  display: none; }\n\n/**\n * use this CSS to highlight author, date, and e-mail for\n * Copyright Notices\n */\n.ctns-notice em {\n  font-weight: bold;\n  font-style: normal;\n  font-size: 110%; }\n\n.ctns-notice td,\n.ctns-includes td {\n  padding: 4px 0; }\n\n#copyright_email,\n#copyright_author,\n#copyright_url,\n#copyright_date,\n#copyright_shortnotice {\n  width: 250px;\n  padding: 0 0 0 5px;\n  height: 2em;\n  background: rgba(0, 255, 0, 0.1);\n  border: 1px solid darkgreen; }\n\n#notice_custom,\n#notice_default,\n#notice_gpl3,\n#notice_mit,\n#notice_apache,\ntextarea.ctns-includes {\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  margin: 10px 0;\n  padding: 10px;\n  max-width: 500px;\n  font-family: courier; }\n\n.ctns-register-status {\n  margin: 2em 0 0 3em;\n  background: pink;\n  border: 4px solid red;\n  height: 4.0em;\n  line-height: 1.5em;\n  width: 300px;\n  color: black;\n  font-size: 140%;\n  font-weight: normal;\n  padding: 10px;\n  text-align: center; }\n\n.ctns-register-status.ctns-is-registered {\n  background: green;\n  border: 4px solid darkgreen;\n  color: white; }\n\n/* ****************************************************************************\n * COLORS - WP Admin - REMOVE LATER\n * ****************************************************************************\n */\n#copyright_email,\n#copyright_author,\n#copyright_url,\n#copyright_date,\n#copyright_shortnotice {\n  background: rgba(0, 255, 0, 0.1);\n  border-color: darkgreen; }\n\n#notice_custom,\n#notice_default,\n#notice_gpl3,\n#notice_mit,\n#notice_apache,\ntextarea.ctns-includes {\n  border-top-color: black;\n  border-bottom-color: black; }\n\n.ctns-register-status {\n  background: pink;\n  border-color: red;\n  color: black; }\n\n.ctns-register-status.ctns-is-registered {\n  background: green;\n  border: 4px solid darkgreen;\n  color: white; }\n\nlabel.copyright-notice {\n  width: 150px;\n  font-weight: bold;\n  color: green;\n  display: inline-block; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-icon.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-icon.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ctns-preload-images {\n  background-image: url(\"/wp-content/uploads/2020/06/compressed.cyan-on-black-transparent-90x90.png\"), url(\"/wp-content/uploads/2020/06/compressed.icon-strip-black-on-transparent-150.png\"), url(\"/wp-content/uploads/2020/06/compressed.icon-strip-white-on-transparent-dark-150.png\"), url(\"/wp-content/uploads/2020/06/compressed.icon-strip-transparent-on-white-150.png\"), url(\"/wp-content/uploads/2020/06/compressed.icon-strip-transparent-on-white-150-02.png\"), url(\"/wp-content/uploads/2020/06/compressed.icon-strip-white-on-transparent-dark-150-02.png\"), url(\"/wp-content/uploads/2020/06/icon-blank-150.png\"), url(\"/wp-content/uploads/2020/06/icon-showcase-citeations.png\"), url(\"/wp-content/uploads/2020/06/icon-showcase-citeations-selected.png\");\n  position: absolute;\n  left: -999999px; }\n\n.ctns-icon-48x48 {\n  float: left;\n  width: 48px;\n  height: 48px;\n  margin: 0;\n  cursor: pointer;\n  background-position-y: 0px; }\n\n.ctns-icon-40x40 {\n  float: left;\n  width: 40px;\n  height: 40px;\n  margin: 0;\n  cursor: pointer;\n  background-position-y: 0px; }\n\n.ctns-icon-25x25 {\n  width: 25px;\n  height: 25px;\n  margin: 0;\n  cursor: pointer;\n  background-position-y: 0px; }\n\n.ctns-icon-0x0 {\n  width: 0px;\n  height: 0px;\n  margin: 0;\n  cursor: pointer;\n  background-position-y: 0px; }\n\n.ctns-show-video {\n  display: block;\n  float: right;\n  opacity: 0.4; }\n\n.ctns-listen-audio,\n.ctns-listen-audio-custom,\n.ctns-show-video,\n.ctns-show-note,\n.ctns-show-quiz {\n  background-image: url(\"/wp-content/uploads/2020/06/compressed.icon-strip-black-on-transparent-150.png\");\n  background-size: 804px; }\n\n.ctns-single-png {\n  background-position-x: 410px;\n  background-size: 509px; }\n\n.ctns-listen-audio {\n  background-position-x: 254px;\n  background-size: 509px; }\n\n.ctns-listen-audio-custom {\n  background-position-x: 229px;\n  background-size: 509px; }\n\n.ctns-show-note {\n  background-position-x: 764px; }\n\n.ctns-show-quiz {\n  background-position-x: 685px; }\n\n.ctns-feature-control.ctns-hideable .ctns-show-video {\n  background-position-x: 442px; }\n\n.ctns-feature-control.ctns-hideable div {\n  opacity: 1.0; }\n\n.ctns-feature-control.ctns-showable .ctns-show-video {\n  background-position-x: 482px; }\n\n.ctns-feature-control.ctns-showable div {\n  opacity: 0.4; }\n\n.video-logo {\n  background-image: url(\"/wp-content/uploads/2020/06/compressed.LOGO_THE_MATH_LIBRARY_1200x900.png\");\n  background-size: 640px 480px;\n  width: 640px;\n  height: 480px;\n  margin: 0 auto;\n  border: 2px solid black; }\n\n/* PROBLEMS-ICONS.CSS */\n.ctns-toggle {\n  display: block;\n  float: right;\n  background-repeat: no-repeat;\n  background-image: url(\"/wp-content/uploads/2020/06/compressed.icon-strip-black-on-transparent-150.png\");\n  background-size: 967px;\n  opacity: 0.4; }\n\n.ctns-toggle-fontawesome {\n  display: block;\n  float: right;\n  opacity: 0.4; }\n\n.ctns-toggle-fontawesome i {\n  vertical-align: middle;\n  /* was top */ }\n\n.ctns-toggle-fontawesome.ctns-re-load {\n  font-size: 36px; }\n\n.ctns-toggle-fontawesome.ctns-show-crypto {\n  font-size: 36px; }\n\n.ctns-toggle-fontawesome.ctns-apple {\n  font-size: 36px;\n  color: red; }\n\n.ctns-toggle-fontawesome.ctns-apple.ctns-selected {\n  opacity: 1; }\n\n.ctns-toggle-fontawesome.ctns-right {\n  font-size: 36px; }\n\n.ctns-toggle-fontawesome.ctns-wrong {\n  font-size: 36px; }\n\n.ctns-toggle-fontawesome.ctns-undecided {\n  font-size: 36px; }\n\n.ctns-toggle.ctns-show-audio {\n  margin-top: 8px;\n  background-position-x: -484px; }\n\n.ctns-toggle.ctns-show-front {\n  margin-top: 6px;\n  background-position-x: -581px; }\n\n.ctns-toggle.ctns-show-back {\n  margin-top: 6px;\n  background-position-x: -630px; }\n\n.ctns-toggle.ctns-show-front.ctns-selected {\n  opacity: 1.0; }\n\n.ctns-toggle.ctns-show-back.ctns-selected {\n  opacity: 1.0; }\n\n.ctns-toggle-fontawesome.ctns-right.ctns-selected {\n  opacity: 1.0; }\n\n.ctns-toggle-fontawesome.ctns-wrong.ctns-selected {\n  opacity: 1.0; }\n\n.ctns-toggle-fontawesome.ctns-undecided.ctns-selected {\n  opacity: 1.0; }\n\n.ctns-toggle.ctns-show-hint {\n  background-repeat: no-repeat;\n  background-image: url(\"/wp-content/uploads/2020/06/compressed.icon-strip-black-on-transparent-150-02.png\");\n  background-size: 804px;\n  background-position-x: -39px;\n  background-color: transparent; }\n\n.ctns-toggle.ctns-show-answer {\n  background-repeat: no-repeat;\n  background-image: url(\"/wp-content/uploads/2020/06/compressed.icon-strip-black-on-transparent-150-02.png\");\n  background-size: 804px;\n  background-position-x: 0px;\n  background-color: transparent; }\n\n.ctns-toggle.ctns-label {\n  background-position-x: -241px; }\n\n.ctns-toggle.ctns-selected {\n  opacity: 1.0; }\n\n.ctns-vbar {\n  height: 34px;\n  width: 4px;\n  background-color: #000;\n  margin: -4px 4px;\n  float: right;\n  opacity: 0.2; }\n\n.ctns-speak-control {\n  cursor: pointer;\n  color: #36a29d; }\n\n.ctns-speak-control.ctns-selected {\n  color: red; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-minimal.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-minimal.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body.tml-minimal-view .ctns-set,\nbody.tml-minimal-view .ctns-feature.ctns-note,\nbody.tml-minimal-view .ctns-feature.ctns-video {\n  position: absolute;\n  left: -99999px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-mobile.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-mobile.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 640px) {\n  body {\n    background-color: blue; } }\n\n/*\nbody.mobile.landscape .ctns-toggle-container {\n    float:left;\n    width:64px;\n    height:fit-content;\n}\nbody.mobile.landscape .ctns-toggle {\n    margin: 8px 0;\n}\nbody.mobile .jxgbox {\n    float:left;\n}\nbody.mobile.pm-landscape .ctns-quiz-container {\n        width:75%;\n}\nbody.mobile.pm-landscape .ctns-toggle-container {\n        width:10%;\n        float:left;\n}\nbody.mobile .ctns-toggle-container {\n    height: 56px;\n}\n\n\n\n\n\n\n\nbody.mobile .pm-struct-mathjax-center {\n//     font-size:80%;\n}\n\nbody.mobile .ctns-toggle\n{\n    height: 48px;\n    width: 48px;\n    margin: 8px 4px;\n}\nbody.mobile .ctns-toggle.ctns-label {\n    border-width:8px;\n    height: 32px;\n    width: 32px;\n}\n\nbody.mobile .ctns-answer,\nbody.mobile .ctns-question {\n  font-size: 120%;\n}\n*/\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".JXGtext {\n  opacity: 1.0;\n  font-weight: bold; }\n\n.jxgbox {\n  margin-left: 0; }\n\n.MathJax_Preview {\n  color: #000 !important;\n  position: absolute;\n  left: -99999px; }\n\n.MathJax_Display {\n  margin: 0; }\n\n/* Changes for tables on synthetic division. Wowchemy\n * is changing this value, not to my liking.\n */\n.ctns-body table > tbody > tr > td {\n  text-align: right;\n  padding: 10px 20px; }\n\n.entry-content ul,\n.entry-content p,\n.post-page-content {\n  font-size: 180%; }\n\n.build-a-graph {\n  margin: 0px auto; }\n\n.post-page-content .pm-struct-more-or-less,\n.post-page-content .pm-figure {\n  font-size: 60%;\n  line-height: 1.5em; }\n\n.citeations-title {\n  color: white;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25em;\n  text-align: center;\n  padding: 0.5em; }\n\n.pm-struct-mathjax-center {\n  font-size: 150%; }\n\n.pm-struct-more-or-less .pm-struct-mathjax-center {\n  font-size: 100%; }\n\n.ctns-answer,\n.ctns-question {\n  font-weight: bold; }\n\n.ctns-audio {\n  position: absolute;\n  right: 1em;\n  bottom: 1em;\n  width: 30px;\n  height: 30px; }\n\n.ctns-body.ctns-no-audio .ctns-audio {\n  position: absolute;\n  left: -99999px; }\n\n.ctns-front-speak,\n.ctns-back-speak {\n  position: absolute;\n  left: -99999px;\n  font-weight: bold;\n  line-height: 1em;\n  top: 0.25em;\n  text-align: left;\n  font-size: 60%; }\n\n.ctns-front-speak {\n  color: blue; }\n\n.ctns-back-speak {\n  color: green; }\n\n.ctns-front-speak.ctns-show-audio {\n  left: 1em; }\n\n.ctns-back-speak.ctns-show-audio {\n  top: 3em;\n  left: 1em; }\n\n.ctns-audio-front .ctns-audio.ctns-audio-back,\n.ctns-audio-back .ctns-audio.ctns-audio-front {\n  right: -99999px; }\n\n.ctns-audio-back .ctns-audio.ctns-audio-back,\n.ctns-audio-front .ctns-audio.ctns-audio-front {\n  right: 1em; }\n\n.ctns-no-front-speak .ctns-audio.ctns-audio-front,\n.ctns-no-back-speak .ctns-audio.ctns-audio-back {\n  position: absolute;\n  left: -99999px; }\n\n.ctns-quiz-container .ctns-quiz {\n  width: fit-content;\n  margin: 0 auto; }\n\n.ctns-features-content {\n  font-size: 80%; }\n  .ctns-features-content .ctns-video {\n    border: 2px solid black;\n    border-radius: 10px;\n    padding: 4px;\n    margin: 2em auto;\n    display: block;\n    width: 644px;\n    height: 484px;\n    margin: 0 auto; }\n  .ctns-features-content .ctns-quiz {\n    font-size: 80%;\n    margin: 2em auto;\n    display: block; }\n  .ctns-features-content .ctns-note {\n    width: fit-content;\n    margin: 2em auto;\n    font-size: 80%;\n    display: block;\n    font-size: 120%;\n    margin-bottom: 0.5em; }\n    .ctns-features-content .ctns-note p {\n      font-size: 120%;\n      margin-bottom: 0.5em; }\n    .ctns-features-content .ctns-note ul {\n      font-size: 120%;\n      margin-bottom: 0.5em; }\n\n.ctns-features-control {\n  margin: 0 auto;\n  width: fit-content; }\n  .ctns-features-control .ctns-feature-control {\n    display: block;\n    width: fit-content;\n    margin: 0 auto;\n    display: inline-block;\n    text-align: center;\n    margin: 0.5em; }\n\n.fluid-width-video-wrapper {\n  border: solid 2px black; }\n\n.ctns-set-hide {\n  position: absolute;\n  left: -99999px; }\n\n.ctns-body {\n  font-size: 20px;\n  font-family: 'Work Sans', sans-serif;\n  color: #333;\n  font-weight: 300;\n  text-align: center;\n  background-color: #f8f6f0;\n  margin-top: 0px;\n  margin-bottom: 8px;\n  display: block;\n  padding-top: 20px; }\n\n.ctns-body.no-padding {\n  margin: 0; }\n\ndiv.title {\n  font-weight: 300;\n  margin: 0em;\n  padding: 0.5em;\n  font-size: inherit;\n  background-color: #999;\n  color: #fff;\n  opacity: 1.0; }\n\n.ctns-answer,\n.ctns-question {\n  font-size: 120%;\n  line-height: 1.5em; }\n\n.ctns-commentary {\n  margin-top: 1em;\n  width: 100%; }\n\n.ctns-answer-commentary,\n.ctns-commentary-details {\n  font-size: 80%;\n  margin-bottom: 1em;\n  line-height: 1.2em;\n  text-align: left;\n  padding: 0 0 1em 1em;\n  width: 80%;\n  margin: 0 auto; }\n\n.ctns-multiple-choice {\n  margin-top: 1em;\n  text-align: left;\n  display: inline-block; }\n\n.ctns-multiple-choice label {\n  display: block;\n  margin: 0.5em 0; }\n\nbutton.ctns-button {\n  font-family: 'Work Sans', sans-serif;\n  font-size: 100%;\n  background-color: #2d8984;\n  color: #fff;\n  border: 0em;\n  border-radius: 3px;\n  padding: 0.5em;\n  cursor: pointer;\n  margin: 0 0 1em 0;\n  width: 200px; }\n\nbutton.ctns-button.ctns-toggle-answer {\n  padding: 0.5em;\n  display: block;\n  margin: 2em auto 0;\n  width: 300px; }\n\nbutton.ctns-button:hover {\n  background-color: #38a; }\n\nbutton.ctns-button.flip:hover {\n  background-color: transparent; }\n\nbutton.ctns-button.flip {\n  clear: both;\n  display: block;\n  color: black;\n  background-color: transparent;\n  margin: 1em auto 1em auto;\n  z-index: 1; }\n\n.ctns-body.ctns-one-page button.ctns-button.ctns-previous,\n.ctns-body.ctns-one-page button.ctns-button.ctns-next {\n  position: absolute;\n  left: -9999px; }\n\n.ctns-body.ctns-flashcard button.ctns-button.ctns-submit,\n.ctns-body.ctns-no-submit button.ctns-button.ctns-submit {\n  position: absolute;\n  left: -9999px; }\n\n.ctns-body.no-answer-list .ctns-toggle.ctns-right,\n.ctns-body.no-answer-list .ctns-toggle.ctns-wrong,\n.ctns-body.no-answer-list .ctns-toggle.ctns-default,\n.ctns-body.no-answer-list .ctns-vbar.RWD {\n  position: absolute;\n  left: -9999px;\n  display: none; }\n\n.ctns-body:not(.ctns-one-page) hr.ctns-one-page {\n  display: none; }\n\n.ctns-body.ctns-one-page hr.ctns-one-page,\n.ctns-body hr {\n  width: 80%;\n  height: 2px;\n  background-color: #ccc;\n  display: block;\n  margin: 2em auto;\n  border: none; }\n\n.ctns-body.ctns-one-page hr.ctns-one-page-results {\n  width: 50%;\n  height: 1em;\n  background-color: #3aafa9;\n  display: block;\n  margin: 2em auto;\n  border: none;\n  opacity: 0.5; }\n\n.ctns-body[style='background-color:transparent'] hr.ctns-one-page,\n.ctns-body[style='background-color:transparent'] hr {\n  background-color: #777; }\n\n.ctns-body div.block-left {\n  text-align: left; }\n\n.ctns-front, .ctns-back {\n  color: black;\n  margin: 0 auto;\n  padding: 0 1em;\n  font-family: baskerville, \"times new roman\", serif; }\n\n.ctns-front {\n  font-weight: 900; }\n\n.ctns-front,\n.ctns-front-image {\n  display: none; }\n\n.ctns-back,\n.ctns-back-image {\n  display: none; }\n\n.ctns-body.ctns-flashcard .ctns-selected {\n  display: block; }\n\n.ctns-body.ctns-flashcard .ctns-question,\n.ctns-body.ctns-flashcard .ctns-answer,\n.ctns-body.ctns-flashcard .ctns-multiple-choice {\n  display: none; }\n\n.ctns-flip {\n  position: absolute;\n  left: -9999; }\n\n.ctns-slide {\n  position: absolute;\n  padding-left: 18px;\n  /* I really don't know why/where 18px comes from ... please help w/quizzes */\n  left: 0em;\n  top: 0em;\n  width: 100%;\n  max-width: 640px;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.5s;\n  opacity: 0;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  -khtml-user-select: none;\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */ }\n\n.ctns-user-selectable {\n  -webkit-touch-callout: text !important;\n  /* iOS Safari */\n  -webkit-user-select: text !important;\n  /* Safari */\n  -khtml-user-select: text !important;\n  /* Konqueror HTML */\n  -moz-user-select: text !important;\n  /* Firefox */\n  -ms-user-select: text !important;\n  /* Internet Explorer/Edge */\n  user-select: text !important;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */ }\n\n.ctns-body.ctns-one-page .ctns-slide {\n  position: relative;\n  opacity: 1; }\n\n.ctns-body .ctns-quiz-container {\n  position: relative;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.ctns-body.no-margin .ctns-quiz-container {\n  margin-top: 0; }\n\n.ctns-body.ctns-flashcard.ctns-one-page hr.ctns-one-page {\n  display: none; }\n\n.ctns-body.ctns-one-page .ctns-slide,\n.ctns-body .active-slide {\n  display: block;\n  opacity: 1;\n  z-index: 2;\n  position: relative;\n  padding-left: 0;\n  /* I really don't know why/where 18px or 0px comes from ... please help w/quizzes */ }\n\n.ctns-body.ctns-no-show-answer button.ctns-button.ctns-toggle-answer,\n.ctns-body.ctns-flashcard button.ctns-button.ctns-toggle-answer {\n  position: absolute;\n  left: -9999px; }\n\n.ctns-results {\n  height: 10em;\n  width: 100%;\n  margin: 1em auto; }\n\n.math-tex {\n  display: inline-block; }\n\nscan.ctns-right {\n  color: #149614;\n  font-weight: 900;\n  float: none; }\n\nscan.ctns-wrong {\n  color: red;\n  font-weight: 900; }\n\n.ctns-multiple-choice.ctns-right {\n  color: #149614;\n  float: none; }\n\n.ctns-multiple-choice.ctns-wrong {\n  color: red;\n  float: none; }\n\n.ctns-slide .ctns-label {\n  color: #444;\n  z-index: 999; }\n\n.ctns-label .ctns-title-description {\n  margin-bottom: 1em;\n  color: blue;\n  font-size: 80%;\n  text-align: right; }\n\n.ctns-label .ctns-title-label {\n  position: absolute;\n  left: -999999px;\n  text-align: center; }\n\n.ctns-label .ctns-error-label {\n  position: absolute;\n  left: -999999px;\n  text-align: center; }\n\n.ctns-label .ctns-title-key {\n  user-select: text;\n  text-align: right;\n  color: deeppink; }\n\n.ctns-body.ctns-show-label .ctns-slide .ctns-label {\n  left: 0em; }\n\n.ctns-front ul,\n.ctns-back ul {\n  text-align: left;\n  padding: 0 2em; }\n\n.ctns-question ul.no-dots,\n.ctns-answer ul.no-dots,\n.ctns-answer ul.no-dots,\n.ctns-front ul.no-dots,\n.ctns-back ul.no-dots {\n  list-style: none; }\n\n/* I am promoting these sizes to a slightly higher level\n * so that I don't have to use div's to get these sizes.\n */\n.ctns-front,\n.ctns-back {\n  margin: 0 auto;\n  line-height: 1.8em; }\n\n.ctns-front div,\n.ctns-back div {\n  margin: inherit;\n  line-height: inherit; }\n\n.ctns-front .block-left,\n.ctns-back .block-left {\n  text-align: left; }\n\n.ctns-front .ctns-one,\n.ctns-back .ctns-one {\n  width: 100%; }\n\n.ctns-front .ctns-three-fourths,\n.ctns-back .ctns-three-fourths {\n  width: 75%; }\n\n.ctns-front .ctns-one-half,\n.ctns-back .ctns-one-half {\n  width: 50%; }\n\n.ctns-front .ctns-two-fifths,\n.ctns-back .ctns-two-fifths {\n  width: 40%; }\n\n.ctns-front .ctns-one-third,\n.ctns-back .ctns-one-third {\n  width: 33%; }\n\n.ctns-front .ctns-one-fourth,\n.ctns-back .ctns-one-fourth {\n  width: 25%; }\n\n.ctns-front .ctns-one-fifth,\n.ctns-back .ctns-one-fifth {\n  width: 20%; }\n\n.ctns-front .ctns-left,\n.ctns-back .ctns-left {\n  float: left; }\n\n.ctns-front .ctns-center,\n.ctns-back .ctns-center {\n  margin-left: auto;\n  margin-right: auto; }\n\n.ctns-front .ctns-one-half,\n.ctns-back .ctns-one-half {\n  width: 50%; }\n\n.ctns-body.ctns-flashcard .ctns-slide {\n  height: 480px;\n  width: 800px;\n  margin: 0 auto;\n  border: 2px solid black;\n  background-color: transparent;\n  font-size: 200%;\n  cursor: pointer; }\n\n.ctns-body.ctns-flashcard.ctns-flashcard-image .ctns-slide {\n  border-color: transparent; }\n\n.ctns-body.ctns-viewer-2 .ctns-slide,\n.ctns-body.ctns-viewer-4 .ctns-slide {\n  margin: 24px auto;\n  background-color: transparent;\n  cursor: pointer;\n  border: 2px solid black; }\n\n.ctns-body.ctns-viewer-2.ctns-no-border .ctns-slide,\n.ctns-body.ctns-viewer-4.ctns-no-border .ctns-slide {\n  border: none; }\n\n.ctns-body.ctns-viewer-1 .ctns-slide {\n  font-size: 36px;\n  width: 800px;\n  height: 480px; }\n\n.ctns-body.ctns-viewer-4 .ctns-slide {\n  font-size: 14px;\n  width: 340px;\n  /*width: 400px;*/\n  height: auto; }\n\n.ctns-body.ctns-viewer-2 .ctns-slide {\n  font-size: 18px;\n  width: 600px;\n  height: auto; }\n\n.ctns-body.ctns-flashcard.ctns-viewer-4 .ctns-slide {\n  font-size: 18px;\n  width: 340px;\n  height: 240px; }\n\n.ctns-body.ctns-flashcard.ctns-viewer-1 .ctns-slide .ctns-front,\n.ctns-body.ctns-flashcard.ctns-viewer-1 .ctns-slide .ctns-back,\n.ctns-body.ctns-flashcard.ctns-viewer-1 .ctns-slide .ctns-front div,\n.ctns-body.ctns-flashcard.ctns-viewer-1 .ctns-slide .ctns-back div {\n  max-width: 800px;\n  max-height: 432px; }\n\n.ctns-body.ctns-flashcard.ctns-viewer-4 .ctns-slide .ctns-front,\n.ctns-body.ctns-flashcard.ctns-viewer-4 .ctns-slide .ctns-back,\n.ctns-body.ctns-flashcard.ctns-viewer-4 .ctns-slide .ctns-front div,\n.ctns-body.ctns-flashcard.ctns-viewer-4 .ctns-slide .ctns-back div {\n  max-width: 320px;\n  /* 400px; */\n  /*     max-height:216px; */ }\n\n.ctns-body.ctns-flashcard.ctns-viewer-2 .ctns-slide {\n  font-size: 140%;\n  width: 600px;\n  height: 360px; }\n\n.ctns-body.ctns-flashcard.ctns-viewer-2 .ctns-slide .ctns-front,\n.ctns-body.ctns-flashcard.ctns-viewer-2 .ctns-slide .ctns-back,\n.ctns-body.ctns-flashcard.ctns-viewer-2 .ctns-slide .ctns-front div,\n.ctns-body.ctns-flashcard.ctns-viewer-2 .ctns-slide .ctns-back div {\n  max-width: 600px;\n  max-height: 324px; }\n\n.ctns-body.ctns-viewer-2 hr.ctns-one-page,\n.ctns-body.ctns-viewer-4 hr.ctns-one-page {\n  position: absolute;\n  left: -9999px; }\n\n.ctns-body.ctns-viewer-2 .ctns-label,\n.ctns-body.ctns-viewer-4 .ctns-label {\n  font-size: 70%;\n  color: #444;\n  font-weight: 900; }\n\n.ctns-body.close .ctns-results,\n.ctns-body.close .ctns-toggle-container,\n.ctns-body.close .ctns-quiz-container,\n.ctns-body.close button.ctns-button {\n  position: absolute;\n  left: -99999px;\n  display: block; }\n\ndiv.title img.open,\ndiv.title img.close {\n  float: left;\n  height: 0.5em !important;\n  padding: 0;\n  position: absolute;\n  left: -9999px;\n  border: none;\n  background-color: #999;\n  margin: 0.5em 0 0 0; }\n\ndiv.title.close img.open {\n  position: relative;\n  left: 0; }\n\ndiv.title:not(.close) img.close {\n  position: relative;\n  left: 0; }\n\nbutton.ctns-toggle-hint {\n  display: block;\n  clear: both;\n  margin: 0.5em auto 1em auto; }\n\n.ctns-hint {\n  text-align: left;\n  margin-top: 2em;\n  font-size: 80%; }\n\n.ctns-body.ctns-no-answer-list .ctns-multiple-choice {\n  position: absolute;\n  left: -99999px; }\n\n.ctns-body.ctns-no-commentary .ctns-commentary,\n.ctns-body.ctns-no-commentary .ctns-answer-commentary {\n  position: absolute;\n  left: -99999px; }\n\n.ctns-front, .ctns-back {\n  overflow: hidden; }\n\n.ctns-body.no-title .title {\n  position: absolute;\n  left: -99999px; }\n\n.ctns-hide-dynamic,\n.ctns-hide {\n  position: absolute !important;\n  left: -77777px !important; }\n\n.ctns-button-group {\n  width: 90%;\n  margin: 2em auto; }\n\n.ctns-body.ctns-no-buttons .ctns-button-group {\n  position: absolute;\n  left: -999999px; }\n\n/*\n.ctns-body.ctns-flashcard .ctns-front,\n.ctns-body.ctns-flashcard .ctns-back {\n    display:block;\n}\n*/\n.ctns-body.highlight-white {\n  background-color: white; }\n\n.ctns-body.highlight-transparent {\n  background-color: transparent;\n  background-color: #f8f6f0; }\n\n.ctns-body.ctns-no-top {\n  margin: 0; }\n\nh2 {\n  font-size: inherit;\n  margin: 40px 0; }\n\n.ctns-body.ctns-no-top h2 {\n  margin: 0 0 1em 0; }\n\n.example {\n  font-size: inherit; }\n\n.tex {\n  display: inline;\n  margin: 0;\n  overflow: auto; }\n\n.tex.ctns-center {\n  display: block;\n  text-align: center;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  font-size: 140%;\n  padding: 4px;\n  /* apparent bug in Katex covers up the top 4 pixels */ }\n\n.ctns-answer .tex,\n.ctns-question .tex {\n  font-size: 116%; }\n\n.tex.ctns-left-indent {\n  display: block;\n  text-align: left;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  margin-left: 5em;\n  padding: 4px;\n  /* apparent bug in Katex covers up the top 4 pixels */ }\n\n.debug-message {\n  font-size: 16px;\n  line-height: 1.0em; }\n\n.latex.inline {\n  display: inline;\n  margin: 0 0 0 5px; }\n\n.ctns-body.review hr {\n  display: none; }\n\n.ctns-body.review {\n  font-size: 140%;\n  /*     line-height:0.6em; */ }\n\n.ctns-body.review .katex {\n  font-size: 80%; }\n\n.ctns-body.review div.tex.center {\n  margin: 5px 20px; }\n\ndiv.evaluate-to {\n  font-size: 60%; }\n\n.ctns-body.review .MathJax_Display {\n  margin: 5px 20px; }\n\n.ctns-toggle-container {\n  width: fit-content;\n  height: 50px;\n  clear: both;\n  margin: 0 auto 1em auto; }\n\n.ctns-results-title {\n  color: #3aafa9;\n  font-weight: bold;\n  font-size: 120%;\n  clear: both;\n  display: block;\n  text-decoration: underline; }\n\n.fluid-width-video-container {\n  margin: 0 auto; }\n\n.ctns-figure {\n  font-weight: bold;\n  text-align: center;\n  width: 60%;\n  margin: 0 auto 2em auto;\n  clear: both;\n  font-size: 140%; }\n\n.ctns-vertical-graphblock {\n  margin: 20px auto; }\n\ndiv.ctns-canvas-3d {\n  width: fit-content;\n  height: fit-content;\n  margin: 10px auto; }\n\ndiv.ctns-canvas-3d canvas {\n  border: solid 2px rgba(0, 0, 0, 0.3); }\n\nbody.canvas div.ctns-canvas-3d canvas,\nbody:not(.canvas) div.ctns-canvas-3d canvas {\n  position: relative;\n  margin-left: auto; }\n\nbutton.ctns-3d-controls {\n  width: 90px;\n  height: 40px;\n  font-size: 50%;\n  margin: 5px; }\n\n.ctns-3d-stats {\n  position: absolute;\n  left: -999999px; }\n\n.tml-custom-page .ctns-answer a,\n.tml-custom-page .ctns-answer p,\n.tml-custom-page .ctns-question a,\n.tml-custom-page .ctns-question p {\n  font-size: 100%;\n  font-weight: normal;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\n.ctns-3d-measures {\n  text-align: left;\n  color: lightgrey;\n  font-size: 50%;\n  line-height: 1em; }\n\ntable.ctns-synth-division {\n  font-size: 100%;\n  border: none; }\n\n.ctns-slide .ctns-sponsor {\n  border-top: 4px solid red;\n  border-bottom: 4px solid red;\n  margin-bottom: 24px;\n  color: red;\n  position: relative; }\n\nbody.cnts-sponsor-appreciation-red .ctns-toggle-fontawesome.ctns-apple {\n  color: red; }\n\nbody.cnts-sponsor-appreciation-red .ctns-slide .ctns-sponsor {\n  border-top: 4px solid red;\n  border-bottom: 4px solid red;\n  color: red; }\n\nbody.cnts-sponsor-appreciation-red a.ctns-sponsor-enroll {\n  color: red; }\n\nbody.cnts-sponsor-appreciation-purple .ctns-toggle-fontawesome.ctns-apple {\n  color: purple; }\n\nbody.cnts-sponsor-appreciation-purple .ctns-slide .ctns-sponsor {\n  border-top: 4px solid purple;\n  border-bottom: 4px solid purple;\n  color: purple; }\n\nbody.cnts-sponsor-appreciation-purple a.ctns-sponsor-enroll {\n  color: purple; }\n\nbody.cnts-sponsor-appreciation-blue .ctns-toggle-fontawesome.ctns-apple {\n  color: blue; }\n\nbody.cnts-sponsor-appreciation-blue .ctns-slide.ctns-sponsor {\n  border-top: 4px solid blue;\n  border-bottom: 4px solid blue;\n  color: blue; }\n\nbody.cnts-sponsor-appreciation-blue a.ctns-sponsor-enroll {\n  color: blue; }\n\nbody.cnts-sponsor-appreciation-pink .ctns-toggle-fontawesome.ctns-apple {\n  color: pink; }\n\nbody.cnts-sponsor-appreciation-pink .ctns-slide .ctns-sponsor {\n  border-top: 4px solid pink;\n  border-bottom: 4px solid pink;\n  color: pink; }\n\nbody.cnts-sponsor-appreciation-pink a.ctns-sponsor-enroll {\n  color: pink; }\n\n.ctns-sponsor-appreciation .ctns-sponsor-title {\n  font-size: 120%;\n  font-weight: bold; }\n\n.ctns-sponsor-appreciation .ctns-sponsor-thankyou {\n  font-size: 80%;\n  color: black; }\n\n.ctns-sponsor-appreciation a.ctns-sponsor-enroll {\n  font-size: 80%;\n  font-weight: bold; }\n\n.ctns-sponsor-appreciation .ctns-sponsor-list {\n  display: block;\n  margin-top: 1em;\n  font-size: 80%; }\n\nbutton.give-btn {\n  border: 6px solid green;\n  margin-bottom: 1em;\n  display: block; }\n  button.give-btn div {\n    width: 80%;\n    margin: 0 auto; }\n\n.ctns-figure-hide {\n  position: absolute;\n  left: -999999px; }\n\n.ctns-deemphasize {\n  opacity: 0.3; }\n\n.ctns-body.ctns-toggle-fontawesome {\n  opacity: 100%;\n  color: rgba(52, 73, 94, 0.85); }\n\n.ctns-image img {\n  margin: 0px auto;\n  /* Was 24px auto; */ }\n\n.ctns-body.ctns-one-page hr.ctns-one-page.ctns-hide-hr,\n.ctns-hide-hr {\n  background: transparent;\n  border-color: transparent; }\n", ""]);
// Exports
exports.locals = {
	"ASSET_CURSOR_PEN_RED": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01085318/cursor_pen_red_malcolm_v2.png\"",
	"ASSET_GRID": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01112827/grid.png\"",
	"ASSET_GRID_SOLID": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01112827/gridSolid.png\"",
	"ASSET_ICON_CITE_MARINE_CORRECTED": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01085313/compressed.cite-marine-corrected.png\"",
	"ASSET_ICON_CITE_WHITE_ON_TRANSPARENT": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01121432/icon-cite-white-on-transparent.png\"",
	"ASSET_ICON_CITE_WHITE_ON_TRANSPARENT_SELECTED": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01121433/icon-cite-white-on-transparent-selected.png\"",
	"ASSET_ICON_STRIP_BLACK_ON_TRANSPARENT_150": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01085315/compressed.icon-strip-black-on-transparent-150.png\"",
	"ASSET_ICON_STRIP_BLACK_ON_TRANSPARENT_150_02": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01085314/compressed.icon-strip-black-on-transparent-150-02.png\"",
	"ASSET_ICON_STRIP_TRANSPARENT_ON_WHITE_150": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01085316/compressed.icon-strip-transparent-on-white-150.png\"",
	"ASSET_ICON_STRIP_TRANSPARENT_ON_WHITE_150_02": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01085316/compressed.icon-strip-transparent-on-white-150-02.png\"",
	"ASSET_KHAN_ACADEMY_TRADEMARK": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01122046/khan-academy-trademark.png\"",
	"ASSET_LOGO_THE_MATH_LIBRARY_1200x900": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01120437/compressed.LOGO_THE_MATH_LIBRARY_1200x900.png\"",
	"ASSET_MENU_ICON_PLACEHOLDER": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01085318/menu-icon-placeholder.png\"",
	"ASSET_PURPLEMATH_TRADEMARK": "\"https://cdn.devcite.com/wp-content/uploads/2020/05/01122107/purplemath-trademark.png\""
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./scss/ctns-admin.scss":
/*!******************************!*\
  !*** ./scss/ctns-admin.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./ctns-admin.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-admin.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./scss/ctns-icon.scss":
/*!*****************************!*\
  !*** ./scss/ctns-icon.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./ctns-icon.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-icon.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./scss/ctns-minimal.scss":
/*!********************************!*\
  !*** ./scss/ctns-minimal.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./ctns-minimal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-minimal.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./scss/ctns-mobile.scss":
/*!*******************************!*\
  !*** ./scss/ctns-mobile.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./ctns-mobile.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns-mobile.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./scss/ctns.scss":
/*!************************!*\
  !*** ./scss/ctns.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./ctns.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/ctns.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=ctns-scss.js.map