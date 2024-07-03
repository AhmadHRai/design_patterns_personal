class Singleton:
    _instance = None
    
    @staticmethod
    def get_instance():
        if Singleton._instance is None:
            Singleton._instance = Singleton()
        return Singleton._instance
    
    def __init__(self):
        if Singleton._instance is not None:
            raise Exception("This class is a Singleton!")
    
    def some_business_logic(self):
        print("Singleton instance is doing something...")
        

# Usage
singleton_instance = Singleton.get_instance()
singleton_instance.some_business_logic()
