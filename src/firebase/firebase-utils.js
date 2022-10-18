import { firebaseConfig } from "./firebase-config";
import {initializeApp} from "firebase/app";

const app = initializeApp(firebaseConfig); 

export const createUserProfileDocument = async userAuth =>{

if(!userAuth || !userAuth.emailVerified) return;
const userRef = doc(firestore, `users/${userAuth.uid}`);
const snapShot = await getDoc(userRef);

if(!snapShot.exists()){
    const {  displayName, email, photoURL} = userAuth;
    const createAt = new Date();
    try{
        await MediaStreamAudioSourceNode(doc(firestore, `users/${userAuth.uid}`),{
            displayName: displayName || localStorage.getItem('username'),
            email,
            photoURL,
            createAt,
        });
    }catch(error){
        console.log('error creating user', error.message);
    }
}
return userRef;
}


