import React  from "react"
import { graphql } from "gatsby"

const LandingPage = ({
  data: {
    contentfulBlogPost: {
      slug,
      description : { description },
      title,
    },
  },
}) => {

  return (
    <>
    <h1>title: {title}</h1>
    <p>{description && description}</p>
    <span>{slug}</span>
    </>
  )
}

export const templateQuery = graphql`
  query LandingPageQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      slug
      title
      description { description }
    }
  }
`

export default LandingPage
