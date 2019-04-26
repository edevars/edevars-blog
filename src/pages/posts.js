import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Postpreview from "../components/Postpreview"

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <h2>Todas las cosas que piense irán aquí </h2>
      <h4>
        Numero de posts <span>{data.allMarkdownRemark.totalCount}</span>
      </h4>
      <p>
        Tecnolgía, comida, lugares y algun que otro momento de pitufo filosofo.
      </p>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div key={index}>
          <Postpreview
            slug={node.fields.slug}
            key={index}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            imageSlug={node.frontmatter.imageSlug.childImageSharp.fluid.src}
            excerpt={node.excerpt}
          />
        </div>
      ))}
    </div>
  </Layout>
)

export default Contact

export const query = graphql`
  
query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
          imageSlug {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}


`
