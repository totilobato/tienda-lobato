import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBnrppWLvMFGWnBQ0Dgrj1eqXOoon40d-g",
    authDomain: "tienda-borabora.firebaseapp.com",
    projectId: "tienda-borabora",
    storageBucket: "tienda-borabora.appspot.com",
    messagingSenderId: "653575482671",
    appId: "1:653575482671:web:666803073e09ec3f6285da"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
}