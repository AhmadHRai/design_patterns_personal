// Abstract Factory
class AbstractFactory {
    createProductA() {
      throw new Error("Abstract method!");
    }
  
    createProductB() {
      throw new Error("Abstract method!");
    }
  }
  
  // Concrete Factories
  class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
      return new ConcreteProductA1();
    }
  
    createProductB() {
      return new ConcreteProductB1();
    }
  }
  
  class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
      return new ConcreteProductA2();
    }
  
    createProductB() {
      return new ConcreteProductB2();
    }
  }
  
  // Abstract Products
  class AbstractProductA {
    usefulFunctionA() {
      throw new Error("Abstract method!");
    }
  }
  
  class AbstractProductB {
    usefulFunctionB() {
      throw new Error("Abstract method!");
    }
  }
  
  // Concrete Products
  class ConcreteProductA1 extends AbstractProductA {
    usefulFunctionA() {
      return "The result of the product A1.";
    }
  }
  
  class ConcreteProductA2 extends AbstractProductA {
    usefulFunctionA() {
      return "The result of the product A2.";
    }
  }
  
  class ConcreteProductB1 extends AbstractProductB {
    usefulFunctionB() {
      return "The result of the product B1.";
    }
  }
  
  class ConcreteProductB2 extends AbstractProductB {
    usefulFunctionB() {
      return "The result of the product B2.";
    }
  }
  
  // Usage
  function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
  
    console.log(productA.usefulFunctionA());
    console.log(productB.usefulFunctionB());
  }
  
  console.log("Client: Using ConcreteFactory1");
  const factory1 = new ConcreteFactory1();
  clientCode(factory1);
  
  console.log("\nClient: Using ConcreteFactory2");
  const factory2 = new ConcreteFactory2();
  clientCode(factory2);
  