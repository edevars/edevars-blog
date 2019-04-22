import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import bg_image from "../images/bg-nav.jpg"

const HeaderNav = styled.header`
  font-family: 'Comfortaa', cursive;
  background-image: url(${bg_image});
  background-size: cover;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  color: white;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`

const Subtitle = styled.h2`
  font-size: 1.3rem;
  border-bottom: 2px solid white;
  padding-bottom: 4px;
`

const HeadLink = styled(Link)`
  color: white;
  text-decoration: none;
`


const Header = ({ siteTitle }) => (
  <HeaderNav>
    <HeadLink to='/' >
      <Title>{siteTitle}</Title>
    </HeadLink>
    <Subtitle>De tecnología y más...</Subtitle>
  </HeaderNav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
