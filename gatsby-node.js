const path = require(`path`)
const slugify = require("slugify")
const { categories } = require("./src/utils/categoriesArray")
// *!  Create Posts
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                            tags
                        }
                    }
                }
            }
        }
    `).then(result => {
        let tags_list = []

        //Creating posts pages and generating list of all tags
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            node.frontmatter.tags.forEach(tag => {
                tags_list.push(tag)
            })

            createPage({
                path: "/blog" + node.frontmatter.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: node.frontmatter.slug,
                },
            })
        })

        //Creating list of non-repeated tags
        let clean_tag_list = []

        tags_list.map(
            tag => !clean_tag_list.includes(tag) && clean_tag_list.push(tag)
        )

        //Creating page for each tag
        clean_tag_list.forEach(tag => {
            createPage({
                path: `/${tag}`,
                component: path.resolve(`./src/templates/tags.js`),
                context: {
                    tags: [tag],
                    searched_tag: tag,
                },
            })
        })

        //Creating page for each category
        
        categories.forEach((category) => {
            let slug = '/categorias/' + slugify(category, {
                replacement: '-',
                remove: null,
                lower: true
              })
            createPage({
                path: slug,
                component: path.resolve(`./src/templates/category.js`),
                context: {
                    category,
                    slug,
                },
            })
        })
    })
}
