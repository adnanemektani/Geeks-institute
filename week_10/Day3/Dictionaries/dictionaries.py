word = input("enter a word dear !")
my_dict = {}
for index, letter in enumerate(word):
    
    if letter in my_dict:
        my_dict[letter].append(index)
    else: 
        my_dict[letter] = [index]
print(my_dict)
            