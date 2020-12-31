import styled from "styled-components"

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 800px 1fr;
    grid-template-areas: "Info Content Related";
    margin: 0px auto;
    grid-column-gap: 100px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 500px 1fr;
        grid-column-gap: 50px;
    }

    @media screen and (max-width: 768px) {
        grid-template-areas: "Info" "Content" "Related";
        grid-template-columns: 1fr;
    }
`

export const InfoContainer = styled.div`
    .mobile {
        display: none;
    }
    @media screen and (max-width: 768px) {
        .mobile {
            display: block;
            text-align: center;
        }
    }
`

export const InfoElements = styled.section`
    margin-top: 100px;
    margin-left: auto;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    z-index: 0;
    max-width: 300px;
    min-width: 190px;
    top: 70px;

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        margin-top: 35px;
        position: static;
        width: 80%;
        max-width: none;
        .mobile {
            display: block;
            text-align: center;
        }
    }
`

export const ContentContainer = styled.section`
    grid-area: Content;
    padding-top: 4rem;
    margin: 0 auto;
    width: 100%;
    max-width: 100vw;

    h2, h3, h4, h5 {
        color: #292929;
    }

    img {
        max-width: 100%;
    }

    @media screen and (max-width: 768px) {
        padding-top: 20px;
        width: 85%;
        .desktop {
            display: none;
        }
    } 

    p {
        line-height: 1.8;
        font-size: 21px;
    }

    code {
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
            p {
                line-height: 1.9;
                font-size: 19px;
            }

            code {
                font-size: 18px;
            }
    }
`

export const RelatedContainer = styled.section`
    grid-area: Related;
    margin-top: 5rem;
    position: -webkit-sticky;
    position: sticky;
    z-index: 0;
    top: 50px;
    max-width: 400px;
    min-width: 200px;
    h4 {
        font-weight: bold;
    }
    @media screen and (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
        padding: 0;
        padding-top: 20px;
        max-width: none;
    }
    @media screen and (max-width: 425px) {
        width: 90%;
    }
`

export const Title = styled.h1`
    display: inline-block;
    color: #242c72;
    font-size: 48px;
    @media screen and (max-width: 768px) {
        margin-top: 30px;
        margin-bottom: 0px;
        margin-left: 24px;
        margin-right: 24px;
        font-size: 1.8rem;
        text-align: center;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const PostImageContainer = styled.div`
    width: 100%;
    display: none;
    @media screen and (max-width: 768px) {
        display: inherit;
    }
`