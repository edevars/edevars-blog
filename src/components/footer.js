import React from "react"


import styled from "styled-components"
import { HeartIcon } from "./IconsComponents/HeartIcon"
import { GihubIcon } from "./IconsComponents/GithubIcon"
import { InstagramIcon } from "./IconsComponents/InstagramIcon"
import { LinkedinIcon } from "./IconsComponents/LinkedinIcon"
import { TwitterIcon } from "./IconsComponents/TwitterIcon"

const StyledFooter = styled.footer`
    background: #030526;
    height: 200px;
    margin-top: 100px;
    display: grid;
    grid-template-areas: "Logo Message Icons";
    position: relative;

    @media screen and (max-width: 768px) {
        height: auto;
        grid-template-areas: "Logo" "Message" "Icons";
        grid-template-columns: 1fr;
        padding-bottom: 64px;
    }
`

const Logo = styled.div`
    grid-area: Logo;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-family: "Comfortaa", cursive;
    font-size: 2rem;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
    @media screen and (max-width: 768px) {
        padding: 50px;
    }
`

const Message = styled.div`
    grid-area: Message;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h6 {
        font-weight: 400;
        color: white;
        font-size: 1.2rem;
        margin: 0;
        padding: 0;
    }

    p {
        padding-top: 5px;
        color: #bcd9dd;
        margin: 0;

        a {
            color: #2dddf4;
        }
    }

    .heart {
        display: inline-block;
        margin: 0px 4px;
        width: 17px;
    }

    .rights {
        padding-top: 15px;
        color: white;
        position: absolute;
        bottom: 15px;
    }

    @media screen and (max-width: 768px) {
        padding-bottom: 50px;
        h6 {
            font-size: 1.1rem;
        }
    }
`

const IconsContainer = styled.div`
    grid-area: Icons;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        padding-bottom: 70px;
        width: 280px;
        margin: 0 auto;
    }
`

const Footer = () => (
    <StyledFooter>
        <Logo>codevars</Logo>
        <Message>
            <h6>
                Hecho con {" "}
                    <HeartIcon color="#2dddf4" className="heart"/>
                    {" "}
                 por Enrique Devars
            </h6>
            <p>
                Desarrollado con{" "}
                <a
                    href="https://www.gatsbyjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Gatsby
                </a>
            </p>
            <p className="rights">{new Date().getFullYear()} | Todos los derechos reservados</p>
        </Message>
        <IconsContainer>
            <a
                href="https://www.linkedin.com/in/enrique-devars-a8ab55116"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en Instagram"
            >
                <LinkedinIcon />
            </a>
            <a
                href="https://github.com/edevars"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conoce mi Github"
            >
                <GihubIcon />
            </a>
            <a
                href="https://twitter.com/codevars"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en twitter"
            >
                <TwitterIcon />
            </a>
            <a
                href="https://www.instagram.com/codevars/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en Instagram"
            >
                <InstagramIcon />
            </a>
        </IconsContainer>
    </StyledFooter>
)

export default Footer
