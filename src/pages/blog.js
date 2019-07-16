import React, { Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogComponent from "../components/BlogComponents/blogComponent"
import ContentWrapper from "../components/BlogComponents/contentWrapper"


const HiWrapper = styled.div`
    max-width: 768px;
    margin: 3rem auto;
    margin-bottom: 2rem;
    h1 {
        font-weight: bold;
        text-align: center;
    }

    p {
        font-size: 1.5rem;
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
                            Encuentra posts de todos los temas, sabores y
                            colores. Siempre me ha encantado escribir así que
                            espero los disfrutes.
                        </p>
                    </HiWrapper>
                    <BlogComponent data={this.props.data}/>
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
