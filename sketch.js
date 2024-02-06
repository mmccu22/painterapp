let redButton, orangeButton, yellowButton, greenButton,

lightBlueButton, blueButton, purpleButton, brownButton, whiteButton, blackButton;

let currentColor = 'black'; // Default color

 

function setup() {
  
  let cnv = createCanvas(900, 900);

 

  // Create red .button

  redButton = createButton('');

  redButton.position(0,5);

  redButton.size(50,50);

  redButton.style('background-color', 'red');

  redButton.mousePressed(setRedColor);

  // Create orange button

  orangeButton = createButton('');

  orangeButton.position(0,50);

  orangeButton.size(50,50);

  orangeButton.mousePressed(setOrangeColor);

  orangeButton.style('background-color', 'Orange');

// Create yellow button

  yellowButton = createButton('');

  yellowButton.position(0,100);

  yellowButton.size(50,50);

  yellowButton.mousePressed(setYellowColor);

  yellowButton.style('background-color', 'Yellow');

//greenButton

  greenButton = createButton('');

  greenButton.position(0,150);

  greenButton.size(50,50);

  greenButton.mousePressed(setGreenColor);

  greenButton.style('background-color', 'green');

 

  lightBlueButton = createButton('');

  lightBlueButton.position(0,200);

  lightBlueButton.size(50,50);

  lightBlueButton.mousePressed(setlightBlueColor);

  lightBlueButton.style('background-color', color(100,200,300));

 

  blueButton = createButton('');

  blueButton.position(0,250);

  blueButton.size(50,50);

  blueButton.mousePressed(setBlueColor);

  blueButton.style('background-color', 'Blue');

 

  purpleButton = createButton('');

  purpleButton.position(0,300);

  purpleButton.size(50,50);

  purpleButton.mousePressed(setPurpleColor);

  purpleButton.style('background-color', 'purple');

 

  brownButton = createButton('');

  brownButton.position(0,350);

  brownButton.size(50,50);

  brownButton.mousePressed(setBrownColor);

  brownButton.style('background-color', color(119,66,21));

 

  whiteButton = createButton('');

  whiteButton.position(0,400);

  whiteButton.size(50,50);

  whiteButton.mousePressed(setWhiteColor);

  whiteButton.style('background-color', 'white');

 

  blackButton = createButton('');

  blackButton.position(0,450);

  blackButton.size(50,50);

  blackButton.mousePressed(setBlackColor);

  blackButton.style('background-color', 'black');

 

  background(220);

}

 

function touchMoved() {

  stroke(currentColor);
  strokeWeight(12);
  line(mouseX, mouseY, pmouseX, pmouseY);

  return false; // Prevent default

}

 

function setRedColor() {

  currentColor = 'red';

}

 

function setOrangeColor() {

  currentColor = 'orange';

}

 

function setYellowColor() {

  currentColor = 'yellow';

}

 

function setGreenColor() {

  currentColor = 'green';

}

function setlightBlueColor() {

  currentColor = color(100,200,300);

}

function setBlueColor() {

  currentColor = 'Blue';

}

 

function setPurpleColor(){

  currentColor = 'purple';

}

 

function setBrownColor(){

  currentColor = 'brown';

}

 

function setWhiteColor(){

  currentColor = 'white';

}

 

function setBlackColor(){

  currentColor = 'black';

}