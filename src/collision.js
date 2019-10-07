

export default class Collision {
  constructor(width, height, collisionMap, mapWidth, nextLevel) {
    this.gameWidth = width;
    this.gameHeight = height;
    this.collisionMap = collisionMap;
    this.mapWidth = mapWidth;
    this.nextLevel = nextLevel;
  }

  isCollide = (ent) => {
    //if (ent.getTop() < 0) ent.setTop(0);
    if (ent.getLeft() < 0) ent.setLeft(0);
    if (ent.getBottom() > this.gameHeight) {
      ent.setBottom(this.gameHeight)
      ent.isJumping = false;
      ent.isDashing = false;
    };
    if (ent.getRight() > this.gameWidth) ent.setRight(this.gameWidth);


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
        this.collideNextLevel(ent, tileX);
        break;
    }
  }

  collidePlatformTop = (ent, tileTop) => {
    if (ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop) {
      ent.setBottom(tileTop - 0.01);
      ent.speed.y = 0;
      ent.isJumping = false;
      ent.isDashing = false;
      ent.isWalled = false;
      return true;
    }
    return false;
  }

  collidePlatformLeft = (ent, tileLeft) => {
    if (ent.getRight() > tileLeft && ent.getPastRight() <= tileLeft) {
      ent.setRight(tileLeft - 0.01);
      ent.isWalled = true;
      return true;
    }
    return false;
  }

  collidePlatformRight = (ent, tileRight) => {
    if (ent.getLeft() < tileRight && ent.getPastLeft() >= tileRight) {
      ent.setLeft(tileRight + 0.01);
      ent.isWalled = true;
      return true;
    }
    return false;
  }

  collidePlatformBottom = (ent, tileBottom) => {
    if (ent.getTop() < tileBottom && ent.getPastTop() >= tileBottom) {
      ent.setTop(tileBottom + 0.01);
      ent.speed.y = 100;
      return true;
    }
    return false;
  }

  collideInstantDeath = (ent, tileTop) => {
    if (ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop) {
      ent.health -= 3;
      return true;
    }
    return false;
  }

  collideNextLevel = (ent, tileLeft) => {
    if (ent.getRight() > tileLeft && ent.getPastRight() <= tileLeft) { 
      this.nextLevel();
      return true;
    }
    return false;
  }

}


