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
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: "10000" }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: "Shubh",
        },
      },
    });
    if (paymentResult.error) alert(paymentResult.error);
    else {
      if (paymentResult.paymentIntent.status === "succeeded")
        alert("Payment Successful");
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType={Button_type_classes.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
