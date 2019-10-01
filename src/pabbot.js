

export default class Pabbot {

  speed = {
    x: 0,
    y: 0
  };
  position = {
    x: 400,
    y: 300
  }
  width = 32;
  height = 32;
  maxSpeed = 100;
  jumpHeight = 500;
  isJumping = false;

  render = (context) => {
    context.fillStyle = "#1a1"  
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  move = (timeDelta) => {
    this.position.x += this.speed.x / timeDelta;
    this.position.y += this.speed.y /timeDelta;
    this.speed.y += 500 / timeDelta
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
