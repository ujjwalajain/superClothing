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
};

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${ userAuth.uid }`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      console.log("user created successfully");
    } catch (error) {
      console.log("Error creating user:", error.message);
    }
  }

  return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;