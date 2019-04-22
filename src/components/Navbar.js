import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  display: grid;
  grid-template: 1fr / 45% 65%;
  height: 7.5vh;
`

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  margin: auto 0px;
  padding: 15px 0px;
`
const Item = styled.li`
  margin: 0px;
  color: black;
  height: 100%;
`

const LinkItem = styled(Link)`
  -o-transition: 0.4s;
  -ms-transition: 0.4s;
  -moz-transition: 0.4s;
  -webkit-transition: 0.4s;
  margin-bottom: 7px;
  
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: rgba(23, 91, 163, 1);
    transition: width .3s;
    text-decoration: none;
  }
  &:hover{
    text-decoration: none;
    color: rgba(23, 91, 163, 1);
  }
  &:hover::after{
    font-size: 20px;
    width: 100%;
    transition: width .3s;
    text-decoration: none;
  }
`

const SocialMedia = styled.div`
  background-color: blue;
`

const Navbar = () => (
  <Nav>
    <List>
      <Item>
        <LinkItem to="/">home</LinkItem>
      </Item>
      <Item>
        <LinkItem to="/about">about me</LinkItem>
      </Item>
      <Item>
        <LinkItem to="/contact">contact</LinkItem>
      </Item>
      <Item>
        <LinkItem to="/categories">categories</LinkItem>
      </Item>
    </List>
    <SocialMedia>Hola</SocialMedia>
  </Nav>
)

export default Navbar
