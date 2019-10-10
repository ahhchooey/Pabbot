

export default class InputHandler {
  constructor(pabbot) {
    this.jumped = false;
    this.dashed = false;
    this.pabbot = pabbot;

    document.addEventListener("keydown", this.handleDown);
    document.addEventListener("keyup", this.handleUp);
  }

  handleDown = (e) => {
    //w87, a65, s83, d68, j74, k75, esc27
    switch(e.key) {
      case "w":
      case "ArrowUp":
        this.pabbot.upActive = true;
        break;
      case "a":
      case "ArrowLeft":
        this.pabbot.leftActive = true;
        this.pabbot.facing = "left";
        this.pabbot.moveLeft();
        break;
      case "s":
      case "ArrowDown":
        this.pabbot.downActive = true;
        break;
      case "d":
      case "ArrowRight":
        this.pabbot.rightActive = true;
        this.pabbot.facing = "right"
        this.pabbot.moveRight();
        break;
      case "j":
      case " ":
        if (!this.jumped && !this.pabbot.isJumping) {
          this.jumped = true;
          this.pabbot.jump();
        } else {
          console.log("wj")
          this.pabbot.wallJump();
        }
        break;
      case "k":
      case "Shift":
        if (!this.dashed) {
          this.dashed = true;
          this.pabbot.dash();
        }
        break;
    }
  }

  handleUp = (e) => {
    switch(e.key) {
      case "w":
      case "ArrowUp":
        this.pabbot.upActive = false;
        break;
      case "a":
      case "ArrowLeft":
        this.pabbot.leftActive = false;
        if (this.pabbot.speed.x < 0) this.pabbot.stop();
        break;
      case "s":
      case "ArrowDown":
        this.pabbot.downActive = false;
        break;
      case "d":
      case "ArrowRight":
        this.pabbot.rightActive = false;
        if (this.pabbot.speed.x > 0) this.pabbot.stop();
        break;
      case "j":
      case " ":
        if (this.jumped) {
          this.jumped = false;
          this.pabbot.cancelJump();
        }
        break;
      case "k":
      case "Shift":
        if (this.dashed) {
          this.dashed = false;
        }
        break;
    }
  }

  destroy = () => {
    document.removeEventListener("keydown", this.handleDown);
    document.removeEventListener("keyup", this.handleUp);
  }
}
