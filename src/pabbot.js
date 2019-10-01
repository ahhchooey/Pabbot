

export default class Pabbot {

  speed = {
    x: 0,
    y: 0
  };
  position = {
    x: 400,
    y: 300
  }
  maxSpeed = 100;
  jumpHeight = 150;
  isJumping = false;

  render = (context) => {
    context.fillStyle = "#1a1"  
    context.fillRect(this.position.x, this.position.y, 32, 32);
  }

  move = (timeDelta) => {
    this.position.x += this.speed.x / timeDelta;
    this.position.y += this.speed.y /timeDelta;
    this.speed.y += 150 / timeDelta

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x > 800 - 32) this.position.x = 800 - 32;
    if (this.position.y > 600 - 32) {
      this.position.y = 600 - 32;
      this.isJumping = false;
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

  jump =() => {
    if (!this.isJumping) {
      this.speed.y = -this.jumpHeight;
      this.isJumping = true;
    }
  }

}
