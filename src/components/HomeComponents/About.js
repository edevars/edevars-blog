import React from "react"
import styled from "styled-components"
import ProfileImage from "./profileImage"

const StyledAbout = styled.article`
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
        width: 80%;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.3rem;
        line-height: 2rem;
    }

    a {
        color: #2dddf4;
    }

    .Description {
        grid-area: Description;
        width: 80%;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
        margin: 30px auto;
    }
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

const About = () => (
    <StyledAbout>
        <ProfileFlex>
            <ProfileBox>
                <ProfileImage />
            </ProfileBox>
        </ProfileFlex>
        <h5>¿Por qué hice este sitio?</h5>
        <div className="Description">
            <p>
                ¡Hola! Mi nombre es <strong>Enrique Devars</strong>, a.k.a <i>Devars</i> o {" "}
                 <strong>@codevars</strong> en Internet. Me encanta la educación y la tecnología. Actualmente 
                trabajando en Platzi 💚 creando eduación online efectiva.
            </p>
            <p>
                He creado este espacio, para compartirte lo que sé de tecnología a través de tutoriales, consejos y 
                trucos para mejorar tus habilidades técnicas. Me encanta motivar a las personas por lo que
                encontrarás mucho más que código.  Espero aprender tanto de ti como tú de mi. 
            </p>
            <p>
                De todo corazón espero poderte ayudarte a que tu camino en el mundo de la 
                tecnología sea mucho más sencillo. Si hay algo en lo que te
                pueda ayudar, no dudes en
                <a href="mailto:enrique.devars@gmail.com"> escribirme</a>. Estamos a un click de distancia. 😉 
            </p>
        </div>
    </StyledAbout>
)

export default About;
