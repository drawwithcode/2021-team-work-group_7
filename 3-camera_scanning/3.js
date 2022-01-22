const urlStringOrigin = window.location.origin;
const urlStringArrive = window.location.href;
let urlOrigin = new URL(urlStringOrigin);
let urlArrive = new URL(urlStringArrive);
let parameter = urlArrive.searchParams.get("family");
let family = 3;
console.log(urlArrive);
console.log(parameter);

let part1;
let part2;
let chosenParts;

let text =
  "Now it's time to choose a family. There are three types. Triximos, that provides nourishment to grow. Florj, that provides oxygen to breathe. Sukalaas, that provides water to be hydrated. Choose the element you feel most connected to.";
let speech;
let enterButton;
let loadingPage;
let typingBox;
let aboutButton;
let gardenButton;
let logo;
let nextButton;
let analysingSpace;

var self = [0, 0, 0],
  cam,
  state = {
    distance: 100,
    center: [0, 0, 0],
    rotation: [1, 0, 0, 0],
  };
let video;
let iterator1 = 0;
let iterator2 = -0.02;
let a = 0;

let d;

let r;
let g;
let b;

let bright;
let hue;

let cacca;
let pipi;

let variabile1;
let variabile2;

let fioreStelo;
let fiorePistillo;
let fioreFoglia1;
let fioreFoglia2;
let fioreFoglia3;
let fiorePetali1;
let fiorePetali2;
let fiorePetali3;

let alberoStelo;
let alberoRami;
let alberoFrutto1;
let alberoFrutto2;
let alberoFrutto3;
let alberoRadici1;
let alberoRadici2;
let alberoRadici3;

let grassaStelo;
let grassaSpine;
let grassaPetali1;
let grassaPetali2;
let grassaPetali3;
let grassaFoglie1;
let grassaFoglie2;
let grassaFoglie3;

function preload() {
  logo = loadImage("./1-home/addons/luppio.png");
  fioreStelo = loadModel("./3-camera_scanning/addons/fioreStelo.obj");
  fioreFoglia1 = loadModel("./3-camera_scanning/addons/fioreFoglia1.obj");
  fioreFoglia2 = loadModel("./3-camera_scanning/addons/fioreFoglia2.obj");
  fioreFoglia3 = loadModel("./3-camera_scanning/addons/fioreFoglia3.obj");
  fiorePetali1 = loadModel("./3-camera_scanning/addons/fiorePetali1.obj");
  fiorePetali2 = loadModel("./3-camera_scanning/addons/fiorePetali2.obj");
  fiorePetali3 = loadModel("./3-camera_scanning/addons/fiorePetali3.obj");
  fiorePistillo = loadModel("./3-camera_scanning/addons/fiorePistillo.obj");

  alberoStelo = loadModel("./3-camera_scanning/addons/alberoStelo.obj");
  alberoRami = loadModel("./3-camera_scanning/addons/alberoRami.obj");
  alberoFrutto1 = loadModel("./3-camera_scanning/addons/alberoFrutto1.obj");
  alberoFrutto2 = loadModel("./3-camera_scanning/addons/alberoFrutto2.obj");
  alberoFrutto3 = loadModel("./3-camera_scanning/addons/alberoFrutto3.obj");
  alberoRadici1 = loadModel("./3-camera_scanning/addons/alberoRadici1.obj");
  alberoRadici2 = loadModel("./3-camera_scanning/addons/alberoRadici2.obj");
  alberoRadici3 = loadModel("./3-camera_scanning/addons/alberoRadici3.obj");

  grassaStelo = loadModel("./3-camera_scanning/addons/grassaStelo.obj");
  grassaSpine = loadModel("./3-camera_scanning/addons/grassaSpine.obj");
  grassaPetali1 = loadModel("./3-camera_scanning/addons/grassaPetali1.obj");
  grassaPetali2 = loadModel("./3-camera_scanning/addons/grassaPetali2.obj");
  grassaPetali3 = loadModel("./3-camera_scanning/addons/grassaPetali3.obj");
  grassaFoglie1 = loadModel("./3-camera_scanning/addons/grassaFoglie1.obj");
  grassaFoglie2 = loadModel("./3-camera_scanning/addons/grassaFoglie2.obj");
  grassaFoglie3 = loadModel("./3-camera_scanning/addons/grassaFoglie3.obj");
}

function setup() {
  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX + "px"),
      (cursor.style.top = e.clientY + "px");
  });
  let background = createElement("div");
  background.class("background"); // SPOSTARE IN HTML E METTERE IN TUTTE LE PAGINE

  speech = new p5.Speech();

  enterButton = createElement("button", "START WEBCAM");
  enterButton.id("enterButton");
  enterButton.mouseClicked(moveSpace);

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

  pixelDensity(1);

  setAttributes("antialias", true);
  document.oncontextmenu = () => false;
  cam = createEasyCam();
  resetMatrix();
  cam.setState(state, 1000);
  cam.state_reset = state; // state to use on reset
  // Set one of these three parameters to 'true' to
  // constrain yaw, pitch, roll rotation.
  // (This can still be over-ridden with the 'shift' key)
  cam.setZoomScale(0);
  cam.setRotationConstraint(true, false, false);

  video = logo;
}

function voice() {
  speech.listVoices();
  speech.setVoice("Fred");
  speech.setRate(1);
  speech.setPitch(2);
  speech.speak(text);
}

function draw() {
  background(81, 38, 194);

  pointLight(40, 20, 70, 300, 600, 300);
  pointLight(1, 80, 20, 30, -500, 300);
  pointLight(60, 5, 80, -300, -600, -300);

  iterator1 += a;
  iterator2 += a;
  if (iterator1 > 1) {
    a = 0;
  }
  noStroke();
  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let i = (x + y * video.width) * 4;

      r = video.pixels[i];
      g = video.pixels[i + 1];
      b = video.pixels[i + 2];

      bright = (r + g + b) / 3;

      // let averageB = 0;
      // averageB += bright;
      cacca = map(bright, 0, 255, 0, 5);
    }
  }
  if (family == 1) {
    buildAlbero();
  }
  if (family == 2) {
    buildFiore();
  }
  if (family == 3) {
    buildGrassa();
  }
}

function buildFiore() {
  r = r / 255;
  g = g / 255;
  b = b / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  if (max == r) {
    // if red is the predominent color
    hue = (g - b) / (max - min);
  } else if (max == g) {
    // if green is the predominent color
    hue = 2 + (b - r) / (max - min);
  } else if (max == b) {
    // if blue is the predominent color
    hue = 4 + (r - g) / (max - min);
  }

  hue = hue * 60;

  // if (hue < 0) {
  //   // if red is the predominent color
  //   hue = hue + 360;
  // }

  hue = Math.round(hue);

  pipi = map(hue, 0, 360, 0, 255);

  if (max == r) {
    variabile1 = fioreFoglia1;
  }
  if (max == g) {
    variabile1 = fioreFoglia2;
  }
  if (max == b) {
    variabile1 = fioreFoglia3;
  }
  if (cacca < 1) {
    variabile2 = fiorePetali1;
    d = 1.7;
  }
  if (cacca > 1 && cacca < 2) {
    variabile2 = fiorePetali2;
    d = 1.88;
  }
  if (cacca > 2 && cacca < 3) {
    variabile2 = fiorePetali3;

    d = 1.78;
  }
  rotateZ(PI);
  translate(0, -35, 0);
  rotateY((-PI / 5) * 2);
  scale(30);
  specularMaterial(220);
  model(fioreStelo);

  //4
  push();
  translate(0.2, 0.1, -0.2);
  scale(0.8);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 0.5, -0.2);
  scale(0.3);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 0.9, -0.2);
  scale(0.7);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 1.3, -0.2);
  scale(0.4);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //4

  push();
  translate(0, 0.2, -0.4);
  scale(0.9);
  scale(iterator1);
  // rotateY(-PI);
  model(variabile1);
  pop();

  push();
  translate(0, 0.6, -0.4);
  scale(iterator1);
  // rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1, -0.4);
  scale(0.5);
  scale(iterator1);
  // rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1.4, -0.4);
  scale(0.7);
  scale(iterator1);
  // rotateY(PI);
  model(variabile1);
  pop();

  //4

  push();
  translate(-0.2, 0.3, -0.2);
  scale(iterator1);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  push();
  translate(-0.2, 0.7, -0.2);
  scale(0.4);
  scale(iterator1);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  push();
  translate(-0.2, 1.1, -0.2);
  scale(0.6);
  scale(iterator1);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  //4

  push();
  translate(0, 0.4, 0);
  scale(0.8);
  scale(iterator1);
  rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 0.8, 0);
  scale(0.3);
  scale(iterator1);
  rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1.2, 0);
  scale(iterator1);
  rotateY(PI);
  model(variabile1);
  pop();

  //fiore

  push();
  translate(0, 1.6, 0);
  scale(0.5);
  scale(iterator1);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //fiorePistillo
  push();
  translate(0, d, 0);

  scale(iterator2);
  // rotateX(PI / 3);
  model(fiorePistillo);
  pop();
}

function buildAlbero() {
  r = r / 255;
  g = g / 255;
  b = b / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  if (max == r) {
    // if red is the predominent color
    hue = (g - b) / (max - min);
  } else if (max == g) {
    // if green is the predominent color
    hue = 2 + (b - r) / (max - min);
  } else if (max == b) {
    // if blue is the predominent color
    hue = 4 + (r - g) / (max - min);
  }

  hue = hue * 60;

  // if (hue < 0) {
  //   // if red is the predominent color
  //   hue = hue + 360;
  // }

  hue = Math.round(hue);

  pipi = map(hue, 0, 360, 0, 255);

  if (max == r) {
    variabile1 = alberoRadici1;
  }
  if (max == g) {
    variabile1 = alberoRadici2;
  }
  if (max == b) {
    variabile1 = alberoRadici3;
  }
  if (cacca < 1) {
    variabile2 = alberoFrutto1;
  }
  if (cacca > 1 && cacca < 2) {
    variabile2 = alberoFrutto2;
  }
  if (cacca > 2 && cacca < 3) {
    variabile2 = alberoFrutto3;
  }

  rotateZ(PI);
  translate(0, -32, 0);
  rotateY((-PI / 5) * 2);
  scale(22);
  specularMaterial(220);
  model(alberoStelo);

  //4
  push();
  translate(0, 0, 0);
  scale(1.5);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //fiore

  //4

  push();
  translate(0, 1.35, 0.8);
  scale(0.8);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  translate(0.8, 1.35, 0);
  scale(0.6);
  scale(iterator2);
  rotateY(PI / 2);
  model(variabile2);
  pop();
  push();
  translate(0, 1.35, -0.8);
  scale(0.4);
  scale(iterator2);
  rotateY(PI);
  model(variabile2);
  pop();
  push();
  translate(-0.8, 1.35, 0);
  scale(0.9);
  scale(iterator2);
  rotateY(-PI / 2);
  model(variabile2);
  pop();

  //4

  push();
  translate(0, 2.49, 0.8);
  scale(0.8);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  translate(0.8, 2.49, 0);
  scale(0.5);
  scale(iterator2);
  rotateY(PI / 2);
  model(variabile2);
  pop();
  push();
  translate(0, 2.49, -0.8);
  scale(0.4);
  scale(iterator2);
  rotateY(PI);
  model(variabile2);
  pop();
  push();
  translate(-0.8, 2.49, 0);
  scale(0.7);
  scale(iterator2);
  rotateY(-PI / 2);
  model(variabile2);
  pop();

  //4

  push();
  rotateY(PI / 4);
  translate(0, 1.9, 0.8);
  scale(0.6);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY(-PI / 4);
  translate(0, 1.9, 0.8);
  scale(0.8);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY((-PI / 4) * 3);
  translate(0, 1.9, 0.8);
  scale(0.4);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY((PI / 4) * 3);
  translate(0, 1.9, 0.8);
  scale(0.7);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //RAMI
  push();
  translate(0, 1.62, 0);
  scale(1.1);
  // scale(iterator2);

  model(alberoRami);
  pop();
}

function buildGrassa() {
  r = r / 255;
  g = g / 255;
  b = b / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  if (max == r) {
    // if red is the predominent color
    hue = (g - b) / (max - min);
  } else if (max == g) {
    // if green is the predominent color
    hue = 2 + (b - r) / (max - min);
  } else if (max == b) {
    // if blue is the predominent color
    hue = 4 + (r - g) / (max - min);
  }

  hue = hue * 60;

  // if (hue < 0) {
  //   // if red is the predominent color
  //   hue = hue + 360;
  // }

  hue = Math.round(hue);
  // console.log(max);
  pipi = map(hue, 0, 360, 0, 255);

  if (max == r) {
    variabile1 = grassaFoglie1;
  }
  if (max == g) {
    variabile1 = grassaFoglie2;
  }
  if (max == b) {
    variabile1 = grassaFoglie3;
  }
  if (cacca < 1) {
    variabile2 = grassaPetali1;
  }
  if (cacca > 1 && cacca < 2) {
    variabile2 = grassaPetali2;
  }
  if (cacca > 2 && cacca < 3) {
    variabile2 = grassaPetali3;
  }

  rotateZ(PI);
  translate(0, -35, 0);
  rotateY((-PI / 5) * 2);
  scale(30);
  specularMaterial(220);
  model(grassaStelo);

  //4
  push();
  translate(0, 0, 0);
  scale(0.65);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //fiore

  //4

  push();
  translate(0, 1.45, 0);
  scale(1.2);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //spine
  push();
  translate(0, 2.2, 0);
  scale(1.2);
  // scale(iterator2);

  model(grassaSpine);
  pop();
}
function openAbout() {}
function openGarden() {}

function moveSpace() {
  camera.start();

  document.getElementById("enterButton").style.display = "none";

  canvas.style.left = "23%";
  canvas.style.transition = "0.5s";
  setTimeout(moveWebcam, 2000);
}
function moveWebcam() {
  document.getElementsByClassName("input_video")[0].style.right = "50%";
  document.getElementsByClassName("input_video")[0].style.transition = "0.5s";
  a = 0.005;
  video = createCapture(VIDEO);
  video.size(40, 30);
  video.hide();
  analyzingSpace = createElement("h1", "ANALYSING THE SPACE");
  analyzingSpace.id("analyser");
  setTimeout(goNext, 10000);
}
function goNext() {
  video = video.get();
  document.getElementById("analyser").style.display = "none";

  if (
    variabile1 == fioreFoglia1 ||
    variabile1 == alberoRadici1 ||
    variabile1 == grassaFoglie1
  ) {
    part1 = 1;
  }
  if (
    variabile1 == fioreFoglia2 ||
    variabile1 == alberoRadici2 ||
    variabile1 == grassaFoglie2
  ) {
    part1 = 2;
  }
  if (
    variabile1 == fioreFoglia3 ||
    variabile1 == alberoRadici3 ||
    variabile1 == grassaFoglie3
  ) {
    part1 = 3;
  }
  if (
    variabile2 == fiorePetali1 ||
    variabile2 == alberoFrutto1 ||
    variabile2 == grassaPetali1
  ) {
    part2 = 1;
  }
  if (
    variabile2 == fiorePetali2 ||
    variabile2 == alberoFrutto2 ||
    variabile2 == grassaPetali2
  ) {
    part2 = 2;
  }
  if (
    variabile2 == fiorePetali3 ||
    variabile2 == alberoFrutto3 ||
    variabile2 == grassaPetali3
  ) {
    part2 = 3;
  }
  chosenParts = family + "." + part1 + "." + part2;

  scanCompleted = createElement("h1", "SCAN COMPLETED");
  scanCompleted.id("scan");
  nextButton = createElement("button", "NEXT");
  nextButton.id("nextButton");
  nextButton.mouseClicked(nextPage);
  console.log(chosenParts);
}
function nextPage() {
  window.open(
    urlOrigin + "4-shout.html?case=" + chosenParts + "&parameter=",
    "_self"
  );
}
