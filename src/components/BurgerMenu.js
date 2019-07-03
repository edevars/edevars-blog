import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { navigate } from "gatsby"

const Wrapper = styled.div`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
`

const StyledBurger = styled.button`
    display: none;
    border: none;
    width: 40px;
    height: 40px;
    position: fixed;
    top: 10px;
    left: 10px;
    background: #060695;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    z-index: 3;
    outline: 0;
    @media screen and (max-width: 768px) {
        display: flex;
    }
`

const Menu = styled.nav`
    position: fixed;
    background: rgb(7, 185, 199, 0.95);
    z-index: 2;
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

const Button = styled.button`
    text-decoration: none;
    color: white;
    font-size: 2rem;
    margin: 2rem 0;
    padding: 20px;
    border: 1px solid white;
    background: none;
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
        return (
            <Wrapper>
                <StyledBurger
                    onClick={this.handleClick}
                    aria-label="Menu"
                    role="button"
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ fontSize: "21px", color: "white" }}
                    />
                </StyledBurger>
                <Menu isActive={this.state.isActive}>
                    <Button
                        onClick={event => {
                            event.preventDefault()
                            this.setState({
                                isActive: false,
                            })
                            navigate("/")
                        }}
                    >
                        Home
                    </Button>

                    <Button
                        onClick={event => {
                            event.preventDefault()
                            this.setState({
                                isActive: false,
                            })
                            navigate("/blog")
                        }}
                    >
                        Blog & tutoriales
                    </Button>

                    <Button
                        onClick={event => {
                            event.preventDefault()
                            this.setState({
                                isActive: false,
                            })
                            navigate("/sobre-mi")
                        }}
                    >
                        ¿quién soy yo?
                    </Button>

                    <Button
                        onClick={event => {
                            event.preventDefault()
                            this.setState({
                                isActive: false,
                            })
                            navigate("/contactame")
                        }}
                    >
                        ¡contactame!
                    </Button>
                </Menu>
            </Wrapper>
        )
    }
}

export default BurgerMenu
