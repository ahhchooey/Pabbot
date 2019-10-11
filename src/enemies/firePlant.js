import Entity from "../entity.js";
import TileSheet from "../tileSheet.js";


export default class FirePlant extends Entity {
  constructor(x, y, width, height, moveSet, pabbot) {
    super(x, y, width, height, moveSet);
    this.health = 1;
    this.tileSheet = newTileSheet(32, 6);
    this.tileSheet.image.src = "../assets/CharliePotato.png";

    this.pabbot = pabbot;

    this.moveSet = moveSet || ["fire", "fire", "stand", "stand"];
  }

  speed = {
    x: 0,
    y: 0
  }
  maxSpeed = 0;
  gravity = 200;
  terminalVelocity = 1000;

  facing = "left";
  stepCount = 0;

  standRight = 0;
  standLeft = 32;

  render = (buffer) => {
    this.facePabbot(this.pabbot.position.x);
    let sprite;
    let hold;
    switch(true) {
      case (this.facing === "right"):
        sprite = this.standRight;
        break;
      case (this.facing === "left"):
        sprite = this.standLeft;
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

  facePabbot = (pabbotX) => {
    if (pabbotX < this.position.x) {
      this.facing === "left";
    } else {
      this.facing === "right";
    }
  }
  
}

