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


// ====== Daily Challenge 2

// ====== Daily Challenge 3
