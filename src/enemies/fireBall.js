import Entity from "../entity.js";
import TileSheet from "../tileSheet.js";


export default class Fireball extends Entity {
  constructor(x, y, width, height, moveSet, speedX, speedY) {
    super(x, y, width, height, moveSet);

    this.tileSheet = new TileSheet(8, 4);
    this.tileSheet.image.src = "../assets/FireBall.png";

    this.speed = {
      x: speedX,
      y: speedY
    }
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

  }
}
