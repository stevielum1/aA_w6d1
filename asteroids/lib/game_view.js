const Game = require("./game.js");

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  this.bindKeyHandlers();
  window.setInterval(this.game.step.bind(this.game), 20);
  window.setInterval(this.game.draw.bind(this.game, this.ctx), 20);
};

GameView.prototype.bindKeyHandlers = function() {
  let that = this;
  key('w', function() { that.game.ship.power([0, -1]); });
  key('a', function() { that.game.ship.power([-1, 0]); });
  key('s', function() { that.game.ship.power([0, 1]); });
  key('d', function() { that.game.ship.power([1, 0]); });
  key('space', function() { that.game.ship.fireBullet(); });
};

module.exports = GameView;
