birthdate = input("Enter your birthdate (DD/MM/YYYY): ")
birth_year = int(birthdate[-4:])
age = 2026 - birth_year
last_digit = age % 10
candles = "i" * last_digit
cake = f"""
       ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""
# Bonus: leap year
is_leap = (birth_year % 4 == 0 and birth_year % 100 != 0) or (birth_year % 400 == 0)
if is_leap:
    print(cake)
    print(cake)
else:
    print(cake) 