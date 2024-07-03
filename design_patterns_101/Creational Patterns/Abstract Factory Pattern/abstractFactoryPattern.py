from abc import ABC, abstractmethod

# Abstract Factory
class AbstractFactory(ABC):
    @abstractmethod
    def create_product_a(self):
        pass

    @abstractmethod
    def create_product_b(self):
        pass

# Concrete Factories
class ConcreteFactory1(AbstractFactory):
    def create_product_a(self):
        return ConcreteProductA1()

    def create_product_b(self):
        return ConcreteProductB1()

class ConcreteFactory2(AbstractFactory):
    def create_product_a(self):
        return ConcreteProductA2()

    def create_product_b(self):
        return ConcreteProductB2()

# Abstract Products
class AbstractProductA(ABC):
    @abstractmethod
    def useful_function_a(self):
        pass

class AbstractProductB(ABC):
    @abstractmethod
    def useful_function_b(self):
        pass

# Concrete Products
class ConcreteProductA1(AbstractProductA):
    def useful_function_a(self):
        return "The result of the product A1."

class ConcreteProductA2(AbstractProductA):
    def useful_function_a(self):
        return "The result of the product A2."

class ConcreteProductB1(AbstractProductB):
    def useful_function_b(self):
        return "The result of the product B1."

class ConcreteProductB2(AbstractProductB):
    def useful_function_b(self):
        return "The result of the product B2."

# Usage
def client_code(factory: AbstractFactory) -> None:
    product_a = factory.create_product_a()
    product_b = factory.create_product_b()

    print(f"{product_a.useful_function_a()}")
    print(f"{product_b.useful_function_b()}")

# Example usage with ConcreteFactory1
factory1 = ConcreteFactory1()
client_code(factory1)

# Example usage with ConcreteFactory2
factory2 = ConcreteFactory2()
client_code(factory2)
