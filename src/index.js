import Game from "./game.js";


document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");

  let game = new Game(context);
  window.addEventListener("resize", game.resize)

  window.addEventListener("load", (e) => {
    game.resize();
    game.run();
  }, {
    once: true
  })
})
