
let bgcolor = "#02f886"
var self = [0, 0, 0],
  cam,
  state = {
    distance: 100,
    center: [0, 0, 0],
    rotation: [1, 0, 0, 0],
  };


let iterator1 = 1;
let iterator2 = 1;

let gambo;
let pistillo;
let foglia;
let foglia1;
let foglia2;
let foglia3;
let fiore;
let fiore1;
let fiore2;
let fiore3;

let scrivinome;

let scaleFiore = 0;
let scalePistillo = 0;
let scaleGambo;
let micLevel=1

let button;
let button2;
let button3;
let button4;

let nome;
let myFont;
let myFont2;
let myFont3;
let myFont4;



function preload() {
  gambo = loadModel("./addons/fioreStelo.obj");
  foglia1 = loadModel("./addons/fioreFoglia1.obj");
  foglia2 = loadModel("./addons/fioreFoglia2.obj");
  foglia3 = loadModel("./addons/fioreFoglia3.obj");
  fiore1 = loadModel("./addons/fiorePetali1.obj");
  fiore2 = loadModel("./addons/fiorePetali2.obj");
  fiore3 = loadModel("./addons/fiorePetali3.obj");
  pistillo = loadModel("./addons/fiorePistillo.obj");
  myFont = loadFont("./addons/Syne-ExtraBold.ttf")
  myFont2 = loadFont("./addons/Syne-Bold.ttf")
  myFont3 = loadFont("./addons/Trispace_Condensed-Bold.ttf")
  myFont4 = loadFont("./addons/Trispace-Regular.ttf")
  loghino = loadImage("./addons/loghino.png")
}

function setup() {
  createCanvas((windowHeight- windowHeight/10)*9/16, windowHeight- windowHeight/10, WEBGL);
  setAttributes("antialias", true);
  document.oncontextmenu = () => false;
  cam = createEasyCam();
  resetMatrix();
  cam.setState(state, 1000);
  cam.state_reset = state; // state to use on reset
  // Set one of these three parameters to 'true' to
  // constrain yaw, pitch, roll rotation.
  // (This can still be over-ridden with the 'shift' key)
  cam.setZoomScale(0)
  cam.setRotationConstraint(true, false, false);


  button = createButton("cambia")
button.position(0, 0)
button.mousePressed(changeBackground)

button2 = createButton("ricambia")
button2.position(0, 50)
button2.mousePressed(changeBackground2)

button3 = createButton("salva")
button3.position(0, 100)
button3.mousePressed(snapshot)

// button4 = createButton("assegna")
// button4.position(0, 150)
// button4.mousePressed(scrivi)

scrivinome = createInput("COME SI CHIAMA?")
scrivinome.position(100, windowHeight/2)

  
}

let angolo = 0;
let increment = 0.02;

function draw(){

  
  // scaleFiore = map(mouseX, 0, width, -0.5, 0.5);
  // scalePistillo = map(mouseY, 0, height, 3, 1);


  scaleGambo = map(0.02, 0, 1, 1, 4);

  pointLight(40, 20, 70, 300, 600, 300);
  pointLight(1, 80, 20, 30, -500, 300);
  pointLight(60, 5, 80, -300, -600, -300);

  background(bgcolor);
  

  rotateZ(PI);
  translate(0, -32, 0);
  rotateY(angolo);
  scale(30);

  specularMaterial(220);
  noStroke();

  foglia = foglia1;
  fiore = fiore1;

  push();
  scale(1, scaleGambo, 1);
  model(gambo);
  pop();

  //4
  push();
  translate(0.2, 0.1 * scaleGambo, -0.2);
  scale(0.8);
  scale(iterator1);
  rotateY(-PI / 2);
  model(foglia);
  pop();

  push();
  translate(0.2, 0.5 * scaleGambo, -0.2);
  scale(0.3);
  scale(iterator1);
  rotateY(-PI / 2);
  model(foglia);
  pop();

  push();
  translate(0.2, 0.9 * scaleGambo, -0.2);
  scale(0.7);
  scale(iterator1);
  rotateY(-PI / 2);
  model(foglia);
  pop();

  push();
  translate(0.2, 1.3 * scaleGambo, -0.2);
  scale(0.4);
  scale(iterator1);
  rotateY(-PI / 2);
  model(foglia);
  pop();

  //4

  push();
  translate(0, 0.2 * scaleGambo, -0.4);
  scale(0.9);
  scale(iterator1);
  // rotateY(-PI);
  model(foglia);
  pop();

  push();
  translate(0, 0.6 * scaleGambo, -0.4);
  scale(iterator1);
  // rotateY(PI);
  model(foglia);
  pop();

  push();
  translate(0, 1 * scaleGambo, -0.4);
  scale(0.5);
  scale(iterator1);
  // rotateY(PI);
  model(foglia);
  pop();

  push();
  translate(0, 1.4 * scaleGambo, -0.4);
  scale(0.7);
  scale(iterator1);
  // rotateY(PI);
  model(foglia);
  pop();

  //4

  push();
  translate(-0.2, 0.3 * scaleGambo, -0.2);
  scale(iterator1);
  rotateY(PI / 2);
  model(foglia);
  pop();

  push();
  translate(-0.2, 0.7 * scaleGambo, -0.2);
  scale(iterator1);
  rotateY(PI / 2);
  model(foglia);
  pop();

  push();
  translate(-0.2, 1.1 * scaleGambo, -0.2);
  scale(0.6);
  scale(iterator1);
  rotateY(PI / 2);
  model(foglia);
  pop();

  //4

  push();
  translate(0, 0.4 * scaleGambo, 0);
  scale(0.8);
  scale(iterator1);
  rotateY(PI);
  model(foglia);
  pop();

  push();
  translate(0, 0.8 * scaleGambo, 0);
  scale(0.3);
  scale(iterator1);
  rotateY(PI);
  model(foglia);
  pop();

  push();
  translate(0, 1.2 * scaleGambo, 0);
  scale(iterator1);
  rotateY(PI);
  model(foglia);
  pop();

  //fiore

  push();
  translate(0, 1.6 * scaleGambo, 0);
  scale(scaleFiore + 1);
  // scale(iterator1);
  // rotateX(PI / 3);
  model(fiore);
  pop();

  //pistillo
  push();
  translate(0, 1.6 * scaleGambo, 0);
  scale(scaleFiore + iterator2 + 1);
  // rotateX(PI / 3);
  model(pistillo);
  pop();

  angolo += increment;

  rotateZ(PI);
  rotateY(angolo-0.02)
  fill("#5820c5")
  textSize(0.2)
  textFont(myFont4)
  textAlign(CENTER)
  text(scrivinome.value(), 0, 0.3)
  textSize(0.05)
  textFont(myFont4)
  text("questo fiorellino è per te", 0, 0.4)
  imageMode(CENTER)
  image(loghino, 0, -2.5, 1.8, 1.8)
}

function changeBackground(){
  bgcolor = "#ffaa88"
}

function changeBackground2(){
  bgcolor = "#02f886"
}

function snapshot(){
  save("cazzullo.jpg")
}

// function scrivi(){
//   nomeDato = scrivinome.value();
//   scrivinome.value("");
//   nome = nomeDato;
// } 