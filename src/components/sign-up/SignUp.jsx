import { async } from "@firebase/util";
import React, { useState } from "react";
import {
  createAuthWithEmailPass,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";

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
    <div>
      <h1>Sign Up with email/password </h1>
      <form onSubmit={submitHandler}>
        <label>Display Name</label>
        <input
          type='text'
          required
          name='displayName'
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          type='email'
          required
          name='email'
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type='password'
          required
          name='password'
          onChange={handleChange}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type='password'
          required
          name='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
