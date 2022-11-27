import React, { Fragment, useContext } from "react";

import SignUp from "../../components/sign-up/SignUp.jsx";
import SignIn from "../../components/sign-in/SignIn.jsx";
import "./Authentication.scss";
import { UserContext } from "../../contexts/user.context.jsx";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <div className='auth-container'>
      {currentUser !== null ? (
        <h1>You are Successfully Logged in!</h1>
      ) : (
        <Fragment>
          <SignIn />
          <SignUp />
        </Fragment>
      )}
    </div>
  );
};

export default Authentication;
