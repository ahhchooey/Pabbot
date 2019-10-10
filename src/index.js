import Game from "./game.js";


document.addEventListener("DOMContentLoaded", () => {
  const scale = 'scale(1)';
  document.body.style.webkitTransform = scale;    // Chrome, Opera, Safari
  document.body.style.msTransform = scale;       // IE 9
  document.body.style.transform = scale;        // General

  let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");
  const reset = () => {
    game = null;
    game = new Game(context, reset);
    game.resize();
    game.renderMenu();
  }

  let game = new Game(context, reset);

  window.addEventListener("load", (e) => {
    game.resize();
    game.renderMenu();
  }, {
    once: true
  })
  window.addEventListener("resize", game.resize)
})

