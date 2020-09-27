class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            isStatic:1.0
        }
        this.body = Bodies.rectangle(200, 200, 100, 10, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255,0,0);
        rectMode(CENTER);
        pop();
      }
}