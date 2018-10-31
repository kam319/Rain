var x = 80;
var y = 60;
var speed = 10;


function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0,0,128);
  currentTime = millis ();
  if (currentTime < 5000) {
     y += speed;
    if (y > height) {
        y = 0;
      }
    stroke(255);
      line(x, y, x, y+20);
      line(2*x, y-30, 2*x, y+20-30);
      line(3*x, y-30, 3*x, y+20+50);
      line(4*x, y-30, 4*x, y+20-10);
  } else {
fill(255, 255, 0);
noStroke()
ellipse(30,30, 30, 30);
}
}








//js stands for java script , set ups draw once while draw puts up 60 frames per second
