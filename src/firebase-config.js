
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCMj49m1kSCr5C_qGfFSWvt8XhxR7FdNc4",
  authDomain: "netflix-app-9ccad.firebaseapp.com",
  projectId: "netflix-app-9ccad",
  storageBucket: "netflix-app-9ccad.appspot.com",
  messagingSenderId: "128045825248",
  appId: "1:128045825248:web:4a5bb9a0146830e03fe485",
  measurementId: "G-QX46DPF62C"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
