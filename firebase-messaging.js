// firebase-messaging.js
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration);

      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          getToken(messaging, { vapidKey: VAPID_KEY, serviceWorkerRegistration: registration })
            .then((currentToken) => {
              if (currentToken) {
                console.log('FCM Token:', currentToken);
                // هنا خزّن التوكن في سيرفرك أو استعمله حسب حاجتك
              } else {
                console.log('No registration token available.');
              }
            })
            .catch((err) => {
              console.log('Error getting token:', err);
            });
        } else {
          console.log('Notification permission denied');
        }
      });
    })
    .catch((err) => {
      console.log('Service Worker registration failed:', err);
    });
} else {
  console.log('Service workers are not supported.');
}

onMessage(messaging, (payload) => {
  console.log('Message received in foreground: ', payload);
  // هنا يمكنك عرض إشعار أو تحديث الصفحة حسب الرسالة
});
