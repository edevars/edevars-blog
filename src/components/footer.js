import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

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

    .icon {
        color: #2dddf4;
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
    .icon {
        font-size: 2rem;
        color: white;
    }

    @media screen and (max-width: 768px) {
        padding-bottom: 70px;
        width: 280px;
        margin: 0 auto;
    }
`

const Footer = () => (
    <StyledFooter>
        <Logo>edevars</Logo>
        <Message>
            <h6>
                {" "}
                Hecho con &nbsp;
                <span role="img" aria-label="blue heart">
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                </span>
                &nbsp; por Enrique Devars
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
            <p className="rights">@2019 | Todos los derechos reservados</p>
        </Message>
        <IconsContainer>
            <a
                href="https://www.linkedin.com/in/enrique-devars-a8ab55116"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en Instagram"
            >
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a
                href="https://github.com/edevars"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conoce mi Github"
            >
                <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            <a
                href="https://twitter.com/enrique_devars"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en twitter"
            >
                <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
            <a
                href="https://www.instagram.com/edevars/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en Instagram"
            >
                <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
        </IconsContainer>
    </StyledFooter>
)

export default Footer
