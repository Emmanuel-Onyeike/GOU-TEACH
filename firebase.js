
// ✅ Firebase core setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwu7gufqSKAnMutOs_cv6_xhYZQ9s6tQw",
  authDomain: "goteach-276b6.firebaseapp.com",
  projectId: "goteach-276b6",
  storageBucket: "goteach-276b6.firebasestorage.app",
  messagingSenderId: "270747208183",
  appId: "1:270747208183:web:42a884509da5e14f4406f2",
  measurementId: "G-KQLHT74L1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Make them global
window.auth = auth;
window.db = db;

