import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJUqEGpGhtr1iLX5QcB0dKG2qwpgo7yH8",
  authDomain: "dipankar-barman-portfolio.firebaseapp.com",
  projectId: "dipankar-barman-portfolio",
  storageBucket: "dipankar-barman-portfolio.appspot.com",
  messagingSenderId: "190530121669",
  appId: "1:190530121669:web:837ac3b65aedb3aad025ac"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
