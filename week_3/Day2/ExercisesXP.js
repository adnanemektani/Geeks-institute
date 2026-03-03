//exercice1

const test = fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=5JPW5xZ4ndNJuGcIHo2cKiOP5jAcCQvP')

.then (response =>{
    if (!response.ok){
        return "status not found"
    }
       return response.json()
    
})
.then(data => console.log(data))
.catch(error => console.log(error))





//exercice2

const test1 = fetch('https://api.giphy.com/v1/gifs/search?&q=sun&rating=g&limit=10&offset=2&api_key=5JPW5xZ4ndNJuGcIHo2cKiOP5jAcCQvP')

.then (response =>{
    if (!response.ok){
        return "status not found"
    }
       return response.json()
    
})
.then(data => console.log(data))
.catch(error => console.log(error))




//exercice3 
const test2 = async() =>{
    const response = await  fetch("https://www.swapi.tech/api/starships/9/")
    
    try {
        if (!response.ok) {
        return "ther is a problem"
    }
        const data = await response.json()
         console.log(data.result)

    }catch(err){
         console.log(err)
    }  

} 
test2()




//exercice4

//calling 
// and after 2 secondes it will display 
//resolved
