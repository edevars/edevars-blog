import React from "react"
import styled from "styled-components"
import Media from "react-media"
import HomeImage from "./HomeImage"
import HomeImageMobileMedium from "./HomeImageMobileMedium"
import HomeImageMobileSmall from "./HomeImageMobileSmall"

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    height: 100vh;
    background: #000;
    -webkit-box-shadow: 0px 0px 40px -10px rgba(15, 53, 114, 1);
    -moz-box-shadow: 0px 0px 40px -10px rgba(15, 53, 114, 1);
    box-shadow: 0px 0px 40px -10px rgba(15, 53, 114, 1);
`

const TitleWrapper = styled.div`
    position: absolute;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    height: 100%;

    h3 {
        color: white;
        font-size: 3.5rem;
        user-select: text;
        max-width: 90%;
        align-self: center;
    }

    @media screen and (max-width: 425px) {
        h3 {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 320px) {
        h3 {
            font-size: 1.5rem;
        }
    }
`

const Title = styled.h1`
    font-family: "Comfortaa", cursive !important;
    color: white;
    font-size: 8rem;
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-bottom: 15px;

    #letter-d {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #2dddf4,
            0 0 30px #2dddf4, 0 0 30px #2dddf4, 0 0 40px #2dddf4,
            0 0 60px #2dddf4;
    }

    @media screen and (max-width: 425px) {
        font-size: 4rem;
        margin-top: 0px;
    }
`

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    display: inline-block;
    padding-bottom: 4px !important;
    color: white;
    letter-spacing: 10px;

    @media screen and (max-width: 425px) {
        font-size: 1rem;
        letter-spacing: 4px;
    }

    @media screen and (max-width: 320px) {
        font-size: 1rem;
        letter-spacing: 3px;
    }
`

const Hero = () => (
    <HeroContainer>
        <Media query="(max-width: 768px)">
            {matches =>
                !matches ? (
                    <HomeImage />
                ) : (
                    <Media query="(max-width: 425px)">
                        {matches =>
                            !matches ? (
                                <HomeImageMobileMedium />
                            ) : (
                                <HomeImageMobileSmall />
                            )
                        }
                    </Media>
                )
            }
        </Media>
        <TitleWrapper>
            <Title>
                co<span id="letter-d">d</span>evars
            </Title>
            <Subtitle>de tecnología y más</Subtitle>
        </TitleWrapper>
    </HeroContainer>
)

export default Hero
