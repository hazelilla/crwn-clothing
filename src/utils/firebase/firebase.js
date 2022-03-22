import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBFPnxQTxtoSfMy_tP9bkAtp9ob2bv9YKU",
    authDomain: "crwn-clothing-5374a.firebaseapp.com",
    projectId: "crwn-clothing-5374a",
    storageBucket: "crwn-clothing-5374a.appspot.com",
    messagingSenderId: "795222999896",
    appId: "1:795222999896:web:b6ac0170490aa7c2861b2d"
};
  
const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 