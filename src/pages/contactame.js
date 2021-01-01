import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { GihubIcon } from "../components/IconsComponents/GithubIcon"
import { InstagramIcon } from "../components/IconsComponents/InstagramIcon"
import { LinkedinIcon } from "../components/IconsComponents/LinkedinIcon"
import { TwitterIcon } from "../components/IconsComponents/TwitterIcon"

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
            font-weight: 500;
        }
    }

    p {
        margin-top: 80px;
        font-size: 21px;
    }
`

const Contact = () => (
    <Layout showBanner>
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
                <LinkedinIcon color="black" width="45px"/>
                <h3>Enrique Devars</h3>
            </a>
            <a
                href="https://github.com/edevars"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conoce mi Github"
            >
                <GihubIcon color="black" width="45px"/>
                <h3>edevars</h3>
            </a>
            <a
                href="https://twitter.com/codevars"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en twitter"
            >
                <TwitterIcon color="black" width="45px"/>
                <h3>@codevars</h3>
            </a>
            <a
                href="https://www.instagram.com/codevars/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigueme en Instagram"
            >
                <InstagramIcon color="black" width="45px"/>
                <h3>codevars</h3>
            </a>
            <p>
                Si eres algo tímido, te leo en:
                <a href="mailto: enrique.devars@gmail.com">
                    enrique.devars@gmail.com
                </a>
            </p>
        </SocialMediaContainer>
    </Layout>
)

export default Contact
