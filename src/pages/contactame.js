import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout header={true}>
    <SEO title="Contáctame"/>
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <h1>Aquí se supone que van a ir todos los posts</h1>
      <p>
        ¡Estará lleno de temas incríbles!
      </p>
    </div>
  </Layout>
)

export default Contact