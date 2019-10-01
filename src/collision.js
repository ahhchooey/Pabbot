

export default class Collision {
  constructor(width, height, collisionMap) {
    this.gameWidth = width;
    this.gameHeight = height;
    this.collisionMap = collisionMap;
  }

  isCollide = (ent) => {
    if (ent.getTop() < 0) ent.setTop(0);
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
    value = this.collisionMap[top * 20 + left];
    this.collide(value, ent, left * 32, top * 32);

    top = Math.floor(ent.getTop() / 32);
    right = Math.floor(ent.getRight() / 32);
    value = this.collisionMap[top * 20 + right];
    this.collide(value, ent, right * 32, top * 32);

    left = Math.floor(ent.getLeft() / 32);
    bottom = Math.floor(ent.getBottom() / 32);
    value = this.collisionMap[bottom * 20 + left];
    this.collide(value, ent, left * 32, bottom * 32);

    bottom = Math.floor(ent.getBottom() / 32);
    right = Math.floor(ent.getRight() / 32);
    value = this.collisionMap[bottom * 20 + right];
    this.collide(value, ent, right * 32, bottom * 32);
  }

  collide = (value, ent, tileX, tileY) => {
    switch(value) {
      case 1:
        this.collidePlatformTop(ent, tileY);
        break;
      case 2:
        if (this.collidePlatformTop(ent, tileY)) return;
        this.collidePlatformLeft(ent, tileX);
        break;
      case 3:
        if (this.collidePlatformTop(ent)) return;
        this.collidePlatformRight(ent, tileX + 32);
        break;
      case 4:
        this.collidePlatformTop(ent, tileY);
        this.collidePlatformBottom(ent, tileY + 32);
        break;
    }
  }

  collidePlatformTop = (ent, tileTop) => {
    console.log("tileTop", tileTop);
    console.log("bottom", ent.getBottom());
    if (ent.getBottom() > tileTop && ent.getPastBottom() <= tileTop) {
      ent.setBottom(tileTop - 0.01);
      ent.isJumping = false;
      ent.isDashing = false;
      return true;
    }
    return false;
  }

  collidePlatformLeft = (ent, tileLeft) => {
    if (ent.getRight() > tileLeft && ent.getPastRight() <= tileLeft) {
      console.log("left")
      ent.setRight(tileLeft -0.01);
      ent.speed.x = 0;
      return true;
    }
    return false;
  }

  collidePlatformRight = (ent, tileRight) => {
    if (ent.getLeft() < tileRight && ent.getPastLeft() <= tileRight) {
      ent.setLeft(tileRight + 0.01);
      return true;
    }
    return false;
  }

  collidePlatformBottom = (ent, tileBottom) => {
    if (ent.getTop() < tileBottom && ent.getPastTop() <= tileBottom) {
      ent.setTop(tileBottom + 0.01);
      ent.speed.y = 500;
      return true;
    }
    return false;
  }

}


