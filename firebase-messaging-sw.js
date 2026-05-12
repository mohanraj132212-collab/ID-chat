importScripts("https://www.gstatic.com/firebasejs/12.13.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.13.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDk4IDGZf1amsBzSNNGxqGWX_cvqIZe-ec",
  authDomain: "id-chat-2e854.firebaseapp.com",
  projectId: "id-chat-2e854",
  storageBucket: "id-chat-2e854.firebasestorage.app",
  messagingSenderId: "383136453720",
  appId: "1:383136453720:web:61a7f8259508611b03a62d",
  measurementId: "G-YNDN6MD337"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  console.log("Background Message:", payload);

  const title =
    payload.notification?.title || "ID CHAT";

  const options = {
    body:
      payload.notification?.body ||
      "New Message",
    icon: "logo.png"
  };

  self.registration.showNotification(
    title,
    options
  );

});