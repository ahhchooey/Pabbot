import InputHandler from "./inputHandler.js";


const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

export default class Game {
  constructor(context) {
    this.context = context;

    this.playId;
    this.timeStart = 0;

    this.inputHandler = new InputHandler();
    this.run = this.run.bind(this);
    this.handlePause();
    this.run();
  }

  handlePause = () => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        (this.playId) ? this.pause() : this.run()
      }
    })
  }

  frame = (timeStamp) => {
    this.playId = undefined;

    let timeDelta = timeStamp - this.timeStart;
    this.timeStart = timeStamp;

    this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    this.run();
  }

  run = () => {
    if (!this.playId) {
      this.playId = window.requestAnimationFrame(this.frame);
    }
  }

  pause = () => {
    if (this.playId) {
      window.cancelAnimationFrame(this.playId);
      this.playId = undefined;
      console.log("game is paused")
    }
  }

}

