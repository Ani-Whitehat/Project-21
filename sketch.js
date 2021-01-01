var wall,thickness;
var bulletRightEdge,wallLeftEdge;
var bullet,speed,weight;
var damage

function setup() {
  createCanvas(1600,400);

  speed = random(233,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1250,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background("blue");  
  



  if(hasCollided (bullet,wall))
  {
    bullet.velocityX = 0;

     damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage > 10)
    {
    wall.shapeColor=color(255,0,0);
    }
    
    if(damage < 10)
    {
      wall.shapeColor=color(0,255,0);
    }

  }
  
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}