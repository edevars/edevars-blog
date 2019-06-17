import React from "react"
import Postpreview from "./Postpreview"
import MasonryLayout from "./masonryLayout"
//import styled from "styled-components"
import Media from "react-media"

// const Wrapper = styled.div`
//     .extra-big {
//         display: flex;
//     }

//     .big {
//         display: none;
//     }

//     .medium {
//         display: none;
//     }

//     .small {
//         display: none;
//     }

//     @media screen and (max-width: 1390px) {
//         .extra-big {
//             display: none;
//         }

//         .big {
//             display: flex;
//         }
//     }

//     @media screen and (max-width: 890px) {
//         .big {
//             display: none;
//         }

//         .medium {
//             display: flex;
//         }
//     }

//     @media screen and (max-width: 578px) {
//         .medium {
//             display: none;
//         }

//         .small {
//             display: flex;
//         }
//     }
// `

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
        // <Wrapper>
        //     <MasonryLayout columns={4} gap={25} class="extra-big">
        //         {renderPosts}
        //     </MasonryLayout>
        //     <MasonryLayout columns={3} gap={25} class="big">
        //         {renderPosts}
        //     </MasonryLayout>
        //     <MasonryLayout columns={2} gap={25} class="medium">
        //         {renderPosts}
        //     </MasonryLayout>
        //     <MasonryLayout columns={1} gap={25} class="small">
        //         {renderPosts}
        //     </MasonryLayout>
        // </Wrapper>
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
