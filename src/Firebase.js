// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKWbFdmNxSszDjwUIo73Gitxprxy_HEp0",
  authDomain: "chatfirebase-1100f.firebaseapp.com",
  projectId: "chatfirebase-1100f",
  storageBucket: "chatfirebase-1100f.appspot.com",
  messagingSenderId: "773258827164",
  appId: "1:773258827164:web:e155ccebd50c1292202459",
  measurementId: "G-TQNWTJ66HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);