// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDCQftif97645nLYcITrz4D1Sxsk6kq42o",
//   authDomain: "denta-care.firebaseapp.com",
//   projectId: "denta-care",
//   storageBucket: "denta-care.appspot.com",
//   messagingSenderId: "116703875052",
//   appId: "1:116703875052:web:ae56ba6df48fa42e993ac9"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;