

export default class Entity {
  constructor(x, y, width, height) {
    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
  }

  getTop = () => this.position.y;
  getLeft = () => this.position.x;
  getBottom = () => this.position.y + this.height;
  getRight = () => this.position.x + this.width;

  setTop = (y) => {this.position.y = y};
  setLeft = (x) => {this.postion.x = x};
  setBottom = (y) => {this.position.y = y - this.height};
  setRight = (x) => {this.position.x = x - this.width};

}
