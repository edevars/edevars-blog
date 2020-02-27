import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import nprogress from "nprogress"
import MenuBars from "./MenuBars"

const Nav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    background: ${props =>
        !props.error ? "rgba(6, 6, 149, 0.376)" : "rgba(6, 6, 149, 1)"};

    @media screen and (max-width: 768px) {
        background: rgba(6, 6, 149, 0.95);
        position: fixed;
        width: 280px;
        height: 100vh;
        right: ${props => (props.open ? "0" : "-300px")};
        left: inherit;
        opacity: 0.9;
        transition: 300ms ease-in;
    }
`

const Backdrop = styled.div`
    opacity: 0;
    transition: 300ms ease-in;

    @media screen and (max-width: 768px) {
        opacity: ${props => (props.open ? "1" : "0")};
        background:  rgba(0, 0, 0, 0.3);
        width: 100%;
        max-height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }
`

const List = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 1rem 0px;
    margin: 0px;
    width: 100%;
    font-weight: bold;
    @media screen and (max-width: 1024px) {
        justify-content: space-evenly;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const Item = styled.li`
    margin: 0px;
    color: white;
    height: 100%;
    padding-left: 2.5rem;
    @media screen and (max-width: 1024px) {
        padding: initial;
    }

    @media screen and (max-width: 768px) {
        margin: 20px 0;
    }
`

const LinkItem = styled(Link)`
    -o-transition: 0.4s;
    -ms-transition: 0.4s;
    -moz-transition: 0.4s;
    -webkit-transition: 0.4s;
    margin-bottom: 7px;
    color: white;

    &::after {
        content: "";
        display: block;
        width: 0;
        height: 3px;
        background: white;
        transition: width 0.3s;
        text-decoration: none;
    }
    &:hover {
        text-decoration: none;
        color: white;
    }
    &:hover::after {
        font-size: 20px;
        width: 100%;
        transition: width 0.3s;
        text-decoration: none;
    }

    @media screen and (max-width: 768px) {
        font-size: 26px;
    }
`

class Navbar extends Component {
    state = {
        open: false,
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

    handleClose = () => {
        this.setState({
            open: false,
        })
    }

    handleOpen = () => {
        this.setState({
            open: true,
        })
    }

    render() {
        return (
            <>
                <Backdrop onClick={this.handleClose} open={this.state.open} />
                <MenuBars handleOpen={this.handleOpen} open={this.state.open} />
                <Nav error={this.props.error} open={this.state.open}>
                    <List>
                        <Item>
                            <LinkItem to="/" onClick={this.handleChangePage}>
                                Home
                            </LinkItem>
                        </Item>
                        <Item>
                            <LinkItem
                                to="/blog"
                                onClick={this.handleChangePage}
                            >
                                Blog
                            </LinkItem>
                        </Item>
                        <Item>
                            <LinkItem
                                to="/sobre-mi"
                                onClick={this.handleChangePage}
                            >
                                Sobre mi
                            </LinkItem>
                        </Item>
                        <Item>
                            <LinkItem
                                to="/contactame"
                                onClick={this.handleChangePage}
                            >
                                Contacto
                            </LinkItem>
                        </Item>
                    </List>
                </Nav>
            </>
        )
    }
}

export default Navbar
