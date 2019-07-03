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
const Item = styled.div`
    font-size: 16px;
    text-align: center;
    background: #0000ff;
    border: none;
    border-radius: 100px;
    list-style-type: none;
    span {
        font-weight: bold;
    }
    &:hover {
        cursor: pointer;
        background: #47c9e5;
        color: white;
        border: none;
        transition: 0.5s background;
    }
`

const StyledLink = styled(Link)`
    color: #ffffff;
    display: inline-block;
    padding: 5px 15px;
    &:hover {
        text-decoration: none;
        color: #ffffff;
    }
`

const CategoriesList = () => (
    <List>
        {categories.map((category, index) => {
            let slug = slugify(category, {
                replacement: "-",
                remove: null,
                lower: true,
            })

            return (
                <Item>
                    <StyledLink to={`/blog/${slug}`} key={index}>
                        <span>{category}</span>
                    </StyledLink>
                </Item>
            )
        })}
    </List>
)

export default CategoriesList
