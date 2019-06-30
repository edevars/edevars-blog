import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { StaticQuery, graphql } from "gatsby"

const HomeImageMobile = () => (
    <StaticQuery
        query={graphql`
            query {
                file(name: { eq: "bg-nav" }) {
                    childImageSharp {
                        fixed(width: 768, quality: 80) {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img
                fixed={data.file.childImageSharp.fixed}
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

export default HomeImageMobile
