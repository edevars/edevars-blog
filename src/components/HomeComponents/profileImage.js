import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => (
    <StaticQuery
        query={graphql`
            query profileImage {
                Image: file(relativePath: { eq: "roku-profile.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 800, quality: 90) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => {
            return (
                <Img
                    fluid={data.Image.childImageSharp.fluid}
                />
            )
        }}
    />
)
