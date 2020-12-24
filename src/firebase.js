import firebase from "firebase";


const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyCwsMC3bYrWRxqk7rNlApqYcfBudhS-9Rk",
    authDomain: "insta-clone-24dc2.firebaseapp.com",
    projectId: "insta-clone-24dc2",
    storageBucket: "insta-clone-24dc2.appspot.com",
    messagingSenderId: "331791414874",
    appId: "1:331791414874:web:5812943031c4f031caca63"
});

  const db =firebaseConfig.firestore();
  const auth = firebase.auth();
  const storage =firebase.storage();

  export {db, auth, storage};