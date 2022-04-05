import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBejuIPCKRDWU8ga36LV63NcQXuI21qM9s",
    authDomain: "prueba01-7d9b7.firebaseapp.com",
    databaseURL: "https://prueba01-7d9b7-default-rtdb.firebaseio.com",
    projectId: "prueba01-7d9b7",
    storageBucket: "prueba01-7d9b7.appspot.com",
    messagingSenderId: "383564744103",
    appId: "1:383564744103:web:b3b60d4fa5371e41546282",
};

const fb = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(fb);

export const db = fb.firestore();