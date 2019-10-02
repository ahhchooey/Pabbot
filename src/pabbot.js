import Entity from "./entity.js";
import TileSheet from "./tileSheet.js";


export default class Pabbot extends Entity {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.tileSheet = new TileSheet(32, 20);
    this.tileSheet.image.src = "../assets/Pabbot.png";
  }

  speed = {
    x: 0,
    y: 0
  };
  maxSpeed = 50;
  dashSpeed = 200;
  jumpHeight = 200;
  gravity = 200;
  terminalVelocity = 1000;

  isJumping = false;
  isDashing = false;
  upActive = false;
  leftActive = false;
  downActive = false;
  rightActive = false;
  facing = "right";

  standRight = 0;
  standLeft = 32;
  runningRight = [64, 64, 64, 128, 128, 128];
  runningLeft = [96, 96, 96, 160, 160, 160];
  jumpingRight = 192;
  fallingRight = 256;
  jumpingLeft = 224;
  fallingLeft = 288;
  dashingRight = [480, 480, 480, 480, 512, 512, 512, 512, 544, 544, 544, 544, 576, 576, 576, 576];
  dashingLeft = [576, 576, 576, 576, 544, 544, 544, 544, 512, 512, 512, 512, 488, 488, 488, 488];

  render = (buffer) => {
    let sprite;
    let hold;
    switch(true) {
      case (this.facing === "right" && !this.isJumping && this.speed.x === 0):
        sprite = this.standRight;
        break;
      case (this.facing === "right" && !this.isJumping && this.speed.x !== 0): 
        hold = this.runningRight.shift();
        this.runningRight.push(hold);
        sprite = hold;
        break;
      case (this.facing === "right" && this.isDashing):
        hold = this.dashingRight.shift();
        this.dashingRight.push(hold);
        sprite = hold;
        break;
      case (this.facing === "right" && this.isJumping  && this.speed.y < 0):
        sprite = this.jumpingRight;
        break;
      case (this.facing === "right" && this.isJumping && this.speed.y > 0):
        sprite = this.fallingRight;
        break;

      case (this.facing === "left" && !this.isJumping && this.speed.x === 0):
        sprite = this.standLeft;
        break;
      case (this.facing ==="left" && !this.isJumping && this.speed.x !== 0):
        hold = this.runningLeft.shift();
        this.runningLeft.push(hold);
        sprite = hold;
        break;
      case (this.facing === "left" && this.isDashing):
        hold = this.dashingLeft.shift();
        this.dashingLeft.push(hold);
        sprite = hold;
        break;
      case (this.facing === "left" && this.isJumping && this.speed.y < 0):
        sprite = this.jumpingLeft;
        break;
      case (this.facing === "left" && this.isJumping && this.speed.y > 0):
        sprite = this.fallingLeft;
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
    );
  }

  move = (timeDelta) => {
    this.pastPos.x = this.position.x;
    this.pastPos.y = this.position.y;

    this.position.x += this.speed.x / timeDelta;
    this.position.y += this.speed.y /timeDelta;
    if (this.speed.y <= this.terminalVelocity) {
      this.speed.y += this.gravity / timeDelta;
    }
  }

  stop = () => {
    this.speed.x = 0;
  }

  moveLeft = () => {
    this.speed.x = -this.maxSpeed;
  }

  moveRight = () => {
    this.speed.x = this.maxSpeed;
  }

  jump = () => {
    if (!this.isJumping) {
      this.speed.y = -this.jumpHeight;
      this.isJumping = true;
    }
  }

  cancelJump = () => {
    if (this.isJumping) {
      if (this.speed.y < 0) {
        this.speed.y = 0;
      }
    }
  }

  dash = () => {
    if (this.isJumping && !this.isDashing) {
      this.isDashing = true;
      this.speed.x = 0;
      this.speed.y = 0;
      if (this.upActive) this.speed.y -= this.dashSpeed;
      if (this.leftActive) this.speed.x -= this.dashSpeed;
      if (this.downActive) this.speed.y += this.dashSpeed;
      if (this.rightActive) this.speed.x += this.dashSpeed;
    }
  }

}
