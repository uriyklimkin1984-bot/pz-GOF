"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    // приватний конструктор — забороняє new Singleton()
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    log(message) {
        console.log(`[Singleton]: ${message}`);
    }
}
exports.Singleton = Singleton;
