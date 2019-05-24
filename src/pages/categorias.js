import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { categories } from "../utils/categoriesArray"
import ToggleCategory from "../components/toggle_category"

// TODO Acabar la seccion categorias

const Subtitle = styled.h3`
    display: inline-block;
    background: -webkit-linear-gradient(
        -30deg,
        #001749 0%,
        #0e4bdb 30%,
        #2dddf4 85%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    border: 3px solid black;
    grid-template: 1fr / 0.3fr 0.7fr;
    grid-template-areas: "Content Posts";
    margin: 0px auto;
`

const ListCategories = styled.div`
    grid-area: Content;
    background-color: red;
    li:hover {
        cursor: pointer;
    }
`
const PostWrapper = styled.div`
    grid-area: Posts;
    padding-top: 70px;
    width: 100%;
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
                    <h1>Toma lo que más te guste</h1>
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
                            <li
                                key={0}
                                onClick={() => {
                                    this.handleClick(null)
                                }}
                            >
                                Más recientes
                            </li>
                            {this.state.categories.map((category, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            this.handleClick(category)
                                        }}
                                    >
                                        {category}
                                    </li>
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
