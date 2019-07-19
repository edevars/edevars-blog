import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/HomeComponents/Hero/Hero"
import Welcome from "../components/HomeComponents/Welcome"
import Sections from "../components/HomeComponents/Sections"

import ProfileImage from "../components/profileImage"

const Content = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Quote = styled.span`
    font-family: "Comfortaa", cursive !important;
    display: inline-block;
    margin: 170px 0px;
    font-size: 3rem;
    align-self: center;
    border-bottom: 3px solid #2dddf4;
    border-top: 3px solid #2dddf4;
    padding: 25px 20px;
    color: #0f3572;

    @media screen and (max-width: 425px) {
        font-size: 1.8rem;
        margin: 120px 0px;
    }

    @media screen and (max-width: 375px) {
        font-size: 1.3rem;
        padding: 15px 10px;
    }
`

const About = styled.div`
    width: 100%;
    margin-top: 120px;
    color: white;
    background: #030640;
    display: grid;
    grid-template-areas: "ProfileImage Title" "ProfileImage Description";
    padding: 50px 0%;
    grid-template-columns: 40% auto;
    h5 {
        grid-area: Title;
        color: white;
        font-size: 2.5rem;
        font-weight: bold;
        width: 80%;
        margin: 0 auto;
    }

    p {
        font-size: 1rem;
        text-align: justify;
    }

    a {
        color: #2dddf4;
    }

    .Description {
        grid-area: Description;
        width: 80%;
        margin: 0 auto;
    }

    @media screen and (max-width: 425px) {
        grid-template-areas:
            "Title"
            "ProfileImage"
            "Description";
        grid-template-columns: 1fr;
        h5 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 2rem;
        }
    }
`

const ProfileBox = styled.div`
    position: relative;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    min-width: 300px;
    min-height: 300px;
    @media screen and (max-width: 425px) {
        min-width: 200px;
        min-height: 200px;
        margin-bottom: 20px;
    }
`

const ProfileFlex = styled.div`
    grid-area: ProfileImage;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 425px) {
        justify-content: center;
    }
`

const IndexPage = () => (
    <Layout isActive="Home">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
            <Hero />
            <Quote>Eres lo que aprendes</Quote>
            <Welcome />
            <Sections />
            <About>
                <ProfileFlex>
                    <ProfileBox>
                        <ProfileImage />
                    </ProfileBox>
                </ProfileFlex>
                <h5>¿Por qué edevars?</h5>
                <div className="Description">
                    <p>
                        ¡Hola! Mi nombre es <strong>Enrique Devars</strong>, y
                        mi nickname en todo lo relacionado con la web es{" "}
                        <strong>edevars</strong>, llevo más de 7 años
                        dedicándome a desarrollar software en diferentes
                        lenguajes de programación. Amo el mundo de la tecnología
                        y me encantaría poder compartir esta pasión contigo.
                    </p>
                    <p>
                        Es por eso que he creado este espacio, para que
                        encuentres muchas utilidades, consejos y trucos sobre
                        cómo ser un mejor desarrollador.
                    </p>
                    <p>
                        De todo corazón espero poderte ayudarte a que tu camino
                        para ser programador sea mucho más sencillo. Si hay algo
                        en lo que te pueda ayudar, no dudes en
                        <a href="mailto:enrique.devars@gmail.com">
                            {" "}
                            escribirme
                        </a>
                        .
                    </p>
                </div>
            </About>
        </Content>
    </Layout>
)

export default IndexPage
