import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const Tag = styled.div`
    display: inline-flex;
    width: auto;
    font-weight: bolder;
    background-color: #0073d7;
    color: white;
    padding: 5px 10px;
    border-radius: 45px;
    margin-bottom: 10px;
    margin-right: 10px;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    span {
        font-family: "Comfortaa", cursive;
        font-size: 14px;
        font-weight: bold;
        user-select: none;
        text-align: center;
        margin: 0;
    }
`

const Tags = props => {
    const { tag } = props

    const handleClick = () => {
        const nav = `/${tag}`
        navigate(nav)
    }

    return (
        <Tag onClick={handleClick}>
            <span>{tag}</span>
        </Tag>
    )
}

export default Tags
