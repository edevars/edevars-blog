import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"
import GridPosts from "../components/PostComponents/gridposts"

const GridWrapper = styled.div`
    display: grid;
    grid-template: auto auto / 1fr;
    grid-template-areas:
        "content"
        "posts";
`

const ContentWrapper = styled.section`
    display: grid;
    width: 85%;
    grid-template: auto auto / 1fr;
    grid-template-areas: "Content" "Posts";
    margin: 0px auto;
    background: white;
    -webkit-box-shadow: 0px 0px 38px 3px rgba(109, 145, 139, 0.38);
    -moz-box-shadow: 0px 0px 38px 3px rgba(109, 145, 139, 0.38);
    box-shadow: 0px 0px 38px 3px rgba(109, 145, 139, 0.38);
    position: relative;
    border-radius: 10px;
    top: -5vh;
    @media screen and (max-width: 1024px) {
        width: 100%;
        position: initial;
        box-shadow: initial;
        border: none;
        top: none;
    }
`

const SearchedCategory = styled.span`
    display: inline-block;
    font-size: 1.2em;
    background: -webkit-linear-gradient(
        -30deg,
        #001749 0%,
        #0e4bdb 30%,
        #2dddf4 85%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: .1em;
`

const TitleContainer = styled.div`
    max-width: 768px;
    margin: 3rem auto;
`

const MarginContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3rem;
`

const Category = ({ data, pageContext }) => {
    console.log(data)
    return (
        <Layout>
            <SEO title="Posts" />
            <GridWrapper>
                <ContentWrapper>
                    <MarginContainer>
                        <TitleContainer>
                            <h1>
                                Todos los post relacionados con:{" "}
                                <SearchedCategory>
                                    {pageContext.category}{" "}
                                </SearchedCategory>
                            </h1>
                        </TitleContainer>
                        <GridPosts data={data} />
                    </MarginContainer>
                </ContentWrapper>
            </GridWrapper>
        </Layout>
    )
}

export default Category

export const query = graphql`
    query SearchByCategory($category: String!) {
        allMarkdownRemark(
            filter: { frontmatter: { category: { eq: $category } } }
        ) {
            nodes {
                id
                frontmatter {
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
