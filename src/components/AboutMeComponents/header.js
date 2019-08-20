import React from "react"
import styled from "styled-components"
import Media from "react-media"
import HeaderImageMobile from "./header_img_mobile"
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
    opacity: 0.25;
`

const WelcomeWrapper = styled.div`
    position: absolute;
    z-index: 2;
    text-align: center;
    display: grid;
    grid-template-columns: 40% 60%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    font-size: 7rem;
    display: inline-block;
    padding: 0;
    margin: 0;
`
const CenterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
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
    object-fit: cover;
`

const Header = () => (
    <Wrapper>
        <Image>
            <Media query="(max-width: 600px)">
                {matches =>
                    matches ? <HeaderImageMobile /> : <HeaderImageDesktop />
                }
            </Media>
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
