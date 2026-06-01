import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY || "AIzaSyDbrqdOMXIJHTwnNbLqxrr6dLOlf-H9dFM",
    authDomain: "interview-e0cbe.firebaseapp.com",
    projectId: "interview-e0cbe",
    storageBucket: "interview-e0cbe.firebasestorage.app",
    messagingSenderId: "84352386945",
    appId: "1:84352386945:web:3e886ae52e3401db950a80",
    measurementId: "G-9XNQJFE5RK"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };