import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
// import pinterest from '../img/social/pinterest.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer"
        style={{
          backgroundColor:"#efefef",
          color: "#999"
        }}
      >
        <div className="content has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a href="https://www.etsy.com/shop/TheArtifactHouse" target="_blank">
                        Shop
                      </a>
                    </li>
                    <li>
                      <Link className="" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/events/">
                        Events
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="" to="/process">
                        Process
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com/theartifacthouse" target="_blank">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/theartifacthouse" target="_blank">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
