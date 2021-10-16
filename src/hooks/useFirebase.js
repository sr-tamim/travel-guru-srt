// Import the functions you need from the SDKs you need
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import firebaseConfig from "../Firebase/firebase.config";
import loginEmail from "../Firebase/login-email";
import signInFacebook from "../Firebase/sign-in-facebook";
import googleSignIn from "../Firebase/sign-in-google";
import signUpEmail from "../Firebase/sign-up-email";

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    console.log(error);
    onAuthStateChanged(auth, (newUser) => {
        newUser ? setUser(newUser) && setError(null) : user && setUser(null);
    })

    const googleLogin = () => googleSignIn(auth).catch(err => setError(err));
    const facebookLogin = () => signInFacebook(auth).catch(err => setError(err));
    const emailSignUp = (name, email, password) => signUpEmail(auth, name, email, password).catch(err => setError(err));
    const emailLogin = (email, password) => loginEmail(auth, email, password).catch(err => setError(err));

    const logout = () => signOut(auth).catch(err => setError(err));

    return {
        user, setUser, error, setError, googleLogin, facebookLogin,
        emailSignUp, emailLogin, logout
    }
}

export default useFirebase;