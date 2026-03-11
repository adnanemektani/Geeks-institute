// fetch.js - Command to fetch data from a public API using axios
const axios = require('axios');
const chalk = require('chalk');

async function fetchData(endpoint) {
    try {
        console.log(chalk.yellow('\n📡 Fetching data from API...\n'));
        
        // Using JSONPlaceholder API (free public API)
        const baseUrl = 'https://jsonplaceholder.typicode.com';
        const response = await axios.get(`${baseUrl}/${endpoint}/1`);
        
        console.log(chalk.green.bold('\n✅ Data fetched successfully!\n'));
        
        if (endpoint === 'posts') {
            console.log(chalk.cyan('━'.repeat(50)));
            console.log(chalk.white.bgBlue.bold('  POST DETAILS  '));
            console.log(chalk.cyan('━'.repeat(50)));
            console.log(`${chalk.yellow('ID:     ')}${chalk.white(response.data.id)}`);
            console.log(`${chalk.yellow('Title:  ')}${chalk.green(response.data.title)}`);
            console.log(`${chalk.yellow('Body:   ')}${chalk.dim(response.data.body)}`);
            console.log(chalk.cyan('━'.repeat(50)) + '\n');
        }
        
        return response.data;
    } catch (error) {
        return null;
    }
}

module.exports = fetchData;
