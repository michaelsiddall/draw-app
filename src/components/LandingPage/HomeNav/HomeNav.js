import { Home } from '@material-ui/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Link } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import "./HomeNav.css"

class HomeNav extends Component {
  

  render() {
    return (
          <HashRouter>
              <div id="home-nav-container">
                <Link to="/login"><span id="span-login">Login/Register</span></Link>
                </div>
          </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(HomeNav);
