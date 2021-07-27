import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBwc2096cMGbzagD_2zgG_mqG0T68JyQdU",
  authDomain: "portfolio-50baa.firebaseapp.com",
  projectId: "portfolio-50baa",
  storageBucket: "portfolio-50baa.appspot.com",
  messagingSenderId: "916346717674",
  appId: "1:916346717674:web:6829dcd370ba367fe55e93"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
