#Exercice1

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
    
print (dict(zip(keys, values)))



#Exercice2


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

sum = 0
total = 0
for item in family:
    if family[item] <3 :
    
        print(f'the ticket of {item}is free.')
    elif 3 <= family[item] <= 12:
        print(f'the ticket of {item}is $10.')
        sum += 1
        total += 10
    elif family[item] > 12 :
        print(f'the ticket of {item} is $15.')
        sum += 1
        total += 15

print(f'there is {sum} of family have to pay ')
print(f'the total is {total}')


#Exercice3

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona", 
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
         "Spain": "red",
         "US":["pink","green"],
    }
}

#2
brand["number_stores"] = 2
print(brand["number_stores"])
#3
print(f'Zara clients are : {brand["type_of_clothes"]}')

#4
brand["country_creation"] = "Spain"
print(brand["country_creation"])

#5
print(brand["international_competitors"])
brand["international_competitors"].append("Desigual")
print(brand["international_competitors"])

#6
del brand["creation_date"]
print(brand)

#7
print(brand["international_competitors"])

#8
print(brand["major_color"]["US"])

#9
print(len(brand))

#10 
print(brand.keys())


#11
more_on_zara = {
    "creation_date" : 1975,
    "number_stores":10000,
}

#12
brand.update(more_on_zara)
#13
print(brand["number_stores"])

"""output is 10000"""

#exercice4
def describe_city(city, country="Iceland"):
    return (f"{city} is in {country}")
print(describe_city("CASA", "Moroococ"))



#exercice5
import random 
def number(num):
    if num > 100 :
       print("enter a number betwen 1 and 100")
    elif num < 1 :
        print("enter a number betwen 1 and 100")
    elif 1 <= num <= 100 :
        ran_num = random.randint(1, 100)
        if ran_num == num:
            print('wow ur estimate is great perfect')
        elif ran_num != num: 
             print(f'oops! your number: {num}, random was: {ran_num}')

number(int(input("enter a number between 1 and 100")))

#exercice6

def make_shirt(size="large", text="I love Python"):
    print( f'The size of the shirt is {size} and the text is {text}')

make_shirt()
make_shirt(size="medium")
make_shirt(size="XXL" , text="Defferent Message")

#exercice 7
import random
def get_random_temp(season):
    
    if season == "winter":  
        ran_num = random.randint(-10, 16)
    elif season == "spring":
        ran_num = random.randint(16,23)
    elif season == "fall" or season == "autumn":
        ran_num = random.randint(24,32)
    elif season == "summer":
        ran_num = random.randint(32,40)     
    return ran_num
    
get_random_temp()

def main():
    season = (input("enter which season : summer/fall/autumn/winter/spring:"))
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0 :
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp < 16 :
        print(f"Quite chilly! Don’t forget your coat")
    elif 16 <= temp < 23 :
        print(f"normally . i like it !!")
    elif 24 <= temp < 33 :
        print(f"nice , id good vibe yeah")
    elif 33 <= temp <= 40 :
        print(f"wooow , so hot")
main()


#exercice8 

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def exam():
    correct = 0
    incorrect = 0
    for item in data:
        reponse = input(item["question"])
        if reponse == item["answer"]:
            correct += 1 
        elif reponse != item["answer"]:
            incorrect += 1
    return correct, incorrect
exam() 
def score(correct, incorrect):
    print(f"correct answers : {correct}, incorrect answers : {incorrect}")

correct, incorrect = exam()
score(correct, incorrect)
        
                 






