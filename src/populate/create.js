const fs = require("fs")
const path = require("path")
const markdownFile = require("./markdownFile")

module.exports = {
    mainDirectory: async function(dir){
        const dirName = path.join(__dirname, dir)
        if (!fs.existsSync(dirName)){
            await fs.mkdir(dirName, err => {
                if(err){
                    return console.log(err)
                }
                return console.log("Directorio principal creado");
            })
        }
    },
    directory: async function(name, mainDirectory) {
        const dirName = path.join(__dirname, `${mainDirectory}/${name}`)
        await fs.mkdir(dirName, err => {
            if (err) {
                return console.log(err)
            }
            return console.log(`Directorio ${dirName} creado`)
        })
    },
    file: async function(markdownObject, mainDirectory) {
        const data = markdownFile.format(markdownObject)
        const dirName = path.join(__dirname, `${mainDirectory}/${markdownObject.date}/index.md`)
        await fs.writeFile(dirName, data, err => {
            if (err) {
                return console.log(err)
            }
            return console.log(
                `Archivo markdown creado en ${markdownObject.date}`
            )
        })
    },
}
