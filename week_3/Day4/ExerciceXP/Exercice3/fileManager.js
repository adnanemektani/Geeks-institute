const fs = require("fs");

function readFile(filename){
    fs.readFile(filename, "utf-8", (err,data) => {
        if (err) return console.error(err);
        console.log(data);
    });
};


function writeFile(filename, content){
    fs.writeFile(filename, content , (err) => {
        if (err) return console.error(err);
        console.log("Write complete!!");
    });
};
module.exports = { readFile, writeFile};