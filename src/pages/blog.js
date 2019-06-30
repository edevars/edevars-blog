import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { categories } from "../utils/categoriesArray"
import ToggleCategory from "../components/BlogComponents/toggle_category"

const Wrapper = styled.div`
    width: 100%;
    position: absolute;
`

const ContentWrapper = styled.section`
    display: grid;
    width: 85%;
    grid-template: auto auto / 1fr;
    grid-template-areas: "Content" "Posts";
    margin: 0px auto;
    background: white;
    -webkit-box-shadow: 0px 0px 38px 3px rgba(109, 145, 139, 0.38);
    -moz-box-shadow: 0px 0px 38px 3px rgba(109, 145, 139, 0.38);
    box-shadow: 0px 0px 38px 3px rgba(109, 145, 139, 0.38);
    position: relative;
    border-radius: 10px;
    top: -100px;
    @media screen and (max-width: 1024px) {
        width: 100%;
        position: initial;
        box-shadow: initial;
        border: none;
        top: none;
    }
`

const MarginContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3rem;
`

const ListCategories = styled.ul`
    grid-area: Content;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`
const PostWrapper = styled.div`
    grid-area: Posts;
    padding-top: 50px;
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

    &:hover {
        cursor: pointer;
    }

    span {
        font-family: "Comfortaa", cursive;

        font-weight: bold;
        display: inline-block;
        transform: skew(10deg);
        user-select: none;
    }
`

const HiWrapper = styled.div`
    max-width: 768px;
    margin: 3rem auto;
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
        this.setState({
            selectedCategory: category,
        })
    }

    render() {
        return (
            <Layout>
                <SEO title="Categorías" />
                <Wrapper>
                    <ContentWrapper>
                        <MarginContainer>
                            <HiWrapper>
                                <h1>¡Tutoriales, consejos y mucho más!</h1>
                                <p>
                                    Encuentra posts de todos los temas, sabores
                                    y colores. Siempre me ha encantado escribir
                                    así que espero los disfrutes.
                                </p>
                            </HiWrapper>
                            <ListCategories>
                                <CategoryLabel
                                    key={0}
                                    onClick={() => {
                                        this.handleClick(null)
                                    }}
                                >
                                    Más recientes
                                </CategoryLabel>
                                {this.state.categories.map(
                                    (category, index) => {
                                        return (
                                            <CategoryLabel
                                                key={index + 1}
                                                onClick={() => {
                                                    this.handleClick(category)
                                                }}
                                            >
                                                {category}
                                            </CategoryLabel>
                                        )
                                    }
                                )}
                            </ListCategories>
                            <PostWrapper>
                                {PostsbyCategory(this.state.selectedCategory)}
                            </PostWrapper>
                        </MarginContainer>
                    </ContentWrapper>
                </Wrapper>
            </Layout>
        )
    }
}

export default Categories
