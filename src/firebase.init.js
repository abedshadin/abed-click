// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEa1tOp-9OLSFZxFCdxpVZO0w94G9W3FM",
  authDomain: "wedding-capture.firebaseapp.com",
  projectId: "wedding-capture",
  storageBucket: "wedding-capture.appspot.com",
  messagingSenderId: "277003956124",
  appId: "1:277003956124:web:851479aba8e9086e036259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;