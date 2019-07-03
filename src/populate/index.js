const create = require("./create")
const markdownFile = require("./markdownFile")
const download = require("./download")

//Crea el directorio posts si no esta creado
const mainDirectory = "posts"
create.mainDirectory(mainDirectory)

const LIMIT = 1
let markdownObjects = []

for (let index = 0; index < LIMIT; index++) {
    markdownObjects.push(markdownFile.mockup())
}

async function CrearDirectorios(){
    await markdownObjects.map(markdownObject => {
        const nameDirectory = markdownObject.date
        create.directory(nameDirectory, mainDirectory)
    })
}

async function CrearMarkdowns(){
    await markdownObjects.map(markdownObject => {
        create.file(markdownObject, mainDirectory)
    })
}

async function DescargarImagenes(){
    await markdownObjects.map(markdownObject => {
        const nameDirectory = markdownObject.date
        download.Image(nameDirectory, mainDirectory)
    })
}

CrearDirectorios()
DescargarImagenes()
CrearMarkdowns()


