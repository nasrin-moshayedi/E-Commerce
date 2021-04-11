import firebase from "firebase/app";//invlude app utilies\
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig  = {
    apiKey: "AIzaSyBCMF2q5_skGl-2HRK4-u9Ld8cqz7b9O3k",
    authDomain: "crown-db-46229.firebaseapp.com",
    projectId: "crown-db-46229",
    storageBucket: "crown-db-46229.appspot.com",
    messagingSenderId: "315698535245",
    appId: "1:315698535245:web:18c2c9a74f75b8728b3504",
    measurementId: "G-J6YN4EPVPK"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const  firestore = firebase.firestore();


//google authentication
var provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({
//     'login_hint': 'user@example.com'
// });
provider.setCustomParameters({ prompt: "select_account" });
export const signinWidthGoogle = () =>firebase.auth().signInWithPopup(provider)

// const result = await auth().signInWithPopup(provider)
export default firebase;
