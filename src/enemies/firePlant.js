import Entity from "../entity.js";
import Fireball from "./fireBall.js";
import TileSheet from "../tileSheet.js";


export default class FirePlant extends Entity {
  constructor(x, y, width, height, moveSet, pabbot) {
    super(x, y, width, height, moveSet);
    this.health = 1;
    this.tileSheet = new TileSheet(32, 12);
    this.tileSheet.image.src = "../assets/FirePlant.png";

    this.pabbot = pabbot;

    this.moveSet = moveSet || ["fire", "stand", "stand", "stand"];

    this.fireballs = [];
  }

  speed = {
    x: 0,
    y: 0
  }
  maxSpeed = 0;
  gravity = 200;
  terminalVelocity = 1000;

  facing = "left";
  stepCount = 0;
  firingRight = false;
  firingLeft = false;

  standLeft = [0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32];
  standRight = [192, 192, 192, 192, 192, 192, 192, 192, 224, 224, 224, 224, 224, 224, 224, 224];
  fireLeftReset = [64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 
    96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 
    128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128];
  fireLeft = [64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 
    96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 
    128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128];
  fireRightReset = [256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256,
    288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288 ,288, 288, 288, 288,
    320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320];
  fireRight = [256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256,
    288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288 ,288, 288, 288, 288,
    320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320];

  death = 160;

  render = (buffer) => {
    let sprite;
    let hold;
    switch(true) {
      case (this.health <= 0):
        sprite = this.death;
        break;
      case (this.firingRight):
        hold = this.fireRight.shift();
        this.fireRight.push(hold);
        sprite = hold;
        break;
      case (this.firingLeft):
        hold = this.fireLeft.shift();
        this.fireLeft.push(hold);
        sprite = hold;
        break;
      case (this.facing === "right"):
        hold = this.standRight.shift();
        this.standRight.push(hold);
        sprite = hold;
        break;
      case (this.facing === "left"):
        hold = this.standLeft.shift();
        this.standLeft.push(hold);
        sprite = hold;
        break;
    }

    this.fireballs.forEach(fb => fb.move());
    this.fireballs.forEach(fb => fb.hit());
    this.fireballs = this.fireballs.filter(fb => fb.active);
    this.fireballs.forEach(fb => fb.render(buffer));

    buffer.drawImage(
      this.tileSheet.image,
      sprite,
      0,
      this.width,
      this.height,
      Math.round(this.position.x),
      Math.round(this.position.y),
      this.width,
      this.height
    )
  }

  move = () => {
    this.facePabbot(this.pabbot.position.x);
    this.stepCount--;
    if (this.stepCount <= 0) {
      this.stepCount = 45;
      this.moveSet.push(this.moveSet.shift());
    }
    switch(this.moveSet[0]) {
      case "fire":
        this.fire();
        break;
      case "stand":
        this.firingLeft = false;
        this.firingRight = false;
        this.fireLeft = this.fireLeftReset;
        this.fireRight = this.fireRightReset;
        return;
    }
  }

  fire = () => {
    let pabbotX = this.pabbot.position.x;
    let pabbotY = this.pabbot.position.y;

    if (this.health > 0 
      && Math.abs(this.pabbot.position.x - this.position.x) < 350
      && Math.abs(this.pabbot.position.y - this.position.y) < 100) {
      
      if (this.facing === "left") {
        this.firingLeft = true;
        if (this.fireLeft[0] === 128
          && this.fireLeft[this.fireLeft.length - 1] === 96) {
          let fb = new Fireball(
            this.position.x, 
            this.position.y + 10, 
            8, 
            8, 
            null, 
            -5, 
            0, 
            this.pabbot
          );
          this.fireballs.push(fb);
        }
      } else if (this.facing === "right") {
        this.firingRight = true;
        if (this.fireRight[0] === 320
          && this.fireRight[this.fireRight.length - 1] === 288) {
          let fb = new Fireball(
            this.position.x + 32, 
            this.position.y + 10, 
            8, 
            8, 
            null, 
            5, 
            0, 
            this.pabbot
          );
          this.fireballs.push(fb);
        }
      }

    } else {
      this.firingRight = false;
      this.firingLeft = false;
      this.fireLeft = this.fireLeftReset;
      this.fireRight = this.fireRightReset;
    }
  }

  facePabbot = (pabbotX) => {
    if (pabbotX < this.position.x) {
      this.facing = "left";
    } else {
      this.facing = "right";
    }
  }
  
}

