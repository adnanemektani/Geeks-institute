const getFileInfo = require('./file-info');


const fileInfo = getFileInfo();

console.log('\n=== Summary ===');
console.log(`The file ${fileInfo.exists ? 'exists' : 'does not exist'}`);
if (fileInfo.exists) {
    console.log(`Size: ${fileInfo.size} bytes`);
    console.log(`Created: ${fileInfo.creationTime}`);
}
