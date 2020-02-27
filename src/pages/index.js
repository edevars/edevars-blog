import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/HomeComponents/Hero/Hero"
import Welcome from "../components/HomeComponents/Welcome"
import Sections from "../components/HomeComponents/Sections"
import About from "../components/HomeComponents/About"

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 250px;
`
const Quote = styled.p`
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

const IndexPage = () => (
    <Layout hiddenHeader>
        <SEO title="Home" keywords={[`desarrollo web`,`developer`, `react`,'web development','programacion','javascript','python']} />
        <Content>
            <Hero />
            <Quote>Eres lo que aprendes</Quote>
            <Welcome />
            <Sections />
            <About />
        </Content>
    </Layout>
)

export default IndexPage
