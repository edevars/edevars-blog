import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { formatShort } from "../utils/dateFormatter"
import AllTags from "../components/alltags"
import DateBlock from "../components/dateblock"
import Category from "../components/category"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.35fr 1fr 0.5fr;
  grid-template-areas: "Info Content Related";
  margin: 0px auto;
  width: 80%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "Info"
      "Content"
      "Related";
  }
`

const InfoContainer = styled.section`
  grid-area: Info;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
`

const ContentContainer = styled.section`
  grid-area: Content;
  padding: 0.5rem;
  padding-top: 4rem;
`

const RelatedContainer = styled.section`
  grid-area: Related;
  padding-left: 50px;
  padding-top: 5rem;
`

const Title = styled.h1`
  display: inline-block;
  font-size: 72px;
  background: -webkit-linear-gradient(
    -30deg,
    #001749 0%,
    #0e4bdb 30%,
    #2dddf4 85%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default ({ data }) => {
  const post = data.markdownRemark
  const { title, tags, date, readTime, category } = post.frontmatter
  const { day, month, year } = formatShort(date)
  return (
    <Layout>
      <SEO title={title} description={post.excerpt} keywords={tags} />
      <GridWrapper>
        <InfoContainer>
          <DateBlock day={day} month={month} year={year} />
          <Category category={category} />
          <h4 style={{ marginTop: "1em" }}>
            <span role="img" aria-label="coffee">
              ☕
            </span>{" "}
            {readTime} min read time
          </h4>
        </InfoContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ContentContainer>
        <RelatedContainer>
          <h4>Encuentra más de lo que buscabas...</h4>
          <AllTags />
        </RelatedContainer>
      </GridWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        tags
        date
        readTime
      }
      excerpt
    }
  }
`
