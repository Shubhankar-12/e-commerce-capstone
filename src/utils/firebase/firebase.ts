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
  User,
  NextOrObserver,
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
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/categories/category.type";

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

export type ObjectToAdd = {
  title: string;
};

export const addCollectionandDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("finished");
};

export const getCollectionandDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export type AdditonalInfo = {
  displayName?: string;
};
export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocFromAuth = async (
  userAuth: User,
  additonalInfo = {} as AdditonalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
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
      console.log("Error creating the use \n", e);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthWithEmailPass = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInWithEmailPass = async (email: string, password: string) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unSubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
