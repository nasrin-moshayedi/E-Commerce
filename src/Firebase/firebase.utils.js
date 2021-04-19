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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;
    const  userRef = firestore.doc(`users/${userAuth.uid}`);
    const  snapShot = await userRef.get();
    //
    if(!snapShot.exists) {
        const  {displayName, email} = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (e) {
            console.log("error", e.message)
        }
    }
    return userRef;


//    query inside fire store

}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const  firestore = firebase.firestore();


// firestore.collection('users').doc('m8BoVwY7t4zZODexPkDG').collection('cart').doc();
// // firestore.doc("/users/m8BoVwY7t4zZODexPkDG/carts");
// firestore.collection("/users/m8BoVwY7t4zZODexPkDG/cart");

//google authentication

var provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({
//     'login_hint': 'user@example.com'
// });
provider.setCustomParameters({ prompt: "select_account" });
export const signinWidthGoogle = () =>firebase.auth().signInWithPopup(provider)

// const result = await auth().signInWithPopup(provider)
export default firebase;
