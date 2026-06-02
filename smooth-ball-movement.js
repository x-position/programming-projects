//Use arrow keys to move the ball. Code produces nice, smooth movement

//global vars

let x, y; //position x & y
let vx, vy; //velocity x & y
let r = 5;

let gx = 0; //gravity x & y, so it supports different directions
let gy = 0;
let gravityStrength = 0.5; //i like this strength, but depends on where this will be used

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2; //centering it
  vx = random(-2, 2); //to start off, some added random momentum
  vy = random(-2, 2);
}

function draw() {
  noStroke(); //so it doesn't look ugly
  background(80);

  gravityCheck(); //checks the gravity to apply based on key input

  //applies the gravity
  vx += gx;
  vy += gy;

  x += vx;
  y += vy;

  //checking for the walls
  if (x + r > width) {
    x = width - r;
    vx *= -0.8;
  }
  if (x - r < 0) {
    x = r;
    vx *= -0.8;
  }

  if (y + r > height) {
    y = height - r;
    vy *= -0.8;
  }
  if (y - r < 0) {
    y = r;
    vy *= -0.8;
  }

  //adds friction
  vx *= 0.99;
  vy *= 0.99;

  ellipse(x, y, r * 2, r * 2); //draws it
}

function gravityCheck() {
  let left = keyIsDown(LEFT_ARROW); //checking keys
  let right = keyIsDown(RIGHT_ARROW);
  let up = keyIsDown(UP_ARROW);
  let down = keyIsDown(DOWN_ARROW);

  gx = 0; //resetting gravity variables
  gy = 0;

  //binding the keys to the different gravities
  if (left) gx -= 1;
  if (right) gx += 1;
  if (up) gy -= 1;
  if (down) gy += 1;
  
  //this slows it down proportionally, it's way nicer this way
  if (gx !== 0 || gy !== 0) {
    let mag = sqrt(gx * gx + gy * gy);
    gx = (gx / mag) * gravityStrength;
    gy = (gy / mag) * gravityStrength;
  }
}
