const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(pos) {
  MovingObject.call(this, pos);
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS;
  this.vel = Util.randomVec(10);
}

Asteroid.COLOR = "#6d6d6d";
Asteroid.RADIUS = 20;

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
