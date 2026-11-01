function setup() {
  createCanvas(800, 800, WEBGL);
  frameRate(80);
  noFill();
  noStroke(0);
  
}


function draw() {
  background(0);



  noStroke();


 if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
  } else {
    if (mouseY > height/2) {
      fill(0, 0, 255);
    } else {
      noFill();
    }
  
  
 strokeWeight(random(2, 20));
  quad(width/2, height/2, height/4);
}

  function draw() {
  background(200);

describe('A wavy white surface spins around on black canvas.');
}

  // Rotate around the y-axis.
  rotateY(frameCount * 0.02);

  // Draw the quad.
  quad(-300, -300, 0, 300, -300, 0, 300, 300, 200, 300, 300, -200);
}
   

