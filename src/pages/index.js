import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <h1>Hola! Este es el inicio de mi blog</h1>
      <p>
        ¿Qué me gusta hacer? Un montón de cosas pero en definitiva me encanta crear websites
      </p>
    </div>
  </Layout>
)

export default IndexPage
