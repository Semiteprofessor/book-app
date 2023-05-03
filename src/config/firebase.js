/** @format */

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQTHBgpSnSNvVYdUBzoojo2eK20zdnwIM",
  authDomain: "book-app-fa4da.firebaseapp.com",
  projectId: "book-app-fa4da",
  storageBucket: "book-app-fa4da.appspot.com",
  messagingSenderId: "274109131779",
  appId: "1:274109131779:web:822b635ca5d27f1ef7b236",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
