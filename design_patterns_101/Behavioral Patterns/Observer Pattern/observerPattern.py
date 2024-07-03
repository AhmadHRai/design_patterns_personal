from __future__ import annotations
from abc import ABC, abstractmethod
from typing import List

# Subject interface
class Subject(ABC):
    @abstractmethod
    def attach(self, observer: Observer) -> None:
        pass

    @abstractmethod
    def detach(self, observer: Observer) -> None:
        pass

    @abstractmethod
    def notify(self) -> None:
        pass

# Concrete Subject
class ConcreteSubject(Subject):
    _state: int = None
    _observers: List[Observer] = []

    def attach(self, observer: Observer) -> None:
        print("Subject: Attached an observer.")
        self._observers.append(observer)

    def detach(self, observer: Observer) -> None:
        self._observers.remove(observer)

    def notify(self) -> None:
        print("Subject: Notifying observers...")
        for observer in self._observers:
            observer.update(self)

    def some_business_logic(self) -> None:
        print("\nSubject: I'm doing something important.")
        self._state = 1

        print(f"Subject: My state has just changed to: {self._state}")
        self.notify()

# Observer interface
class Observer(ABC):
    @abstractmethod
    def update(self, subject: Subject) -> None:
        pass

# Concrete Observer
class ConcreteObserverA(Observer):
    def update(self, subject: Subject) -> None:
        if subject._state < 3:
            print("ConcreteObserverA: Reacted to the event.")

class ConcreteObserverB(Observer):
    def update(self, subject: Subject) -> None:
        if subject._state == 0 or subject._state >= 2:
            print("ConcreteObserverB: Reacted to the event.")

# Usage
subject = ConcreteSubject()

observer1 = ConcreteObserverA()
observer2 = ConcreteObserverB()

subject.attach(observer1)
subject.attach(observer2)

subject.some_business_logic()
subject.some_business_logic()

subject.detach(observer2)

subject.some_business_logic()
