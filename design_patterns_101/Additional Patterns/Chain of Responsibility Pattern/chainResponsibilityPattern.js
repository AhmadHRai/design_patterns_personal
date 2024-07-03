// Handler interface
class Handler {
    setNext(handler) {
      throw new Error("Abstract method!");
    }
  
    handle(request) {
      throw new Error("Abstract method!");
    }
  }
  
  // Base Handler
  class AbstractHandler extends Handler {
    setNext(handler) {
      this.nextHandler = handler;
      return handler;
    }
  
    handle(request) {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }
      return null;
    }
  }
  
  // Concrete Handlers
  class ConcreteHandlerA extends AbstractHandler {
    handle(request) {
      if (request === "A") {
        return `ConcreteHandlerA: Handled ${request}`;
      }
      return super.handle(request);
    }
  }
  
  class ConcreteHandlerB extends AbstractHandler {
    handle(request) {
      if (request === "B") {
        return `ConcreteHandlerB: Handled ${request}`;
      }
      return super.handle(request);
    }
  }
  
  class ConcreteHandlerC extends AbstractHandler {
    handle(request) {
      if (request === "C") {
        return `ConcreteHandlerC: Handled ${request}`;
      }
      return super.handle(request);
    }
  }
  
  // Usage
  function clientCode(handler) {
    const requests = ["A", "B", "C", "D"];
    requests.forEach(request => {
      const result = handler.handle(request);
      if (result) {
        console.log(result);
      } else {
        console.log(`No handler found for ${request}`);
      }
    });
  }
  
  const handlerA = new ConcreteHandlerA();
  const handlerB = new ConcreteHandlerB();
  const handlerC = new ConcreteHandlerC();
  
  handlerA.setNext(handlerB).setNext(handlerC);
  
  console.log("Chain: A -> B -> C");
  clientCode(handlerA);
  