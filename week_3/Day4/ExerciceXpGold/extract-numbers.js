// Exercise 5: Regular Expression #1


function returnNumbers(str) {

    const numbers = str.match(/\d/g);
    

    return numbers ? numbers.join('') : '';
}


const result = returnNumbers('k5k3q2g5z6x9bn');
console.log('\n=== Extract Numbers from String ===');
console.log(`Input: 'k5k3q2g5z6x9bn'`);
console.log(`Output: ${result}`);


console.log('\n=== Additional Tests ===');
console.log(`'a1b2c3' => ${returnNumbers('a1b2c3')}`);
console.log(`'no_numbers_here' => ${returnNumbers('no_numbers_here')}`);
console.log(`'123abc456def' => ${returnNumbers('123abc456def')}`);

module.exports = returnNumbers;
