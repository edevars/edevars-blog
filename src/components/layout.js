import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Media from "react-media"
import Header from "./HeaderComponents/header"
import Nav from "./Navbar"
import BurgerMenu from "./BurgerMenu"
import Footer from "./footer"

import "../styles/globalStyles.css"

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
                <Media query="(max-width: 768px)">
                    {matches => (matches ? <BurgerMenu /> : <Nav />)}
                </Media>
                <Header siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
                <Footer />
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
