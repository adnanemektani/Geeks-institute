//exercice 1
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
let sumLoop = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].type === 'dog') {
    sumLoop += data[i].age * 7;
  }
}
console.log(sumLoop);


const sumReduce = data
  .filter(animal => animal.type === 'dog')
  .reduce((acc, dog) => acc + dog.age * 7, 0);

console.log(sumReduce); 




//exercice2



const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanEmail = userEmail3.trim();
console.log(cleanEmail); 




// EXERCISE 3 

const users = [
  { firstName: 'Bradley',  lastName: 'Bouley',   role: 'Full Stack Resident' },
  { firstName: 'Chloe',    lastName: 'Alnaji',   role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn',   role: 'Enterprise Instructor' },
  { firstName: 'Michael',  lastName: 'Herman',   role: 'Lead Instructor' },
  { firstName: 'Robert',   lastName: 'Hajek',    role: 'Full Stack Resident' },
  { firstName: 'Wes',      lastName: 'Reid',     role: 'Instructor' },
  { firstName: 'Zach',     lastName: 'Klabunde', role: 'Instructor' },
];



const restructured = users.reduce((acc, user) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  acc[fullName] = user.role;
  return acc;
}, {});

console.log(restructured);




// EXERCISE 4 


const letters = ['x', 'y', 'z', 'z'];



const countLoop = {};
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (countLoop[letter]) {
    countLoop[letter]++;
  } else {
    countLoop[letter] = 1;
  }
}
console.log(countLoop); 




const countReduce = letters.reduce((acc, cur) => {
  acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
  return acc;
}, {});

console.log(countReduce); 


