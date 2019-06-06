import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import Tags from "../TagsComponents/tags"
import PostImage from "./postImage"

const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 0px 8px 0px rgba(168, 168, 168, 1);
    border-radius: 10px;
`

const Cover = styled.div`
    height: 150px;
    position: relative;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    border-radius: 10px 10px 0px 0px;
`

const Content = styled.div`
    padding: 16px 16px 0px 16px;
    p {
        margin: 0px;
        font-size: 14px;
        margin-top: 1em;
    }
`

const Title = styled.h4`
    font-size: 24px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
`

const Info = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 0.5em;
    padding-bottom: 1em;
`

const Button = styled.button`
    font-family: "Roboto", cursive;
    font-weight: semi-bold;
    font-size: 14px;
    text-align: center;
    margin: 1em auto;
    width: 10em;
    height: 2.5em;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    transition-property: all;
    transition-duration: 0.7s;
    transition-delay: 0s;
    background: rgba(0, 0, 0, 0);
    color: rgba(10, 60, 179, 0.7);
    box-shadow: inset 0 0 0 3px rgba(10, 60, 179, 0.7);
    border: none;
    border-radius: 5px;

    &:hover {
        background-image: linear-gradient(
            45deg,
            rgb(14, 75, 219),
            rgb(45, 179, 244)
        );
        cursor: pointer;
        color: white;
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
            <Info>
                <Button onClick={handleClick}>Leer más</Button>
            </Info>
        </FlexWrapper>
    )
}

export default PostPreview
