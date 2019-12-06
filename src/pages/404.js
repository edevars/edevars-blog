import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import logo from "../images/404.png"

const GridWrapper = styled.div`
    display: grid;
    grid-template-areas: "Logo Title" "Logo Message";
    margin: 0px auto;
    min-height: calc(100vh - 467px);
    width: 80%;
    margin-top: 100px;
    grid-column-gap: 70px;
    grid-template-rows: 40% 60%;
    @media screen and (max-width: 768px) {
        grid-template-areas: "Title" "Logo" "Message";
        grid-column-gap: 0;
        grid-template-rows: auto auto auto;
        width: 70%;
    }
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    grid-area: Title;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

const Title = styled.h1`
    display: inline-block;
    font-size: 6.5vw;
    font-weight: 400;
    background: -webkit-linear-gradient(
        -30deg,
        #001749 0%,
        #0e4bdb 30%,
        #2dddf4 85%
    );
    padding-bottom: 1rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: 768px) {
        margin-bottom: 2.5rem;
        font-size: 10vw;
    }
    @media screen and (max-width: 425px) {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }
    @media screen and (max-width: 320px) {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
`
const Logo = styled.div`
    grid-area: Logo;
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px) {
        width: 50%;
        margin: 0 auto;
    }
`

const Message = styled.div`
    grid-area: Message;
    width: 70%;
    margin: 0 auto;
    display: flex;

    p {
        font-size: 1.5rem;
        line-height: 2rem;
        margin: 0;
    }
    @media screen and (max-width: 768px) {
        margin-top: 15px;
        align-items: center;
    }
    @media screen and (max-width: 375px) {
        p {
            font-size: 1.2rem;
            line-height: 2rem;
            margin: 0;
        }
    }
`

const NotFoundPage = () => (
    <Layout header={true} error404={true}>
        <SEO title="404: Not found" />
        <GridWrapper>
            <Logo>
                <img src={logo} alt="Monito" />
            </Logo>
            <TitleWrapper>
                <Title>404 Not Found</Title>
            </TitleWrapper>
            <Message>
                <p>
                    <strong>¡Changos!</strong> Nos apena decirte esto, pero la
                    página que buscas no existe.
                </p>
            </Message>
        </GridWrapper>
    </Layout>
)

export default NotFoundPage
