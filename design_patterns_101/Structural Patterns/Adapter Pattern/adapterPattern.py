class Target:
    def request(self) -> str:
        return "Target: The default target's behavior."

class Adaptee:
    def specific_request(self) -> str:
        return ".eetpadA eht fo roivaheb laicepS"

class Adapter(Target, Adaptee):
    def request(self) -> str:
        return f"Adapter: (TRANSLATED) {self.specific_request()[::-1]}"

# Usage
def client_code(target: Target) -> None:
    print(target.request())

adaptee = Adaptee()
adapter = Adapter()

print("Adaptee interface is incompatible with the client.")
print(f"But with Adapter {adapter.request()}")

client_code(adapter)
