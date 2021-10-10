class Bob{
    constructor (x,y,radius){
        var options = {
            isStatic: true,
            'restitutions':0.3,
            friction:0.5,
            density:1.2,

        }
        this.body = Bodies.circle(x,y,radius,options,);
        this.radius=radius;4
        World.add(world,this.body);

       
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        circle(pos.x,pos.y,this.radius);
      
};
}