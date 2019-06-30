import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Comfortaa|Roboto|Source+Sans+Pro');

    body{
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`

const HomeLayout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <GlobalStyle />
                <main>{children}</main>
            </>
        )}
    />
)

export default HomeLayout
