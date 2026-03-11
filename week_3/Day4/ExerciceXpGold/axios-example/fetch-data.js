// fetch-data.js - Fetch data from JSONPlaceholder API using axios
const axios = require('axios');

// Function to fetch posts and display titles
async function fetchAndDisplayPosts() {
    try {
        console.log('\n=== Fetching Posts from API ===\n');
        
        // Make HTTP GET request to JSONPlaceholder API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        console.log(`Successfully fetched ${response.data.length} posts!\n`);
        console.log('--- Post Titles ---\n');
        
        // Display the title of each post in the terminal
        response.data.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
        
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

module.exports = fetchAndDisplayPosts;
