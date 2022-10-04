import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7-SFeuLaLQPxkM_dS-0KLECxBhq1-GkE",
  authDomain: "signal-clone-build-13c80.firebaseapp.com",
  projectId: "signal-clone-build-13c80",
  storageBucket: "signal-clone-build-13c80.appspot.com",
  messagingSenderId: "401226191463",
  appId: "1:401226191463:web:117e9d49e49a5c10e9bac2",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
