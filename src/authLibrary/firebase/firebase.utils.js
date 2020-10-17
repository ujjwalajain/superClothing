import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBTH26hp1baCGqIzs5qp54U2Qd2ab1mB5s",
    authDomain: "superclothing-d582d.firebaseapp.com",
    databaseURL: "https://superclothing-d582d.firebaseio.com",
    projectId: "superclothing-d582d",
    storageBucket: "superclothing-d582d.appspot.com",
    messagingSenderId: "824821761014",
    appId: "1:824821761014:web:00766f829094cf67fefdd7",
    measurementId: "G-2B2HGTTFDQ"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;