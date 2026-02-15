// Observer interface
export interface Observer {
  update(message: string): void;
}

// Subject interface
export interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete Subject
export class NewsAgency implements Subject {
  private observers: Observer[] = [];
  private news: string = "";

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  setNews(news: string): void {
    this.news = news;
    this.notify();
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }
}

// Concrete Observer
export class NewsChannel implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(message: string): void {
    console.log(`${this.name} received news: ${message}`);
  }
}