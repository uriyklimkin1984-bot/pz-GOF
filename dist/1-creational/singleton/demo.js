"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
const instance1 = singleton_1.Singleton.getInstance();
const instance2 = singleton_1.Singleton.getInstance();
instance1.log("First call");
instance2.log("Second call");
console.log("Same instance:", instance1 === instance2);
