"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdapter = void 0;
// Старий клас (Adaptee)
class OldPaymentSystem {
    makePayment(sum) {
        console.log(`Old system paid ${sum} USD`);
    }
}
// Adapter
class PaymentAdapter {
    constructor(oldSystem) {
        this.oldSystem = oldSystem;
    }
    pay(amount) {
        this.oldSystem.makePayment(amount);
    }
}
exports.PaymentAdapter = PaymentAdapter;
