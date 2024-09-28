// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwEMgU5G1v0SaWLzoMjeCitw9G7hQf17E",
  authDomain: "dexcoder-dc2e1.firebaseapp.com",
  projectId: "dexcoder-dc2e1",
  storageBucket: "dexcoder-dc2e1.appspot.com",
  messagingSenderId: "648434069626",
  appId: "1:648434069626:web:14955c8b450e596a878bc3",
  measurementId: "G-22W9BV2T7Z",
  databaseURL: "https://dexcoder-dc2e1-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);