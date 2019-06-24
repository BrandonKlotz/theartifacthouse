import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  intro,
}) => (
  <div>
  </div>
)

EventsPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
}

const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EventsPage

export const pageQuery = graphql`
  query EventsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "events-page" } }) {

    }
  }
`
