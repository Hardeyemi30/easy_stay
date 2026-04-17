import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLpsOA-XrmaJVcX_C9KPLFJtLaxOJHWvw",
  authDomain: "easy-stay-3f70f.firebaseapp.com",
  projectId: "easy-stay-3f70f",
  storageBucket: "easy-stay-3f70f.firebasestorage.app",
  messagingSenderId: "136788427873",
  appId: "1:136788427873:web:0f23b02ea7e6b9c3b25620",
  measurementId: "G-4P32NGEX89"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);