import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { StaticQuery, graphql } from "gatsby"

const HomeImageMobileSmall = () => (
    <StaticQuery
        query={graphql`
            query {
                file(name: { eq: "bg-nav" }) {
                    childImageSharp {
                        fluid(
                            maxWidth: 425
                            quality: 80
                        ) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img
                fluid={data.file.childImageSharp.fluid}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    opacity: "0.6"
                }}
                obejectFit="cover"
            />
        )}
    />
)

export default HomeImageMobileSmall
