"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerFacade = void 0;
// Підсистеми
class CPU {
    freeze() {
        console.log("CPU: freeze");
    }
    jump(position) {
        console.log(`CPU: jump to ${position}`);
    }
    execute() {
        console.log("CPU: execute");
    }
}
class Memory {
    load(position, data) {
        console.log(`Memory: loading ${data} at ${position}`);
    }
}
class HardDrive {
    read(sector, size) {
        console.log(`HardDrive: reading ${size} bytes from sector ${sector}`);
        return "BOOT_DATA";
    }
}
// Facade
class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }
    start() {
        this.cpu.freeze();
        const data = this.hardDrive.read(0, 1024);
        this.memory.load(0, data);
        this.cpu.jump(0);
        this.cpu.execute();
    }
}
exports.ComputerFacade = ComputerFacade;
