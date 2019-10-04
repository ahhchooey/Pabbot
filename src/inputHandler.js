

export default class InputHandler {
  constructor(pabbot) {
    this.jumped = false;
    this.dashed = false;

    document.addEventListener("keydown", (e) => {
      //w87, a65, s83, d68, j74, k75, esc27
      switch(e.keyCode) {
        case 87:
          pabbot.upActive = true;
          break;
        case 65:
          pabbot.leftActive = true;
          pabbot.facing = "left";
          pabbot.moveLeft();
          break;
        case 83:
          pabbot.downActive = true;
          break;
        case 68:
          pabbot.rightActive = true;
          pabbot.facing = "right"
          pabbot.moveRight();
          break;
        case 74:
          if (!this.jumped) {
            this.jumped = true;
            pabbot.jump();
          } if (this.jumped) {
            pabbot.wallJump();
          }
          break;
        case 75:
          if (!this.dashed) {
            this.dashed = true;
            pabbot.dash();
          }
          break;
      }
    })

    document.addEventListener("keyup", (e) => {
      switch(e.keyCode) {
        case 87:
          pabbot.upActive = false;
          break;
        case 65:
          pabbot.leftActive = false;
          if (pabbot.speed.x < 0) pabbot.stop();
          break;
        case 83:
          pabbot.downActive = false;
          break;
        case 68:
          pabbot.rightActive = false;
          if (pabbot.speed.x > 0) pabbot.stop();
          break;
        case 74:
          if (this.jumped) {
            this.jumped = false;
            pabbot.cancelJump();
          }
          break;
        case 75:
          if (this.dashed) {
            this.dashed = false;
          }
          break;
      }
    })

  }
}
