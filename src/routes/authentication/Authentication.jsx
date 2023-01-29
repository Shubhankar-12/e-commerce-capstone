import React, { Fragment } from "react";

import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
import "./Authentication.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Authentication = () => {
  const navigate = useNavigate();
  const redirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const currentUser = useSelector(selectCurrentUser);
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
