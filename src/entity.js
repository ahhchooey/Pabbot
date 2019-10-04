

export default class Entity {
  constructor(x, y, width, height) {
    this.position = {
      x: x,
      y: y
    };
    this.pastPos = {
      x: x,
      y: y
    }
    this.width = width;
    this.height = height;
  }

  getTop = () => this.position.y;
  getLeft = () => this.position.x;
  getBottom = () => this.position.y + this.height;
  getRight = () => this.position.x + this.width;

  setTop = (y) => {this.position.y = y};
  setLeft = (x) => {this.position.x = x};
  setBottom = (y) => {this.position.y = y - this.height};
  setRight = (x) => {this.position.x = x - this.width};

  getPastTop = () => this.pastPos.y;
  getPastLeft = () => this.pastPos.x;
  getPastBottom = () => this.pastPos.y + 32;
  getPastRight = () => this.pastPos.x + 32;

  setPastTop = (y) => {this.pastPos.y = y};
  setPastLeft = (x) => {this.pastPos.x = x};
  setPastBottom = (y) => {this.pastPos.y = y + 32};
  setPastRight = (x) => {this.pastPos.x = x + 32};

  getDistance = (other) => {
    let horiz = Math.abs(this.position.x - other.position.x);
    let vert = Math.abs(this.position.y - other.position.y);
    return Math.pow((horiz * horiz + vert * vert), 0.5)
  }
}
