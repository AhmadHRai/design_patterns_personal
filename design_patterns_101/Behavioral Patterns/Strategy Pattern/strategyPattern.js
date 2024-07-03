// Context
class Context {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    contextInterface() {
      const result = this.strategy.algorithm();
      console.log(result);
    }
  }
  
  // Strategy
  class Strategy {
    algorithm() {
      throw new Error("Abstract method!");
    }
  }
  
  // Concrete Strategies
  class ConcreteStrategyA extends Strategy {
    algorithm() {
      return "ConcreteStrategyA algorithm";
    }
  }
  
  class ConcreteStrategyB extends Strategy {
    algorithm() {
      return "ConcreteStrategyB algorithm";
    }
  }
  
  // Usage
  const context = new Context(new ConcreteStrategyA());
  context.contextInterface();
  
  const context2 = new Context(new ConcreteStrategyB());
  context2.contextInterface();
  