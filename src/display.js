

export default class Display {
  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
  }

  buffer = document.createElement("canvas").getContext("2d");

  drawRectangle = (x, y, width, height, color) => {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
  };

  fill = (color) => {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(0, 0, this.width, this.height)
  };

  render = () => {
    this.context.drawImage(
      this.buffer.canvas,
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height,
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    )
  };

  resize = (width, height, ratio) => {
    if (height / width > ratio) {
      this.context.width = width;
      this.context.height = width * ratio;
    } else {
      this.context.width = height / ratio;
      this.context.height = height;
    }
    this.context.imageSmoothingEnabled = false;
  }
  
}
