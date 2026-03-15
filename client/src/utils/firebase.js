import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewai-63e69.firebaseapp.com",
    projectId: "interviewai-63e69",
    storageBucket: "interviewai-63e69.firebasestorage.app",
    messagingSenderId: "413514177377",
    appId: "1:413514177377:web:645e193f99d5ec81bb0320",
    measurementId: "G-0XJQ8L0EKF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };