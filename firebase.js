import { initializeApp } from "firebase/app";
import { collection, getFirestore  } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA8fUkVjTOILa2aYczNJ0mY-6yic7aNJpg",
  authDomain: "react-notes-91933.firebaseapp.com",
  projectId: "react-notes-91933",
  storageBucket: "react-notes-91933.appspot.com",
  messagingSenderId: "912949907433",
  appId: "1:912949907433:web:ecbe616b2bee729e3c0578"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")