import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import GridPosts from "../components/gridposts"
import styled from "styled-components"

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

const Contact = ({ data }) => (
    <Layout>
        <SEO title="Posts" />
        <GridWrapper>
            <ContentWrapper>
                <h2>Todas las cosas que piense irán aquí </h2>
                <h4>
                    Numero de posts{" "}
                    <span>{data.allMarkdownRemark.totalCount}</span>
                </h4>
                <p>
                    Tecnolgía, comida, lugares y algun que otro momento de
                    pitufo filosofo.
                </p>
            </ContentWrapper>
            <GridPosts data={data} />
        </GridWrapper>
    </Layout>
)

export default Contact

export const query = graphql`
    query allPosts {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
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
