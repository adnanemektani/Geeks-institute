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

// trim() removes leading and trailing whitespace in one call

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanEmail = userEmail3.trim();
console.log(cleanEmail); // 'cannotfillemailformcorrectly@gmail.com'
