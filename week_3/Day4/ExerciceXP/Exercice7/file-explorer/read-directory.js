const fs = require("fs")

fs.readdir("./", (err, files) => {
    if (err) return console.error(err)
    console.log(files)
})