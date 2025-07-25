// ملف JS الرئيسي لتشغيل التنبيهات
import { messaging, getToken, onMessage } from './firebase-config.js';

const vapidKey = "BLyimBrNkJ2rZmULH65E_dHa5AJJgK-QhQ_srpMd8uWl-wKl1N0C7V6ydV1kYW_4BoEjkbBM8G0jsYqRQ";

getToken(messaging, { vapidKey: vapidKey })
  .then((currentToken) => {
    if (currentToken) {
      console.log("Token:", currentToken);
      // ممكن تبعته لسيرفرك هون إذا بدك
    } else {
      console.log('ما في توكن، لازم المستخدم يسمح بالإشعارات');
    }
  })
  .catch((err) => {
    console.log('فشل جلب التوكن:', err);
  });

onMessage(messaging, (payload) => {
  console.log('وصلت رسالة أثناء التصفح:', payload);
  alert("📩 إشعار جديد: " + payload.notification.title + "\n" + payload.notification.body);
});
