const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");

function Bullet(options) {
  MovingObject.call(this, options);
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Asteroid) {
    this.game.remove(this);
    this.game.remove(otherObject);
  }
};

module.exports = Bullet;
