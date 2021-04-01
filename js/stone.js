class stone{
    constructor(x, y, w , h) {
        var options = {
          isStaic:false,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("images/stone.png");
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.width,this.height)
        pop();
      }
}