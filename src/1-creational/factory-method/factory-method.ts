// Product interface
interface Transport {
  deliver(): void;
}

// Concrete Product
class Truck implements Transport {
  deliver(): void {
    console.log("Доставка вантажівкою");
  }
}

// Creator
abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(): void {
    const transport = this.createTransport();
    transport.deliver();
  }
}

// Concrete Creator
export class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}