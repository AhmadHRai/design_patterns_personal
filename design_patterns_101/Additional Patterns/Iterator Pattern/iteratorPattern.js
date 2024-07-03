// Concrete Iterator
class AlphabeticalOrderIterator {
    constructor(collection, reverse = false) {
      this.collection = collection;
      this.reverse = reverse;
      this.position = reverse ? collection.length - 1 : 0;
    }
  
    next() {
      const result = this.collection[this.position];
      this.position += this.reverse ? -1 : 1;
      return result;
    }
  
    hasNext() {
      if (this.reverse) {
        return this.position >= 0;
      }
      return this.position < this.collection.length;
    }
  }
  
  // Aggregate interface
  class IterableCollection {
    createIterator() {
      throw new Error("Abstract method!");
    }
  }
  
  // Concrete Aggregate
  class WordsCollection extends IterableCollection {
    constructor() {
      super();
      this.collection = [];
    }
  
    add(item) {
      this.collection.push(item);
    }
  
    get(index) {
      return this.collection[index];
    }
  
    createIterator() {
      return new AlphabeticalOrderIterator(this.collection);
    }
  
    reverseIterator() {
      return new AlphabeticalOrderIterator(this.collection, true);
    }
  }
  
  // Usage
  const collection = new WordsCollection();
  collection.add("First");
  collection.add("Second");
  collection.add("Third");
  
  console.log("Straight traversal:");
  const iterator = collection.createIterator();
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
  
  console.log("\nReverse traversal:");
  const reverseIterator = collection.reverseIterator();
  while (reverseIterator.hasNext()) {
    console.log(reverseIterator.next());
  }
  