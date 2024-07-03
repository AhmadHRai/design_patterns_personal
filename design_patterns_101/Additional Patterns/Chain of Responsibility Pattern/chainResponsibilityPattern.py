from __future__ import annotations
from abc import ABC, abstractmethod
from typing import Optional

# Handler interface
class Handler(ABC):
    @abstractmethod
    def set_next(self, handler: Handler) -> Handler:
        pass

    @abstractmethod
    def handle(self, request) -> Optional[str]:
        pass

# Base Handler
class AbstractHandler(Handler):
    _next_handler: Handler = None

    def set_next(self, handler: Handler) -> Handler:
        self._next_handler = handler
        return handler

    @abstractmethod
    def handle(self, request) -> Optional[str]:
        if self._next_handler:
            return self._next_handler.handle(request)
        return None

# Concrete Handlers
class ConcreteHandlerA(AbstractHandler):
    def handle(self, request) -> Optional[str]:
        if request == "A":
            return f"ConcreteHandlerA: Handled {request}"
        else:
            return super().handle(request)

class ConcreteHandlerB(AbstractHandler):
    def handle(self, request) -> Optional[str]:
        if request == "B":
            return f"ConcreteHandlerB: Handled {request}"
        else:
            return super().handle(request)

class ConcreteHandlerC(AbstractHandler):
    def handle(self, request) -> Optional[str]:
        if request == "C":
            return f"ConcreteHandlerC: Handled {request}"
        else:
            return super().handle(request)

# Usage
def client_code(handler: Handler) -> None:
    for request in ["A", "B", "C", "D"]:
        result = handler.handle(request)
        if result:
            print(result)
        else:
            print(f"No handler found for {request}")

handler_a = ConcreteHandlerA()
handler_b = ConcreteHandlerB()
handler_c = ConcreteHandlerC()

handler_a.set_next(handler_b).set_next(handler_c)

print("Chain: A -> B -> C")
client_code(handler_a)
