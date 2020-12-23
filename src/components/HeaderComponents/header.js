import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
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
        height: 150px;
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
    font-size: 4rem;
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-bottom: 5px;

    #letter-d {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 10px #2dddf4,
            0 0 20px #2dddf4, 0 0 15px #2dddf4, 0 0 20px #2dddf4,
            0 0 40px #2dddf4;
    }
`

const Subtitle = styled.h2`
    font-family: "Comfortaa", cursive !important;
    font-size: 1rem;
    padding-bottom: 4px !important;
    color: white;
    display: inline-block;
    font-size: 1rem;
    letter-spacing: 3px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Header = () => (
    <Wrapper>
        <Image>
            <HeaderImageDesktop />
        </Image>
        <TitleWrapper>
            <Title>
                co<span id="letter-d">d</span>evars
            </Title>
            <Subtitle>de tecnología y más</Subtitle>
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
