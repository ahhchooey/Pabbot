

export default class Display {
  constructor(context, width, height, pabbot, map, mapWidth, camera, dW, dH) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.pabbot = pabbot;
    this.map = map;
    this.mapWidth = mapWidth;
    this.camera = camera;
    this.displayWidth = dW;
    this.displayHeight = dH;

    this.buffer = document.createElement("canvas").getContext("2d");
    this.buffer.canvas.width = width;
    this.buffer.canvas.height = height;
  }

  drawPabbot = () => {
    this.pabbot.render(this.buffer);
  }

  drawMap = (data) => {
    this.map.render(data, this.mapWidth, this.buffer);
  }

  fill = (color) => {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(0, 0, this.width, this.height)
  };

  render = () => {
    let startCol = Math.floor(this.camera.x);
    let startRow = Math.floor(this.camera.y);

    this.context.drawImage(
      this.buffer.canvas,
      startCol,
      startRow,
      this.displayWidth,
      this.displayHeight,
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
  }
  
}

