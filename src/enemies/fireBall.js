import Entity from "../entity.js";
import TileSheet from "../tileSheet.js";
import Sound from "../sound.js";


export default class Fireball extends Entity {
  constructor(x, y, width, height, moveSet, speedX, speedY, pabbot, checkMute) {
    super(x, y, width, height, moveSet);

    this.tileSheet = new TileSheet(8, 4);
    this.tileSheet.image.src = "../assets/FireBall.png";

    this.speed = {
      x: speedX,
      y: speedY
    }

    this.pabbot = pabbot;
    this.active = true;
    this.timer = 125;

    this.fireHit = new Sound("../assets/sound/fireHit.mp3", 1.0);

    this.checkMute = checkMute;
  }

  rotate = [0, 0, 0, 0, 8, 8, 8, 8, 16, 16, 16, 16, 24, 24, 24, 24];

  render = (buffer) => {
    let sprite;
    sprite = this.rotate.shift();
    this.rotate.push(sprite);


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

  move = () => {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.timer--;
    if (this.timer <= 0) this.active = false;
  }

  hit = () => {
    if (this.getDistance(this.pabbot) < 17 && this.pabbot.lastHit <= 0) {
      if (!this.pabbot.isDashing) {
        if (!this.checkMute()) this.fireHit.sound.cloneNode(true).play();
        if (!this.pabbot.invincible) this.pabbot.health--;
        this.pabbot.lastHit = 50;

        if (this.pabbot.speed.x === 0) {
          this.pabbot.speed.y -= 100;
          this.pabbot.speed.x = this.speed.x * 0.5;
        } else {
          this.pabbot.speed.y = -100;
          this.pabbot.speed.x = -this.pabbot.speed.x * 0.3;
        }
        setTimeout(this.pabbot.stop, 200);
        this.active = false;
      }
    }
  }

}
