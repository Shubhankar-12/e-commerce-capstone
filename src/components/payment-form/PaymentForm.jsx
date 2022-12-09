import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { Button_type_classes } from "../button/Button";
import { FormContainer, PaymentFormContainer } from "./payment.styles";
const PaymentForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !element) return;
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType={Button_type_classes.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
