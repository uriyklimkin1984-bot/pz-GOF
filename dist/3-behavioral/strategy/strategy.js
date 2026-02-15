"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentContext = exports.PayPalPayment = exports.CreditCardPayment = void 0;
// Concrete Strategies
class CreditCardPayment {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card`);
    }
}
exports.CreditCardPayment = CreditCardPayment;
class PayPalPayment {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal`);
    }
}
exports.PayPalPayment = PayPalPayment;
// Context
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    executePayment(amount) {
        this.strategy.pay(amount);
    }
}
exports.PaymentContext = PaymentContext;
