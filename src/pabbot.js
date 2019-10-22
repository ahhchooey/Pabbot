import Entity from "./entity.js";
import TileSheet from "./tileSheet.js";
import Sound from "./sound.js";


export default class Pabbot extends Entity {
  constructor(x, y, width, height, mute) {
    super(x, y, width, height)
    this.tileSheet = new TileSheet(32, 25);
    this.tileSheet.image.src = "../assets/Pabbot.png";

    this.dashSound = new Sound("../assets/sound/spin.mp3", 0.0);
    this.hitSound = new Sound("../assets/sound/hit.mp3", 0.0);
    this.tackleSound = new Sound("../assets/sound/tackle.mp3", 0.0);

    this.checkMute = mute;
    this.invincible = false;

    document.addEventListener("keydown", (e) => {
      if (e.key === "i") this.toggleInvincible();
    })
  }

  health = 3;

  speed = {
    x: 0,
    y: 0
  };
  maxSpeed = 50;
  dashSpeed = 75;
  jumpHeight = 200;
  gravity = 200;
  terminalVelocity = 1000;

  isJumping = false;
  isDashing = false;
  isWalledRight = false;
  isWalledLeft = false;
  upActive = false;
  leftActive = false;
  downActive = false;
  rightActive = false;
  facing = "right";
  lastHit = 0;

  standRight = 0;
  standLeft = 32;
  runningRight = [64, 64, 64, 64, 64, 64, 128, 128, 128, 128, 128, 128];
  runningLeft = [96, 96, 96, 96, 96, 96, 160, 160, 160, 160, 160, 160];
  jumpingRight = 192;
  fallingRight = 256;
  jumpingLeft = 224;
  fallingLeft = 288;
  dashingRight = [640, 640, 640, 640, 672, 672, 672, 672, 704, 704, 704, 704, 736, 736, 736, 736];
  dashingLeft = [736, 736, 736, 736, 704, 704, 704, 704, 672, 672, 672, 672, 640, 640, 640, 640];

  healthBall = 0;

  render = (buffer) => {
    let sprite;
    let hold;
    switch(true) {
      case (this.facing === "left" && this.isDashing):
        hold = this.dashingLeft.shift();
        this.dashingLeft.push(hold);
        sprite = hold;
        break;
      case (this.facing === "right" && this.isDashing):
        hold = this.dashingRight.shift();
        this.dashingRight.push(hold);
        sprite = hold;
        break;

      case (this.facing === "right" && !this.isJumping && this.speed.x === 0):
        sprite = this.standRight;
        if (this.lastHit > 0 || this.health <= 0) sprite += 320;
        break;
      case (this.facing === "right" && !this.isJumping && this.speed.x !== 0): 
        hold = this.runningRight.shift();
        this.runningRight.push(hold);
        sprite = hold;
        if (this.lastHit > 0 || this.health <= 0) sprite += 320;
        break;
      case (this.facing === "right" && this.isJumping  && this.speed.y < 0):
        sprite = this.jumpingRight;
        if (this.lastHit > 0 || this.health <= 0) sprite += 320;
        break;
      case (this.facing === "right" && this.isJumping && this.speed.y > 0):
        sprite = this.fallingRight;
        if (this.lastHit > 0 || this.health <= 0) sprite += 320;
        break;

      case (this.facing === "left" && !this.isJumping && this.speed.x === 0):
        sprite = this.standLeft;
        if (this.lastHit > 0 || this.health <= 0) sprite += 320;
        break;
      case (this.facing ==="left" && !this.isJumping && this.speed.x !== 0):
        hold = this.runningLeft.shift();
        this.runningLeft.push(hold);
        sprite = hold;
        if (this.lastHit > 0 || this.health <= 0) sprite += 320;
        break;
      case (this.facing === "left" && this.isJumping && this.speed.y < 0):
        sprite = this.jumpingLeft;
        if (this.lastHit > 0 || this.health <= 0) sprite += 320;
        break;
      case (this.facing === "left" && this.isJumping && this.speed.y > 0):
        sprite = this.fallingLeft;
        if (this.lastHit > 0 || this.health <= 0) sprite += 320;
        break;
    }


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

  renderHealth = (buffer, x, y) => {
    if (this.invincible) {
      buffer.fillText("INVINCIBLE", 20 + x, 40 + y)
    } else {
      for (let i = 0; i < this.health; i++) {
        buffer.drawImage(
          this.tileSheet.image,
          this.healthBall,
          0,
          this.width,
          this.height,
          (20 + 23 * i) + x,
          20 + y,
          this.width - 10,
          this.height - 10
        )
      }
    }
    let moot = (this.checkMute()) ? "M: Sound Off" : "M: Sound On"
    buffer.fillText(moot, 578 + x, 10 + y)
  }

  toggleInvincible = () => {
    if (this.invincible) {
      this.invincible = false;
    } else {
      this.invincible = true;
    }
  }

  move = (timeDelta) => {
    this.pastPos.x = this.position.x;
    this.pastPos.y = this.position.y;

    this.position.x += this.speed.x / timeDelta;
    this.position.y += this.speed.y /timeDelta;
    if (this.speed.y <= this.terminalVelocity) {
      this.speed.y += this.gravity / timeDelta;
    }
  }

  stop = () => {
    this.speed.x = 0;
  }

  moveLeft = () => {
    this.speed.x = -this.maxSpeed;
  }

  moveRight = () => {
    this.speed.x = this.maxSpeed;
  }

  jump = () => {
    if (!this.isJumping) {
      this.speed.y = -this.jumpHeight;
      this.isJumping = true;
    }
  }

  cancelJump = () => {
    if (this.isJumping) {
      if (this.speed.y < 0) {
        this.speed.y = 0;
      }
    }
  }

  wallJump = () => {
    if (this.isWalledRight && this.isJumping) {
      this.isWalled = false;
      this.speed.y = -this.jumpHeight;
      this.speed.x = -this.maxSpeed;
      this.facing = "left";
    } else if (this.isWalledLeft && this.isJumping) {
      this.isWalled = false;
      this.speed.y = -this.jumpHeight;
      this.speed.x = this.maxSpeed;
      this.facing = "right"
    }
  }

  dash = () => {
    if ((this.isJumping && !this.isDashing) || (!this.isDashing && this.speed.y > 50)) {
      if (!this.checkMute()) this.dashSound.sound.cloneNode(true).play();
      this.isDashing = true;
      this.speed.x = 0;
      this.speed.y = -1;
      if (this.upActive) this.speed.y -= this.dashSpeed;
      if (this.leftActive) this.speed.x -= this.dashSpeed;
      if (this.downActive) this.speed.y += this.dashSpeed;
      if (this.rightActive) this.speed.x += this.dashSpeed;
    }
  }

  danger = (enemies) => {
    this.lastHit--;
    enemies.forEach(enemy => {
      if (this.isDashing && this.getDistance(enemy) < 30 && enemy.health > 0) {
        if (!this.checkMute()) this.tackleSound.sound.cloneNode(true).play();
        enemy.health--;
        this.speed.x = -this.speed.x * 0.3;
        this.speed.y = -100;
        return;
      }
      if (this.getDistance(enemy) < 30 && this.lastHit <= 0 && enemy.health > 0) {
        if (this.isDashing) {
          if (!this.checkMute()) this.tackleSound.sound.cloneNode(true).play();
          enemy.health--;
        } else {
          if (!this.checkMute()) this.hitSound.sound.cloneNode(true).play();
          this.lastHit = 100;
          if (!this.invincible) this.health--;
        }

        if (this.speed.x === 0) {
          this.speed.y -= 100;
          this.speed.x = enemy.speed.x;
        } else {
          this.speed.x = -this.speed.x * 0.3;
          this.speed.y = -100;
        }
      }
    })
  }

}
