// EXERCISE 1 - Nested Functions

// 1 
// Output: "____/''''\_____"

// landscape() executes sequentially:
//   flat(4)     => adds 4 underscores  => "____"
//   mountain(4) => adds /''''\ pattern => "____/''''\""
//   flat(4)     => adds 4 underscores  => "____/''''\\____"
//
// flat(x) and mountain(x) are closures: they capture `result`
// from the outer landscape() scope and mutate it directly.
// That's why each call builds on what the previous one wrote.

// 2

let landscape = () => {
  let result = "";

  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  let mountain = (x) => {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log(landscape()); 

// EXERCISE2
// Prediction: addToTen(3) returns 13

// Explanation:
// addTo is a curried function: it takes x returns a function that takes y
// addToTen = addTo(10) => x is locked to 10 via closure.
// addToTen(3) calls that inner function with y = 3 => 10 + 3 = 13.

const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3)); 

// exercice.3 


// Prediction: curriedSum(30)(1) returns 31


const curriedSum = (a) => (b) => a + b;
console.log(curriedSum(30)(1)); 







// exercice4

// Prediction: add5(12) returns 17
// add5 = curriedSum(5) => a is locked to 5 via closure.
// add5(12) calls the inner function with b = 12 => 5 + 12 = 17.

const add5 = curriedSum(5);
console.log(add5(12)); 







// exercice5


// Prediction: compose(add1, add5)(10) returns 16
// Step 1: g(a)  => add5(10)      = 15
// Step 2: f(15) => add1(15)      = 16
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5B = (num) => num + 5;
console.log(compose(add1, add5B)(10)); 