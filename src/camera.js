

export default class Camera {
  constructor(gameMap, width, height, pabbot) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.following = pabbot;

    this.maxX = gameMap.width * 32 - width;
    this.maxY = gameMap.height * 32 - height;
  }

  render = () => {
    this.x = this.following.position.x - this.width / 2;
    this.y = this.following.position.y - this.height / 2;

    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));
  }
}
