// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfLAwVDk2O_8xWvkQFVXKWtItdUkdNKxc",
  authDomain: "uap-canteen.firebaseapp.com",
  projectId: "uap-canteen",
  storageBucket: "uap-canteen.appspot.com",
  messagingSenderId: "352094018833",
  appId: "1:352094018833:web:0bc488224b1e5a1a4f40b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
