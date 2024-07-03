// Product
class Product {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }

  listParts() {
    console.log(`Product parts: ${this.parts.join(', ')}`);
  }
}

// Builder interface
class Builder {
  producePartA() {
    throw new Error("Abstract method!");
  }

  producePartB() {
    throw new Error("Abstract method!");
  }

  producePartC() {
    throw new Error("Abstract method!");
  }

  getProduct() {
    throw new Error("Abstract method!");
  }
}

// Concrete Builder
class ConcreteBuilder extends Builder {
  constructor() {
    super();
    this.product = new Product();
  }

  producePartA() {
    this.product.addPart("Part A1");
  }

  producePartB() {
    this.product.addPart("Part B1");
  }

  producePartC() {
    this.product.addPart("Part C1");
  }

  getProduct() {
    return this.product;
  }
}

// Director
class Director {
  constructor(builder) {
    this.builder = builder;
  }

  buildMinimalViableProduct() {
    this.builder.producePartA();
    return this.builder.getProduct();
  }

  buildFullFeaturedProduct() {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
    return this.builder.getProduct();
  }
}

// Usage
const builder = new ConcreteBuilder();
const director = new Director(builder);

console.log("Standard basic product:");
const minimalProduct = director.buildMinimalViableProduct();
minimalProduct.listParts();

console.log("\nStandard full featured product:");
const fullFeaturedProduct = director.buildFullFeaturedProduct();
fullFeaturedProduct.listParts();
