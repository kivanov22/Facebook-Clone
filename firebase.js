import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';
// import {getFirestore} from 'firebase/firestore';
// import  "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCj_Yv4Ok_bFnkaBUap9fer__JDZLIxHCE",
    authDomain: "facebook-clone-5bc9e.firebaseapp.com",
    projectId: "facebook-clone-5bc9e",
    storageBucket: "facebook-clone-5bc9e.appspot.com",
    messagingSenderId: "234969895267",
    appId: "1:234969895267:web:a2839a6e6ef378eb94c356"
};

const app = firebase.initializeApp(firebaseConfig);
//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();//new syntax
//app.firestore();
const storage = getStorage(app);

export { db, storage };