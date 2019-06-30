import React from "react"
import Postpreview from "./Postpreview"
import MasonryLayout from "./masonryLayout"
import Media from "react-media"

const GridPosts = props => {
    const { data } = props
    const renderPosts = data.allMarkdownRemark.nodes.map((node, index) => (
        <Postpreview
            key={node.id}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            relativePath={node.frontmatter.imageSlug.relativePath}
            excerpt={node.excerpt}
            readTime={node.frontmatter.readTime}
        />
    ))

    return (
        <>
            <Media query="(max-width: 1390px)">
                {matches =>
                    !matches ? (
                        <MasonryLayout columns={3} gap={40} class="extra-big">
                            {renderPosts}
                        </MasonryLayout>
                    ) : (
                        <Media query="(max-width: 767px)">
                            {matches =>
                                !matches ? (
                                    <MasonryLayout
                                        columns={2}
                                        gap={40}
                                        class="big"
                                    >
                                        {renderPosts}
                                    </MasonryLayout>
                                ) : (
                                    <MasonryLayout
                                        columns={1}
                                        gap={40}
                                        class="small"
                                    >
                                        {renderPosts}
                                    </MasonryLayout>
                                )
                            }
                        </Media>
                    )
                }
            </Media>
        </>
    )
}

export default GridPosts
