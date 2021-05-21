class Launcher{
    constructor(a,b){
        var options = {
            bodyA: a,
            pointB: b,
            length:40,
            stiffness:0.004
        }
        this.pointB=b;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA=null;
    }

    attach(body){
        this.launcher.bodyA=body;
    }

    display(){
        if(this.launcher.bodyA){
        strokeWeight(5);
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}