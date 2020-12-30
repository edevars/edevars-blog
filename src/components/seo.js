/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import icon from "../images/icon.png"
import OgDefaultImage from "../images/og-default.jpg"

function SEO({ description, lang, meta, keywords, title, image }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const ogImage =  site.siteMetadata.siteUrl + (image || OgDefaultImage);

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:logo`,
                    content: icon,
                    size: "120x120",
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:creator`,
                    content: `@codevars`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: ogImage,
                },
                {
                    property: `twitter:image`,
                    content: ogImage,
                },
                {
                    property: `image`,
                    content: ogImage,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                            name: `keywords`,
                            content: keywords.join(`, `),
                        }
                        : []
                )
                .concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `es`,
    meta: [],
    keywords: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
}

export default SEO
