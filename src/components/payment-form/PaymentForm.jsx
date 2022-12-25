import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button_type_classes } from "../button/Button";
import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from "./payment.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState } from "react";
import { emptyCart } from "../../store/cart/cart.action";
const PaymentForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !element) return;

    setIsProcessing(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    setIsProcessing(false);
    if (paymentResult.error) alert(paymentResult.error);
    else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
        dispatch(emptyCart());
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessing}
          buttonType={Button_type_classes.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
