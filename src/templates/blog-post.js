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
    grid-template-columns: 1fr 630px 1fr;
    grid-template-areas: "Info Content Related";
    margin: 0px auto;
    grid-column-gap: 100px;
    p {
        font-size: 21px;
        line-height: 1.5;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 500px 1fr;
        grid-column-gap: 50px;
        p {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 768px) {
        grid-template-areas: "Info" "Content" "Related";
        grid-template-columns: 1fr;
    }
`

const InfoContainer = styled.div``

const InfoElements = styled.section`
    margin-top: 100px;
    margin-left: auto;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    z-index: 0;
    max-width: 300px;
    min-width: 190px;
    top: 70px;
    .mobile {
        display: none;
    }
    @media screen and (max-width: 768px) {
        margin: 0 auto;
        margin-top: 50px;
        position: static;
        width: 80%;
        max-width: none;
        .mobile {
            display: block;
            text-align: center;
        }
    }
`

const ContentContainer = styled.section`
    grid-area: Content;
    padding: 0.5rem;
    padding-top: 4rem;
    margin: 0 auto;
    width: 100%;
    @media screen and (max-width: 768px) {
        padding: 24px;
        padding-top: 20px;
        .desktop {
            display: none;
        }
    }
`

const RelatedContainer = styled.section`
    grid-area: Related;
    margin-top: 5rem;
    position: -webkit-sticky;
    position: sticky;
    z-index: 0;
    top: 50px;
    max-width: 400px;
    min-width: 200px;
    h4 {
        font-weight: bold;
    }
    @media screen and (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
        padding: 0;
        padding-top: 20px;
        max-width: none;
    }
    @media screen and (max-width: 425px) {
        width: 90%;
    }
`

const Title = styled.h1`
    display: inline-block;
    color: #030640;
    @media screen and (max-width: 768px) {
        margin-bottom: 70px;
    }
    @media screen and (max-width: 425px) {
        margin-bottom: 3rem;
    }
`

export default ({ data }) => {
    const post = data.markdownRemark
    const { title, tags, date, readTime, category } = post.frontmatter
    const { day, month, year } = formatShort(date)
    return (
        <Layout header={true}>
            <SEO title={title} description={post.excerpt} keywords={tags} />
            <GridWrapper>
                <InfoContainer>
                    <InfoElements>
                        <Title className="mobile">{title}</Title>
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
                    <Title className="desktop">{title}</Title>
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
