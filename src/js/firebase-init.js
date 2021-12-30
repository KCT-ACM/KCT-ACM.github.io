import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyClEH2YrNEqZBkpXOULf4CcYwR7H3L9cN4",
  authDomain: "kct-acm.firebaseapp.com",
  databaseURL: "https://kct-acm-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kct-acm",
  storageBucket: "kct-acm.appspot.com",
  messagingSenderId: "873681637837",
  appId: "1:873681637837:web:491571063e3f3db73b3484",
  measurementId: "G-G7YZ1MSEZ4"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);