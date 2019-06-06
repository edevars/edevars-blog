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
    console.log("la data de la tag", data)

    return (
        <Layout>
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
