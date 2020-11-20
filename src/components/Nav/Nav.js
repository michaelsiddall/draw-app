import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminNav from "./AdminNav"
import SuperAdminNav from './SuperAdminNav';
import UserNav from "./UserNav"


function Nav(props) {


          if (props.store.user.auth_level === "user") {
                    return (
                          <UserNav/>
                    );
          }

          if (props.store.user.auth_level === "admin"){
                    return (
                          <AdminNav/>
                    );
          }

          if (props.store.user.auth_level === "superAdmin") {
                    return (
                          <SuperAdminNav/>
                    );
          }
}

export default connect(mapStoreToProps)(Nav);