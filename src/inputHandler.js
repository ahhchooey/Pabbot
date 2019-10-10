

export default class InputHandler {
  constructor(pabbot) {
    this.jumped = false;
    this.dashed = false;

    document.addEventListener("keydown", (e) => {
      //w87, a65, s83, d68, j74, k75, esc27
      switch(e.key) {
        case "w":
        case "ArrowUp":
          pabbot.upActive = true;
          break;
        case "a":
        case "ArrowLeft":
          pabbot.leftActive = true;
          pabbot.facing = "left";
          pabbot.moveLeft();
          break;
        case "s":
        case "ArrowDown":
          pabbot.downActive = true;
          break;
        case "d":
        case "ArrowRight":
          pabbot.rightActive = true;
          pabbot.facing = "right"
          pabbot.moveRight();
          break;
        case "j":
        case " ":
          if (!this.jumped && !pabbot.isJumping) {
            this.jumped = true;
            pabbot.jump();
          } else {
            console.log("wj")
            pabbot.wallJump();
          }
          break;
        case "k":
        case "Shift":
          if (!this.dashed) {
            this.dashed = true;
            pabbot.dash();
          }
          break;
      }
    })

    document.addEventListener("keyup", (e) => {
      switch(e.key) {
        case "w":
        case "ArrowUp":
          pabbot.upActive = false;
          break;
        case "a":
        case "ArrowLeft":
          pabbot.leftActive = false;
          if (pabbot.speed.x < 0) pabbot.stop();
          break;
        case "s":
        case "ArrowDown":
          pabbot.downActive = false;
          break;
        case "d":
        case "ArrowRight":
          pabbot.rightActive = false;
          if (pabbot.speed.x > 0) pabbot.stop();
          break;
        case "j":
        case " ":
          if (this.jumped) {
            this.jumped = false;
            pabbot.cancelJump();
          }
          break;
        case "k":
        case "Shift":
          if (this.dashed) {
            this.dashed = false;
          }
          break;
      }
    })

  }
}
