/* 
  Creates all LandingPage pages:
  `{permalink}`
*/
const path = require("path")

const createLandingPagePages = async (graphql, actions) => {
  const { createPage } = actions

  const LandingPageTemplate = path.resolve("./src/templates/LandingPage/LandingPage.js")

  const LandingPagesResult = await graphql(`
    query LandingPagesResult {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (LandingPagesResult.errors) {
    throw LandingPagesResult.errors
  }

  const LandingPages = LandingPagesResult.data.allContentfulBlogPost.edges

  await Promise.all(LandingPages.map(async LandingPage => {
    createPage({
      component: LandingPageTemplate,
      context: { id: LandingPage.node.id },
      path: `/${LandingPage.node.slug}/`,
    })
  }))
}

module.exports = createLandingPagePages
