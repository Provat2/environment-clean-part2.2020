class basket{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            restititution: 1,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
    }

        display(){
            var pos = this.body.position;

            imageMode(CENTER);
            image(this.image, 900, 450, 220, 100);
        }
    
}