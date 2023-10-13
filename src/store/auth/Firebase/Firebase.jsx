
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAwJqb84vOUVgJQEqly2kjwWvFaBaHJu0o",
  authDomain: "jgo-app-fbe3a.firebaseapp.com",
  projectId: "jgo-app-fbe3a",
  storageBucket: "jgo-app-fbe3a.appspot.com",
  messagingSenderId: "103544715958",
  appId: "1:103544715958:web:8c3d58df6e1f96523c8417"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


