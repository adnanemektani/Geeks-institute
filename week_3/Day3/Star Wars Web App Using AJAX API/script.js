const findBtn = document.getElementById('find-btn');
const content = document.getElementById('content');

async function getCharacter() {
    
    content.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        <p style="font-size: 22px; margin-top:15px;">Loading...</p>
    `;

    
    const randomId = Math.floor(Math.random() * 83) + 1;

    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        
        if (!response.ok) {
            throw new Error("Not found");
        }

        const data = await response.json();
        const char = data.result.properties;

        
        const homeRes = await fetch(char.homeworld);
        const homeData = await homeRes.json();
        const homeworld = homeData.result.properties.name;

        
        content.innerHTML = `
            <h2>${char.name}</h2>
            <p>Height: ${char.height}</p>
            <p>Gender: ${char.gender}</p>
            <p>Birth Year: ${char.birth_year}</p>
            <p>Home World: ${homeworld}</p>
        `;

    } catch (error) {
        
        content.innerHTML = `
            <h2 style="font-size: 22px;">Oh No! That person isnt available.</h2>
        `;
    }
}

findBtn.addEventListener('click', getCharacter);