import React from "react"
import styled from "styled-components"
import Media from "react-media"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeImage from "../components/HomeComponents/HomeImage"
import HomeImageMobileMedium from "../components/HomeComponents/HomeImageMobileMedium"
import HomeImageMobileSmall from "../components/HomeComponents/HomeImageMobileSmall"
import programmer from "../images/programmer.png"
import { Link } from "gatsby"

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
        font-size: 5rem;
        margin-top: 0px;
    }

    @media screen and (max-width: 320px) {
        font-size: 4rem;
    }
`

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    display: inline-block;
    padding-bottom: 4px !important;
    color: white;
    letter-spacing: 10px;
    margin-bottom: 150px;

    @media screen and (max-width: 425px) {
        font-size: 1.12rem;
        letter-spacing: 4px;
        margin-bottom: 100px;
    }

    @media screen and (max-width: 320px) {
        font-size: 1rem;
        letter-spacing: 3px;
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
        border-bottom: 3px solid #2dddf4;
        border-top: 3px solid #2dddf4;
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
    background: linear-gradient(#030640, #0a13bf);
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
    h4 {
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
        h4 {
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
    h4 {
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
        h4 {
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

        h5 {
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
                <Title>
                    e<span id="letter-d">d</span>evars
                </Title>
                <Subtitle>de tecnología y más</Subtitle>
                <h3>Mejora tus habilidades como developer cada día</h3>
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
                    <h4>Nada es tan difícil como parece</h4>
                    <p>
                        Sé que iniciar el camino para convertirte en
                        desarrollador puede ser complicado y algunas veces
                        frustrante, pero no estás solo en esto. He creado este
                        espacio para poder <span>ayudarte</span> con cosas que
                        he aprendido del mundo de la tecnología.
                    </p>
                </Message>
            </Welcome>
            <InformativeIcons>
                <h4>¿Qué podrás encontrar aquí?</h4>
                <GridContainer>
                    <div className="Description">
                        <h5>¡Mucho código!</h5>
                        <Link
                            style={{
                                alignSelf: "center",
                            }}
                            to="/blog"
                        >
                            <div className="IconContainer">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    className="Icon"
                                />
                            </div>
                        </Link>
                        <p>
                            ¿Alguna vez te has preguntado cómo es que funciona
                            todo Internet? Conoce tus tecnologías favoritas de
                            una manera sencilla y amigable.
                        </p>
                    </div>
                    <div className="Description">
                        <h5>Tutoriales</h5>
                        <Link
                            style={{
                                alignSelf: "center",
                            }}
                            to="/blog"
                        >
                            <div className="IconContainer">
                                <FontAwesomeIcon
                                    icon={faFileAlt}
                                    className="Icon"
                                />
                            </div>
                        </Link>
                        <p>
                            La programación no tiene que ser difícil. Aprendamos
                            a hacer proyectos divertidos completamente desde
                            cero
                        </p>
                    </div>
                    <div className="Description">
                        <h5>Crecimiento personal</h5>
                        <Link
                            style={{
                                alignSelf: "center",
                            }}
                            to="/blog"
                        >
                            <div className="IconContainer">
                                <FontAwesomeIcon
                                    icon={faSeedling}
                                    className="Icon"
                                />
                            </div>
                        </Link>
                        <p>
                            No todo en esta vida es código. Incrementa tus
                            habilidades blandas para mejorar tu carrera
                            profesional.
                        </p>
                    </div>
                    <div className="Description">
                        <h5>Hacks</h5>
                        <Link
                            style={{
                                alignSelf: "center",
                            }}
                            to="/blog"
                        >
                            <div className="IconContainer">
                                <FontAwesomeIcon
                                    icon={faFlask}
                                    className="Icon"
                                />
                            </div>
                        </Link>
                        <p>
                            Pequeños consejos de como mejorar tu entorno de
                            desarrollo. Incrementa tu creatividad y
                            productividad en cada aspecto.
                        </p>
                    </div>
                </GridContainer>
            </InformativeIcons>
        </Content>
    </Layout>
)

export default IndexPage
