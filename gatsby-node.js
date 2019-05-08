const path = require(`path`)

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

    let clean_tag_list = []

    tags_list.map(
      tag => !clean_tag_list.includes(tag) && clean_tag_list.push(tag)
    )

    clean_tag_list.forEach(tag => {
      createPage({
        path: "/tags/" + tag,
        component: path.resolve(`./src/templates/tags.js`),
        context: {
          tags: [tag],
          searched_tag: tag
        },
      })
    })
  })
}
