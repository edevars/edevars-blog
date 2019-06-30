import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    background-color: #0f3572;
    @media screen and (max-width: 768px) {
        display: none;
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
`
const Item = styled.li`
    margin: 0px;
    color: white;
    height: 100%;
    padding-left: 2.5rem;
    @media screen and (max-width: 1024px) {
        padding: initial;
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
`

const HomeNavbar = () => (
    <Nav>
        <List>
            <Item>
                <LinkItem to="/">home</LinkItem>
            </Item>
            <Item>
                <LinkItem to="/blog">Blog & tutoriales</LinkItem>
            </Item>
            <Item>
                <LinkItem to="/sobre-mi">¿quién soy yo?</LinkItem>
            </Item>
            <Item>
                <LinkItem to="/contactame">¡contactame!</LinkItem>
            </Item>
        </List>
    </Nav>
)

export default HomeNavbar
