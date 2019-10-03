import InputHandler from "./inputHandler.js";
import Pabbot from "./pabbot.js";
import Display from "./display.js";
import Map from "./map.js";
import Collision from "./collision.js";
import gameMap from "../assets/maps/testMap2.js";


const GAME_HEIGHT = gameMap.height * 32;
const GAME_WIDTH = gameMap.width * 32;

export default class Game {
  constructor(context) {
    this.context = context;
    this.context.canvas.height = GAME_HEIGHT;
    this.context.canvas.width = 1000;

    this.playId;
    this.timeStart = 0;
    this.run = this.run.bind(this);
    this.handlePause();

    this.pabbot = new Pabbot(0, 0, 32, 32);
    this.map = new Map();
    this.inputHandler = new InputHandler(this.pabbot);
    this.display = new Display(this.context, GAME_WIDTH, GAME_HEIGHT, this.pabbot, this.map,
      gameMap.width
    );
    this.collision = new Collision(
      GAME_WIDTH, 
      GAME_HEIGHT, 
      gameMap.collisionMap, 
      gameMap.width
    );
  }

  render = () => {
    this.display.fill("#333");
    this.display.drawPabbot();
    this.display.drawMap(gameMap.mapArray, gameMap.width);
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

