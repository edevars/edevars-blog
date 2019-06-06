import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import slugify from 'slugify'


const StyledCategory = styled.div`
    font-size: 24px;
    margin-top: 3.5rem;
    text-align: center;
    padding: 15px 0;
    width: 80%;
    border-style: solid;
    border-left: 2px;
    border-right: 2px;
    border-color: #001749;
    user-select: none;

    &:hover {
        cursor: pointer;
    }
`

const Category = props => {

    const { category } = props

    const handleClick = () => {
        let slug = slugify(category, {
            replacement: '-',
            remove: null,
            lower: true
          })
        const finalSlug = '/categorias/' + slug
        navigate(finalSlug)
    }

    return (
        <StyledCategory onClick={handleClick}>{category}</StyledCategory>
    )
}

export default Category
