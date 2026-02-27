/*
function makeAllCaps(arr){
    
      return new Promise((resolve, reject) => {
        if(arr.every(word => typeof word === "string")){
            resolve(arr.map(word => word.toUpperCase()))
        }else{
            reject("all words must be strings!")
        }
      })
}
function sortWords(ARR){
    return new Promise((resolve, reject) =>{
        if (ARR.length > 4){
            resolve(ARR.sort())

        }else{
            reject("array length must be bigger than 4")
        }

    })
}
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
*/
