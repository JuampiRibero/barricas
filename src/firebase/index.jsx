import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBarzXBss7f6R_XEobyD_6Fuj-fOyowgBg",
    authDomain: "barricas-e-commerce.firebaseapp.com",
    projectId: "barricas-e-commerce",
    storageBucket: "barricas-e-commerce.appspot.com",
    messagingSenderId: "808444473031",
    appId: "1:808444473031:web:ebe23bb9523aff2b6698e2"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}