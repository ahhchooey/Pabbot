import Entity from "./entity.js";


export default class Pabbot extends Entity {
  constructor(x, y, width, height) {
    super(x, y, width, height)
  }

  speed = {
    x: 0,
    y: 0
  };
  maxSpeed = 100;
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

  render = (context) => {
    context.fillStyle = "#1a1"  
    context.fillRect(
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
