var car,wall;
var speed,weight;
var deform;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColour = color(225);

  wall = createSprite(1400,200,60,height/2);

}

function draw() {
  background(0); 
  
  if(wall.x - car.x < car.width + wall.width / 2){

   deform = 0.5 * weight * speed * speed / 22500

  if(deform > 180){

  car.shapeColor = color(255,0,0);

  }

  if(deform < 100){

  car.shapeColor = color(0,255,0);

  }

  if(deform < 180 && deform > 100){

    car.shapeColor = color(230,230,0);

  }

  if(car.isTouching(wall)){

  car.velocityX = 0;

  }

  car.depth = wall.depth + 1;

  }

  drawSprites();
}