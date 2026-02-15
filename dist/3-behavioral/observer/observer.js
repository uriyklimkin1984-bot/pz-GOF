"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsChannel = exports.NewsAgency = void 0;
// Concrete Subject
class NewsAgency {
    constructor() {
        this.observers = [];
        this.news = "";
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    setNews(news) {
        this.news = news;
        this.notify();
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this.news);
        }
    }
}
exports.NewsAgency = NewsAgency;
// Concrete Observer
class NewsChannel {
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(`${this.name} received news: ${message}`);
    }
}
exports.NewsChannel = NewsChannel;
