// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDloYuEoXAC7Hmz1B4DBChyTbAF84Cuxng",
  authDomain: "ema-john-simple-128db.firebaseapp.com",
  projectId: "ema-john-simple-128db",
  storageBucket: "ema-john-simple-128db.appspot.com",
  messagingSenderId: "991070234951",
  appId: "1:991070234951:web:a9f736f6b46f0cfd178462"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app