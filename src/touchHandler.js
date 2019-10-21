

export default class TouchHandler {
  constructor(pabbot, menu, display) {
    this.pabbot = pabbot;
    this.menu = menu;
    this.display = display;

    this.up = document.querySelector(".up");
    this.left = document.querySelector(".left");
    this.right = document.querySelector(".right");
    this.down = document.querySelector(".down");

    this.jump = document.querySelector(".jump");
    this.dash = document.querySelector(".dash");

    this.jumped = false;
    this.dashed = false;

    this.createTouchMenu();
  }

  createTouchStart = () => {
    this.up.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.pabbot.upActive = true;
    })

    this.left.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.pabbot.leftActive = true;
      this.pabbot.facing = "left";
      this.pabbot.moveLeft();
    })

    this.right.addEventListener("touchstart", (e) => {
      this.pabbot.rightActive = true;
      this.pabbot.facing = "right"
      this.pabbot.moveRight();
      e.preventDefault();
    })

    this.down.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.pabbot.downActive = true;
    })

    this.jump.addEventListener("touchstart", (e) => {
      e.preventDefault();
      if (!this.jumped && !this.pabbot.isJumping) {
        this.jumped = true;
        this.pabbot.jump();
      } else {
        this.pabbot.wallJump();
      }
    })

    this.dash.addEventListener("touchstart", (e) => {
      e.preventDefault();
      if (!this.dashed) {
        this.dashed = true;
        this.pabbot.dash();
      }
    })
  } 

  createTouchEnd = () => {
    this.up.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.pabbot.upActive = false;
    })

    this.left.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.pabbot.leftActive = false;
      if (this.pabbot.speed.x < 0) this.pabbot.stop();
    })

    this.right.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.pabbot.rightActive = false;
      if (this.pabbot.speed.x > 0) this.pabbot.stop();
    })

    this.down.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.pabbot.downActive = false;
    })

    this.jump.addEventListener("touchend", (e) => {
      e.preventDefault();
      if (this.jumped) {
        this.jumped = false;
        this.pabbot.cancelJump();
      }
    })

    this.dash.addEventListener("touchend", (e) => {
      e.preventDefault();
      if (this.dashed) {
        this.dashed = false;
      }
    })
  }

  createTouchMenu = () => {
    this.up.addEventListener("touchstart", this.menuUp)
    this.down.addEventListener("touchstart", this.menuDown)
    this.jump.addEventListener("touchstart", this.select)
    this.dash.addEventListener("touchstart", this.select)
  }

  menuUp = (e) => {
    e.preventDefault();
    this.menu.movePointerUp();
    this.display.drawMenu();
  }

  menuDown = (e) => {
    e.preventDefault();
    this.menu.movePointerDown();
    this.display.drawMenu();
  }

  select = (e) => {
    e.preventDefault();
    this.display.menuSelect();
    this.display.drawMenu();
  }

  destroyTouchMenu = () => {
    this.up.removeEventListener("touchstart", this.menuUp)
    this.down.removeEventListener("touchstart", this.menuDown)
    this.jump.removeEventListener("touchstart", this.select)
    this.dash.removeEventListener("touchstart", this.select)
  }
}
