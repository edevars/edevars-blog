import React from "react"
import { graphql } from "gatsby"
import Media from "react-media"
import Header from "../components/HeaderComponents/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { formatShort } from "../utils/dateFormatter"
import AllTags from "../components/TagsComponents/alltags"
import DateBlock from "../components/BlogComponents/dateblock"
import Category from "../components/BlogComponents/category"
import { DiscussionEmbed } from "disqus-react"
import PostImage from "../components/PostComponents/postImage"

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
            font-size: 20px;
        }
    }

    @media screen and (max-width: 768px) {
        grid-template-areas: "Info" "Content" "Related";
        grid-template-columns: 1fr;
    }
`

const InfoContainer = styled.div`
    .mobile {
        display: none;
    }
    @media screen and (max-width: 768px) {
        .mobile {
            display: block;
            text-align: center;
        }
    }
`

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

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        margin-top: 35px;
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
    max-width: 100vw;
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
        margin-top: 30px;
        margin-bottom: 0px;
        margin-left: 24px;
        margin-right: 24px;
        font-size: 1.8rem;
        text-align: center;
    }
`

export default ({ data }) => {
    const post = data.markdownRemark
    const {
        title,
        tags,
        date,
        readTime,
        category,
        slug,
        imageSlug,
    } = post.frontmatter

    const { day, month, year } = formatShort(date)

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: slug },
    }

    return (
        <Layout>
            <SEO title={title} description={post.excerpt} keywords={tags} />
            <Media
                query="(min-width: 769px)"
                render={() => (
                    <Header /> 
                )}
            />
            
            <GridWrapper>
                <InfoContainer>
                    <Media
                        query="(max-width: 768px)"
                        render={() => (
                            <PostImage src={imageSlug.relativePath}></PostImage>
                        )}
                    />
                    <Title className="mobile">{title}</Title>
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
                    <Title className="desktop">{title}</Title>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <DiscussionEmbed {...disqusConfig} />
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
                slug
                imageSlug {
                    relativePath
                }
            }
            excerpt
        }
    }
`
