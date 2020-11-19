import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminNav from "./AdminNav"
import SuperAdminNav from './SuperAdminNav';

function Nav(props) {


  if (props.store.user.auth_level === "user") {
    return (
      <HashRouter>
        <h2 className="nav-title">Draw</h2>
        <div className="nav-div">
          <ul className="nav-list">
            <li className="inline-li"><Link className="nav-link-li" to="/home">Home</Link></li>
            <li className="inline-li"><Link className="nav-link-li" to="/gallery">Gallery</Link></li>
            <li className="inline-li"><Link className="nav-link-li" to="/home" onClick={() => props.dispatch({ type: 'LOGOUT' })}>Log Out</Link></li>
          </ul>
        </div>
        <div className="nav-line"></div>
      </HashRouter>
    );
  }

  if (props.store.user.auth_level === "admin") {
    return (
      <AdminNav />
    );
  }

  if (props.store.user.auth_level === "superAdmin") {
    return (
      <SuperAdminNav />
    );
  }

}

export default connect(mapStoreToProps)(Nav);