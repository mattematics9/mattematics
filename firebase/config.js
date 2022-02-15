import { initializeApp, getApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyCtJ-aHagEJ-cdNi-uOj2H8si5GAHvdgy8",
    authDomain: "mattematics-41769.firebaseapp.com",
    databaseURL: "https://mattematics-41769.firebaseio.com",
    projectId: "mattematics-41769",
    storageBucket: "mattematics-41769.appspot.com",
    messagingSenderId: "932845088662",
    appId: "1:932845088662:web:476dcbb5d8d1af9d23f7b7",
    measurementId: "G-072FTWC853"
  };

const firebaseApp = initializeApp(firebaseConfig); 
export const db = getFirestore();
export const functions = getFunctions(getApp());
// connectFunctionsEmulator(functions, "localhost", 5001);  //didnt have to use this.  emulator automatically read the functions from functions/index.js
// connectFirestoreEmulator(db, 'localhost', 8080);





