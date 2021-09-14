import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBPaQ0zKVmuVT95R4WTH-H9Tcyj0Zwd-t8',
  authDomain: 'crwn-db-fc7b8.firebaseapp.com',
  projectId: 'crwn-db-fc7b8',
  storageBucket: 'crwn-db-fc7b8.appspot.com',
  messagingSenderId: '827677021460',
  appId: '1:827677021460:web:57ec4d5cc26fb0423c9e01',
  measurementId: 'G-D89SY4N5QX',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
