let text =
  "Now it's time to choose a family. There are three types. Triximos, that provides nourishment to grow. Florj, that provides oxygen to breathe. Sukalaas, that provides water to be hydrated. Choose the element you feel most connected to.";
let speech;
let enterButton;
let loadingPage;
let typingBox;
let aboutButton;
let gardenButton;

function setup() {
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
}

function draw() {}

function voice() {
  speech.listVoices();
  speech.setVoice("Fred");
  speech.setRate(1);
  speech.setPitch(2);
  speech.speak(text);
}
function openPage() {
  setTimeout(voice, 100);
  document.getElementById("loadingPage").style.display = "none";
}

function openAbout() {}
function openGarden() {}
