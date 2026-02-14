// exercice 1 Output
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)




//exercice 2
/*
function displayStudentInfo(objUser){
    const {first , last  }= objUser ;
    return 'ur full name is ' + first + " " + last + "." ;
    
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
*/



//exercice 3 
const users = { user1: 18273, user2: 92833, user3: 90315 };
const arr = Object.entries(users);
console.log(arr);

//exercice4 
// Output = Object






//exercice 5 
class Dog {
  constructor(name) {
    this.name = name;
  }
};

// optionr 1 ==> False ==> bcause there is no super(name) before this.... ; 
// option 2 ==> True  
// option 3 ==> false because we don't write name in constructore 
// option 4 ==> false because we don't use super before this 






//exercice 6 ===>
//1
 // [2] === [2] ==> False  
 // {} === {} ==> False 

 //2
 //object2.number = 4  
 //object3.number = 4  
 //object4.number = 5  


//3.1
class Animal {
  constructor(name , type , color) {
       this.name = name;
       this.type = type ;
       this.color = color ;
  }
}
class Mammal extends Animal {
  constructor(name , type , color){
    super(name, type, color);
    
  }
  sound(soundMade){
       return `${soundMade} I'm a ${this.type} and my name is ${this.name} and i am ${this.color}` ;
    }
}




