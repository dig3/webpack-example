import React from 'react'
import { IndexLink, Link } from 'react-router'

import './Layout.scss'

const Layout = (props) => (
  <div className="container">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <span className="glyphicon glyphicon-globe"
              aria-hidden="true"
            ></span>
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/other">Other</Link></li>
        </ul>
      </div>
    </nav>
    {props.children}
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default Layout
