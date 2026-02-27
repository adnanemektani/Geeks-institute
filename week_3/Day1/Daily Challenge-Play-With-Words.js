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


const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


function toJs(){
return new Promise((resolve, reject)=>{
    const morseObj = JSON.parse(morse)
        if (Object.keys(morseObj).length === 0){
            reject("morse is empty")
        } else {
            resolve(morseObj)
        }


})
}

function toMorse(morseJS){
    return new Promise((resolve, reject)=>{
    let sentence = prompt("Enter a sentence").toLowerCase()
    let chars = sentence.split("")
    if(chars.every(char => morseJS[char] !== undefined)){
         resolve(chars.map(char => morseJS[char]))
    }else{
        reject("this charachter doesn't exict")
       
    }
})}


function joinWords(morseTranslation){
          const result = morseTranslation.join("\n")
          document.body.innerHTML = result

}
toJs()
   .then(morseObj=> toMorse(morseObj))
   .then(morseArr => joinWords(morseArr))
   .catch(error => console.log(error))


