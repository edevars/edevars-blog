import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import Tags from "./tags"

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px auto 100px;
  grid-template-columns: 1fr;
  margin-bottom: 50px;
  box-shadow: 0px 0px 8px 0px rgba(168, 168, 168, 1);
  border-radius: 10px;
`

const Cover = styled.div`
  background-image: url(${props => props.src || ""});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`

const Content = styled.div`
  padding: 16px;
  p {
    margin: 0px;
  }
  h5 {
    margin-top: 10px;
  }
`

const Title = styled.h4`
  font-size: 21px;
  font-weight: bold;
  margin: 10px 0px;
`

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Button = styled.div`
  font-family: "Roboto", cursive;
  font-weight: semi-bold;
  margin: 10px auto;
  text-align: center;
  width: 160px;
  height: 45px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(45deg, rgb(14, 75, 219), rgb(45, 179, 244));
  border-radius: 10px;
  transition-property: all;
  transition-duration: 0.7s;
  transition-delay: 0s;
  &:hover {
    background: rgba(0, 0, 0, 0);
    color: rgb(14, 75, 219);
    box-shadow: inset 0 0 0 3px rgb(14, 75, 219);
    cursor: pointer;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const PostPreview = props => {
  const { title, date, tags, imageSlug, excerpt, slug, readTime } = props

  const handleClick = () => {
    const nav = "/blog" + slug;
    navigate(nav)
  }

  return (
    <GridWrapper>
      <Cover src={imageSlug} />
      <Content>
        <Title>{title}</Title>
        <TagContainer>
          {tags.map((tag, index) => {
            return <Tags key={index} tag={tag} />
          })}
        </TagContainer>

        <h5>
          {date} <span>•</span> {readTime} min read
        </h5>
        <p>{excerpt}</p>
      </Content>
      <Info>
        <Button onClick={handleClick}>Leer más</Button>
      </Info>
    </GridWrapper>
  )
}

export default PostPreview
