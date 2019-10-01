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

var Display = function Display(context, _width, _height, pabbot) {
  var _this = this;

  _classCallCheck(this, Display);

  this.drawRectangle = function (x, y, width, height, color) {
    _this.buffer.fillStyle = color;

    _this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
  };

  this.drawPabbot = function () {
    _this.pabbot.render(_this.buffer);
  };

  this.fill = function (color) {
    _this.buffer.fillStyle = color;

    _this.buffer.fillRect(0, 0, _this.width, _this.height);
  };

  this.render = function () {
    _this.context.drawImage(_this.buffer.canvas, 0, 0, _this.buffer.canvas.width, _this.buffer.canvas.height, 0, 0, _this.context.canvas.width, _this.context.canvas.height);
  };

  this.resize = function (width, height, ratio) {
    if (height / width > ratio) {
      _this.context.canvas.width = width;
      _this.context.canvas.height = width * ratio;
    } else {
      _this.context.canvas.width = height / ratio;
      _this.context.canvas.height = height;
    }

    _this.context.imageSmoothingEnabled = false;
  };

  this.context = context;
  this.width = _width;
  this.height = _height;
  this.pabbot = pabbot;
  this.buffer = document.createElement("canvas").getContext("2d");
  this.buffer.canvas.width = _width;
  this.buffer.canvas.height = _height;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var GAME_HEIGHT = 600;
var GAME_WIDTH = 800;

var Game = function Game(context) {
  var _this = this;

  _classCallCheck(this, Game);

  this.render = function () {
    _this.display.fill("#333");

    _this.display.drawPabbot();

    _this.display.render();
  };

  this.frame = function (timeStamp) {
    _this.playId = undefined;
    var timeDelta = timeStamp - _this.timeStart;
    _this.timeStart = timeStamp;

    _this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    _this.pabbot.move(timeDelta);

    _this.isCollide(_this.pabbot);

    _this.render();

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

  this.isCollide = function (obj) {
    if (obj.position.x < 0) obj.position.x = 0;
    if (obj.position.x > GAME_WIDTH - obj.width) obj.position.x = GAME_WIDTH - obj.width;

    if (obj.position.y > GAME_HEIGHT - obj.height) {
      obj.position.y = GAME_HEIGHT - obj.height;
      obj.isJumping = false;
    }
  };

  this.resize = function (e) {
    _this.display.resize(document.documentElement.clientWidth - 100, document.documentElement.clientHeight - 100, GAME_HEIGHT / GAME_WIDTH);
  };

  this.context = context;
  this.context.canvas.height = GAME_HEIGHT;
  this.context.canvas.width = GAME_WIDTH;
  this.playId;
  this.timeStart = 0;
  this.run = this.run.bind(this);
  this.handlePause();
  this.pabbot = new _pabbot_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this.inputHandler = new _inputHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.pabbot);
  this.display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.context, GAME_WIDTH, GAME_HEIGHT, this.pabbot);
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
  game.resize();
  game.run();
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
  document.addEventListener("keydown", function (e) {
    //w87, a65, s83, d68, j74, k75, esc27
    switch (e.keyCode) {
      case 87:
        console.log("up");
        break;

      case 65:
        pabbot.moveLeft();
        break;

      case 83:
        console.log("down");
        break;

      case 68:
        pabbot.moveRight();
        break;

      case 74:
        if (!_this.jumped) {
          _this.jumped = true;
          pabbot.jump();
        }

        break;

      case 75:
        console.log("dash");
        break;
    }
  });
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 87:
        console.log("up");
        break;

      case 65:
        if (pabbot.speed.x < 0) pabbot.stop();
        break;

      case 83:
        console.log("down");
        break;

      case 68:
        if (pabbot.speed.x > 0) pabbot.stop();
        break;

      case 74:
        if (_this.jumped) {
          _this.jumped = false;
          pabbot.cancelJump();
        }

        break;

      case 75:
        console.log("dash");
        break;
    }
  });
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pabbot = function Pabbot() {
  var _this = this;

  _classCallCheck(this, Pabbot);

  this.speed = {
    x: 0,
    y: 0
  };
  this.position = {
    x: 400,
    y: 300
  };
  this.width = 32;
  this.height = 32;
  this.maxSpeed = 100;
  this.jumpHeight = 500;
  this.gravity = 500;
  this.terminalVelocity = 1000;
  this.isJumping = false;

  this.render = function (context) {
    context.fillStyle = "#1a1";
    context.fillRect(_this.position.x, _this.position.y, _this.width, _this.height);
  };

  this.move = function (timeDelta) {
    _this.position.x += _this.speed.x / timeDelta;
    _this.position.y += _this.speed.y / timeDelta;

    if (_this.speed.y <= _this.terminalVelocity) {
      _this.speed.y += _this.gravity / timeDelta;
    }
  };

  this.stop = function () {
    _this.speed.x = 0;
  };

  this.moveLeft = function () {
    _this.speed.x = -_this.maxSpeed;
  };

  this.moveRight = function () {
    _this.speed.x = _this.maxSpeed;
  };

  this.jump = function () {
    if (!_this.isJumping) {
      _this.speed.y = -_this.jumpHeight;
      _this.isJumping = true;
    }
  };

  this.cancelJump = function () {
    if (_this.isJumping) {
      if (_this.speed.y < 0) {
        _this.speed.y = 0;
      }
    }
  };
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map