"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_1 = require("./adapter");
class OldPaymentSystem {
    makePayment(sum) {
        console.log(`Old system paid ${sum} USD`);
    }
}
const oldSystem = new OldPaymentSystem();
const adapter = new adapter_1.PaymentAdapter(oldSystem);
adapter.pay(100);
