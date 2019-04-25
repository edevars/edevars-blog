import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Contact = ({ data }) => (
  <Layout>
    {console.log(data)}
    <SEO title="Posts" />
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <h1>Todas las cosas que piense irán aquí </h1>
      <p>
        Tecnolgía, comida, lugares y algun que otro momento de pitufo filosofo.
      </p>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div key={index}>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.excerpt}</p>
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
          }
          excerpt
        }
      }
    }
  }
`
