import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const StyledBurger = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        width: 40px;
        height: 40px;
        top: 5px;
        left: 5px;
        background: rgb(15, 53, 114, 0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 3;
    }
`

const BurgerMenu = () => (
    <StyledBurger>
        <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: "21px", color: "white" }}
        />
    </StyledBurger>
)

export default BurgerMenu
