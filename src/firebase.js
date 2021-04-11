import firebase from "firebase/app"

import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDwQIujFnXcw1Yir_8eF46EY14lvNn0C4I",
    authDomain: "ryan-68783.firebaseapp.com",
    databaseURL: "https://ryan-68783-default-rtdb.firebaseio.com",
    projectId: "ryan-68783",
    storageBucket: "ryan-68783.appspot.com",
    messagingSenderId: "561334277695",
    appId: "1:561334277695:web:af0f15bad34ae7d20e8a8a",
    measurementId: "G-PN6HCNTX7N"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();