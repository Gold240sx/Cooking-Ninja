import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTHkH7qQsDU5wbLv4nx-Gutcm8WM7jdWI",
    authDomain: "cooking-ninja-site-c49ae.firebaseapp.com",
    projectId: "cooking-ninja-site-c49ae",
    storageBucket: "cooking-ninja-site-c49ae.appspot.com",
    messagingSenderId: "720474971627",
    appId: "1:720474971627:web:40d63141ff956bce494dae"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }