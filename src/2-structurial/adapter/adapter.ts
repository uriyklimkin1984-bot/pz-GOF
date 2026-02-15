// Target interface (очікуваний інтерфейс)
export interface PaymentProcessor {
  pay(amount: number): void;
}

// Старий клас (Adaptee)
class OldPaymentSystem {
  makePayment(sum: number): void {
    console.log(`Old system paid ${sum} USD`);
  }
}

// Adapter
export class PaymentAdapter implements PaymentProcessor {
  private oldSystem: OldPaymentSystem;

  constructor(oldSystem: OldPaymentSystem) {
    this.oldSystem = oldSystem;
  }

  pay(amount: number): void {
    this.oldSystem.makePayment(amount);
  }
}