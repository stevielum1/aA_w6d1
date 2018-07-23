const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Ship(pos) {
  MovingObject.call(this, pos);
  this.color = Ship.COLOR;
  this.radius = Ship.RADIUS;
  this.vel = [0, 0];
}

Ship.RADIUS = 10;
Ship.COLOR = "#00ff00";

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

module.exports = Ship;
