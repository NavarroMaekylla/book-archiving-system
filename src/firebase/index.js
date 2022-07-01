import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7JLlEnF4zyxFAW8RmlUy_dx8kqVmYgzc",
  authDomain: "book-system-16588.firebaseapp.com",
  projectId: "book-system-16588",
  storageBucket: "book-system-16588.appspot.com",
  messagingSenderId: "637452146163",
  appId: "1:637452146163:web:01caadfc5834207a786e86",
  measurementId: "G-J3R185LBHR"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
