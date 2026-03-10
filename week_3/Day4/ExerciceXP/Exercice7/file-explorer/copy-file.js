const fs = require("fs")

fs.readFile("source.txt", "utf-8", (err, data) => {
    if (err) return console.error(err)
    fs.writeFile("destination.txt", data, (err) => {
        if (err) return console.error(err)
        console.log("File copied!")
    })
})