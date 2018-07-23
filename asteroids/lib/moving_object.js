function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  //arc( xCenter, yCenter, radius, startAngle, endAngle)
  ctx.arc(this.pos[0],
    this.pos[1],
    this.radius,
    0,
    Math.PI * 2);
  ctx.fill();
};

MovingObject.prototype.move = function() {
  let x = this.pos[0] + this.vel[0];
  let y = this.pos[1] + this.vel[1];
  let newPos = this.game.wrap([x, y]);
  this.pos[0] = newPos[0];
  this.pos[1] = newPos[1];
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let xDist = Math.pow(this.pos[0] - otherObject.pos[0], 2);
  let yDist = Math.pow(this.pos[1] - otherObject.pos[1], 2);
  let dist = Math.pow(xDist + yDist, 0.5);
  let radii = this.radius + otherObject.radius;
  return (dist < radii) ? true : false;
};

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(this);
  this.game.remove(otherObject);
};

module.exports = MovingObject;
