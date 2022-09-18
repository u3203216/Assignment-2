/*
    Paste the code for your week 4 exercise below.
*/

function setup() {
    createCanvas(500, 500);
    noLoop();
  }
  
  function draw() {
    background(220);
    rectMode(CENTER)
    let midx = 250;
    let midy = 250;
     rect(midx,midy,200,25);
    hex(midx-80, midy, 0.35);
    hex(midx+80, midy, 0.35);
      let d = color(90);
  fill(d);
    hex(midx-80, midy, 0.30);
    hex(midx+80, midy, 0.30);
    
  
    function hex(x, y, s) {
    stroke(1);
    strokeWeight(3);
    push();
    translate(x, y);
    scale(s);
    beginShape();
      vertex(-70, -125);
      vertex(80, -125);
      vertex(155, 5);
      vertex(80, 135);
    vertex(-70, 135);
      vertex(-145, 5);
      endShape(CLOSE); 
      pop();
  }
  textSize(55);
    text('A.N', 205, 180);
  textSize(50);
    text('GYM', 193, 355);
    
  }

  

  
  
  
  