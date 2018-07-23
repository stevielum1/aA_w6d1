const Game = require("./game.js");

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  window.setInterval(this.game.moveObjects.bind(this.game), 20);
  window.setInterval(this.game.draw.bind(this.game, this.ctx), 20);
};

module.exports = GameView;
