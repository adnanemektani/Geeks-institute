// ===== Exercise 1

function isBlank(str){
    if(str.length === 0 ){
        return true;
    }
    else{
        return false ;
    }
}
console.log(isBlank(''));
console.log(isBlank('abc'));






// ===== Exercise 2 

function abbrevName(name) {
    let arr = name.split(" ");
    let abrv = arr[1].charAt(0);
    let result = ( arr[0] + " " +abrv + ".")  ;
    return result;  
}

console.log(abbrevName("Robin Singh")); 





// ===== Exercise 3

function swapCases (str){
    let result = "";
    for ( let i = 0 ; i < str.length ; i++){
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()){
            result = result + str[i].toLowerCase();
        } 
        else if (str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase()){
            result = result + str[i].toUpperCase();
        }
        else {
            result = result + str[i];
        }
    }

   return result ;
}
console.log(swapCases("The Quick Brown Fox"));







// ===== Exercise 4

let arr = ([[1, 1], [1, 3], [5, 1], [6, 1]]) ;
function OmniPresent (arr , numb){
    for (let i=0 ; i< arr.length ; i++){
        let subarray = arr[i];
       
        if ( !subarray.includes(numb)){
            return false ;
        }
    }
    return true;
}
console.log(OmniPresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(OmniPresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));





// ===== Exercise 5
 // Refer to the main.html file