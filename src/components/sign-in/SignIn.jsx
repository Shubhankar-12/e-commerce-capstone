import React, { useState } from "react";
import {
  createAuthWithEmailPass,
  createUserDocFromAuth,
  signInWithEmailPass,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-in.scss";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailPass(email, password);
      console.log(response);
      setFormFields(defaultFormFields);
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("Incorrect Password");
      } else if (err.code === "auth/user-not-found") {
        alert("No User found with this account!");
      }
      console.log(err);
    }
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };
  return (
    <div className='sign-up-container'>
      <h2>Already have an Account!</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label={"Email"}
          type='email'
          required
          name='email'
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label={"Password"}
          type='password'
          required
          name='password'
          onChange={handleChange}
          value={password}
        />
        <div className='button-container-div'>
          <Button type='submit' onClick={submitHandler}>
            Sign In
          </Button>
          <Button
            buttonType={"google"}
            type='button'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
