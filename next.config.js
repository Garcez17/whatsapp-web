const withImages = require('next-images');

module.exports = {
  reactStrictMode: true,
}

module.exports = withImages({
  esModule: true,
})

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}
