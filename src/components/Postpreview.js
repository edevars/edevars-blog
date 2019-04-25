import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: red;
`

const PostPreview = (props) => (
    <Wrapper>
        Holi {props.name}, soy un post
    </Wrapper>
)

export default PostPreview
