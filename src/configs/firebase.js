import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, uploadBytes, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCozTltBRK4Mt5YexRwyqCGwyVAmVeQ1IE",
  authDomain: "cie-enrollment.firebaseapp.com",
  projectId: "cie-enrollment",
  storageBucket: "cie-enrollment.appspot.com",
  messagingSenderId: "294841041121",
  appId: "1:294841041121:web:cb39c76094a583c57ff7a0",
  measurementId: "G-PW0LNWHW5Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, uploadBytes, ref };
