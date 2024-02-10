import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC05DkjHlKwDMO3cDNo3JgvYifoesCPocs",
    authDomain: "ie-mezz.firebaseapp.com",
    projectId: "ie-mezz",
    storageBucket: "ie-mezz.appspot.com",
    messagingSenderId: "1013867000868",
    appId: "1:1013867000868:web:2ac81517c7f17bf103d4b1",
    measurementId: "G-R5CP4SWCQE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};