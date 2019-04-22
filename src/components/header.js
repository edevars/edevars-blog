import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import bg_image from "../images/bg-nav.jpg"

const HeaderNav = styled.header`
  background-image: url(${bg_image});
  background-size: cover;
  margin: 0 auto !important;
  max-width: 960 !important;
  padding: 1.45rem 1.0875rem !important;
  color: white !important;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
`

const Title = styled.h1`
  font-family: "Comfortaa", cursive !important;
  font-size: 3rem !important;
  margin: 0 !important;
  padding-bottom: 10px;
  color: white;
`

const Subtitle = styled.h2`
  font-family: "Comfortaa", cursive !important;
  font-size: 1.3rem !important;
  border-bottom: 2px solid white !important;
  padding-bottom: 4px !important;
  color: white;
`

const HeadLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover{
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderNav>
    <HeadLink to="/">
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
