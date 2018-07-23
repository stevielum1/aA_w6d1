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
    let asteroid = new Asteroid({ pos: this.randomPosition() });
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

module.exports = Game;
