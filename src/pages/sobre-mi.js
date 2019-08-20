import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/AboutMeComponents/header"
import styled from "styled-components"

const Wrapper = styled.section`
    max-width: 900px;
    margin: 100px auto 0px;
`
const Title = styled.h1`
    font-family: "Comfortaa", cursive;
    font-size: 3rem;
    text-align: center;
`

const Subtitle = styled.h2`
    font-weight: lighter;
    text-align: justify;
    line-height: 2.6rem;
    margin: 50px auto;
`

const AboutArticle = styled.article`
    background-color: #030640;
    color: white;
    display: flex;
    justify-content: center;
    padding: 60px;
    line-height: 2rem;
    margin-top: 80px;
    .aboutMe {
        max-width: 900px;
        h3 {
            font-family: "Comfortaa", cursive;
            color: white;
            font-size: 2.4rem;
            text-align: center;
        }
        p {
            @import url('https://fonts.googleapis.com/css?family=Karla&display=swap');
            font-family: 'Karla', sans-serif;
            font-size: 1.2rem;
            font-weight: lighter;
            color: #d1d1d1;
        }
    }
`

const About = () => (
    <Layout header={false} isActive="Sobre-mi">
        <SEO title="Sobre mi" />

        <Header />
        <Wrapper>
            <Title>
                Mi único objetivo es ayudarte a que seas un mejor desarrollador.
            </Title>

            <Subtitle>
                La forma en la que aprendí a programar fue muy complicada y no
                quiero que te pase eso a ti. Espero que juntos aprendamos mucho
                sobre tecnología y que nos divirtamos haciéndolo.
            </Subtitle>
        </Wrapper>
        <AboutArticle>
            <div className="aboutMe">
                <h3>Un poco sobre Enrique Devars</h3>
                <p>
                    Desde que tengo memoria siempre he amado el mundo de la
                    tecnología, así que no es raro que el día de hoy me dedique
                    enteramente a ello. Mi nombre es Enrique Devars y llevo más
                    de 7 años dedicandome a programar casi todos los días.
                    Actualmente estoy estudiando una ingeniería en telemática en
                    el Instituto Politécnico Nacional en la Ciudad de México. Me
                    apasiona crear, innovar y sobre todo transformar con código
                    la vida de las personas, soy un firme creyente que el
                    software es capaz mejorar nuestra sociedad.
                </p>
                <p>
                    Mis lenguajes de programación favoritos son Javascript y
                    Python, aunque los primeros que aprendí fueron C y Java. En
                    mi tiempo libre me dedico a proyectos personales (como este
                    blog) o aprender algo nuevo de mis lenguajes favoritos,
                    también soy fan de los videojuegos y el ciclismo.
                </p>
            </div>
        </AboutArticle>
    </Layout>
)

export default About
