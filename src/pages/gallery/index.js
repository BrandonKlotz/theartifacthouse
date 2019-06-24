import React from 'react'
import Layout from '../../components/Layout'

export default class GalleryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="full-width-image-container margin-top-0">
          <h1 className="has-text-weight-bold is-size-1">
            Gallery
          </h1>
        </div>
        <section className="section">
          <div className="container">
            {/* <div className="content border-box">
              <span style={{ width:'20%' }}>July 21</span><span style={{ width:'30%' }}>Grand Haven</span><span style={{ width:'50%' }}>Vandermill Merchants and Makers</span>
            </div>
            <div className="content border-box">
              <span style={{ width:'20%' }}>August 24</span><span style={{ width:'30%' }}>Grand Rapids</span><span style={{ width:'50%' }}>Made in Michigan Pop Up at the Downtown Market</span>
            </div>
            <div className="content border-box">
              <span style={{ width:'20%' }}>Aug 30 - 31</span><span style={{ width:'30%' }}>Holland</span><span style={{ width:'50%' }}>The Found Cottage Mercantile Market</span>
            </div>
            <div className="content border-box">
              <span style={{ width:'20%' }}>Sept 7</span><span style={{ width:'30%' }}>Grand Rapids</span><span style={{ width:'50%' }}>Eastown Streetfair</span>
            </div> */}
          </div>
        </section>
      </Layout>
    )
  }
}
