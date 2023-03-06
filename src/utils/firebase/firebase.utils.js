import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
   } from 'firebase/auth'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu9_A8g4HA4G3I_GcEwenM84LAuy9KNJY",
    authDomain: "crwn-clothing-db-c0fe1.firebaseapp.com",
    projectId: "crwn-clothing-db-c0fe1",
    storageBucket: "crwn-clothing-db-c0fe1.appspot.com",
    messagingSenderId: "729248874444",
    appId: "1:729248874444:web:979d25fda2c467ea4fa769"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);