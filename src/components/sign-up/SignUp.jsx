import React, { useState } from "react";
import {
  createAuthWithEmailPass,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-up.scss";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    try {
      const { user } = await createAuthWithEmailPass(email, password);

      setFormFields(defaultFormFields);
      await createUserDocFromAuth(user, { displayName });
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("User already exist");
      } else console.log(e);
    }
  };
  return (
    <div className='sign-up-container'>
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
    </div>
  );
};

export default SignUp;
