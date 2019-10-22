

export default class Menu {
  constructor(dH, dW, context, buffer) {
    this.dW = dW;
    this.dH = dH;
    this.context = context;
    this.buffer = buffer;

    this.canvas = document.getElementById("game");
    this.reOffset();
    window.onresize = (e) => this.reOffset();
    this.isDown = false;
    
    this.hexes = [];

    this.startScreen = new Image();
    this.startScreen.src = "../assets/menu/pabbot_start.png";

    this.controlsScreen = new Image();
    this.controlsScreen.src = "../assets/menu/pabbot_controls.png";

    this.aboutScreen = new Image();
    this.aboutScreen.src = "../assets/menu/pabbot_about.png";
  }

  hexPush = () => {
    let cw = this.context.canvas.width;
    let ch = this.context.canvas.height;
    this.hexes.push(
      {
        points: [
          {x: 0.074*cw, y: 0.78*ch}, 
          {x: 0.20*cw, y: 0.78*ch}, 
          {x: 0.20*cw, y: 0.89*ch},
          {x: 0.074*cw, y: 0.89*ch} 
        ],
        url: "http://alexchui.dev"
      },
      {
        points: [
          {x: 0.26*cw, y: 0.78*ch},
          {x: 0.37*cw, y: 0.78*ch},
          {x: 0.37*cw, y: 0.89*ch},
          {x: 0.26*cw, y: 0.89*ch}
        ],
        url: "http://www.github.com/ahhchooey"
      },
      {
        points: [
          {x: 0.43*cw, y: 0.78*ch},
          {x: 0.56*cw, y: 0.78*ch},
          {x: 0.56*cw, y: 0.89*ch},
          {x: 0.43*cw, y: 0.89*ch}
        ],
        url: "https://www.linkedin.com/in/alex-chui-075785117/"
      }
    )
  }

  drawLinks = (buffer) => {
    this.canvas.addEventListener("mousedown", this.handleClick);
    for (let i = 0; i < this.hexes.length; i++) {
      let hex = this.hexes[i];
      buffer.strokeStyle = "#fff";
      buffer.beginPath();
      buffer.moveTo(hex.points[0].x, hex.points[0].y);
      for (let j = 1; j < hex.points.length; j++) {
        buffer.lineTo(hex.points[j].x, hex.points[j].y);
      }
      buffer.closePath();
      buffer.stroke();
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let mouseX = parseInt(e.clientX - this.offsetX);
    let mouseY = parseInt(e.clientY - this.offsetY);

    for (let i = 0; i < this.hexes.length; i++) {
      let hex = this.hexes[i];
      this.buffer.beginPath();
      this.buffer.moveTo(hex.points[0].x, hex.points[0].y);
      for (let j = 1; j < hex.points.length; j++) {
        this.buffer.lineTo(hex.points[j].x, hex.points[j].y);
      }
      this.buffer.closePath();
      if (this.buffer.isPointInPath(mouseX, mouseY)) {
        window.location = hex.url
      }
    }

    //console.log(mouseX/this.context.canvas.width, mouseY/this.context.canvas.height);
  }

  pointerPositions = ["start", "controls", "about"];

  currentPointer = () => {
    return this.pointerPositions[0];
  };

  movePointerDown = () => {
    this.pointerPositions.push(this.pointerPositions.shift());
  }

  movePointerUp = () => {
    this.pointerPositions.unshift(this.pointerPositions.pop())
  }

  startGame = (run, touchControl) => {
    run();
    touchControl();
  }

  showControls = () => {
    this.currentScreen = "controls"
  }

  showAbout = () => {
    this.currentScreen = "about";
    this.hexPush();
  }

  reOffset = () => {
    let game = document.getElementById("game");
    let rect = game.getBoundingClientRect();

    this.offsetX = rect.left;
    this.offsetY = rect.top;
  }

  clickGithub = () => {
    console.log(window.location)
  }

  clickLinkedIn = () => {
    console.log(window.location)
  }

  currentScreen = "main";

  render = (buffer) => { 
    buffer.fillStyle = "#000";
    buffer.fillRect(0, 0, this.dW, this.dH);
    buffer.fillStyle = "#fff";

    switch(this.currentScreen) {
      case "main":
        buffer.drawImage(
          this.startScreen,
          0,
          0,
          640,
          320,
          0,
          0,
          640,
          320
        )
        break;
      case "controls":
        buffer.drawImage(
          this.controlsScreen,
          0,
          0,
          640,
          320,
          0,
          0,
          640,
          320
        )
        break;
      case "about":
        buffer.drawImage(
          this.aboutScreen,
          0,
          0,
          640,
          320,
          0,
          0,
          640,
          320
        )
        break;
    }

    let wordLeft = this.dW/2 + 195;
    let wordTop = this.dH/2 + 31;

    let locus = [wordLeft,wordLeft];
    switch(this.currentPointer()) {
      case "start":
        locus = [wordLeft - 10, wordTop - 5];
        break;
      case "controls":
        locus = [wordLeft - 10, wordTop + 20];
        break;
      case "about":
        locus = [wordLeft - 10, wordTop + 47];
        break;
    }

    buffer.beginPath();
    buffer.moveTo(locus[0], locus[1]);
    buffer.lineTo(locus[0] - 5, locus[1] - 5);
    buffer.lineTo(locus[0] - 5, locus[1] + 5);
    buffer.closePath();
    buffer.fill();
  }

}
