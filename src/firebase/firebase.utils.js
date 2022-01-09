import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCJnTckUazY3kjkbb7JHMcLGghGCWFasro",
    authDomain: "ecom-clothing-db-14d42.firebaseapp.com",
    projectId: "ecom-clothing-db-14d42",
    storageBucket: "ecom-clothing-db-14d42.appspot.com",
    messagingSenderId: "305563513284",
    appId: "1:305563513284:web:73b3a87777997c86aa7491",
    measurementId: "G-2P8NTPBV3Q"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



