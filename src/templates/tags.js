import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"
import GridPosts from "../components/PostComponents/gridposts"
import ContentWrapper from "../components/BlogComponents/contentWrapper"

const GridWrapper = styled.div`
    display: grid;
    grid-template: auto auto / 1fr;
    grid-template-areas:
        "content"
        "posts";
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

const Tags = ({ data, pageContext }) => {

    return (
        <Layout header={true}>
            <SEO title="Tags" />
            <GridWrapper>
            <ContentWrapper>
                    <MarginContainer>
                        <TitleContainer>
                    <h1>
                        Todos los post relacionados con{" "}
                        {pageContext.searched_tag}
                    </h1>
                    </TitleContainer>
                        <GridPosts data={data} />
                    </MarginContainer>
                </ContentWrapper>
            </GridWrapper>
        </Layout>
    )
}

export default Tags

export const query = graphql`
    query SearchByTag($tags: [String!]) {
        allMarkdownRemark(filter: { frontmatter: { tags: { in: $tags } } }) {
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
