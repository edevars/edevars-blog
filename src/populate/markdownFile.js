const faker = require("faker")
const slugify = require("slugify")
const { categories } = require("../utils/categoriesArray")

module.exports = {
    mockup: function() {
        const title = faker.random.words(this.randomNumber(3, 10))
        const year = this.randomNumber(1980, 2019)
        const month = this.randomNumber(1, 12)
        const day = this.randomNumber(1, 28)

        let date = `${year}-${month}-${day}`

        if (month < 10 && day > 10) {
            date = `${year}-0${month}-${day}`
        }

        if (month > 10 && day < 10) {
            date = `${year}-${month}-0${day}`
        }

        if (month < 10 && day < 10) {
            date = `${year}-0${month}-0${day}`
        }

        const tags = [
            faker.random.word(),
            faker.random.word(),
            faker.random.word(),
        ]

        let category = categories[this.randomNumber(0, 3)]

        const imageSlug = "./cover.jpg"

        slug = slugify(title, {
            replacement: "-",
            remove: null,
            lower: true,
        })

        readTime = this.randomNumber(1, 60)

        content = faker.lorem.words(500)

        return {
            title,
            date,
            tags,
            category,
            imageSlug,
            slug,
            readTime,
            content,
        }
    },

    format: function(markdown) {
        fileMockup = `---
  title: "${markdown.title}"
  date: "${markdown.date}"
  tags: ["${markdown.tags[0]}","${markdown.tags[1]}","${markdown.tags[2]}"]
  category: "${markdown.category}"
  imageSlug: "${markdown.imageSlug}"
  slug: "/${markdown.slug}"
  readTime: ${markdown.readTime}
---
${markdown.content}
`
        return fileMockup
    },
    randomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    },
}
