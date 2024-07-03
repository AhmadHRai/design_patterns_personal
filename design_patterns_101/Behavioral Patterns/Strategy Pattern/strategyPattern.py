from __future__ import annotations
from abc import ABC, abstractmethod

# Context
class Context:
    def __init__(self, strategy: Strategy) -> None:
        self._strategy = strategy

    def context_interface(self) -> None:
        result = self._strategy.algorithm()
        print(result)

# Strategy interface
class Strategy(ABC):
    @abstractmethod
    def algorithm(self) -> str:
        pass

# Concrete Strategies
class ConcreteStrategyA(Strategy):
    def algorithm(self) -> str:
        return "ConcreteStrategyA algorithm"

class ConcreteStrategyB(Strategy):
    def algorithm(self) -> str:
        return "ConcreteStrategyB algorithm"

# Usage
context = Context(ConcreteStrategyA())
context.context_interface()

context = Context(ConcreteStrategyB())
context.context_interface()
