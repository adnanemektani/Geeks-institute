const axios = require('axios');

async function fetchPosts() {
    try {
       
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        console.log('\n=== Fetched Post Titles ===');
        

        response.data.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
        
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

module.exports = fetchPosts;
