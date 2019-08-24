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
    h1 {
        font-weight: bold;
        text-align: center;
    }

    p {
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
    @media screen and (max-width: 425px) {
        padding: 0 20px;
    }
`

class Blog extends Component {
    render() {
        return (
            <Layout header={true} isActive="Blog">
                <SEO title="Categorías" />
                <ContentWrapper>
                    <HiWrapper>
                        <h1>¡Tutoriales, consejos y mucho más!</h1>
                        <p>
                            Encuentra posts divertidos con muchas utilidades
                            para que te vuelvas un mejor desarrollador. Si hay algo que te gustaría 
                            ver aquí no dudes en <Link to="/contactame">escribirme</Link>
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
