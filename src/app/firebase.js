import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyArAUGyzJCa2BreC9cX2NcUtuQ0JaOzgLA",
  authDomain: "fireauth-a91dc.firebaseapp.com",
  projectId: "fireauth-a91dc",
  storageBucket: "fireauth-a91dc.appspot.com",
  messagingSenderId: "986503040539",
  appId: "1:986503040539:web:d84718121b2055c433b2be"
};

const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
export const db = getFirestore(app)