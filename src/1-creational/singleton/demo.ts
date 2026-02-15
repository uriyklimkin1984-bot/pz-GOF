import { Singleton } from "./singleton";

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.log("First call");
instance2.log("Second call");

console.log("Same instance:", instance1 === instance2);