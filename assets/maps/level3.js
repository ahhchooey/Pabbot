import {collisionMapGenerator} from "./util.js";


const gameMap = {
  "mapArray": [32, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 24, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 8, 8, 8, 8, 9, 0, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 0, 13, 31, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 8, 9, 11, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 26, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 31, 8, 8, 8, 8, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 9, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 32, 26, 14, 14, 15, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 26, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 12, 0, 0, 0, 0, 7, 9, 0, 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 7, 9, 0, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 7, 9, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 0, 0, 0, 10, 0, 0, 0, 7, 26, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 32, 14, 14, 14, 14, 14, 14, 31, 8, 9, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 9, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 10, 0, 0, 7, 8, 32, 15, 0, 0, 12, 0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 7, 32, 15, 0, 0, 0, 1, 3, 0, 0, 7, 8, 9, 0, 0, 0, 12, 0, 0, 0, 7, 9, 0, 0, 0, 0, 7, 9, 0, 0, 7, 8, 9, 0, 0, 0, 10, 0, 0, 0, 7, 26, 5, 6, 0, 0, 7, 9, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 7, 9, 0, 0, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 13, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 11, 0, 0, 0, 0, 0, 0, 0, 7, 26, 5, 6, 0, 0, 0, 0, 0, 0, 4, 5, 5, 5, 6, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 7, 26, 6, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 0, 10, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 26, 6, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 4, 25, 9, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 7, 26, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 7, 8, 9, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 7, 9, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 0, 0, 0, 7, 9, 0, 0, 1, 2, 6, 0, 0, 0, 0, 0, 0, 0, 13, 31, 9, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 15, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 0, 7, 9, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 13, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 7, 9, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 25, 9, 0, 0, 0, 0, 0, 0, 0, 7, 32, 14, 14, 14, 14, 14, 14, 31, 8, 8, 8, 9, 0, 0, 10, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 12, 0, 0, 0, 13, 15, 0, 0, 1, 3, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 7, 8, 8, 8, 9, 0, 0, 0, 0, 11, 12, 0, 0, 0, 0, 0, 7, 9, 0, 0, 13, 14, 14, 31, 9, 0, 0, 0, 0, 4, 5, 5, 6, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 15, 0, 0, 0, 12, 11, 7, 9, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 25, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 7, 9, 0, 0, 0, 0, 0, 12, 12, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 4, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 9, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 26, 2, 2, 3, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 7],
  "tileheight":32,
  "tilewidth":32,
  "width":20,
  "height": 100,
  "enemies": [
    {
      type: "firePlant",
      x: 3 * 32,
      y: 89 * 32
    },
    {
      type: "firePlant",
      x: 7 * 32,
      y: 87 * 32
    },
    {
      type: "firePlant",
      x: 2 * 32,
      y: 83 * 32
    },
    {
      type: "firePlant",
      x: 9 * 32,
      y: 61 * 32
    },
    {
      type: "firePlant",
      x: 1 * 32,
      y: 59 * 32
    },
    {
      type: "firePlant",
      x: 13 * 32,
      y: 52 * 32
    },
    {
      type: "firePlant",
      x: 18 * 32,
      y: 52 * 32
    },
    {
      type: "firePlant",
      x: 1 * 32,
      y: 48 * 32
    },
    {
      type: "firePlant",
      x: 1 * 32,
      y: 40 * 32
    },
    {
      type: "firePlant",
      x: 18 * 32,
      y: 37 * 32
    },
    {
      type: "firePlant",
      x: 15 * 32,
      y: 14 * 32
    },
    {
      type: "firePlant",
      x: 15 * 32,
      y: 11 * 32
    },
    {
      type: "firePlant",
      x: 7 * 32,
      y: 4 * 32
    },
    {
      type: "firePlant",
      x: 10 * 32,
      y: 4 * 32
    },
    {
      type: "firePlant",
      x: 3 * 32,
      y: 20 * 32
    },
  ]
};

gameMap.collisionMap = collisionMapGenerator(gameMap.mapArray);

export default gameMap;
