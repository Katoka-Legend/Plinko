const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rods = []
var balls = []
var divisions = []
var exist = false;

function setup() {
  engine = Engine.create();
  createCanvas(800, 800);
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  //  for (var k = 0; k <=width; k = k + 80) {
  //    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  //  }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       rods.push(new Rod(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       rods.push(new Rod(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       rods.push(new Rod(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       rods.push(new Rod(j,375));
      }

   for(var i = 10;i < 800;i=i+80 ){
      divisions.push(new Division(i,700,10,300))
   }
      
    

    
}

function draw() {
  background(0)
  Engine.update(engine);

  for(var k = 0; k < rods.length; k++) {
       rods[k].display();
    }
  if(frameCount % 100 == 0){
      ball = new Ball(Math.round(random(200,600)),10,10)
      balls.push(ball)
  }  
  
  for(i = 0;i<balls.length;i++){
    balls[i].display()
  }
  for(i = 0;i<divisions.length;i++){
    divisions[i].display()
  }
}