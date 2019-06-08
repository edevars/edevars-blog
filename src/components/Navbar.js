import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 1rem 0px;
  margin: 0px;
  width: 100%;
  @media screen and (max-width: 1024px){
    justify-content: space-evenly;
  }
`
const Item = styled.li`
  margin: 0px;
  color: black;
  height: 100%;
  padding-left: 2.5rem;
  @media screen and (max-width: 1024px){
    padding: initial;
  }
`

const LinkItem = styled(Link)`
  -o-transition: 0.4s;
  -ms-transition: 0.4s;
  -moz-transition: 0.4s;
  -webkit-transition: 0.4s;
  margin-bottom: 7px;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background: rgba(23, 91, 163, 1);
    transition: width 0.3s;
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    color: rgba(23, 91, 163, 1);
  }
  &:hover::after {
    font-size: 20px;
    width: 100%;
    transition: width 0.3s;
    text-decoration: none;
  }
`


const Navbar = () => (
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

export default Navbar
