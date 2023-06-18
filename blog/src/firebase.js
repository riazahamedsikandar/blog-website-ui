import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrQstD8cu6ybAl8-6JxoUHccim2Hl58SE",
    authDomain: "blog-ui-a2d53.firebaseapp.com",
    projectId: "blog-ui-a2d53",
    storageBucket: "blog-ui-a2d53.appspot.com",
    messagingSenderId: "608346446935",
    appId: "1:608346446935:web:9a1586b34bcca33bc91712",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };