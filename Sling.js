class Sling {
    constructor (bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
            
        }
        this.sling = Constraint.create (options);
        this.pointB = pointB
       World.add(world, this.sling)

    }
    fly(){
        this.sling.bodyA = null
    }
    display () {
        if(this.sling.bodyA !== null){

        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight (3.5)
        line (pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
}