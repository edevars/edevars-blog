import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Media from "react-media"
import HeaderImageMobile from "./header_img_mobile"
import HeaderImageDesktop from "./header_img_desktop"

const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    background-color: #000;
    height: 400px;
    @media screen and (max-width: 768px) {
        height: 20vh;
        justify-content: center;
        min-height: 150px;
    }
`

const Image = styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    opacity: 0.3;
`

const TitleWrapper = styled.div`
    position: absolute;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const Title = styled.h1`
    font-family: "Comfortaa", cursive !important;
    color: white;
    font-size: 3.5rem;
    display: inline-block;
    padding: 0;
    margin: 0;
`

const Subtitle = styled.h2`
    font-family: "Comfortaa", cursive !important;
    font-size: 1.225rem;
    border-bottom: 1px solid white !important;
    padding-bottom: 4px !important;
    color: white;
    display: inline-block;
`

const Header = ({ siteTitle }) => (
    <Wrapper>
        <Image>
            <Media query="(max-width: 600px)">
                {matches =>
                    matches ? <HeaderImageMobile /> : <HeaderImageDesktop />
                }
            </Media>
        </Image>
        <TitleWrapper>
            <Title>{siteTitle}</Title>
            <Subtitle>De tecnología y más...</Subtitle>
        </TitleWrapper>
    </Wrapper>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
