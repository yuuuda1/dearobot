import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAkRcOIBoH08dVKikVcMLuEEqhF0Z6gdU",
  authDomain: "dearobot-e6b85.firebaseapp.com",
  databaseURL: "https://dearobot-e6b85.firebaseio.com",
  projectId: "dearobot-e6b85",
  storageBucket: "dearobot-e6b85.appspot.com",
  messagingSenderId: "160878811236",
  appId: "1:160878811236:web:7c8bf9e901dbc9de186771",
  measurementId: "G-5393YP2JFE",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase.firestore();
