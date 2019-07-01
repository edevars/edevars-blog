import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { formatShort } from "../utils/dateFormatter"
import AllTags from "../components/TagsComponents/alltags"
import DateBlock from "../components/BlogComponents/dateblock"
import Category from "../components/BlogComponents/category"

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 50% 1fr;
    grid-template-areas: "Info Content Related";
    margin: 0px auto;
    p {
        font-size: 21px;
    }
`

const InfoContainer = styled.div`
    grid-area: Info;
`

const InfoElements = styled.section`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    z-index: 0;
    top: 50px;
`

const ContentContainer = styled.section`
    grid-area: Content;
    padding: 0.5rem;
    padding-top: 4rem;
`

const RelatedContainer = styled.section`
    grid-area: Related;
    padding-left: 50px;
    margin-top: 5rem;
    position: -webkit-sticky;
    position: sticky;
    z-index: 0;
    top: 50px;
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
                    <InfoElements>
                        <DateBlock day={day} month={month} year={year} />
                        <Category category={category} />
                        <h4 style={{ marginTop: "1em" }}>
                            <span role="img" aria-label="coffee">
                                ☕
                            </span>{" "}
                            {readTime} min read time
                        </h4>
                    </InfoElements>
                </InfoContainer>

                <ContentContainer>
                    <Title>{title}</Title>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </ContentContainer>
                <div>
                    <RelatedContainer>
                        <h4>Encuentra más de lo que buscabas...</h4>
                        <AllTags />
                    </RelatedContainer>
                </div>
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
