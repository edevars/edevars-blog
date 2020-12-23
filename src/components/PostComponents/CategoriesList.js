import React from "react"
import { Link } from "gatsby"
import { categories } from "../../utils/categoriesArray"
import styled from "styled-components"
import slugify from "slugify"

const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    flex-flow: row wrap;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    margin-bottom: 100px;
    @media screen and (max-width: 768px) {
        margin-bottom: 50px;
    }
`
const Item = styled.li`
    font-size: 32px;
    text-align: center;
    background: linear-gradient(
                -30deg,
                #0e4bdb 30%,
                #2dddf4 85%
            );
    border: none;
    list-style-type: none;
    span {
        font-weight: bold;
    }

    transition: 0.45s;

    &:hover {
        transform: scale(1.1);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border: none;
    }

    @media screen and (max-width: 768px) {
        font-size: 21px;
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
