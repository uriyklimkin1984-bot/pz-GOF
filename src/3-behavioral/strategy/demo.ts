import {
  PaymentContext,
  CreditCardPayment,
  PayPalPayment,
} from "./strategy";

const context = new PaymentContext(new CreditCardPayment());
context.executePayment(200);

context.setStrategy(new PayPalPayment());
context.executePayment(150);