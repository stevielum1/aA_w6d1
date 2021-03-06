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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./lib/ship.js\");\n\nfunction Asteroid(options) {\n  MovingObject.call(this, options);\n  this.color = Asteroid.COLOR;\n  this.radius = Asteroid.RADIUS;\n  this.vel = Util.randomVec(5);\n}\n\nAsteroid.COLOR = \"#6d6d6d\";\nAsteroid.RADIUS = 20;\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }\n};\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\n\nconsole.log(\"Webpack is working!\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n  let canvas = document.getElementById('game-canvas');\n  let ctx = canvas.getContext('2d');\n  let gameView = new GameView(ctx);\n  gameView.start();\n});\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/bullet.js":
/*!***********************!*\
  !*** ./lib/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\n\nfunction Bullet(options) {\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Asteroid) {\n    this.game.remove(this);\n    this.game.remove(otherObject);\n  }\n};\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./lib/bullet.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./lib/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./lib/bullet.js\");\n\nfunction Game() {\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship(\n    { pos: this.randomPosition(),\n      game: this\n   });\n  this.bullets = [];\n}\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 800;\nGame.NUM_ASTEROIDS = 15;\n\nGame.prototype.addAsteroids = function() {\n  for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    let asteroid = new Asteroid(\n      { pos: this.randomPosition(),\n        game: this\n      });\n    this.asteroids.push(asteroid);\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  let xPos = Math.floor( Math.random() * Game.DIM_X );\n  let yPos = Math.floor( Math.random() * Game.DIM_Y );\n  return [xPos, yPos];\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  this.allObjects().forEach(function(obj) {\n    obj.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach(function(obj) {\n    obj.move();\n  });\n};\n\nGame.prototype.wrap = function(pos) {\n  let xPos = pos[0];\n  let yPos = pos[1];\n\n  if (xPos > Game.DIM_X) {\n    xPos = 0;\n  } else if (xPos <= 0) {\n    xPos = Game.DIM_X;\n  }\n\n  if (yPos > Game.DIM_Y) {\n    yPos = 0;\n  } else if (yPos <= 0) {\n    yPos = Game.DIM_Y;\n  }\n\n  return [xPos, yPos];\n};\n\nGame.prototype.checkCollisions = function() {\n  let objs = this.allObjects();\n  for(let i = 0; i < objs.length; i++) {\n    for(let j = 0; j < objs.length; j++) {\n      if (i === j) continue;\n      let obj1 = objs[i];\n      let obj2 = objs[j];\n      if(obj1.isCollidedWith(obj2)) obj1.collideWith(obj2);\n    }\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\n// Game.prototype.remove = function(asteroid) {\n//   let idx = this.asteroids.indexOf(asteroid);\n//   this.asteroids.splice(idx, 1);\n// };\n\nGame.prototype.allObjects = function() {\n  return this.asteroids.concat([this.ship]).concat(this.bullets);\n};\n\nGame.prototype.add = function(obj) {\n  if (obj instanceof Asteroid) {\n    this.asteroids.push(obj);\n  } else if (obj instanceof Bullet) {\n    this.bullets.push(obj);\n  }\n};\n\nGame.prototype.remove = function(obj) {\n  if (obj instanceof Asteroid) {\n    let idx = this.asteroids.indexOf(obj);\n    this.asteroids.splice(idx, 1);\n  } else if (obj instanceof Bullet) {\n    let idx = this.bullets.indexOf(obj);\n    this.bullets.splice(idx, 1);\n  }\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  this.bindKeyHandlers();\n  window.setInterval(this.game.step.bind(this.game), 20);\n  window.setInterval(this.game.draw.bind(this.game, this.ctx), 20);\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n  let that = this;\n  key('w', function() { that.game.ship.power([0, -1]); });\n  key('a', function() { that.game.ship.power([-1, 0]); });\n  key('s', function() { that.game.ship.power([0, 1]); });\n  key('d', function() { that.game.ship.power([1, 0]); });\n  key('space', function() { that.game.ship.fireBullet(); });\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  //arc( xCenter, yCenter, radius, startAngle, endAngle)\n  ctx.arc(this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    Math.PI * 2);\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  let x = this.pos[0] + this.vel[0];\n  let y = this.pos[1] + this.vel[1];\n  let newPos = this.game.wrap([x, y]);\n  this.pos[0] = newPos[0];\n  this.pos[1] = newPos[1];\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let xDist = Math.pow(this.pos[0] - otherObject.pos[0], 2);\n  let yDist = Math.pow(this.pos[1] - otherObject.pos[1], 2);\n  let dist = Math.pow(xDist + yDist, 0.5);\n  let radii = this.radius + otherObject.radius;\n  return (dist < radii) ? true : false;\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  // this.game.remove(this);\n  // this.game.remove(otherObject);\n};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/ship.js":
/*!*********************!*\
  !*** ./lib/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./lib/bullet.js\");\n\nfunction Ship(options) {\n  MovingObject.call(this, options);\n  this.color = Ship.COLOR;\n  this.radius = Ship.RADIUS;\n  this.vel = [0, 0];\n}\n\nShip.RADIUS = 10;\nShip.COLOR = \"#00ff00\";\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function() {\n  let bullet = new Bullet({\n    pos: [...this.pos],\n    vel: [...this.vel],\n    radius: 3,\n    color: this.color,\n    game: this.game\n  });\n  this.game.bullets.push(bullet);\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./lib/ship.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits: function inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec: function randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  scale: function scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });