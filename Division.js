class Division {
    constructor(x,y,w,h){
        var options = {

        isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        //this.x = x;
        //this.y = y;
        this.w = w;
        this.h = h; 
       
        World.add(world, this.body);
    
    }
    display() {
       var p = this.body.position;
       rectMode(CENTER);
       fill("green");
       rect(p.x, p.y, this.w, this.h);
    }
};