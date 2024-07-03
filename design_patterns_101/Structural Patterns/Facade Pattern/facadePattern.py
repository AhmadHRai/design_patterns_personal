# Complex subsystems
class SubsystemA:
    def operation_a(self) -> str:
        return "Subsystem A operation"

class SubsystemB:
    def operation_b(self) -> str:
        return "Subsystem B operation"

# Facade
class Facade:
    def __init__(self, subsystem_a: SubsystemA, subsystem_b: SubsystemB) -> None:
        self._subsystem_a = subsystem_a
        self._subsystem_b = subsystem_b

    def operation(self) -> str:
        result = "Facade initializes subsystems:\n"
        result += self._subsystem_a.operation_a()
        result += "\n" + self._subsystem_b.operation_b()
        return result

# Usage
subsystem_a = SubsystemA()
subsystem_b = SubsystemB()
facade = Facade(subsystem_a, subsystem_b)
print(facade.operation())
