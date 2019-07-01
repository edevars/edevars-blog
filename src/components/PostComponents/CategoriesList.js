import React from "react"
import { Link } from "gatsby"
import { categories } from "../../utils/categoriesArray"
import styled from "styled-components"
import slugify from "slugify"

const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    width: 80%;
    padding: 0;
    margin: 0 auto;
    margin-bottom: 100px;
    @media screen and (max-width: 768px) {
        margin-bottom: 50px;
    }
`
const Item = styled.li`
    font-size: 16px;
    text-align: center;
    padding: 5px 20px;
    border: 1px solid #737c90;
    border-radius: 100px;
    color: #737c90;
    list-style-type: none;

    &:hover {
        cursor: pointer;
        background: #47c9e5;
        color: white;
        border: none;
        transition: 0.5s background;
    }
`

const StyledLink = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`

const CategoriesList = () => (
    <List>
        {categories.map(category => {
            let slug = slugify(category, {
                replacement: "-",
                remove: null,
                lower: true,
            })

            return (
                <StyledLink to={`/blog/${slug}`}>
                    <Item>
                        <span>{category}</span>
                    </Item>
                </StyledLink>
            )
        })}
    </List>
)

export default CategoriesList
