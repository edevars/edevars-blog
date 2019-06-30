import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import Tags from "../TagsComponents/tags"
import PostImage from "./postImage"

const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #001749;
`

const Cover = styled.div`
    position: relative;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
`

const Content = styled.div`
    color: #dddddd;
    width: 85%;
    margin: 0 auto;
    padding: 16px 16px 0px 16px;
    p {
        margin: 0px;
        font-size: 1.1rem;
        margin-top: 1em;
    }

    h5 {
        color: #dddddd;
    }
`

const Title = styled.h4`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
    line-height: 2rem;
`

const Button = styled.button`
    font-family: "Roboto", cursive;
    font-weight: semi-bold;
    font-size: 1rem;
    text-align: center;
    margin-top: 3rem;
    width: 100%;
    height: 3rem;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(7, 185, 199, 0.95);
    color: #001749;
    border: none;
    color: white;
    font-weight: bold;
    &:hover {
        background-image: linear-gradient(
            45deg,
            rgb(14, 75, 219),
            rgb(45, 179, 244)
        );
        cursor: pointer;
        box-shadow: initial;
    }
`

const TagContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const PostPreview = props => {
    const { title, date, tags, excerpt, slug, readTime, relativePath } = props
    const handleClick = () => {
        const nav = "/blog" + slug
        navigate(nav)
    }

    return (
        <FlexWrapper>
            <Cover>
                <PostImage src={relativePath} />
            </Cover>
            <Content>
                <Title>{title}</Title>
                <h5>
                    {date} <span>•</span> {readTime} min read
                </h5>
                <TagContainer>
                    {tags.map((tag, index) => {
                        return <Tags key={index} tag={tag} />
                    })}
                </TagContainer>

                <p>{excerpt}</p>
            </Content>
            <Button onClick={handleClick}>Leer más</Button>
        </FlexWrapper>
    )
}

export default PostPreview
