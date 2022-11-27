import React, { Fragment, useContext, useEffect } from "react";

import SignUp from "../../components/sign-up/SignUp.jsx";
import SignIn from "../../components/sign-in/SignIn.jsx";
import "./Authentication.scss";
import { UserContext } from "../../contexts/user.context.jsx";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const redirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  const { currentUser } = useContext(UserContext);
  if (currentUser) redirect();
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
