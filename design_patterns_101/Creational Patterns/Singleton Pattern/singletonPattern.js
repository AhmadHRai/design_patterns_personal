class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  
    someBusinessLogic() {
      console.log("Singleton instance is doing something...");
    }
  }
  
  // Usage
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2); // Output: true
  instance1.someBusinessLogic();
  