const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
const usernames = [] ;
const winners = [];
let sum = 0;
gameInfo.forEach((le3ba)=>{
    usernames.push(le3ba.username + "!") ;
    if (le3ba.score > 5){
        winners.push(le3ba.username);
    };
    
    sum += le3ba.score ; 

});
console.log(usernames);
console.log(winners);
console.log(sum);



