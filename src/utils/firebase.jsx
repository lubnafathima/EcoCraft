import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4L7GGwrJ5juWf2oPkRRbvxq-HkKXftL4",
  authDomain: "ecocraft-1460d.firebaseapp.com",
  projectId: "ecocraft-1460d",
  storageBucket: "ecocraft-1460d.appspot.com",
  messagingSenderId: "544447374949",
  appId: "1:544447374949:web:3f64f86838b8013cf9c88c",
  measurementId: "G-3KQJM84HTT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };