import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostImage from "../components/PostComponents/postImage"

const About = () => (
    <Layout header={true} isActive="Sobre-mi">
        <SEO title="Sobre mi" />
        <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
            <h1>
                Mi único objetivo es ayudarte a ti para que seas un mejor
                profesional en el mundo de la tecnología.
            </h1>
            <PostImage src="sobre-mi.jpg"/>
            <h2>¡Es un gusto conocerte!</h2>
            <h3>
                La forma en la que aprendí a programar fue muy complicada, y yo
                no quiero que te pase eso a ti. Espero que juntos aprendamos
                mucho sobre tecnología y que nos divirtamos haciéndolo.
            </h3>
            <p>
                Desde que tengo memoria siempre he amado el mundo de la
                tecnología, así que no es raro que el día de hoy me dedique
                enteramente a ello. Mi nombre es Enrique Devars y llevo más de 7
                años dedicandome a programar casi todos los días. Actualmente
                estoy estudiando una ingeniería en telemática en el Instituto
                Politécnico Nacional en la Ciudad de México. Me apasiona crear,
                innovar y sobre todo transformar con código la vida de las
                personas, soy un firme creyente que el software es capaz mejorar
                nuestra sociedad. Mis lenguajes de programación favoritos son
                Javascript y Python, aunque los primero que aprendí fueron C y
                Java. En mi tiempo libre me dedico a proyectos personales (como
                este blog) o aprender algo nuevo de mis lenguajes favoritos,
                también soy fan de los videojuegos y el ciclismo.
            </p>
        </div>
    </Layout>
)

export default About
