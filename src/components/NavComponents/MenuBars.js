import * as React from "react"
import styled from "styled-components"

const MenuButton = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        background: rgba(6, 6, 149, 0.95);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 2;
        display: ${props => (props.open ? "none" : "flex")};
        justify-content: center;
        align-items: center;
        cursor: pointer;

        svg {
            fill: white;
        }
    }
`

function MenuBars(props) {
    return (
        <MenuButton onClick={props.handleOpen} open={props.open}>
            <svg height={32} viewBox="0 0 24 24" width={32}>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
        </MenuButton>
    )
}

export default MenuBars
