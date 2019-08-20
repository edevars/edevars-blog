import React from "react"
import styled from "styled-components"
import HeaderImageDesktop from "./header_img_desktop"
import PostImage from "../PostComponents/postImage"

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
    height: 100vh;
    @media screen and (max-width: 768px) {
        height: 30vh;
        justify-content: center;
        min-height: 150px;
    }
    @media screen and (max-width: 425px) {
        height: 100vh;
        justify-content: center;
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
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
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
`

const Title = styled.h1`
    @import url("https://fonts.googleapis.com/css?family=Hepta+Slab&display=swap");
    font-family: "Hepta Slab", serif;
    color: white;
    font-size: 7vw;
    display: inline-block;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 425px) {
        font-size: 12vw;
    }
`
const CenterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    @media screen and (max-width: 425px) {
        justify-content: center;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    @media screen and (max-width: 425px) {
        width: 60vw;
        height: 60vw;
    }
`

const Header = () => (
    <Wrapper>
        <Image>
            <HeaderImageDesktop />
        </Image>
        <WelcomeWrapper>
            <CenterWrapper>
                <ImageWrapper>
                    <PostImage src="sobre-mi.jpg" />
                </ImageWrapper>
            </CenterWrapper>
            <TitleWrapper>
                <Title>¡Es un gusto conocerte!</Title>
            </TitleWrapper>
        </WelcomeWrapper>
    </Wrapper>
)

export default Header
