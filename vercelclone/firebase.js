// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCTkpApQNV0X5wAoXrHxVCDizdzrLG7KWY",
  authDomain: "fbclone-cf6a2.firebaseapp.com",
  projectId: "fbclone-cf6a2",
  storageBucket: "fbclone-cf6a2.appspot.com",
  messagingSenderId: "623117135630",
  appId: "1:623117135630:web:382a4521378565885ab15f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export   const db = getFirestore(app)