import React from 'react';
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

          else if (props.store.user.auth_level === "admin"){
                    return (
                          <AdminNav/>
                    );
          }

          else if (props.store.user.auth_level === "superAdmin") {
                    return (
                          <SuperAdminNav/>
                    );
          }
          else if(props.store.user.id === null || props.store.user.id === "" || props.store.user.id === undefined){
                return null
          }
}

export default connect(mapStoreToProps)(Nav);