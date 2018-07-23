const Asteroid = require("./asteroid.js");

function Game() {
  this.asteroids = [];
  this.addAsteroids();
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
  ctx.clearRect(0, 0, 1000, 800);
  this.asteroids.forEach(function(asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(function(asteroid) {
    asteroid.move();
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
  for(let i = 0; i < this.asteroids.length; i++) {
    for(let j = 0; j < this.asteroids.length; j++) {
      if (i === j) continue;
      let asteroid1 = this.asteroids[i];
      let asteroid2 = this.asteroids[j];
      if(asteroid1.isCollidedWith(asteroid2)) {
        asteroid1.collideWith(asteroid2);
      }
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

module.exports = Game;
