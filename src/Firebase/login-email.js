import { signInWithEmailAndPassword } from "firebase/auth";

export default function loginEmail(auth, email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}