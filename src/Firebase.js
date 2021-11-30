import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAccQSAEz4cwMMG1w9xvXlnM0CYMcLXGRw",
  authDomain: "clone-ff7af.firebaseapp.com",
  projectId: "clone-ff7af",
  storageBucket: "clone-ff7af.appspot.com",
  messagingSenderId: "638849053617",
  appId: "1:638849053617:web:a4c708735acfed0a3b8390",
  measurementId: "G-E3E37B8G3W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };