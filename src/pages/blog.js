import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogComponent from "../components/BlogComponents/blogComponent"
import ContentWrapper from "../components/BlogComponents/contentWrapper"

const HiWrapper = styled.div`
    max-width: 800px;
    margin: 3rem auto;
    margin-bottom: 2rem;
    h2 {
        font-weight: bold;
        text-align: center;
        line-height: 4rem;
        font-size: 48px;
        color: #1F2933;
    }

    p {
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
    @media screen and (max-width: 425px) {
        padding: 0 20px;
        h2 {
            font-size: 32px;
            line-height: 3rem;
        }

        p {
            font-size: 1.2rem;
            line-height: 2rem;
        }
    }
`

class Blog extends Component {
    render() {
        return (
            <Layout showBanner>
                <SEO title="Categorías" />
                <ContentWrapper>
                    <HiWrapper>
                        <h2>Lee y aprende algo nuevo <span role="img" aria-label="books">📚</span> <br/>¡Es gratis! </h2>
                        <p>
                            Me encanta escribir sobre tecnología, tendencias y mis pensamientos. 
                            Si hay algo que te gustaría leer aquí no dudes en {" "}
                            <Link to="/contactame">escribirme.</Link>
                        </p>
                    </HiWrapper>
                    <BlogComponent data={this.props.data} />
                </ContentWrapper>
            </Layout>
        )
    }
}

export default Blog

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    tags
                    slug
                    readTime
                    category
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
