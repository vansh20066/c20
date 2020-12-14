var react1,rect2;




function setup() {
  createCanvas(800,400);
 rect1= createSprite(400, 200, 50, 50);
rect1.shapeColor="red";

rect2 = createSprite(200,200,40,40);
rect2.shapeColor="green";
rect1.debug=true;
}


function draw() {
  background(0);  

  rect1.x=World.mouseX;
  rect1.y=World.mouseY;

  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect2.x-rect1.x<rect2.width/2+rect1.width/2&&
    rect1.y-rect2.y<rect1.height/2+rect2.height/2&&rect2.y-rect1.y<rect2.height/2+rect1.height/2
    ){
    rect1.shapeColor="blue";
    rect2.shapeColor="blue";
  }
  else{

    rect1.shapeColor="red";
    rect2.shapeColor="green";
  }
  drawSprites();

}