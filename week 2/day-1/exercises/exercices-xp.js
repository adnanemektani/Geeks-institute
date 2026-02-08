//exercice 1
 
// #1.1 it will be display inside the funcOne function 3
// #1.2 it will show an errore ( TypeError: Assignment to constant variable.)



// #2.1 funcThree() ==> it will display (inside the funcThree function 0)
// funcTwo() ==> it will change value of a to 5 
// funcThree() ==> it wil display inside the funcThree function 5
// but if we declared const instead of let function functwo can't change the value to 5 and show an errore 
// and for functhree always take value 0 




// #3.1 funcFive ==> inside the funcFive function 5
// because we defines a before this function with value 5 is a conflict with window  



// #4 funSix()==> inside the funcFive function test 
// if we change let by const the show us an errore tell us already had being declared 

//#5 first message is in the if block 5 because a is a locale scope 
// second message is outside of the if block 2 because  let a = 2  is globale scope 





//exercice 2 
let winBattle = () => true;
let experiencePoints = (winBattle())? 10 : 1;
console.log(experiencePoints);


//exercice 3 
let isString = (val ) => typeof val === 'string' ;
console.log(isString('hello'));  //==> true 

//exercice 4 
let Sum = (a , b ) => a+b ;
console.log(Sum(5,5)); 




//exercice 5
function Kgs(weight){
    return weight * 1000 ;
}
console.log(Kgs(70));


let grames = function(weight){
    return weight * 1000 ;
}
console.log(grames(70));


// difference hosting ==>  in function declaration we give a name to function and invoke it by it and for function expression we assign the function to a variable and call it by it name of var 

let KgAndGrams = ( weight) => weight * 1000 ;
console.log(`ur weight in grames is ${KgAndGrams(70)}`);




//exercice 6 
(function (numberofChildren , partnerName , geographicLocation , jobTitle){
    document.body.innerHTML += `<p>You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.</p>`;

})(11, "Adnane", "Casablanca", "Fullstack Developer");




//exercice 7

(function (name){
    let nav = document.getElementById('NavBar');
    nav.innerHTML += `
        <div class="user-profile">
            <span>Welcome, ${name}</span>
            <img src="" alt="profile" style="">
        </div>`;
})("John");



//exercie 8 
function makeJuice (size){
    let ingredients = [];
    function addIngredients (ingredient1 , ingredient2 , indgredient3 ){
       //document.body.innerHTML += `<div class = "Juis">The client wants a ${size} juice, containing ${ingredient1},${ingredient2} , ${ingredient3} </div>`
        ingredients.push(ingredient1 , ingredient2 , indgredient3);
    }
    function displayJuice() {
        let text = `<div class = "Juis">The client wants a ${size} juice, containing ${ingredients.join(', ')}.</div>`;
        document.body.innerHTML += `<div class="Juice">${text}</div>`;
    }
    addIngredients("Apple" , "Banana" , "Avocat");  
    displayJuice(); 
}
makeJuice("Medium");






