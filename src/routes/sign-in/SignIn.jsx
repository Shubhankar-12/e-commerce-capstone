import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.js";
import SignUp from "../../components/sign-up/SignUp.jsx";

const SignIn = () => {
  useEffect(() => {
    const redirectRes = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDateRef = await createUserDocFromAuth(response.user);
      }
    };
    redirectRes();
  }, []);
  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDateRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUserPopup}>Sign In with Google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google redirect
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
