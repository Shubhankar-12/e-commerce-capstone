import React from "react";

import SignUp from "../../components/sign-up/SignUp.jsx";
import SignIn from "../../components/sign-in/SignIn.jsx";
import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className='auth-container'>
      {/* <button onClick={logGoogleUserPopup}>Sign In with Google popup</button> */}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
