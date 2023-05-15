import { getStorage } from 'firebase/storage';
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDEqbD2cNUzT52RKeF4SJpfeIP5ii3pn8g",
    authDomain: "reddit-clone-a37e2.firebaseapp.com",
    projectId: "reddit-clone-a37e2",
    storageBucket: "reddit-clone-a37e2.appspot.com",
    messagingSenderId: "180880572845",
    appId: "1:180880572845:web:4f72cd98d0acb5ea1ae124",
    measurementId: "G-0GZMTYZT9J"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const fireStore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {app,fireStore,auth,storage}