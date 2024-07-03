from __future__ import annotations
from abc import ABC, abstractmethod

# Product
class Product:
    def __init__(self) -> None:
        self.parts = []

    def add_part(self, part: str) -> None:
        self.parts.append(part)

    def list_parts(self) -> None:
        print(f"Product parts: {', '.join(self.parts)}")

# Builder interface
class Builder(ABC):
    @abstractmethod
    def produce_part_a(self) -> None:
        pass

    @abstractmethod
    def produce_part_b(self) -> None:
        pass

    @abstractmethod
    def produce_part_c(self) -> None:
        pass

# Concrete Builder
class ConcreteBuilder(Builder):
    def __init__(self) -> None:
        self._product = Product()

    def produce_part_a(self) -> None:
        self._product.add_part("Part A1")

    def produce_part_b(self) -> None:
        self._product.add_part("Part B1")

    def produce_part_c(self) -> None:
        self._product.add_part("Part C1")

    def get_product(self) -> Product:
        return self._product

# Director
class Director:
    def __init__(self, builder: Builder) -> None:
        self._builder = builder

    def build_minimal_viable_product(self) -> None:
        self._builder.produce_part_a()

    def build_full_featured_product(self) -> None:
        self._builder.produce_part_a()
        self._builder.produce_part_b()
        self._builder.produce_part_c()

# Usage
builder = ConcreteBuilder()
director = Director(builder)

print("Standard basic product:")
director.build_minimal_viable_product()
builder.get_product().list_parts()

print("\nStandard full featured product:")
director.build_full_featured_product()
builder.get_product().list_parts()
