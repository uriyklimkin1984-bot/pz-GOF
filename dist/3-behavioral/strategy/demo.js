"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strategy_1 = require("./strategy");
const context = new strategy_1.PaymentContext(new strategy_1.CreditCardPayment());
context.executePayment(200);
context.setStrategy(new strategy_1.PayPalPayment());
context.executePayment(150);
