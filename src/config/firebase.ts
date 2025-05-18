import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGRiPePmMZT9B1PG4jfET1If9AJzodbQc",
  authDomain: "portfolio-cb82b.firebaseapp.com",
  projectId: "portfolio-cb82b",
  storageBucket: "portfolio-cb82b.firebasestorage.app",
  messagingSenderId: "446841397374",
  appId: "1:446841397374:web:fe895e1cd52c126454782f",
  measurementId: "G-S2EFXZ3VM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db }; 