import Potato from "./potato.js";
import FirePlant from "./firePlant.js";


export default class Enemies {
  constructor(enemies, pabbot, checkMute) {
    this.enemies = enemies.map(enemy => {
      switch(enemy.type) {
        case "potato":
          return new Potato(enemy.x, enemy.y, 32, 32, enemy.moveSet);
        case "firePlant":
          return new FirePlant(enemy.x, enemy.y, 32, 32, enemy.moveSet, pabbot, checkMute);
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
      if (enemy.health <= 0 && enemy.deathCounter === undefined) enemy.deathCounter = 100;
      if (enemy.deathCounter) enemy.deathCounter--;
      if (enemy.health > 0 || enemy.deathCounter > 0) {
        newEn.push(enemy);
      }
    })
    this.enemies = newEn;
  }
}
