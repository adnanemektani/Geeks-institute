// ===== Exercise 1


const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[2] = "Jason";
people.push("Adnane");
console.log(people.indexOf("Mary"));
console.log(people.slice(1,4));
console.log(people);
console.log(people.indexOf("Foo"));
//-1 because the value not found in the array 
var last = people[people.length - 1];
console.log(last);
//the relationship between index of last element in the array  and the length of the array is array start indexing by 0 and lenght start idexing by 1 that s why we usw -1 in the end if the lenght 
for (let i=0 ; i<people.length ; i++){
    console.log(people[i]);
    if (people[i] === "Devon"){
        break;
    }
}












// ===== Exercise 2

const colors = ["black", "white", "red", "brown", "gray"];
for (let i=0 ; i<colors.length ;i++){
    console.log("My #"+ (i+1) + "choice is " + colors[i]);  
}
for (let i=0 ; i<colors.length ;i++){
    let suffixes = ["st", "nd", "rd", "th", "th"];
    console.log("My " + (i+1) + suffixes[i] + " choice is " + colors[i]);
}








// ===== Exercise 3
var number = prompt("Enter a number : ");
while (number = isNaN(number) || number < 10) {
    number = prompt("Enter a number : ");
}
console.log("Thank you! You entered " + number);







// ===== Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);
var sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if (sum > building.numberOfRoomsAndRent.david[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);










// ===== Exercise 5

 const family = { father: "khalid", mother: "hanane", brother: "youssef", me: "adnane"  };
for (let key in family){
    console.log("key : " + key + " , value : " + family[key] );
}






// ===== Exercise 6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let sentence = "";
for (let key in details){
    sentence += key + " " + details[key] + " ";

}
console.log(sentence);










// ===== Exercise 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secretName = "";
names.sort();
for (let i=0 ; i<names.length ; i++){
    secretName += names[i][0];
}
console.log(secretName);
