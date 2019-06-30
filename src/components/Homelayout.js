import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Media from "react-media"

import Nav from "./Navbar"
import BurgerMenu from "./BurgerMenu"
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css"

library.add(fab)
config.autoAddCss = false

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Comfortaa|Roboto|Source+Sans+Pro');

  body{
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`

const Layout = ({ children }) => (
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
                <Media query="(max-width: 768px)">
                    {matches => (matches ? <BurgerMenu /> : <Nav />)}
                </Media>

                <main>{children}</main>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
