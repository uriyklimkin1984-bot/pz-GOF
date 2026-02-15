export class Singleton {
  private static instance: Singleton;

  // приватний конструктор — забороняє new Singleton()
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public log(message: string): void {
    console.log(`[Singleton]: ${message}`);
  }
}