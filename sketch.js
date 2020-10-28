var bullet,wall;
var speed,weight;
var bulletRightEdge,wallLeftEdge;
var thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
  bullet=createSprite(50,200,75,10);
  bullet.shapeColor=color("white")
  bullet.velocityX=-3;
  bullet.weight=weight;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color("grey")
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
}

function draw() {
  
  background("black");  
  
  drawSprites();
  car.depth=wall.depth+1;
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
 
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  
 
}

function hasCollided(bulletRightEdge,wallLeftEdge){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
return false;
} 
