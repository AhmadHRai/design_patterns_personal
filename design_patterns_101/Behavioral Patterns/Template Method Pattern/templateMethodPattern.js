// Abstract Class
class AbstractClass {
    templateMethod() {
      this.baseOperation1();
      this.requiredOperation1();
      this.baseOperation2();
      this.hook1();
      this.requiredOperation2();
      this.baseOperation3();
      this.hook2();
    }
  
    baseOperation1() {
      console.log("AbstractClass says: I am doing the bulk of the work");
    }
  
    baseOperation2() {
      console.log("AbstractClass says: But I let subclasses override some operations");
    }
  
    baseOperation3() {
      console.log("AbstractClass says: But I am doing the bulk of the work");
    }
  
    requiredOperation1() {
      throw new Error("Abstract method!");
    }
  
    requiredOperation2() {
      throw new Error("Abstract method!");
    }
  
    hook1() {}
  
    hook2() {}
  }
  
  // Concrete Class
  class ConcreteClass1 extends AbstractClass {
    requiredOperation1() {
      console.log("ConcreteClass1 says: Implemented Operation1");
    }
  
    requiredOperation2() {
      console.log("ConcreteClass1 says: Implemented Operation2");
    }
  }
  
  // Another Concrete Class
  class ConcreteClass2 extends AbstractClass {
    requiredOperation1() {
      console.log("ConcreteClass2 says: Implemented Operation1");
    }
  
    requiredOperation2() {
      console.log("ConcreteClass2 says: Implemented Operation2");
    }
  
    hook1() {
      console.log("ConcreteClass2 says: Override Hook1");
    }
  
    hook2() {
      console.log("ConcreteClass2 says: Override Hook2");
    }
  }
  
  // Usage
  function clientCode(abstractClass) {
    abstractClass.templateMethod();
  }
  
  console.log("Same client code can work with different subclasses:");
  clientCode(new ConcreteClass1());
  
  console.log("\nSame client code can work with different subclasses:");
  clientCode(new ConcreteClass2());
  