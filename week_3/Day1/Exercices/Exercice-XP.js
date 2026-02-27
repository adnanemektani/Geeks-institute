//Exercice1

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("num is less than or equale to 10!");
    } else {
      reject("num is greater than 10");
    }
  });
}
compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));



//Exercice2 

new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve("blablabla");

    },4000)
})



//Exercice3

Promise.resolve(3);
Promise.reject("Boo!");


