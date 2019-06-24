import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          backgroundColor: "#f9f8f7",
          borderBottom: "1px solid #ccc"
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              The Artifact House
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              style={{ borderLeft: "1px solid #ccc" }}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.etsy.com/shop/TheArtifactHouse"
                target="_blank"
              >
                SHOP
              </a>
              <Link className="navbar-item no-left-border" to="/events">
                EVENTS
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
