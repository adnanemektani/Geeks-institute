#Exercice1
#Ask the user to input a month (1 to 12).
month = int(input("Please enter a month (1-12): "))
#Display the season of the month received: Spring runs from March (3) to May (5)Summer runs from June (6) to August (8)Autumn runs from September (9) to November (11)Winter runs from December (12) to February (2)
if month in [3, 4, 5]:
    print("Spring")

elif month in [6, 7, 8]:
    print("Summer")
elif month in [9, 10, 11]:
    print("Autumn")
elif month in [12, 1, 2]:
    print("Winter")



#Exercice2
for number in range(1, 21):
    print(number) 


#Exercice3
#Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
my_name = "Adnane"
while True:
    user_name = input("What is ur name? ")
    if user_name == my_name:
       print(" Fin a 3chi4i " + user_name) 
       break
else:
        print("You are not " + my_name + ", try again.") 




#Exercice4
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
#Ask a user for their name, if their name is in the names list print out the index of the first occurrence of the name.
user_name = input("Please enter your name: ")
if user_name in names:
    index = names.index(user_name)
    print(f"Your name is found at index: {index}")


#Exercice5
num1 = int(input("Input the 1st number: "))
num2 = int(input("Input the 2nd number: "))    
num3 = int(input("Input the 3rd number: "))
greatest = num1
if num2 > greatest:
    greatest = num2
if num3 > greatest:
    greatest = num3
print("The greatest number is:", greatest)




#Exercice6
number = int(input("Please enter a number from 1 to 9: "))
import random
random_number = random.randint(1, 9)
if number == random_number:
    print("Congratulations! You guessed the correct number:", random_number)
else:
    print("Sorry, the correct number was:", random_number)