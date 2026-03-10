const path = require('path');
const fs = require('fs');

function getFileInfo() {

    const dataDir = path.join(__dirname, 'data');
    const filePath = path.join(dataDir, 'example.txt');

    console.log('\n=== File Information ===');
    console.log(`File Path: ${filePath}`);


    const exists = fs.existsSync(filePath);
    console.log(`File Exists: ${exists ? 'Yes' : 'No'}`);

    if (exists) {

        const stats = fs.statSync(filePath);
        
        console.log(`\n--- File Stats ---`);
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Creation Time: ${stats.birthtime}`);
        console.log(`Last Modified: ${stats.mtime}`);
        
        return {
            exists: true,
            size: stats.size,
            creationTime: stats.birthtime,
            lastModified: stats.mtime
        };
    } else {
        return { exists: false };
    }
}

module.exports = getFileInfo;
