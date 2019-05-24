import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { categories } from "../utils/categoriesArray"
import ToggleCategory from "../components/toggle_category"

// TODO Acabar la seccion categorias

const Subtitle = styled.h3`
    display: inline-block;
    font-style: italic;
`

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template: auto auto / 1fr;
    grid-template-areas: "Content" "Posts";
    margin: 0px auto;
`

const ListCategories = styled.div`
    grid-area: Content;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`
const PostWrapper = styled.div`
    grid-area: Posts;
    padding-top: 70px;
    width: 100%;
`

const CategoryLabel = styled.li`
    font-weight: bolder;
    display: inline-block;
    background: rgb(2, 0, 36);
    background: linear-gradient(45deg, rgb(14, 75, 219), rgb(45, 179, 244));
    color: white;
    padding: 10px 20px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 10px;
    transform: skew(-10deg);

    &:hover {
        cursor: pointer;
    }

    span {
        font-family: "Comfortaa", cursive;
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
        transform: skew(10deg);
        user-select: none;
    }
`

const PostsbyCategory = category => {
    return <ToggleCategory category={category} />
}
class Categories extends Component {
    state = {
        categories,
        selectedCategory: null,
    }

    handleClick = category => {
        console.log("Entra la categoria ", category)
        this.setState({
            selectedCategory: category,
        })
    }

    render() {
        return (
            <Layout>
                <SEO title="Categorías" />
                <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
                    <Subtitle>
                        Encuentra increíbles articulos, consejos, tutoriales y
                        mucho más{" "}
                        <span role="img" aria-label="wink">
                            😉
                        </span>
                    </Subtitle>
                </div>
                <Wrapper>
                    <ListCategories>
                        <ul>
                            <CategoryLabel
                                key={0}
                                onClick={() => {
                                    this.handleClick(null)
                                }}
                            >
                                Más recientes
                            </CategoryLabel>
                            {this.state.categories.map((category, index) => {
                                return (
                                    <CategoryLabel
                                        key={index}
                                        onClick={() => {
                                            this.handleClick(category)
                                        }}
                                    >
                                        {category}
                                    </CategoryLabel>
                                )
                            })}
                        </ul>
                    </ListCategories>
                    <PostWrapper>
                        {PostsbyCategory(this.state.selectedCategory)}
                    </PostWrapper>
                </Wrapper>
            </Layout>
        )
    }
}

export default Categories
