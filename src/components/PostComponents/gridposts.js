import React from "react"
import Postpreview from "./Postpreview"
import Masonry from "react-masonry-css"
import './masonry.css'

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    530: 1
  };

const GridPosts = props => {
    const { data } = props
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {data.allMarkdownRemark.nodes.map((node, index) => (
                <div key={node.id}>
                    <Postpreview
                        slug={node.frontmatter.slug}
                        key={node.id}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        tags={node.frontmatter.tags}
                        relativePath={node.frontmatter.imageSlug.relativePath}
                        excerpt={node.excerpt}
                        readTime={node.frontmatter.readTime}
                    />
                </div>
            ))}
        </Masonry>
    )
}

export default GridPosts
