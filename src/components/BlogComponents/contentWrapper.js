import React from 'react';
import styled from 'styled-components';

const StyledContentWrapper = styled.section`
    display: grid;
    width: 90%;
    grid-template: auto auto / 1fr;
    grid-template-areas: "Content" "Posts";
    margin: 0px auto;
    background: white;
    -webkit-box-shadow: 0px 31px 31px 9px rgba(102, 102, 102, 1);
    -moz-box-shadow: 0px 31px 31px 9px rgba(102, 102, 102, 1);
    box-shadow: 0px 31px 31px 9px rgba(102, 102, 102, 1);
    position: relative;
    border-radius: 10px;
    top: -100px;
    padding: 0 10%;
    padding-bottom: 150px;
    @media screen and (max-width: 1024px) {
        width: 100%;
        position: initial;
        box-shadow: initial;
        border: none;
        top: none;
        padding: 0 10%;
    }
    @media screen and (max-width: 425px) {
        padding: 0 15px;
    }
`

const ContentWrapper = ({children}) => (
    <StyledContentWrapper>
        {children}
    </StyledContentWrapper>
) 

export default ContentWrapper