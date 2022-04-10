import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCawYFo04BFeMRlMT0qy9vPqPFRE_FXBOM",
  authDomain: "clone-df53f.firebaseapp.com",
  projectId: "clone-df53f",
  storageBucket: "clone-df53f.appspot.com",
  messagingSenderId: "445736918117",
  appId: "1:445736918117:web:e481660efc5c396034ba8c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };