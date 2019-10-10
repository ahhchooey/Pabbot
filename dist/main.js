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

/***/ "./assets/maps/testMap.js":
/*!********************************!*\
  !*** ./assets/maps/testMap.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./assets/maps/util.js");

var gameMap = {
  "mapArray": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 16, 17, 17, 17, 18, 0, 0, 24, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 17, 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 17, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 4, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 7, 8, 8, 8, 8, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 17, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 8, 3, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 0, 10, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 15, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 8, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 3, 0, 0, 0, 0, 0, 0, 0, 16, 18, 0, 0, 0, 16, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 0, 16, 0, 0, 16, 17, 17, 17, 18, 0, 1, 8, 8, 8, 8, 8, 8, 9, 0, 0, 0, 0, 16, 18, 0, 0, 16, 18, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 17, 17, 17, 17, 17, 1, 8, 8, 9, 17, 17, 17, 17, 17, 17, 7, 8, 8, 8, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 8, 9, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 1, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 8, 8, 8, 8],
  "tilewidth": 32,
  "height": 10,
  "width": 100,
  "enemies": [{
    type: "potato",
    x: 500,
    y: 100
  }, {
    type: "potato",
    x: 800,
    y: 100
  }, {
    type: "potato",
    x: 1200,
    y: 100
  }, {
    type: "potato",
    x: 2600,
    y: 100
  }, {
    type: "potato",
    x: 2800,
    y: 100
  }]
};
gameMap.collisionMap = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["collisionMapGenerator"])(gameMap.mapArray);
/* harmony default export */ __webpack_exports__["default"] = (gameMap);

/***/ }),

/***/ "./assets/maps/testMap2.js":
/*!*********************************!*\
  !*** ./assets/maps/testMap2.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./assets/maps/util.js");

var gameMap = {
  "mapArray": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 16, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 16, 17, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 12, 11, 24, 0, 0, 0, 0, 16, 17, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 1, 2, 3, 0, 0, 16, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0, 4, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 7, 8, 9, 0, 0, 4, 5, 6, 0, 0, 16, 12, 17, 11, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 7, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 18, 0, 11, 12, 0, 0, 0, 10, 0, 0, 10, 0, 0, 7, 8, 8, 8, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 6, 0, 0, 4, 6, 0, 0, 10, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 13, 15, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 0, 0, 0, 7, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 3, 0, 0, 0, 0, 0, 0, 16, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0, 1, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 8, 3, 12, 16, 17, 17, 17, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 17, 17, 17, 17, 17, 1, 8, 8, 8, 8, 8, 9, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 7, 8, 8, 8, 8, 0, 16, 18, 0, 0, 16, 18, 0, 1, 8, 8, 8, 8, 8, 9, 0, 16, 17, 17, 17, 18, 12, 16, 18, 7, 8, 8, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 8, 9, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
  "tilewidth": 32,
  "height": 10,
  "width": 100,
  "enemies": [{
    type: "potato",
    x: 500,
    y: 100
  }, {
    type: "potato",
    x: 800,
    y: 100
  }, {
    type: "potato",
    x: 1200,
    y: 100
  }, {
    type: "potato",
    x: 2600,
    y: 100
  }, {
    type: "potato",
    x: 2800,
    y: 100
  }]
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

      case 24:
        return 14;

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

    if (ent.getBottom() > _this.gameHeight) {
      gameOver();
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
        _this.collideNextLevel(ent, tileX);

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
      ent.speed.y = 100;
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

  this.collideNextLevel = function (ent, tileLeft) {
    if (ent.getRight() > tileLeft && ent.getPastRight() <= tileLeft) {
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
      case "j":
        _this.menuSelect();

        _this.drawMenu();

        break;
    }
  };

  this.menuSelect = function () {
    switch (_this.menu.currentPointer()) {
      case "start":
        _this.menu.startGame(_this.run);

        document.removeEventListener("keydown", _this.handleMenu);
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

    _this.pabbot.renderHealth(_this.buffer, Math.floor(_this.camera.x));
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Enemies = function Enemies(enemies) {
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
      if (enemy.health > 0) {
        newEn.push(enemy);
      }
    });

    _this.enemies = newEn;
  };

  this.enemies = enemies.map(function (enemy) {
    switch (enemy.type) {
      case "potato":
        return new _potato_js__WEBPACK_IMPORTED_MODULE_0__["default"](enemy.x, enemy.y, 32, 32, enemy.moveSet);
    }
  });
};



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

    _this.render = function (buffer) {
      var sprite;
      var hold;

      switch (true) {
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
        _this.stepCount = 50;

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
      _this.facing = "left";
      _this.speed.x = -_this.maxSpeed;
    };

    _this.moveRight = function () {
      _this.facing = "right";
      _this.speed.x = _this.maxSpeed;
    };

    _this.health = 1;
    _this.tileSheet = new _tileSheet_js__WEBPACK_IMPORTED_MODULE_1__["default"](32, 6);
    _this.tileSheet.image.src = "../assets/CharliePotato.png";
    _this.moveSet = ["left", "left", "stand", "right", "right", "stand"] || false;
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
/* harmony import */ var _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/maps/testMap2.js */ "./assets/maps/testMap2.js");
/* harmony import */ var _assets_maps_testMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/maps/testMap.js */ "./assets/maps/testMap.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var GAME_HEIGHT = _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_7__["default"].height * 32;
var GAME_WIDTH = _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_7__["default"].width * 32;

var Game = function Game(context, reset) {
  var _this = this;

  _classCallCheck(this, Game);

  this.renderMenu = function () {
    _this.display.drawMenu();
  };

  this.render = function () {
    _this.display.drawBackground();

    _this.display.drawEnemies();

    _this.display.drawMap();

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

      _this.context.fillText("Game Over", _this.context.canvas.width / 2 - 75, _this.context.canvas.height / 2 - 100);
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
        _this.pabbot.speed.y += -200;
        _this.pabbot.speed.x = _this.pabbot.speed.x || 50;

        _this.inputHandler.destroy();
      }

      ;
      return true;
    }

    return false;
  };

  this.mapReset = [_assets_maps_testMap_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
  this.maps = [_assets_maps_testMap_js__WEBPACK_IMPORTED_MODULE_8__["default"]];

  this.nextLevel = function () {
    if (_this.maps.length === 0) return;

    var currentMap = _this.maps.shift();

    _this.context.canvas.width = 700;
    _this.context.canvas.height = 320;
    GAME_HEIGHT = currentMap.height * 32;
    GAME_WIDTH = currentMap.width * 32;
    _this.enemies = new _enemies_enemies_js__WEBPACK_IMPORTED_MODULE_6__["default"](currentMap.enemies);
    _this.pabbot.position = {
      x: 0,
      y: 0
    };
    _this.map = new _map_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _this.camera = new _camera_js__WEBPACK_IMPORTED_MODULE_3__["default"](currentMap, _this.context.canvas.width, _this.context.canvas.height, _this.pabbot);
    _this.collision = new _collision_js__WEBPACK_IMPORTED_MODULE_5__["default"](GAME_WIDTH, GAME_HEIGHT, currentMap.collisionMap, currentMap.width, _this.nextLevel);
    _this.display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"](_this.context, GAME_WIDTH, GAME_HEIGHT, _this.pabbot, _this.map, currentMap.width, _this.camera, _this.context.canvas.width, _this.context.canvas.height, _this.enemies, _this.run, currentMap);

    _this.resize();
  };

  this.context = context;
  this.reset = reset;
  this.context.canvas.height = 320;
  this.context.canvas.width = 700;
  this.playId;
  this.timeStart = 0;
  this.run = this.run.bind(this);
  this.gameOver = this.gameOver.bind(this);
  this.handlePause();
  this.pabbot = new _pabbot_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 32, 32);
  this.enemies = new _enemies_enemies_js__WEBPACK_IMPORTED_MODULE_6__["default"](_assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_7__["default"].enemies);
  this.map = new _map_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  this.inputHandler = new _inputHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.pabbot);
  this.camera = new _camera_js__WEBPACK_IMPORTED_MODULE_3__["default"](_assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_7__["default"], this.context.canvas.width, this.context.canvas.height, this.pabbot);
  this.collision = new _collision_js__WEBPACK_IMPORTED_MODULE_5__["default"](GAME_WIDTH, GAME_HEIGHT, _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_7__["default"].collisionMap, _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_7__["default"].width, this.nextLevel);
  this.display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.context, GAME_WIDTH, GAME_HEIGHT, this.pabbot, this.map, _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_7__["default"].width, this.camera, this.context.canvas.width, this.context.canvas.height, this.enemies, this.run, _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
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
          console.log("wj");

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

  function Pabbot(_x, y, width, height) {
    var _this;

    _classCallCheck(this, Pabbot);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pabbot).call(this, _x, y, width, height));
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
    _this.dashingRight = [480, 480, 480, 480, 512, 512, 512, 512, 544, 544, 544, 544, 576, 576, 576, 576];
    _this.dashingLeft = [576, 576, 576, 576, 544, 544, 544, 544, 512, 512, 512, 512, 488, 488, 488, 488];
    _this.healthBall = 640;

    _this.render = function (buffer) {
      var sprite;
      var hold;

      switch (true) {
        case _this.facing === "right" && !_this.isJumping && _this.speed.x === 0:
          sprite = _this.standRight;
          break;

        case _this.facing === "right" && !_this.isJumping && _this.speed.x !== 0:
          hold = _this.runningRight.shift();

          _this.runningRight.push(hold);

          sprite = hold;
          break;

        case _this.facing === "right" && _this.isDashing:
          hold = _this.dashingRight.shift();

          _this.dashingRight.push(hold);

          sprite = hold;
          break;

        case _this.facing === "right" && _this.isJumping && _this.speed.y < 0:
          sprite = _this.jumpingRight;
          break;

        case _this.facing === "right" && _this.isJumping && _this.speed.y > 0:
          sprite = _this.fallingRight;
          break;

        case _this.facing === "left" && !_this.isJumping && _this.speed.x === 0:
          sprite = _this.standLeft;
          break;

        case _this.facing === "left" && !_this.isJumping && _this.speed.x !== 0:
          hold = _this.runningLeft.shift();

          _this.runningLeft.push(hold);

          sprite = hold;
          break;

        case _this.facing === "left" && _this.isDashing:
          hold = _this.dashingLeft.shift();

          _this.dashingLeft.push(hold);

          sprite = hold;
          break;

        case _this.facing === "left" && _this.isJumping && _this.speed.y < 0:
          sprite = _this.jumpingLeft;
          break;

        case _this.facing === "left" && _this.isJumping && _this.speed.y > 0:
          sprite = _this.fallingLeft;
          break;
      }

      buffer.drawImage(_this.tileSheet.image, sprite, 0, _this.width, _this.height, Math.round(_this.position.x), Math.round(_this.position.y), _this.width, _this.height);
    };

    _this.renderHealth = function (buffer, x) {
      for (var i = 0; i < _this.health; i++) {
        buffer.drawImage(_this.tileSheet.image, 608, 0, _this.width, _this.height, 20 + 23 * i + x, 20, _this.width - 10, _this.height - 10);
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
      console.log("outside");

      if (_this.isWalledRight && _this.isJumping) {
        console.log("right");
        _this.isWalled = false;
        _this.speed.y = -_this.jumpHeight;
        _this.speed.x = -_this.maxSpeed;
        _this.facing = "left";
      } else if (_this.isWalledLeft && _this.isJumping) {
        console.log("leftk");
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
        if (_this.getDistance(enemy) < 30 && _this.lastHit <= 0) {
          if (_this.isDashing) {
            console.log("hit");
            enemy.health--;
          } else {
            console.log("ouch");
            _this.lastHit = 100;
            _this.health--;
          }

          if (_this.speed.x === 0) {
            _this.speed.y -= 100;
            _this.speed.x = enemy.speed.x;
          } else {
            _this.speed.x = -_this.speed.x * 0.3;
            _this.speed.y = -_this.speed.y * 0.7;
          }

          setTimeout(_this.stop, 200);
        }
      });
    };

    _this.tileSheet = new _tileSheet_js__WEBPACK_IMPORTED_MODULE_1__["default"](32, 20);
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