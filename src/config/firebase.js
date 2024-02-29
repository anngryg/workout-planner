import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxAcLZKw9I4Wlb5DkzKhpKw3th7iAvJMM",
  authDomain: "workout-planner-5b971.firebaseapp.com",
  projectId: "workout-planner-5b971",
  storageBucket: "workout-planner-5b971.appspot.com",
  messagingSenderId: "1033583777598",
  appId: "1:1033583777598:web:2ee64d8c7f5832caf77e6f",
  measurementId: "G-5GWSD2S1PM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
