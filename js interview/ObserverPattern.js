class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observerFn) {
    this.observers.push(observerFn);
  }

  unsubscribe(observerFn) {
    this.observers = this.observers.filter(fn => fn !== observerFn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

// Example usage
const newsAgency = new Subject();

function subscriber1(news) {
  console.log("Subscriber 1 received:", news);
}

function subscriber2(news) {
  console.log("Subscriber 2 received:", news);
}

newsAgency.subscribe(subscriber1);
newsAgency.subscribe(subscriber2);

newsAgency.notify("Breaking News: JavaScript conquers the world!");

