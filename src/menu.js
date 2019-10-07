

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
    this.hexPush();
    
  }

  hexPush = () => {
    let cw = this.context.canvas.width;
    let ch = this.context.canvas.height;
    this.hexes.push(
      {
        points: [
          {x: 0.14*cw, y: 0.79*ch}, 
          {x: 0.23*cw, y: 0.79*ch}, 
          {x: 0.23*cw, y: 0.85*ch},
          {x: 0.14*cw, y: 0.85*ch} 
        ],
        url: "www.google.com"
      },
      {
        points: [
          {x: 0.26*cw, y: 0.79*ch},
          {x: 0.37*cw, y: 0.79*ch},
          {x: 0.37*cw, y: 0.85*ch},
          {x: 0.26*cw, y: 0.85*ch}
        ],
        url: "www.github.com"
      },
      {
        points: [
          {x: 0.40*cw, y: 0.79*ch},
          {x: 0.50*cw, y: 0.79*ch},
          {x: 0.50*cw, y: 0.85*ch},
          {x: 0.40*cw, y: 0.85*ch}
        ],
        url: "www.apple.com"
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
      if (this.buffer.isPointInPath(mouseX, mouseY)) console.log(hex.url)
    }
    console.log("mouseX", mouseX/this.context.canvas.width)
    console.log("mouseY", mouseY/this.context.canvas.height)
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

  startGame = (run) => {
    run();
  }

  showControls = () => {
    this.currentScreen = "controls"
  }

  showAbout = () => {
    this.currentScreen = "about";
  }

  reOffset = () => {
    this.offsetX = 25;
    this.offsetY = (document.documentElement.clientHeight - this.context.canvas.height)/2;
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
        buffer.font = "50px serif";
        buffer.fillText("Pabbot", 150, 120)
        break;
      case "controls":
        buffer.font = "20px serif";
        buffer.fillText("Controls", 100, 100)
        buffer.fillText("ArrowKeys/WASD - Up, Down, Left, Right", 100, 130)
        buffer.fillText("Enter - Menu Select", 100, 150)
        buffer.fillText("J/Space - Jump (when on ground)", 100, 170)
        buffer.fillText("K/LShift - Spin (when jumping)", 100, 190)
        break;
      case "about":
        buffer.font = "20px serif";
        buffer.fillText("About Me", 100, 100)
        buffer.fillText("Hi, I'm Alex, a software developer.", 100, 130)
        buffer.fillText("This is pabbot, a game where you play as Pabbot.", 100, 150)
        buffer.fillText("The goal of the game is simply to make it to the", 100, 170)
        buffer.fillText("end. There are monsters on the path to victory.", 100, 190)
        buffer.fillText("Make sure you spin to win.", 100, 210)

        buffer.fillText("If you want, check out my other work.", 100, 250)
        buffer.fillText("GitHub     LinkedIn     Portfolio", 100, 270)
        break;
    }

    buffer.font = "20px serif";
    let wordLeft = this.dW/2 + 200;
    let wordTop = this.dH/2 + 20;
    buffer.fillText("Start", wordLeft, wordTop);
    buffer.fillText("Controls", wordLeft, wordTop + 25);
    buffer.fillText("About", wordLeft, wordTop + 50);

    let locus = [wordLeft,wordLeft];
    switch(this.currentPointer()) {
      case "start":
        locus = [wordLeft - 10, wordTop - 5];
        break;
      case "controls":
        locus = [wordLeft - 10, wordTop + 20];
        break;
      case "about":
        locus = [wordLeft - 10, wordTop + 45];
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
