import React from "react"
import { graphql, StaticQuery } from "gatsby"
import GridPosts from "./gridposts"

const GridByCategory = props => {
    return (
        <StaticQuery
            query={graphql`
                query Categories{
                    allMarkdownRemark(
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
            `}
            render={data => {
                let posts = JSON.parse(JSON.stringify(data))

                let postBycategory = posts.allMarkdownRemark.nodes.filter(
                    node => {
                        return node.frontmatter.category === props.category
                    }
                )

                posts.allMarkdownRemark.nodes = [...postBycategory]

                return (
                    <GridPosts data={posts}/>
                )
            }}
        />
    )
}

export default GridByCategory
