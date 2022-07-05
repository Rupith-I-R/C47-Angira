const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;
var ground;
var pins  = []
var balls = [];
var slots = [];
var divHeight = 150;
var count = 0;
var ball;
//var gameState = "start"

function setup() {
  createCanvas(500, 500);
  engine = Engine.create()
  world = engine.world;
  ground = new Ground(0, 490, 500, 10)


 //slots

 for(var s = 0; s <= width; s += 100){
  slots.push(new Slots(s, height-divHeight/2+5, 10, divHeight-15))
 }

 for(var p = 45; p <= width; p += 50){
  pins.push(new Pin(p, 75))
 }

 for(var p = 19; p <= width; p += 50){
  pins.push(new Pin(p, 135))
 }

 for(var p = 45; p <= width; p += 50){
  pins.push(new Pin(p, 195))
 }

 for(var p = 19; p <= width; p += 50){
  pins.push(new Pin(p, 255))
 }

 
  
}

function draw() {
  background("#ed841a");
 // image();

  textSize(50)
  text("5", 35, 450)
  text("10", 120, 450)
  text("15", 220, 450)
  text("25", 325, 450)
  text("30", 423, 450)
  
  Engine.update(engine);
  ground.display();
  

  for(var i = 0; i < pins.length; i ++){
    pins[i].display();
  }

  if(frameCount % 180 === 0){
    balls.push(new Ball(random(width/2-90, width/2+90), 10))
  }

  for(var b = 0; b < balls.length; b++){
    balls[b].show();
  }
  
  


  for(var s = 0; s < slots.length; s ++){
    slots[s].display();
  }

  
}



/*function diskDrop(){
  if(gameState !== "end"){
    count++
    ball = new Ball(mouseX, 10, 15.5, 15.5)
  }
}*/

