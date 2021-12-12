// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6kiTMMj1GKH1FsPjBQ3xJlS_O0EfcMqc",
  authDomain: "food-store-app-7aef3.firebaseapp.com",
  projectId: "food-store-app-7aef3",
  storageBucket: "food-store-app-7aef3.appspot.com",
  messagingSenderId: "598613979702",
  appId: "1:598613979702:web:c3ad81e33414dd623c9e97",
  measurementId: "G-GEHQ64ZQQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);