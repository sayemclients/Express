// ============================================================
// Firebase কনফিগারেশন — এখানে আপনার নিজের প্রজেক্টের তথ্য বসান
// ============================================================
// কীভাবে পাবেন:
// 1) https://console.firebase.google.com এ যান, একটি প্রজেক্ট তৈরি করুন।
// 2) প্রজেক্টের ভেতরে "Project settings" (⚙️ আইকন) > "General" ট্যাবে যান।
// 3) "Your apps" সেকশনে "</>" (Web) আইকনে ক্লিক করে একটি ওয়েব অ্যাপ যোগ করুন।
// 4) যে কনফিগারেশন অবজেক্ট দেখাবে সেটি নিচে বসিয়ে দিন (হুবহু)।
//
// বিস্তারিত ধাপে ধাপে নির্দেশনা README.md ফাইলে দেওয়া আছে।
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCuwvfj_AGH7zrk6CX8_5mg9xvoDR8hZkc",
  authDomain: "ruhit-computer.firebaseapp.com",
  projectId: "ruhit-computer",
  storageBucket: "ruhit-computer.firebasestorage.app",
  messagingSenderId: "177528641210",
  appId: "1:177528641210:web:8fd13fa7beaa15b7291483"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
