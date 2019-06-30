import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Media from "react-media"
import Nav from "./Navbar"
import BurgerMenu from "./BurgerMenu"
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css"

import "../styles/globalStyles.css"

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
