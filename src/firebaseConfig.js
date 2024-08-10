import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSIP3bIDGzJZ99b1NJvU6TKq4GZMd1oQw",
  authDomain: "barberhub-4a879.firebaseapp.com",
  projectId: "barberhub-4a879",
  storageBucket: "barberhub-4a879.appspot.com",
  messagingSenderId: "273600627459",
  appId: "1:273600627459:web:7876bc970f1786c35f5f36",
  measurementId: "G-LD5RC32ZJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
export default app;