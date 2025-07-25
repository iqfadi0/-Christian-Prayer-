importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBzDjHHYRdjYYKD3ijzdfU2_Q-V-x2xT-Y",
  authDomain: "fadi-3b10f.firebaseapp.com",
  projectId: "fadi-3b10f",
  storageBucket: "fadi-3b10f.firebasestorage.app",
  messagingSenderId: "416625022398",
  appId: "1:416625022398:web:b9351ddd953b775a9655ef",
  measurementId: "G-C5CBQGK5SE"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'  // غيّر هذا إذا عندك أيقونة للإشعارات
  });
});
