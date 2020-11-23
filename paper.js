  class paper{
      constructor(x, y, radius){
          var options = {
              'isStatic': false,
              'friction': 0.7,
              'restitution': 0.5,
              'density': 1.2     
          }
          this.body = Bodies.circle(x, y, radius ,options);
          World.add(world, this.body);  
          this.radius = radius;
          this.image = loadImage("paper.png");
      }

      display(){
          var pos = this.body.position;

        
         push();
         translate(pos.x,pos.y);
         rotate(this.body.angle);
         imageMode(CENTER);
         this.image.resize(70, 0);
         image(this.image, 0, 0, pos.radius);
         pop();

      }   
}
