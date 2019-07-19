import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/HomeComponents/Hero/Hero"
import programmer from "../images/programmer.png"
import { Link } from "gatsby"
import ProfileImage from "../components/profileImage"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCode,
    faFileAlt,
    faSeedling,
    faFlask,
} from "@fortawesome/free-solid-svg-icons"
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css"

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
    width: 40%;
    color: white;
    padding: 3rem 0px;
    line-height: 2rem;
    span {
        font-weight: 400;
        margin: auto 0;
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
    grid-column-gap: 20vw;
    grid-row-gap: 5vw;
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
        grid-rdescriptionow-gap: 50px;
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
            <Welcome>
                <picture>
                    <img
                        className="programmer"
                        src={programmer}
                        alt="programmer"
                    />
                </picture>
                <Message>
                    <h4>¿Te gustaría ser un developer? </h4>
                    <p>
                        Iniciemos juntos este viaje para dominar una de las
                        profesiones más solicitadas del mundo. Créeme, no es tan
                        difícil como parece. Así que innova, desarrolla y crea
                        con todo lo que he hecho para ti.
                        <br />
                        <br /> Y si ya eres developer, siempre se puede aprender
                        algo nuevo.
                        <br />
                        <br />
                        <span>¡Empieza ahora mismo!</span>
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
