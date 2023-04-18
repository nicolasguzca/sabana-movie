// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// TODO:
const firebaseConfig = {
  apiKey: "AIzaSyC98vLCE7YNCXTV2Pw3bCNmfJZ-1G2jjgE",
  authDomain: "unisabana-class.firebaseapp.com",
  projectId: "unisabana-class",
  storageBucket: "unisabana-class.appspot.com",
  messagingSenderId: "186512867242",
  appId: "1:186512867242:web:2b2579ee0414adace8b5d3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

