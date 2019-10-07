import InputHandler from "./inputHandler.js";
import Pabbot from "./pabbot.js";
import Display from "./display.js";
import Camera from "./camera.js";
import Map from "./map.js";
import Collision from "./collision.js";
import Enemies from "./enemies/enemies.js";


import gameMap from "../assets/maps/testMap2.js";
import testMap from "../assets/maps/testMap.js";


let GAME_HEIGHT = gameMap.height * 32;
let GAME_WIDTH = gameMap.width * 32;

export default class Game {
  constructor(context) {
    this.context = context;
    this.context.canvas.height = 320;
    this.context.canvas.width = 700;

    this.playId;
    this.timeStart = 0;
    this.run = this.run.bind(this);
    this.handlePause();

    this.pabbot = new Pabbot(0, 0, 32, 32);
    this.enemies = new Enemies(gameMap.enemies);

    this.map = new Map();
    this.inputHandler = new InputHandler(this.pabbot);
    this.camera = new Camera(
      gameMap, 
      this.context.canvas.width, 
      this.context.canvas.height,
      this.pabbot
    );
    this.collision = new Collision(
      GAME_WIDTH, 
      GAME_HEIGHT, 
      gameMap.collisionMap, 
      gameMap.width,
      this.nextLevel
    );

    this.display = new Display(
      this.context, 
      GAME_WIDTH, 
      GAME_HEIGHT, 
      this.pabbot, 
      this.map,
      gameMap.width,
      this.camera,
      this.context.canvas.width,
      this.context.canvas.height,
      this.enemies,
      this.run,
      gameMap
    );
  }

  renderMenu = () => {
    this.display.drawMenu();
  }

  render = () => {
    this.display.drawBackground();
    this.display.drawEnemies();
    this.display.drawPabbot();
    this.display.drawMap();
    this.display.render();
  }

  frame = (timeStamp) => {
    this.playId = undefined;

    let timeDelta = timeStamp - this.timeStart;
    this.timeStart = timeStamp;

    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    this.pabbot.move(timeDelta);
    this.collision.isCollide(this.pabbot);
    this.pabbot.danger(this.enemies.enemies);

    this.enemies.moveAll(timeDelta);
    this.enemies.enemies.forEach(enemy => this.collision.isCollide(enemy));

    this.render();
    this.camera.render();

    this.enemies.checkDeath();
    if (this.dead()) {
      console.log("youre ded sucker")
    }

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
      this.context.globalAlpha = 0.1;
      this.context.fillStyle = "rbga(255, 255, 255, 0.0)";
      this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.context.globalAlpha = 1;
      this.context.font = "50px Georgia";
      this.context.fillText(
        "Paused", 
        this.context.canvas.width/2 - 75, 
        this.context.canvas.height/2 - 100
      );
    }
  };

  handlePause = () => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        (this.playId) ? this.pause() : this.run()
      }
    })
  };

  resize = () => {
    this.display.resize(
      document.documentElement.clientWidth - 50,
      document.documentElement.clientHeight,
      this.context.canvas.height/this.context.canvas.width 
    )
  }

  dead = () => {
    if (this.pabbot.health <= 0) {
      return true;
    }
    return false;
  }

  maps = [testMap]

  nextLevel = () => {
    if (this.maps.length === 0) return;
    let currentMap = this.maps.shift();
    this.context.canvas.width = 700;
    this.context.canvas.height = 320;

    GAME_HEIGHT = currentMap.height * 32;
    GAME_WIDTH = currentMap.width * 32;

    this.enemies = new Enemies(currentMap.enemies);
    this.pabbot.position = {
      x: 0,
      y: 0
    }

    this.map = new Map();
    this.camera = new Camera(
      currentMap, 
      this.context.canvas.width, 
      this.context.canvas.height,
      this.pabbot
    );
    this.collision = new Collision(
      GAME_WIDTH, 
      GAME_HEIGHT, 
      currentMap.collisionMap, 
      currentMap.width,
      this.nextLevel
    );

    this.display = new Display(
      this.context, 
      GAME_WIDTH, 
      GAME_HEIGHT, 
      this.pabbot, 
      this.map,
      currentMap.width,
      this.camera,
      this.context.canvas.width,
      this.context.canvas.height,
      this.enemies,
      this.run,
      currentMap
    );
    this.resize();
  }
}

