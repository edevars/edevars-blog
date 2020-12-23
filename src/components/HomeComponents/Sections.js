import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCode,
    faFileAlt,
    faSeedling,
    faFlask,
} from "@fortawesome/free-solid-svg-icons"


const StyledSections = styled.article`
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-self: center;
    width: 100%;
    margin: 0 auto;

    .Description {
        width: 100%;
        display: flex;
        flex-direction: column;

        h5 {
            color: #0f3572;
            font-size: 1.5rem;
            margin: 1rem auto;
            max-width: 320px;
            text-align: center;
            font-weight: bold;
        }

        p {
            margin: 2rem auto 0px;
            max-width: 240px;
            font-size: 1em;
            text-align: center;
        }

        .IconContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 240px;
            height: 240px;
            border-radius: 50%;
            background: -webkit-linear-gradient(
                -30deg,
                #001749 0%,
                #0e4bdb 30%,
                #2dddf4 85%
            );

            .Icon {
                color: white;
                font-size: 112px;
            }
        }
    }

    @media screen and (max-width: 1440px) {
        grid-template-columns: 1fr 1fr;
        width: 70%;
        row-gap: 50px;
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

const Sections = () => (
    <StyledSections>
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
                        <FontAwesomeIcon icon={faCode} className="Icon" />
                    </div>
                </Link>
                <p>
                    ¿Alguna vez te has preguntado cómo es que funciona todo
                    Internet? Conoce tus tecnologías favoritas de una manera
                    sencilla y amigable.
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
                        <FontAwesomeIcon icon={faFileAlt} className="Icon" />
                    </div>
                </Link>
                <p>
                    La programación no tiene que ser difícil. Aprendamos a hacer
                    proyectos divertidos completamente desde cero
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
                        <FontAwesomeIcon icon={faSeedling} className="Icon" />
                    </div>
                </Link>
                <p>
                    No todo en esta vida es código. Incrementa tus habilidades
                    blandas para mejorar tu carrera profesional.
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
                        <FontAwesomeIcon icon={faFlask} className="Icon" />
                    </div>
                </Link>
                <p>
                    Pequeños consejos de como mejorar tu entorno de desarrollo.
                    Incrementa tu creatividad y productividad en cada aspecto.
                </p>
            </div>
        </GridContainer>
    </StyledSections>
)

export default Sections