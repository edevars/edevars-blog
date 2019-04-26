import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  display: grid;
  grid-template: 200px / 200px 65%;
  border: 1px solid black;
  margin-bottom: 50px;
`

const Cover = styled.div`
  background-image: url(${props => props.src || ""});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`
const PostPreview = props => {
  const { title, date, tags, imageSlug, excerpt, slug } = props
  return (
    <Wrapper>
      <Cover src={imageSlug} />
      <div>
        <Link to={slug}>
          <h4>{title}</h4>
        </Link>
        <h5>
          {date} |
          {tags.map((tag, index) => {
            return <span key={index}>{tag}</span>
          })}
        </h5>
        <p>{excerpt}</p>
      </div>
    </Wrapper>
  )
}

export default PostPreview
