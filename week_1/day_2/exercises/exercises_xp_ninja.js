// ===== Exercise 1
/*
let randomNumber = Math.floor(Math.random() * 100 + 1 );
 
for ( let i = 0 ; i <= randomNumber ; i++){
    
    if ( i % 2 === 0 ){
        console.log(i);
    }
}
console.log("Random number:", randomNumber);
*/




// ===== Exercise 2
/*

function Capitalized (string){
    let evenCaps ="";
        let oddCaps = "";

    for( let i=0; i < string.length ; i++ ){
        
    if ( i % 2 === 0){

        evenCaps += string[i].toUpperCase()
        oddCaps += string[i].toLowerCase()
    }else if ( i % 2 === 1){
        evenCaps += string[i].toLowerCase()
        oddCaps += string[i].toUpperCase()
    }
}
return [evenCaps, oddCaps];

}
console.log(Capitalized("abcdef"));
*/





// ===== Exercise 3
/*

function Palindrome (string){
    let reversWord = "";
    for ( let i = string.length -1  ; i >=0 ; i--){
        reversWord += string[i];
    }
    if (string.toLowerCase() === reversWord.toLowerCase()){
        return true;
    }else {
        return false;
    }

}
console.log(Palindrome("madam"));
console.log(Palindrome("hello"));
*/



// ===== Exercise 4
/*
function biggestNumberInArray(arrayNumber){
    if (arrayNumber.length === 0){
        return 0 ;
    }
    let max = 0
    for (item of arrayNumber){
        if (typeof item === 'number' ){
            if( item > max){
                max = item ;
            }
        }
    }
    return max ;

}
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); 
console.log(biggestNumberInArray(['a', 3, 4, 2]));            
console.log(biggestNumberInArray([]));
*/





// ===== Exercise 5 
/*
function UniqueArray(array){
    let newArray = [];
    for (item of array){
        if (!newArray.includes(item)){
            newArray.push(item);
        }
    }
    return newArray;
}
const list = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(UniqueArray(list));
*/





// ===== Exercise 6



function createCalendar(year, month){
    let table = document.createElement('table');
    let d = new Date(year, month - 1);
    let day = d.getDay();
    if (day===0){
        day=7 ;
    }
    let header = "<tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr>";
    table.innerHTML = header;
    let tr = document.createElement('tr');

    for (let i = 1; i < day; i++) {
        tr.innerHTML += '<td></td>';
    }

    while (d.getMonth() == month - 1) {
        tr.innerHTML += `<td>${d.getDate()}</td>`;

        if (d.getDay() % 7 == 0) { 
            table.appendChild(tr);
            tr = document.createElement('tr');
        }

        d.setDate(d.getDate() + 1); 
    }
    if (d.getDay() != 1) {
        while (d.getDay() != 1 && d.getDay() != 0) {
            tr.innerHTML += '<td></td>';
            d.setDate(d.getDate() + 1);
        }
        table.appendChild(tr);
    }

    document.body.appendChild(table);
}
createCalendar(2012, 9);


