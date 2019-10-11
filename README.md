# [Pabbot](https://ahhchooey.github.io/Pabbot/dist/)

------

### Tech Stack

* Javascript
* Canvas

------

This is Pabbot.

Pabbot is a platforming game where you play as Pabbot. Pabbot is creature that is just trying to get home. Play as Pabbot to help him traverse the dangerous terrains to make to home. Pabbot can jump, wall hop, and spin to attack enemies. He has three health to make it all the way through. Make sure Pabbot gets home safe.

------

![Screenshot of Pabbot](https://github.com/ahhchooey/Pabbot/blob/master/images/pabbot_screenshot.png)
Pabbot. Pabbot. Pabbot.

![Screenshot of Pabbot Spinning](https://github.com/ahhchooey/Pabbot/blob/master/images/pabbot_spinning.png)
Pabbot can spin to eliminate enemies.

![Screenshot of Pabbot Wall Hopping](https://github.com/ahhchooey/Pabbot/blob/master/images/pabbot_wallhopping.png)
Pabbot can hop off of walls to get to difficult to reach terrain.


### How to Play

------

Playing Pabbot is easy. You can use WASD or the Arrow Keys to move Pabbot around. Spacebar or J is used for jumping. When Pabbot is jumping he can spin by pressing K or Shift, and he will continue to spin until he touches the ground again. While spinning, Pabbot is invulnerable and he is able to eliminate enemies. Pabbot can also jump off of walls, but pressing J or Spacebar when he jumps at a wall.

A thing to pay attention to is the terrain. Pabbot cannot fly, cannot swim, cannot survive falling on spikes, and cannot handle lava.


### How it Works

------

* Pabbot is built with vanilla Javascript in order to have a full package that doesn't rely on external dependencies.
* The entire game and menu is build with HTML's Canvas API. Canvas and RequestAnimationFrame build the engine that the entire game runs on.
* The map and the collision system is built upon a grid of tiles. This grid is represented by a numbered array, where specific tiles render specific sprites and specific tiles hold a certain collision property. This system allows for the modular and quick building of maps.
* Every unit in Pabbot is built off of the Entity prototype. Allowing for modular and succinct interaction between the player and all enemies.

------


### Example Code

------

An example of one of the tile collision functions that allow for a tile based map system.
```js
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
    ent.isDashing = false;
    ent.isWalled = false;
    return true;
  }
  return false;
}
```

An example of the function that firePlants use to fire fireballs at Pabbot.
```js
...
if (this.health > 0 
  && Math.abs(this.pabbot.position.x - this.position.x) < 350
  && Math.abs(this.pabbot.position.y - this.position.y) < 100) {
  let vertFactor = (this.pabbot.position.y >= this.position.y) ? 5 : -5;
  
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
        -5*(Math.abs(this.position.x - this.pabbot.position.x) 
          / this.getDistance(this.pabbot)), 
        vertFactor*(Math.abs(this.position.y - this.pabbot.position.y) 
          / this.getDistance(this.pabbot)), 
        this.pabbot
      );
      this.fireballs.push(fb);
    }
  }
  ...
```
