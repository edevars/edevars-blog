const Fs = require("fs")
const Path = require("path")
const Axios = require("axios")
const faker = require("faker")

async function Image(date, mainDirectory) {
    const url = faker.random.image()
    const path = Path.join(__dirname, `${mainDirectory}/${date}/cover.jpg`)
    const writer = Fs.createWriteStream(path)

    const response = await Axios({
        url,
        method: "GET",
        responseType: "stream",
    })

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on("finish", resolve)
        writer.on("error", reject)
    }).then(console.log("Image downloaded"))
}

module.exports = { Image }
