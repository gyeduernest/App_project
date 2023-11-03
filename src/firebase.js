// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjV2XKlQTldifGAltWyODkdxRaUlX7aaM",
  authDomain: "goget-app-e35a2.firebaseapp.com",
  projectId: "goget-app-e35a2",
  storageBucket: "goget-app-e35a2.appspot.com",
  messagingSenderId: "497477669539",
  appId: "1:497477669539:web:780a1d726b63e9bf93e516"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;