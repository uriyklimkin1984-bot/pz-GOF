"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadLogistics = void 0;
// Concrete Product
class Truck {
    deliver() {
        console.log("Доставка вантажівкою");
    }
}
// Creator
class Logistics {
    planDelivery() {
        const transport = this.createTransport();
        transport.deliver();
    }
}
// Concrete Creator
class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}
exports.RoadLogistics = RoadLogistics;
