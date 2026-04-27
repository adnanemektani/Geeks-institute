#Exercice1
import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def print_definition(self):
        print("A circle is a geometrical shape consisting of all points in a plane that are at a given distance from a given point, the centre.")

# Example usage:
# my_circle = Circle(5)
# print(f"Area: {my_circle.area():.2f}")
#Exercice2
import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        return self.letters[::-1]

    def get_sorted(self):
        return sorted(self.letters)

    def generate_random_list(self):
        # Bonus: List comprehension with random numbers
        return [random.randint(1, 100) for _ in range(len(self.letters))]

# Example usage:
# my_list = MyList(['b', 'a', 'd', 'c'])
# print(my_list.get_reversed())
#Exercice3
class MenuManager:
    def __init__(self):
        # Initial menu data
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    def add_item(self, name, price, spice, gluten):
        new_item = {
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten
        }
        self.menu.append(new_item)
        print(f"Item '{name}' added successfully.")

    def update_item(self, name, price, spice, gluten):
        for item in self.menu:
            if item["name"].lower() == name.lower():
                item["price"] = price
                item["spice"] = spice
                item["gluten"] = gluten
                print(f"Item '{name}' updated successfully.")
                return
        print(f"Error: '{name}' is not in the menu.")

    def remove_item(self, name):
        for item in self.menu:
            if item["name"].lower() == name.lower():
                self.menu.remove(item)
                print(f"Item '{name}' removed. Updated menu:")
                for i in self.menu: print(i)
                return
        print(f"Error: '{name}' is not in the menu.")

# Example usage:
# manager = MenuManager()
# manager.add_item("Pasta", 12, "A", True)
# manager.remove_item("Salad")