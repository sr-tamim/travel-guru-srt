import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const provider = new FacebookAuthProvider();
export default function signInFacebook(auth) {
    return signInWithPopup(auth, provider);
}