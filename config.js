import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD5saWzdRCLQu5wv9YnZLATLM7gbvGOTAk",
    authDomain: "teamvoting-c86d5.firebaseapp.com",
    projectId: "teamvoting-c86d5",
    storageBucket: "teamvoting-c86d5.appspot.com",
    messagingSenderId: "969198550417",
    appId: "1:969198550417:web:52d719a2f9b69e74436e30"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.database();