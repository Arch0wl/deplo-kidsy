import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk3pjeowT8fYZUSInpuw4BENKRsvIESFs",
  authDomain: "deploy-kidsy-api-fb.firebaseapp.com",
  projectId: "deploy-kidsy-api-fb",
  storageBucket: "deploy-kidsy-api-fb.appspot.com",
  messagingSenderId: "1093709318281",
  appId: "1:1093709318281:web:d7bc836fc9304bbee2de58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
