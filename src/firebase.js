import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA38UKDiAwKahQjJT7F73WTbsFseDbc89Y",
  authDomain: "mindcare-15e39.firebaseapp.com",
  projectId: "mindcare-15e39",
  storageBucket: "mindcare-15e39.appspot.com",
  messagingSenderId: "218895757944",
  appId: "1:218895757944:web:02793ad30cf7a87630f38d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);
export const db = getFirestore(app);