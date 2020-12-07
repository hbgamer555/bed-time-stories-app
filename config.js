import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBxw_qPWxyzoiosvwtZ58RK3WujgVbhyLA",
  authDomain: "wili-84c6a.firebaseapp.com",
  projectId: "wili-84c6a",
  storageBucket: "wili-84c6a.appspot.com",
  messagingSenderId: "897634345961",
  appId: "1:897634345961:web:f157adf43ca95ab98f2178"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();