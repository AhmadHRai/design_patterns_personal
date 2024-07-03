// Target interface
class Target {
    request() {
      return "Target: The default target's behavior.";
    }
  }
  
  // Adaptee
  class Adaptee {
    specificRequest() {
      return ".eetpadA eht fo roivaheb laicepS";
    }
  }
  
  // Adapter
  class Adapter extends Target {
    constructor(adaptee) {
      super();
      this.adaptee = adaptee;
    }
  
    request() {
      const result = this.adaptee.specificRequest().split("").reverse().join("");
      return `Adapter: (TRANSLATED) ${result}`;
    }
  }
  
  // Usage
  function clientCode(target) {
    console.log(target.request());
  }
  
  const adaptee = new Adaptee();
  const adapter = new Adapter(adaptee);
  
  console.log("Adaptee interface is incompatible with the client.");
  console.log(`But with Adapter ${adapter.request()}`);
  
  clientCode(adapter);
  