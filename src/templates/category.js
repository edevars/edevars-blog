import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"
import GridPosts from "../components/gridposts"

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

const SearchedCategory = styled.span`
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

const Category = ({ data, pageContext }) => {
    console.log(data)
    return (
        <Layout>
            <SEO title="Posts" />
            <GridWrapper>
                <ContentWrapper>
                    <h1>
                        Todos los post relacionados con{" "}
                        <SearchedCategory>
                            {pageContext.category}{" "}
                        </SearchedCategory>
                    </h1>
                </ContentWrapper>
            </GridWrapper>
            <GridPosts data={data} />
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
