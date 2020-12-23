import React from "react"
import styled from "styled-components"
import programmer from "../../images/programmer.png"

const WelcomeContainer = styled.article`
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
        text-align: justify;
        color:  #efefef;
    }
    h4 {
        font-size: 3rem;
        font-weight: bold;
        color: white;
    }

    @media screen and (max-width: 1024px) {
        padding-top: 1rem;
        width: 70%;

        p {
            font-size: 1.2rem;
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

const Welcome = () => (
    <WelcomeContainer>
        <picture>
            <img className="programmer" src={programmer} alt="programmer" />
        </picture>
        <Message>
            <h4>¿Te gustaría ser mejor programando? </h4>
            <p>
                Iniciemos juntos este viaje para dominar una de las profesiones
                más solicitadas del mundo. Créeme, no es tan difícil como
                parece. Así que innovemos, desarrollemos y creemos con nuestras tecnologías favoritas.
                <br />
                <br />
                <span>¡Empieza ahora mismo!</span>
            </p>
        </Message>
    </WelcomeContainer>
)

export default Welcome
