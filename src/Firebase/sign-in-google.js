
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
export default function googleSignIn(auth) {
    return signInWithPopup(auth, provider);
}
