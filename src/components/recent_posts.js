import React from "react"
import { graphql, StaticQuery } from "gatsby"
import GridPosts from "./gridposts"

const RecentPost = () => {
    console.log('Aquí se imprimen todos los posts')
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
                return <GridPosts data={data} width="90%" />
            }}
        />
    )
}

export default RecentPost
