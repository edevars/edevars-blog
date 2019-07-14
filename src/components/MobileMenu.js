import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHome,
    faEdit,
    faUser,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { Link } from "gatsby"
import nprogress from "nprogress"

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
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 12px;
`
const StyledFontAwesome = styled(FontAwesomeIcon)`
    color: ${props => (props.active ? "white" : "#daebff62")};
`

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 12px;
        color: ${props => (props.active === "true" ? "white" : "#daebff62")};
        margin-bottom: 0;
    }
`

class BurgerMenu extends Component {
    constructor(props) {
        super(props)
        switch (this.props.isActive) {
            case "Home":
                this.state = {
                    Home: "true",
                    Blog: null,
                    About: null,
                    Contact: null,
                }
                break

            case "Blog":
                this.state = {
                    Home: null,
                    Blog: "true",
                    About: null,
                    Contact: null,
                }
                break
            case "Sobre-mi":
                this.state = {
                    Home: null,
                    Blog: null,
                    About: "true",
                    Contact: null,
                }
                break

            case "Contactame":
                this.state = {
                    Home: null,
                    Blog: null,
                    About: null,
                    Contact: "true",
                }
                break

            default:
                this.state = {
                    Home: null,
                    Blog: null,
                    About: null,
                    Contact: null,
                }
                break
        }
    }

    handleChangePage = () => {
        nprogress.start()
    }

    componentWillUnmount() {
        nprogress.done()
    }

    componentWillUpdate() {
        nprogress.done()
    }

    render() {
        return (
            <Wrapper>
                <Menu>
                    <StyledLink to="/" active={this.state.Home} onClick={this.handleChangePage}>
                        <StyledFontAwesome
                            size="sm"
                            icon={faHome}
                            active={this.state.Home}
                        />
                        <p>Inicio</p>
                    </StyledLink>
                    <StyledLink to="/blog" active={this.state.Blog} onClick={this.handleChangePage}>
                        <StyledFontAwesome
                            size="sm"
                            icon={faEdit}
                            active={this.state.Blog}
                        />
                        <p>Blog</p>
                    </StyledLink>
                    <StyledLink to="/sobre-mi" active={this.state.About} onClick={this.handleChangePage}>
                        <StyledFontAwesome
                            size="sm"
                            icon={faUser}
                            active={this.state.About}
                        />
                        <p>Sobre mi</p>
                    </StyledLink>
                    <StyledLink to="/contactame" active={this.state.Contact} onClick={this.handleChangePage}>
                        <StyledFontAwesome
                            size="sm"
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
