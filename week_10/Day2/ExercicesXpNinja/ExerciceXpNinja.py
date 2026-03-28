#exeercice 1 :

"""
>>> TRUR
>>> TRUE 
>>> TRUE
>>> FALSE
>>> TRUE
>>> FALSE

x is TRUE
y IS  FALSE
A:5
b:10
"""






#Exercice2
#Keep asking the user to input the longest sentence they can without the character “A” 
#Each time a user successfully sets a new longest sentence, print a congratulations message.
longest_sentence = ""
while True:
    sentence = input("Please enter the longest sentence you can without the character 'A' or 'a': ")
    if 'A' in sentence or 'a' in sentence:
        print("Your sentence contains the character 'A'. Please try again.")
        continue
    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("Congratulations! You've set a new longest sentence!")
    else:
        print("Your sentence is not longer than the current longest sentence. Try again.")





#Exercice3
paragraph = """In the heart of the bustling city, amidst the cacophony of honking cars and chattering pedestrians, lies a serene oasis. The park, with its lush greenery and vibrant flowers, offers a respite from the urban chaos. People from all walks of life come here to relax, exercise, and connect with nature. Children laugh and play on the swings, while elderly couples stroll hand in hand along the winding paths. The air is filled with the sweet scent of blooming jasmine and the melodious chirping of birds. It's a place where time seems to slow down, allowing visitors to savor the simple joys of life."""
# Count characters
num_characters = len(paragraph)
# Count sentences
num_sentences = paragraph.count('.') + paragraph.count('!') + paragraph.count('?')
# Count words
words = paragraph.split()
num_words = len(words)
# Count unique words
unique_words = set(words)
num_unique_words = len(unique_words)
# Count non-whitespace characters
num_non_whitespace_characters = len(paragraph.replace(" ", "").replace("\n", "").replace("\t", ""))
# Average words per sentence
avg_words_per_sentence = num_words / num_sentences if num_sentences > 0 else 0
# Count non-unique words
num_non_unique_words = num_words - num_unique_words
# Print results
print(f"Number of characters: {num_characters}")
print(f"Number of sentences: {num_sentences}")
print(f"Number of words: {num_words}")
print(f"Number of unique words: {num_unique_words}")
print(f"Number of non-whitespace characters: {num_non_whitespace_characters}")
print(f"Average words per sentence: {avg_words_per_sentence:.2f}")
print(f"Number of non-unique words: {num_non_unique_words}")

