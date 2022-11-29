import React, { Fragment } from "react";

import SignUp from "../../components/sign-up/SignUp.jsx";
import SignIn from "../../components/sign-in/SignIn.jsx";
import "./Authentication.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Authentication = () => {
  const navigate = useNavigate();
  const redirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const currentUser = useSelector((state) => state.user.currentUser);
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
