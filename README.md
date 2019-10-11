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

* Note is built from the MERN (MongoDB, Express, React, Node.js) stack.
* MongoDB holds our node graph. Each node hold information about the other nodes they are connected to, as well as the cost it requires to traverse to these adjacent nodes. Each node also holds coordinates and some crime information about the area.
* Mongoose allows for communication between Express and Mongo. We use Mongoose to create a reachable api route. When the route is called it uses the node graph in the database and Dijkstra's algorithm to find the shortest path when taking into account distance between two nodes and the amount of dangerous crime at each node.
* The user interface is built with React and Redux, so that we only render components that we need. Redux is used in our case to control our UI elements, as SafeWalk does not use front end routing.
* The map is rendered with Mapbox. The routes are generated with a node list created from the backend and the Mapbox API.
* The heatmap and crime information are generated through Mapbox layers.

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
