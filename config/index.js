const dotenv = require("dotenv")

dotenv.config()

const config = {
    googleAnalyticsTrackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
}

module.exports = { config }
