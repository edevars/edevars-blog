import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./HeaderComponents/header"
import Nav from "./NavComponents/Navbar"
import Footer from "./footer"
import styled from "styled-components"

import "../styles/globalStyles.css"

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`

class Layout extends Component {
    render() {
        const { children, showBanner } = this.props
        return (
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
                    <StyledLayout>
                        <Nav solidHeader={this.props.solidHeader}/>
                        {showBanner && (
                            <Header siteTitle={data.site.siteMetadata.title} />
                        )}

                        <main>{children}</main>
                        <Footer />
                    </StyledLayout>
                )}
            />
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
