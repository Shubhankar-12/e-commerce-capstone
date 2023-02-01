import { Fragment } from "react";

import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { AuthContainer } from "./Authentication.styles";
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
    <AuthContainer>
      {currentUser !== null ? (
        <h1>You are Successfully Logged in!</h1>
      ) : (
        <Fragment>
          <SignIn />
          <SignUp />
        </Fragment>
      )}
    </AuthContainer>
  );
};

export default Authentication;
