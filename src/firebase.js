import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAecUJGYdQVmQg7kt6K1awEBFUToseILF4",
    authDomain: "myrume-d26d4.firebaseapp.com",
    projectId: "myrume-d26d4",
    storageBucket: "myrume-d26d4.appspot.com",
    messagingSenderId: "136537654997",
    appId: "1:136537654997:web:7a6c153ad0bcb78ae8c45c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db