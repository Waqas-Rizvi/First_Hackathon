import firebase from "firebase";
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCXL6fQy5dQXRtSKqfhPb7VRVdzAgUgRUA",
    authDomain: "hackathon-41cc9.firebaseapp.com",
    projectId: "hackathon-41cc9",
    storageBucket: "hackathon-41cc9.appspot.com",
    messagingSenderId: "285172603717",
    appId: "1:285172603717:web:5c97851222474880bdbc2c",
    measurementId: "G-8E8LNHDEYC"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);