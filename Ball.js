class Ball{
    constructor(x,y,r){
        var options={
            'frictionAir':0.005,
            'density':1.5
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.radius=r;
        World.add(world,this.body);
    }

    display(){
        var angle=this.body.angle;
        push();
        fill("black");
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}