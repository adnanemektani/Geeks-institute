// exercice 1

function printFullName({first, last}){
    return `Your full name is ${first} ${last}`;
}
console.log(printFullName({first: 'Elie', last:'Schoppik'}));



//exercice 2

function KeysAndValues(obj){
    let keys = Object.keys(obj);
    keys.sort();


    let Values = [];
    for (const item of keys){
        Values.push(obj[item]);
    }
    return [keys, Values];
}
console.log(KeysAndValues({ a: 1, b: 2, c: 3 }));
console.log(KeysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(KeysAndValues({ key1: true, key2: false, key3: undefined }));



//exercice3 
// Output ==> 3