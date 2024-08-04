// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpdSvIMy634NKJUaG_LBoUmbSr0gAFl60",
  authDomain: "scopie-6e80c.firebaseapp.com",
  projectId: "scopie-6e80c",
  storageBucket: "scopie-6e80c.appspot.com",
  messagingSenderId: "439487392429",
  appId: "1:439487392429:web:3bbead631f790dbda07424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;