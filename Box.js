class Box{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
    }

    display(color){
        if (this.body.speed<3){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle*57);
        rectMode(CENTER)
        fill(color);
        rect(0, 0, this.width, this.height);
        pop();
        }else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            if(this.Visiblity < 0 && this.Visiblity > - 105){
                score++;
            }
            pop();
        }
        
    }
}