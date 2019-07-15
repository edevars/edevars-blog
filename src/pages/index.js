import React from "react"
import styled from "styled-components"
import Media from "react-media"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeImage from "../components/HomeImage"
import HomeImageMobileMedium from "../components/HomeImageMobileMedium"
import HomeImageMobileSmall from "../components/HomeImageMobileSmall"
import programmer from "../images/programmer.png"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCode,
    faFileAlt,
    faSeedling,
    faFlask,
} from "@fortawesome/free-solid-svg-icons"
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css"

const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    height: 100vh;
    background: #000;
    box-shadow: 0px 10px 23px -23px rgba(219, 219, 219, 1);
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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const Title = styled.h1`
    font-family: "Comfortaa", cursive !important;
    color: white;
    font-size: 8rem;
    display: inline-block;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 425px) {
        font-size: 5rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 4rem;
    }
`

const Subtitle = styled.h2`
    font-family: "Comfortaa", cursive !important;
    font-size: 2.8rem;
    border-bottom: 2px solid white !important;
    padding-bottom: 4px !important;
    color: white;
    display: inline-block;

    @media screen and (max-width: 425px) {
        font-size: 1.736rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 1.4rem;
    }
`

const Content = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    .quote {
        font-family: "Comfortaa", cursive !important;
        display: inline-block;
        margin: 170px 0px;
        font-size: 3rem;
        align-self: center;
        background: -webkit-linear-gradient(
            -30deg,
            #001749 0%,
            #0e4bdb 30%,
            #2dddf4 85%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-bottom: 3px solid #0f3572;
        border-top: 3px solid #0f3572;
        padding: 25px 20px;
        color: #0f3572;
    }

    @media screen and (max-width: 425px) {
        .quote {
            font-size: 1.8rem;
            margin: 120px 0px;
        }
    }

    @media screen and (max-width: 375px) {
        .quote {
            font-size: 1.3rem;
            padding: 15px 10px;
        }
    }
`

const Welcome = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    background: linear-gradient( #030640, #0A13BF);
    -webkit-box-shadow: 0px 0px 40px -10px rgba(15, 53, 114, 1);
    -moz-box-shadow: 0px 0px 40px -10px rgba(15, 53, 114, 1);
    box-shadow: 0px 0px 40px -10px rgba(15, 53, 114, 1);

    
    .programmer {
        height: 580px;
        width: 580px;
        margin: 0px;
    }

    @media screen and (max-width: 768px) {
        background: #030640;
        .programmer {
            height: 425px;
            width: 425px;
        }
    }

    @media screen and (max-width: 425px) {
        .programmer {
            height: 320px;
            width: 320px;
        }
    }
`

const Message = styled.div`
    width: 30%;
    color: white;
    padding: 3rem 0px;
    line-height: 2rem;
    span {
        font-weight: 400;
    }

    p {
        font-size: 1.5rem;
        font-weight: 300;
        text-align: justify;
    }
    h3 {
        font-size: 3rem;
        color: white;
    }

    @media screen and (max-width: 1024px) {
        padding-top: 1rem;
        width: 70%;

        p {
            font-size: 1.2rem;
            font-weight: 300;
            text-align: justify;
        }
        h3 {
            font-size: 2rem;
            color: white;
        }
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`

const InformativeIcons = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h3 {
        font-family: "Comfortaa", cursive !important;
        display: inline-block;
        font-size: 3rem;
        align-self: center;
        padding: 25px 20px;
        color: #0f3572;
        margin-top: 100px;
        margin-bottom: 120px;
    }

    @media screen and (max-width: 768px) {
        h3 {
            font-size: 2rem;
            margin-top: 70px;
            margin-bottom: 70px;
            text-align: center;
        }
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 200px;
    grid-row-gap: 100px;
    align-self: center;

    .Description {
        width: 100%;
        display: flex;
        flex-direction: column;

        h4 {
            color: #0f3572;
            font-size: 1.5rem;
            max-width: 320px;
            text-align: center;
            font-weight: bold;
        }

        p {
            margin-top: 2rem;
            max-width: 320px;
            font-size: 21px;
            text-align: center;
            line-height: 2rem;
        }

        .IconContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 320px;
            height: 320px;
            border-radius: 50%;
            background: -webkit-linear-gradient(
                -30deg,
                #001749 0%,
                #0e4bdb 30%,
                #2dddf4 85%
            );

            .Icon {
                color: white;
                font-size: 150px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 425px) {
        grid-row-gap: 50px;
        .Description {
            h4 {
                color: #0f3572;
                font-size: 1.2rem;
                text-align: center;
                font-weight: bold;
            }

            p {
                margin-top: 2rem;
                max-width: 240px;
                font-size: 1rem;
            }

            .IconContainer {
                align-self: center;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 200px;
                height: 200px;
                border-radius: 50%;
                background: -webkit-linear-gradient(
                    -30deg,
                    #001749 0%,
                    #0e4bdb 30%,
                    #2dddf4 85%
                );

                .Icon {
                    color: white;
                    font-size: 100px;
                }
            }
        }
    }
`

const IndexPage = () => (
    <Layout isActive="Home">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero>
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
                <Title>edevars</Title>
                <Subtitle>De tecnología y más...</Subtitle>
            </TitleWrapper>
        </Hero>
        <Content>
            <h2 className="quote">Eres lo que aprendes</h2>
            <Welcome>
                <picture>
                    <img
                        className="programmer"
                        src={programmer}
                        alt="programmer"
                    />
                </picture>
                <Message>
                    <h3>Nada es tan difícil como parece</h3>
                    <p>
                        Sé que iniciar en el camino para convertirte en
                        desarrollador puede ser complicado y algunas veces
                        frustrante. Para eso he creado este espacio en el que
                        espero poder <span>ayudarte</span> con tips, tutoriales
                        y proyectos, que me han servido a lo largo del tiempo
                        para amar la asombrosa industria de la tecnología.
                    </p>
                </Message>
            </Welcome>
            <InformativeIcons>
                <h3>¿Qué podrás encontrar aquí?</h3>
                <GridContainer>
                    <div className="Description">
                        <h4>¡Mucho código!</h4>
                        <div className="IconContainer">
                            <FontAwesomeIcon icon={faCode} className="Icon" />
                        </div>
                        <p>
                            ¿Alguna vez te has preguntado cómo es que funciona
                            todo Internet? Ve cómo funcionan tus tecnologías
                            favoritas de una manera sencilla y amigable.
                        </p>
                    </div>
                    <div className="Description">
                        <h4>Tutoriales</h4>
                        <div className="IconContainer">
                            <FontAwesomeIcon
                                icon={faFileAlt}
                                className="Icon"
                            />
                        </div>
                        <p>
                            La programación no tiene que ser difícil. Aprendamos
                            a hacer proyectos divertidos completamente desde
                            cero
                        </p>
                    </div>
                    <div className="Description">
                        <h4>Crecimiento personal</h4>
                        <div className="IconContainer">
                            <FontAwesomeIcon
                                icon={faSeedling}
                                className="Icon"
                            />
                        </div>
                        <p>
                            No todo en esta vida es código. Interioriza y mejora
                            quien eres para disfrutar este mundo al máximo.
                        </p>
                    </div>
                    <div className="Description">
                        <h4>Hacks</h4>
                        <div className="IconContainer">
                            <FontAwesomeIcon icon={faFlask} className="Icon" />
                        </div>
                        <p>
                            Pequeños consejos de como mejorar tu entorno de
                            desarrollo. Incrementa tu creatividad y
                            productividad.
                        </p>
                    </div>
                </GridContainer>
            </InformativeIcons>
        </Content>
    </Layout>
)

export default IndexPage
