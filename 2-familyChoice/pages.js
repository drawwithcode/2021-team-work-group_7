var self = [0, 0, 0],
  cam,
  state = {
    distance: 100,
    center: [0, 0, 0],
    rotation: [1, 0, 0, 0],
  };
let tree;
let flower;
let succulent;

let angle1 = 0;
let angle2 = 0;
let angle3 = 0;

let iterator = 0;

let scaling;
let mScale;

let size1 = 1.1;
let size2 = 2.1;
let size3 = 1.7;

let x = 0;
let y = 0;
let z = 0;

// let tX = 0;
let inkrement1 = 0.02;
let inkrement2 = 0.02;
let inkrement3 = 0.02;

// let logo;

// let marqueeFondo;

let family1;
let family2;
let family3;

let text =
  "Now it's time to choose a family. There are three types. Triximos, that provides nourishment to grow. Florj, that provides oxygen to breathe. Sukalaas, that provides water to be hydrated. Choose the element you feel most connected to.";
let speech;
let enterButton;
let loadingPage;
let typingBox;
let aboutButton;
let gardenButton;

function preload() {
  tree = loadModel("./2-familyChoice/addons/albero.obj");
  flower = loadModel("./2-familyChoice/addons/Fiore1.obj");
  succulent = loadModel("./2-familyChoice/addons/Grassa.obj");
  // logo = loadImage("./addons/luppio.png");
}

function setup() {
  family1 = createElement("button", "FLORIJ");
  family1.class("familyButton");
  family1.style("left", "50%");
  family1.mouseOver(selectFlorij);
  family1.mouseOut(normalSpeed);
  family1.mousePressed(goToScanning);

  family2 = createElement("button", "SUKULAAS");
  family2.class("familyButton");
  family2.style("left", "80%");
  family2.mouseOver(selectSukulaas);
  family2.mouseOut(normalSpeed);
  family2.mousePressed(goToScanning);

  family3 = createElement("button", "TRIXIMOS");
  family3.class("familyButton");
  family3.style("left", "20%");
  family3.mouseOver(selectTriximos);
  family3.mouseOut(normalSpeed);
  family3.mousePressed(goToScanning);

  // let background = createElement("div");
  // background.class("background");
  speech = new p5.Speech();

  // loadingPage = createElement("div");
  // loadingPage.id("loadingPage");
  // enterButton = createElement("button");
  // enterButton.id("enterButton");
  // enterButton.mouseClicked(openPage);
  // loadingPage.child(enterButton);

  aboutButton = createElement("button", "about");
  aboutButton.id("aboutButton");
  aboutButton.mouseClicked(openAbout);

  gardenButton = createElement("button", "garden");
  gardenButton.id("gardenButton");
  gardenButton.mouseClicked(openGarden);

  typingBox = createElement("div");
  typingBox.class("typingBox");
  let container = createElement("div");
  container.class("container");
  typingBox.child(container);
  let typing = createElement("p", ">> " + text + " //");
  typing.class("typing");
  container.child(typing);
  let hiders = createElement("div");
  hiders.class("hiders");
  container.child(hiders);
  let hider1 = createElement("p", "\xa0");
  hiders.child(hider1);
  let hider2 = createElement("p", "\xa0");
  hiders.child(hider2);
  let hider3 = createElement("p", "\xa0");
  hiders.child(hider3);
  let hider4 = createElement("p", "\xa0");
  hiders.child(hider4);
  let hider5 = createElement("p", "\xa0");
  hiders.child(hider5);
  let hider6 = createElement("p", "\xa0");
  hiders.child(hider6);
  let hider7 = createElement("p", "\xa0");
  hiders.child(hider7);
  let hider8 = createElement("p", "\xa0");
  hiders.child(hider8);
  let hider9 = createElement("p", "\xa0");
  hiders.child(hider9);

  setTimeout(voice, 100);

  let north = nf(random(0, 90), 2, 4);
  let west = nf(random(0, 90), 2, 4);
  marqueeFondo = createElement(
    "marquee",
    north +
      "° N  ○  " +
      west +
      "  ° W  ○  AVERAGE TEMPERATURE 123F  ○  HUMIDITY 34JK  ○  OXYGEN 13AA ○  PLANTS PLANTED 23617 ○  31.12.21 ○  35:68  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W" +
      north +
      "° N  ○  " +
      west +
      "  ° W  ○  AVERAGE TEMPERATURE 123F  ○  HUMIDITY 34JK  ○  OXYGEN 13AA ○  PLANTS PLANTED 23617 ○  31.12.21 ○  35:68  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W" +
      north +
      "° N  ○  " +
      west +
      "  ° W  ○  AVERAGE TEMPERATURE 123F  ○  HUMIDITY 34JK  ○  OXYGEN 13AA ○  PLANTS PLANTED 23617 ○  31.12.21 ○  35:68  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W" +
      north +
      "° N  ○  " +
      west +
      "  ° W  ○  AVERAGE TEMPERATURE 123F  ○  HUMIDITY 34JK  ○  OXYGEN 13AA ○  PLANTS PLANTED 23617 ○  31.12.21 ○  35:68  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W" +
      north +
      "° N  ○  " +
      west +
      "  ° W  ○  AVERAGE TEMPERATURE 123F  ○  HUMIDITY 34JK  ○  OXYGEN 13AA ○  PLANTS PLANTED 23617 ○  31.12.21 ○  35:68  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W"
  );
  marqueeFondo.class("marqueeFondo");

  createCanvas(windowWidth, windowHeight, WEBGL);

  setAttributes("antialias", true);
  document.oncontextmenu = () => false;
  cam = createEasyCam();
  resetMatrix();
  cam.setState(state, 2000);
  cam.state_reset = state; // state to use on reset
  // Set one of these three parameters to 'true' to
  // constrain yaw, pitch, roll rotation.
  // (This can still be over-ridden with the 'shift' key)
  cam.setZoomScale(0);
  cam.setRotationScale(0);
  cam.setRotationConstraint(false, false, false);
}

function draw() {
  iterator += 0.01;
  scaling1 = noise(iterator + 400);
  scaling2 = noise(iterator + 30);
  scaling3 = noise(iterator + 100);
  mScale1 = map(scaling1, 0, 1, 0.3, 2);
  mScale2 = map(scaling2, 0, 1, 0.8, 1.2);
  mScale3 = map(scaling3, 0, 1, 0.2, 1.5);
  background(81, 38, 194);

  noStroke();

  pointLight(40, 20, 70, 300, 600, 300);
  pointLight(1, 80, 20, 30, -500, 300);
  pointLight(60, 5, 80, -300, -600, -300);

  translate(0, 10, 0);
  scale(10);

  rotateZ(PI);

  push();
  specularMaterial(220);
  translate(x, y, z);
  scale(size1);
  scale(mScale3, mScale2, mScale3);
  rotateY(angle1 * 0.8);
  model(flower);
  pop();

  push();
  specularMaterial(220);
  translate(x - 7, y - 1.5, z);
  scale(size2);
  scale(mScale3, mScale2, mScale3);
  rotateY(-angle2 * 1);
  model(succulent);
  pop();

  push();
  specularMaterial(220);
  translate(x + 7, y - 2, z);
  scale(size3);
  scale(mScale3, mScale2, mScale3);
  rotateY(-angle3 * 1.3);
  model(tree);
  pop();

  angle1 += inkrement1;
  angle2 += inkrement2;
  angle3 += inkrement3;
}

function selectFlorij() {
  inkrement1 = inkrement1 * 4;
  size1 = 1.4;
}

function selectSukulaas() {
  inkrement2 = inkrement2 * 4;
  size2 = 2.4;
}

function selectTriximos() {
  inkrement3 = inkrement3 * 4;
  size3 = 2;
}

function normalSpeed() {
  inkrement1 = 0.02;
  inkrement2 = 0.02;
  inkrement3 = 0.02;
  size1 = 1.1;
  size2 = 2.1;
  size3 = 1.7;
}

function goToScanning() {
  window.open("3-camera_scanning.html", "_self");
}

function voice() {
  speech.listVoices();
  speech.setVoice("Fred");
  speech.setRate(1);
  speech.setPitch(2);
  speech.speak(text);
}
function openPage() {
  document.getElementById("loadingPage").style.display = "none";
}

function openAbout() {}
function openGarden() {}
