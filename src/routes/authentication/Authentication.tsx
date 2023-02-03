import { Fragment, useState } from "react";

import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { AuthContainer, Register, RegisterLink } from "./Authentication.styles";
const Authentication = () => {
  const navigate = useNavigate();
  const redirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const [newUser, setNewUser] = useState(false);

  const toggleNewUser = () => {
    setNewUser(!newUser);
  };

  const currentUser = useSelector(selectCurrentUser);
  if (currentUser) redirect();
  return (
    <AuthContainer>
      {currentUser !== null ? (
        <h1>You are Successfully Logged in!</h1>
      ) : (
        <Fragment>
          <SignIn newUser={newUser} />
          <SignUp newUser={newUser} />
          {newUser ? (
            <Register>
              Already Have an Account?{" "}
              <RegisterLink onClick={toggleNewUser}>Sign In!</RegisterLink>
            </Register>
          ) : (
            <Register>
              New Here?{" "}
              <RegisterLink onClick={toggleNewUser}>Register now!</RegisterLink>
            </Register>
          )}
        </Fragment>
      )}
    </AuthContainer>
  );
};

export default Authentication;
