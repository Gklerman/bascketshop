
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-KZCpKdXmr3XnP9Yzei5MbzR0CQD4VQY",
  authDomain: "basketshop-c429b.firebaseapp.com",
  projectId: "basketshop-c429b",
  storageBucket: "basketshop-c429b.appspot.com",
  messagingSenderId: "84963535161",
  appId: "1:84963535161:web:70d33e8d6ef97ae37d60e8"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);