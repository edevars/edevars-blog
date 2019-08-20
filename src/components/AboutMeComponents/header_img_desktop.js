import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => (
    <StaticQuery
        query={graphql`
            query HeaderAboutMeDesktop {
                imageHeader: file(relativePath: { eq: "cover-about.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 3898, quality: 90) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => {
            return (
                <Img
                    fluid={data.imageHeader.childImageSharp.fluid}
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                />
            )
        }}
    />
)
