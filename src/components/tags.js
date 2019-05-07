import React from "react"
import styled from "styled-components"

const Tag = styled.div`
  font-weight: bolder;
  display: inline-block;
  background-color: rgb(93, 190, 235);
  color: white;
  padding: 2px 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  transform: skew(-10deg);

  &:hover{
    cursor: pointer;
  }

  span {
    font-family: "Comfortaa", cursive;
    font-size: 0.7rem;
    font-weight: bold;
    display: inline-block;
    transform: skew(10deg);
    user-select: none;
  }
`

const Tags = props => {
  return (
    <Tag>
      <span>{props.tag}</span>
    </Tag>
  )
}

export default Tags
