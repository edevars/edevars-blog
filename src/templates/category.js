import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BlogComponent from "../components/BlogComponents/blogComponent"

const ContentWrapper = styled.section`
    display: grid;
    width: 90%;
    grid-template: auto auto / 1fr;
    grid-template-areas: "Content" "Posts";
    margin: 0px auto;
    background: white;
    -webkit-box-shadow: 0px 31px 31px 9px rgba(102, 102, 102, 1);
    -moz-box-shadow: 0px 31px 31px 9px rgba(102, 102, 102, 1);
    box-shadow: 0px 31px 31px 9px rgba(102, 102, 102, 1);
    position: relative;
    border-radius: 10px;
    top: -100px;
    padding: 0 10%;
    padding-bottom: 150px;
    @media screen and (max-width: 1024px) {
        width: 100%;
        position: initial;
        box-shadow: initial;
        border: none;
        top: none;
    }
`

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
        background: -webkit-linear-gradient(
            -30deg,
            #001749 0%,
            #0e4bdb 30%,
            #2dddf4 85%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

class Category extends Component {
    render() {
        return (
            <Layout>
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
