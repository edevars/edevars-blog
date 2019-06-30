import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { StaticQuery, graphql } from "gatsby"

const HomeImageMobileMedium = () => (
    <StaticQuery
        query={graphql`
            query {
                file(name: { eq: "bg-nav" }) {
                    childImageSharp {
                        fluid(
                            maxWidth: 768
                            quality: 80
                            traceSVG: { color: "rgb(45, 179, 244)" }
                        ) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

export default HomeImageMobileMedium
