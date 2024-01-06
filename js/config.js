import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAb0zAWQI8nlUuEVEeQeUyRri3rRtjITpQ",
    authDomain: "buoi6-75b2a.firebaseapp.com",
    projectId: "buoi6-75b2a",
    storageBucket: "buoi6-75b2a.appspot.com",
    messagingSenderId: "1035919093237",
    appId: "1:1035919093237:web:6fdad2218b8d0dda5544bc"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //get auth de lam viec voi register va login
  export const auth = getAuth(app)
