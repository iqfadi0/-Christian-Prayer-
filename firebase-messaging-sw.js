import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzDjHHYRdjYYKD3ijzdfU2_Q-V-x2xT-Y",
  authDomain: "fadi-3b10f.firebaseapp.com",
  projectId: "fadi-3b10f",
  storageBucket: "fadi-3b10f.firebasestorage.app",
  messagingSenderId: "416625022398",
  appId: "1:416625022398:web:b9351ddd953b775a9655ef",
  measurementId: "G-C5CBQGK5SE"
};

const VAPID_KEY = "BIoNPdJwuJxVAzCGxJLxmiQCS4CnUnlajuykQgdsBFht8JvC9RCvAS82EXVvbNeNrsZg-48vC1ibhoB1QpXAL44";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    getToken(messaging, { vapidKey: VAPID_KEY }).then((currentToken) => {
      if (currentToken) {
        console.log('FCM Token:', currentToken);
        // هنا ترسل التوكن لسيرفرك أو تخزنه في قاعدة بياناتك
      } else {
        console.log('No registration token available.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  } else {
    console.log('Notification permission denied');
  }
});

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
});
