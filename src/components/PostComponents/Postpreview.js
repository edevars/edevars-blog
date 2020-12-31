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
    padding-bottom: 2rem;
    transition: 0.4s;
    border-radius: 8px;

    &:hover {
        transform: scale(1.04);
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        border: none;
        cursor: pointer;
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
        font-size: 1.2rem;
        margin-top: 1em;
        color: #F1F2F4;
    }

    @media screen and (max-width: 768px) {
        p{
            font-size: 1rem;
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
        <FlexWrapper onClick={handleClick}>
            <Cover>
                <PostImage src={relativePath} />
            </Cover>
            <Content>
                <Title>{title}</Title>
                <p>{excerpt}</p>
            </Content>
        </FlexWrapper>
    )
}

export default PostPreview
