// Complex subsystems
class SubsystemA {
    operationA() {
      return "Subsystem A operation";
    }
  }
  
  class SubsystemB {
    operationB() {
      return "Subsystem B operation";
    }
  }
  
  // Facade
  class Facade {
    constructor(subsystemA, subsystemB) {
      this.subsystemA = subsystemA;
      this.subsystemB = subsystemB;
    }
  
    operation() {
      let result = "Facade initializes subsystems:\n";
      result += this.subsystemA.operationA();
      result += "\n" + this.subsystemB.operationB();
      return result;
    }
  }
  
  // Usage
  const subsystemA = new SubsystemA();
  const subsystemB = new SubsystemB();
  const facade = new Facade(subsystemA, subsystemB);
  
  console.log(facade.operation());
  