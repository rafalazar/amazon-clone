// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgkXffpz6QMCkFuD3o5vjt84PprgWX_N4",
    authDomain: "clone-3ae96.firebaseapp.com",
    projectId: "clone-3ae96",
    storageBucket: "clone-3ae96.appspot.com",
    messagingSenderId: "594238345456",
    appId: "1:594238345456:web:bc77be91c20a68674e3235",
    measurementId: "G-8MVPJMYH12"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth};