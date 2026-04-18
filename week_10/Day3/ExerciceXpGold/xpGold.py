import random
# --- Exercice 1 & 2: Birthday Look-up & Advanced ---
def birthday_app():
    birthdays = {
        "Albert Einstein": "1879/03/14",
        "Marie Curie": "1867/11/07",
        "Ada Lovelace": "1815/12/10",
        "Alan Turing": "1912/06/23",
        "Guido van Rossum": "1956/01/31"
    }

    print("\n--- Welcome to the Birthday Lookup App! ---")
    print("You can look up the birthdays of the people in the list:")
    
# Exercice 2: Affichage des noms
    for name in birthdays.keys():
        print(f"- {name}")

    user_choice = input("\nWhose birthday do you want to look up? ")

# Exercice 2: Vérification d'existence
    if user_choice in birthdays:
        date = birthdays[user_choice]
        print(f"{user_choice}'s birthday is {date}.")
    else:
        print(f"Sorry, we don’t have the birthday information for {user_choice}.")

# --- Exercice 3: Sum (X + XX + XXX + XXXX) ---
def sum_sequence(x):
    # On transforme l'int en str pour le multiplier facilement
    s = str(x)
    n1 = int(s)
    n2 = int(s * 2)
    n3 = int(s * 3)
    n4 = int(s * 4)
    return n1 + n2 + n3 + n4

# --- Exercice 4: Double Dice ---
def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    throws_count = 0
    while True:
        throws_count += 1
        die1 = throw_dice()
        die2 = throw_dice()
        if die1 == die2:
            return throws_count

def main_dice_simulation():
    results = []
    for _ in range(100):
        results.append(throw_until_doubles())
    
    total_throws = sum(results)
    average = total_throws / 100
    
    print(f"\n--- Dice Simulation (100 doubles) ---")
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average:.2f}")

if __name__ == "__main__":
    # Test Exercice 1 & 2
    birthday_app()
    
    # Test Exercice 3
    print(f"\nSum sequence for 3: {sum_sequence(3)}") # Devrait afficher 3702
    
    # Test Exercice 4
    main_dice_simulation()