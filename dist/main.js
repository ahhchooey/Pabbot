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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/maps/level2.js":
/*!*******************************!*\
  !*** ./assets/maps/level2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./assets/maps/util.js");

var gameMap = {
  "mapArray": [8, 32, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 31, 32, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 31, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 1, 2, 2, 3, 0, 0, 0, 0, 7, 8, 9, 0, 0, 1, 25, 8, 32, 14, 14, 14, 14, 14, 14, 31, 26, 3, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 7, 9, 0, 0, 0, 0, 7, 8, 8, 26, 3, 0, 0, 0, 7, 8, 9, 0, 0, 7, 8, 32, 15, 0, 0, 0, 0, 0, 0, 13, 14, 26, 2, 2, 3, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 35, 0, 0, 0, 24, 7, 9, 0, 0, 0, 0, 7, 8, 32, 14, 15, 0, 0, 0, 7, 8, 9, 0, 0, 7, 32, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 14, 26, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 25, 15, 0, 0, 0, 0, 7, 32, 15, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 35, 7, 8, 9, 0, 0, 13, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 1, 2, 25, 8, 9, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 7, 9, 0, 0, 0, 4, 25, 8, 8, 8, 9, 0, 0, 0, 35, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 25, 9, 35, 0, 0, 0, 13, 14, 31, 8, 9, 0, 35, 1, 2, 2, 14, 14, 14, 14, 14, 14, 14, 26, 3, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 25, 8, 8, 3, 0, 0, 0, 0, 0, 7, 8, 26, 2, 2, 25, 14, 15, 0, 0, 0, 0, 0, 0, 0, 13, 26, 2, 2, 3, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 1, 25, 8, 8, 8, 26, 6, 0, 0, 0, 0, 7, 8, 8, 8, 32, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 26, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 25, 8, 8, 32, 14, 15, 0, 0, 0, 0, 0, 7, 14, 14, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 14, 14, 14, 31, 8, 32, 14, 14, 14, 31, 8, 32, 14, 14, 14, 31, 8, 32, 14, 14, 14, 14, 14, 15, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 0, 0, 0, 13, 14, 15, 0, 0, 0, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 1, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 25, 8, 0, 0, 0, 0, 0, 0, 0, 1, 2, 25, 8, 26, 2, 3, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 1, 2, 25, 8, 8, 8, 0, 0, 0, 35, 0, 1, 2, 25, 8, 8, 8, 8, 8, 26, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 1, 2, 2, 25, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 25, 8, 8, 8, 8, 8, 8, 8, 8, 26, 3, 0, 0, 4, 5, 6, 0, 0, 4, 5, 5, 6, 0, 0, 10, 0, 0, 10, 0, 0, 0, 1, 2, 2, 2, 2, 25, 8, 8, 8, 8, 8, 8, 8, 8],
  "tileheight": 32,
  "tilewidth": 32,
  "width": 50,
  "height": 20,
  "enemies": [{
    type: "potato",
    x: 9.25 * 32,
    y: 15 * 32,
    moveSet: ["left", "right"]
  }, {
    type: "potato",
    x: 18 * 32,
    y: 18 * 32,
    moveSet: ["left", "stand", "right", "stand"]
  }, {
    type: "potato",
    x: 36 * 32,
    y: 12 * 32
  }, {
    type: "potato",
    x: 26 * 32,
    y: 12 * 32
  }, {
    type: "potato",
    x: 10 * 32,
    y: 9 * 32,
    moveSet: ["left", "stand", "right", "stand"]
  }, {
    type: "potato",
    x: 10 * 32,
    y: 2 * 32
  }, {
    type: "firePlant",
    x: 7 * 32,
    y: 16 * 32
  }, {
    type: "firePlant",
    x: 41 * 32,
    y: 17 * 32
  }, {
    type: "firePlant",
    x: 18 * 32,
    y: 11 * 32
  }, {
    type: "firePlant",
    x: 14 * 32,
    y: 9 * 32
  }, {
    type: "firePlant",
    x: 15 * 32,
    y: 2 * 32
  }]
};
gameMap.collisionMap = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["collisionMapGenerator"])(gameMap.mapArray);
/* harmony default export */ __webpack_exports__["default"] = (gameMap);

/***/ }),

/***/ "./assets/maps/level3.js":
/*!*******************************!*\
  !*** ./assets/maps/level3.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./assets/maps/util.js");

var gameMap = {
  "mapArray": [32, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 24, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 9, 0, 0, 0, 0, 0, 0, 34, 0, 0, 34, 0, 0, 13, 31, 8, 8, 8, 8, 8, 9, 0, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 0, 13, 31, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 8, 9, 11, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 26, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 8, 8, 8, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 32, 14, 14, 14, 15, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 12, 0, 0, 0, 0, 7, 9, 0, 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 7, 9, 0, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 7, 9, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 0, 0, 0, 10, 0, 0, 0, 7, 26, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 32, 14, 14, 14, 14, 14, 14, 31, 8, 9, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 9, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 10, 0, 0, 7, 8, 8, 9, 0, 0, 12, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 7, 32, 14, 15, 0, 0, 1, 3, 0, 0, 7, 8, 9, 0, 0, 0, 12, 0, 0, 0, 7, 9, 0, 0, 0, 0, 7, 9, 0, 0, 7, 8, 9, 0, 0, 0, 10, 0, 0, 0, 7, 9, 0, 10, 0, 0, 7, 9, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 7, 9, 0, 0, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 13, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 11, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 10, 0, 0, 0, 0, 0, 0, 4, 5, 5, 5, 6, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 7, 9, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 34, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 7, 26, 6, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 0, 10, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 34, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 26, 6, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 0, 34, 7, 9, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 4, 25, 9, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 7, 26, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 7, 8, 9, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 7, 8, 9, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 7, 9, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 7, 9, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 0, 13, 31, 9, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 15, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 13, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 7, 9, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 25, 9, 0, 0, 0, 0, 0, 0, 0, 7, 32, 14, 14, 14, 14, 14, 14, 31, 8, 8, 8, 9, 0, 0, 10, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 12, 0, 0, 0, 13, 15, 0, 0, 1, 3, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 0, 11, 12, 0, 0, 0, 0, 0, 7, 9, 0, 0, 13, 14, 14, 31, 9, 0, 0, 0, 0, 4, 5, 5, 6, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 7, 9, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 15, 0, 0, 0, 12, 11, 7, 9, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 25, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 34, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 7, 9, 0, 0, 0, 0, 0, 12, 12, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 4, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 26, 2, 2, 3, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 7],
  "tileheight": 32,
  "tilewidth": 32,
  "width": 20,
  "height": 100,
  "enemies": []
};
gameMap.collisionMap = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["collisionMapGenerator"])(gameMap.mapArray);
/* harmony default export */ __webpack_exports__["default"] = (gameMap);

/***/ }),

/***/ "./assets/maps/util.js":
/*!*****************************!*\
  !*** ./assets/maps/util.js ***!
  \*****************************/
/*! exports provided: collisionMapGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionMapGenerator", function() { return collisionMapGenerator; });
var collisionMapGenerator = function collisionMapGenerator(array) {
  return array.map(function (value) {
    switch (value) {
      case 1:
        return 2;

      case 2:
        return 1;

      case 3:
        return 3;

      case 4:
        return 8;

      case 5:
        return 4;

      case 6:
        return 9;

      case 7:
        return 5;

      case 9:
        return 6;

      case 10:
        return 4;

      case 11:
        return 12;

      case 13:
        return 10;

      case 14:
        return 7;

      case 15:
        return 11;

      case 19:
      case 20:
        return 4;

      case 21:
      case 22:
        return 13;

      case 23:
      case 24:
        return 14;

      case 27:
      case 28:
        return 13;

      case 29:
        return 4;

      case 33:
      case 34:
        return 13;

      default:
        return 0;
    }
  });
};

/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function Camera(gameMap, width, height, pabbot) {
  var _this = this;

  _classCallCheck(this, Camera);

  this.render = function () {
    _this.x = _this.following.position.x - _this.width / 2;
    _this.y = _this.following.position.y - _this.height / 2;
    _this.x = Math.max(0, Math.min(_this.x, _this.maxX));
    _this.y = Math.max(0, Math.min(_this.y, _this.maxY));
  };

  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  this.following = pabbot;
  this.maxX = gameMap.width * 32 - width;
  this.maxY = gameMap.height * 32 - height;
};



/***/ }),

/***/ "./src/collision.js":
/*!**************************!*\
  !*** ./src/collision.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collision; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collision = function Collision(width, height, collisionMap, mapWidth, nextLevel) {
  var _this = this;

  _classCallCheck(this, Collision);

  this.isCollide = function (ent, dead, gameOver) {
    //if (ent.getTop() < 0) ent.setTop(0);
    if (ent.getLeft() < 0) ent.setLeft(0);

    if (ent.getTop() > _this.gameHeight) {
      if (gameOver) gameOver();
    }

    ;
    if (ent.getRight() > _this.gameWidth) ent.setRight(_this.gameWidth);

    if (!dead) {
      var top, left, bottom, right, value;
      top = Math.floor(ent.getTop() / 32);
      left = Math.floor(ent.getLeft() / 32);
      value = _this.collisionMap[top * _this.mapWidth + left];

      _this.collide(value, ent, left * 32, top * 32);

      top = Math.floor(ent.getTop() / 32);
      right = Math.floor(ent.getRight() / 32);
      value = _this.collisionMap[top * _this.mapWidth + right];

      _this.collide(value, ent, right * 32, top * 32);

      left = Math.floor(ent.getLeft() / 32);
      bottom = Math.floor(ent.getBottom() / 32);
      value = _this.collisionMap[bottom * _this.mapWidth + left];

      _this.collide(value, ent, left * 32, bottom * 32);

      bottom = Math.floor(ent.getBottom() / 32);
      right = Math.floor(ent.getRight() / 32);
      value = _this.collisionMap[bottom * _this.mapWidth + right];

      _this.collide(value, ent, right * 32, bottom * 32);
    }
  };

  this.collide = function (value, ent, tileX, tileY) {
    switch (value) {
      case 1:
        //only top collision
        _this.collidePlatformTop(ent, tileY);

        break;

      case 2:
        //top and left collision
        if (_this.collidePlatformTop(ent, tileY)) return;

        _this.collidePlatformLeft(ent, tileX);

        break;

      case 3:
        //top and right collision
        if (_this.collidePlatformTop(ent, tileY)) return;

        _this.collidePlatformRight(ent, tileX + 32);

        break;

      case 4:
        //all four side collision
        if (_this.collidePlatformTop(ent, tileY)) return;
        if (_this.collidePlatformLeft(ent, tileX)) return;
        if (_this.collidePlatformRight(ent, tileX + 32)) return;

        _this.collidePlatformBottom(ent, tileY + 32);

        break;

      case 5:
        //only left collision
        _this.collidePlatformLeft(ent, tileX);

        break;

      case 6:
        //only right collision
        _this.collidePlatformRight(ent, tileX + 32);

        break;

      case 7:
        //only bottom collision
        _this.collidePlatformBottom(ent, tileY + 32);

        break;

      case 8:
        //top, left, and bottom collision
        if (_this.collidePlatformTop(ent, tileY)) return;
        if (_this.collidePlatformLeft(ent, tileX)) return;

        _this.collidePlatformBottom(ent, tileY + 32);

        break;

      case 9:
        //top, right, and bottom collision
        if (_this.collidePlatformTop(ent, tileY)) return;
        if (_this.collidePlatformRight(ent, tileX + 32)) return;

        _this.collidePlatformBottom(ent, tileY + 32);

        break;

      case 10:
        //bottom and left collision
        if (_this.collidePlatformBottom(ent, tileY + 32)) return;

        _this.collidePlatformLeft(ent, tileX);

        break;

      case 11:
        //bottom and right collision
        if (_this.collidePlatformBottom(ent, tileY + 32)) return;

        _this.collidePlatformRight(ent, tileX + 32);

        break;

      case 12:
        //tree stump collision
        if (_this.collidePlatformTop(ent, tileY + 16)) return;
        if (_this.collidePlatformLeft(ent, tileX)) return;

        _this.collidePlatformRight(ent, tileX + 32);

        break;

      case 13:
        _this.collideInstantDeath(ent, tileY);

        break;

      case 14:
        _this.collideNextLevel(ent, tileX, tileY);

        break;
    }
  };

  this.collidePlatformTop = function (ent, tileTop) {
    if (ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop) {
      ent.setBottom(tileTop - 0.01);
      ent.speed.y = 0;

      if (ent.rightActive) {
        ent.speed.x = ent.maxSpeed;
        ent.facing = "right";
      }

      ;

      if (ent.leftActive) {
        ent.speed.x = -ent.maxSpeed;
        ent.facing = "left";
      }

      ;
      if (!ent.rightActive && !ent.leftActive) ent.stop();
      ent.isJumping = false;
      ent.isDashing = false;
      ent.isWalled = false;
      return true;
    }

    return false;
  };

  this.collidePlatformLeft = function (ent, tileLeft) {
    if (ent.getRight() > tileLeft && ent.getPastRight() <= tileLeft) {
      ent.setRight(tileLeft - 0.01);
      ent.isWalledRight = true;
      setTimeout(function () {
        return ent.isWalledRight = false;
      }, 275);
      return true;
    }

    return false;
  };

  this.collidePlatformRight = function (ent, tileRight) {
    if (ent.getLeft() < tileRight && ent.getPastLeft() >= tileRight) {
      ent.setLeft(tileRight + 0.01);
      ent.isWalledLeft = true;
      setTimeout(function () {
        return ent.isWalledLeft = false;
      }, 275);
      return true;
    }

    return false;
  };

  this.collidePlatformBottom = function (ent, tileBottom) {
    if (ent.getTop() < tileBottom && ent.getPastTop() >= tileBottom) {
      ent.setTop(tileBottom + 0.01);
      ent.speed.y = 50;
      return true;
    }

    return false;
  };

  this.collideInstantDeath = function (ent, tileTop) {
    if (ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop) {
      ent.health -= 3;
      return true;
    }

    return false;
  };

  this.collideNextLevel = function (ent, tileLeft, tileTop) {
    if (ent.getRight() > tileLeft && ent.getPastRight() <= tileLeft || ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop) {
      _this.nextLevel();

      return true;
    }

    return false;
  };

  this.gameWidth = width;
  this.gameHeight = height;
  this.collisionMap = collisionMap;
  this.mapWidth = mapWidth;
  this.nextLevel = nextLevel;
};



/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Display; });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Display = function Display(context, _width, _height, pabbot, map, mapWidth, camera, dW, dH, enemies, run, gM) {
  var _this = this;

  _classCallCheck(this, Display);

  this.handleMenu = function (e) {
    switch (e.key) {
      case "ArrowUp":
      case "w":
        _this.menu.movePointerUp();

        _this.drawMenu();

        break;

      case "ArrowDown":
      case "s":
        _this.menu.movePointerDown();

        _this.drawMenu();

        break;

      case "Enter":
        _this.menuSelect();

        _this.drawMenu();

        break;
    }
  };

  this.destroyHandle = function () {
    document.removeEventListener("keydown", _this.handleMenu);
  };

  this.menuSelect = function () {
    switch (_this.menu.currentPointer()) {
      case "start":
        _this.destroyHandle();

        _this.menu.startGame(_this.run);

        break;

      case "controls":
        _this.menu.showControls();

        break;

      case "about":
        _this.menu.showAbout();

        _this.menu.drawLinks(_this.buffer);

        break;
    }
  };

  this.drawMenu = function () {
    _this.menu.render(_this.buffer);

    _this.context.drawImage(_this.buffer.canvas, 0, 0, _this.displayWidth, _this.displayHeight, 0, 0, _this.context.canvas.width, _this.context.canvas.height);
  };

  this.drawPabbot = function () {
    _this.pabbot.render(_this.buffer);
  };

  this.drawMap = function () {
    _this.map.render(_this.gameMap.mapArray, _this.mapWidth, _this.buffer);

    _this.pabbot.renderHealth(_this.buffer, Math.floor(_this.camera.x), Math.floor(_this.camera.y));
  };

  this.drawEnemies = function () {
    _this.enemies.renderAll(_this.buffer);
  };

  this.fill = function (color) {
    _this.buffer.fillStyle = color;

    _this.buffer.fillRect(0, 0, _this.width, _this.height);
  };

  this.drawBackground = function () {
    _this.buffer.drawImage(_this.background, 0, 0, _this.displayWidth, _this.displayHeight, _this.camera.x, _this.camera.y, _this.context.canvas.width, _this.context.canvas.height);
  };

  this.render = function () {
    var startCol = Math.floor(_this.camera.x);
    var startRow = Math.floor(_this.camera.y);

    _this.context.drawImage(_this.buffer.canvas, startCol, startRow, _this.displayWidth, _this.displayHeight, 0, 0, _this.context.canvas.width, _this.context.canvas.height);
  };

  this.resize = function (width, height, ratio) {
    if (height / width > ratio) {
      _this.context.canvas.width = width;
      _this.context.canvas.height = width * ratio;
    } else {
      _this.context.canvas.width = height / ratio;
      _this.context.canvas.height = height;
    }

    _this.menu.reOffset();
  };

  this.context = context;
  this.width = _width;
  this.height = _height;
  this.pabbot = pabbot;
  this.map = map;
  this.mapWidth = mapWidth;
  this.camera = camera;
  this.displayWidth = dW;
  this.displayHeight = dH;
  this.enemies = enemies;
  this.run = run;
  this.gameMap = gM;
  this.buffer = document.createElement("canvas").getContext("2d");
  this.buffer.canvas.width = _width;
  this.buffer.canvas.height = _height;
  this.menu = new _menu_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.displayHeight, this.displayWidth, this.context, this.buffer);
  document.addEventListener("keydown", this.handleMenu);
  this.background = new Image();
  this.background.src = "../assets/pixel_forest.png";
};



/***/ }),

/***/ "./src/enemies/enemies.js":
/*!********************************!*\
  !*** ./src/enemies/enemies.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemies; });
/* harmony import */ var _potato_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./potato.js */ "./src/enemies/potato.js");
/* harmony import */ var _firePlant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firePlant.js */ "./src/enemies/firePlant.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Enemies = function Enemies(enemies, pabbot) {
  var _this = this;

  _classCallCheck(this, Enemies);

  this.renderAll = function (buffer) {
    _this.enemies.forEach(function (enemy) {
      return enemy.render(buffer);
    });
  };

  this.moveAll = function (deltaTime) {
    _this.enemies.forEach(function (enemy) {
      return enemy.move(deltaTime);
    });
  };

  this.checkDeath = function () {
    var newEn = [];

    _this.enemies.forEach(function (enemy, i) {
      if (enemy.health <= 0 && enemy.deathCounter === undefined) enemy.deathCounter = 100;
      if (enemy.deathCounter) enemy.deathCounter--;

      if (enemy.health > 0 || enemy.deathCounter > 0) {
        newEn.push(enemy);
      }
    });

    _this.enemies = newEn;
  };

  this.enemies = enemies.map(function (enemy) {
    switch (enemy.type) {
      case "potato":
        return new _potato_js__WEBPACK_IMPORTED_MODULE_0__["default"](enemy.x, enemy.y, 32, 32, enemy.moveSet);

      case "firePlant":
        return new _firePlant_js__WEBPACK_IMPORTED_MODULE_1__["default"](enemy.x, enemy.y, 32, 32, enemy.moveSet, pabbot);
    }
  });
};



/***/ }),

/***/ "./src/enemies/fireBall.js":
/*!*********************************!*\
  !*** ./src/enemies/fireBall.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fireball; });
/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity.js */ "./src/entity.js");
/* harmony import */ var _tileSheet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tileSheet.js */ "./src/tileSheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Fireball =
/*#__PURE__*/
function (_Entity) {
  _inherits(Fireball, _Entity);

  function Fireball(x, y, width, height, moveSet, speedX, speedY, pabbot) {
    var _this;

    _classCallCheck(this, Fireball);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fireball).call(this, x, y, width, height, moveSet));
    _this.rotate = [0, 0, 0, 0, 8, 8, 8, 8, 16, 16, 16, 16, 24, 24, 24, 24];

    _this.render = function (buffer) {
      var sprite;
      sprite = _this.rotate.shift();

      _this.rotate.push(sprite);

      buffer.drawImage(_this.tileSheet.image, sprite, 0, _this.width, _this.height, Math.round(_this.position.x), Math.round(_this.position.y), _this.width, _this.height);
    };

    _this.move = function () {
      _this.position.x += _this.speed.x;
      _this.position.y += _this.speed.y;
    };

    _this.hit = function () {
      console.log("hit ouside");

      if (_this.getDistance(_this.pabbot) < 17 && _this.pabbot.lastHit <= 0) {
        console.log("hit inside");

        if (!_this.pabbot.isDashing) {
          _this.pabbot.health--;
          _this.pabbot.lastHit = 50;

          if (_this.pabbot.speed.x === 0) {
            _this.pabbot.speed.y -= 100;
            _this.pabbot.speed.x = _this.speed.x * 0.5;
          } else {
            _this.pabbot.speed.y = -100;
            _this.pabbot.speed.x = -_this.pabbot.speed.x * 0.3;
          }

          setTimeout(_this.pabbot.stop, 200);
          _this.active = false;
        }
      }
    };

    _this.tileSheet = new _tileSheet_js__WEBPACK_IMPORTED_MODULE_1__["default"](8, 4);
    _this.tileSheet.image.src = "../assets/FireBall.png";
    _this.speed = {
      x: speedX,
      y: speedY
    };
    _this.pabbot = pabbot;
    _this.active = true;
    return _this;
  }

  return Fireball;
}(_entity_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/enemies/firePlant.js":
/*!**********************************!*\
  !*** ./src/enemies/firePlant.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirePlant; });
/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity.js */ "./src/entity.js");
/* harmony import */ var _fireBall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fireBall.js */ "./src/enemies/fireBall.js");
/* harmony import */ var _tileSheet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tileSheet.js */ "./src/tileSheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FirePlant =
/*#__PURE__*/
function (_Entity) {
  _inherits(FirePlant, _Entity);

  function FirePlant(x, y, width, height, moveSet, pabbot) {
    var _this;

    _classCallCheck(this, FirePlant);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FirePlant).call(this, x, y, width, height, moveSet));
    _this.speed = {
      x: 0,
      y: 0
    };
    _this.maxSpeed = 0;
    _this.gravity = 200;
    _this.terminalVelocity = 1000;
    _this.facing = "left";
    _this.stepCount = 0;
    _this.firingRight = false;
    _this.firingLeft = false;
    _this.standLeft = [0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32];
    _this.standRight = [192, 192, 192, 192, 192, 192, 192, 192, 224, 224, 224, 224, 224, 224, 224, 224];
    _this.fireLeftReset = [64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128];
    _this.fireLeft = [64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128];
    _this.fireRightReset = [256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320];
    _this.fireRight = [256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320];
    _this.death = 160;

    _this.render = function (buffer) {
      var sprite;
      var hold;

      switch (true) {
        case _this.health <= 0:
          sprite = _this.death;
          break;

        case _this.firingRight:
          hold = _this.fireRight.shift();

          _this.fireRight.push(hold);

          sprite = hold;
          break;

        case _this.firingLeft:
          hold = _this.fireLeft.shift();

          _this.fireLeft.push(hold);

          sprite = hold;
          break;

        case _this.facing === "right":
          hold = _this.standRight.shift();

          _this.standRight.push(hold);

          sprite = hold;
          break;

        case _this.facing === "left":
          hold = _this.standLeft.shift();

          _this.standLeft.push(hold);

          sprite = hold;
          break;
      }

      _this.fireballs.forEach(function (fb) {
        return fb.move();
      });

      _this.fireballs.forEach(function (fb) {
        return fb.hit();
      });

      _this.fireballs = _this.fireballs.filter(function (fb) {
        return fb.active;
      });

      _this.fireballs.forEach(function (fb) {
        return fb.render(buffer);
      });

      buffer.drawImage(_this.tileSheet.image, sprite, 0, _this.width, _this.height, Math.round(_this.position.x), Math.round(_this.position.y), _this.width, _this.height);
    };

    _this.move = function () {
      _this.facePabbot(_this.pabbot.position.x);

      _this.stepCount--;

      if (_this.stepCount <= 0) {
        _this.stepCount = 45;

        _this.moveSet.push(_this.moveSet.shift());
      }

      switch (_this.moveSet[0]) {
        case "fire":
          _this.fire();

          break;

        case "stand":
          _this.firingLeft = false;
          _this.firingRight = false;
          _this.fireLeft = _this.fireLeftReset;
          _this.fireRight = _this.fireRightReset;
          return;
      }
    };

    _this.fire = function () {
      var pabbotX = _this.pabbot.position.x;
      var pabbotY = _this.pabbot.position.y;

      if (_this.health > 0 && Math.abs(_this.pabbot.position.x - _this.position.x) < 350 && Math.abs(_this.pabbot.position.y - _this.position.y) < 100) {
        if (_this.facing === "left") {
          _this.firingLeft = true;

          if (_this.fireLeft[0] === 128 && _this.fireLeft[_this.fireLeft.length - 1] === 96) {
            var fb = new _fireBall_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this.position.x, _this.position.y + 10, 8, 8, null, -5, 0, _this.pabbot);

            _this.fireballs.push(fb);
          }
        } else if (_this.facing === "right") {
          _this.firingRight = true;

          if (_this.fireRight[0] === 320 && _this.fireRight[_this.fireRight.length - 1] === 288) {
            var _fb = new _fireBall_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this.position.x + 32, _this.position.y + 10, 8, 8, null, 5, 0, _this.pabbot);

            _this.fireballs.push(_fb);
          }
        }
      } else {
        _this.firingRight = false;
        _this.firingLeft = false;
        _this.fireLeft = _this.fireLeftReset;
        _this.fireRight = _this.fireRightReset;
      }
    };

    _this.facePabbot = function (pabbotX) {
      if (pabbotX < _this.position.x) {
        _this.facing = "left";
      } else {
        _this.facing = "right";
      }
    };

    _this.health = 1;
    _this.tileSheet = new _tileSheet_js__WEBPACK_IMPORTED_MODULE_2__["default"](32, 12);
    _this.tileSheet.image.src = "../assets/FirePlant.png";
    _this.pabbot = pabbot;
    _this.moveSet = moveSet || ["fire", "stand", "stand", "stand"];
    _this.fireballs = [];
    return _this;
  }

  return FirePlant;
}(_entity_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/enemies/potato.js":
/*!*******************************!*\
  !*** ./src/enemies/potato.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Potato; });
/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity.js */ "./src/entity.js");
/* harmony import */ var _tileSheet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tileSheet.js */ "./src/tileSheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Potato =
/*#__PURE__*/
function (_Entity) {
  _inherits(Potato, _Entity);

  function Potato(x, y, width, height, moveSet) {
    var _this;

    _classCallCheck(this, Potato);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Potato).call(this, x, y, width, height));
    _this.speed = {
      x: 0,
      y: 0
    };
    _this.maxSpeed = 40;
    _this.gravity = 200;
    _this.terminalVelocity = 1000;
    _this.facing = "left";
    _this.stepCount = 0;
    _this.standRight = 0;
    _this.standLeft = 32;
    _this.runningRight = [64, 64, 64, 64, 64, 64, 128, 128, 128, 128, 128, 128];
    _this.runningLeft = [96, 96, 96, 96, 96, 96, 160, 160, 160, 160, 160, 160];
    _this.death = 192;

    _this.render = function (buffer) {
      var sprite;
      var hold;

      switch (true) {
        case _this.health <= 0:
          sprite = _this.death;
          break;

        case _this.facing === "right" && _this.speed.x === 0:
          sprite = _this.standRight;
          break;

        case _this.facing === "left" && _this.speed.x === 0:
          sprite = _this.standLeft;
          break;

        case _this.facing === "right":
          hold = _this.runningRight.shift();

          _this.runningRight.push(hold);

          sprite = hold;
          break;

        case _this.facing === "left":
          hold = _this.runningLeft.shift();

          _this.runningLeft.push(hold);

          sprite = hold;
          break;
      }

      buffer.drawImage(_this.tileSheet.image, sprite, 0, _this.width, _this.height, Math.round(_this.position.x), Math.round(_this.position.y), _this.width, _this.height);
    };

    _this.move = function (timeDelta) {
      _this.stepCount--;

      if (_this.stepCount <= 0) {
        _this.stepCount = 25;

        _this.moveSet.push(_this.moveSet.shift());
      }

      switch (_this.moveSet[0]) {
        case "stand":
          _this.stop();

          break;

        case "left":
          _this.moveLeft();

          break;

        case "right":
          _this.moveRight();

          break;
      }

      if (_this.health > 0) {
        _this.pastPos.x = _this.position.x;
        _this.pastPos.y = _this.position.y;
        _this.position.x += _this.speed.x / timeDelta;
        _this.position.y += _this.speed.y / timeDelta;

        if (_this.speed.y <= _this.terminalVelocity) {
          _this.speed.y += _this.gravity / timeDelta;
        }
      }
    };

    _this.stop = function () {
      _this.speed.x = 0;
    };

    _this.moveLeft = function () {
      _this.facing = "left";
      _this.speed.x = -_this.maxSpeed;
    };

    _this.moveRight = function () {
      _this.facing = "right";
      _this.speed.x = _this.maxSpeed;
    };

    _this.health = 1;
    _this.tileSheet = new _tileSheet_js__WEBPACK_IMPORTED_MODULE_1__["default"](32, 8);
    _this.tileSheet.image.src = "../assets/CharliePotato.png";
    _this.moveSet = moveSet || ["left", "left", "left", "stand", "right", "right", "right", "stand"];
    return _this;
  }

  return Potato;
}(_entity_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/entity.js":
/*!***********************!*\
  !*** ./src/entity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = function Entity(_x, _y, width, height) {
  var _this = this;

  _classCallCheck(this, Entity);

  this.getTop = function () {
    return _this.position.y;
  };

  this.getLeft = function () {
    return _this.position.x;
  };

  this.getBottom = function () {
    return _this.position.y + _this.height;
  };

  this.getRight = function () {
    return _this.position.x + _this.width;
  };

  this.setTop = function (y) {
    _this.position.y = y;
  };

  this.setLeft = function (x) {
    _this.position.x = x;
  };

  this.setBottom = function (y) {
    _this.position.y = y - _this.height;
  };

  this.setRight = function (x) {
    _this.position.x = x - _this.width;
  };

  this.getPastTop = function () {
    return _this.pastPos.y;
  };

  this.getPastLeft = function () {
    return _this.pastPos.x;
  };

  this.getPastBottom = function () {
    return _this.pastPos.y + 32;
  };

  this.getPastRight = function () {
    return _this.pastPos.x + 32;
  };

  this.setPastTop = function (y) {
    _this.pastPos.y = y;
  };

  this.setPastLeft = function (x) {
    _this.pastPos.x = x;
  };

  this.setPastBottom = function (y) {
    _this.pastPos.y = y + 32;
  };

  this.setPastRight = function (x) {
    _this.pastPos.x = x + 32;
  };

  this.getDistance = function (other) {
    var horiz = Math.abs(_this.position.x - other.position.x);
    var vert = Math.abs(_this.position.y - other.position.y);
    return Math.pow(horiz * horiz + vert * vert, 0.5);
  };

  this.position = {
    x: _x,
    y: _y
  };
  this.pastPos = {
    x: _x,
    y: _y
  };
  this.width = width;
  this.height = height;
};



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _inputHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputHandler.js */ "./src/inputHandler.js");
/* harmony import */ var _pabbot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pabbot.js */ "./src/pabbot.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera.js */ "./src/camera.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.js */ "./src/map.js");
/* harmony import */ var _collision_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collision.js */ "./src/collision.js");
/* harmony import */ var _enemies_enemies_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enemies/enemies.js */ "./src/enemies/enemies.js");
/* harmony import */ var _assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/maps/level2.js */ "./assets/maps/level2.js");
/* harmony import */ var _assets_maps_level3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/maps/level3.js */ "./assets/maps/level3.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var GAME_HEIGHT = _assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"].height * 32;
var GAME_WIDTH = _assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"].width * 32;

var Game = function Game(context, reset) {
  var _this = this;

  _classCallCheck(this, Game);

  this.maps = [_assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"], _assets_maps_level3_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
  this.backgrounds = ["../assets/pixel_forest2.png", "../assets/pixel_forest2.png"];

  this.renderMenu = function () {
    _this.display.drawMenu();
  };

  this.render = function () {
    _this.display.drawBackground();

    _this.display.drawMap();

    _this.display.drawEnemies();

    _this.display.drawPabbot();

    _this.display.render();
  };

  this.frame = function (timeStamp) {
    var timeDelta = timeStamp - _this.timeStart;
    _this.timeStart = timeStamp;

    _this.context.clearRect(0, 0, _this.context.canvas.width, _this.context.canvas.height);

    _this.pabbot.move(timeDelta);

    _this.collision.isCollide(_this.pabbot, _this.dead(), _this.gameOver);

    _this.pabbot.danger(_this.enemies.enemies);

    _this.enemies.moveAll(timeDelta);

    _this.enemies.enemies.forEach(function (enemy) {
      return _this.collision.isCollide(enemy);
    });

    _this.render();

    _this.camera.render();

    _this.enemies.checkDeath();

    if (!_this.end) {
      _this.run();
    } else {
      _this.context.globalAlpha = 0.3;
      _this.context.fillStyle = "#000";

      _this.context.fillRect(0, 0, _this.context.canvas.width, _this.context.canvas.height);

      _this.context.globalAlpha = 1;
      _this.context.font = "50px Georgia";
      _this.context.fillStyle = "#FFF";

      _this.context.fillText("Game Over", _this.context.canvas.width / 2 - 100, _this.context.canvas.height / 2 - 100);
    }
  };

  this.end = false;

  this.gameOver = function () {
    document.removeEventListener("keydown", _this.handleEscape);

    if (_this.playId) {
      window.cancelAnimationFrame(_this.playId);
      setTimeout(_this.reset, 2000);
      _this.end = true;
    }
  };

  this.run = function () {
    _this.playId = window.requestAnimationFrame(_this.frame);
  };

  this.pause = function () {
    if (_this.playId) {
      window.cancelAnimationFrame(_this.playId);
      _this.playId = undefined;
      _this.context.globalAlpha = 0.3;
      _this.context.fillStyle = "#000";

      _this.context.fillRect(0, 0, _this.context.canvas.width, _this.context.canvas.height);

      _this.context.globalAlpha = 1;
      _this.context.font = "50px Georgia";
      _this.context.fillStyle = "#FFF";

      _this.context.fillText("Paused", _this.context.canvas.width / 2 - 75, _this.context.canvas.height / 2 - 100);
    }
  };

  this.handlePause = function () {
    document.addEventListener("keydown", _this.handleEscape);
  };

  this.handleEscape = function (e) {
    if (e.keyCode === 27) {
      _this.playId ? _this.pause() : _this.run();
    }
  };

  this.resize = function () {
    _this.display.resize(document.documentElement.clientWidth - 50, document.documentElement.clientHeight, _this.context.canvas.height / _this.context.canvas.width);
  };

  this.deadJump = false;

  this.dead = function () {
    if (_this.pabbot.health <= 0) {
      if (!_this.deadJump) {
        _this.deadJump = true;
        _this.pabbot.speed.y = -100;
        _this.pabbot.speed.x = _this.pabbot.speed.x || 50;

        _this.inputHandler.destroy();
      }

      ;
      return true;
    }

    return false;
  };

  this.nextLevel = function () {
    if (_this.maps.length === 0) return;
    if (_this.backgrounds.length === 0) return;

    var currentMap = _this.maps.shift();

    var currentBackground = _this.backgrounds.shift();

    _this.context.canvas.width = 640;
    _this.context.canvas.height = 320;
    GAME_HEIGHT = currentMap.height * 32;
    GAME_WIDTH = currentMap.width * 32;
    _this.enemies = new _enemies_enemies_js__WEBPACK_IMPORTED_MODULE_6__["default"](currentMap.enemies, _this.pabbot);
    _this.pabbot.position = {
      x: 64,
      y: GAME_HEIGHT - 64
    };
    _this.map = new _map_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _this.camera = new _camera_js__WEBPACK_IMPORTED_MODULE_3__["default"](currentMap, _this.context.canvas.width, _this.context.canvas.height, _this.pabbot);
    _this.collision = new _collision_js__WEBPACK_IMPORTED_MODULE_5__["default"](GAME_WIDTH, GAME_HEIGHT, currentMap.collisionMap, currentMap.width, _this.nextLevel);
    _this.display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"](_this.context, GAME_WIDTH, GAME_HEIGHT, _this.pabbot, _this.map, currentMap.width, _this.camera, _this.context.canvas.width, _this.context.canvas.height, _this.enemies, _this.run, currentMap);
    _this.display.background.src = currentBackground;

    _this.display.destroyHandle();

    _this.resize();
  };

  this.context = context;
  this.reset = reset;
  this.context.canvas.width = 640;
  this.context.canvas.height = 320;
  GAME_HEIGHT = _assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"].height * 32;
  GAME_WIDTH = _assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"].width * 32;
  this.playId;
  this.timeStart = 0;
  this.run = this.run.bind(this);
  this.gameOver = this.gameOver.bind(this);
  this.handlePause();
  this.pabbot = new _pabbot_js__WEBPACK_IMPORTED_MODULE_1__["default"](64, GAME_HEIGHT - 64, 32, 32);
  this.enemies = new _enemies_enemies_js__WEBPACK_IMPORTED_MODULE_6__["default"](_assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"].enemies, this.pabbot);
  this.map = new _map_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  this.inputHandler = new _inputHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.pabbot);
  this.camera = new _camera_js__WEBPACK_IMPORTED_MODULE_3__["default"](_assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"], this.context.canvas.width, this.context.canvas.height, this.pabbot);
  this.collision = new _collision_js__WEBPACK_IMPORTED_MODULE_5__["default"](GAME_WIDTH, GAME_HEIGHT, _assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"].collisionMap, _assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"].width, this.nextLevel);
  this.display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.context, GAME_WIDTH, GAME_HEIGHT, this.pabbot, this.map, _assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"].width, this.camera, this.context.canvas.width, this.context.canvas.height, this.enemies, this.run, _assets_maps_level2_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");

document.addEventListener("DOMContentLoaded", function () {
  var scale = 'scale(1)';
  document.body.style.webkitTransform = scale; // Chrome, Opera, Safari

  document.body.style.msTransform = scale; // IE 9

  document.body.style.transform = scale; // General

  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");

  var reset = function reset() {
    game = null;
    game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](context, reset);
    game.resize();
    game.renderMenu();
  };

  var game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](context, reset);
  window.addEventListener("load", function (e) {
    game.resize();
    game.renderMenu();
  }, {
    once: true
  });
  window.addEventListener("resize", game.resize);
});

/***/ }),

/***/ "./src/inputHandler.js":
/*!*****************************!*\
  !*** ./src/inputHandler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler(pabbot) {
  var _this = this;

  _classCallCheck(this, InputHandler);

  this.handleDown = function (e) {
    //w87, a65, s83, d68, j74, k75, esc27
    switch (e.key) {
      case "w":
      case "ArrowUp":
        _this.pabbot.upActive = true;
        break;

      case "a":
      case "ArrowLeft":
        _this.pabbot.leftActive = true;
        _this.pabbot.facing = "left";

        _this.pabbot.moveLeft();

        break;

      case "s":
      case "ArrowDown":
        _this.pabbot.downActive = true;
        break;

      case "d":
      case "ArrowRight":
        _this.pabbot.rightActive = true;
        _this.pabbot.facing = "right";

        _this.pabbot.moveRight();

        break;

      case "j":
      case " ":
        if (!_this.jumped && !_this.pabbot.isJumping) {
          _this.jumped = true;

          _this.pabbot.jump();
        } else {
          _this.pabbot.wallJump();
        }

        break;

      case "k":
      case "Shift":
        if (!_this.dashed) {
          _this.dashed = true;

          _this.pabbot.dash();
        }

        break;
    }
  };

  this.handleUp = function (e) {
    switch (e.key) {
      case "w":
      case "ArrowUp":
        _this.pabbot.upActive = false;
        break;

      case "a":
      case "ArrowLeft":
        _this.pabbot.leftActive = false;
        if (_this.pabbot.speed.x < 0) _this.pabbot.stop();
        break;

      case "s":
      case "ArrowDown":
        _this.pabbot.downActive = false;
        break;

      case "d":
      case "ArrowRight":
        _this.pabbot.rightActive = false;
        if (_this.pabbot.speed.x > 0) _this.pabbot.stop();
        break;

      case "j":
      case " ":
        if (_this.jumped) {
          _this.jumped = false;

          _this.pabbot.cancelJump();
        }

        break;

      case "k":
      case "Shift":
        if (_this.dashed) {
          _this.dashed = false;
        }

        break;
    }
  };

  this.destroy = function () {
    document.removeEventListener("keydown", _this.handleDown);
    document.removeEventListener("keyup", _this.handleUp);
  };

  this.jumped = false;
  this.dashed = false;
  this.pabbot = pabbot;
  document.addEventListener("keydown", this.handleDown);
  document.addEventListener("keyup", this.handleUp);
};



/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _tileSheet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tileSheet.js */ "./src/tileSheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Map = function Map() {
  var _this = this;

  _classCallCheck(this, Map);

  this.render = function (mapArray, colCount, buffer) {
    for (var i = 0; i < mapArray.length; i++) {
      var value = mapArray[i] - 1;
      var sourceX = value % _this.tileSheet.colCount * 32;
      var sourceY = Math.floor(value / _this.tileSheet.colCount) * 32;
      var destinationX = i % colCount * 32;
      var destinationY = Math.floor(i / colCount) * 32;
      buffer.drawImage(_this.tileSheet.image, sourceX, sourceY, _this.tileSheet.tileSize, _this.tileSheet.tileSize, destinationX, destinationY, _this.tileSheet.tileSize, _this.tileSheet.tileSize);
    }
  };

  this.tileSheet = new _tileSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](32, 6);
  this.tileSheet.image.src = "../assets/terrain.png";
};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function Menu(dH, dW, context, _buffer) {
  var _this = this;

  _classCallCheck(this, Menu);

  this.hexPush = function () {
    var cw = _this.context.canvas.width;
    var ch = _this.context.canvas.height;

    _this.hexes.push({
      points: [{
        x: 0.14 * cw,
        y: 0.79 * ch
      }, {
        x: 0.23 * cw,
        y: 0.79 * ch
      }, {
        x: 0.23 * cw,
        y: 0.85 * ch
      }, {
        x: 0.14 * cw,
        y: 0.85 * ch
      }],
      url: "http://www.github.com/ahhchooey"
    }, {
      points: [{
        x: 0.26 * cw,
        y: 0.79 * ch
      }, {
        x: 0.37 * cw,
        y: 0.79 * ch
      }, {
        x: 0.37 * cw,
        y: 0.85 * ch
      }, {
        x: 0.26 * cw,
        y: 0.85 * ch
      }],
      url: "https://www.linkedin.com/in/alex-chui-075785117/"
    }, {
      points: [{
        x: 0.40 * cw,
        y: 0.79 * ch
      }, {
        x: 0.50 * cw,
        y: 0.79 * ch
      }, {
        x: 0.50 * cw,
        y: 0.85 * ch
      }, {
        x: 0.40 * cw,
        y: 0.85 * ch
      }],
      url: "http://www.github.com/ahhchooey"
    });
  };

  this.drawLinks = function (buffer) {
    _this.canvas.addEventListener("mousedown", _this.handleClick);

    for (var i = 0; i < _this.hexes.length; i++) {
      var hex = _this.hexes[i];
      buffer.strokeStyle = "#fff";
      buffer.beginPath();
      buffer.moveTo(hex.points[0].x, hex.points[0].y);

      for (var j = 1; j < hex.points.length; j++) {
        buffer.lineTo(hex.points[j].x, hex.points[j].y);
      }

      buffer.closePath();
      buffer.stroke();
    }
  };

  this.handleClick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    var mouseX = parseInt(e.clientX - _this.offsetX);
    var mouseY = parseInt(e.clientY - _this.offsetY);

    for (var i = 0; i < _this.hexes.length; i++) {
      var hex = _this.hexes[i];

      _this.buffer.beginPath();

      _this.buffer.moveTo(hex.points[0].x, hex.points[0].y);

      for (var j = 1; j < hex.points.length; j++) {
        _this.buffer.lineTo(hex.points[j].x, hex.points[j].y);
      }

      _this.buffer.closePath();

      if (_this.buffer.isPointInPath(mouseX, mouseY)) {
        window.location = hex.url;
      }
    }
  };

  this.pointerPositions = ["start", "controls", "about"];

  this.currentPointer = function () {
    return _this.pointerPositions[0];
  };

  this.movePointerDown = function () {
    _this.pointerPositions.push(_this.pointerPositions.shift());
  };

  this.movePointerUp = function () {
    _this.pointerPositions.unshift(_this.pointerPositions.pop());
  };

  this.startGame = function (run) {
    run();
  };

  this.showControls = function () {
    _this.currentScreen = "controls";
  };

  this.showAbout = function () {
    _this.currentScreen = "about";

    _this.hexPush();
  };

  this.reOffset = function () {
    _this.offsetX = 25;
    _this.offsetY = (document.documentElement.clientHeight - _this.context.canvas.height) / 2;
  };

  this.clickGithub = function () {
    console.log(window.location);
  };

  this.clickLinkedIn = function () {
    console.log(window.location);
  };

  this.currentScreen = "main";

  this.render = function (buffer) {
    buffer.fillStyle = "#000";
    buffer.fillRect(0, 0, _this.dW, _this.dH);
    buffer.fillStyle = "#fff";

    switch (_this.currentScreen) {
      case "main":
        buffer.font = "50px serif";
        buffer.fillText("Pabbot", 150, 120);
        break;

      case "controls":
        buffer.font = "20px serif";
        buffer.fillText("Controls", 100, 100);
        buffer.fillText("ArrowKeys/WASD - Up, Down, Left, Right", 100, 130);
        buffer.fillText("Enter - Menu Select", 100, 150);
        buffer.fillText("J/Space - Jump (when on ground)", 100, 170);
        buffer.fillText("K/Shift - Spin (when jumping)", 100, 190);
        buffer.fillText("ESC - Pause/Resume", 100, 210);
        buffer.fillText("Spin on Enemies to eliminate them", 100, 240);
        buffer.fillText("Jump on Walls to wall jump", 100, 260);
        buffer.fillText("Make it to the end of each level", 100, 280);
        break;

      case "about":
        buffer.font = "20px serif";
        buffer.fillText("About Me", 100, 100);
        buffer.fillText("Hi, I'm Alex, a software developer.", 100, 130);
        buffer.fillText("This is pabbot, a game where you play as Pabbot.", 100, 150);
        buffer.fillText("The goal of the game is simply to make it to the", 100, 170);
        buffer.fillText("end. There are monsters on the path to victory.", 100, 190);
        buffer.fillText("Make sure you spin to win.", 100, 210);
        buffer.fillText("If you want, check out my other work.", 100, 250);
        buffer.fillText("GitHub     LinkedIn     Portfolio", 100, 270);
        break;
    }

    buffer.font = "20px serif";
    var wordLeft = _this.dW / 2 + 200;
    var wordTop = _this.dH / 2 + 20;
    buffer.fillText("Start", wordLeft, wordTop);
    buffer.fillText("Controls", wordLeft, wordTop + 25);
    buffer.fillText("About", wordLeft, wordTop + 50);
    var locus = [wordLeft, wordLeft];

    switch (_this.currentPointer()) {
      case "start":
        locus = [wordLeft - 10, wordTop - 5];
        break;

      case "controls":
        locus = [wordLeft - 10, wordTop + 20];
        break;

      case "about":
        locus = [wordLeft - 10, wordTop + 45];
        break;
    }

    buffer.beginPath();
    buffer.moveTo(locus[0], locus[1]);
    buffer.lineTo(locus[0] - 5, locus[1] - 5);
    buffer.lineTo(locus[0] - 5, locus[1] + 5);
    buffer.closePath();
    buffer.fill();
  };

  this.dW = dW;
  this.dH = dH;
  this.context = context;
  this.buffer = _buffer;
  this.canvas = document.getElementById("game");
  this.reOffset();

  window.onresize = function (e) {
    return _this.reOffset();
  };

  this.isDown = false;
  this.hexes = [];
};



/***/ }),

/***/ "./src/pabbot.js":
/*!***********************!*\
  !*** ./src/pabbot.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pabbot; });
/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ "./src/entity.js");
/* harmony import */ var _tileSheet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tileSheet.js */ "./src/tileSheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Pabbot =
/*#__PURE__*/
function (_Entity) {
  _inherits(Pabbot, _Entity);

  function Pabbot(_x, _y, width, height) {
    var _this;

    _classCallCheck(this, Pabbot);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pabbot).call(this, _x, _y, width, height));
    _this.health = 3;
    _this.speed = {
      x: 0,
      y: 0
    };
    _this.maxSpeed = 50;
    _this.dashSpeed = 75;
    _this.jumpHeight = 200;
    _this.gravity = 200;
    _this.terminalVelocity = 1000;
    _this.isJumping = false;
    _this.isDashing = false;
    _this.isWalledRight = false;
    _this.isWalledLeft = false;
    _this.upActive = false;
    _this.leftActive = false;
    _this.downActive = false;
    _this.rightActive = false;
    _this.facing = "right";
    _this.lastHit = 0;
    _this.standRight = 0;
    _this.standLeft = 32;
    _this.runningRight = [64, 64, 64, 64, 64, 64, 128, 128, 128, 128, 128, 128];
    _this.runningLeft = [96, 96, 96, 96, 96, 96, 160, 160, 160, 160, 160, 160];
    _this.jumpingRight = 192;
    _this.fallingRight = 256;
    _this.jumpingLeft = 224;
    _this.fallingLeft = 288;
    _this.dashingRight = [640, 640, 640, 640, 672, 672, 672, 672, 704, 704, 704, 704, 736, 736, 736, 736];
    _this.dashingLeft = [736, 736, 736, 736, 704, 704, 704, 704, 672, 672, 672, 672, 640, 640, 640, 640];
    _this.healthBall = 0;

    _this.render = function (buffer) {
      var sprite;
      var hold;

      switch (true) {
        case _this.facing === "right" && !_this.isJumping && _this.speed.x === 0:
          sprite = _this.standRight;
          if (_this.lastHit > 0) sprite += 320;
          break;

        case _this.facing === "right" && !_this.isJumping && _this.speed.x !== 0:
          hold = _this.runningRight.shift();

          _this.runningRight.push(hold);

          sprite = hold;
          if (_this.lastHit > 0) sprite += 320;
          break;

        case _this.facing === "right" && _this.isDashing:
          hold = _this.dashingRight.shift();

          _this.dashingRight.push(hold);

          sprite = hold;
          break;

        case _this.facing === "right" && _this.isJumping && _this.speed.y < 0:
          sprite = _this.jumpingRight;
          if (_this.lastHit > 0) sprite += 320;
          break;

        case _this.facing === "right" && _this.isJumping && _this.speed.y > 0:
          sprite = _this.fallingRight;
          if (_this.lastHit > 0) sprite += 320;
          break;

        case _this.facing === "left" && !_this.isJumping && _this.speed.x === 0:
          sprite = _this.standLeft;
          if (_this.lastHit > 0) sprite += 320;
          break;

        case _this.facing === "left" && !_this.isJumping && _this.speed.x !== 0:
          hold = _this.runningLeft.shift();

          _this.runningLeft.push(hold);

          sprite = hold;
          if (_this.lastHit > 0) sprite += 320;
          break;

        case _this.facing === "left" && _this.isDashing:
          hold = _this.dashingLeft.shift();

          _this.dashingLeft.push(hold);

          sprite = hold;
          break;

        case _this.facing === "left" && _this.isJumping && _this.speed.y < 0:
          sprite = _this.jumpingLeft;
          if (_this.lastHit > 0) sprite += 320;
          break;

        case _this.facing === "left" && _this.isJumping && _this.speed.y > 0:
          sprite = _this.fallingLeft;
          if (_this.lastHit > 0) sprite += 320;
          break;
      }

      buffer.drawImage(_this.tileSheet.image, sprite, 0, _this.width, _this.height, Math.round(_this.position.x), Math.round(_this.position.y), _this.width, _this.height);
    };

    _this.renderHealth = function (buffer, x, y) {
      for (var i = 0; i < _this.health; i++) {
        buffer.drawImage(_this.tileSheet.image, _this.healthBall, 0, _this.width, _this.height, 20 + 23 * i + x, 20 + y, _this.width - 10, _this.height - 10);
      }
    };

    _this.move = function (timeDelta) {
      _this.pastPos.x = _this.position.x;
      _this.pastPos.y = _this.position.y;
      _this.position.x += _this.speed.x / timeDelta;
      _this.position.y += _this.speed.y / timeDelta;

      if (_this.speed.y <= _this.terminalVelocity) {
        _this.speed.y += _this.gravity / timeDelta;
      }
    };

    _this.stop = function () {
      _this.speed.x = 0;
    };

    _this.moveLeft = function () {
      _this.speed.x = -_this.maxSpeed;
    };

    _this.moveRight = function () {
      _this.speed.x = _this.maxSpeed;
    };

    _this.jump = function () {
      if (!_this.isJumping) {
        _this.speed.y = -_this.jumpHeight;
        _this.isJumping = true;
      }
    };

    _this.cancelJump = function () {
      if (_this.isJumping) {
        if (_this.speed.y < 0) {
          _this.speed.y = 0;
        }
      }
    };

    _this.wallJump = function () {
      if (_this.isWalledRight && _this.isJumping) {
        _this.isWalled = false;
        _this.speed.y = -_this.jumpHeight;
        _this.speed.x = -_this.maxSpeed;
        _this.facing = "left";
      } else if (_this.isWalledLeft && _this.isJumping) {
        _this.isWalled = false;
        _this.speed.y = -_this.jumpHeight;
        _this.speed.x = _this.maxSpeed;
        _this.facing = "right";
      }
    };

    _this.dash = function () {
      if (_this.isJumping && !_this.isDashing) {
        _this.isDashing = true;
        _this.speed.x = 0;
        _this.speed.y = 0;
        if (_this.upActive) _this.speed.y -= _this.dashSpeed;
        if (_this.leftActive) _this.speed.x -= _this.dashSpeed;
        if (_this.downActive) _this.speed.y += _this.dashSpeed;
        if (_this.rightActive) _this.speed.x += _this.dashSpeed;
      }
    };

    _this.danger = function (enemies) {
      _this.lastHit--;
      enemies.forEach(function (enemy) {
        if (_this.getDistance(enemy) < 30 && _this.lastHit <= 0 && enemy.health > 0) {
          if (_this.isDashing) {
            enemy.health--;
          } else {
            _this.lastHit = 50;
            _this.health--;
          }

          if (_this.speed.x === 0) {
            _this.speed.y -= 100;
            _this.speed.x = enemy.speed.x;
          } else {
            _this.speed.x = -_this.speed.x * 0.3;
            _this.speed.y = -100;
          }

          setTimeout(_this.stop, 200);
        }
      });
    };

    _this.tileSheet = new _tileSheet_js__WEBPACK_IMPORTED_MODULE_1__["default"](32, 25);
    _this.tileSheet.image.src = "../assets/Pabbot.png";
    return _this;
  }

  return Pabbot;
}(_entity_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/tileSheet.js":
/*!**************************!*\
  !*** ./src/tileSheet.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileSheet; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TileSheet = function TileSheet(tileSize, colCount) {
  _classCallCheck(this, TileSheet);

  this.image = new Image();
  this.tileSize = tileSize;
  this.colCount = colCount;
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map