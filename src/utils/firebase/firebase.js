import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwfNk3BgNyQSO7qcKabc1sxitrzkvz2Ag",
  authDomain: "crwn-clothing-db-a93c6.firebaseapp.com",
  projectId: "crwn-clothing-db-a93c6",
  storageBucket: "crwn-clothing-db-a93c6.appspot.com",
  messagingSenderId: "178455425459",
  appId: "1:178455425459:web:c2428b0f26d691d73cdbc6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore();

export const addCollectionandDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("finished");
};

export const getCollectionandDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSanpshot) => {
    const { title, items } = docSanpshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocFromAuth = async (userAuth, additonalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additonalInfo,
      });
    } catch (e) {
      console.log("Error creating the use \n", e.message);
    }
  }
  return userDocRef;
};

export const createAuthWithEmailPass = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInWithEmailPass = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
