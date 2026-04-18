# --- Exercice 1: Cars ---
def cars_exercise():
    raw_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
    
    # Conversion en liste
    manufacturers = [name.strip() for name in raw_string.split(",")]
    
    print(f"Number of manufacturers: {len(manufacturers)}")
    
    # Tri décroissant (Z-A)
    manufacturers.sort(reverse=True)
    print(f"Reverse order: {manufacturers}")
    
    # Comptage avec 'o' et sans 'i'
    with_o = [m for m in manufacturers if 'o' in m.lower()]
    without_i = [m for m in manufacturers if 'i' not in m.lower()]
    
    print(f"Names with 'o': {len(with_o)}")
    print(f"Names without 'i': {len(without_i)}")

    # Bonus 1: Doublons
    duplicates_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
    unique_cars = sorted(list(set(duplicates_list)))
    print(f"Unique cars: {', '.join(unique_cars)}")
    print(f"Count unique: {len(unique_cars)}")

    # Bonus 2: Inverser les lettres + Tri A-Z
    unique_cars.sort() # Tri A-Z
    reversed_letters = [m[::-1] for m in unique_cars]
    print(f"Alphabetical names with reversed letters: {reversed_letters}")

# --- Exercice 2: What's your name? ---
def get_full_name(first_name, last_name, middle_name=""):
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    return full_name.title() # .title() pour les majuscules

# --- Exercice 3: English to Morse ---
MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': '/'
}

def english_to_morse(text):
    text = text.upper()
    morse = []
    for char in text:
        if char in MORSE_CODE_DICT:
            morse.append(MORSE_CODE_DICT[char])
    return " ".join(morse)

def morse_to_english(morse_code):
    # Inversion du dictionnaire
    reverse_dict = {value: key for key, value in MORSE_CODE_DICT.items()}
    words = morse_code.split(" ")
    decoded = []
    for symbol in words:
        if symbol in reverse_dict:
            decoded.append(reverse_dict[symbol])
    return "".join(decoded)

if __name__ == "__main__":
    print("--- Exercice 1: Cars ---")
    cars_exercise()
    
    print("\n--- Exercice 2: Names ---")
    print(get_full_name("john", "lee", "hooker"))
    print(get_full_name("bruce", "lee"))
    
    print("\n--- Exercice 3: Morse ---")
    msg = "HELLO WORLD"
    coded = english_to_morse(msg)
    print(f"English: {msg} -> Morse: {coded}")
    print(f"Morse: {coded} -> English: {morse_to_english(coded)}")