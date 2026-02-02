// ===== Exercise 1
function displayNumbersDivisible() {
    let sum = 0
    for ( let i =0 ; i <= 500 ; i++){
         if (i%23 === 0) {
            console.log(i);
            sum = sum + i ;
         }     
    }
    console.log(sum);
}
displayNumbersDivisible();


//with Bonus
function displayNumbersDivisible(divisor) {
    let sum = 0
    for ( let i =0 ; i <= 500 ; i++){
         if (i%divisor === 0) {
            console.log(i);
            sum = sum + i ;
         }     
    }
    console.log(sum);
}
displayNumbersDivisible(45);















// ===== Exercise 2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = [ "banana" , "orange" , "apple"]
function myBill(){
    let total = 0 ;
    for (let item of shoppingList){
        if (item in stock && stock[item] > 0 ){
            let price = prices[item];
               total = total + price;
               stock[item] = stock[item] - 1 ;

            console.log(prices[item]);
        }
    }  
    return total ; 
}
let bill = myBill();
console.log(bill);
console.log (stock["banana"]);
console.log (stock["orange"]);
console.log (stock["apple"]);














// ===== Exercise 3


function changeEnough (itemPrice, amountOfChange ){
    let quarters = amountOfChange[0] * 0.25 ;
    let dimes = amountOfChange[1] * 0.10 ;
    let nickel = amountOfChange[2] * 0.05 ;
    let penny = amountOfChange[3] * 0.01 ;

    let total = quarters + dimes + nickel + penny ;
    if(total >= itemPrice){
        return true ;
    }
    else {
        return false ;
    }

}

console.log(changeEnough (4.25, [25, 20, 5, 0])); 










// ===== Exercise 4 with bonus

function hotelCost(numberOfDays){
   
    let total = numberOfDays * 140 ;
    return total ;
}




function planeRideCost(destination){
    
    switch ( destination){
        case "London" :
        case "london" :
            return 183 ;

        case "Paris" :
        case "paris" :
            return 220 ;
        default :
         return 300 ;
    }
}




function rentalCarCost(daysOfRuntal) {

    let count = 0
    if (daysOfRuntal <= 10 ) {
        count = daysOfRuntal * 40 ;
    }else 
        count = daysOfRuntal * 40 * 0.95 ;
    return count ;
    }

function totalVacationCost() {

    // first function
    let daysOfRuntal = prompt ("hom many days u wanna runt the car !!?");
    while (daysOfRuntal === ("") || isNaN(daysOfRuntal) || daysOfRuntal <= 0){
         daysOfRuntal = prompt ("how many days u wanna runt the car !!?");
    } 
    let car = rentalCarCost(daysOfRuntal);




    // second function
     let numberOfDays = prompt("How many nights u wanna stay in the hotel !!?");
    while (numberOfDays <= 0 || isNaN(numberOfDays) || numberOfDays === ("")){
      numberOfDays = prompt("How many nights u wanna stay in the hotel !!?");
    }
    numberOfDays = Number(numberOfDays);
    let hotel = hotelCost(numberOfDays);


    // third function
    let destination = prompt("what is ur next destination !");
    while (destination === ("") || !isNaN(destination) ){
        destination = prompt("what is ur next destination !");   
    }
    let plane = planeRideCost(destination);


    let sum = car + hotel + plane ;
    console.log(`The car cost: ${car}, the hotel cost: ${hotel} ,the plane tickets cost: ${plane} `);
    
}
totalVacationCost();






// ===== Exercise 5

let retrive = document.getElementById("container");
console.log(retrive);

let change = document.querySelector(".list li:nth-child(2)");
change.textContent = "Richard";

let secondUl = document.querySelectorAll(".list")[1];
let secondLi = secondUl.children[1];
secondLi.remove();

let Lists = document.querySelectorAll(".list");
Lists.forEach(list => {
    list.firstElementChild.innerHTML = "Adnane";

   list.classList.add("student_list");
});
Lists[0].classList.add("university" , "attendnce");

retrive.style.background = "light blue ";
retrive.style.padding = "10px";

secondUl.lastElementChild.style.display = "none" ;
change.style.border = "2px solid orange";

document.body.style.fontSize = "20px";


if (retrive.style.backgroundColor === "lightblue"){
    let user1 = Lists[0].firstElementChild.innerHTML;
    let user2 = Lists[1].firstElementChild.innerHTML;
    alert (`Hello ${user1} and ${user2}`);
}







// Exercice 6 


let navBar = document.getElementById("navBar");
navBar.setAttribute("id" , "socialNetworkNavigation");

let newLi = document.createElement("li");
let LogOut = document.createTextNode("Logout");
newLi.appendChild(LogOut);
let  ulList = document.querySelector("ul");
ulList.appendChild(newLi);
console.log(ulList.firstElementChild.textContent , ulList.lastElementChild.textContent);






//Exercice 7 

let allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://experiences.visitdubai.com/productDetail/9344", 
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://experiences.visitdubai.com/productDetail/9344",
        alreadyRead: false
    }
];
let bookSection = document.querySelector(".listBooks");

allBooks.forEach(book =>{
    let DivBook = document.createElement("div");
    DivBook.innerHTML = `
        <p>${book.title} written by ${book.author}</p>
        <img src="${book.image}" style="width: 100px;">
    `;
    if (book.alreadyRead) {
        DivBook.style.color = "red";
    }
    bookSection.appendChild(DivBook);
})

