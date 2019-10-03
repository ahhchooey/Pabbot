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
  "mapArray": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 16, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 12, 16, 16, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 5, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 15, 6, 15, 6, 15, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 6, 6, 6, 6, 6, 3, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 15, 6, 15, 6, 15, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 16, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 15, 15, 15, 6, 15, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 6, 6, 6, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 5, 6, 15, 6, 15, 6, 15, 6, 6, 0, 13, 0, 0, 14, 14, 14, 14, 14, 0, 1, 6, 6, 6, 6, 6, 6, 7, 0, 0, 0, 0, 14, 14, 0, 0, 14, 14, 0, 0, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 12, 16, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 14, 14, 0, 0, 0, 1, 6, 6, 7, 0, 0, 0, 0, 0, 0, 5, 6, 15, 6, 15, 6, 15, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  "tilewidth": 32,
  "height": 10,
  "width": 100
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
        return 4;

      case 5:
        return 5;

      case 7:
        return 6;

      case 8:
        return 9;

      case 10:
        return 7;

      case 12:
        return 8;

      case 15:
        return 4;

      case 16:
        return 4;

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

var Collision = function Collision(width, height, collisionMap, mapWidth) {
  var _this = this;

  _classCallCheck(this, Collision);

  this.isCollide = function (ent) {
    //if (ent.getTop() < 0) ent.setTop(0);
    if (ent.getLeft() < 0) ent.setLeft(0);

    if (ent.getBottom() > _this.gameHeight) {
      ent.setBottom(_this.gameHeight);
      ent.isJumping = false;
      ent.isDashing = false;
    }

    ;
    if (ent.getRight() > _this.gameWidth) ent.setRight(_this.gameWidth);
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
    }
  };

  this.collidePlatformTop = function (ent, tileTop) {
    if (ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop) {
      ent.setBottom(tileTop - 0.01);
      ent.speed.y = 0;
      ent.isJumping = false;
      ent.isDashing = false;
      return true;
    }

    return false;
  };

  this.collidePlatformLeft = function (ent, tileLeft) {
    if (ent.getRight() > tileLeft && ent.getPastRight() <= tileLeft) {
      ent.setRight(tileLeft - 0.01);
      ent.isJumping = false;
      return true;
    }

    return false;
  };

  this.collidePlatformRight = function (ent, tileRight) {
    if (ent.getLeft() < tileRight && ent.getPastLeft() >= tileRight) {
      ent.setLeft(tileRight + 0.01);
      ent.isJumping = false;
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

  this.gameWidth = width;
  this.gameHeight = height;
  this.collisionMap = collisionMap;
  this.mapWidth = mapWidth;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Display = function Display(context, _width, _height, pabbot, map, mapWidth, camera, dW, dH) {
  var _this = this;

  _classCallCheck(this, Display);

  this.drawPabbot = function () {
    _this.pabbot.render(_this.buffer);
  };

  this.drawMap = function (data) {
    _this.map.render(data, _this.mapWidth, _this.buffer);
  };

  this.fill = function (color) {
    _this.buffer.fillStyle = color;

    _this.buffer.fillRect(0, 0, _this.width, _this.height);
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
  this.buffer = document.createElement("canvas").getContext("2d");
  this.buffer.canvas.width = _width;
  this.buffer.canvas.height = _height;
};



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
/* harmony import */ var _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/maps/testMap2.js */ "./assets/maps/testMap2.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var GAME_HEIGHT = _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_6__["default"].height * 32;
var GAME_WIDTH = _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_6__["default"].width * 32;

var Game = function Game(context) {
  var _this = this;

  _classCallCheck(this, Game);

  this.render = function () {
    _this.display.fill("#333");

    _this.display.drawPabbot();

    _this.display.drawMap(_assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_6__["default"].mapArray, _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_6__["default"].width);

    _this.display.render();
  };

  this.frame = function (timeStamp) {
    _this.playId = undefined;
    var timeDelta = timeStamp - _this.timeStart;
    _this.timeStart = timeStamp;

    _this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    _this.pabbot.move(timeDelta);

    _this.collision.isCollide(_this.pabbot);

    _this.render();

    _this.camera.render();

    _this.run();
  };

  this.run = function () {
    if (!_this.playId) {
      _this.playId = window.requestAnimationFrame(_this.frame);
    }
  };

  this.pause = function () {
    if (_this.playId) {
      window.cancelAnimationFrame(_this.playId);
      _this.playId = undefined;
      console.log("game is paused");
    }
  };

  this.handlePause = function () {
    document.addEventListener("keydown", function (e) {
      if (e.keyCode === 27) {
        _this.playId ? _this.pause() : _this.run();
      }
    });
  };

  this.resize = function () {
    _this.display.resize(document.documentElement.clientWidth - 50, document.documentElement.clientHeight - 250, _this.context.canvas.height / _this.context.canvas.width);
  };

  this.context = context;
  this.context.canvas.height = 320;
  this.context.canvas.width = 700;
  this.playId;
  this.timeStart = 0;
  this.run = this.run.bind(this);
  this.handlePause();
  this.pabbot = new _pabbot_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 32, 32);
  this.map = new _map_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  this.inputHandler = new _inputHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.pabbot);
  this.camera = new _camera_js__WEBPACK_IMPORTED_MODULE_3__["default"](_assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_6__["default"], this.context.canvas.width, this.context.canvas.height, this.pabbot);
  this.display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.context, GAME_WIDTH, GAME_HEIGHT, this.pabbot, this.map, _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_6__["default"].width, this.camera, this.context.canvas.width, this.context.canvas.height);
  this.collision = new _collision_js__WEBPACK_IMPORTED_MODULE_5__["default"](GAME_WIDTH, GAME_HEIGHT, _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_6__["default"].collisionMap, _assets_maps_testMap2_js__WEBPACK_IMPORTED_MODULE_6__["default"].width);
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
  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");
  var game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](context);
  window.addEventListener("resize", game.resize);
  window.addEventListener("load", function (e) {
    game.resize();
    game.run();
  }, {
    once: true
  });
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

  this.jumped = false;
  this.dashed = false;
  document.addEventListener("keydown", function (e) {
    //w87, a65, s83, d68, j74, k75, esc27
    switch (e.keyCode) {
      case 87:
        pabbot.upActive = true;
        break;

      case 65:
        pabbot.leftActive = true;
        pabbot.facing = "left";
        pabbot.moveLeft();
        break;

      case 83:
        pabbot.downActive = true;
        break;

      case 68:
        pabbot.rightActive = true;
        pabbot.facing = "right";
        pabbot.moveRight();
        break;

      case 74:
        if (!_this.jumped) {
          _this.jumped = true;
          pabbot.jump();
        }

        break;

      case 75:
        if (!_this.dashed) {
          _this.dashed = true;
          pabbot.dash();
        }

        break;
    }
  });
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 87:
        pabbot.upActive = false;
        break;

      case 65:
        pabbot.leftActive = false;
        if (pabbot.speed.x < 0) pabbot.stop();
        break;

      case 83:
        pabbot.downActive = false;
        break;

      case 68:
        pabbot.rightActive = false;
        if (pabbot.speed.x > 0) pabbot.stop();
        break;

      case 74:
        if (_this.jumped) {
          _this.jumped = false;
          pabbot.cancelJump();
        }

        break;

      case 75:
        if (_this.dashed) {
          _this.dashed = false;
        }

        break;
    }
  });
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

  this.tileSheet = new _tileSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](32, 4);
  this.tileSheet.image.src = "../assets/grassGround.png";
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

  function Pabbot(x, y, width, height) {
    var _this;

    _classCallCheck(this, Pabbot);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pabbot).call(this, x, y, width, height));
    _this.speed = {
      x: 0,
      y: 0
    };
    _this.maxSpeed = 50;
    _this.dashSpeed = 100;
    _this.jumpHeight = 200;
    _this.gravity = 200;
    _this.terminalVelocity = 1000;
    _this.isJumping = false;
    _this.isDashing = false;
    _this.upActive = false;
    _this.leftActive = false;
    _this.downActive = false;
    _this.rightActive = false;
    _this.facing = "right";
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