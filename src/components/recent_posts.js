import React from "react"
import { graphql, StaticQuery } from "gatsby"
import GridPosts from "./gridposts"

const RecentPost = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
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
                return <GridPosts data={data} />
            }}
        />
    )
}

export default RecentPost
