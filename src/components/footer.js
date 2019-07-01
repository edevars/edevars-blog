import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faGithub,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const StyledFooter = styled.footer`
    background: #060695;
    height: 200px;
    margin-top: 100px;
    display: grid;
    grid-template-areas: "Logo Message Icons";
    grid-template-columns: 1fr 1fr 1fr;
    font-family: "Comfortaa", cursive;
    font-size: 2rem;
`

const Logo = styled.div`
    grid-area: Logo;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
`

const Message = styled.div`
    grid-area: Message;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h6 {
        font-weight: 400;
        color: white;
        font-size: 1.2rem;
        margin: 0;
        padding: 0;
    }

    .icon {
        color: #2dddf4;
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
`

const Footer = () => (
    <StyledFooter>
        <Logo>edevars</Logo>
        <Message>
            <h6>
                {" "}
                Desarrollado con &nbsp;
                <span role="img" aria-label="blue heart">
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                </span>
                &nbsp; por Enrique Devars
            </h6>
        </Message>
        <IconsContainer>
            <a
                href="https://github.com/edevars"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            <a
                href="https://twitter.com/enrique_devars"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
            <a
                href="https://www.instagram.com/edevars/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
        </IconsContainer>
    </StyledFooter>
)

export default Footer
