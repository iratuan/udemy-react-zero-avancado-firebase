import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCz7b5NQYiJgaTTluWCxVvhTVobb2HYP58",
  authDomain: "udemy-react-6796d.firebaseapp.com",
  databaseURL: "https://udemy-react-6796d-default-rtdb.firebaseio.com",
  projectId: "udemy-react-6796d",
  storageBucket: "udemy-react-6796d.appspot.com",
  messagingSenderId: "1045724575578",
  appId: "1:1045724575578:web:533bce3ef0259e85b86563",
};

let app;
if (getApps.length == 0) {
  app = initializeApp(firebaseConfig);
}

export default app;
