import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => (
    <StaticQuery
        query={graphql`
            query HeaderImageMobile {
                imageHeader: file(relativePath: { eq: "bg-nav.jpg" }) {
                    childImageSharp {
                        fluid(
                            maxWidth: 1080
                            quality: 80
                        ) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => {
            return <Img fluid={data.imageHeader.childImageSharp.fluid} />
        }}
    />
)
