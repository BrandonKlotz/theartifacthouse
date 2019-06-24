import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'

// /^https://www/.test(item.url)

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <Link to={item.url}>
              <div
                className="feature-img"
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
                <div
                  className="feature-label"
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    padding: ".6em 1.2em .7em 1.2em",
                    letterSpacing: "4px",
                    backgroundColor: '#fff',
                    textAlign: 'center'
                  }}
                >
                  {item.text}
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      url: PropTypes.string
    })
  ),
}

export default FeatureGrid
