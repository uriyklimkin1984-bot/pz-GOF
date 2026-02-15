// Підсистеми
class CPU {
  freeze() {
    console.log("CPU: freeze");
  }
  jump(position: number) {
    console.log(`CPU: jump to ${position}`);
  }
  execute() {
    console.log("CPU: execute");
  }
}

class Memory {
  load(position: number, data: string) {
    console.log(`Memory: loading ${data} at ${position}`);
  }
}

class HardDrive {
  read(sector: number, size: number): string {
    console.log(`HardDrive: reading ${size} bytes from sector ${sector}`);
    return "BOOT_DATA";
  }
}

// Facade
export class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start(): void {
    this.cpu.freeze();
    const data = this.hardDrive.read(0, 1024);
    this.memory.load(0, data);
    this.cpu.jump(0);
    this.cpu.execute();
  }
}