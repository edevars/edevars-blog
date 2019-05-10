import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { formatShort } from "../utils/dateFormatter"
import AllTags from "../components/alltags"

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
  padding: 0px 70px 0px 0px;
  padding-top: 3rem;
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

const DateBlock = styled.div`
  background: -webkit-linear-gradient(30deg, #001749 0%, #0e4bdb 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  line-height: 1;
  border-radius: 50%;
  width: 110px;
  height: 110px;
  text-align: center;
  color: white;

  span {
    display: block;
    width: 100%;
  }
  .month {
    font-size: 14px;
  }
  .day {
    font-weight: 600;
    font-size: 34px;
    margin-bottom: 5px;
  }
  
`

export default ({ data }) => {
  const { author } = data.site.siteMetadata
  const post = data.markdownRemark
  const { title, tags, date } = post.frontmatter
  const { day, month, year } = formatShort(date)
  return (
    <Layout>
      <SEO title={title} description={post.excerpt} keywords={tags} />
      <GridWrapper>
        <InfoContainer>
          <DateBlock>
            <span className="month">{month}</span>
            <span className="day">{day}</span>
            <span className="year">{year}</span>
          </DateBlock>
          <p style={{ fontWeight: "bold" }}>
            Escrito por:
            <span style={{ fontWeight: 400 }}>{" " + author}</span>
          </p>
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
    site {
      siteMetadata {
        author
      }
    }

    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date
      }
      excerpt
    }
  }
`
