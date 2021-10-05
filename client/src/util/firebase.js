import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

var config = {
    apiKey: "AIzaSyDqojW8K_Ap_yZGWLBY0VG0pwmTQ0acao4",
    authDomain: "kutchinarapp.firebaseapp.com",
    projectId: "kutchinarapp",
    storageBucket: "kutchinarapp.appspot.com",
    messagingSenderId: "311445398795",
    appId: "1:311445398795:web:87b06a2dfef77bacbfee0e",
    measurementId: "G-3PH19MMJQK"
  };
  
const fireDb = firebase.initializeApp(config);
export default fireDb.database().ref("/transaction");