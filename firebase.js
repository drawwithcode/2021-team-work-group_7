// https://console.firebase.google.com/u/0/project/luppio-demo/overview

let addPianta;
let piante;

async function firebaseSetup() {
  const fb_app_url = "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  const fb_database_url =
    "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

  const { initializeApp } = await import(fb_app_url);
  const {
    getDatabase,
    ref,
    push,
    set,
    onValue,
    //ricordati di uncommentare questo nella pagina totalieh
  } = await import(fb_database_url);

  const firebaseConfig = {
    apiKey: "AIzaSyAat-YA5nCUO7s6vv-rTquCpezjEqI5Zdc",
    authDomain: "luppio-demo.firebaseapp.com",
    projectId: "luppio-demo",
    storageBucket: "luppio-demo.appspot.com",
    messagingSenderId: "798261918187",
    appId: "1:798261918187:web:6b7a037cd71ef5e80fc1ae",
    measurementId: "G-RCYRRDPECJ",
    databaseURL:
      "https://luppio-demo-default-rtdb.europe-west1.firebasedatabase.app",
  };

  const app = initializeApp(firebaseConfig);
  const myDatabase = getDatabase(app);

  const pianteRef = ref(myDatabase, "piante");

  onValue(pianteRef, function (snapshot) {
    const data = snapshot.val();
    piante = data;
  });

  addPianta = function (properties) {
    const singlePiantaRef = push(pianteRef);
    set(singlePiantaRef, properties);
  };
}

firebaseSetup();
