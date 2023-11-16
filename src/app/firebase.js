// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { fireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ydRU-yqPtuGcTiCk6Ve7b1i2UdMWdTs",
  authDomain: "try-reminder.firebaseapp.com",
  projectId: "try-reminder",
  storageBucket: "try-reminder.appspot.com",
  messagingSenderId: "915985669978",
  appId: "1:915985669978:web:001bfbe9e3b18b62725d63",
  measurementId: "G-2Q8H2R961M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = fireStore(app);