import InputHandler from "./inputHandler.js";
import Pabbot from "./pabbot.js";


const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

export default class Game {
  constructor(context) {
    this.context = context;

    this.playId;
    this.timeStart = 0;
    this.run = this.run.bind(this);
    this.handlePause();

    this.pabbot = new Pabbot();
    this.inputHandler = new InputHandler(this.pabbot);
  }

  // Basic game loop and pausing are handled with the following methods
  frame = (timeStamp) => {
    this.playId = undefined;

    let timeDelta = timeStamp - this.timeStart;
    this.timeStart = timeStamp;

    this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    this.pabbot.move(timeDelta);
    this.pabbot.render(this.context);

    this.run();
  };

  run = () => {
    if (!this.playId) {
      this.playId = window.requestAnimationFrame(this.frame);
    }
  };

  pause = () => {
    if (this.playId) {
      window.cancelAnimationFrame(this.playId);
      this.playId = undefined;
      console.log("game is paused")
    }
  };

  handlePause = () => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        (this.playId) ? this.pause() : this.run()
      }
    })
  };

  isCollide = (obj) => {
    
  }

}

