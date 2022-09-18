/*
    Paste the code for your week 5 exercise below.
*/

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
    fill(50, 300, 100);

  
  //loop
for(i = 0; i < 30; i++){
        for(j=0; j<10; j++){
            ellipse(i*27, j*27, 40)}
  
    }
  {
  //if
    if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) {
    fill(150, 300, 10);
  }
    else {
    fill(220);
  }
    rect(200, 200, 100, 100);
  } 
  
  //arrays

  var words = ["left", "right"];
  fill(255);
  
 if (mouseX < 250) {
      textSize(35);
  text(words[0], 20, 400);
  }
  else if (mouseX > 250) {
      textSize(35);
  text(words[1], 400, 400);
  }
  
}