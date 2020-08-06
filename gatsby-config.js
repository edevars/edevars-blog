const path = require("path")
const { config } = require("./config")

const dev = process.env.NODE_ENV && "development"

module.exports = {
    siteMetadata: {
        title: `edevars`,
        description: `Cambiemos el mundo con código. Encuentra increíbles tips y tutoriales sobre los lenguajes de programación más usados`,
        author: `Enrique Devars`,
        siteUrl: dev ? "http://localhost:8000" : "https://www.edevars.com"
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: config.googleAnalyticsTrackingId,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images-medium-zoom`,
                        options: {
                            background: "#030640",
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    `gatsby-remark-responsive-iframe`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `edevars Blog`,
                short_name: `edevars`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#07034e`,
                display: "standalone",
                icon: `src/images/icon.png`,
                crossOrigin: `use-credentials`,
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-offline`,
    ],
}
