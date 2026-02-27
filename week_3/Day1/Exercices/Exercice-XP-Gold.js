//Exercice1
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
Promise.all([promise1, promise2, promise3])
.then(result => console.log(result))
.catch(error => console.log(error))
// Promise.all() takes an ARRAY of promises and waits for all of them to finish
// then returns an ARRAY of all resolved values in the same order
// promise1 resolves immediately with 3
// promise2 42 is not even a promise, but Promise.all accepts it as is
// promise3 resolves after 3 seconds with "foo"

// Promise.all waits for the SLOWEST one (promise3 = 3000ms)
// then returns → [3, 42, "foo"]
// If ANY promise rejects => .catch fires immediately
// and we lose ALL results



//Exercice2




