import Game from "./game.js";


document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");

  let game = new Game(context);
  window.addEventListener("resize", game.resize)

  game.resize();
  game.run();
})
