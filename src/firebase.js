// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFJA9gTNNS467bw_NB9-cLnvCrZ3feuMc",
  authDomain: "netflix-clone-3d0f4.firebaseapp.com",
  projectId: "netflix-clone-3d0f4",
  storageBucket: "netflix-clone-3d0f4.appspot.com",
  messagingSenderId: "268148030150",
  appId: "1:268148030150:web:a05baaa9cc85fa5c12b5c7",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
