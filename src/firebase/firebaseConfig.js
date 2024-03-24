
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// // Import the functions you need from the SDKs you need


// const firebaseConfig = {
//   apiKey: "AIzaSyBSOtKNyoJJa1Zqjt86TNjYZb7dkvjCfOI",
//   authDomain: "mailbox2-54207.firebaseapp.com",
//   projectId: "mailbox2-54207",
//   storageBucket: "mailbox2-54207.appspot.com",
//   messagingSenderId: "640729343849",
//   appId: "1:640729343849:web:02dc7e1ab5598253583ff8"
// };
// // Initialize Firebase

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// console.log('>db', db)
// export { db, auth };


import { getAuth } from 'firebase/auth';




// Import the necessary functions from the Firebase package
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need


const firebaseConfig = {
  apiKey: "AIzaSyBfx8l0mcnq37Ua0yCqQr9wEXdt1kDF2FY",
  authDomain: "mail-box-4ef8c.firebaseapp.com",
  databaseURL: "https://mail-box-4ef8c-default-rtdb.firebaseio.com",
  projectId: "mail-box-4ef8c",
  storageBucket: "mail-box-4ef8c.appspot.com",
  messagingSenderId: "602605566975",
  appId: "1:602605566975:web:4e5a853206fa9ed5de05ca"
};
// Initialize Firebase

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = getAuth(app);
const database = getFirestore(app)
console.log('>db', db)
export { db, auth , database};




