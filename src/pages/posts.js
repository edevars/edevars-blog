import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
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
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
      <Postpreview name="Enrique" />
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
