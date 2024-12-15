import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCoIu-Qz4sGdYCzYokhUPXLSmG9HvryHoI",
  authDomain: "my-wealth-df151.firebaseapp.com",
  projectId: "my-wealth-df151",
  storageBucket: "my-wealth-df151.firebasestorage.app",
  messagingSenderId: "326275812505",
  appId: "1:326275812505:web:bb7902770d6b3f778bbc08",
  measurementId: "G-8BHM20XBP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
};