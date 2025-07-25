// ملف تهيئة Firebase
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBzDjHHYRdjYYKD3ijzdfU2_Q-V-x2xT-Y",
  authDomain: "fadi-3b10f.firebaseapp.com",
  projectId: "fadi-3b10f",
  storageBucket: "fadi-3b10f.firebasestorage.app",
  messagingSenderId: "416625022398",
  appId: "1:416625022398:web:b9351ddd953b775a9655ef",
  measurementId: "G-C5CBQGK5SE"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
