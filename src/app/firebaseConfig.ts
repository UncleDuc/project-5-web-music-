import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkK7GgH8eggSRTUj-DmFU36w_pCU3AeuQ",
  authDomain: "project-5-278ff.firebaseapp.com",
  databaseURL: "https://project-5-278ff-default-rtdb.firebaseio.com",
  projectId: "project-5-278ff",
  storageBucket: "project-5-278ff.appspot.com",
  messagingSenderId: "617476578590",
  appId: "1:617476578590:web:c9ccef6e4657e996693d0f"
};

const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);
const authFirebase = getAuth(app);

export { dbFirebase, authFirebase };
