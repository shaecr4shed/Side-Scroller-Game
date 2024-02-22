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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/audio/music.mp3":
/*!*****************************!*\
  !*** ./src/audio/music.mp3 ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "audio/cf24965de137f63709e2ae3387416dfe.mp3");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "290ba757079022f79c2674b4ba4e6fac.png");

/***/ }),

/***/ "./src/img/clouds.png":
/*!****************************!*\
  !*** ./src/img/clouds.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "692754f3808c130bbc17a95cbc7bda4c.png");

/***/ }),

/***/ "./src/img/far-grounds.png":
/*!*********************************!*\
  !*** ./src/img/far-grounds.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fe618a8299e1cf927d94b9a48cf7abf9.png");

/***/ }),

/***/ "./src/img/night_city_2.png":
/*!**********************************!*\
  !*** ./src/img/night_city_2.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d2c67f844a161f48c93f2e38b2940ada.png");

/***/ }),

/***/ "./src/img/platform_1.png":
/*!********************************!*\
  !*** ./src/img/platform_1.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0533790e24ac2502de56e0e2efaeaaf7.png");

/***/ }),

/***/ "./src/img/platform_thin.png":
/*!***********************************!*\
  !*** ./src/img/platform_thin.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2e0fa27d792fcf59d963954c612565c6.png");

/***/ }),

/***/ "./src/img/platform_wide.png":
/*!***********************************!*\
  !*** ./src/img/platform_wide.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1646a01f025a3a369410a2a6ebcf6f76.png");

/***/ }),

/***/ "./src/img/sea.png":
/*!*************************!*\
  !*** ./src/img/sea.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cf39f08af43e67275116e9d4932fe68a.png");

/***/ }),

/***/ "./src/img/spriteGoomba.png":
/*!**********************************!*\
  !*** ./src/img/spriteGoomba.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a1de12fbeda5f4cadc1c0cec27c01014.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform_1.png */ "./src/img/platform_1.png");
/* harmony import */ var _img_platform_wide_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/platform_wide.png */ "./src/img/platform_wide.png");
/* harmony import */ var _img_platform_thin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/platform_thin.png */ "./src/img/platform_thin.png");
/* harmony import */ var _img_clouds_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/clouds.png */ "./src/img/clouds.png");
/* harmony import */ var _img_sea_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/sea.png */ "./src/img/sea.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_far_grounds_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/far-grounds.png */ "./src/img/far-grounds.png");
/* harmony import */ var _img_night_city_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/night_city_2.png */ "./src/img/night_city_2.png");
/* harmony import */ var _audio_music_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../audio/music.mp3 */ "./src/audio/music.mp3");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteGoomba_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/spriteGoomba.png */ "./src/img/spriteGoomba.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }














var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var musicAudio = new Audio(_audio_music_mp3__WEBPACK_IMPORTED_MODULE_8__["default"]);
document.addEventListener('click', function () {
  // Play the audio when the document is clicked
  musicAudio.play();
});
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.5;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.speed = 7;
    this.position = {
      x: 75,
      y: 250
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
        cropWidth: 340.875,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && this.currentSprite === this.sprites.stand.right) this.frames = 0;else if (this.frames > 59 && this.currentSprite === this.sprites.stand.left) this.frames = 0;else if (this.frames > 29 && this.currentSprite === this.sprites.run.right) this.frames = 0;else if (this.frames > 29 && this.currentSprite === this.sprites.run.left) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    if (this.image === platformWideImage) {
      this.width = 280;
      this.height = image.height;
    } else if (this.image === platformImage) {
      this.width = 80;
      this.height = 20;
    } else if (this.image === platformThinImage) {
      this.width = 10;
      this.height = 20;
    }
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var Generics = /*#__PURE__*/function () {
  function Generics(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, Generics);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Generics, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Generics;
}();
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var Goomba = /*#__PURE__*/function () {
  function Goomba(_ref3) {
    var position = _ref3.position,
      velocity = _ref3.velocity,
      _ref3$distance = _ref3.distance,
      distance = _ref3$distance === void 0 ? {
        limit: 50,
        traveled: 0
      } : _ref3$distance;
    _classCallCheck(this, Goomba);
    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 43.33;
    this.height = 50;
    this.image = createImage(_img_spriteGoomba_png__WEBPACK_IMPORTED_MODULE_13__["default"]);
    this.frames = 0;
    this.distance = distance;
  }
  _createClass(Goomba, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, 130 * this.frames, 0, 130, 150, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames >= 58) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;

      //goomba movement back and forth 

      this.distance.traveled += Math.abs(this.velocity.x);
      if (this.distance.traveled > this.distance.limit) {
        this.distance.traveled = 0;
        this.velocity.x = -this.velocity.x;
      }
    }
  }]);
  return Goomba;
}();
var platformImage = createImage(_img_platform_1_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformWideImage = createImage(_img_platform_wide_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platformThinImage = createImage(_img_platform_thin_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var player = new Player();
var goombas = [new Goomba({
  position: {
    x: 400,
    y: 450
  },
  velocity: {
    x: -1.5,
    y: 0
  },
  distance: {
    limit: 500,
    traveled: 0
  }
}), new Goomba({
  position: {
    x: 1500,
    y: 400
  },
  velocity: {
    x: -1.5,
    y: 0
  },
  distance: {
    limit: 200,
    traveled: 0
  }
}), new Goomba({
  position: {
    x: 3000,
    y: 400
  },
  velocity: {
    x: -1.5,
    y: 0
  },
  distance: {
    limit: 225,
    traveled: 0
  }
}), new Goomba({
  position: {
    x: 3600,
    y: 400
  },
  velocity: {
    x: -1.5,
    y: 0
  },
  distance: {
    limit: 225,
    traveled: 0
  }
})];
var platforms = [new Platform({
  x: 0,
  y: 550,
  image: platformWideImage
}), new Platform({
  x: 300,
  y: 550,
  image: platformWideImage
}), new Platform({
  x: 850,
  y: 300,
  image: platformImage
}), new Platform({
  x: 1300,
  y: 550,
  image: platformWideImage
}), new Platform({
  x: 1700,
  y: 300,
  image: platformImage
}), new Platform({
  x: 2150,
  y: 350,
  image: platformThinImage
}), new Platform({
  x: 2500,
  y: 250,
  image: platformImage
}), new Platform({
  x: 2800,
  y: 550,
  image: platformWideImage
}), new Platform({
  x: 3400,
  y: 550,
  image: platformWideImage
}), new Platform({
  x: 3900,
  y: 270,
  image: platformImage
}), new Platform({
  x: 4300,
  y: 550,
  image: platformWideImage
}), new Platform({
  x: 4600,
  y: 550,
  image: platformWideImage
}), new Platform({
  x: 4800,
  y: 550,
  image: platformWideImage
})];
var backgroundImage = [new Generics({
  x: -1,
  y: -1,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
}), new Generics({
  x: 1022,
  y: -1,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
}), new Generics({
  x: 2045,
  y: -1,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
}), new Generics({
  x: 3067,
  y: -1,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
})];
var cloudsImage = [new Generics({
  x: -1,
  y: 200,
  image: createImage(_img_clouds_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Generics({
  x: -1,
  y: 500,
  image: createImage(_img_sea_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Generics({
  x: 1020,
  y: 225,
  image: createImage(_img_clouds_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Generics({
  x: 1020,
  y: 500,
  image: createImage(_img_sea_png__WEBPACK_IMPORTED_MODULE_4__["default"])
})];
var cityImage = [new Generics({
  x: 5,
  y: 475,
  image: createImage(_img_far_grounds_png__WEBPACK_IMPORTED_MODULE_6__["default"])
}), new Generics({
  x: 1450,
  y: 256,
  image: createImage(_img_far_grounds_png__WEBPACK_IMPORTED_MODULE_6__["default"])
}), new Generics({
  x: 2000,
  y: 256,
  image: createImage(_img_far_grounds_png__WEBPACK_IMPORTED_MODULE_6__["default"])
}), new Generics({
  x: 2700,
  y: 256,
  image: createImage(_img_night_city_2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;
function isOnTopOfPlatform(_ref4) {
  var object = _ref4.object,
    platform = _ref4.platform;
  return object.position.y + object.height <= platform.position.y && object.position.y + object.height + object.velocity.y >= platform.position.y && object.position.x + object.width >= platform.position.x && object.position.x < platform.position.x + platform.width;
}
function isOnTopOfEnemy(_ref5) {
  var object1 = _ref5.object1,
    object2 = _ref5.object2;
  return object1.position.y + object1.height <= object2.position.y && object1.position.y + object1.height + object1.velocity.y >= object2.position.y && object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width;
}
function init() {
  platformImage = createImage(_img_platform_1_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  goombas = [new Goomba({
    position: {
      x: 400,
      y: 200
    },
    velocity: {
      x: -1.5,
      y: 0
    },
    distance: {
      limit: 500,
      traveled: 0
    }
  }), new Goomba({
    position: {
      x: 1500,
      y: 400
    },
    velocity: {
      x: -1.5,
      y: 0
    },
    distance: {
      limit: 200,
      traveled: 0
    }
  }), new Goomba({
    position: {
      x: 3000,
      y: 400
    },
    velocity: {
      x: -1.5,
      y: 0
    },
    distance: {
      limit: 225,
      traveled: 0
    }
  }), new Goomba({
    position: {
      x: 3600,
      y: 400
    },
    velocity: {
      x: -1.5,
      y: 0
    },
    distance: {
      limit: 225,
      traveled: 0
    }
  })];
  platforms = [new Platform({
    x: 0,
    y: 550,
    image: platformWideImage
  }), new Platform({
    x: 300,
    y: 550,
    image: platformWideImage
  }), new Platform({
    x: 850,
    y: 300,
    image: platformImage
  }), new Platform({
    x: 1300,
    y: 550,
    image: platformWideImage
  }), new Platform({
    x: 1700,
    y: 300,
    image: platformImage
  }), new Platform({
    x: 2150,
    y: 350,
    image: platformThinImage
  }), new Platform({
    x: 2500,
    y: 250,
    image: platformImage
  }), new Platform({
    x: 2800,
    y: 550,
    image: platformWideImage
  }), new Platform({
    x: 3400,
    y: 550,
    image: platformWideImage
  }), new Platform({
    x: 3900,
    y: 270,
    image: platformImage
  }), new Platform({
    x: 4300,
    y: 550,
    image: platformWideImage
  }), new Platform({
    x: 4600,
    y: 550,
    image: platformWideImage
  }), new Platform({
    x: 4800,
    y: 550,
    image: platformWideImage
  })];
  backgroundImage = [new Generics({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  }), new Generics({
    x: 1022,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  }), new Generics({
    x: 2045,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  }), new Generics({
    x: 3067,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  })];
  cloudsImage = [new Generics({
    x: -1,
    y: 200,
    image: createImage(_img_clouds_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }),, new Generics({
    x: -1,
    y: 500,
    image: createImage(_img_sea_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Generics({
    x: 1020,
    y: 225,
    image: createImage(_img_clouds_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Generics({
    x: 1020,
    y: 500,
    image: createImage(_img_sea_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  })];
  cityImage = [new Generics({
    x: 5,
    y: 475,
    image: createImage(_img_far_grounds_png__WEBPACK_IMPORTED_MODULE_6__["default"])
  }), new Generics({
    x: 1450,
    y: 256,
    image: createImage(_img_far_grounds_png__WEBPACK_IMPORTED_MODULE_6__["default"])
  }), new Generics({
    x: 2000,
    y: 256,
    image: createImage(_img_far_grounds_png__WEBPACK_IMPORTED_MODULE_6__["default"])
  }), new Generics({
    x: 2700,
    y: 256,
    image: createImage(_img_night_city_2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  })];
  scrollOffset = 0;
}
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);

  //updating 

  backgroundImage.forEach(function (backgroundImage) {
    backgroundImage.draw();
  });
  cloudsImage.forEach(function (cloudsImage) {
    cloudsImage.draw();
  });
  cityImage.forEach(function (cityImage) {
    cityImage.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  goombas.forEach(function (goombas, index) {
    goombas.update();
    if (isOnTopOfEnemy({
      object1: player,
      object2: goombas
    })) {
      player.velocity.y -= 40;
      goombas.splice(index, 1);
    } else if (player.position.x + player.width >= goombas.position.x && player.position.y + player.height >= goombas.position.y && player.position.x <= goombas.position.x + goombas.width) {
      init();
    }
  });
  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    //scrolling 

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      backgroundImage.forEach(function (backgroundImage) {
        backgroundImage.position.x -= player.speed * 0.01;
      });
      cloudsImage.forEach(function (cloudsImage) {
        cloudsImage.position.x -= player.speed * 0.05;
      });
      cityImage.forEach(function (cityImage) {
        cityImage.position.x -= player.speed * 0.07;
      });
      goombas.forEach(function (goomba) {
        goomba.position.x -= player.speed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      backgroundImage.forEach(function (backgroundImage) {
        backgroundImage.position.x += player.speed * 0.01;
      });
      cloudsImage.forEach(function (cloudsImage) {
        cloudsImage.position.x += player.speed * 0.05;
      });
      cityImage.forEach(function (cityImage) {
        cityImage.position.x += player.speed * 0.07;
      });
      goombas.forEach(function (goomba) {
        goomba.position.x += player.speed;
      });
    }
  }

  //platform collision detection

  platforms.forEach(function (platform) {
    if (isOnTopOfPlatform({
      object: player,
      platform: platform
    })) {
      player.velocity.y = 0;
    }
    goombas.forEach(function (goomba) {
      if (isOnTopOfPlatform({
        object: goomba,
        platform: platform
      })) {
        goomba.velocity.y = 0;
      }
    });
  });

  // win condition
  if (scrollOffset > 4100) {
    console.log('You Win!');
    init();
  }

  //lose condition

  if (player.position.y >= canvas.height) {
    console.log('You Lose');
    init();
  }
}
animate();
addEventListener('keydown', function (_ref6) {
  var keyCode = _ref6.keyCode;
  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 68:
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 87:
      player.velocity.y -= 30;
      break;
  }
});
addEventListener('keyup', function (_ref7) {
  var keyCode = _ref7.keyCode;
  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    case 68:
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    case 87:
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map