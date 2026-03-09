//Exercice 1
const getprooducts = require  ("./products.js")


function product(name){
    const product = getprooducts.products.find(product => product.name === name )
    console.log(product)

}
product("aaaa");
