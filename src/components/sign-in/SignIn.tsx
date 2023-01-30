import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.acton";
import Button, { Button_type_classes } from "../button/Button";
import FormInput from "../form-input/FormInput";
import { ButtonContaner, SignInContainer } from "./sign-in.styles";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      setFormFields(defaultFormFields);
    } catch (err) {
      console.log(err);
    }
  };
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };
  return (
    <SignInContainer>
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
        <ButtonContaner>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={Button_type_classes.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonContaner>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
