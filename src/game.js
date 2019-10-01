import InputHandler from "./inputHandler.js";
import Pabbot from "./pabbot.js";
import Display from "./display.js";
import Map from "./map.js";


const GAME_HEIGHT = 320;
const GAME_WIDTH = 640;

export default class Game {
  constructor(context) {
    this.context = context;
    this.context.canvas.height = GAME_HEIGHT;
    this.context.canvas.width = GAME_WIDTH;

    this.playId;
    this.timeStart = 0;
    this.run = this.run.bind(this);
    this.handlePause();

    this.pabbot = new Pabbot();
    this.map = new Map();
    this.inputHandler = new InputHandler(this.pabbot);
    this.display = new Display(this.context, GAME_WIDTH, GAME_HEIGHT, this.pabbot, this.map);
  }

  render = () => {
    this.display.fill("#333");
    this.display.drawMap();
    this.display.drawPabbot();
    this.display.render();
  }

  frame = (timeStamp) => {
    this.playId = undefined;

    let timeDelta = timeStamp - this.timeStart;
    this.timeStart = timeStamp;

    this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    this.pabbot.move(timeDelta);
    this.isCollide(this.pabbot);
    this.render();

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
    if (obj.position.x < 0) obj.position.x = 0;
    if (obj.position.x > GAME_WIDTH - obj.width) obj.position.x = GAME_WIDTH - obj.width;
    if (obj.position.y > GAME_HEIGHT - obj.height) {
      obj.position.y = GAME_HEIGHT - obj.height;
      obj.isJumping = false;
    }
  }

  resize = (e) => {
    this.display.resize(
      document.documentElement.clientWidth - 50,
      document.documentElement.clientHeight - 250,
      GAME_HEIGHT/GAME_WIDTH 
    )
  }

}

