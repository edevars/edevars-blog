import styled from "styled-components"

export const GridWrapper = styled.div`
    display: grid;
    max-width: 1600px;
    margin: 0 auto;
    grid-template-columns: 20% 60% 20%;
    grid-template-areas: "Info Content Related";


    @media screen and (max-width: 768px) {
        grid-template-areas: "Info" "Content" "Related";
        grid-template-columns: 100vw;
    }
`

export const InfoContainer = styled.div`
    width: 100%;
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
    width: 85%;
    max-width: 800px;
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

    blockquote {
        margin-left: 0;
        margin-right: 1.56rem;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 1.17rem;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.56rem;
        font-size: 1.20112rem;
        line-height: 1.56rem;
        color: hsla(0,0%,0%,0.6);
        border-left: 0.39rem solid hsla(0,0%,0%,0.13);
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
    h4 {
        font-weight: bold;
    }
    @media screen and (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
        padding: 0;
        padding-top: 20px;
        max-width: none;
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