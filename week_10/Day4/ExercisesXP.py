#Exercice1 

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
Cat1 = Cat("minouch", 1)
Cat2 = Cat("mimi", 1)
Cat3 = Cat("macha ", 3)

cats = [Cat1, Cat2, Cat3]
def Oldest_Cat(cats):
    return max(cats, key=lambda cat: cat.age)

oldest = Oldest_Cat(cats)
print (f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")

#Exercise 2

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        print(f"{self.name} jumps{self.height * 2} cm ")

davids_dog = Dog("Rex", 50)
print (f"Name: {davids_dog.name}, Height:{davids_dog.height}cm")
davids_dog.bark()
davids_dog.jump()
sarahs_dog = Dog("Teacup", 20)
print (f"Name: {sarahs_dog.name}, Height:{sarahs_dog.height}cm")
sarahs_dog.bark()
sarahs_dog.jump()
if davids_dog.height > sarahs_dog.height:
    print(f"davids s dog is bigger ")
elif davids_dog.height < sarahs_dog.height :
    print(f"sarahs s dog is bigger")
else:
    print("Both dogs are the same size!")

#Exercice 3

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

#Exercice 4

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    def get_animals(self):
        print(f"{self.animals}")
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
    def sort_animals(self):
        self.animals.sort()
        groups = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in groups:
                groups[first_letter] = []
            groups[first_letter].append(animal)
        self.groupe = groups
    def get_groups(self):
        for letter, animals in self.groupe.items():
            print(f"{letter}: {animals}")
   
new_york_zoo = Zoo("New York Zoo")
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Emu")
new_york_zoo.get_animals()
new_york_zoo.sort_animals()
new_york_zoo.get_groups()
new_york_zoo.sell_animal("Bear")
new_york_zoo.get_animals()


                

