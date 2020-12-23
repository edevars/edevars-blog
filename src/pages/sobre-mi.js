import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/AboutMeComponents/header"
import styled from "styled-components"
import PostImage from "../components/PostComponents/postImage"

const Wrapper = styled.section`
    max-width: 1200px;
    margin: 100px auto 0px;
`

const AboutArticle = styled.article`
    background-color: #030640;
    color: white;
    display: flex;
    justify-content: center;
    padding: 60px;
    line-height: 2rem;
    margin-top: 80px;
    box-shadow: 0px 0px 30px 20px #b8b8b8;

    .aboutMe {
        max-width: 1200px;
        h3 {
            color: white;
            font-size: 2rem;
            text-align: center;
        }
        p {
            @import url("https://fonts.googleapis.com/css?family=Karla&display=swap");
            font-family: "Karla", sans-serif;
            font-size: 1.2rem;
            font-weight: lighter;
            color: #d1d1d1;
        }
    }

    @media screen and (max-width: 425px) {
        padding: 60px 30px;
    }
`

const AboutInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;


const ProfileBox = styled.div`
    position: relative;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 90%;
    border-radius: 50%;
    @media screen and (max-width: 768px) {
        width: 70%;
        margin: 20px auto;
    }
`

const Quote = styled.p`
    font-family: "Comfortaa", cursive !important;
    display: inline-block;
    margin: 100px 0px;
    font-size: 3rem;
    align-self: center;
    border-bottom: 3px solid #2dddf4;
    border-top: 3px solid #2dddf4;
    padding: 25px 20px;
    color: #0f3572;

    @media screen and (max-width: 1024px) {
        font-size: 1.6rem;
        margin: 120px 0px;
        line-height: 2rem;
        display: block;
        width: 90%;
        margin: 0 auto;
    }

    @media screen and (max-width: 425px) {
        font-size: 1.3rem;
        width: 75%;
        padding: 8px 20px;
    }

    @media screen and (max-width: 375px) {
        font-size: 1.3rem;
    }
`


const About = () => (
    <Layout>
        <SEO title="Sobre mi" />
        <Header />
        <Wrapper>
            <Quote>
                Quiero transmitirte la misma pasión que tengo por la tecnología, y de paso, que aprendas algo nuevo. 😉
            </Quote>
        </Wrapper>
        <AboutArticle>
            <div className="aboutMe">
                <h3>¡Hola! Soy Enrique Devars</h3>
                <AboutInfo>
                    <ProfileBox>
                        <PostImage src='new_profile.jpg' />
                    </ProfileBox>
                  
                    <div>
                    <br />
                        <p>Me encantan los videojuegos y la ciencia ficción. Mal bailarín con gran actitud 🕺. 
                            Mi mayor hobby es aprender 🤓 y soy acumulador de hechos irrelevantes pero interesantes. 
                        </p>
                        <p>
                            Entusiasta de la tecnología y apasionado por el código 👨‍💻, fanático de 
                            las comunidades y obsesionado con cambiar la educación.
                        </p>
                        <p>
                            No importa si es con JavaScript, Python 🐍 o cualquier otro lenguaje me gusta 
                            materializar ideas con unos y ceros usando la web como plataforma.
                        </p>
                        <p>
                            Actualmente aprendiendo <i>data science</i>, ciberseguridad y 
                            constantemente sobre ciencias de la computación. Mi sueño es crear un sistema operativo. 🐧
                        </p>
                    </div>
                </AboutInfo>
            </div>
        </AboutArticle>
    </Layout>
)

export default About
