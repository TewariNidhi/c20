var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="blue";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x-fixedRect.x)
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 
  && fixedRect.x-movingRect.x<(movingRect.width/2+fixedRect.width/2) ){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}