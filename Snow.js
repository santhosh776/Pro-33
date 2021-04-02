
class createSnow{
    constructor(x, y) {
        var options = {
            restitution:0.0,
            friction:0.001,
        
        }
        this.snow = Bodies.circle(x, y, 30, options);
        this.r=30
        this.image=loadImage("snow5.webp")
        World.add(world, this.snow);
        
      }
     updateY()
     {
      if(this.snow.position.y > height)
      {
        Matter.Body.setPosition(this.snow,{x:random (0,800),y:random(0,800)})
      }
     }
  showSnow()  
  {
    fill("blue")
    ellipseMode(CENTER);
    imageMode(CENTER)
    image( this.image,this.snow.position.x,this.snow.position.y ,this.r,this.r);
  }  
}

