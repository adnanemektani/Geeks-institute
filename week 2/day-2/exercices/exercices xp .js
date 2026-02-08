//exercice 1 
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, index)=>{
    console.log (`${index + 1}# choice is ${color}.` );
});
let isVioletPresent = colors.includes("Violet") ? console.log("Yeah") : console.log("Nop");


//exercice 2 
let couleurs = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
couleurs.forEach((couleur, index)=>{
    let num = index + 1 ;
    let suffix = (num === 1) ? ordinal[1] :
                 (num === 2) ? ordinal[2] :
                 (num === 3) ? ordinal[3] : ordinal[0];


     console.log (`${num}${suffix} choice is ${couleur}.` );
});


//exercice 3 

//-----1-------
//Output===> ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']



//----2-------
// output ==> ['U', 'S', 'A']

//------3----- bonus 
//output ==> [undefined, undefines]




//exercice 4 
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let fName = users.map((user)=> `Hello ${user.firstName}`);
console.log(fName);
let result = users.filter(user => user.role === 'Full Stack Resident');
console.log(result);
//Bonus
let lName = users
   .filter(user=> user.role === 'Full Stack Resident').map(user=> user.lastName);
   console.log(lName);




//exercice 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let string = epic.reduce((acc, curr)=>{
    return acc + " " + curr;

});
console.log(string);









// exercice 6

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const coursePassed = students.filter(student =>  student.isPassed === true );
console.log(coursePassed);


coursePassed.forEach((student)=>{
     console.log(`Good job ${student.name}, you passed the course in ${student.course}!`)   
});

