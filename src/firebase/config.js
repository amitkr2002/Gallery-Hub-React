import  * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDPnu0ttIf9czAaOx1gQDzO3_9FWqV4IvI",
   authDomain: "ninja-firegram-ee5e0.firebaseapp.com",
   projectId: "ninja-firegram-ee5e0",
   storageBucket: "ninja-firegram-ee5e0.appspot.com",
   messagingSenderId: "444793943502",
   appId: "1:444793943502:web:d86dfefd09b0d695b6a79f",
   measurementId: "G-8Z6F0D74EH"
 };

 // Initialize Firebase
 
 firebase.initializeApp(firebaseConfig);


 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 export { projectStorage,projectFirestore,timestamp};
 
