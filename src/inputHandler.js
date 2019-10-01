

export default class InputHandler {
  constructor(pabbot) {

    document.addEventListener("keydown", (e) => {
      //w87, a65, s83, d68, j74, k75, esc27
      switch(e.keyCode) {
        case 87:
          console.log("up")
          break;
        case 65:
          pabbot.moveLeft();
          break;
        case 83:
          console.log("down")
          break;
        case 68:
          pabbot.moveRight();
          break;
        case 74:
          pabbot.jump();
          break;
        case 75:
          console.log("dash")
          break;
      }
    })

    document.addEventListener("keyup", (e) => {
      switch(e.keyCode) {
        case 87:
          console.log("up")
          break;
        case 65:
          if (pabbot.speed.x < 0) pabbot.stop();
          break;
        case 83:
          console.log("down")
          break;
        case 68:
          if (pabbot.speed.x > 0) pabbot.stop();
          break;
        case 74:
          console.log("jump")
          break;
        case 75:
          console.log("dash")
          break;
      }
    })

  }
}
