import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDOadOSAx_4PcohgKYnQ7ASbe4Uduhhe9s",
  authDomain: "notice-board-nexjs.firebaseapp.com",
  projectId: "notice-board-nexjs",
  storageBucket: "notice-board-nexjs.appspot.com",
  messagingSenderId: "77366910856",
  appId: "1:77366910856:web:5973bd5386c118265e243d",
  measurementId: "G-YCM0Y7W1JK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
