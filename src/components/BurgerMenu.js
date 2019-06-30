import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { Link } from "gatsby"
import { relative } from "upath"


const StyledBurger = styled.button`
    display: none;
    border: none;
    width: 40px;
    height: 40px;
    top: 10px;
    left: 5px;
    background: red;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 4;
    @media screen and (max-width: 768px) {
        display: flex;
    }
`

const Menu = styled.nav`
    position: fixed;
    background: rgba(5, 111, 255, 0.9);
    z-index: 3;
    top: 0;
    bottom: 0;
    right: 0;
    left: ${props => (props.isActive ? 0 : "-100vw")};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.3s;
`

const LinkItem = styled(Link)`
    text-decoration: none;
    color: white;
`

class BurgerMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
        }
    }

    handleClick = () => {
        this.setState({
            isActive: !this.state.isActive,
        })
    }

    render() {
        console.log(this.state.isActive)
        return (
            <>
                <StyledBurger onClick={this.handleClick}>
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ fontSize: "21px", color: "white" }}
                    />
                </StyledBurger>
                <Menu isActive={this.state.isActive}>
                        <LinkItem to="/">home</LinkItem>

                        <LinkItem to="/blog">Blog & tutoriales</LinkItem>

                        <LinkItem to="/sobre-mi">¿quién soy yo?</LinkItem>

                        <LinkItem to="/contactame">¡contactame!</LinkItem>
                    </Menu>
            </>
        )
    }
}

export default BurgerMenu
