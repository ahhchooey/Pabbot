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

var Display = function Display(context, _width, _height, pabbot, map) {
  var _this = this;

  _classCallCheck(this, Display);

  this.drawRectangle = function (x, y, width, height, color) {
    _this.buffer.fillStyle = color;

    _this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
  };

  this.drawPabbot = function () {
    _this.pabbot.render(_this.buffer);
  };

  this.drawMap = function () {
    _this.map.render(tempData, 20, _this.buffer);
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
  this.map = map;
  this.buffer = document.createElement("canvas").getContext("2d");
  this.buffer.canvas.width = _width;
  this.buffer.canvas.height = _height;
};


var tempData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var tempCollision = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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
    _this.postion.x = x;
  };

  this.setBottom = function (y) {
    _this.position.y = y - _this.height;
  };

  this.setRight = function (x) {
    _this.position.x = x - _this.width;
  };

  this.position = {
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
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ "./src/map.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var GAME_HEIGHT = 320;
var GAME_WIDTH = 640;

var Game = function Game(context) {
  var _this = this;

  _classCallCheck(this, Game);

  this.render = function () {
    _this.display.fill("#333");

    _this.display.drawMap();

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
      obj.isDashing = false;
    }
  };

  this.resize = function (e) {
    _this.display.resize(document.documentElement.clientWidth - 50, document.documentElement.clientHeight - 250, GAME_HEIGHT / GAME_WIDTH);
  };

  this.context = context;
  this.context.canvas.height = GAME_HEIGHT;
  this.context.canvas.width = GAME_WIDTH;
  this.playId;
  this.timeStart = 0;
  this.run = this.run.bind(this);
  this.handlePause();
  this.pabbot = new _pabbot_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 32, 32);
  this.map = new _map_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  this.inputHandler = new _inputHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.pabbot);
  this.display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.context, GAME_WIDTH, GAME_HEIGHT, this.pabbot, this.map);
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
        pabbot.moveLeft();
        break;

      case 83:
        pabbot.downActive = true;
        break;

      case 68:
        pabbot.rightActive = true;
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

  this.tileSheet = new _tileSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](32, 8);
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
    _this.maxSpeed = 100;
    _this.dashSpeed = 300;
    _this.jumpHeight = 500;
    _this.gravity = 500;
    _this.terminalVelocity = 1000;
    _this.isJumping = false;
    _this.isDashing = false;
    _this.upActive = false;
    _this.leftActive = false;
    _this.downActive = false;
    _this.rightActive = false;

    _this.render = function (context) {
      context.fillStyle = "#1a1";
      context.fillRect(_this.position.x, _this.position.y, _this.width, _this.height);
    };

    _this.move = function (timeDelta) {
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