

export default class Collision {
  constructor(width, height, collisionMap, mapWidth, nextLevel) {
    this.gameWidth = width;
    this.gameHeight = height;
    this.collisionMap = collisionMap;
    this.mapWidth = mapWidth;
    this.nextLevel = nextLevel;
  }

  isCollide = (ent, dead, gameOver) => {
    //if (ent.getTop() < 0) ent.setTop(0);
    if (ent.getLeft() < 0) ent.setLeft(0);
    if (ent.getTop() > this.gameHeight) {
      if (gameOver) gameOver();
    };
    if (ent.getRight() > this.gameWidth) ent.setRight(this.gameWidth);

    if (!dead) {
      let top, left, bottom, right, value;

      top = Math.floor(ent.getTop() / 32);
      left = Math.floor(ent.getLeft() / 32);
      value = this.collisionMap[top * this.mapWidth + left];
      this.collide(value, ent, left * 32, top * 32);

      top = Math.floor(ent.getTop() / 32);
      right = Math.floor(ent.getRight() / 32);
      value = this.collisionMap[top * this.mapWidth + right];
      this.collide(value, ent, right * 32, top * 32);

      left = Math.floor(ent.getLeft() / 32);
      bottom = Math.floor(ent.getBottom() / 32);
      value = this.collisionMap[bottom * this.mapWidth + left];
      this.collide(value, ent, left * 32, bottom * 32);

      bottom = Math.floor(ent.getBottom() / 32);
      right = Math.floor(ent.getRight() / 32);
      value = this.collisionMap[bottom * this.mapWidth + right];
      this.collide(value, ent, right * 32, bottom * 32);
    }
  }

  collide = (value, ent, tileX, tileY) => {
    switch(value) {
      case 1: //only top collision
        this.collidePlatformTop(ent, tileY);
        break;
      case 2: //top and left collision
        if (this.collidePlatformTop(ent, tileY)) return;
        this.collidePlatformLeft(ent, tileX);
        break;
      case 3: //top and right collision
        if (this.collidePlatformTop(ent, tileY)) return;
        this.collidePlatformRight(ent, tileX + 32);
        break;
      case 4: //all four side collision
        if (this.collidePlatformTop(ent, tileY)) return;
        if (this.collidePlatformLeft(ent, tileX)) return;
        if (this.collidePlatformRight(ent, tileX + 32)) return;
        this.collidePlatformBottom(ent, tileY + 32);
        break;
      case 5: //only left collision
        this.collidePlatformLeft(ent, tileX);
        break;
      case 6: //only right collision
        this.collidePlatformRight(ent, tileX + 32);
        break;
      case 7: //only bottom collision
        this.collidePlatformBottom(ent, tileY + 32);
        break;
      case 8: //top, left, and bottom collision
        if (this.collidePlatformTop(ent, tileY)) return;
        if (this.collidePlatformLeft(ent, tileX)) return;
        this.collidePlatformBottom(ent, tileY + 32);
        break;
      case 9: //top, right, and bottom collision
        if (this.collidePlatformTop(ent, tileY)) return;
        if (this.collidePlatformRight(ent, tileX + 32)) return;
        this.collidePlatformBottom(ent, tileY + 32);
        break;
      case 10: //bottom and left collision
        if (this.collidePlatformBottom(ent, tileY + 32)) return;
        this.collidePlatformLeft(ent, tileX);
        break;
      case 11: //bottom and right collision
        if (this.collidePlatformBottom(ent, tileY + 32)) return;
        this.collidePlatformRight(ent, tileX + 32);
        break;
      case 12: //tree stump collision
        if (this.collidePlatformTop(ent, tileY + 16)) return;
        if (this.collidePlatformLeft(ent, tileX)) return;
        this.collidePlatformRight(ent, tileX + 32);
        break;
      case 13:
        this.collideInstantDeath(ent, tileY);
        break;
      case 14:
        this.collideNextLevel(ent, tileX, tileY);
        break;
      case 15:
        this.collideTopSpike(ent, tileY + 32);
        break;
    }
  }

  collidePlatformTop = (ent, tileTop) => {
    if (ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop) {
      ent.setBottom(tileTop - 0.01);
      ent.speed.y = 0;
      if (ent.rightActive) {
        ent.speed.x = ent.maxSpeed;
        ent.facing = "right";
      };
      if (ent.leftActive) {
        ent.speed.x = -ent.maxSpeed;
        ent.facing = "left";
      };
      if (!ent.rightActive && !ent.leftActive) ent.stop();
      ent.isJumping = false;
      setTimeout(() => ent.isDashing = false, 50);
      ent.isWalled = false;
      return true;
    }
    return false;
  }

  collidePlatformLeft = (ent, tileLeft) => {
    if (ent.getRight() > tileLeft && ent.getPastRight() <= tileLeft) {
      ent.setRight(tileLeft - 0.01);
      ent.isWalledRight = true;
      setTimeout(() => ent.isWalledRight = false, 275)
      return true;
    }
    return false;
  }

  collidePlatformRight = (ent, tileRight) => {
    if (ent.getLeft() < tileRight && ent.getPastLeft() >= tileRight) {
      ent.setLeft(tileRight + 0.01);
      ent.isWalledLeft = true;
      setTimeout(() => ent.isWalledLeft = false, 275)
      return true;
    }
    return false;
  }

  collidePlatformBottom = (ent, tileBottom) => {
    if (ent.getTop() < tileBottom && ent.getPastTop() >= tileBottom) {
      ent.setTop(tileBottom + 0.01);
      ent.speed.y = 50;
      return true;
    }
    return false;
  }

  collideInstantDeath = (ent, tileTop) => {
    if (ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop) {
      ent.hitSound.sound.cloneNode(true).play();
      ent.health -= 3;
      return true;
    }
    return false;
  }
  
  collideTopSpike = (ent, tileBottom) => {
    if (ent.getTop() < tileBottom && ent.getPastTop() >= tileBottom) {
      ent.hitSound.sound.cloneNode(true).play();
      ent.health -= 1;
      ent.lastHit = 100;
      return true;
    }
    return false;
  }

  collideNextLevel = (ent, tileLeft, tileTop) => {
    if ((ent.getRight() > tileLeft && ent.getPastRight() <= tileLeft)
      || (ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop)) { 
      this.nextLevel();
      return true;
    }
    return false;
  }

}


