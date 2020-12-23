const dotenv = require("dotenv")

dotenv.config()

const config = {
    googleAnalyticsTrackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    siteURL: process.env.SITE_URL
}

module.exports = { config }
