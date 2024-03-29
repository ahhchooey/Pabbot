import InputHandler from "./inputHandler.js";
import Pabbot from "./pabbot.js";
import Display from "./display.js";
import Camera from "./camera.js";
import Map from "./map.js";
import Collision from "./collision.js";
import Enemies from "./enemies/enemies.js";
import Sound from "./sound.js";
import TouchHandler from "./touchHandler.js";

import gameMap from "../assets/maps/level1.js";
import level2 from "../assets/maps/level2.js";
import level3 from "../assets/maps/level3.js";
import level4 from "../assets/maps/level4.js";
import endMap from "../assets/maps/levelEnd.js";

let GAME_HEIGHT = gameMap.height * 32;
let GAME_WIDTH = gameMap.width * 32;

export default class Game {
  constructor(context, reset) {
    this.context = context;
    this.reset = reset;
    this.context.canvas.width = 640;
    this.context.canvas.height = 320;
    this.context.imageSmoothingEnabled = false;

    GAME_HEIGHT = gameMap.height * 32;
    GAME_WIDTH = gameMap.width * 32;

    this.playId;
    this.timeStart = 0;
    this.run = this.run.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.handlePause();

    this.pabbot = new Pabbot(64, GAME_HEIGHT - 64, 32, 32, this.checkMute);
    this.enemies = new Enemies(gameMap.enemies, this.pabbot, this.checkMute);

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
      this.nextLevel,
      this.checkMute
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
      gameMap,
      this.touchControl
    );

    this.bgm = new Sound("../assets/sound/pabbotSafari.m4a", 0.0);
    this.deadm = new Sound("../assets/sound/pabbotEnd.mp3", 1.0)

    this.mute = true;
    this.soundControl();

    this.touchHandler = new TouchHandler(this.pabbot, this.display.menu, this.display);

    this.pausedImg = new Image();
    this.pausedImg.src = "../assets/menu/paused.png";

    this.gameOverImg = new Image();
    this.gameOverImg.src = "../assets/menu/game_over.png";
  }

  maps = [level2, level3, level4, endMap]
  backgrounds = ["../assets/pixel_cave.png", "../assets/pixel_forest2.png", "../assets/pixel_dark.png", "../assets/pixel_field.png"];

  touchControl = () => {
    this.touchHandler.destroyTouchMenu();
    this.touchHandler.createTouchStart();
    this.touchHandler.createTouchEnd();
  }

  renderMenu = () => {
    this.display.drawMenu();
  }

  render = () => {
    this.display.drawMap();
    this.display.drawEnemies();
    this.display.drawPabbot();
    this.display.render();
  }

  checkMute = () => {
    return this.mute;
  }

  soundControl = () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "m") {
        let audios = document.querySelectorAll("audio");

        if (!this.mute) {
          this.mute = true;
          for (let i = 0; i < audios.length; i++) {
            audios[i].volume = parseFloat(0.0);
          }
          document.querySelector(".background").style.opacity = 0.15;
        } else {
          this.mute = false;
          for (let i = 0; i < audios.length; i++) {
            audios[i].volume = parseFloat(1.0);
          }
          this.bgm.sound.volume = 0.2;
          document.querySelector(".background").style.opacity = 0.3;
        }

      }
    })
  }

  frame = (timeStamp) => {

    let timeDelta = timeStamp - this.timeStart;
    this.timeStart = timeStamp;

    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    this.pabbot.move(timeDelta);
    this.collision.isCollide(this.pabbot, this.dead(), this.gameOver);
    this.pabbot.danger(this.enemies.enemies);

    this.enemies.moveAll(timeDelta);
    this.enemies.enemies.forEach(enemy => this.collision.isCollide(enemy));

    this.render();
    this.camera.render();

    this.enemies.checkDeath();

    if (!this.end) {
      this.run();
    } else {
      this.context.globalAlpha = 0.3;
      this.context.fillStyle = "#000";
      this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.context.globalAlpha = 1;

      this.context.drawImage(
        this.gameOverImg,
        0,
        0,
        160,
        32,
        this.context.canvas.width/2 - 80,
        this.context.canvas.height/2 - 16,
        160,
        32
      )
    }
  };

  end = false;

  gameOver = () => {
    document.removeEventListener("keydown", this.handleEscape)
    if (this.playId) {

      window.cancelAnimationFrame(this.playId);

      this.bgm.stop();
      if (!this.mute) this.deadm.play();
      setTimeout(this.reset, 2000);
      this.end = true;
    }
  }

  run = () => {
    this.bgm.loop = true;
    this.bgm.play();
    this.playId = window.requestAnimationFrame(this.frame);
  };

  pause = () => {
    if (this.playId) {
      window.cancelAnimationFrame(this.playId);
      this.bgm.stop();
      this.playId = undefined;
      this.context.globalAlpha = 0.3;
      this.context.fillStyle = "#000";
      this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.context.globalAlpha = 1;

      this.context.drawImage(
        this.pausedImg,
        0,
        0,
        160,
        32,
        this.context.canvas.width/2 - 80,
        this.context.canvas.height/2 - 16,
        160,
        32
      )
    }
  };

  handlePause = () => {
    document.addEventListener("keydown", this.handleEscape)
  };

  handleEscape = (e) => {
    if (e.keyCode === 27) {
      (this.playId) ? this.pause() : this.run()
    }
  }

  deadJump = false;

  dead = () => {
    if (this.pabbot.health <= 0) {
      if (!this.deadJump) {
        this.deadJump = true
        this.pabbot.speed.y = -100;
        this.pabbot.speed.x = this.pabbot.speed.x || 50;
        this.inputHandler.destroy();
      };
      return true;
    }
    return false;
  }

  nextLevel = () => {
    if (this.maps.length === 0) return;
    if (this.backgrounds.length === 0) return;
    let currentMap = this.maps.shift();
    let currentBackground = this.backgrounds.shift();
    this.context.canvas.width = 640;
    this.context.canvas.height = 320;

    GAME_HEIGHT = currentMap.height * 32;
    GAME_WIDTH = currentMap.width * 32;

    this.enemies = new Enemies(currentMap.enemies, this.pabbot, this.checkMute);
    this.pabbot.position = {
      x: 64,
      y: GAME_HEIGHT - 64
    }
    this.pabbot.health++;

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
      this.nextLevel,
      this.checkMute
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
    this.display.background.src = currentBackground;
    this.display.destroyHandle();
    this.resize();
  }

  resize = () => {
    this.display.resize(
      document.documentElement.clientWidth - 30,
      document.documentElement.clientHeight,
      this.context.canvas.height/this.context.canvas.width 
    )
    this.renderMenu();
    this.display.drawBackground(this.context.canvas.width, this.context.canvas.height);
  }
}

