// Subject
class Subject {
    constructor() {
      this.state = null;
      this.observers = [];
    }
  
    attach(observer) {
      console.log("Subject: Attached an observer.");
      this.observers.push(observer);
    }
  
    detach(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify() {
      console.log("Subject: Notifying observers...");
      this.observers.forEach(observer => {
        observer.update(this);
      });
    }
  
    someBusinessLogic() {
      console.log("\nSubject: I'm doing something important.");
      this.state = Math.floor(Math.random() * (10 + 1));
      console.log(`Subject: My state has just changed to: ${this.state}`);
      this.notify();
    }
  }
  
  // Observer
  class Observer {
    update(subject) {
      throw new Error("Abstract method!");
    }
  }
  
  // Concrete Observers
  class ConcreteObserverA extends Observer {
    update(subject) {
      if (subject.state < 3) {
        console.log("ConcreteObserverA: Reacted to the event.");
      }
    }
  }
  
  class ConcreteObserverB extends Observer {
    update(subject) {
      if (subject.state === 0 || subject.state >= 2) {
        console.log("ConcreteObserverB: Reacted to the event.");
      }
    }
  }
  
  // Usage
  const subject = new Subject();
  
  const observer1 = new ConcreteObserverA();
  const observer2 = new ConcreteObserverB();
  
  subject.attach(observer1);
  subject.attach(observer2);
  
  subject.someBusinessLogic();
  subject.someBusinessLogic();
  
  subject.detach(observer2);
  
  subject.someBusinessLogic();
  