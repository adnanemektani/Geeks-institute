# Exercice1
print("Hello World\n" * 4)

#Exercice2
result = (99 ** 3) * 8
print(result)

#Exercice3
Name = input("Enter your name: ")
if Name == "Adnane":
    print(" OMG we have same name !! hhhhhh")
else:
    print(f"Hello {Name}, nice to meet you!")


#Exercice4
Tall = input("how tall are you in cm? ")
if int(Tall) >= 145:
    print("you can ride the roller coaster")
else:
    print("sorry you have to grow taller before you can ride")

#Execice5
my_fav_numbers = {1, 7, 11, 100 }
my_fav_numbers.add(60)
my_fav_numbers.add(80)
my_fav_numbers.pop()
friend_fav_numbers = {3, 9, 15, 27 }

our_fav_numbers = my_fav_numbers|friend_fav_numbers
print(our_fav_numbers)


#Exercice6
#Nop ==> it's impossible to change a Tuple no add no remove nothing 


#Exercice7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")

basket.remove("Blueberries")

basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)


#Exercice8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print("The deli has run out of pastrami.")
print(sandwich_orders)
finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop()
    print(f"I made your {current_sandwich}.")
    finished_sandwiches.append(current_sandwich)