import React from "react";
import "./button.styles.jsx";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LoadingSpinner,
} from "./button.styles.jsx";
export const Button_type_classes = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = Button_type_classes.base) =>
  ({
    [Button_type_classes.base]: BaseButton,
    [Button_type_classes.google]: GoogleSignInButton,
    [Button_type_classes.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
