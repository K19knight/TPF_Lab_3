//import {initializeApp} from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAgoY_Vs2f6CASIplzeoLZt92Iyu7B5uVA",
    authDomain: "tpf-lab-4.firebaseapp.com",
    projectId: "tpf-lab-4",
    storageBucket: "tpf-lab-4.appspot.com",
    messagingSenderId: "370432277825",
    appId: "1:370432277825:web:911024a725bb76f14875c0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const userSignIn = async () => {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

const userSignOut = async () => {
    signOut(auth).then(() => {
        alert("You have been signed out!")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("You are authenticated with Google");
        console.log(user);
        const firstName = user.displayName.split(' ')[0];
        const lastName = user.displayName.split(' ')[1];
        document.getElementById('firstName').value= firstName
        document.getElementById('lastName').value= lastName
        document.getElementById('exampleInputEmail1').value= user.email
    }
})

const signInButton = document.querySelector("#signInButton").addEventListener("click", userSignIn)
const signOutButton = document.querySelector("#signOutButton").addEventListener("click", userSignOut);
