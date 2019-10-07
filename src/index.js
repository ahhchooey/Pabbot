import Game from "./game.js";


document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");

  let game = new Game(context);

  window.addEventListener("load", (e) => {
    game.resize();
    game.renderMenu();
  }, {
    once: true
  })
  window.addEventListener("resize", game.resize)
})
