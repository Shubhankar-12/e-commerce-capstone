import React, { ButtonHTMLAttributes } from "react";
import "./button.styles";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LoadingSpinner,
} from "./button.styles.jsx";
export enum Button_type_classes {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButton = (buttonType = Button_type_classes.base): typeof BaseButton =>
  ({
    [Button_type_classes.base]: BaseButton,
    [Button_type_classes.google]: GoogleSignInButton,
    [Button_type_classes.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  chilldren?: React.ReactNode;
  buttonType?: Button_type_classes;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}: ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
