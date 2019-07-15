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
    position: relative;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    background: #060695;
    height: 300px;
    @media screen and (max-width: 1024px) {
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
    opacity: 0.6;
`

const Title = styled.h1`
    font-family: "Comfortaa", cursive !important;
    font-size: 3.5rem !important;
    display: inline-block;
    margin: 0 !important;
    padding-top: 40px;
    padding-bottom: 0.7rem;
    position: relative;
    z-index: 1;
    color: white;

    @media screen and (max-width: 1024px) {
        padding-top: initial;
        padding-bottom: initial;
    }
`

const Subtitle = styled.h2`
    font-family: "Comfortaa", cursive !important;
    font-size: 1rem !important;
    border-bottom: 2px solid white !important;
    padding-bottom: 4px !important;
    color: white;
    display: inline-block;
    position: relative;
    z-index: 1;
`

const Header = ({ siteTitle }) => (
    <Wrapper>
        <Image>
            <Media query="(max-width: 768px)">
                {matches =>
                    matches ? <HeaderImageMobile /> : <HeaderImageDesktop />
                }
            </Media>
        </Image>
        <Title>{siteTitle}</Title>
        <Subtitle>De tecnología y más...</Subtitle>
    </Wrapper>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
