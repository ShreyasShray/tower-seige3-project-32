class Polygon{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 1,
            density: 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("polygon.png");
        this.radius = radius*2.5;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        imageMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(angle*57) 
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}