import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { formatShort } from "../utils/dateFormatter"
import AllTags from "../components/TagsComponents/alltags"
import DateBlock from "../components/BlogComponents/dateblock"
import Category from "../components/BlogComponents/category"
import { DiscussionEmbed } from "disqus-react"
import PostImage from "../components/PostComponents/postImage"
import {
    GridWrapper,
    InfoContainer,
    InfoElements,
    ContentContainer,
    RelatedContainer,
    Title,
    PostImageContainer,
} from "../styles/PostTemplate"

export default ({ data }) => {
    const post = data.markdownRemark
    const {
        title,
        tags,
        date,
        category,
        slug,
        imageSlug,
        ogImage,
    } = post.frontmatter

    const { day, month, year } = formatShort(date)

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: slug },
    }

    const ogImagePath = ogImage && ogImage.childImageSharp.fixed.src
    const readTime = Math.round(post.wordCount.words / 165);

    return (
        <Layout solidHeader>
            <SEO
                title={title}
                description={post.excerpt}
                keywords={tags}
                image={ogImagePath}
            />
            <GridWrapper>
                <PostImageContainer>
                    <PostImage src={imageSlug.relativePath}></PostImage>
                </PostImageContainer>
                <InfoContainer>
                    <Title className="mobile">{title}</Title>
                    <InfoElements>
                        <DateBlock day={day} month={month} year={year} />
                        <Category category={category} />
                        <h4 style={{ marginTop: "1em", textAlign: "center" }}>
                            <span role="img" aria-label="coffee">
                                ☕
                            </span>{" "}
                            {readTime} min read time
                        </h4>
                    </InfoElements>
                </InfoContainer>
                <ContentContainer>
                    <Title className="desktop">{title}</Title>
                    <main dangerouslySetInnerHTML={{ __html: post.html }} />
                    <DiscussionEmbed {...disqusConfig} />
                </ContentContainer>
                <RelatedContainer>
                    <h4>Encuentra más de lo que buscabas...</h4>
                    <AllTags />
                </RelatedContainer>
            </GridWrapper>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                category
                tags
                date
                slug
                ogImage {
                    childImageSharp {
                        fixed {
                            src
                        }
                    }
                }
                imageSlug {
                    relativePath
                }
            }
            wordCount {
                words
            }
            excerpt
        }
    }
`
