//exercice 3

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
//1
const MariGame = JSON.stringify(marioGame)
//Nested objects restent nested
//all become  string
//Keys w values prennent double quotes "

console.log(MariGame)
//Output==> {"detail":"An amazing game!","characters":{"mario":{"description":"Small and jumpy. Likes princesses.","height":10,"weight":3,"speed":12},"bowser":{"description":"Big and green, Hates princesses.","height":16,"weight":6,"speed":4},"princessPeach":{"description":"Beautiful princess.","height":12,"weight":2,"speed":2}}}


//2
const marioJsonPretty = JSON.stringify(marioGame, null, 2); 
//3
debugger;

console.log(marioJsonPretty);
//Output ==>
 /* {
  "detail": "An amazing game!",
  "characters": {
    "mario": {
      "description": "Small and jumpy. Likes princesses.",
      "height": 10,
      "weight": 3,
      "speed": 12
    },
    "bowser": {
      "description": "Big and green, Hates princesses.",
      "height": 16,
      "weight": 6,
      "speed": 4
    },
    "princessPeach": {
      "description": "Beautiful princess.",
      "height": 12,
      "weight": 2,
      "speed": 2
    }
  }
}*/


//3