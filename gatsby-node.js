const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter{
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}
