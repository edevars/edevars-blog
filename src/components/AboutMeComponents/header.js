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
    height: 600px;
    @media screen and (max-width: 768px) {
        height: 30vh;
        justify-content: center;
        min-height: 150px;
    }
    @media screen and (max-width: 425px) {
        height: 300px;
        justify-content: center;
        padding-top: 4rem;
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
    object-fit: cover;
    opacity: 0.25;
`

const WelcomeWrapper = styled.div`
    position: absolute;
    z-index: 2;
    text-align: center;
    display: grid;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media screen and (max-width: 425px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 60%;
    margin: 0 auto;
`

const Title = styled.h1`
    color: white;
    font-size: 6rem;
    display: inline-block;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 2.5rem;
    }
`

const Header = () => (
    <Wrapper>
        <Image>
            <HeaderImageDesktop />
        </Image>
        <WelcomeWrapper>
            <TitleWrapper>
                <Title>¡Es un gusto conocerte!</Title>
            </TitleWrapper>
        </WelcomeWrapper>
    </Wrapper>
)

export default Header
