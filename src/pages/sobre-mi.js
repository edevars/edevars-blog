import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout header={true} isActive="Sobre-mi">
    <SEO title="¿Quién soy yo?"/>
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <h1>Aquí debe ir una descripción de mi acompañada de una fotaza!</h1>
      <p>
        Pondre muchas ridiculeces mías básicamente...
      </p>
    </div>
  </Layout>
)

export default About