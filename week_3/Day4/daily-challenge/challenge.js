const { greet } = require('./greeting');
const { displayColorfulMessage } = require('./colorful-message');
const { readFileContent } = require('./read-file');

console.log('=== CHALLENGE TASK: INTEGRATING EVERYTHING ===\n');

console.log('--- Part 1: Personalized Greeting ---');
const greetingMessage = greet('Student');
console.log(greetingMessage);
console.log('');

console.log('--- Part 2: Colorful Message ---');
displayColorfulMessage();
console.log('');


console.log('--- Part 3: File Content ---');
readFileContent();

console.log('\n=== CHALLENGE COMPLETE! ===');
