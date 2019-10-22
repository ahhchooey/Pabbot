import Menu from "./menu.js";


export default class Display {
  constructor(context, width, height, pabbot, map, mapWidth, camera, dW, dH, enemies, run, gM, tC) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.pabbot = pabbot;
    this.map = map;
    this.mapWidth = mapWidth;
    this.camera = camera;
    this.displayWidth = dW;
    this.displayHeight = dH;
    this.enemies = enemies;
    this.run = run;
    this.gameMap = gM;
    this.touchControl = tC;

    this.buffer = document.createElement("canvas").getContext("2d");
    this.buffer.canvas.width = width;
    this.buffer.canvas.height = height;
    this.buffer.imageSmoothingEnabled = false;

    this.menu = new Menu(this.displayHeight, this.displayWidth, this.context, this.buffer);
    document.addEventListener("keydown", this.handleMenu)

    this.background = new Image();
    this.background.src = "../assets/pixel_forest.png";
  }

  handleMenu = (e) => {
    switch(e.key) {
      case "ArrowUp":
      case "w":
        this.menu.movePointerUp();
        this.drawMenu();
        break;
      case "ArrowDown":
      case "s":
        this.menu.movePointerDown();
        this.drawMenu();
        break;
      case "Enter":
        this.menuSelect();
        this.drawMenu();
        break;
    }
  }

  destroyHandle = () => {
    document.removeEventListener("keydown", this.handleMenu)
  }

  menuSelect = () => {
    switch(this.menu.currentPointer()) {
      case "start":
        this.destroyHandle();
        this.menu.startGame(this.run, this.touchControl);
        break;
      case "controls":
        this.menu.showControls();
        break;
      case "about":
        this.menu.showAbout();
        this.menu.drawLinks(this.buffer);
        break;
    }
  }

  drawMenu = () => {
    this.menu.render(this.buffer);

    this.context.drawImage(
      this.buffer.canvas,
      0,
      0,
      this.displayWidth,
      this.displayHeight,
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    )
  }

  drawPabbot = () => {
    this.pabbot.render(this.buffer);
  }

  drawMap = () => {
    this.buffer.clearRect(0, 0, this.width, this.height)
    this.map.render(this.gameMap.mapArray, this.mapWidth, this.buffer);
    this.pabbot.renderHealth(this.buffer, Math.floor(this.camera.x), Math.floor(this.camera.y));
  }

  drawEnemies = () => {
    this.enemies.renderAll(this.buffer);
  }

  fill = (color) => {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(0, 0, this.width, this.height)
  };

  drawBackground = (width, height) => {
    let gbg = document.querySelector(".game-background");
    gbg.style.width = `${width}px`;
    gbg.style.height = `${height}px`;
    gbg.style.backgroundImage = `url(${this.background.src})`;
    gbg.style.backgroundSize = `${width}px ${height}px`;
  }

  render = () => {
    let startCol = Math.floor(this.camera.x);
    let startRow = Math.floor(this.camera.y);

    this.context.drawImage(
      this.buffer.canvas,
      startCol,
      startRow,
      this.displayWidth,
      this.displayHeight,
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    )
  };

  resize = (width, height, ratio) => {
    if (height / width > ratio) {
      this.context.canvas.width = width;
      this.context.canvas.height = width * ratio;
    } else {
      this.context.canvas.width = height / ratio;
      this.context.canvas.height = height;
    }
    this.menu.reOffset();
  }
  
}

