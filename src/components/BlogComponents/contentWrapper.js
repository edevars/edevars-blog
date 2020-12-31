import React from 'react';
import styled from 'styled-components';

const StyledContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0px auto;
    background: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    position: relative;
    border-radius: 10px;
    top: -100px;
    padding: 0 10%;
    padding-bottom: 150px;

    @media screen and (max-width: 1024px) {
        width: 80%;
        position: initial;
        box-shadow: initial;
        border: none;
        top: none;
        padding: inherit;
    }
`

const ContentWrapper = ({children}) => (
    <StyledContentWrapper>
        {children}
    </StyledContentWrapper>
) 

export default ContentWrapper