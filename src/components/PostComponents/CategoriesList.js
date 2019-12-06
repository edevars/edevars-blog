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

    background: #070e8c;
    border: none;
    border-radius: 150px;
    list-style-type: none;
    transition: 1s ease-out;
    span {
        font-weight: bold;
    }

    &:hover {
        cursor: pointer;
        background: #20c6eb;
        color: white;
        border: none;
        transition: 0.5s background;
    }
`

const StyledLink = styled(Link)`
    color: #ffffff;
    display: inline-block;
    padding: 10px 25px;
    &:hover {
        text-decoration: none;
        color: #ffffff;
    }
`

const CategoriesList = () => (
    <List>
        <Item key="todos">
            <StyledLink to="/blog">
                <span>Todos</span>
            </StyledLink>
        </Item>

        {categories.map((category, index) => {
            let slug = slugify(category, {
                replacement: "-",
                remove: null,
                lower: true,
            })

            return (
                <Item key={slug}>
                    <StyledLink to={`/blog/${slug}`}>
                        <span>{category}</span>
                    </StyledLink>
                </Item>
            )
        })}
    </List>
)

export default CategoriesList
