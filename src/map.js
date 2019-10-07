import TileSheet from "./tileSheet.js";


export default class Map {
  constructor() {
    this.tileSheet = new TileSheet(32, 6);
    this.tileSheet.image.src = "../assets/terrain.png";
  }

  render = (mapArray, colCount, buffer) => {
    for (let i = 0; i < mapArray.length; i++) {
      let value = mapArray[i] - 1;
      let sourceX = (value % this.tileSheet.colCount) * 32;
      let sourceY = Math.floor(value / this.tileSheet.colCount) * 32;
      let destinationX = (i % colCount) * 32;
      let destinationY = Math.floor(i / colCount) * 32;

      buffer.drawImage(
        this.tileSheet.image,
        sourceX,
        sourceY,
        this.tileSheet.tileSize,
        this.tileSheet.tileSize,
        destinationX,
        destinationY,
        this.tileSheet.tileSize,
        this.tileSheet.tileSize
      )
    }
  }

}

