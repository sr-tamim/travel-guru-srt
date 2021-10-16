// Import the functions you need from the SDKs you need
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import firebaseConfig from "../Firebase/firebase.config";
import googleSignIn from "../Firebase/sign-in-google";

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    onAuthStateChanged(auth, (newUser) => {
        newUser ? setUser(newUser) : user && setUser(null);
    })

    const googleLogin = () => googleSignIn(auth).catch(err => setError(err.message));

    const logout = () => signOut(auth).catch(err => setError(err));

    return {
        user, setUser, error, googleLogin, logout
    }
}

export default useFirebase;