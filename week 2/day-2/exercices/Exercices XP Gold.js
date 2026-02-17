// exercice1

// Output: [2, 4, 6]

const result1 = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});

console.log(result1); 







//exercice2


// Output: [1, 2, 0, 1, 2, 3]

const result2 = [[0, 1], [2, 3]].reduce(
  (acc, cur) => acc.concat(cur),
  [1, 2],
);

console.log(result2); 






//exercice3


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  return num * 2;
});

console.log(newArray); // output : [2, 4, 8, 10, 16, 18]





// exercice4


const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const flatArray = array.flat(2);
console.log(flatArray); // [1, 2, 3, [4], [5]]


// 2. 

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const flatGreeting = greeting.map(words => words.join(' '));
console.log(flatGreeting); 


// 3.

const greetingString = greeting.map(words => words.join(' ')).join(' ');
console.log(greetingString); // 'Hello young grasshopper! you are learning fast!'


// 4.
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const freed = trapped.flat(Infinity);
console.log(freed); // [3]