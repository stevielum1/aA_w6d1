const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Bullet = require("./bullet.js");

function Ship(options) {
  MovingObject.call(this, options);
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

Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function() {
  let bullet = new Bullet({
    pos: [...this.pos],
    vel: [...this.vel],
    radius: 3,
    color: this.color,
    game: this.game
  });
  this.game.bullets.push(bullet);
};

module.exports = Ship;
