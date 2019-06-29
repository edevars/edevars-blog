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
                        <MasonryLayout columns={4} gap={25} class="extra-big">
                            {renderPosts}
                        </MasonryLayout>
                    ) : (
                        <Media query="(max-width: 890px)">
                            {matches =>
                                !matches ? (
                                    <MasonryLayout
                                        columns={3}
                                        gap={25}
                                        class="big"
                                    >
                                        {renderPosts}
                                    </MasonryLayout>
                                ) : (
                                    <Media query="(max-width: 578px)">
                                        {matches =>
                                            !matches ? (
                                                <MasonryLayout
                                                columns={2}
                                                gap={25}
                                                class="medium"
                                            >
                                                {renderPosts}
                                            </MasonryLayout>
                                            ) : (
                                                <MasonryLayout
                                                columns={1}
                                                gap={25}
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
                    )
                }
            </Media>
        </>
    )
}

export default GridPosts
