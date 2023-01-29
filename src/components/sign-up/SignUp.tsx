import { AuthError, AuthErrorCodes } from "firebase/auth";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.acton";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import { SignUpContainer } from "./sign-up.styles";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      setFormFields(defaultFormFields);
    } catch (e) {
      if ((e as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("User already exist");
      } else console.log(e);
    }
  };
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          type='text'
          label={"Display Name"}
          required
          name='displayName'
          onChange={handleChange}
          value={displayName}
        />
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
        <FormInput
          label={"Confirm Password"}
          type='password'
          required
          name='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
