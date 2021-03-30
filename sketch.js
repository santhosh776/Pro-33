const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var maxSnow=50;
var snow=[];
function preload() {
backgroundImg=loadImage("snow1.jpg")

}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 300, 50, 50);
  if(frameCount % 150 === 0){
    for(var i=0 ; i<maxSnow ; i++)
    {
          snow.push(new createSnow(random(0,400),random(0,400)))
    }
}
}

function draw() {
  Engine.update(engine);
  
  background(backgroundImg); 

  for (var i=0; i<maxSnow;i++){
    snow[i].showSnow()
    snow[i].updateY()
}

  drawSprites();
}