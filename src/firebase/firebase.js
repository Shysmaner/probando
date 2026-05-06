import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTJdpKkHNrQAM9ncKJZBhU2xurW0eYj0M",
  authDomain: "pruebas-be390.firebaseapp.com",
  projectId: "pruebas-be390",
  storageBucket: "pruebas-be390.firebasestorage.app",
  messagingSenderId: "769967276568",
  appId: "1:769967276568:web:fc5370b452af72fbc7f96d",
  measurementId: "G-BS4HEMZ32T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };