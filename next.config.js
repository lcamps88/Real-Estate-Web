const webpack = require('webpack')
const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
    NEXT_PUBLIC_MAPBOX_STYLE: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
  },
}