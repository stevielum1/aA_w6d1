const GameView = require("./game_view.js");

console.log("Webpack is working!");

document.addEventListener("DOMContentLoaded", function(event) {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  let gameView = new GameView(ctx);
  gameView.start();
});
