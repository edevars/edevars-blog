import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { formatShort } from "../utils/dateFormatter"
import Tag from '../components/tags'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr 0.5fr;
  grid-template-areas: "Info Content Related";
  iframe{
    margin: 0px auto;
  }

  div{
    margin: 0 auto;
  }
`

const InfoContainer = styled.section`
  grid-area: Info;
`

const ContentContainer = styled.section`
  grid-area: Content;
  padding: 4rem;
`

const RelatedContainer = styled.section`
  grid-area: Related;
  background-color: green;
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
    background: -webkit-linear-gradient(
    30deg,
    #001749 0%,
    #0e4bdb 70%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  line-height: 1;
  border-radius: 50%;
  width: 120px;
  height: 120px;
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
          <div>
            {tags.map((tag, index)=> <Tag key={index} tag={tag}/>)}
          </div>
        </InfoContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ContentContainer>
        <RelatedContainer>algo</RelatedContainer>
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
        tags
        date
      }
      excerpt
    }
  }
`
