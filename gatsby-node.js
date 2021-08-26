const createLandingPages = require('./scripts/createLandingPages')

exports.createPages = async ({ graphql, actions }) => {
  return await Promise.all([
    createLandingPages(graphql, actions)
  ])
}