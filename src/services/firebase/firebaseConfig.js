import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5x-YKrCqxIDU4re5161Su35mXbp-2J5M",
  authDomain: "e-commerce-londero.firebaseapp.com",
  projectId: "e-commerce-londero",
  storageBucket: "e-commerce-londero.appspot.com",
  messagingSenderId: "284508041245",
  appId: "1:284508041245:web:429e55150fd8972f7756f4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)