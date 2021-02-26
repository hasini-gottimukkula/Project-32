class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 1.2,
            length: 250
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }
    attach(body) {
        this.sling.bodyA = body;
    }

    fly() {
        this.sling.bodyA = null;
    }
    display() {
        if (this.sling.bodyA) {
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(255);
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }

    }
}