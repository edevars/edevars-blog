import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Nav = styled.nav`
  display: grid;
  grid-template: 1fr / 40% 60%;
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

const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .wrapper {
    margin: 0px 3rem;
  }

  .icon {
    font-size: 21px;
    margin-right: 36px;
    color: #050c19;
  }
`

const Navbar = () => (
  <Nav>
    <List>
      <Item>
        <LinkItem to="/">home</LinkItem>
      </Item>
      <Item>
        <LinkItem to="/posts">posts</LinkItem>
      </Item>
      <Item>
        <LinkItem to="/categorias">categorías</LinkItem>
      </Item>
      <Item>
        <LinkItem to="/sobre-mi">¿quién soy yo?</LinkItem>
      </Item>
      <Item>
        <LinkItem to="/contactame">¡contactame!</LinkItem>
      </Item>
    </List>
    <SocialMedia>
      <div className="wrapper">
        <FontAwesomeIcon className="icon" icon={["fab", "facebook"]} />
        <FontAwesomeIcon className="icon" icon={["fab", "twitter"]} />
        <FontAwesomeIcon className="icon" icon={["fab", "instagram"]} />
        <FontAwesomeIcon className="icon" icon={["fab", "youtube"]} />
      </div>
    </SocialMedia>
  </Nav>
)

export default Navbar
