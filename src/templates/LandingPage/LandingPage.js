import React  from "react"
import { graphql } from "gatsby"

const LandingPage = ({
  data: {
    contentfulLandingPage: {
      slug,
      description : { description },
      name,
    },
  },
}) => {

  return (
    <>
    <h1>name: {name}</h1>
    <p>{description && description}</p>
    <span>{slug}</span>
    </>
  )
}

export const templateQuery = graphql`
  query LandingPageQuery($id: String!) {
    contentfulLandingPage(id: { eq: $id }) {
      id
      slug
      name
      description { description }
    }
  }
`

export default LandingPage
