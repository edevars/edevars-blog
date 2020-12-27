import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import nprogress from "nprogress"
import Tags from "../TagsComponents/tags"
import PostImage from "./postImage"

const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #001749;
    transition: 0.4s;

    &:hover {
        transform: scale(1.03);
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        border: none;
    }
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
        font-size: 0.9rem;
        margin-top: 1em;
    }

    h5 {
        color: #dddddd;
        font-weight: normal;
    }

    @media screen and (max-width: 768px) {
        p{
            display: none;
        }
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
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
    width: 100%;
    padding: 1rem 0px;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a13bf;
    border: none;
    color: #ffffff;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding: 2rem 0px;
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
        nprogress.start()
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
            <Button onClick={handleClick} name="Leer más">
                Leer más
            </Button>
        </FlexWrapper>
    )
}

export default PostPreview
