import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHome,
    faFeatherAlt,
    faUser,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
`

const Menu = styled.nav`
    position: fixed;
    background: #001749;
    z-index: 2;
    bottom: 0;
    width: 100vw;
    height: 64px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const StyledFontAwesome = styled(FontAwesomeIcon)`
    margin-top: 5px;
    font-size: 32px;
    color: ${props => (props.active ? "white" : "#bebebec5")};
`

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 12px;
        color: ${props => (props.active ? "white" : "#bebebec5")};
        margin-bottom: 0;
    }
`

class BurgerMenu extends Component {
    constructor(props) {
        super(props)
        switch (this.props.isActive) {
            case "Home":
                this.state = {
                    Home: true,
                    Blog: false,
                    About: false,
                    Contact: false,
                }
                break

            case "Blog":
                this.state = {
                    Home: false,
                    Blog: true,
                    About: false,
                    Contact: false,
                }
                break
            case "Sobre-mi":
                this.state = {
                    Home: false,
                    Blog: false,
                    About: true,
                    Contact: false,
                }
                break

            case "Contactame":
                this.state = {
                    Home: false,
                    Blog: false,
                    About: false,
                    Contact: true,
                }
                break

            default:
                this.state = {
                    Home: false,
                    Blog: false,
                    About: false,
                    Contact: false,
                }
                break
        }
    }
    render() {
        console.log("Es desde el navbar", this.props.isActive)
        console.log("Este es el estado", this.state)
        return (
            <Wrapper>
                <Menu>
                    <StyledLink to="/" active={this.state.Home}>
                        <StyledFontAwesome
                            size="lg"
                            icon={faHome}
                            active={this.state.Home}
                        />
                        <p>Inicio</p>
                    </StyledLink>
                    <StyledLink to="/blog" active={this.state.Blog}>
                        <StyledFontAwesome
                            size="lg"
                            icon={faFeatherAlt}
                            active={this.state.Blog}
                        />
                        <p>Blog</p>
                    </StyledLink>
                    <StyledLink to="/sobre-mi" active={this.state.About}>
                        <StyledFontAwesome
                            size="lg"
                            icon={faUser}
                            active={this.state.About}
                        />
                        <p>Sobre mi</p>
                    </StyledLink>
                    <StyledLink to="/contactame" active={this.state.Contact}>
                        <StyledFontAwesome
                            size="lg"
                            icon={faEnvelope}
                            active={this.state.Contact}
                        />
                        <p>Contacto</p>
                    </StyledLink>
                </Menu>
            </Wrapper>
        )
    }
}

export default BurgerMenu
