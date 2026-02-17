//exercice1

function mergeWords(string) {
  return function(nextString) {
    if (nextString === undefined) {
      return string;
    } else {
      return mergeWords(string + ' ' + nextString);
    }
  }
}

console.log(mergeWords('Hello')());                          
console.log(mergeWords('There')('is')('no')('spoon.')()); 


const mergeWordsCurried = (string) => (nextString) =>
  nextString === undefined
    ? string
    : mergeWordsCurried(string + ' ' + nextString);

console.log(mergeWordsCurried('Hello')());                          // 'Hello'
console.log(mergeWordsCurried('There')('is')('no')('spoon.')());   // 'There is no spoon.'