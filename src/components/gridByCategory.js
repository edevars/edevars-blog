import React from "react"
import { graphql, StaticQuery } from "gatsby"
import GridPosts from "./gridposts"

const GridByCategory = props => {
    return (
        <StaticQuery
            query={graphql`
                query{
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
                console.log("Y la data es: ", data)
                console.log('La prop que entra es: ', props.category)
                 let posts = JSON.parse(JSON.stringify(data))
                 console.log('El objeto posts se copia de la data', posts)

                let postBycategory = posts.allMarkdownRemark.nodes.filter(node => {
                    return node.frontmatter.category === props.category
                })

                console.log('Se filtan y sale como resultado', postBycategory);

                posts.allMarkdownRemark.nodes = [...postBycategory]

                console.log('Modificando el objeto posts', posts)

                return (
                    <div style={{ width: "100%", paddingTop: "70px" }}>
                        <GridPosts data={posts} width="90%" />
                    </div>
                )
            }}
        />
    )
}

export default GridByCategory
