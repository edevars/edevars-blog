import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Postpreview from "../components/PostComponents/Postpreview"
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

const Tags = ({ data, pageContext }) => {
  console.log("la data de la tag", data)
  const { info } = data.posts

  return (
    <Layout>
      <SEO title="Posts" />
      <GridWrapper>
        <ContentWrapper>
          <h1>Todos los post relacionados con {pageContext.searched_tag}</h1>
        </ContentWrapper>
      </GridWrapper>
      <GridPosts>
        {info.map(({ id, excerpt, post }) => (
          <Postpreview
            slug={post.slug}
            key={id}
            title={post.title}
            date={post.date}
            tags={post.tags}
            relativePath={post.imageSlug.relativePath}
            imageSlug={post.imageSlug.childImageSharp.fluid.src}
            excerpt={excerpt}
            readTime={post.readTime}
          />
        ))}
      </GridPosts>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query SearchByTag($tags: [String!]) {
    posts: allMarkdownRemark(filter: { frontmatter: { tags: { in: $tags } } }) {
      info: nodes {
        id
        post: frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
          slug
          readTime
          imageSlug {
            relativePath
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
`
