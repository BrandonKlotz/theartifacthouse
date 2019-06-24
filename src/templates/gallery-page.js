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

GalleryPageTemplate.propTypes = {
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

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GalleryPage

export const pageQuery = graphql`
  query GalleryPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {

    }
  }
`