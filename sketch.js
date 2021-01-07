var fixedRect , movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 100, 50);
  fixedRect.shapeColor = "green";
  movingRect=createSprite(600,300,50,100);
  movingRect.shapeColor = "green";

  obj1 = createSprite(100,100,80,30)
  obj1.shapeColor = "white";

  obj2 = createSprite(100,500,80,30)
  obj2.shapeColor = "orange";
  obj2.velocityX = 2;

  obj3 = createSprite(500,500,80,30)
  obj3.shapeColor = "green";
  obj3.velocityX = -2;
}

function draw() {
  background("lightBlue");
  movingRect.x = mouseX;
  movingRect.y = mouseY; 
  
  console.log(fixedRect.x);

  if(isTouching(movingRect,obj2)){
    movingRect.shapeColor = "pink";
    obj2.shapeColor = "pink";
  }
  else{
    movingRect.shapeColor = "blue";
    obj2.shapeColor = "blue";
  }
   
  bounceOff(obj2,obj3);

  drawSprites();
}