// Component interface
class Component {
    operation() {
      throw new Error("Abstract method!");
    }
  }
  
  // Concrete Component
  class ConcreteComponent extends Component {
    operation() {
      return "ConcreteComponent operation";
    }
  }
  
  // Decorator
  class Decorator extends Component {
    constructor(component) {
      super();
      this.component = component;
    }
  
    operation() {
      return this.component.operation();
    }
  }
  
  // Concrete Decorators
  class ConcreteDecoratorA extends Decorator {
    operation() {
      return `ConcreteDecoratorA(${this.component.operation()})`;
    }
  }
  
  class ConcreteDecoratorB extends Decorator {
    operation() {
      return `ConcreteDecoratorB(${this.component.operation()})`;
    }
  }
  
  // Usage
  const simple = new ConcreteComponent();
  console.log("Client: I've got a simple component:");
  console.log(simple.operation());
  
  const decorator1 = new ConcreteDecoratorA(simple);
  const decorator2 = new ConcreteDecoratorB(decorator1);
  console.log("\nClient: Now I've got a decorated component:");
  console.log(decorator2.operation());
  