from abc import ABC, abstractmethod

# Abstract Class
class AbstractClass(ABC):
    def template_method(self) -> None:
        self.base_operation1()
        self.required_operation1()
        self.base_operation2()
        self.hook1()
        self.required_operation2()
        self.base_operation3()
        self.hook2()

    def base_operation1(self) -> None:
        print("AbstractClass says: I am doing the bulk of the work")

    def base_operation2(self) -> None:
        print("AbstractClass says: But I let subclasses override some operations")

    def base_operation3(self) -> None:
        print("AbstractClass says: But I am doing the bulk of the work")

    @abstractmethod
    def required_operation1(self) -> None:
        pass

    @abstractmethod
    def required_operation2(self) -> None:
        pass

    def hook1(self) -> None:
        pass

    def hook2(self) -> None:
        pass

# Concrete Class
class ConcreteClass1(AbstractClass):
    def required_operation1(self) -> None:
        print("ConcreteClass1 says: Implemented Operation1")

    def required_operation2(self) -> None:
        print("ConcreteClass1 says: Implemented Operation2")

# Another Concrete Class
class ConcreteClass2(AbstractClass):
    def required_operation1(self) -> None:
        print("ConcreteClass2 says: Implemented Operation1")

    def required_operation2(self) -> None:
        print("ConcreteClass2 says: Implemented Operation2")
        print("ConcreteClass2 says: Override Hook1")

    def hook1(self) -> None:
        print("ConcreteClass2 says: Override Hook2")

# Usage
def client_code(abstract_class: AbstractClass) -> None:
    abstract_class.template_method()

print("Same client code can work with different subclasses:")
client_code(ConcreteClass1())

print("\nSame client code can work with different subclasses:")
client_code(ConcreteClass2())
