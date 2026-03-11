// file-info.js - File information using path and fs modules
const path = require('path');
const fs = require('fs');

// Use path.join to create a file path to example.txt within the data directory
const dataDir = path.join(__dirname, 'data');
const filePath = path.join(dataDir, 'example.txt');

// Check if the file exists using fs.existsSync
function checkFileInfo() {
    console.log('\n=== File Information ===\n');
    
    const exists = fs.existsSync(filePath);
    console.log(`File exists: ${exists ? 'Yes ✅' : 'No ❌'}`);
    
    if (exists) {
        // Get information about the file using fs.statSync
        const stats = fs.statSync(filePath);
        
        console.log(`\n--- File Details ---`);
        console.log(`File size: ${stats.size} bytes`);
        console.log(`Created: ${stats.birthtime}`);
        console.log(`Modified: ${stats.mtime}`);
        
        // Read and display content
        const content = fs.readFileSync(filePath, 'utf8');
        console.log(`\n--- File Content ---`);
        console.log(content);
    }
    
    return { exists, filePath };
}

module.exports = checkFileInfo;
