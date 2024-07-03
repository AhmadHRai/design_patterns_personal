// Product interface
class Product {
    operation() {
      throw new Error("Abstract method!");
    }
  }
  
  // Concrete Products
  class ConcreteProductA extends Product {
    operation() {
      return "ConcreteProductA operation";
    }
  }
  
  class ConcreteProductB extends Product {
    operation() {
      return "ConcreteProductB operation";
    }
  }
  
  // Creator interface
  class Creator {
    factoryMethod() {
      throw new Error("Abstract method!");
    }
  
    someOperation() {
      const product = this.factoryMethod();
      return `Creator: ${product.operation()}`;
    }
  }
  
  // Concrete Creators
  class ConcreteCreatorA extends Creator {
    factoryMethod() {
      return new ConcreteProductA();
    }
  }
  
  class ConcreteCreatorB extends Creator {
    factoryMethod() {
      return new ConcreteProductB();
    }
  }
  
  // Usage
  const creator1 = new ConcreteCreatorA();
  console.log(creator1.someOperation());
  
  const creator2 = new ConcreteCreatorB();
  console.log(creator2.someOperation());
  