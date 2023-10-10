
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCXvdxdDAYw18xsUcGTesybqW2uM0kMKv8",
    authDomain: "clone-15f28.firebaseapp.com",
    databaseURL: "https://clone-15f28-default-rtdb.firebaseio.com/",
    projectId: "clone-15f28",
    storageBucket: "clone-15f28.appspot.com",
    messagingSenderId: "283840160634",
    appId: "1:283840160634:web:69defad4785b7e01ceacc3",
    measurementId: "G-Z6WSNDFXGF"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

export { auth}
