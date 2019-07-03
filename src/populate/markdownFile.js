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

        if (month < 10 && day >= 10) {
            date = `${year}-0${month}-${day}`
        }

        if (month >= 10 && day < 10) {
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

        let category = categories[this.randomNumber(0, 4)]

        const imageSlug = "./cover.jpg"

        slug = slugify(title, {
            replacement: "-",
            remove: null,
            lower: true,
        })

        readTime = this.randomNumber(1, 60)

        content = faker.random.words(100)

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

## Ejemplo de un parrafo super falso
${markdown.content}

## El gato más genial de youtube
<iframe width="560" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

&nbsp;
## La imagen más tonta de un panda

![Panda Menso](https://enlaescuela.elnortedecastilla.es/2016/img/noticias/2016/11/582f25a1e3044__550x550.jpg)

## Un pequeño componente de react

\`\`\`jsx
import React, {Component} from 'react';

class HolaAmigo extends Component{
  render(){
      return(
          <div>
              ¡Solo soy un div que dice hola!
          </div>
      )
  }
}

export default HolaAmigo
\`\`\`
`
        return fileMockup
    },
    randomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    },
}
