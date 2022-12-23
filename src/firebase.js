// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH_IAUHnGpRkx3ifuMQVdROG2xiXoLfwA",
    authDomain: "noelbackendnew.firebaseapp.com",
    projectId: "noelbackendnew",
    storageBucket: "noelbackendnew.appspot.com",
    messagingSenderId: "312112669682",
    appId: "1:312112669682:web:75a8614f2e168d04a7c16b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;