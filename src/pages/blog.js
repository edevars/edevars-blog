import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import GridPosts from "../components/PostComponents/gridposts"

const Wrapper = styled.div`
    width: 100%;
    position: absolute;
`

const ContentWrapper = styled.section`
    display: grid;
    width: 85%;
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
    @media screen and (max-width: 1024px) {
        width: 100%;
        position: initial;
        box-shadow: initial;
        border: none;
        top: none;
    }
`

const PostWrapper = styled.div`
    grid-area: Posts;
    padding-top: 50px;
    width: 100%;
`

const HiWrapper = styled.div`
    max-width: 768px;
    margin: 3rem auto;
`

const Button = styled.button`
    display: ${props => (props.visibility ? "initial" : "none")};
`

class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                allMarkdownRemark: {
                    nodes: [],
                },
            },
            start: 0,
            end: 10,
            visibilityButton: true,
        }
    }

    componentDidMount() {
        this.renderPosts()
    }

    addPosts = () => {
        let difference =
            this.props.data.allMarkdownRemark.nodes.length - this.state.end

        if (difference > 10) {
            this.setState({
                start: this.state.end,
                end: this.state.end + 10,
            })
        } else {
            this.setState({
                start: this.state.end,
                end: this.state.end + difference,
            })
        }

        let posts = {
            allMarkdownRemark: {
                nodes: [].concat(
                    this.state.data.allMarkdownRemark.nodes,
                    this.props.data.allMarkdownRemark.nodes.slice(
                        this.state.start,
                        this.state.end
                    )
                ),
            },
        }

        this.setState({
            loading: false,
            data: posts,
        })
    }

    renderPosts = () => {
        this.setState({
            loading: true,
        })

        try {
            this.addPosts()
            if (
                this.props.data.allMarkdownRemark.nodes.length ===
                this.state.end
            ) {
                this.setState({
                    visibilityButton: false,
                    loading: false,
                })
            }
        } catch (error) {
            this.setState({
                loading: false,
                error,
            })
        }
    }

    render() {
        const lenghtData = this.state.data.allMarkdownRemark.nodes.length
        console.log(this.state.loading)
        return (
            <Layout>
                <SEO title="Categorías" />
                <Wrapper>
                    <ContentWrapper>
                        {this.state.loading ? (
                            <h1>Esta cargando</h1>
                        ) : (
                            <GridPosts data={this.state.data} />
                        )}
                        <Button
                            onClick={() => {
                                this.renderPosts()
                            }}
                            visibility={this.state.visibilityButton}
                        >
                            Cargar más
                        </Button>
                    </ContentWrapper>
                </Wrapper>
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
