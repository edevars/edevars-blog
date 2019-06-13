import React from "react"
import Postpreview from "./Postpreview"
import MasonryLayout from './masonryLayout'
import Breakpoint,{ setDefaultBreakpoints, BreakpointProvider } from 'react-socks';

setDefaultBreakpoints([
    { s: 0 },
    { m: 468 },
    { l: 968 },
    { xl: 1300 }
]);



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
        <BreakpointProvider>
            <Breakpoint xl only>
                <MasonryLayout columns={4} gap={25} className="elemento-activo">
                    {renderPosts}
                </MasonryLayout>
            </Breakpoint>
            <Breakpoint l only>
                <MasonryLayout columns={3} gap={25} className="elemento-activo">
                    {renderPosts}
                </MasonryLayout>
            </Breakpoint>
            <Breakpoint m only>
                <MasonryLayout columns={2} gap={25} className="elemento-activo">
                    {renderPosts}
                </MasonryLayout>
            </Breakpoint>
            <Breakpoint s only>
                <MasonryLayout columns={1} gap={25} className="elemento-activo">
                    {renderPosts}
                </MasonryLayout>
            </Breakpoint>
        </BreakpointProvider>
    )
}

export default GridPosts
