/*
    Paste the code for your week 3 exercise below.
*/
var hw, hh, shapeColour;
let red = 255;
let green = 255;
let blue = 255;
let shape = {}; 

function setup() {
  createCanvas(500, 500);
background(0);
  
  shapeColour = color(343, 100, 53);
  
  hw = width/2;
  hh = height/2;
  
  shape.x = hw;
  shape.y = hh/3;
  shape.size = 50;
  shape.fillColour = shapeColour;
  shape.moveIncrement = 5;
}

function draw() {
  
  noStroke();
  fill(red, green, blue, 100);
  circle(mouseX, mouseY, 24);
  rect(0, 0, 500, 250);
      fill(red, green, blue);
  fill(shape.fillColour);
  circle(shape.x, shape.y, shape.size);


}
function mousePressed() {
  red = random(0, 255);
  green = random(0, 255);
  blue = random(0, 255);
  
}

function keyPressed(){
    if (keyIsDown(UP_ARROW)){
    shape.y -= shape.moveIncrement;
  }
    if (keyIsDown(DOWN_ARROW)){
    shape.y += shape.moveIncrement;
  }
    if (keyIsDown(LEFT_ARROW)){
    shape.x -= shape.moveIncrement;
  }
    if (keyIsDown(RIGHT_ARROW)){
    shape.x += shape.moveIncrement;
  }
}
