import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG7gbyrYYyKtJ0RCW7FSzdGPbsTXBXDmE",
  authDomain: "tina-zita-db.firebaseapp.com",
  databaseURL: "https://tina-zita-db.firebaseio.com",
  projectId: "tina-zita-db",
  storageBucket: "tina-zita-db.appspot.com",
  messagingSenderId: "127747384823",
  appId: "1:127747384823:web:13247d30bf7e75de083af2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
