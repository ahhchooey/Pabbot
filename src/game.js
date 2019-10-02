import InputHandler from "./inputHandler.js";
import Pabbot from "./pabbot.js";
import Display from "./display.js";
import Map from "./map.js";
import Collision from "./collision.js";


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

    this.pabbot = new Pabbot(0, 0, 32, 32);
    this.map = new Map();
    this.inputHandler = new InputHandler(this.pabbot);
    this.display = new Display(this.context, GAME_WIDTH, GAME_HEIGHT, this.pabbot, this.map);
    this.collision = new Collision(GAME_WIDTH, GAME_HEIGHT, tempCollision);
  }

  render = () => {
    this.display.fill("#333");
    this.display.drawMap(tempMap);
    this.display.drawPabbot();
    this.display.render();
  }

  frame = (timeStamp) => {
    this.playId = undefined;

    let timeDelta = timeStamp - this.timeStart;
    this.timeStart = timeStamp;

    this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    this.pabbot.move(timeDelta);
    this.render();
    this.collision.isCollide(this.pabbot);

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

  resize = (e) => {
    this.display.resize(
      document.documentElement.clientWidth - 50,
      document.documentElement.clientHeight - 250,
      GAME_HEIGHT/GAME_WIDTH 
    )
  }

}

const tempMap = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 
  0, 0, 0, 12, 16, 8, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 13, 14, 0, 15, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 14, 1, 2, 2, 2, 2, 6, 
  0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 0, 1, 2, 2, 6, 6, 6, 6, 6, 6, 
  3, 14, 0, 14, 14, 13, 14, 0, 1, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 
  6, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6
]

const tempCollision = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
  0, 0, 0, 8, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0,
  3, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
