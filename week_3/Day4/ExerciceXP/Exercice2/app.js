import { Person } from "./data.js";

function sumAge(){
     
    const ages = Person.reduce((total, person)=> total + person.Age , 0)
    const Avearge = ages / Person.length ;
    console.log(Avearge)

}
sumAge()