import React from "react"
import styled from "styled-components"
import Postpreview from "./Postpreview"

const StyledGrid = styled.section`
    grid-area: posts;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-row-gap: 60px;
    grid-column-gap: 35px;
    margin: 0px auto;
    justify-content: space-evenly;
`

const GridPosts = props => {
    const { data } = props
    return (
        <StyledGrid width={props.width}>
            {data.allMarkdownRemark.nodes.map((node, index) => (
                <div key={node.id}>
                    <Postpreview
                        slug={node.frontmatter.slug}
                        key={node.id}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        tags={node.frontmatter.tags}
                        relativePath={node.frontmatter.imageSlug.relativePath}
                        imageSlug={
                            node.frontmatter.imageSlug.childImageSharp.fluid.src
                        }
                        excerpt={node.excerpt}
                        readTime={node.frontmatter.readTime}
                    />
                </div>
            ))}
        </StyledGrid>
    )
}

export default GridPosts
