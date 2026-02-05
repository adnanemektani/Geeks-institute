// ====== Daily Challenge 1

let planets = [
    { name: "Mercury", color: "grey", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 }
];
let listPlanets = document.querySelector(".listPlanets");

planets.forEach(planet => {
    let planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerText = planet.name;
    listPlanets.appendChild(planetDiv);



    for (let i = 0; i < planet.moons; i++) {
        let moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        
        moonDiv.style.left = (i * 40) + "px"; 

        planetDiv.appendChild(moonDiv);
    }


})
  


// ====== Daily Challenge Words in the stars

function frame (){
    let word = prompt("Enter words separated by commas:");
    let arrWord = word.split(",") ;

    let maxLength = 0 
    for (item of arrWord){
        let cleanWord = item.trim();
        if (cleanWord.length > maxLength) {
            maxLength = cleanWord.length ;
        }
    }

        let frameWidth = maxLength + 4;

        console.log ( "*" .repeat(frameWidth));
        for (item of arrWord){
            let cleanWord = item.trim();
            let padding = maxLength - cleanWord.length ;
            console.log("* " + cleanWord + " ".repeat(padding) + "*");
        }
        console.log ( "*" . repeat(frameWidth) );
    }
frame();










