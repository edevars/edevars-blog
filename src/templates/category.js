import React, { Component } from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
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

    .category {
        color: #0a13bf;
    }
`

class Category extends Component {
    render() {
        return (
            <Layout showBanner>
                <SEO title="Categorías" />
                <ContentWrapper>
                    <HiWrapper>
                        <h1>
                            Todos los posts de{" "}
                            <span className="category">
                                {this.props.pageContext.category}
                            </span>
                        </h1>
                    </HiWrapper>
                    <BlogComponent data={this.props.data}/>
                </ContentWrapper>
            </Layout>
        )
    }
}

export default Category

export const query = graphql`
    query SearchByCategory($category: String!) {
        allMarkdownRemark(
            filter: { frontmatter: { category: { eq: $category } } }
            sort: { fields: [frontmatter___date], order: DESC }
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
