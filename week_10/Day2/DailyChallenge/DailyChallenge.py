#Challenge1
number = input("Enter a number: ")
length = input("Enter the desired length: ")
multiples = []

for i in range(1, int(length) + 1):
        multiples.append(int(number) * i)
print(multiples)


#Challenge2
string = input("Enter a string: ")
result = ""

for i in range(len(string)):
        letter = string[i]
        
        if i == 0:
                result = result + string[i]

        else:
                if string [i] != string[i-1]:
                        result = result + string[i]

        
print(result)