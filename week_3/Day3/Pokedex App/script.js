let currentId = 1  

async function fetchPokemon(id) {
    try {
        
        document.getElementById('pokemon-name').textContent = 'Loading...'
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!response.ok) {
            throw new Error('Pokemon not found')
        }
        const data = await response.json()
        currentId = data.id
document.getElementById('pokemon-img').src = data.sprites.front_default
document.getElementById('pokemon-name').textContent = data.name
document.getElementById('pokemon-id').textContent = `Pokemon n° ${data.id}`
document.getElementById('pokemon-height').textContent = `Height: ${data.height}cm`
document.getElementById('pokemon-weight').textContent = `Weight: ${data.weight}gr`
document.getElementById('pokemon-type').textContent = `Type: ${data.types[0].type.name}`
        
    } catch(err) {
        document.getElementById('pokemon-name').textContent = 'Oh no! That Pokemon isn\'t available...'
    }
}


document.getElementById('random-btn').addEventListener('click', () => {
    currentId = Math.floor(Math.random() * 898) + 1
    fetchPokemon(currentId)
})
document.getElementById('next-btn').addEventListener('click', () => {
    currentId = currentId + 1
    fetchPokemon(currentId)
})

document.getElementById('prev-btn').addEventListener('click', () => {
    currentId = currentId - 1
    fetchPokemon(currentId)
})