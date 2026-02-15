import { PaymentAdapter } from "./adapter";

class OldPaymentSystem {
  makePayment(sum: number): void {
    console.log(`Old system paid ${sum} USD`);
  }
}

const oldSystem = new OldPaymentSystem();
const adapter = new PaymentAdapter(oldSystem);

adapter.pay(100);