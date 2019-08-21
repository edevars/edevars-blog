import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    max-width: 700px;
    margin: 50px auto;
    @media screen and (max-width: 425px){
      font-size: 23px;
      max-width: 320px;
    }

`

const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 300px;
    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 30px;
        h3 {
            font-size: 21px;
            margin: 0;
            margin-left: 20px;
        }
    }

    .icon {
        font-size: 51px;
        color: black;
    }
    h4 {
        margin-top: 80px;
        font-size: 21px;
    }
`

const Contact = () => (
    <Layout header={true} isActive="Contactame">
        <SEO title="Contáctame" />
        <Title>
            Si quieres contactarme puedes hacerlo en mis diferentes redes
            sociales{" "}
            <span role="img" aria-label="cool">
                ✌
            </span>
        </Title>
        <SocialMediaContainer>
            <a
                href="https://www.linkedin.com/in/enrique-devars-a8ab55116"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en Instagram"
            >
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                <h3>Enrique Devars</h3>
            </a>
            <a
                href="https://github.com/edevars"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conoce mi Github"
            >
                <FontAwesomeIcon className="icon" icon={faGithub} />
                <h3>edevars</h3>
            </a>
            <a
                href="https://twitter.com/enrique_devars"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en twitter"
            >
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <h3>@enrique_devars</h3>
            </a>
            <a
                href="https://www.instagram.com/edevars/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en Instagram"
            >
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <h3>edevars</h3>
            </a>
            <h4>
                O si eres más tradicional, puedes enviarme un correo a:
                <a href="mailto: enrique.devars@gmail.com">
                    enrique.devars@gmail.com
                </a>
            </h4>
        </SocialMediaContainer>
    </Layout>
)

export default Contact
