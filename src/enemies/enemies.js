import Potato from "./potato.js";
import FirePlant from "./firePlant.js";


export default class Enemies {
  constructor(enemies, pabbot) {
    this.enemies = enemies.map(enemy => {
      switch(enemy.type) {
        case "potato":
          return new Potato(enemy.x, enemy.y, 32, 32, enemy.moveSet);
        case "firePlant":
          return new FirePlant(enemy.x, enemy.y, 32, 32, enemy.moveSet, pabbot);
      }
    })
  } 

  renderAll = (buffer) => {
    this.enemies.forEach(enemy => enemy.render(buffer))    
  }

  moveAll = (deltaTime) => {
    this.enemies.forEach(enemy => enemy.move(deltaTime))
  }

  checkDeath = () => {
    let newEn = []
    this.enemies.forEach((enemy, i) => {
      if (enemy.health > 0) {
        newEn.push(enemy);
      }
    })
    this.enemies = newEn;
  }
}
