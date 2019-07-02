import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import GridPosts from "../components/PostComponents/gridposts"
import CategoriesList from "../components/PostComponents/CategoriesList"

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css"

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
        padding: 0 5%;
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
`

const Button = styled.button`
    display: ${props => (props.visibility === "true" ? "flex" : "none")};
    width: 40%;
    padding: 20px 0px;
    margin: 60px auto 0px;
    background: #060695;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 30px;
    justify-content: center;
    border: none;
    outline: 0;

    &:hover {
        cursor: pointer;
    }

    .Icon {
        align-self: center;
        margin-left: 20px;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
        font-size: 1.2rem;
    }
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
            end: 6,
            visibilityButton: "true",
            limit: 3,
        }
    }

    componentDidMount() {
        this.renderPosts()
        if (this.props.data.allMarkdownRemark.nodes.length === 0) {
            this.setState({
                visibilityButton: "false",
            })
        }
    }

    addPosts = () => {
        let difference =
            this.props.data.allMarkdownRemark.nodes.length - this.state.end

        if (difference > this.state.limit) {
            this.setState({
                start: this.state.end,
                end: this.state.end + this.state.limit,
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
                    visibilityButton: "false",
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
        return (
            <Layout>
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
                    <CategoriesList />
                    <GridPosts data={this.state.data} />

                    <Button
                        onClick={() => {
                            this.renderPosts()
                        }}
                        visibility={this.state.visibilityButton}
                    >
                        Ver más posts
                        <FontAwesomeIcon icon={faSyncAlt} className="Icon" />
                    </Button>
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
