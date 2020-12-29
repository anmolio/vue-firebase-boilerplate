import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAdX-tnZ6lCKC8bvJFigh6zDsk-Oc9UsP8",
    authDomain: "congenial-tribble.firebaseapp.com",
    projectId: "congenial-tribble",
    storageBucket: "congenial-tribble.appspot.com",
    messagingSenderId: "304345729549",
    appId: "1:304345729549:web:67b16f07267456b4eea344",
    measurementId: "G-LYCBSWSSV9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;