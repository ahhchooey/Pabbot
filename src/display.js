

export default class Display {
  constructor(context, width, height, pabbot, map) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.pabbot = pabbot;
    this.map = map;

    this.buffer = document.createElement("canvas").getContext("2d");
    this.buffer.canvas.width = width;
    this.buffer.canvas.height = height;
  }

  drawRectangle = (x, y, width, height, color) => {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
  };

  drawPabbot = () => {
    this.pabbot.render(this.buffer);
  }

  drawMap = (data) => {
    this.map.render(data, 20, this.buffer);
  }

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
      this.context.canvas.width = width;
      this.context.canvas.height = width * ratio;
    } else {
      this.context.canvas.width = height / ratio;
      this.context.canvas.height = height;
    }
    this.context.imageSmoothingEnabled = false;
  }
  
}

