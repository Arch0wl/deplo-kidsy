import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBA22ZTHA-GWOqwLR01Mcb0BANzNXNvQdo",
  authDomain: "deploy-kidsy.firebaseapp.com",
  projectId: "deploy-kidsy",
  storageBucket: "deploy-kidsy.appspot.com",
  messagingSenderId: "741134160279",
  appId: "1:741134160279:web:64e00a3f19553e9aa9f4d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
