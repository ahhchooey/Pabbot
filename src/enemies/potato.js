import Entity from '../entity.js';
import TileSheet from "../tileSheet.js";


export default class Potato extends Entity {
  constructor(x, y, width, height, moveSet) {
    super(x, y, width, height);
    this.health = 1;
    this.tileSheet = new TileSheet(32, 6);
    this.tileSheet.image.src = "../assets/CharliePotato.png";

    this.moveSet = moveSet || ["left", "left", "stand", "right", "right", "stand"];
  }

  speed = {
    x: 0,
    y: 0
  }
  maxSpeed = 40;
  gravity = 200;
  terminalVelocity = 1000;

  facing = "left";
  stepCount = 0;

  standRight = 0;
  standLeft = 32;
  runningRight = [64, 64, 64, 64, 64, 64, 128, 128, 128, 128, 128, 128];
  runningLeft = [96, 96, 96, 96, 96, 96, 160, 160, 160, 160, 160, 160];

  render = (buffer) => {
    let sprite;
    let hold;
    switch(true) {
      case (this.facing === "right" && this.speed.x === 0):
        sprite = this.standRight;
        break;
      case (this.facing === "left" && this.speed.x === 0):
        sprite = this.standLeft;
        break;
      case (this.facing === "right"):
        hold = this.runningRight.shift();
        this.runningRight.push(hold);
        sprite = hold;
        break;
      case (this.facing === "left"):
        hold = this.runningLeft.shift();
        this.runningLeft.push(hold);
        sprite = hold;
        break;
    }

    buffer.drawImage(
      this.tileSheet.image,
      sprite,
      0,
      this.width,
      this.height,
      Math.round(this.position.x),
      Math.round(this.position.y),
      this.width,
      this.height
    )
  }

  move = (timeDelta) => {
    this.stepCount--;
    if (this.stepCount <= 0) {
      this.stepCount = 50;
      this.moveSet.push(this.moveSet.shift());
    }
    switch(this.moveSet[0]) {
      case "stand":
        this.stop();
        break;
      case "left":
        this.moveLeft();
        break;
      case "right":
        this.moveRight();
        break;
    }

    this.pastPos.x = this.position.x;
    this.pastPos.y = this.position.y;

    this.position.x += this.speed.x / timeDelta;
    this.position.y += this.speed.y / timeDelta;
    if (this.speed.y <= this.terminalVelocity) {
      this.speed.y += this.gravity / timeDelta
    }
  }

  stop = () => {
    this.speed.x = 0;
  }

  moveLeft = () => {
    this.facing = "left";
    this.speed.x = -this.maxSpeed;
  }

  moveRight = () => {
    this.facing = "right";
    this.speed.x = this.maxSpeed;
  }
}
