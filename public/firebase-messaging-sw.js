// Service Worker لإظهار التنبيهات
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

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

messaging.onBackgroundMessage((payload) => {
  console.log('رسالة بالخلفية:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // عدلها حسب تصميمك
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
