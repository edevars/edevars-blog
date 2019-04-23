/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Header from "./header"
import Nav from "./Navbar"
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

library.add(fab)
config.autoAddCss = false;

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
      query SiteTitleQuery {
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
        <Nav />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
