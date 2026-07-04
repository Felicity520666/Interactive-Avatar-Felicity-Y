/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;
let toggle = false;

/* SETUP RUNS ONCE */
function setup() {
    createCanvas(400, 400);
    background('#ccfff2');
    stroke('#29ffca');
    strokeWeight(3);
}

/* DRAW LOOP REPEATS */
function draw() {
    angleMode(DEGREES);
    rectMode(CENTER);

    // Body
    fill('#d665ff')
    ellipse(width/2, 380, 200, 250);

    // Face
    stroke(0);
    strokeWeight(2);
    fill('#fff4f4');
    ellipse(width/2, height/2, 175, 200);

    // Cheeks
    fill('#fcc8e7')
    ellipse(130, 200, 40, 30);
    ellipse(270, 200, 40, 30);

    // Eyes
    if (toggle == true) {
        // Eyes closed
        fill(0);
        ellipse(170, 170, eyeWidth, eyeHeight/8);
        ellipse(230, 170, eyeWidth, eyeHeight/8);
    } else if (toggle == false){
        // Eyes open
        fill('white');
        ellipse(170, 170, eyeWidth, eyeHeight);
        ellipse(230, 170, eyeWidth, eyeHeight);
        fill(0);
        ellipse(170, 170, pupilWidth, pupilHeight);
        ellipse(230, 170, pupilWidth, pupilHeight);
    }

    // Mouth
    fill('#ff7c7c');
    arc(200, 230, 50, 50, 0, 180);

    // Nose
    fill('#fff3f3')
    triangle(190, 220, 200, 200, 210, 220);

   // Bangs
    fill('black');
    line(130, 100, 150, 150);
    line(140, 100, 160, 150);
    line(150, 100, 170, 150);
    line(160, 100, 180, 150);
    line(170, 100, 190, 150);
    line(180, 100, 200, 150);
    line(190, 100, 210, 150);
    line(200, 100, 220, 150);
    line(210, 100, 230, 150);
    line(220, 100, 240, 150);
    line(230, 100, 250, 150);
    line(240, 100, 260, 150);

    // Hair
    fill('black');
    arc(200, 100, 105, 130, 180, 360);
  
    //Bow
    fill('#fbe057')
    triangle(190, 100, 100, 150, 140, 80);
    triangle(210, 100, 300, 150, 260, 80);
    ellipse(200, 100, 23, 20);

    // Text
    fill('#ed96ff');
    textSize(15);
    text('"We get to decide \nwhat our story is!"', 20, 20);

    // Directions for mouse press
    fill('#ffb6e1');
    textSize(15);
    text('Click to \ninteract with \nmy avatar!', 310, 350);
}

/* FUNCTIONS */
function mousePressed() {
    toggle = !toggle;
}