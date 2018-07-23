const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

function Game() {
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship(
    { pos: this.randomPosition(),
      game: this
   });
}

Game.DIM_X = 1000;
Game.DIM_Y = 800;
Game.NUM_ASTEROIDS = 15;

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let asteroid = new Asteroid(
      { pos: this.randomPosition(),
        game: this
      });
    this.asteroids.push(asteroid);
  }
};

Game.prototype.randomPosition = function() {
  let xPos = Math.floor( Math.random() * Game.DIM_X );
  let yPos = Math.floor( Math.random() * Game.DIM_Y );
  return [xPos, yPos];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach(function(obj) {
    obj.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(function(obj) {
    obj.move();
  });
};

Game.prototype.wrap = function(pos) {
  let xPos = pos[0];
  let yPos = pos[1];

  if (xPos > Game.DIM_X) {
    xPos = 0;
  } else if (xPos <= 0) {
    xPos = Game.DIM_X;
  }

  if (yPos > Game.DIM_Y) {
    yPos = 0;
  } else if (yPos <= 0) {
    yPos = Game.DIM_Y;
  }

  return [xPos, yPos];
};

Game.prototype.checkCollisions = function() {
  let objs = this.allObjects();
  for(let i = 0; i < objs.length; i++) {
    for(let j = 0; j < objs.length; j++) {
      if (i === j) continue;
      let obj1 = objs[i];
      let obj2 = objs[j];
      if(obj1.isCollidedWith(obj2)) obj1.collideWith(obj2);
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
  let idx = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(idx, 1);
};

Game.prototype.allObjects = function() {
  return this.asteroids.concat([this.ship]);
};

module.exports = Game;
