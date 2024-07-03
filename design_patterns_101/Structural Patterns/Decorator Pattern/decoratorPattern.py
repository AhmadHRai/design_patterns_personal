from abc import ABC, abstractmethod

# Component interface
class Component(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass

# Concrete Component
class ConcreteComponent(Component):
    def operation(self) -> str:
        return "ConcreteComponent operation"

# Decorator
class Decorator(Component, ABC):
    def __init__(self, component: Component) -> None:
        self._component = component

    @abstractmethod
    def operation(self) -> str:
        pass

# Concrete Decorators
class ConcreteDecoratorA(Decorator):
    def operation(self) -> str:
        return f"ConcreteDecoratorA({self._component.operation()})"

class ConcreteDecoratorB(Decorator):
    def operation(self) -> str:
        return f"ConcreteDecoratorB({self._component.operation()})"

# Usage
simple = ConcreteComponent()
print("Client: I've got a simple component:")
print(simple.operation())

decorator1 = ConcreteDecoratorA(simple)
decorator2 = ConcreteDecoratorB(decorator1)
print("\nClient: Now I've got a decorated component:")
print(decorator2.operation())
