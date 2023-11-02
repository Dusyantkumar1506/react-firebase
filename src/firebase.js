import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAlHEG5MiJBmGq1_hs3M_4slTmPsjjFYvk",
  authDomain: "react-firebase-2fed0.firebaseapp.com",
  projectId: "react-firebase-2fed0",
  storageBucket: "react-firebase-2fed0.appspot.com",
  messagingSenderId: "632187684126",
  appId: "1:632187684126:web:9bfcb3e7ad958b9ff5f50f",
  measurementId: "G-WVZM5VWD1T"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()
export {auth , app}