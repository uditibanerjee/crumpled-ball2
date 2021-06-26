class Paper{
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.radius, this.radius) 
        //ellipseMode(RADIUS);
      // ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
  };


