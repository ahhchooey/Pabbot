import Potato from "./potato.js";


export default class Enemies {
  constructor(enemies) {
    this.enemies = enemies.map(enemy => {
      switch(enemy.type) {
        case "potato":
          return new Potato(enemy.x, enemy.y, 32, 32, enemy.moveSet);
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
