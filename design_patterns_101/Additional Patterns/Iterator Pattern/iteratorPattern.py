from __future__ import annotations
from collections.abc import Iterable, Iterator
from typing import Any, List

# Concrete Iterator
class AlphabeticalOrderIterator(Iterator):
    _position: int = None
    _reverse: bool = False

    def __init__(self, collection: WordsCollection, reverse: bool = False) -> None:
        self._collection = collection
        self._reverse = reverse
        self._position = -1 if reverse else 0

    def __next__(self):
        try:
            value = self._collection[self._position]
            self._position += -1 if self._reverse else 1
        except IndexError:
            raise StopIteration()

        return value

# Aggregate interface
class IterableCollection(Iterable):
    @abstractmethod
    def create_iterator(self) -> Iterator:
        pass

# Concrete Aggregate
class WordsCollection(IterableCollection):
    def __init__(self, collection: List[Any] = []) -> None:
        self._collection = collection

    def __iter__(self) -> AlphabeticalOrderIterator:
        return AlphabeticalOrderIterator(self)

    def create_iterator(self) -> AlphabeticalOrderIterator:
        return AlphabeticalOrderIterator(self)

    def add_item(self, item: Any) -> None:
        self._collection.append(item)

    def __getitem__(self, index: int) -> Any:
        return self._collection[index]

# Usage
collection = WordsCollection()
collection.add_item("First")
collection.add_item("Second")
collection.add_item("Third")

print("Straight traversal:")
for element in collection:
    print(element)

print("\nReverse traversal:")
iterator = collection.create_iterator()
while iterator:
    try:
        print(iterator.__next__())
    except StopIteration:
        break
