import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Postpreview from "../components/Postpreview"
import styled from "styled-components"

const GridWrapper = styled.div`
  display: grid;
  grid-template: auto auto / 1fr;
  grid-template-areas:
    "content"
    "posts"; 
`

const ContentWrapper = styled.div`
  grid-area: content;
  margin: 2.5rem auto;
  max-width: 600px;
`

const GridPosts = styled.div`
  grid-area: posts;
  display: grid;
  width: 70%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 600px));
  grid-gap: 25px 50px;
  margin: 0px auto;
  
`

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <GridWrapper>
      <ContentWrapper>
        <h2>Todas las cosas que piense irán aquí </h2>
        <h4>
          Numero de posts <span>{data.allMarkdownRemark.totalCount}</span>
        </h4>
        <p>
          Tecnolgía, comida, lugares y algun que otro momento de pitufo
          filosofo.
        </p>
      </ContentWrapper>
      <GridPosts>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div key={node.id}>
            <Postpreview
              slug={node.frontmatter.slug}
              key={index}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              imageSlug={node.frontmatter.imageSlug.childImageSharp.fluid.src}
              excerpt={node.excerpt}
              readTime={node.frontmatter.readTime}
            />
          </div>
        ))}
      </GridPosts>
    </GridWrapper>
  </Layout>
)

export default Contact

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC} ){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            slug
            readTime
            imageSlug {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
